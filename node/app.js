const express=require('express')
const exphbs=require('express-handlebars');


var app=express()
app.engine('handlebars',exphbs());

app.set('view engine', 'handlebars')

//app.use(express.static('views/static')); 


app.get('/',(req,res)=>{

    res.render('index')

})

app.get('/getdata',(req,res)=>{
    res.send(
        {"name":"Tom","age":22}
    )
})


app.listen(3000,()=>{
    console.log('Started on http://localhost:3000')
})