const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log(req);
    res.status(200).sendFile(__dirname + '/views/index.html');
})

app.get('/about', (req, res) => {
    console.log(req);
    res.status(200).sendFile(__dirname + '/views/about.html');
})

app.get('/works', (req, res) => {
    console.log(req);
    res.status(200).sendFile(__dirname + '/views/works.html');
})

app.get('/gallery', (req, res) => {
    console.log(req);
    res.status(200).sendFile(__dirname + '/views/photogallery.html');
})

app.listen(3000, () => { console.log('App running on port 3000') });