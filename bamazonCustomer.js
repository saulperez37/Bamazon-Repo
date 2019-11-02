let mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "mypassword",
    database: "bamazon_db"
});

connection.connect(function (error) {
    if (error) {
        throw error;
    }
    console.log(`Successfully connected as id ${connection.threadId}`);

    connection.end();
});
