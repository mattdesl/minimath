## Math utils

Small math library.

```javascript
var math = require('minimath');

//random between two values
var a = math.random(2, 10);

//shuffle an array in place
var array = [2, 5, 1, 2, 3];
math.shuffle(array);

//linear interpolation
var c = math.lerp(10, 50, 0.25);

//smoothstep
var b = math.smoothstep(20, 40, 0.5);
```