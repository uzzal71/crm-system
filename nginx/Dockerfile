# nginx/Dockerfile
FROM nginx:latest

# Copy the Nginx configuration files
COPY nginx.conf /etc/nginx/nginx.conf
COPY backend.conf /etc/nginx/conf.d/backend.conf
COPY frontend.conf /etc/nginx/conf.d/frontend.conf

# Expose ports
EXPOSE 80
