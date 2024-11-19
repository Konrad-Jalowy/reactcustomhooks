import { useEffect } from "react";

// export function useOnce(cb){
//     useEffect(cb, []);
// };
//commented out good, but eslint doesnt like that
export function useOnce(cb){
    useEffect(cb, [cb]);
};