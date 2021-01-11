const { spawnSync } = require('child_process');

function execDockerCommands() {
    spawnSync('docker run -p 27017:27017 --name mongodb -d mongo:latest');
    spawnSync('docker run -d -p 3306:3306 --name mysql-db -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=eoloplant -h=localhost mysql:latest');
    spawnSync('docker run --rm -d -p 5672:5672 -p 15672:15672 --name rabbitmq rabbitmq:3-management');
}

function exec(serviceName, command){

    console.log(`Stated service [${serviceName}]`);

    let cmd = spawnSync(command, [], { cwd: './' + serviceName, shell: true });
    cmd.stdout.on('data', function(data){
        process.stdout.write(`[${serviceName}] ${data}`);
    });

    cmd.stderr.on('data', function(data){
        process.stderr.write(`[${serviceName}] ${data}`);
    });
}

execDockerCommands();
exec('weatherservice', 'npm start');
exec('toposervice', 'mvn spring-boot:run');
exec('server','npm start');
exec('planner','mvn spring-boot:run');
