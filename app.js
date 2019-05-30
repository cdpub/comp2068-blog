//create a node server
const express = require(`express`);         //import 'express' library using require

const app = express();                      //assign express to app

//create routes
const routes = require(`./routes.js`);
app.use(`/`, routes);                      //use middleware using the word "use"

// view config
const path = require(`path`);
app.set(`views`, path.join(__dirname, `views`));
app.set(`view engine`, `pug`);

//create asset pipeline; Express app.use method allows middleware action to route
app.use('/css', express.static('assets/stylesheets'));
app.use('/js', express.static('assets/javascripts'));
app.use('/images', express.static('assets/images'));


// create dynamic port
const port = process.env.PORT || 4000;       
app.listen(port, () => console.log(`Listening on port ${port}`));    //create a listener port (takes 2 argument - port and callback)

