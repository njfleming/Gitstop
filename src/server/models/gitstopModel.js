const { Pool } = require('pg')
const myURI = "postgres://msijennx:T-whLYpdB43o7cBf0vDN2-bnI6GA2RBq@queenie.db.elephantsql.com:5432/msijennx"

const URI = process.env.DB_URI || myURI
const db = new Pool({
    connectionString: URI
})

module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        return db.query(text, params, callback);
    }
}