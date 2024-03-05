// import "http" module
// http module is the predefined module used to create the http server
// require() is the predefined function ECMA , used to import the modules
const http=require("http")

// createServer ( - ) is the predefined function in http module , used to create the server instance
http.createServer((req,res)=>{
    let details=[
        {
            "name":"babu",
            "sal":40000
        },
        {
            "name":"kabu",
            "sal":50000
        }
    ]
    res.writeHead(200,"Ok",{
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
    })
    res.end(JSON.stringify(details))
    // Assign the Port Number
}).listen(5000,(err)=>{
    if(err)console.log(err);
    console.log("this server is running on port 5000....");
})
