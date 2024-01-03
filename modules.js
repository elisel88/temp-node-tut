// 8
// const os = require('os')

// // info about current user
// const user = os.userInfo()
// console.log(user)

// //method returns the system uptime in seconds
// console.log(`the system uptime is: ${os.uptime()} seconds`)

// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),
// }
// console.log(currentOS)


//9
// const path = require('path')

// console.log(path.sep)

// const filePath = path.join('/content','subfolder','text.txt')
// console.log(filePath)

// const base = path.basename(filePath)
// console.log(base)

// const absolute = path.resolve(__dirname, 'content','subfolder','text.txt')
// console.log(absolute)




//10

// const {readFileSync, writeFileSync, write} = require('fs')

// const first = readFileSync('./content/first.txt',"utf8")
// const second = readFileSync('./content/second.txt',"utf8")

// writeFileSync(
//     './content/result-sync.txt',
//     `here is the result: ${first}, ${second}`,
//     { flag: "a" }
//  )


//11
// const {readFile, writeFile, read} = require('fs')

// readFile('./content/first.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(`!ERROR: ${err}`)
//         return
//     }
//     const first = result
//     readFile('./content/second.txt','utf8',(err,result)=>{
//         if(err){
//             console.log(`!ERROR: ${err}`)
//             return
//         }
//         const second = result
//         writeFile('./content/result-async.txt',
//         `here is the result: ${first}, ${second}`,
//         (err,result) => {
//             if(err){
//                 console.log(`!ERROR: ${err}`)
//                 return
//             }
//             console.log(result)
//         }
//         )
//     })
// })


//12


// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/html'); // Set Content-Type header to indicate HTML response

//     if (req.url === '/') {
//         res.end('<h1>Welcome to our homepage</h1>');
//     } else if (req.url === '/about') {
//         res.end('<h1>Here is our short history</h1>');
//     } else {
//         res.end(`
//             <h1>Oops!</h1>
//             <p>We can't seem to find the page you are looking for.</p>
//             <a href="/">Back home</a>
//         `);
//     }
// });

// const PORT = 5000;
// server.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}/`);
// });




//13