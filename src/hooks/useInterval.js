import { useEffect, useRef } from "react";

export function useInterval(callback, delay){

    const callbackRef = useRef();

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback])

    useEffect(() => {
        const tick = () => {
          callbackRef.current();
        }
        if (delay !== null) {
          let id = setInterval(tick, delay);
          return () => clearInterval(id);
        }
      }, [delay]);
};