"use client"


import { notFound } from "next/navigation";

function getRandomInt(max: number) {
    return Math.floor(Math.random()*max);
}

export default function ReviewDetail({
    params,
}: {
    params: { productId: string; reviewId: string};
}) {

    //const random = getRandomInt(2)

    //if(random===1) {

        //throw new Error("Error loading product");                                                     

    //}

    if (parseInt(params.reviewId)>1000) {
        notFound();
    }
    return (
        <h1>
            Review {params.reviewId} for product {params.productId}
            </h1>
    )

}