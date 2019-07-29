// write the query to post the data into Database
const dbConnection = require('../db_connection');

const addData = (name, country, cb) => {
	dbConnection.query(`insert into cities(name,country)values($1,$2)`, [ name, country ], (err, result) => {
		if (err) {
			return cb(err);
		}
		cb(null, result.rows);
	});
};
module.exports = addData;
