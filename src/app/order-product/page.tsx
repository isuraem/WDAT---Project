"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

export default function OrderProduct() {
    const router = useRouter();

    const handleClick = () => {
        console.log("placing order");
        router.push("/")
    }
  return (
    <div>
      <h1>Order Product</h1>
      <button onClick={handleClick}> place order</button>
    </div>
  )
}
