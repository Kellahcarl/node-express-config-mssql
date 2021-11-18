 const DB = require('./config/dboperations')

 async function getDBUsersAsyncFunction() {
     try {
         let data = await DB.query(` 
         SELECT
        product_name,
        list_price
        FROM
            production.products
        WHERE
            list_price IN (89.99, 109.99, 159.99)
        ORDER BY
            list_price;
         `)
         console.log(data.recordset[0])
     } catch (error) {
         console.log(error.message)
     }
 }

 getDBUsersAsyncFunction();