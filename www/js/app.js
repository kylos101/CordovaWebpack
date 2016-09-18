var router = require('./router.js');

var app = {
    initialize: function() {
        var camera = require('./camera.js');        
        router.setContent(camera.content());
    }    
}

app.initialize();

module.exports = app;