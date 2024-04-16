FROM node:16.14.0-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package.json ./

RUN npm install -g @angular/cli 

RUN npm install

COPY . .

EXPOSE 4200

CMD ["npm", "start"]
