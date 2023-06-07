import { useEffect, useState } from "react"

const useInstructor = ()=>{
    const [instructors , setInstructors] = useState([]);

    useEffect(()=>{
        fetch('instructors.json')
        .then(res=> res.json())
        .then(data=> setInstructors(data))
    },[])
    return [instructors]
}

export default useInstructor;