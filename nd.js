const fs=require("fs")
const express=require("express")
const path=require("path")
const app=express()
console.log(path.join(__dirname,"/public"))
app.use('/static', express.static(__dirname + '/public'));
app.use(express.urlencoded())
app.set("view engine","pug")
app.set("views",path.join(__dirname,"/views"))
app.get("/pughome",(req,res)=>{
    res.render("demo.pug",{title:"Pug title",message:"pug header",para:"sa re g MA PA DHA NI SA"})
})
app.get("/home",(req,res)=>{
    res.sendFile(path.join(__dirname,"/public/home.html"))
})
app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"/public/about.html"))
})
app.get("/form",(req,res)=>{
    res.sendFile(path.join(__dirname,"/public/form.html"))
})
app.post("/",(req,res)=>{
    let name=req.body.name
    let age=req.body.age
    let address1=req.body.address1
    let more=req.body.more
    let text=`hii my name is ${name},age ${age},address is ${address1} and more ${more}`
    fs.writeFileSync("hello.txt",text)
})
app.listen(80,()=>{
    console.log("listening")
}
)