var express = require('express');

var app = express();
//console.log(app);

var handlebars = require('express3-handlebars')
	.create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');	

app.set('port',process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
	res.render('home');

	//res.type('text/html');
	//res.send('Ask ok !');
});

var fortunes = [
	'Conquer your fears or they will conquer you',
	'Rivers need springs',
	'Do not fear what you dont know',
	'You will have a pleasant surprise.',
	'Whenever possible , keep it simple.'
];


app.get('/about',function(req,res){
	//res.type('text/plain');
	//res.send({'About page ok !':'hello'});
	var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

	res.render('about',{fortune:randomFortune});

});



app.use(function(req,res){

	//res.type('text/html');
	res.status(404);
	res.render('404');
	//res.send('404 - Not Found');
});

app.use(function(err,req,res,next){
	console.log(err.stack);
	res.type('text/html');
	res.status(500);
	res.send('500 - Server Error');
});

app.listen(app.get('port'),function(){
	console.log('Express start on port:' + app.get('port'));
});