const express = require('express')
const app = express()
const port = 3000;

app.get('/', (req, res) => {
    res.send('testing func');
});

app.listen(port, () => {
    console.log('App running at http://localhost:${port}');
});