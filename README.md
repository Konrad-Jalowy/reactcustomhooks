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

### useBoolean

Simple hook i wrote to exercise react hook skills
```js
import { useRef } from "react";

export function useBoolean(reactiveVariable){
    const currentRef = useRef(reactiveVariable);
    const asBoolean = useRef(!!reactiveVariable);
    
    if(currentRef.current !== reactiveVariable){
        currentRef.current = reactiveVariable;
        asBoolean.current = !!(currentRef.current);
    }
    //console.log(currentRef.current, asBoolean.current);

    return asBoolean.current;
};
```

### useRenderCount
Simple hook that shows render count, it is a little tricky
```js
import { useEffect, useRef } from "react";
export function useRenderCount(){
    const count = useRef(1)
    const rendered = useRef(false);
    
    useEffect(() => {
        if(rendered.current === false){
            rendered.current = true;
            return;
        }
        count.current++;
    })
    return count.current;
};
```

### useOnce
I dont like that hook, there is missing dependency problem. Basically it would be better to write such things inside components.

Anyways, here it is:
```js
import { useEffect } from "react";

export function useOnce(cb){
    useEffect(cb, []);
};
```

### useFirstRender
Another hook from the web, it uses use effect and the fact, that useRef persists between re-renders, but change of ref does not trigger re-render (its actually smart practical use of React built-in hooks)
```js
import { useRef, useEffect } from "react";

export const useFirstRender = () => {
  const firstRender = useRef(true);

  useEffect(() => {
    firstRender.current = false;
  }, []);

  return firstRender.current;
};
```

### useArray hook
Nice hook shows how to update array states
```js
import { useState } from "react";

export default function useArray(defaultValue){

    const [arr, setArr] = useState(defaultValue);

    function push(el){
        setArr(prev => [...prev, el]);
    }

    function filter(callback){
        setArr(a => a.filter(callback));
    }

    function update(index, newElement) {
        setArr(a => [
          ...a.slice(0, index),
          newElement,
          ...a.slice(index + 1, a.length),
        ]);
      }
    
      function remove(index) {
        setArr(a => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
      }
    
      function clear() {
        setArr([]);
      }


      return { arr, set: setArr, push, filter, update, remove, clear };
};
```


### useEventListener
Great hook, i like separation of things (callback and evt + setter separately) and the idea of storing a callback in ref.current
```js
import { useEffect, useRef } from "react"

export default function useEventListener(
  evtType,
  cb,
  el = window
) {
  const callbackRef = useRef(cb)

  useEffect(() => {
    callbackRef.current = cb
  }, [cb])

  useEffect(() => {
    if (el == null) return
    const handler = e => callbackRef.current(e)
    el.addEventListener(evtType, handler)

    return () => el.removeEventListener(evtType, handler)
  }, [evtType, el]);
}
```