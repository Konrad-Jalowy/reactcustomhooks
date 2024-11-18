import { usePrev } from "../hooks/usePrev";
import { useState } from "react";

function HookUsePrevExample(){
    const [count, setCount] = useState(0);
    const prev = usePrev(count);
    return (
        <>
        <p>Count: {count}</p>
        <p>Previous count: {prev === undefined ? 'None' : prev}</p>
        <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
        </>
    );
};

export {HookUsePrevExample};