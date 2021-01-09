# Docker run commands

## MongoDB
`docker run -p 27017:27017 --name mongodb -d mongo:latest`

## MySQL
`docker run -d -p 3306:3306 --name mysql-db -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=eoloplant -h=localhost mysql:latest`
