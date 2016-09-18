/*global Camera navigator*/
   
var camera = {
    initialize: function() {        
        this.bindEvents();        
        console.log("camera initialized");      
    },
    bindEvents: function () {
        var getImageButton = document.getElementById("getImage");
        getImageButton.addEventListener("click", this.cameraInstance.getPicture);
    },     
    cameraSuccess: function (imageData) {
        return imageData;
    },
    cameraError: function (error) {
        console.log(error);
    },
    libraryOptions: function () {
            return {
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: Camera.DestinationType.NATIVE_URI
        }
    },
    cameraOptions: function () {
        return {
            sourceType: Camera.PictureSourceType.CAMERA,
            cameraDirection: Camera.Direction.BACK,
            destinationType: Camera.DestinationType.NATIVE_URI
        }
    }
}

var cameraExport = {
    getPicture: function() {        
        navigator.camera.getPicture(camera.cameraSuccess, camera.cameraError, camera.libraryOptions());        
    },
    takePicture: function () {
        navigator.camera.getPicture(camera.cameraSuccess, camera.cameraError, camera.cameraOptions());
    },
    content: function () {
        require('../css/camera.css');
        var content = require('../html/camera.html'); 
        return content;
    }  
}

//camera.initialize();

module.exports = cameraExport;