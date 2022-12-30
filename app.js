const express = require('express')
const hbs=require('hbs')
require('dotenv').config()
const app = express()
const port=process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname='views/partials')
//servir contenido estático
app.use(express.static('public'));

  

app.get('/', 
        (req,res)=>{
          res.render('home',{nombre:'Julieta Gutiérrez', 
                             titulo:"Curso de Node"});
        }
       );

app.get('/generic', 
 (req,res)=>{
   res.render('generic',{nombre:'Julieta Gutiérrez', 
                      titulo:"Curso de Node"});
 }
);    

app.get('/element', 
        (req,res)=>{
          res.render('elements',{nombre:'Julieta Gutiérrez', 
                             titulo:"Curso de Node"});
        }
       );


app.listen(port)