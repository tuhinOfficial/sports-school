import { useQuery } from "@tanstack/react-query";

const useInstructor = ()=>{

    const {data: instructors =[] , refetch} = useQuery({
        queryKey: ['users' , 'email' , 'name' ,'totalStudent'],
        queryFn : async ()=> {
            const res = await fetch(`http://localhost:5000/users`);
            return res.json();
        },
    })

    return [instructors , refetch]

}

export default useInstructor;