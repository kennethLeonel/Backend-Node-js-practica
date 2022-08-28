const { dbUser, dbPassword, dbHost, dbName } = require("./configuracion");

const  mongoose = require("mongoose");

const connection = async () => {
    const conn = await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}`);
    console.log("Conectado a la base de datos:", conn.connection.host);
};

module.exports = {connection, mongoose};