# React Custom Hooks Project

In this project I try out custom react hooks. Hooks will be in hooks directory, examples in components directory. Enjoy.

## Hooks Done

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

