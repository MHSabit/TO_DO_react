export default function TodoItem(props) {
    const todos = props.todos;
    return (
        <div>
            {todos.map((todoItem, index) => (
                <p key={index}>{todoItem}</p>
            ))}
        </div>
    )
}