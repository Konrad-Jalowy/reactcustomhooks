import { useRef } from "react";

export function usePrev(reactiveVariable){

    const currentValue = useRef(reactiveVariable);
    const previousValue = useRef();
    //TODO: LOGIC!!!
    return previousValue.current;
};

