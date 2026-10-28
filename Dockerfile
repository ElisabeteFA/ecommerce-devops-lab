# Usa uma imagem leve do Node.js
FROM node:20-alpine

# Define a pasta de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependencias
COPY package*.json ./

# Instala as dependencias
RUN npm install --only=production

# Copia o restante do codigo
COPY . .

# Expõe a porta 3000
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]