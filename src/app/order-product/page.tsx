"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        console.log("placing your order");
        router.push("/");
        // router.back();
    }
    return(
        <>
        <h1>Order product</h1>
        <button className="m-2 p-2 rounded-3xl bg-gray-900 text-zinc-50"onClick={handleClick}>Place order</button>
        </>
    )
}