const usersRouter=require('express').Router();

//router : registrar POST, GET,DELETE ,UPDATE
const User = require("../model/user")
//registar lo que el usuario me envia 
usersRouter.post('/',async(request,response)=>{
    //console.log(request,"req")
    console.log(request.body,"req.body");
    const {name,email,password}=request.body;
    const body=request.body;
    console.log(name,email,password,"En el controlador");

    if(!name || !email || !password){
        try {
            const userdb=new User(body);
            await userdb.save();
        } catch (error) {
            console.log(error);
        }
        return response.status(400).json({error:'Todos los campos son requeridos'})
    }else{
        
        return response.status(200).json({msg:'se ha creado el nuevo usuario'});
    }
})


module.exports=usersRouter;