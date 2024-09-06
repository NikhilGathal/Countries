import { useEffect, useState } from "react"

export function usewindowsize() {
    const [windowSize, setwidth] = useState({ width: window.innerWidth, height: window.innerHeight })
    useEffect(() => {
        window.addEventListener('resize', () => {
            console.log(window.innerWidth)
            setwidth({ width: window.innerWidth, height: window.innerHeight })

        })
    }, [])
    return windowSize
}