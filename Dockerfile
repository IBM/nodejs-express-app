FROM registry.access.redhat.com/ubi8/ubi

RUN curl -sL https://rpm.nodesource.com/setup_12.x | bash -
RUN yum install -y nodejs

WORKDIR /app

COPY package.json /app/src
RUN npm install --only=prod
COPY server /app/src/server
COPY public /app/src/public

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

CMD ["npm", "start"]
