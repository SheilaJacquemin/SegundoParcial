FROM node:latest

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

EXPOSE 4500

CMD ["npm", "run", "dev"]