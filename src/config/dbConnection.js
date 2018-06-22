const mysql = require('mysql');

module.exports = () => {
	return mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'nanita',
		database:'NEWS_PORTAL_NODEJS'
	});
}
