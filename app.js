const express = require("express");
const bodyParser = require('body-parser');
const morgan = require('morgan');
const hbs = require('express-handlebars');



const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//setting public folder
app.use(express.static('public'));

//MIDDLEWARES
if(process.env.NODE_ENV="development"){
	app.use(morgan('dev'));
};



//view engines
app.set('view engine','hbs');





app.engine('hbs',hbs({
		extname:'hbs',
	layoutDir:`${__dirname}/views/layout`,
	layoutDir:`${__dirname}/views/partials`,
	defaultLayout:'index'

}));

//HOME ROUTE
app.get('/',(req,res)=>{
  res.render("form",{
		layout:"index"
	});
});

//name ke through hm parameter paas kr rhe hain isse index.hbs file me jahan name variable hoga
//wahan 'tej' show hoga
//yahan agar hm body2 render krenge to body ka content show hoga




//isi tarah alag alag route pr alag alag file render kr skte hain


app.post('/uploads',(req,res)=>{

     const name = req.body.name;
	 const personid = req.body.personid;
		//console.log({name,personid});
		res.render("home",{
			name:name,
			id:personid
		});
	

});









module.exports = app;
