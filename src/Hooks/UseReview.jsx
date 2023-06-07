import { useEffect, useState } from "react"

const useReview = () => {
    const [review , setReviews] = useState([])

    useEffect(()=>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return [review]
}

export default useReview;