// Write the code of imagkit(Means it is not fixed that later which we will use as s3 or anything else)
const ImageKit = require("@imagekit/nodejs")


const imagekit = new ImageKit({
    privateKey: process.env.IMAGE_PRIVATE_KEY,
})

async function uploadFile(buffer) {

    const result = await imagekit.files.upload({
        file:buffer.toString("base64"),
        fileName: "image.jpg"
    })

    return result;
}// require this function in app.js

module.exports = uploadFile;