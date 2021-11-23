const express = require("express");
const {mongoose} = require("./database");
const user = require("./models/user");
const app = express();


app.get("/",(req, res)=>{
    // user.create({email:"holi@gmail.com",
    // password:"123",
    // name:"pablo bobo"}).then((res)=>{
    //     console.log("datos ingresados");
    // }).catch((err)=>{
    //     console.log("pablo se murió en el intento");
    // })
    res.send("Bienvenidos, Bye");
});

app.listen(3000,()=>{
    console.log("Servidor iniciado");
});
