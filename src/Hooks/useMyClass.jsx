import { useContext } from "react";
import { AuthContext } from "../Prividers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useMyClass = ()=>{
    const {user} = useContext(AuthContext);

    const {data: myClass =[] , refetch} = useQuery({
        queryKey: ['myClass' , user?.email],
        queryFn : async ()=> {
            const res = await fetch(`https://sport-school-server-tuhinofficial.vercel.app/sports/instructor?email=${user?.email}`);
            return res.json();
        },
    })

    return [myClass , refetch]

}

export default useMyClass;
