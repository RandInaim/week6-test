// write the query to get the data from Database

const dbConnection = require('../db_connection');
const getData = (cb) => {
	dbConnection.query('select name,country from cities', (err, result) => {
		if (err) {
			return cb(err);
		}
		cb(null, result.rows);
	});
};
module.exports = getData;
