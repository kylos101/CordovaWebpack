/*global Camera navigator*/

// require('bootstrap-fonts');
   
var camera = {         
    setImageSource: function (source) {
        var image = document.getElementById("image");
        image.setAttribute("src", source);
    },
    onSuccess: function (imageData) {
        // the context for this is window, hence using camera reference
        camera.setImageSource(imageData);
    },
    onError: function (error) {                
        alert(error);
    },
    libraryOptions: function () {
            return {
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: Camera.DestinationType.FILE_URI,
            saveToPhotoAlbum: true,
            correctOrientation: true,
            quality: 50,
            mediaType: Camera.MediaType.PICTURE
        }
    },
    cameraOptions: function () {
        return {
            sourceType: Camera.PictureSourceType.CAMERA,
            cameraDirection: Camera.Direction.BACK,
            destinationType: Camera.DestinationType.FILE_URI,
            saveToPhotoAlbum: true,
            correctOrientation: true,
            quality: 50,
            mediaType: Camera.MediaType.PICTURE
        }
    },
    libraryPicture: function() {                
        // debugger; // hits in VSCode editor; hits in browser when debugger is open
        navigator.camera.getPicture(this.onSuccess, this.onError, this.libraryOptions());
        // throw "boo"; // displays in VSCode editor
        // TODO: trouble hitting set breakpoints...can they be set?                 
    },
    takePicture: function () {
        navigator.camera.getPicture(this.onSuccess, this.onError, this.cameraOptions());
    }
}


var cameraExport = {
    id: "loadCamera",
    content: function () {       
        require('bootstrap-css'); 
        require('../css/camera.css');
        var content = require('../html/camera.html'); 
        return content;
    },
    initialize: function () {          
        var getImageButton = document.getElementById("getImage");
        getImageButton.addEventListener("click", this.getPicture);
    },
    getPicture: function () {
        console.log('get the picture');
        
        var radios = document.getElementsByName('imageRadio');

        for (var i = 0, length = radios.length; i < length; i++) {                                 
            if (radios[i].checked) {                                
                if (radios[i].value === "Camera")
                {
                    return camera.takePicture();
                }
                if (radios[i].value === "Library")
                {
                    return camera.libraryPicture();
                }                                                          
                
                break;
            }
        }
    }
}

module.exports = cameraExport;