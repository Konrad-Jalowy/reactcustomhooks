import { useState } from "react";
import { useInterval } from "../hooks/useInterval";
function HookUseIntervalExample(){
    const [count, setCount] = useState(0);

    useInterval(() => {
        setCount(prev => prev + 1);
    }, count < 10 ? 1000 : null);

    return (
    <>
    <p>Count: {count}</p>
    </>
    )
};

export {HookUseIntervalExample};