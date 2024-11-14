import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState(["Learn React", "Practice JavaScript"]);

  const addTodo = () => {
    setTodos([...todos, "New Task"]);
  };

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default TodoList;
