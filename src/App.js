import { useContext } from "react";
import "./App.css";
import { actions, StoreContext } from "./store";

function App() {
  const [state, dispatch] = useContext(StoreContext);
  const { todos, todoInput } = state;

  console.log(todoInput)

  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput))
  }

  return (
    <div className="App">
      <header className="App-header">
        Template Context API
        <input
          value={todoInput}
          placeholder="Enter todo..."
          onChange={(e) => { dispatch(actions.setTodoInput(e.target.value)) }}
        />
        <button onClick={handleAdd}>Add</button>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </header>
    </div>
  );
}

export default App;
