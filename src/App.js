import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppBar from "./components/AppBar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import MySchool from "./components/MySchool";
import CardList from "./components/CardList";
import { Button } from "@mui/material";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showCards, setShowCards] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const handleShowCards = () => setShowCards(!showCards);

  return (
    <Router>
      <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", backgroundColor: "#d6a4e1", minHeight: "100vh" }}>
        <AppBar onMenuClick={toggleSidebar} />
        <Sidebar open={sidebarOpen} onClose={toggleSidebar} />
        <div style={{ padding: "1rem" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleShowCards}
            sx={{ marginBottom: "1rem" }}
          >
            {showCards ? "Hide My Details" : "View My Details"}
          </Button>
          <CardList showCards={showCards} />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/my-school" element={<MySchool />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
