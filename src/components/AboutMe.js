import React, { useEffect, useState } from "react";
import { Avatar, Container, Typography, CircularProgress, List, ListItem, Card, CardContent } from "@mui/material";
import axios from "axios";
import { TypeAnimation } from "react-type-animation";

function AboutMe() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5002/about")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!data) return (
    <Container maxWidth="sm" style={{ textAlign: "center", padding: "2rem" }}>
      <CircularProgress />
      <Typography variant="h6" style={{ marginTop: "1rem" }}>Loading...</Typography>
    </Container>
  );

  return (
    <Container maxWidth="sm" style={{ textAlign: "center", padding: "2rem" }}>
      <Card sx={{ boxShadow: 5, borderRadius: 3, padding: "2rem", backgroundColor: "#f5f5f5" }}>
        <CardContent>
          <Avatar
            alt={data.name}
            src="https://png.pngtree.com/thumb_back/fw800/background/20240513/pngtree-cute-anime-boy-listening-music-image_15731154.jpg"
            sx={{ width: 200, height: 200, margin: "auto", marginBottom: "1.5rem", boxShadow: 3 }}
          />
          <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", color: "#1976d2" }}>
            About Me
          </Typography>
          <TypeAnimation
            sequence={[data.description, 1000]}
            wrapper="p"
            speed={50}
            style={{ fontSize: "1.2rem", marginBottom: "1.5rem", color: "#333" }}
            repeat={Infinity}
          />
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", marginTop: "1rem", color: "#d32f2f" }}>
            Hobbies
          </Typography>
          <List>
            {data.hobbies.map((hobby, index) => (
              <ListItem key={index} sx={{ transition: "transform 0.3s", '&:hover': { transform: "scale(1.05)" } }}>
                <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>{hobby}</Typography>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Container>
  );
}

export default AboutMe;
