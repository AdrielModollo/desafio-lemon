FROM node:16.13.0-alpine

WORKDIR /usr/src/lemon

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD [ "npm", "start"]