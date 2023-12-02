const express = require("express")
const app = express();

 
const Blog = require("./model/blogmodel");
const { connectDatabase } = require("./database/database");


app.set('view engine','ejs')
app.use(express.json())
 app.use(express.urlencoded({extended:true}))

//connecting   to database
connectDatabase()


app.use(express.static("public"))




app.get("/",(req,res)=>{
  res.render('home.ejs')
})
app.get("/",(req,res)=>{
res.render('about.ejs')
})
// get api => blog (all blogs)
app.get("/blogs",async(req,res)=>{

    const blogs=await Blog.find()
    if (blogs.length ==0){
        res.json ({
            status :404,
            message : "empty blogs"
    })
     }else{

    res.json({
        status :200,
        message : "all blogs",
        data:blogs

    })
    }
})


//get api->/blogs/:id(single blog)
app.get("/blogs/:id",async(req,res) =>{
    const id=req.params.id
    const blog1= await Blog.findById(id)
    if(blog1){
    res.json({
        status : 200,
        message:"blog fetched succesfully",
        data : blog1
    })
  }else {
    res.json({
        status:404,
        message:"data not found"
    })
}
})



// creating a blog api
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