import { useEffect, useRef } from "react";
export function useRenderCount(){
    const count = useRef(0)
    useEffect(() => {
        //todo: logic
    })
    return count.current;
};