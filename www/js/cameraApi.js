/*global Camera navigator*/

require('../css/camera.css');    
    
var camera = {
    initialize: function() {
        console.log("camera initialized");        
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
    }
}

camera.initialize();

module.exports = cameraExport;