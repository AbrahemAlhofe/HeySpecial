FROM node:16-alpine

WORKDIR /hey-special

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]