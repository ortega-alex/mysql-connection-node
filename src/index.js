const app = require('./config/server');

require('./app/routes/news')(app);

//starting the serve 
app.listen(app.get('port') , () =>{
	console.log('server in port', app.get('port'));
})