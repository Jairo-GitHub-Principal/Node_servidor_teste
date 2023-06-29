var express = require('express');
var app = express();

app.set('view engine','ejs');
app.use(express.static('public'))

app.get('/',function(req,res){
    res.render('../views/less.ejs');
})
app.listen(3001,"localhost",function(){
    console.log("execultando na porta 3001")
})


// configurar uma rota na raiz
/*
app.get('/',function(req,res){
    res.send("../views/less.ejs")
})*/



// iniciar servidor

//var server = app.listen(3001,function(){
//    let host=server.address().address;
//    let port=server.address().port;
    
//console.log('servidor iniciado em http://%s:%s',host,port)
//console.log("o host é: ",host)
//  console.log("a port é: ",port)

//})
