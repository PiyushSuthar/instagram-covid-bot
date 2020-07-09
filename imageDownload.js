require('dotenv').config()
const fs = require('fs')
const request = require('request')

var url = process.env.IMAGE_URL
request.head(url, (err, res, body) => {
    request(url)
        .pipe(fs.createWriteStream("myImage.jpg"))
    //   .on('close', callback)
})