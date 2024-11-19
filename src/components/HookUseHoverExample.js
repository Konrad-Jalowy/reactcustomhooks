import { useRef } from "react";
import { useHover } from "../hooks/useHover";

function HookUseHoverExample(){

    const btnRef = useRef(null);
    const isHovered = useHover(btnRef);

    return (
        <>
        <button ref={btnRef}>{isHovered ? 'Thanks' : 'Hover Me'}</button>
        <p>{isHovered ? 'Youre hovering him' : 'Youre not hovering him'}</p>
        </>
    )
}

export {HookUseHoverExample};