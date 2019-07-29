const fs = require('fs');
const dbConnection = require('./db_connection');

const sql = fs.readFileSync(`${__dirname}/db_sql.sql`).toString();

dbConnection.query(sql, (err, res) => {
	console.log(err);
	if (err) throw err;
	console.log('res', res);
});
