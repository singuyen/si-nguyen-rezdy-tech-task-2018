# build static files
FROM node:alpine as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --silent
COPY . .
RUN npm run build

# final image
FROM node:alpine
WORKDIR /usr/src/app
COPY . /usr/src/app
USER node
EXPOSE 8080
CMD [ "npm", "start" ]