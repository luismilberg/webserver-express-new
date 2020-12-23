const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers.js'); 

const port = process.env.PORT || 3000;

app.use( express.static(__dirname+'/public'));


//Express HBS Engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');




app.get('/', (req, res) => {

    res.render('home', {
        name: 'luis milberg'
    });
    
});

app.get('/about', (req, res) => {

    res.render('about');
    
});

// app.get('/data', (req, res) => {

//       res.send('Hola Data');
        
//     })
 
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`)
});