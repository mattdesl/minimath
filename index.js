var distanceSq = function(x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    return dx * dx + dy * dy;
};



module.exports = {
	
	/**
	 * Random number between two values.  
	 */
    random: function(start, end) {
        return start + Math.random() * (end - start);   
    },
    
    /** Utility function for linear interpolation. */
    lerp: function(v0, v1, t) {
        return v0*(1-t)+v1*t;
    },
    
    /** Utility function for Hermite interpolation. */
    smoothstep: function(v0, v1, t) {
        // Scale, bias and saturate x to 0..1 range
        t = Math.max(0.0, Math.min(1.0, (t - v0)/(v1 - v0) ));
        // Evaluate polynomial
        return t*t*(3 - 2*t);
    },
    
    /** pythagorean, squared */
    distanceSq: distanceSq,

    /** pythagorean */
    distance: function(x1, y1, x2, y2) {
        return Math.sqrt( distanceSq(x1, y1, x2, y2) );
    },

    /** Utility function to shuffle an array in place 
    (Fisher-Yates). */
    shuffle: function(array) {
        var counter = array.length, temp, index;
    
        // While there are elements in the array
        while (counter--) {
            // Pick a random index
            index = (Math.random() * counter) | 0;
    
            // And swap the last element with it
            temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
    
        return array;
    },

    Rectangle: require('./Rectangle')
};