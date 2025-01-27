import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = ({ open, onClose }) => {
  return (
    <Drawer open={open} onClose={onClose}>
      <List>
        <ListItem button component={Link} to="/" onClick={onClose}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/about-me" onClick={onClose}>
          <ListItemText primary="About Me" />
        </ListItem>
        <ListItem button component={Link} to="/my-school" onClick={onClose}>
          <ListItemText primary="My School" />
        </ListItem>
        <ListItem button component={Link} to="/contact" onClick={onClose}>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
