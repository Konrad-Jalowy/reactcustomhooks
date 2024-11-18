# React Custom Hooks Project

In this project I try out custom react hooks. Hooks will be in hooks directory, examples in components directory. Enjoy.

## Hooks Done:

### useToggle
Simple hook that lets you toggle between boolean states, true or false
```js
import { useState } from "react";
export const useToggle = (initialValue) => {

    const [state, setState] = useState(() => !!initialValue);

    const toggle = () => setState((prev) => !prev);

    return [state, toggle];
};
```
### usePrev
Hook that uses refs to show you previous value of a reactive variable (first part returned by useState hook)
```js
import { useRef } from "react";

export function usePrev(reactiveVariable){

    const currentValue = useRef(reactiveVariable);
    const previousValue = useRef();

    if(currentValue.current !== reactiveVariable){
        previousValue.current = currentValue.current;
        currentValue.current = reactiveVariable;
    }
    
    return previousValue.current;
};
```

### useInterval
Simple useInterval hook, name is self descriptive
```js
import { useEffect, useRef } from "react";

export function useInterval(callback, delay){

    const callbackRef = useRef();
    const intervalID = useRef(null);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback])

    useEffect(() => {
        const tick = () => {
          callbackRef.current();
        }
        if (delay !== null) {
          intervalID.current = setInterval(tick, delay);
          return () => clearInterval(intervalID.current);
        }
      }, [delay]);

    const stopIntervalNow = () => {
        clearInterval(intervalID.current);
        intervalID.current = null;
    }

    return stopIntervalNow;
};
```

### useTimeout

That was pretty challenging. You can reset timeout (start timeout again with this delay) or clear timeout (cancel).
You can also change the delay or callback passed as props.
React useCallback hook ensures referential integrity so that only "real" change of callback will be noticed.
Kind of complicated, but you can understand it.

```js
import { useEffect, useRef, useCallback } from "react";

export function useTimeout(cb, delay){

    const cbRef = useRef(cb);
    const timeoutRef = useRef();

    useEffect(() => {
        cbRef.current = cb
      }, [cb]);
    
    const set = useCallback(() => {
        timeoutRef.current = setTimeout(() => cbRef.current(), delay)
      }, [delay])
    
    const clear = useCallback(() => {
        timeoutRef.current && clearTimeout(timeoutRef.current)
      }, [])
    

      useEffect(() => {
        set()
        return clear
      }, [delay, set, clear])
    
      const reset = useCallback(() => {
        clear()
        set()
      }, [clear, set])
    
    return { reset, clear }
}
```

