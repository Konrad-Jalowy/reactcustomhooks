import useClickOutside from "../hooks/useClickOutside";
import { useRef } from "react";
function ClickOutside(){
       const btnRef = useRef(null);

       useClickOutside(btnRef, () => {
            alert("clicked outside");
      });
        return (
            <>
            <button ref={btnRef}>Click outside button</button>
            </>
        )
};

export {ClickOutside};