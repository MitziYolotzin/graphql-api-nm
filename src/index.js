//requerir modulo express
//para crear un servidor
//const express = require('express');
//// "start": "babel-node src/index.js "
import express from "express";
import graphqlHTTP from "express-graphql";


const app = express();

app.listen(3000, () => console.log('Server on port 3000'));

