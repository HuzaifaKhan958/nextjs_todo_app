"use client";
import { useState } from "react";
import Link from "next/link";

export default function StrPrac() {
  
  const [val1,setVal1]=useState("Hello Huzaifa");
  const [val2,setVal2]=useState("Bye Huzaifa")
  
  const onChangeHandler1 = (e: any) => {
    // console.log("e is :", e.target.value);
    setVal1(e.target.value)
  };

  const onChangeHandler2 = (e:any)=>{
    // console.log("e is :", e.target.value)
    setVal2(e.target.value)
  }
  
  return (
    <>
      <input type={"text"} value={val1} onChange={onChangeHandler1}/>
      <br />
      <input type={"text"} value={val2} onChange={onChangeHandler2}/>
      <br />
      lenght of string 1 is: {val1.length}
      <br />
      lenght of string 2 is: {val2.length}
      <br/>
      <br/>
      <Link href="/">
        Back To Home
      </Link>
    </>
    
  );
}