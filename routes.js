//create new app/server
const express = require(`express`);         //import 'express' library using require

const app = express();                      //assign express to app

//Import page routes
const pageRoutes = require(`./routes/pages`);

//Register page routes
app.use(`/`, pageRoutes);

//Export changes in the app
module.exports = app;


