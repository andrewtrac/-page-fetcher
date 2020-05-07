const fs = require('fs');
const request = require('request');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

// Parent Function 

rl.question('Please enter a url and filepath ', (answer) => {

  splitAnswer = answer.split(" ")

  request(splitAnswer[0], (error, response, body) => {
    if (error) {
       return console.log(error); 
    } else if (response.statusCode !== 200) {
       return  console.log(`Error: page cannot be reached (code: ${response.statusCode})`)
    }
    pageDownloader(body, splitAnswer[1])
    const nFile = fs.statSync(splitAnswer[1])
    console.log(`Downloadeded and saved ${nFile.size} bytes to ${splitAnswer[1]}`)
  })
  rl.close()
});


const pageDownloader = (webpage, path) => {
fs.writeFile(path, webpage , function (err) {
    if(err) {
        return console.log(err) 
    }
   }) 
 }


 