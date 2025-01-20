import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";

const cardData = [
  {
    id: 1,
    title: "Web Development",
    description: "I've learned the latest in web development and design trends with my teacher Mr.Nipuna. I have passed some levels and have received a certificate too. These days I am creating a web page about me with the help of my teacher. I enjoy creating web pages and will continue it well.",
    image: "https://t3.ftcdn.net/jpg/02/14/53/92/360_F_214539232_YnUrtuwUEt84gHuU0qG8l7OwZvH4rnPG.jpg",
  },
  {
    id: 2,
    title: "Photography",
    description: "I love photography. I joined the Photography Club in school two years ago. My favourite things to capture are Animals and also The Circle of life. I love to go on Safari when we visit to Hambanthota or Yala for vacation in the holidays so I can capture the things I love. I also enjoy editing these photos in my free time. I love to do more and more photography in the future. ",
    image: "https://thumbs.dreamstime.com/b/woman-professional-photographer-photo-camera-woman-professional-photographer-photo-camera-outdoor-young-girl-102260585.jpg",
  },
  {
    id: 3,
    title: "Travel",
    description: "I love to travel. Specially hiking. I enjoy climbing moutains. I climbed the Adam's Peak and other moutains I don't know the names. Since I am am still a little teenager i can't go around the world alone to to travel. But I do enjoy travelling in my own country. I acually don't like to travel alone. I lke to travel with a group of four including me. I have found the perfect three people to travel around the world with me in the future and they are my closest relatives. I hope make this dream of mine come true so I can acually go travel with them.",
    image: "https://e1.pxfuel.com/desktop-wallpaper/208/521/desktop-wallpaper-50-airplane-view-plane-view.jpg",
  },
  {
    id: 4,
    title: "Playing an Instrument",
    description: "I can play the guitar and the piano but mostly I enjoy playing the guitar. I wanted to play these instruments because my role model Kim Seungmin also known as Sky Kim is playing these instrument and I found it very fun and a way to spend my time usefully. It's acually my favourite hobby. I can play Lead, Picking, Rythm ans Finger-style too. There lots of songs I can play in the guitar. It has been two years since I started to play the guitar. It is the best way to calm myself during the term exams in school. After playing the guitar or the piano for half an hour I fell very calm. ",
    image: "https://img.freepik.com/free-photo/man-playing-acoustic-guitar-piano-close-up-recording-notes-beautiful-color-background-music-activity-concept_169016-4459.jpg",
  },
  {
    id: 5,
    title: "Reading",
    description: "I love to read. When I was younger i didn't like to read, I didn't even touch a book to read. One day when I was at my cousin's place I was starting to feel bored. Then she gave me a Sherlock Holmes book to read. And without knowing I finished reading the whole book and since then I couldn't stop reading these books. I also started to read other books too. Now when I have time even after playing the instrument I read a book. I love to read a lot now.",
    image: "https://i.pinimg.com/originals/fc/2f/e1/fc2fe1ad2fedb692a52ad78d5f30a9cc.jpg",
  },
];

function CardList({ showCards }) {
  if (!showCards) return null;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {cardData.map((card) => (
        <Card key={card.id} sx={{ maxWidth: 300, margin: "1rem" }}>
          <CardMedia
            component="img"
            height="200"
            image={card.image}
            alt={card.title}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {card.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default CardList;
