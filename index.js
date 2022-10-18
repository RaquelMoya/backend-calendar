const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');
const cors = require('cors');

//crear servidor de express
const app = express();

//Base de datos

dbConnection();

// CORS
app.use(cors());

// parseo y lectura del body

app.use(express.json());

//Rutas

app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

//Directorio publico

app.use(express.static('public'));

//Escuchar peticiones
app.listen(process.env.PORT, () =>{
    console.log(`Listening on port ${process.env.PORT}`);
})