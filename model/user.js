//require de la libreria de mongoose
const mongoose = require("mongoose");
//const usersRouter=require("../controllers/users");


//definir el schema para guardar los usuarios 
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    pasword:String
})

//configurar las  del usuario en el esquema
/*
userSchema.set('toJSON',{respuestas,
    //document es el schema
    //returnObjet 
    transform:(document,returnObjet)=>{
        //creamos una nueva propiedad
        returnObjet.id=returnObjet._id.toString();
        delete returnObjet._id
    }
})
*/
//registrar el modelo
const User=mongoose.model('User',userSchema);

//debemos exportar 
module.exports=User;