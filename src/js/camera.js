/*global Camera navigator*/

// explain this renders in the "content" DIV on index.html (custom framework)
// show the camera mark-up
// start with cameraExport.initialize
// set breakpoints on getPicture (line 98) and walk in
// set breakpoints on onSuccess (line 25) to inspect the result and onError (line 29)

var camera = {
    getImage: function () {
        return document.getElementById("getImage");
    },
    disableButton: function () {
        this.getImage().setAttribute("disabled", null);
    },
    enableButton: function () {
        this.getImage().removeAttribute("disabled");
    },
    setImageSource: function (source) {
        var image = document.getElementById("image");
        image.setAttribute("src", "data:image/png;base64," + source);
    },
    onSuccess: function (imageData) {
        // the context for this is window, hence using camera reference
        camera.setImageSource(imageData);
        camera.enableButton();
    },
    onError: function (error) {
        alert(error);
        camera.enableButton();
    },
    libraryOptions: function () {
            return {
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: Camera.DestinationType.DATA_URL,
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
            destinationType: Camera.DestinationType.DATA_URL,
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
    },
    cleanUp: function () {
        var leftOverLibraryElements = document.getElementsByClassName('cordova-camera-select');
        var leftOverCameraElements = document.getElementsByClassName('cordova-camera-capture');

        // remove mark-up left behind by Cordova
        for (var i=0; i< leftOverLibraryElements.length; i++)
        {
            document.body.removeChild(leftOverLibraryElements[i]);
        }
        for (var n=0; n< leftOverCameraElements.length; n++)
        {
            document.body.removeChild(leftOverCameraElements[n]);
        }
    }
}

var cameraExport = {
    id: "cameraFeature",
    getImageButton: null,
    content: function () {
        require('bootstrap-css');
        require('../css/camera.css');
        var content = require('../html/camera.html');
        return content;
    },
    initialize: function () {
        this.getImageButton = document.getElementById("getImage");
        this.getImageButton.addEventListener("click", this.getPicture);
    },
    getPicture: function () {
        console.log('get the picture');
        camera.disableButton();

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
    },
    dispose: function () {
        this.getImageButton.removeEventListener("click", this.getPicture);
        camera.cleanUp();
    }
}

module.exports = cameraExport;