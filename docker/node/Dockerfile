FROM node:12
WORKDIR /usr/src/app
LABEL authors="mva"

COPY package.json ./

RUN npm install

COPY . .

CMD ["node", "server.js"]