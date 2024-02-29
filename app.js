require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const cors= require('cors');
const cookieParser= require('cookie-parser')
const morgan = require('morgan');
const usersRouter =require('./controllers/users');

// Conexión DB
(async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Te has conectado a MongoDB.')
    }catch(error){
        console.log(error);
    }
})();



// Rutas de Frontend (se coloca la carpeta, no el archivo, debido al alias '/')
app.use('/', express.static(path.resolve('views', 'home')));
app.use('/login', express.static(path.resolve('views', 'login')));
app.use('/registro', express.static(path.resolve('views', 'registro')));
app.use('/components', express.static(path.resolve('views', 'components')));
app.use('/imagen',express.static(path.resolve("img")));

//Importante

app.use(express.json());
app.use(cors())
app.use(cookieParser())
app.use(morgan('tiny'));


//Rutas de backend
app.use('/api/user',usersRouter);


module.exports = app;