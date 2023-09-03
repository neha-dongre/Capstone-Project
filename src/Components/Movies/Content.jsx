import React from "react";
import Profile from "../../assets/profileSmall.png"

const Content = () => {

  return (
    <>
      <img
        src={Profile}
        alt={Profile}
        style={{
          position: "absolute",
          top: "2vh",
          right: "3vw",
          height: "60px",
          width: "60px",
        }}
      />
      <div
        style={{
          width: "100vw",
          minHeight: "100vh",
          background: "black",
          overflowX: "hidden",
        }}
      >
        <p style={{ color: "green", fontSize: "4rem", margin: "1vw 3rem" }}>
          Super app
        </p>
        <p
          style={{
            color: "white",
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            fontSize: "2rem",
            margin: "3vw 5rem",
          }}
        >
          Entertainment according to your choice
        </p>
      </div>
    </>
  );
};

export default Content ;



