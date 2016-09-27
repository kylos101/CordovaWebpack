/*global Camera navigator*/
   
var camera = {         
    cameraSuccess: function (imageData) {
        return imageData;
    },
    cameraError: function (error) {                
        alert(error);
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
    },
    libraryPicture: function() {                
        debugger; // hits in VSCode editor; hits in browser when debugger is open
        navigator.camera.getPicture(this.cameraSuccess, this.cameraError, this.libraryOptions());
        // throw "boo"; // displays in VSCode editor
        // TODO: trouble hitting set breakpoints...how do I find them?                 
    },
    takePicture: function () {
        navigator.camera.getPicture(this.cameraSuccess, this.cameraError, this.cameraOptions());
    }
}


var cameraExport = {
    content: function () {
        require('../css/camera.css');
        var content = require('../html/camera.html'); 
        return content;
    },
    initialize: function () {
        var getImageButton = document.getElementById("getImage");
        getImageButton.addEventListener("click", this.getPicture);
    },
    getPicture: function () {
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