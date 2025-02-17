import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const CardList = ({ showCards }) => {
  if (!showCards) return null;

  const cards = [
    {
      title: "Interested In Playing Guitar",
      description: "I've been playing guitar for about three years now and have improved my skills. I play both rhythm and lead guitar and have also performed in a mini concert with my friends in our music class. Our teacher Sir Miuranga is very supportive and always helps us; because of that, our love for music never fades.",
      image: "https://images3.alphacoders.com/823/823236.jpg"
    },
    {
      title: "Interested In Playing Badminton",
      description: "I've been playing badminton since grade 7, and now I attend an academy. There are two coaches who train us, Coach Sahan and Coach Nishan. I also met two new friends, Gigiri, who is five years older than me, and Siyath, who is one year older. When playing doubles at the academy, almost every time, Siyath and I are doubles partners. He and Gigiri help me with my mistakes and guide me like two coaches. I love playing badminton even more now since I have two friends to support and guide me.",
      image: "https://www.shutterstock.com/image-photo/asian-badminton-player-holds-racket-600nw-2242240877.jpg"
    },
    {
      title: "Always Loved Photography",
      description: "I love to take photos. The person who made me love photography was my friend Ashini. She is a very good photographer for age. She signed me up to the Photography Club in school. Since we both don't have a camera her and mother and mine decieded to buy us one to share. It was our first camera and it had areally good quality. We both love to take photos of animals in safari also known and wild life and landscapes. Ashini gave me a lot of helpful tips to take beautiful photos. We will be continuing our work and will improve more and more.",
      image: "https://images.squarespace-cdn.com/content/v1/5da149f5863db20997888fc3/1602056190431-C0OT2CBBCGKGSL1U0VYC/element5-digital-7oOOcPuHhIk-unsplash.jpg"
    }
  ];

  return (
    <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
      {cards.map((card, index) => (
        <Card key={index} sx={{ maxWidth: 300 }}>
          <CardMedia
            component="img"
            height="140"
            image={card.image}
            alt={card.title}
          />
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
