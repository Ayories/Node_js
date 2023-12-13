import fs from 'fs'

fs.readFile("test.txt", "utf-8", (err, data) => {
    if (err) console.error(err)
    console.log(data)
})

fs.writeFile("testWrite.txt", "Hello World, welcome you have been rick rolled!!! dumdumdum", (err) => {
    if (err) console.error(err)
    
    else{
        console.log("file written");
    }
})

