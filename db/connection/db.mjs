import * as mysql from 'mysql2';

export default  function myConnection() {
    const db =  mysql.createConnection (
        {
            host: "localhost",
            user: "root",
            password: "root",
            database: "alarma_azul"
        }
    )
    return db
}