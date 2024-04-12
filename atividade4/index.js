const express = require('express');
const app     = express();
const calc = require('./util/calculadora')

app.get('/somar/:a/:b',function(req,res){
let a = req.params.a;
let b = req.params.b;
let c =calc.somar(a,b);
    res.send(`${a}+ ${b}= ${c}`);
});

app.get('/subtrair/:a/:b',function(req,res){
    let a = req.params.a;
    let b = req.params.b;
    let c =calc.subtrair(a,b);
        res.send(`${a}- ${b}= ${c}`);
    });
    app.get('/multiplicar/:a/:b',function(req,res){
        let a = req.params.a;
        let b = req.params.b;
        let c =calc.multiplicar(a,b);
            res.send(`${a}* ${b}= ${c}`);
        });
        app.get('/dividir/:a/:b',function(req,res){
            let a = req.params.a;
            let b = req.params.b;
            let c =calc.dividir(a,b);
                res.send(`${a}/ ${b}= ${c}`);
            });

const PORT = 8080;

app.listen(PORT, function(){
console.log('app rodando na porta'+PORT)
});