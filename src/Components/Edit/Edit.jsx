import { Box, Button, Container, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { todoContext } from "../../Contexts/todoContext";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getOneTodo, oneTodo, updateTodo } = useContext(todoContext);
  const [todo, setTodo] = useState("");
  useEffect(() => {
    getOneTodo(id);
  }, []);
  useEffect(() => {
    if (oneTodo) {
      setTodo(oneTodo.todo);
    }
  }, [oneTodo]);
  function handleSave() {
    let editedTodo = {
      todo,
    };
    updateTodo(id, editedTodo);
    navigate("/list");
    console.log(editedTodo);
  }

  return (
    <Container>
      {oneTodo ? (
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "40px",
          }}>
          <TextField
            value={todo}
            onChange={event => setTodo(event.target.value)}
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "grey",
              color: "white",
              alignItems: "center",
            }}
            label="edit"
            variant="outlined"
          />
          <Button
            onClick={handleSave}
            style={{
              backgroundColor: "green",
              color: "white",
              marginTop: "5px",
            }}
            variant="outlined">
            Save
          </Button>
        </Box>
      ) : (
        <h2>Loading...</h2>
      )}
    </Container>
  );
};

export default Edit;
