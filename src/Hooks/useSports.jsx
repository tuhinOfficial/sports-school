import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react"

const useSports = ()=> {

    const {data: sports=[] , refetch} = useQuery({
        queryKey: ['sports' , 'totalStudent'],
        queryFn : async ()=>{
            const res = await fetch(`http://localhost:5000/sports`);
            return res.json();
        },
    })

    return [sports  , refetch]

    
    // useEffect(()=>{
    //     fetch('http://localhost:5000/sports')
    //     .then(res => res.json())
    //     .then(data => setSports(data))
    // },[])
    // return [sports]
}

export default useSports;