FROM node:alpine

RUN mkdir /work/app

WORKDIR /work/app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]