import { useState } from "react";
import TodoItem from "./TodoItem"; // If you kept Todo.jsx


export default function Form({todo, todos, setTodo, setTodos}) {
    const handleOnChange = (e) => {
        setTodo(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (todo.trim() !== "") {
            setTodos([...todos, todo]);
            setTodo("");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                value={todo}
                onChange={handleOnChange}
                 />
                <button type="submit">Add Todo</button>
            </form>
        </>
    );
}