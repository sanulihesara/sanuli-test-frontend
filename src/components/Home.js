import React from "react";

function Home() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      {/* Welcome Banner */}
      <div style={{ marginBottom: "2rem" }}>
        <img
          src="https://img.freepik.com/premium-photo/welcome-banner_1268171-11466.jpg"
          alt="Welcome Banner"
          style={{
            width: "100%",
            maxWidth: "800px",
            height: "auto",
            borderRadius: "10px",
            display: "block",
            margin: "0 auto",
          }}
        />
      </div>

      {/* Main Content */}
      <h1>Welcome to My Website</h1>
      <p>
        This is the homepage of my personal website. Use the navigation bar or
        sidebar to explore more.
      </p>
    </div>
  );
}

export default Home;
