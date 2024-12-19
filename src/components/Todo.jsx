import Form from "./Form"
import TodoItem from "./TodoItem"
import Header from "./header"
import { useState } from "react";

export default function Todo() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    return (
        <>
        <Header/>
        <Form todo={todo} todos={todos} setTodo={setTodo} setTodos={setTodos}/>
        <TodoItem todos={todos}/>
        </>
    )
}