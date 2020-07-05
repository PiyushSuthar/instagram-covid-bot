const fs = require('fs')
const request = require('request')

var url = "https://loremflickr.com/700/700/nature"
request.head(url, (err, res, body) => {
    request(url)
        .pipe(fs.createWriteStream("myImage.jpg"))
    //   .on('close', callback)
})