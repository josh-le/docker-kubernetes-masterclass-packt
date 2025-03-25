FROM node:22-alpine as build

WORKDIR /app

COPY package* .
RUN npm ci

# copying src/, public/, and tsconfig.json
COPY . .
RUN npm run build

# run stage
FROM nginx:1.27.0

COPY --from=build /app/build /usr/share/nginx/html
