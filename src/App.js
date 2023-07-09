import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { Grid } from "@mui/material";
import { SideBarWidth } from "./Config";

const App = () => {
  return (
    <Grid display={"flex"} flexDirection={"row"} width={"100vw"}>
      <Sidebar />
      <Grid
        display={"flex"}
        flexDirection={"column"}
        width={`calc(100vw - ${SideBarWidth}px)`}
      >
        <Header />
        <Content />
      </Grid>
    </Grid>
  );
};

export default App;
