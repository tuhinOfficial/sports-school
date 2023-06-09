import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Prividers/AuthProvider";

const useBookmark = ()=>{
    const {user} = useContext(AuthContext);

    const {data: bookmarks =[] , refetch} = useQuery({
        queryKey: ['bookmark' , user?.email],
        queryFn : async ()=> {
            const res = await fetch(`http://localhost:5000/userbookmarks?email=${user?.email}`);
            return res.json();
        },
    })

    return [bookmarks , refetch]

}

export default useBookmark;