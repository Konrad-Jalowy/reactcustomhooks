import { useState } from "react";
import { useOnce } from "../hooks/useOnce";
function HookUseOnceExample(){
    const [count, setCount] = useState(1);

    useOnce(() => console.log(count));

    return (
        <>
        <p onClick={() => setCount(p => p + 1)}>Count: {count}</p>
        </>
    );
};

export {HookUseOnceExample}