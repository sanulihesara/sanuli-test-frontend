import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const CardList = ({ showCards }) => {
  if (!showCards) return null;

  const cards = [
    { title: "Intrested in playing guitar", description: "I've been playing guitar for about three years now and have improved my skills. I play both rhythm and lead guitar and have also performed in a mini concert with my friends in our music class. Our teacher is very supportive and always helps us; because of that, our love for music never fades." },
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
