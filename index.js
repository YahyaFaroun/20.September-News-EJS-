//Verwende Express & Verweis
const express = require('express')
//Express Aktivieren
const app = express()
//EJS Aktivieren
app.set('view engine', 'ejs')

//News-Data einbinden
const newsData = require('./newsData.json')


//Server abhören
app.listen(3008, () => {
    console.log('listening at 3008');
})


//Um Public Ordner zu verwenden
app.use(express.static('public'))


//Routing
app.get('/', (req, res) => {
    res.render('index', { newsData: newsData })
})

//404
// app.use((req, res) => {
//     res.render('404')
// })
