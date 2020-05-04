FROM registry.access.redhat.com/ubi7/ubi

RUN curl -sL https://rpm.nodesource.com/setup_12.x | bash -
RUN yum install -y nodejs

RUN mkdir /app
WORKDIR /app

COPY package.json /app
RUN npm install --only=prod
COPY server /app/server
COPY public /app/public

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

CMD ["npm", "start"]
