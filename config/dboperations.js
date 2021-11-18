const sql = require("mssql");
const config = require('./dbconfig');

const connection = async() => {
    let pool = null;

    try {
        pool = sql.connect(config);
        console.log('Database connected successfully');
    } catch (error) {
        pool = null;
        console.log('Error: ', error);
    }
    return pool;

};
const querying = async(query) => {
    const ourPool = await connection();
    const results = ourPool.request().query(query);
    return results;
    // pool = sql.close();
};

module.exports = {
    query: querying
}