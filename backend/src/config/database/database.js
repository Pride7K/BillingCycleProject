const mongoose = require("mongoose")
mongoose.Promise = global.Promise

module.exports = mongoose.connect("mongodb://localhost/mymoney").then(_=>{
    console.log("DATABASE connected!")
}).catch(_=>{
    console.log("DATABASE disconnected!")
});