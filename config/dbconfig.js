const config = {
    server: "localhost",
    port: 1433,
    user: "SA",
    password: "@98Barakanus",
    database: "BikeStores",
    // Trusted_Connection=True,

    options: {
        enableArithAbort: true,
        trustServerCertificate: true,
    },

    connectionTimeout: 150000,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
    },
};

module.exports = config;