import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config(); 

const db = new Sequelize(
    "myapp_db",
    "myuser", 
    "mypassword", 
    {
    host: "localhost",  // Use MySQL container name from Docker
    dialect: "mysql",
    logging: true, // Disable logging (optional)
});



export default db;
