/*global Camera navigator*/
require('../css/camera.css');
var camera = {
    initialize: function() {
        console.log("camera initialized");        
    }, 
    getPicture: function() {
        // pull up the gallery
        navigator.camera.getPicture(cameraSuccess, cameraError, libraryOptions);
        // return a selected picture
    },
    cameraSuccess: function (imageData) {
        return imageData;
    },
    cameraError: function (error) {
        console.log(error);
    },
    libraryOptions: {
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: Camera.DestinationType.NATIVE_URI
    },
    cameraOptions: {
        sourceType: Camera.PictureSourceType.CAMERA,
        cameraDirection: Camera.Direction.BACK,
        destinationType: Camera.DestinationType.NATIVE_URI
    }
}
module.exports(camera);