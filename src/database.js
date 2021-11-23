const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Upp:lPPEii1iCbno9MV6@hellocluster.e7yyx.mongodb.net/upp')
.then((res)=>{
    console.log("db is conected");
}).catch((err)=>{
    console.error(err);
});

module.exports = mongoose;
