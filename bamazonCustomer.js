let mysql = require("mysql");
let Table = require('cli-table');
let inquirer = require("inquirer");

var connection = mysql.createConnection({
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

    displayTable();
});

function displayTable() {
    const sqlQuery = "SELECT * FROM products";

    connection.query(sqlQuery, function (error, result) {
        if (error) {
            throw error;
        }

        let productTable = new Table({
            head: ['Item ID', 'Product Name', 'Price'],
            colWidths: [10, 30, 10]
        });

        for (let i = 0; i < result.length; i++) {
            productTable.push([result[i].item_id, result[i].product_name, result[i].price]);
        }

        console.log(productTable.toString());
        selectProduct();
    });
};

function selectProduct() {
    inquirer.prompt([
        {
            name: "item",
            type: "input",
            message: "Please enter the ID of the item you wish to purchase.",
            filter: Number
        },
        {
            name: "quantity",
            type: "input",
            message: "How many of these items would you like to purchase.",
            filter: Number
        },
    ])
        .then(function (answers) {
            let requestedItem = answers.item;
            let requestedQuantity = answers.quantity
            purchaseProduct(requestedItem, requestedQuantity);
            // connection.end();
        });
};

function purchaseProduct(item, qtyRequested) {
    const sqlQuery = `SELECT * FROM products WHERE item_id = ${item}`;
    connection.query(sqlQuery, function (error, results) {
        if (error) {
            throw error;
        }
        if (qtyRequested <= results[0].stock_quantity) {
            let total = results[0].price * qtyRequested;
            console.log('');
            console.log(`=*=*=*=*=*=*=*= This item is in stock! =*=*=*=*=*=*=*=`);
            console.log('');
            console.log(`Your total cost ${qtyRequested} ${results[0].product_name} is ${total}.`);
            console.log('');
            console.log(`=*=*=*=*=*=*= Thank You For Your Order! =*=*=*=*=*=*=`);
            console.log('');

            connection.query(`UPDATE products SET stock_quantity = stock_quantity - ${qtyRequested} WHERE item_id = ${item}`);
        } else {
            console.log(`-!-!-!-!-!-!-!- INSUFFICIENT QUANTITY! Sorry, we do not have enough ${results[0].product_name} to complete your order. -!-!-!-!-!-!-!-`);
        };
        displayTable();
    });
};

