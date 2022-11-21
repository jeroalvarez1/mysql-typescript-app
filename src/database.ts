import { createPool } from "mysql2/promise";

//Funcion para conectarnos a mysql y hacer consultas
export async function connect() {
    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'node_mysql_ts',
        connectionLimit: 10
    });
    return connection;
}