const mysql = require('mysql2/promise');
const {
    Sequelize,
    Model,
    DataTypes
} = require('sequelize');

module.exports = async function main() {

    const dbConnection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'eoloplant'
    });

    const createEoloplantsDB = `create table if not exists eoloplants(
        id int primary key auto_increment,
        city varchar(255) not null,
        progress tinyint(1) not null default 0,
        completed BOOLEAN not null default FALSE,
        planning varchar(255)
    )`;
    console.log("Connected to MySQL");

    await dbConnection.query(createEoloplantsDB);
    console.log("Eoloplants table has been created");

    await dbConnection.execute(
        'INSERT INTO eoloplants SET city = ?, progress = ?, completed = ?, planning = ?', ['Madrid', '25', false, 'Madrid-Sunny-Flat']
    );
    console.log("City inserted");

    // TODO: Implement database connection close.
    // await dbConnection.close();
    // console.log("Connection closed");
}
