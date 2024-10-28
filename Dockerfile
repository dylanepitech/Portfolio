FROM node:18-alpine as builder

WORKDIR /app


COPY package*.json ./
COPY tsconfig*.json ./ 
COPY vite.config.ts ./
COPY tailwind.config.js ./
COPY postcss.config.js ./


RUN npm ci


COPY src/ ./src/
COPY public/ ./public/
COPY index.html ./


RUN npm run build


FROM nginx:alpine


COPY nginx.conf /etc/nginx/conf.d/default.conf


COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]