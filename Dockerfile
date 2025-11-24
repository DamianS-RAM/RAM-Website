# Etapa 1: Build de la aplicación React
FROM node:20-alpine AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm ci --silent

# Copia el resto del código
COPY . .

# Crea el build de producción
RUN npm run build

# Etapa 2: Servir con Nginx
FROM nginx:alpine

# Copia el build de React a Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copia la configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expone el puerto 80
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]