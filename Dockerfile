FROM node:16-bookworm-slim AS build-stage

WORKDIR /app
COPY ./client/package*.json ./client/

WORKDIR /app/client
RUN npm install

COPY ./client .
RUN npm run build

FROM node:16-bookworm-slim
WORKDIR /app

COPY ./server/package*.json ./server/
WORKDIR /app/server
RUN npm install

COPY ./server .
COPY --from=build-stage /app/client/build ./public

RUN chown -R node:node /app
USER node

EXPOSE 8080
ENV PORT=8080
ENV NODE_ENV=production

CMD ["npm", "start"]

HEALTHCHECK CMD curl --fail http://localhost:8080 || exit 1  
