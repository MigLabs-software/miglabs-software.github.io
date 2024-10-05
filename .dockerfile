# Suggested code may be subject to a license. Learn more: ~LicenseLog:3364028176.
FROM node:16-alpine as build

WORKDIR /app

COPY package*.json ./
RUN bun install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html