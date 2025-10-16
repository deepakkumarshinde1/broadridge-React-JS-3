import { useEffect, useState } from "react";
import api from "../config/api.axios.config";

function Todo() {
  let [input, setInput] = useState("");
  let [todoList, setTodoList] = useState([]);
  let saveTodo = () => {
    setTodoList([...todoList, { title: input, id: todoList.length + 1 }]);
    setInput("");
  };

  let getTodoList = async () => {
    let response = await api.get("/todos");
    console.log(response);
    setTodoList(response.data);
  };

  useEffect(() => {
    getTodoList();
  }, []);

  return (
    <>
      <section>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          data-testid="input"
        />
        {input && <button onClick={saveTodo}>Save</button>}
      </section>
      <section>
        <ul data-testid="list">
          {todoList.map((value, index) => {
            return (
              <li data-testid="todo-items" key={value.id}>
                {value.title}
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default Todo;
