import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { todoContext } from "../../Contexts/todoContext";

const List = () => {
  const { getTodos, todos, deleteTodo } = useContext(todoContext);
  const navigate = useNavigate();
  useEffect(() => {
    getTodos();
  }, []);
  console.log(todos);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      {todos.map(item => (
        <div key={item.id}>
          {item.todo}{" "}
          <button
            style={{ backgroundColor: "red" }}
            onClick={() => deleteTodo(item.id)}>
            Delete
          </button>
          <button
            style={{ backgroundColor: "green" }}
            onClick={() => navigate(`/edit/${item.id}`)}>
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default List;
