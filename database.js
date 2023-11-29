const { default: mongoose } = require("mongoose")

exports.connectDatabase=async()=>{
    await mongoose.connect("mongodb+srv://cms11:coder@cluster0.9wzacxt.mongodb.net/?retryWrites=true&w=majority")

console.log("database connected successfully")
}