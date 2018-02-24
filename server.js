const express = require('express');
const hbs = require('hbs');
app = express();
app.use(express.static(__dirname+'/public'));
hbs.registerPartials(__dirname+'/views/partials');
app.get('/',(req,res)=>{
    res.render('home.hbs',{
        pageTitle:'home page',
        currentYear: '2018'
    });
});
app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        pageTitle:'about page',
        currentYear: '2018'
    });
});

app.listen(3000);