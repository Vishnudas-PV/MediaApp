//1 import json-server
const jsonServer=require('json-server')

//2 Create a server using json-server
const mediaPlayerServer=jsonServer.create()

//3 Set up path for the server
const router = jsonServer.router("db.json")

//4 Return  middleWare used by json-server
const middleWare=jsonServer.defaults() //json->js

//5 Setup the  port number
const port=4000 || process.env.port      //env - environmental variable

//6 Use middleWare and router
mediaPlayerServer.use(middleWare)
mediaPlayerServer.use(router)

//7 To listen server for resolving requests from client
mediaPlayerServer.listen(port,()=>{
    console.log('listening on port',+port);
})


//Step by steps
// --------------------- //
// 1-> import json-server
// 2-> Create a server using json-server
// 3-> Set up path for the server
// 4->  Return  middleWare used by json-server
// 5->  Setup the  port number
// 6->  Use middleWare and router
// 7->  To listen server for resolving requests from client

