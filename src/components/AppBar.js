import React from "react";
import { AppBar as MuiAppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function AppBar({ onMenuClick }) {
  return (
    <MuiAppBar position="static" sx={{ backgroundColor: "#6a1b9a" }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={onMenuClick}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Website
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
