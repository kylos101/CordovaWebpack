var componentController = require('./component.controller.js');

var app = {        
    initialize: function () {
        var loadCamera = document.getElementById('loadCamera');
        loadCamera.addEventListener('click', app.load, false);

         var loadMotion = document.getElementById('loadMotion');
        loadMotion.addEventListener('click', app.load, false);
    },
    load: function (e) {
        var camera = require('./camera.js');
        var motion = require('./motion.js');

        console.log('received: ' + e.target.id);        
        
        if (camera.id === e.target.id)
        {
            componentController.setContent(camera);
            return;
        }
        if (motion.id === e.target.id)
        {
            componentController.setContent(motion);
            return;
        }
    }    
}

app.initialize();

module.exports = app;