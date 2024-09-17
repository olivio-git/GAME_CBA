Docker + MongoDb

Install docker:
    sudo pacman -S docker || yay -S docker
    systemctl enable docker
    systemctl start docker
    systemctl status docker

Create volume in docker:
    docker volume create mongodb_data
Create file in local desktop:
    nvim Dockerfile
    -----------------------
    FROM mongo:latest

    # Moveremos los datos al volumen creado
    VOLUME /data/db

    # Exponer el puerto 27017
    EXPOSE 27017

    # Nombre del contenedor
    LABEL name=mongodb
    LABEL description="MongoDB container"

    sudo docker build -t mongodb-custom .

    sudo docker run -d --name mongodb -p 27017:27017 -v mongodb_data:/data/db mongodb-custom

    sudo docker ps
Start Test: npm run test
Start Project: npm run dev || npm start

2024 Author. All Rights Reserved.
