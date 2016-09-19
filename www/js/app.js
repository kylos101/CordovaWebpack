var contentController = require('./content.controller.js');

var app = {
    initialize: function() {
        var camera = require('./camera.js');        
        contentController.setContent(camera.content());
        camera.initialize();
    }    
}

app.initialize();

module.exports = app;