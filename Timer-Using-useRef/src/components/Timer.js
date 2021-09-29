import React, { useRef, useEffect, useState } from 'react'
//useRef is mutable
//useRef persists through rerenders and doesnt rerender when its value changes
const Timer = () => {
    const [timer, setTimer] = useState(0)
    let timerRef = useRef()
    useEffect(() => {
        timerRef.current = setInterval(() => {
            setTimer((state) => {
                return state + 1
            })
        }, 1000);
        return () => {
            clearInterval(timerRef)
        }
    }, [])
    return (
        <React.Fragment>
            <p>Timer: {timer}</p>
            <button onClick={() => { clearInterval(timerRef.current) }}>clear Timer</button>
        </React.Fragment>
    )
}
export default Timer