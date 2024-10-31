import { ReactElement, useEffect, useState } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ErrorPage(): ReactElement {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center relative">
        <div
          className="absolute w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 2}px, ${
              mousePosition.y * 2
            }px)`,
            transition: "transform 0.3s ease-out",
            top: "-100px",
            left: "0px",
          }}
        />
        <div
          className="absolute w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -2}px, ${
              mousePosition.y * -2
            }px)`,
            transition: "transform 0.3s ease-out",
            bottom: "-100px",
            right: "0px",
          }}
        />

        <div
          className="text-9xl font-bold text-white mb-8 relative"
          style={{
            transform: `translate(${mousePosition.x / 4}px, ${
              mousePosition.y / 4
            }px)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          404
        </div>

        <h1 className="text-3xl font-semibold text-white mb-4">
          Oups! Page non trouvée
        </h1>

        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          La page que vous recherchez semble avoir disparu dans le cyberespace.
          Ne vous inquiétez pas, même les meilleurs d&apos;entre nous se perdent
          parfois...
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
          >
            <Home className="mr-2 h-5 w-5" />
            Retour à l&apos;accueil
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-200"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Page précédente
          </button>
        </div>
      </div>
    </div>
  );
}
