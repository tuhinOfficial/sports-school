import { useQuery } from "@tanstack/react-query";

const useSports = ()=> {

    const {data: sports=[] , refetch} = useQuery({
        queryKey: ['sports' , 'totalStudent' ,'sportsName'],
        queryFn : async ()=> {
            const res = await fetch(`https://sport-school-server-tuhinofficial.vercel.app/sports`);
            return res.json();
        },
    })

    return [sports  , refetch]

}

export default useSports;