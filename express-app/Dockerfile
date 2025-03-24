FROM node:22-alpine

WORKDIR /app

# copy package.json and package-lock.json
COPY package*.json .
# install dependencies
RUN npm ci
# copy source code
COPY src/index.js index.js
# expose application port
EXPOSE 3000
# start application
CMD [ "node", "index.js" ]
