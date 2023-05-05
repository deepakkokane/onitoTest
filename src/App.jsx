import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUser from "./pages/AddUser/AddUser";
import ListUsers from "./pages/ListUsers/ListUsers";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddUser />} />
        <Route path="/listusers" element={<ListUsers />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
