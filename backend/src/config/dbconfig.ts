import { Sequelize } from "sequelize";

const dbName = process.env.DB_NAME || '';
const dbHost = process.env.DB_HOST || '';
const dbUser = process.env.DB_USER || '';
const dbPassword = process.env.DB_PASSWORD || '';
const dbPort= parseInt(process.env.PORT || '3000');

export const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: 'mysql',
    port: dbPort,
});