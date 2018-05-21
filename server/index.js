const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require ('dotenv').config();

const controller = require(__dirname + '/controller');

const app = express();

const {CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING).then(db => {
    app.set("dbInstance",db);
});

app.use(bodyParser.json() );


const port = 3001;
app.listen( port, () => console.log (`Listening on port ${port}`));