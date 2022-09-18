import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  Rock: [
    { name: "Stairway to Heaven - Led Zeppelin", rating: "10/10" },
    { name: "Back in Black - AC/DC", rating: "9/10" },
    { name: "Bohemian Rhapsody - Queen", rating: "8/10" },
    { name: "Highway to Hell - AC/DC", rating: "8.5/10" },
    { name: "Gimme Shelter - The Rolling Stones", rating: "7.5/10" }
  ],

  Pop: [
    {
      name: "Blinding Lights - The Weekend",
      rating: "10/10"
    },
    {
      name: "Shake it off - Taylor Swift",
      rating: "7.5/10"
    },
    {
      name: "Umbrella - Rhianna",
      rating: "8/10"
    },
    {
      name: "Rolling in the deep - Adele",
      rating: "10/10"
    },
    {
      name: "Poker Face - Lady Gaga",
      rating: "9/10"
    }
  ],
  EDM: [
    {
      name: "Titanium - David Guetta | ft.Sia",
      rating: "9/10"
    },
    {
      name: "Ghosts n Stuff - Deadmau5",
      rating: "9.5/10"
    },
    {
      name: "How deep is your love - Calvin Harris",
      rating: "10/10"
    },
    {
      name: "Animals - Martin Garrix",
      rating: "8.5/10"
    },
    {
      name: "Shivers - Armin van Buuren",
      rating: "8.5/10"
    }
  ],
  "R&B": [
    {
      name: "Say My Name - Destiny's Child",
      rating: "9/10"
    },
    {
      name: "All Night - Beyonce",
      rating: "7.5/10"
    },
    {
      name: "Return of the Mack - Mark Morrison",
      rating: "8/10"
    },
    {
      name: "If I Ain't Got You - Alicia Keys",
      rating: "8.5/10"
    },
    {
      name: "Cranes in the Sky - Solange",
      rating: "8.5/10"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Rock");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 🎼 Music liB 🎶 </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite songs. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
