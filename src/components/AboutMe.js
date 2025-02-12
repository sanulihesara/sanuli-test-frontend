import React, { useEffect, useState } from "react";
import { Avatar, Container, Typography, CircularProgress, List, ListItem } from "@mui/material";
import axios from "axios";

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
      <Avatar
        alt={data.name}
        src="https://png.pngtree.com/thumb_back/fw800/background/20240513/pngtree-cute-anime-boy-listening-music-image_15731154.jpg"
        sx={{ width: 200, height: 200, margin: "auto", marginBottom: "1.5rem" }}
      />
      <Typography variant="h4" gutterBottom>About Me</Typography>
      <Typography variant="body1" paragraph>{data.description}</Typography>
      <Typography variant="h5" gutterBottom>Hobbies</Typography>
      <List>
        {data.hobbies.map((hobby, index) => (
          <ListItem key={index}>
            <Typography variant="body1">{hobby}</Typography>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default AboutMe;
