import { useState } from "react"
import style from "./Counter.module.scss"

export const Counter = () => {
    const [clickCount, setClickCount] = useState(0)
    // console.log(clickCount);
    
    return (
        <>
            <h2>Du har trykket på knappen {clickCount} gange</h2>
            <button onClick={() => setClickCount((clicks) => clicks+ 1)}>Click Me!!</button>
        </>
    )
}