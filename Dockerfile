FROM node:14-alpine

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5000

CMD ["node", "build/server.js"]
