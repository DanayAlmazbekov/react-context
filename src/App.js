import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Add from "./Components/Add/Add";
import Counter from "./Components/Counter/Counter";
import Edit from "./Components/Edit/Edit";
import List from "./Components/List/List";

import CounterContextProvider from "./Contexts/counterContext";
import TodoContextProvider from "./Contexts/todoContext";

const App = () => {
  return (
    <TodoContextProvider>
      <CounterContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/counter" element={<Counter />} />
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </BrowserRouter>
      </CounterContextProvider>
    </TodoContextProvider>
  );
};

export default App;
