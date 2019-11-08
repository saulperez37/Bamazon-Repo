# Bamazon APP

Bamazon is a storefront app created with MySQL and Node.js.The MySQL database consists of a table that contains columns showing a unique id for each product, product name, department each product belongs to, product price and stock quantity.

Running this application will first display all of the items available for sale. The table displayed includes the ids, names and prices of products for sale.

![table-image](/table.png)

The app then prompts customers with two messages. The first asks for the ID of the product the customer would like to buy. The second message asks how many units of the product the customer would like to buy.

*IMAGE HERE*

Once the customer has placed the order, the application checks if the store has enough of the product to meet the customer's request. If the store does have enough of the product, the customer's order will be fulfilled and the app will show the customer the total cost of their purchase. The SQL database will then update to reflect the remaining quantity in the database table.

*IMAGE HERE*

If not, the app will notify the customer that there is insufficient quantity for the product and will prevent the order from going through.

*IMAGE HERE*

