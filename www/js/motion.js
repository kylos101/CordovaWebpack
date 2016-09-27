/*global navigator */

var motion = {
    context = null,
    direction = null,
    getDirection: function (acceleration) {
        var x = acceleration.x;
        var y = acceleration.y;

        var ax = Math.abs(x);
        var ay = Math.abs(y);        

        if (ax > ay)
        {
            if (x > 0)
            {
                return "Right";
            }
            else 
            {
                return "Left";
            }
        }
        else
        {
            if (y > 0)
            {
                return "Up";
            }
            else
            {
                return "Down";
            }
        }
    },    
    onSuccess: function (acceleration) {
        this.direction = this.getDirection(acceleration);
        this.context.fillText(this.direction,10,50);
    },
    onError: function (){
        alert('Error!');
    },
    options: { 
        // every 500ms
        frequency: 500 
    }, 
    watch: function () {                    
        navigator.accelerometer.watchAcceleration(this.onSuccess, this.onError, this.options);
    },
    initialize: function () {             
        var element = document.getElementById("myCanvas");
        this.context = element.getContext("2d");

        motion.watch();                   
    }
}

var motionExports = {
    content: function () {
        require('../css/motion.css');
        var content = require('../html/motion.html'); 
        return content;
    },
    initialize: function () {
        document.addEventListener("deviceready", motion.initialize, false);
    }
}

module.exports = motionExports;