import { useState } from "react";
import { useRenderCount } from "../hooks/useRenderCount";
function HookUseRenderCountExample(){
    const [count, setCount] = useState(100);
    const renderCount = useRenderCount();
    return (
        <>
        <p>Render count {renderCount}</p>
        <p>Counter {count}</p>
        <button onClick={() => setCount(prev => prev + 10)}>+10</button>
        </>
    );
};

export {HookUseRenderCountExample};