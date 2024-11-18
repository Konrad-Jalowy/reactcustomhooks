import { useState } from "react";
import { useBoolean } from "../hooks/useBoolean";
function HookUseBooleanExample(){
    const [count, setCount] = useState(0);
    const countAsBool = useBoolean(count);
    console.log(count, countAsBool);
    
    return (
        <>
        <p>Count: {count}</p>
        <button onClick={() => setCount(prev => prev + 1)}>+1</button>
        <button onClick={() => setCount(prev => prev - 1)}>-1</button>
        </>
    );
};

export {HookUseBooleanExample};