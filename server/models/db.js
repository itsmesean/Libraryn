const {Pool} = require('pg');

const PG_URI = 'postgres://woddmwgi:upKS40zpldhBfxDcHCzkUaX0KILdZEkd@suleiman.db.elephantsql.com:5432/woddmwgi'
const pool = new Pool ({
    connectionString: PG_URI
});


module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text,params,callback);
    }
};