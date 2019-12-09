FROM node:13.3.0

WORKDIR /
COPY package*.json ./
RUN npm install
COPY . ./
EXPOSE 8080
CMD [ "npm", "start" ]