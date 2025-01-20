import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import axios from "axios";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    textAlign: "center",
  },
  avatar: {
    width: 200,
    height: 200,
    marginBottom: "1.5rem",
  },
};

function AboutMe() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5002/about")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div style={styles.container}>
      <Avatar
        alt={data.name}
        src="https://png.pngtree.com/thumb_back/fw800/background/20240513/pngtree-cute-anime-boy-listening-music-image_15731154.jpg"
        sx={styles.avatar}
      />
      <h1>About Me</h1>
      <p>{data.description}</p>
      <h2>Hobbies</h2>
      <ul>
        {data.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

export default AboutMe;
