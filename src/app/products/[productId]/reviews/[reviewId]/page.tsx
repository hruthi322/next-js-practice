import { notFound } from "next/navigation";

function getRandomId(count: number) {
    return Math.floor(Math.random() * count);
}

export default function ReviewDetail({params}: {params: {
    productId: string;
    reviewId: string
}}) {
    const random = getRandomId(2);
    if(random === 1) {
        throw new Error("Error Loading review");
    }
    if(parseInt(params.reviewId) > 1000) {
        notFound();
    }
    return (
        <h1>
            Review {params.reviewId} for product {params.productId}
        </h1>
    )
}