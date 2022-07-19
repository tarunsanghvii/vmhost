const express = require('express');

const app = express();

app.get('/',(req,res) => {
    res.send('<h1>This is hosting</h1>');
});

app.listen(5000, ()=> {
    console.log('Listening on port 5000');
});