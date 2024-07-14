import Link from 'next/link';
export default function ProductDetails() {
    let productId = 100;
    return (
        <>
            <h1>This is Product details page</h1>
            <Link href="/">Home</Link>
            <h2><Link href="products/1">Product 1</Link></h2>
            <h2><Link href="products/2">Product 2</Link></h2>
            <h2><Link href="products/3" replace>Product 3</Link></h2>
            <h2><Link href={`products/${productId}`}>product {productId}</Link></h2>
        </>
    )
}