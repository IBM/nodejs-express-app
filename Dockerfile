FROM registry.access.redhat.com/ubi8/nodejs-12
WORKDIR /opt/app-root/src

COPY package.json /opt/app-root/src
COPY server /opt/app-root/src/server
COPY public /opt/app-root/src/public

RUN cd /opt/app-root/src
RUN npm install --only=prod

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

CMD ["npm", "start"]