import { useEffect, useState } from "react"

const useSports = ()=> {
    const [sports , setSports] = useState([])
    
    useEffect(()=>{
        fetch('sports.json')
        .then(res => res.json())
        .then(data => setSports(data))
    },[])
    return [sports]
}

export default useSports;