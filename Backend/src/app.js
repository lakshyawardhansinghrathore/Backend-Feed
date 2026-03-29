const express = require('express');
const multer = require('multer');
const uploadFile = require("./services/storage.services")
const postModel = require("./models/post.model")
const cors = require('cors')

const app = express();
app.use(cors()) // This will allow us to access our backend api from frontend which is running on different port
app.use(express.json()); // this middleware can handle raw data format but out form data format
// install -> npm i multer


const upload = multer ({storage: multer.memoryStorage() }) // SO that our data in form data can upload


app.post('/create-post',upload.single("image") ,async (req, res) => { // Here data which we will send through postman will not be in raw format it will be in form data format

    console.log(req.body);
    console.log(req.file);

    const result = await uploadFile(req.file.buffer);
    
    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })

    return res.status(201).json({ 
        message: "Post created successfully",
        post
    })

})// Api -> image and caption upload -> imagekit -> send url -> save in database and return the post file 


app.get("/posts", async (req, res) => {

    const posts = await postModel.find()

    return res.status(200).json ({
        message: "Post fetched succesfully",
        posts
    })
})// server to Frontend


 
module.exports = app;
