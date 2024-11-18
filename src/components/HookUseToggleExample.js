import { useToggle } from "../hooks/useToggle";

function HookUseToggleExample(){
    const [mode, toggleMode] = useToggle(true);

    return (
        <>
        <input id="toggleCheckbox" type="checkbox" checked={mode} onChange={toggleMode} />
        <label htmlFor="toggleCheckbox">Toggle mode</label>
        {mode && <p>Mode is on, you see me!</p>}
        </>
    )
};

export {HookUseToggleExample};