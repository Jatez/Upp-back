const express = require("express");
const {mongoose} = require("./database");
const user = require("./routes/users");
const app = express();

app.use(express.json()),
app.use("/users", user);

app.listen(3000,()=>{
    console.log("Servidor iniciado");
});
