import { useEffect, useRef } from "react";

export function useInterval(callback, delay){

    const callbackRef = useRef();

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback])
    return "not implemented";
};