//import express router library, create router object
const router = require(`express`).Router();

//create/register 2 routes in router object
// router.get(`/`, (request, response) => {       
//     response.send(`Welcome to our very plain site.`);
// });

// router.get(`/about`, (request, response) => {       
//     response.send(`It's a cold dark rainy day in Pizzaville.`);
// });

// create controller
const PagesController = require(`../controllers/pagesController`);

//create routes
router.get(`/`, PagesController.show);
router.get(`/about`, PagesController.show);
router.get(`/contact`, PagesController.show);

//export contents of router object
module.exports = router;
