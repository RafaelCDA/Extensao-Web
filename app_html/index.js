const express = require('express');
const app = express();
const mustache = require('mustache-express');

app.engine('html',mustache());
app.set('view engine','html');
app.set('views',__dirname+'/views');


app.get('/',function(req,res){
   let nome = "Pedro";
    res.render('index.html',{nome});
});
app.get('/contato',function(req,res){
   res.render('contato.html',);
 });
const PORT = 8080;
app.listen(PORT,function(){
    console.log('APP rodando na porta: '+PORT);
});