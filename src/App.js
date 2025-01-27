import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppBar from "./components/AppBar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import MySchool from "./components/MySchool";
import Contact from "./components/Contact";
import CardList from "./components/CardList";
import { Button, CssBaseline, Typography } from "@mui/material";

function App() {
  // States for Sidebar and CardList
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showCards, setShowCards] = useState(false);

  // Handlers
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const handleShowCards = () => setShowCards(!showCards);

  return (
    <Router>
      <CssBaseline />
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
          backgroundColor: "#f5f5f5",
          minHeight: "100vh",
        }}
      >
        {/* Application Header */}
        <AppBar onMenuClick={toggleSidebar} title="My Portfolio" />
        
        {/* Sidebar */}
        <Sidebar open={sidebarOpen} onClose={toggleSidebar} />
        
        {/* Content Area */}
        <div style={{ padding: "1rem" }}>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              color: "#673ab7",
              marginBottom: "1rem",
            }}
          >
            Welcome to My Portfolio
          </Typography>

          {/* CardList Toggle Button */}
          <Button
            variant="contained"
            color="secondary"
            onClick={handleShowCards}
            sx={{ marginBottom: "1rem" }}
          >
            {showCards ? "Hide My Details" : "View My Details"}
          </Button>

          {/* Conditional Card List */}
          <CardList showCards={showCards} />
        </div>
        
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/my-school" element={<MySchool />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        {/* Footer */}
        <footer
          style={{
            marginTop: "2rem",
            padding: "1rem",
            backgroundColor: "#673ab7",
            color: "#fff",
          }}
        >
          <Typography variant="body2">
            © 2025 My Portfolio. All rights reserved.
          </Typography>
        </footer>
      </div>
    </Router>
  );
}

export default App;
