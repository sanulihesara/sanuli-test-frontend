import React from "react";
import { Container, Typography, Card, CardMedia, CardContent } from "@mui/material";

function MySchool() {
  return (
    <Container maxWidth="md" style={{ padding: "2rem", textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        My School
      </Typography>
      <Card sx={{ maxWidth: 600, margin: "auto", borderRadius: 2, boxShadow: 3 }}>
        <CardMedia
          component="img"
          height="300"
          image="https://www.musaeus.lk/wp-content/gallery/main-banner/musaeus-banner1_0.jpg"
          alt="Musaeus College"
        />
        <CardContent>
          <Typography variant="body1" paragraph>
            I attended Musaeus College, a place that has greatly contributed to my
            personal and academic growth. It is located in Kurunduwatte, Colombo 07.
          </Typography>
          <Typography variant="body1" paragraph>
            Musaeus College is a Buddhist private girls' school in Colombo, Sri Lanka.
            Our principal is Mrs. Sajeewani Bandara. There are about 350-400 teachers,
            and approximately 6500-7000 students in Musaeus College.
          </Typography>
          <Typography variant="body1" paragraph>
            The school is named after its founding principal, Marie Musaeus Higgins from
            Wismar, Germany, who served from 1891 to 1926. Musaeus College was founded in 1891
            by Marie Musaeus Higgins, Peter De Abrew, Henry Steel Olcott, and Annie Besant.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default MySchool;
