"use client"
import React, { useState } from 'react'
import Link from 'next/link';
export default function counterApp() {

    const [counter,setCounter]=useState(0);
    const decrement = () =>{
        setCounter(counter-1)
    }
    const increment = () =>{
        setCounter(counter+1)
    }
  return (
    <>
    <button onClick={decrement}>Decrement</button>
    <br/>
    {counter}
    <br/>
    <button onClick={increment}>Increment</button>
    <br/>
    <br/>
    <Link href="/">
        Back to home
    </Link>
    </>
  )
}
