import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const CardList = ({ showCards }) => {
  if (!showCards) return null;

  const cards = [
    {
      title: "Interested In Playing Guitar",
      description: "I've been playing the guitar for about three years now and have significantly improved my skills. I play both rhythm and lead guitar and had the opportunity to perform in a mini concert with my friends in our music class. Our teacher, Sir Miuranga, is incredibly supportive and always guides us, fostering our passion for music and ensuring that our love for it never fades.",
      image: "https://images3.alphacoders.com/823/823236.jpg"
    },
    {
      title: "Interested In Playing Badminton",
      description: "I've been playing badminton since Grade 7, and now I train at an academy under the guidance of two coaches, Coach Sahan and Coach Nishan. Along the way, I’ve made two great friends Gigiri, who is five years older than me, and Siyath, who is one year older. Almost every time I play doubles at the academy, Siyath and I team up as partners. Both he and Gigiri not only help me correct my mistakes but also mentor me like additional coaches. Their support and guidance have deepened my love for badminton even more.",
      image: "https://www.shutterstock.com/image-photo/asian-badminton-player-holds-racket-600nw-2242240877.jpg"
    },
    {
      title: "Always Loved Photography",
      description: "I love photography, and the person who inspired my passion for it is my friend Ashini. She is an incredibly talented photographer for her age. She even signed me up for the Photography Club at school. Since neither of us had a camera, our mothers decided to buy one for us to share. It was our very first camera, and the quality was excellent. We both enjoy capturing photos of animals in safaris—also known as wildlife photography—and breathtaking landscapes. Ashini has given me many helpful tips on taking beautiful photos. We are excited to continue our journey and improve our skills more and more.",
      image: "https://images.squarespace-cdn.com/content/v1/5da149f5863db20997888fc3/1602056190431-C0OT2CBBCGKGSL1U0VYC/element5-digital-7oOOcPuHhIk-unsplash.jpg"
    },
    {
      title: "Love To Read Sherlock Holmes Books",
      description: "I used to be someone who hated reading any book, especially Sherlock Holmes, because I thought it was useless and boring. I disliked it even more when my cousins forced me to read it. However, when I finally started reading the first book, I was surprised—I couldn't believe I had underestimated it. The book was amazing, filled with curiosity and adventure. I eventually finished reading the entire series, but even now, I often find myself rereading the same books over and over again. There are also many valuable lessons to learn from them.",
      image: "https://i.pinimg.com/736x/fc/2f/e1/fc2fe1ad2fedb692a52ad78d5f30a9cc.jpg"
    },
    {
      title: "Travelling",
      description: "I am a risk-taker, and I can’t change that—it’s just part of who I am. I love to travel, and if I weren’t still a kid, I would have already explored all of Sri Lanka and might have even started traveling to other countries with my cousin Vosandi, who is just like me. I have a passion for adventure and enjoy activities like mountain climbing, zip-lining, and bungee jumping. So far, I’ve only experienced zip-lining and mountain climbing, but I hope to try bungee jumping in the future. I also dream of visiting South Korea and Canada during autumn and winter, as I’ve heard they are breathtakingly beautiful during those seasons.",
      image: "https://www.ecozipadventures.co.nz/wp-content/uploads/2021/05/EcoZip-Dec2020-697-1024x683.jpg"
    },
    {
      title: "Web Development",
      description: "I am a web developer. My teacher, Mr. Nipuna Rambukkange, is very kind to his students and always helps us with difficult tasks. From day one, he has always been there for us and never lets us miss a class. Even if we do, he sends us the recording and helps us catch up during the next session. He never gets mad at us or makes fun of us for making mistakes. Thanks to him, my classmates and I have successfully passed our first level, and we will be completing our second level by the end of this month. We truly appreciate him and owe him a big 'Thank You' for teaching us advanced lessons and guiding us through challenges. I look forward to continuing my lessons with him and learning even more as I grow.",
      image: "https://t3.ftcdn.net/jpg/02/14/53/92/360_F_214539232_YnUrtuwUEt84gHuU0qG8l7OwZvH4rnPG.jpg"
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
