# Docker run commands

## MongoDB
`docker run -p 27017:27017 --name mongodb -d mongo:latest`

## MySQL
`docker run -d -p 3306:3306 --name mysql-db -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=eoloplant -h=localhost mysql:latest`

## RabbitMQ
`docker run --rm -d -p 5672:5672 -p 15672:15672 --name rabbitmq rabbitmq:3-management`
