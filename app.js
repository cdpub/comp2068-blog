//create a node server
const express = require(`express`);         //import 'express' library using require

const app = express();                      //assign express to app

app.get(`/`, (require, response) => {       //create routes for get
    response.send(`Welcome to our very plain site.`);
});

app.get(`/about`, (require, response) => {       
    response.send(`It's a cold dark rainy day in Pizzaville.`);
});


app.listen(4000, () => console.log(`Listening on port 4000`));    //create a listener port (takes 2 argument - port and callback)

