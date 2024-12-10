# MongoDB Docker Setup

A comprehensive guide to set up MongoDB with Docker, including Replica Set configuration to enable advanced features like transactions.

---

## 🚀 Prerequisites

Make sure Docker is installed and running on your system. For Arch-based Linux distributions, you can install Docker using:

```bash
sudo pacman -S docker || yay -S docker
systemctl enable docker
systemctl start docker
systemctl status docker


docker volume create mongodb_data


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

sudo docker build -t mongodb-custom .

sudo docker stop mongodb
sudo docker rm mongodb


sudo docker run -d --name mongodb -p 27017:27017 -v mongodb_data:/data/db mongodb-custom


sudo docker ps


sudo docker exec -it mongodb mongosh


rs.initiate({
  _id: "rs0",
  members: [{ _id: 0, host: "localhost:27017" }]
});



rs.status();



sudo docker logs mongodb

//
mongodb://localhost:27017/?replicaSet=rs0
