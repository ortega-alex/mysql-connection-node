const dbConnection = require('../../config/dbConnection'); 

module.exports = app => {

	const connection = dbConnection();

	connection.connect(function(err) {
  		if (err) {
    		console.error('error connecting: ' + err.stack);
    		return;
  		}

  	    console.log('connected as id ' + connection.threadId);
	});

	app.get('/',( req, res) => {
		connection.query('SELECT * FROM NEWS' , () => (err , result ) =>{
			res.render('news/news' , {
				news : result
			});			
		});	
	});

	app.post('/news' , (req , res) => {
		const { title , news } = req.body;
		connection.query('INSERT INTO NEWS SER?' , {
			title,
			news
		} , (err , result) => {
			res.redirect('/');
		})
	})
}