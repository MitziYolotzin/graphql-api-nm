//require modulo express
//create server
//const express = require('express');
//// "start": "babel-node src/index.js "
import express from "express";
//middleware, enter a route with tool processed by graphql, integrate graphql in express
import graphqlHTTP from "express-graphql";
import schema from "./schema";
import { connect } from './database';


const app = express();
connect();

app.get('/', (req, res) => {
    res.json({
        message: 'hello'
    })
});

//object, define allow consult
//const schema = {};

//visit route in the browser, process route with module, data response
//context, pass data to resolvers, for example user Auth, connection chain 
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
    context: {
        messageId: 'test'
    }

}));


app.listen(3000, () => console.log('Server on port 3000'));

