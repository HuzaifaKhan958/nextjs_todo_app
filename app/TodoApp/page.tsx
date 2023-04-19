"use client"
import Link from 'next/link'
import React, { useState } from 'react'

export default function todoApp() {
    const [todo,setTodo]=useState('')
    const [todos,setTodos]=useState([
        {todoText:"task1",completed:true},
        {todoText:"task2",completed:false}
    ]);

    const onClickHandler=(meraelm:any)=>{
        // console.log("merael",meraelm)
        const newTodos = todos.map((todo)=>{
            // console.log("todo",todo)
            if(todo.todoText == meraelm.todoText){
                todo.completed=!todo.completed
            }
            return todo
        });
        // console.log(newTodos)
        setTodos(newTodos);
    }

    const addTodo=()=>{
        const newTodo = {todoText:todo, completed : false}
        const newTodos  = [...todos,newTodo]
        setTodos(newTodos)
        setTodo("")
    }

    const deleteTodo = (meraTodo:any)=>{
        const newTodos = todos.filter((todo)=>{
            if (todo.todoText == meraTodo.todoText) return false
            return true;
        });
        setTodos(newTodos);
    }
  return (
    <>
        <h1>
            TODO APP
        </h1>

        <br/>

        <input placeholder='Add your tasks in todo list' value={todo} onChange={(e)=> {setTodo(e.target.value)}}/>
        <button onClick={addTodo}>Add</button>

        <br/>

        <ul>
            {todos.map((elm)=>{
                return(
                    <li style={{color:elm.completed?"green":"red",fontStyle:"oblique", listStyle:"none"}}
                     key={elm.todoText}>

                        <input type='checkbox' checked={elm.completed} onChange={()=>{onClickHandler(elm)}} />
                        {elm.todoText}
                        <br/>
                        <button style={{backgroundColor:"red"}} onClick={()=>{deleteTodo(elm)}}>Delete</button>

                    </li>
                )
            })}
        </ul>

        <br/>

        <Link href="/">
            Back to home
        </Link>


    </>
  )
}
