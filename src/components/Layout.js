import React, { memo } from "react";
import { AppBar, Toolbar, Typography, Paper } from "@material-ui/core";

const Layout = memo(props => (
  <Paper
    elevation={0}
    style={{ padding: 0, margin: 0, backgroundColor: "#fafafa" }}
  >
    <AppBar  position="static" style={{ height: 64, color: "white", backgroundColor: "red" }}>
      <Toolbar style={{ height: 64 }}>
        <Typography color='red'>INVITE LIST</Typography>
      </Toolbar>
    </AppBar>
    {props.children}
  </Paper>
));

export default Layout;