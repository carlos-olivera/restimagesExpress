// api-routes.js
// 
// 

// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTImages O RLY parody book covers!',
    });
});

// Import contact controller
var imageController = require('./images-controller');

// Images routes
router.route('/images')
    .get(imageController.index)
    .post(imageController.new);
router.route('/images/:_id')
    .get(imageController.view)
    .patch(imageController.update)
    .put(imageController.update)
    .delete(imageController.delete);

    
// Export API routes
module.exports = router;