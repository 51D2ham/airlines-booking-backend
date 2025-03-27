const express = require('express');
const { ServerConfig } = require ('./config/index');
const apiRoutes = require ('./routes')
const app = express();


//middlewares
app.use(express.json());   //handling json {read req.body or read it like json}
app.use(express.urlencoded({extended:true})) // helps with nested objects uses Qs lib

//api
app.use('/api',apiRoutes);




//server listening
app.listen(ServerConfig.PORT, () => {
    console.log(`successfully server started on PORT : ${ServerConfig.PORT}`);
    // Logger.info("Successfully started the server","root",{});
});