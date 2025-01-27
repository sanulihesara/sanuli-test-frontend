import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const CardList = ({ showCards }) => {
  if (!showCards) return null;

  const cards = [
    { title: "Skill 1", description: "Description of Skill 1" },
    { title: "Skill 2", description: "Description of Skill 2" },
  ];

  return (
    <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
      {cards.map((card, index) => (
        <Card key={index} sx={{ maxWidth: 300 }}>
          <CardContent>
            <Typography variant="h5">{card.title}</Typography>
            <Typography>{card.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CardList;
