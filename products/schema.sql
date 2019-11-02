CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
item_id INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR(100),
department_name VARCHAR(100),
price DECIMAL(6,2),
stock_quantity INT,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("55 inch Samsung Smart TV", "Electronics", 599.98, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Carhartt Jacket", "Clothing", 88.59, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Apple iPhone 11", "Electronics", 1099.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Herman Miller Office Chair", "Office", 899.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Table Lamp", "Furniture", 12.75, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jansport Backpack", "Backpacks", 25.89, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Skull Candy Headphones", "Electronics", 89.98, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nike Air Jordans", "Footwear", 129.79, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Field Notes Notebooks", "Supplies", 9.90, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hurley T-shirt", "Clothing", 11.95, 30);

SELECT* FROM products;





