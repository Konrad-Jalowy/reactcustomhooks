import { useState } from "react";
import { useInterval } from "../hooks/useInterval";
function HookUseIntervalExample(){
    const [count, setCount] = useState(0);

    const stopIntervalNow = useInterval(() => {
        setCount(prev => prev + 1);
    }, count < 10 ? 1000 : null);

    return (
    <>
    <p>Count: {count}</p>
    <button onClick={stopIntervalNow}>Stop interval</button>
    </>
    )
};

export {HookUseIntervalExample};