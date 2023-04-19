import React from 'react'
import Link from 'next/link'


export default function Home() {
  return (
    <>
    <h1>Home</h1>
    <br />
    <Link href="/StrLength">
      Calculate The Length Of String
    </Link>
    <br />
    <Link href="/Counter">
      Counter App
    </Link>
    <br/>
    <Link href="/TodoApp">
      Todo App
    </Link>
    </>
  )
}

