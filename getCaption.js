const request = require('request-promise')

var options = {
    uri: 'https://disease.sh/v2/all',
    json: true // Automatically parses the JSON string in the response
};

module.exports = async()=>{
    const data = await request(options)
    const text = `Total Cases: ${data.cases.toLocaleString()},\nTotal Recovered: ${data.recovered.toLocaleString()} \nand Total Deaths: ${data.deaths.toLocaleString()}`;
    return text;
}


// request("https://disease.sh/v2/all",{"json": "true"},(data)=>{
//     console.log(data);
    
// })