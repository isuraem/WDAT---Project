import { notFound } from "next/navigation"
function getRandomInt(count: number){
    return Math.floor(Math.random() * count);
}
export default function ProductDetails({ params, }:
    { params: { 
        productId: string,
        reviewId: string
    } }
) {
    const random = getRandomInt(2)

    if(random === 1){
        throw new Error("Error loading Review")
    }

    if(parseInt(params.reviewId) > 1000){
        notFound()
    }

    return (
        <div>
            <h1>Review {params.reviewId} about product {params.productId}</h1>
        </div>
    )
}
