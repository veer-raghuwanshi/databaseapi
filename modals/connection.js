var mongoose = require('mongoose')
var url = "mongodb://127.0.0.1:27017/mern19Maydatabase"
mongoose.connect(url)
var db = mongoose.connection
console.log("Database connection successfully Done!!")
module.exports = db