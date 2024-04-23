import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>Home</div>
      <Link href='/blog'>blog</Link>
      <Link href='/products'>Product</Link>
    </>
  )
}
