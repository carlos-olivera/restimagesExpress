// Import image model
Image = require('./image-model');



// Handle index actions
exports.index = function (req, res) {
    Image.get(function (err, images) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Images retrieved successfully",
            data: images
        });
    });
};



// Handle create image actions
exports.new = function (req, res) {
    var image = new Image();
    image.title = req.body.title;
    image.picture = req.body.picture;
    image.likes = 0;
// save the image and check for errors
    image.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New image created!',
            data: image
        });
    });
};


// Handle view image info
exports.view = function (req, res) {
    Image.findById(req.params._id, function (err, image) {
        if (err)
            res.send(err);
        res.json({
            message: 'Image details loading..',
            data: image
        });
    });
};


// Handle update image info
exports.update = function (req, res) {
Image.findById(req.params._id, function (err, image) {
        if (err)
            res.send(err);
        image.likes = image.likes + 1;
        image.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Image like updated',
                data: image
            });
        });
    });
};


// Handle delete image
exports.delete = function (req, res) {
    Image.remove({
        _id: req.params._id
    }, function (err, image) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Image deleted'
        });
    });
};