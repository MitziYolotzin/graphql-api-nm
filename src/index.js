//require modulo express
//create server
//const express = require('express');
//// "start": "babel-node src/index.js "
import express from "express";
//middleware, enter a route with tool processed by graphql
import graphqlHTTP from "express-graphql";


const app = express();

app.get('/', (req, res) => {
    res.json({
        message:'hello'
    })
});

//visit route in the browser, process route with module
app.use('/graphql', graphqlHTTP({

}));

app.listen(3000, () => console.log('Server on port 3000'));

