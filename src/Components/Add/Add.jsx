import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { todoContext } from "../../Contexts/todoContext";

const Add = () => {
  const { createTodo } = useContext(todoContext);
  const navigate = useNavigate();
  const [todo, setTodo] = useState("");
  function handleSave() {
    let newTodo = {
      todo,
    };
    createTodo(newTodo);
    navigate("/list");
    console.log(newTodo);
  }
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "80px",
      }}>
      <TextField
        value={todo}
        onChange={e => setTodo(e.target.value)}
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />
      <Button onClick={() => handleSave()} variant="contained">
        Add
      </Button>
    </Box>
  );
};

export default Add;
