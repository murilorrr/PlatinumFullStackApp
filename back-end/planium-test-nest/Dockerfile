FROM node:16-alpine
WORKDIR /back-end/platinum-test-nest/
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["node", "./dist/src/main.js" ]