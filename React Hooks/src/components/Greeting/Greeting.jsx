import { useState } from "react"
import style from "./Greeting.module.scss"

export const Greeting = () => {
    const [name, setName] = useState("");

    const handleGreeting = (e) => {
        setName(e.target.value)
        console.log(e);
    }
    return (
        <>
            <h2>Send en hilsen til {name}</h2>
            <input onChange={handleGreeting} type="text" placeholder="John"/>
        </>
    )
}