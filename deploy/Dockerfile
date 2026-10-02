# Multi-stage lightweight Dockerfile for tideline.holzapfel-online.de

# Stage 1: Build static assets
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* pnpm-lock.yaml* ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

# Stage 2: Serve with minimal Nginx Alpine (< 25MB total footprint)
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
