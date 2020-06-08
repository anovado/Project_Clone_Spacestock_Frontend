
#!/bin/bash

eval "$(ssh-agent -s)" &&
ssh-add -k ~/.ssh/id_rsa &&
#cd /coba-coba/www/Portfolio-E-Commerce #helloworld
#git pull

source ~/.profile
echo "$DOCKER_PASSWORD" | docker login --username $DOCKER_USERNAME --password-stdin
sudo docker stop spacestockfe
sudo docker rm spacestockfe
sudo docker rmi andrenovado/spacestock:latest
sudo docker run -d --name spacestockfe -p 8443:80 andrenovado/spacestock:latest

