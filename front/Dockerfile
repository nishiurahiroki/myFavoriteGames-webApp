FROM node:8.0

RUN mkdir /app
ADD . /app
WORKDIR /app


RUN apt-get update -y && apt-get upgrade -y
RUN apt-get install apt-transport-https
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update -y && apt-get install yarn -y

RUN yarn

CMD ["cd", "/app"]
CMD ["yarn", "run", "watch"]