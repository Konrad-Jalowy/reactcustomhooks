import useArray from "../hooks/useArray";

export default function HookUseArrayExample(){
    const { arr, set, push, remove, filter, update, clear } = useArray([
        1,2,3
      ]);
    return (
        <>
        <p>Array: {arr.join(', ')}</p>
        <button onClick={() => push(4)}>Push 4</button>
        <button onClick={() => update(0, -1)}>Change first el to -1</button>
        <button onClick={() => remove(1)}>Remove Second Element</button>
        <button onClick={() => set([1, 2, 3])}>Set To 1, 2, 3</button>
        <button onClick={() => filter(n => n < 2)}>
        Keep Numbers Less Than 2
        </button>
        <button onClick={clear}>Clear</button>
        </>
    )
}