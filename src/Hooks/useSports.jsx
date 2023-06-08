import { useQuery } from "@tanstack/react-query";

const useSports = ()=> {

    const {data: sports=[] , refetch} = useQuery({
        queryKey: ['sports' , 'totalStudent' ,'sportsName'],
        queryFn : async ()=> {
            const res = await fetch(`http://localhost:5000/sports`);
            return res.json();
        },
    })

    return [sports  , refetch]

}

export default useSports;