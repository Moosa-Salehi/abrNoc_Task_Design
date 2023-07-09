import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { Grid } from "@mui/material";

const App = () => {
  return (
    <Grid display={"flex"} flexDirection={"row"}>
      <Sidebar />
      <Grid display={"flex"} flexDirection={"column"}>
        <Header />
        <Content />
      </Grid>
    </Grid>
  );
};

export default App;
