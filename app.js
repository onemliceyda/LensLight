import express from "express"
const app=express()
const port=3000

app.get("/",(req,res)=>{
    res.send("Index Page 2 ")
}) //routing with get

app.listen(port,()=>{
    console.log(`Application running on port : ${port}`);
})