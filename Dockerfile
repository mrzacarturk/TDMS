# Node.js 24 Alpine tabanlı imaj
FROM node:24-alpine

WORKDIR /usr/src/app

# package.json ve lock dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Kodları mount edeceğimiz için burada COPY yok
# Kodları Windows’tan volume ile bağlayacağız

# Development mode: NestJS hot reload
CMD ["npm", "run", "start:dev"]