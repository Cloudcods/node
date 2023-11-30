const express = require("express")
const app = express();
 

const mongoose= require("mongoose");
const Blog = require("./model/blogmodel");
const { connectDatabase } = require("./database");
 app.use(express.json())
 app.use(express.urlencoded({extended:true}))

//connecting   to database
connectDatabase()




app.get("/ ",(req,res)=>{
    res.json({
        Status :200,
        message:"success"
    })
})
// creatinrg a database
app.post("/createBlog", async (req,res) => {
console.log(req.body)

await Blog.create({
    title:req.body.title,
    subTitle:req.body.subTitle,
    description:req.body.description
})


    res.json({

        status:200,
        message:"blog created succesfully"
    })

})
app.listen(3000,()=>{
    console.log("server started on port 3000...")
})