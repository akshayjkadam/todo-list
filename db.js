function dbConnect() {
    // Db connection
const mongoose = require('mongoose')
const url = 'mongodb://localhost/comments'



mongoose.connect("mongodb://localhost:27017/todo",{useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log("database Connect"))
.catch(function(err){
    console.log('Connection failed...')
})
}

module.exports = dbConnect