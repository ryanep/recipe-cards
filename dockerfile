FROM node:14.0.0-alpine
WORKDIR /app
COPY package.json ./
COPY ./.next ./.next
EXPOSE 3000
RUN yarn --production
CMD yarn start
