import { useState } from "react"
import useEventListener from "../hooks/useEventListener"

export default function HookUseEventListenerExample() {
  const [pressed, setPressed] = useState("")
  useEventListener("keydown", e => {
    setPressed(e.code === 'Space' ? 'Spacebar' : e.key);
  })

  return(
    <>
        <p>Key pressed: {pressed}</p>
    </>
  ); 
};