var contentController = require('./content.controller.js');

var app = {
    initialize: function() {
        var camera = require('./camera.js');
        var motion = require('./motion.js');     
        contentController.setContent(camera);         
    }    
}

app.initialize();

module.exports = app;