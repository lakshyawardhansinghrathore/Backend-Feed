const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({
    image: String,
    caption: String,
})


const postModel = mongoose.model("post", postSchema)


/*
Data that will be stored =>
=> This is post data    
post = {
image :string,
caption:string
}
// So the name of the collection in the database is post from the above method


=> This is user data
user = {
name: string,
email: string,
password: string,
posts:[post1, post2, post3]
}
*/

module.exports = postModel;