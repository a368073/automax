FROM node:18

WORKDIR /app

COPY server/ ./server/

EXPOSE 8888

CMD ["node", "server/app.js"]