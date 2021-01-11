import mysql2 from 'mysql2';
import seq from 'sequelize';
const { Sequelize, QueryTypes, Model, DataTypes } = seq;
export {Model, DataTypes};

export const sequelize = new Sequelize('eoloplant', 'root', 'root', {
    dialect: 'mysql',
    dialectModule: mysql2,
    logging: false,
    define: {
        timestamps: false
    }
});

export async function initDB() {
    const createEoloplantsDB = `create table if not exists eoloplant(
        id int primary key auto_increment,
        city varchar(255) not null,
        progress tinyint(1) not null default 0,
        completed BOOLEAN not null default FALSE,
            planning varchar(255)
        )`;

    try {
        await sequelize.sync({ force: true });
    } catch (err) {
        console.log('An error occurred while creating the table:', err);
    }

    sequelize.query(createEoloplantsDB, { type: QueryTypes.INSERT });

    process.on('exit', async () => {
        await sequelize.close();
        debug(`Closing mysql connection`);
    });

    return sequelize;
}
