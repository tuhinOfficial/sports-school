import { useQuery } from "@tanstack/react-query";



const useUsers = ()=>{

    const {data: users =[] , refetch} = useQuery({
        queryKey: ['users'],
        queryFn : async ()=> {
            const res = await fetch(`https://sport-school-server-tuhinofficial.vercel.app/users`);
            return res.json();
        },
    })

    return [users , refetch]

}

export default useUsers;