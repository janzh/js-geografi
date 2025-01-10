# syntax=docker/dockerfile:1.8

########################################################################
### Stage 1: Build the app
########################################################################
FROM node:23.5-alpine3.20 AS build

WORKDIR /app
RUN chown -R node:node /app
RUN chmod -R 744 /app

ENV PATH=/app/node_modules/.bin:$PATH

RUN apk update --no-cache && \
  apk upgrade --no-cache

USER node

COPY package* ./
RUN npm ci

COPY . .
RUN npm run build

########################################################################
### Stage 2: Serve the app
########################################################################
FROM nginxinc/nginx-unprivileged:1.27.0-alpine3.19

### <betterstack> ###
# Basert på tips fra https://stackoverflow.com/questions/63046301/how-to-run-cron-as-non-root-in-alpine
USER root

RUN apk update && \
  apk upgrade && \
  apk --no-cache add dcron libcap

RUN mkdir /home/nginx && \
  chown nginx /home/nginx

RUN chown nginx:nginx /usr/sbin/crond && \
  setcap cap_setgid=ep /usr/sbin/crond

RUN touch /home/nginx/cron.log && \
  chown nginx:nginx /home/nginx/cron.log

# Brukerspesifikke Cron-jobber må ligge under /var/spool/cron/crontabs
COPY --from=build --chown=nginx /app/config/docker/crontab /var/spool/cron/crontabs/nginx
RUN crontab -u nginx /var/spool/cron/crontabs/nginx
### </betterstack> ###

USER nginx
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD curl -f http://localhost:8080/health || exit

EXPOSE 8080
ENTRYPOINT ["entrypoint.sh"]

COPY --from=build --chown=101 /app/scripts/entrypoint.sh /usr/bin/entrypoint.sh
RUN chmod +x /usr/bin/entrypoint.sh

COPY --from=build /app/config/docker/nginx-default.conf /etc/nginx/conf.d/default.conf
COPY --from=build --chown=101 /app/dist /usr/share/nginx/html/
