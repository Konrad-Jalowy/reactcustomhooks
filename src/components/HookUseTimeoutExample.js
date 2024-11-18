import { useState } from "react";
import { useTimeout } from "../hooks/useTimeout";
function HookUseTimeoutExample(){
    const [count, setCount] = useState(5);
    const { clear, reset } = useTimeout(() => setCount(0), 2000)
    return (
        <>
        <p>Count: {count}</p>
        <button onClick={() => setCount(c => c + 1)}>Increment</button>
        <button onClick={clear}>Clear Timeout</button>
        <button onClick={reset}>Reset Timeout</button>
        </>
    );
}

export {HookUseTimeoutExample};