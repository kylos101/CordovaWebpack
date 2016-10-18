var index = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();

        // loads app style (ignore require for now, out of scope for this talk)
        require('../css/index.css');
    },

    // Bind Event Listeners
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        index.receivedEvent('deviceready');

        // !!! IMPORTANT !!!
        // This loads app.js (ignore require, app, and controller for now, out of scope for this talk)
        // Show how app.initialize is called, and then move onto the camera component...
        require('./app.js');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};

index.initialize();
