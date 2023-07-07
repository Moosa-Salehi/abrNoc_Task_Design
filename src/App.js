import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box display={"flex"}>
      <Sidebar />
      <Header />
      <Content />
    </Box>
  );
};

export default App;
