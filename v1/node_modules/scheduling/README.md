# Scheduler
A simple javascript tool for enterframe tasks.

## Installation
```npm install scheduling```

## Usage 
### Adding enterframe task : 
```
import Scheduler from 'scheduling';
let enterframeID = Scheduler.addEF(loop);

function loop() {
    ...
}
```

### Remove enterframe task : 
```
Scheduler.removeEF(enterframeID);
```

### Delay call
```
Scheduler.delay(delayFunc, 'hello', 500);
function delayFunc(mStr) {
    console.log(mStr);  //  console output 'hello'
}
```

### Calling in the next frame : 
```
checkLoaded();

function checkLoaded() {
    if(!loaded) {
        Scheduler.next(checkLoaded);
        return;
    }
    
    ... //  loaded
}
```


### Green threading
```
Scheduler.defer(func, [params]);
```
