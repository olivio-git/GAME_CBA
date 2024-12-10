MongoDB Docker Setup
This repository provides a guide to set up MongoDB using Docker, including Replica Set configuration for advanced features like transactions.

Prerequisites
Install Docker (on Arch-based systems):

bash
Copiar código
sudo pacman -S docker || yay -S docker
systemctl enable docker
systemctl start docker
systemctl status docker
Create a Docker volume:

bash
Copiar código
docker volume create mongodb_data
Setup MongoDB with Docker
Step 1: Create a Dockerfile
Create a file named Dockerfile with the following content:

dockerfile
Copiar código
FROM mongo:latest

# Configure the volume
VOLUME /data/db

# Expose the default MongoDB port
EXPOSE 27017

# Add the command to enable Replica Set
CMD ["mongod", "--replSet", "rs0"]

# Metadata labels
LABEL name=mongodb
LABEL description="MongoDB container"
Step 2: Build the Docker Image
Build the custom MongoDB Docker image:

bash
Copiar código
sudo docker build -t mongodb-custom .
Step 3: Run the MongoDB Container
Stop and remove any existing MongoDB containers:

bash
Copiar código
sudo docker stop mongodb
sudo docker rm mongodb
Run the new container:

bash
Copiar código
sudo docker run -d --name mongodb -p 27017:27017 -v mongodb_data:/data/db mongodb-custom
Verify the container is running:

bash
Copiar código
sudo docker ps
Step 4: Initialize the Replica Set
Access the MongoDB shell:

bash
Copiar código
sudo docker exec -it mongodb mongosh
Run the following command to initiate the Replica Set:

javascript
Copiar código
rs.initiate({
  _id: "rs0",
  members: [{ _id: 0, host: "localhost:27017" }]
});
Verify the Replica Set status:

javascript
Copiar código
rs.status();
Step 5: Check Logs
To ensure the Replica Set and MongoDB are functioning correctly, check the container logs:

bash
Copiar código
sudo docker logs mongodb
Usage
Run Tests:

bash
Copiar código
npm run test
Start Project:

bash
Copiar código
npm run dev || npm start
Troubleshooting
Issue: Transaction support not enabled.
Solution: Ensure the Replica Set is initialized (rs.status()) and the connection string includes ?replicaSet=rs0.
Versioning
Version: v1.0.0
License
2024 Author. All Rights Reserved.

