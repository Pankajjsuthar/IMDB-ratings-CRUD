FROM node:alpine

WORKDIR /frontend

# Clean up old node_modules and package-lock.json if they exist
RUN rm -rf node_modules package-lock.json

COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
