FROM node:22.2.0-alpine as builder

WORKDIR /app

COPY . .

RUN npm install
RUN npm run database:generate
RUN npm run build

FROM node:22.2.0-alpine as runtime

WORKDIR /app

COPY --from=builder ./app/.next /app/.next
COPY --from=builder ./app/prisma /app/prisma
COPY --from=builder ./app/next.config.mjs /app/next.config.mjs
COPY --from=builder ./app/package.json /app/package.json
COPY --from=builder ./app/package-lock.json /app/package-lock.json

RUN npm install --omit=dev
RUN npm run database:generate

CMD ["/bin/ash", "-c", "npm run database:migrate && npm start"]
