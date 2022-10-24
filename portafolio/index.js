
const express = require('express')
const app = express()
const port = 3000
app.use(express.static(__dirname + '/public'));
app.use(express.static("public")); 
app.set('view engine' , 'ejs')

app.set('views', __dirname + '/views' )


    app.get('/perfil', function(req, res){
        res.render('perfil');
      });

app.get('/Experiencia', (req, res) => {

    res.render('Experiencia')
      });

app.get('/Estudios', (req, res) => {
    res.render('Estudios');
      });


app.use((req, res , next) =>{
    res.status(404).sendFile(__dirname + '/public/404.html')
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)


})
