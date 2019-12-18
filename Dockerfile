FROM registry.access.redhat.com/ubi8/nodejs-10

# Change working directory
WORKDIR /app

## NOTE - rhel enforces user container permissions stronger ##
# Install npm production packages
USER root
COPY --chown=1001:1001 package.json /app/
RUN cd /app
RUN npm install --production
COPY --chown=1001:1001 . /app
USER 1001

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

CMD ["npm", "start"]