import React from "react";
import { AppBar as MuiAppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const AppBar = ({ onMenuClick, title }) => {
  return (
    <MuiAppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={onMenuClick}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title || "My App"}
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
