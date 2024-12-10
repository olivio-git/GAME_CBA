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


v 1.0.0
mkdir dockerfile
-----------------
FROM mongo:latest

# Configuramos el volumen
VOLUME /data/db

# Exponer el puerto
EXPOSE 27017

# Agregar el comando para habilitar Replica Set
CMD ["mongod", "--replSet", "rs0"]
-----------------
cmd
sudo docker build -t mongodb-custom .
sudo docker stop mongodb
sudo docker rm mongodb

sudo docker run -d --name mongodb -p 27017:27017 -v mongodb_data:/data/db mongodb-custom
sudo docker exec -it mongodb mongosh

rs.initiate({
  _id: "rs0",
  members: [{ _id: 0, host: "localhost:27017" }]
});


rs.status();

sudo docker logs mongodb
------------------------

2024 Author. All Rights Reserved.
