FROM node:18-alpine

RUN mkdir -p src/app

WORKDIR /src/app

COPY package.json yarn.lock /src/app/

RUN yarn install

COPY . /src/app

EXPOSE 9090

CMD [ "yarn", "start"]