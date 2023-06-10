import { useContext } from "react";
import { AuthContext } from "../Prividers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useMyClass = ()=>{
    const {user} = useContext(AuthContext);

    const {data: myClass =[] , refetch} = useQuery({
        queryKey: ['myClass' , user?.email],
        queryFn : async ()=> {
            const res = await fetch(`http://localhost:5000/sports/instructor?email=${user?.email}`);
            return res.json();
        },
    })

    return [myClass , refetch]

}

export default useMyClass;
