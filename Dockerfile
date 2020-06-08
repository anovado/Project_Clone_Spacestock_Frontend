FROM nginx:stable
MAINTAINER Your Name "novado@alterra.id"

RUN mkdir -p /deploy/www/Project_Clone_Spacestock_Frontend
RUN mkdir -p /deploy/log

COPY default.conf /etc/nginx/conf.d/
ADD build/. /deploy/www/Project_Clone_Spacestock_Frontend/

WORKDIR /deploy/www/Project_Clone_Spacestock_Frontend
