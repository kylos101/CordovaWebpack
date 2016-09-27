var componentController = require('./component.controller.js');

var app = {
    initialize: function() {
        var camera = require('./camera.js');
        var motion = require('./motion.js');     
        componentController.setContent(camera);         
    }    
}

app.initialize();

module.exports = app;