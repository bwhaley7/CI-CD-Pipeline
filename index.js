const express = require('express')
const app = express()
const port = 3000;

app.get('/', (req, res) => {
    res.send('testing func');
});

const server = app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
    server.close(); //close server after opening. Not practical, demonstration purposes only.
});