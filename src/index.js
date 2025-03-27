const express = require('express');
const { ServerConfig } = require ('./config/index');
const apiRoutes = require ('./routes')

const app = express();


app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`successfully server started on PORT : ${ServerConfig.PORT}`);
    // Logger.info("Successfully started the server","root",{});
});