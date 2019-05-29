//create a node server
const express = require(`express`);         //import 'express' library using require

const app = express();                      //assign express to app

app.get(`/`, (require, response) => {       //create routes for get
    response.send(`Welcome to our very plain site.`);
});

app.get(`/about`, (require, response) => {       
    response.send(`It's a cold dark rainy day in Pizzaville.`);
});

// create dynamic port
const port = process.env.PORT || 4000;       
app.listen(port, () => console.log(`Listening on port ${port}`));    //create a listener port (takes 2 argument - port and callback)

