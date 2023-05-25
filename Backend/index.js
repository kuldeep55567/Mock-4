const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middleware = jsonServer.defaults();
const cors = require("cors")
require("dotenv").config()
server.use(middleware);
server.use(router);
server.use(cors())
server.listen(process.env.PORT,()=>{
    console.log(`Server is running at ${process.env.PORT}`);
})
