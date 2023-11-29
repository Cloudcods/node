const app=require("express")();
const mongoose= require("mongoose")

//connecting   to database
mongoose.connect("mongodb+srv://cms11:coder@cluster0.9wzacxt.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("databse connnect succesfully...")
})



app.get("/ ",(req,res)=>{
    res.json({
        Status :200,
        message:"success"
    })
})
app.listen(3000,()=>{
    console.log("server started on port 3000...")
})