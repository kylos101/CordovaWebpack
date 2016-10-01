/*global navigator */

var motion = {
    context: null, // the html canvas element
    direction: "Start", // the calculated orientation for this device
    speed: "Stopped", // how quickly is the device orientation changing
    speedValue: 0, // the velocity for the orientation change
    history: 5, // how far back we track device orientation states    
    isReversed: function (value) {
        if (value > 0)
        { 
            return false;
        }
        else 
        {
            return true;
        }
    },
    items: [],    
    getSpeedValue: function (acceleration) {       
      var item = acceleration; // in chrome, this doesn't change.    
      
      if (!this.items) {
          this.items = [];
          return null;
      }
      if (this.items.length < this.history) {
          this.items.push(item);
          return null;
      }

      if (this.items.length > this.history)
      {
          throw "Moving average items should not exceed " + this.history;
      }
      this.items.reverse(); // flip the order
      this.items.pop(); // remove the oldest item
      this.items.reverse(); // flip back
      this.items.push(item); // add the newest item

      // get distance / time
      var speeds = [];      
      for (var v = 0; v < this.items.length - 1; v++)
      {          
          var speed = this.getVelocity(this.items[v+1], this.items[v]);
          speeds.push(speed);
      }
      
      var avgSpeed = Math.max.apply(null, speeds);
      if (speeds.length == 0)
      { 
          return 0;
      }
    //   debugger;
      return avgSpeed;     
    },
    getVelocity: function(item1, item2) {
        var x = Math.pow((item2.x - item1.x),2);
        var y = Math.pow((item2.y - item1.y),2);
        var z = Math.pow((item2.z - item1.z),2);
        
        var dist = Math.sqrt(x+y+z); // m/s^2
        var time = item2.timestamp - item1.timestamp; // milliseconds
        if (dist == 0)
        {
            return 0;
        }
        var velocity = dist / time;        
        return velocity;
    },
    setSpeed: function (item) {
        this.speedValue = Math.abs(this.getSpeedValue(item));        

        if (this.speedValue < .0005)
        {
            this.speed = "Stopped";
            return;
        }
        if (this.speedValue < .003)
        {
            this.speed = "Slow";
            return;
        }        
        if (this.speedValue < .008)
        {
            this.speed = "Medium";
            return;
        }        
        if (this.speedValue < .03)
        {
            this.speed = "Okay, we're moving";
            return;
        }
        if (this.speedValue < .05)
        {
            this.speed = "Whoooa!";
            return;
        } 
        if (this.speedValue >= .05)
        {
            this.speed = "Super fast!!!";
            return;
        }
    },
    getDirection: function (acceleration) {
                
        var x = acceleration.x;
        var y = acceleration.y;
        var z = acceleration.z;

        var accs = [];
        accs[0] = x;
        accs[1] = y;
        accs[2] = z;

        var largest;

        accs.forEach(function(val) {
            if (largest)
            {
                if(Math.abs(val) > Math.abs(largest))
                {
                    largest = val;
                    return;
                }

                return;
            }
            largest = val;
        })

        var retVal;
        switch(accs.indexOf(largest)) {
            case 0:
                if (motion.isReversed(largest))
                {
                    retVal = "Landscape right"
                }
                else
                {
                    retVal = "Landscape left"
                }
                break;
            case 1:
                if (motion.isReversed(largest))
                {
                    retVal = "Portraint down"
                }
                else
                {
                    retVal = "Portraint up"
                }
                break;
            case 2:
                if (motion.isReversed(largest))
                {
                    retVal = "Display down"
                }
                else
                {
                    retVal = "Display up"
                }
                break;
        }
        return retVal;
    },    
    onSuccess: function (acceleration) {
        // our this context is "window" when this event fires...so we need to work with motion
        motion.direction = motion.getDirection(acceleration);  
        motion.context.clearRect(0,0,200,200);      
        motion.context.fillText(motion.direction,10,50);
        motion.setSpeed(acceleration);
        motion.context.fillText("Moving Avg (" + motion.history + "), freq. " + motion.options.frequency + "ms: ",10,100);        
        motion.context.fillText(motion.speed + ", " + motion.speedValue,10,150);
    },
    onError: function (){
        alert('Error!');
    },
    options: {         
        frequency: 500 // how often (in ms) this should poll
    }, 
    watch: null,
    initialize: function () {             
        
        // hook up our motion component to the corresponding element
        var element = document.getElementById("myCanvas");
        motion.context = element.getContext("2d");

        // start reading data from the accelerometer
        var watchID = navigator.accelerometer.watchAcceleration(motion.onSuccess, motion.onError, motion.options);
        motion.watch = watchID;                           
    }
}

var motionExports = {
    id: "loadMotion",
    content: function () {
        require('../css/motion.css');
        var content = require('../html/motion.html'); 
        return content;
    },
    initialize: function () {
        document.addEventListener("deviceready", motion.initialize, false);
    },
    dispose: function () {        
        document.removeEventListener("deviceready", motion.initialize, false);
        navigator.accelerometer.clearWatch(motion.watch);  
                        
        // SMALL BUG - clearWatch leaves devicemotion event listeners behind, they don't fire though
        // the error, Error: exec proxy not found for :: Accelerometer :: stop
        // the issue, https://issues.apache.org/jira/browse/CB-7629                 
    }
}

module.exports = motionExports;