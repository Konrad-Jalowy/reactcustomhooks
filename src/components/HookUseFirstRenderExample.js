import { useFirstRender } from "../hooks/useFirstRender";
import { useReducer } from "react";

const HookUseFirstRenderExample = () => {
  const firstRender = useFirstRender();
  const [count, rerender] = useReducer((x) => x + 1, 1);

  return (
    <>
      <h2>First render? {firstRender ? "Yes" : "No"}</h2>
      <button onClick={rerender}>re-render</button>
      <p>Render Count: {count}</p>
    </>
  );
};

export default HookUseFirstRenderExample;