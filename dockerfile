FROM node:20-alpine

WORKDIR /app

COPY package.json ./package.skon
COPY package-lock.json ./package-lock.json
COPY public ./public
COPY ./next.config.js ./next.config.js
COPY ./.next ./.next

EXPOSE 3000

RUN npm install --production

CMD npm start
