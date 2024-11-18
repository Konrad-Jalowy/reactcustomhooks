import { useEffect } from "react";

export function useOnce(cb){
    useEffect(cb, []);
};