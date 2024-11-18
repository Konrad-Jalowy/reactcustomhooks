import { usePrev } from "../hooks/usePrev";
import { useState } from "react";

function HookUsePrevExample(){
    const [count, setCount] = useState(0);
    const prev = usePrev(count);
    return (
        <>
        <p>Count: {count}</p>
        <p>Previous count: {prev}</p>
        </>
    );
};

export {HookUsePrevExample};