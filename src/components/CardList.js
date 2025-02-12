import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const CardList = ({ showCards }) => {
  if (!showCards) return null;

  const cards = [
    { title: "Intrested in playing guitar", description: "I've been playing guitar for about three years now and have improved my skills. I play both rhythm and lead guitar and have also performed in a mini concert with my friends in our music class. Our teacher Sir Miuranga is very supportive and always helps us; because of that, our love for music never fades." },
    { title: "Intrested in playing badminton", description: "I've been playing badminton since grade 7, and now I attend an academy. There are two coaches who train us, Coach Sahan and Coach Nishan. I also met two new friends, Gigiri, who is five years older than me, and Siyath, who is one year older. When playing doubles at the academy, almost every time, Siyath and I are doubles partners. He and Gigiri help me with my mistakes and guide me like two coaches. I love playing badminton even more now since I have two friends to support and guide me." },
  ]

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
