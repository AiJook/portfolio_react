# Stage 1: Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Production stage (ใช้ Nginx เพื่อความเบาและรวดเร็ว)
FROM nginx:alpine
# ก๊อปปี้ไฟล์ที่ Build เสร็จจาก Stage 1 ไปไว้ในโฟลเดอร์ของ Nginx
COPY --from=builder /app/dist /usr/share/nginx/html
# ก๊อปปี้ไฟล์ตั้งค่า Nginx (ถ้ามี)
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]