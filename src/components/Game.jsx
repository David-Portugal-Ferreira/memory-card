import { useEffect, useState } from "react";
import Card from "./Card";
import "../styles/game.css";

export default function Game() {
  const [images, setImages] = useState([]);
  const [imagesIds, setImagesIds] = useState([]);
  const [score, setScore] = useState(0);

  let cards = images.map((card, index) => {
    return (
      <Card
        key={index}
        card={card}
        suffle={suffleArray}
        checkImagesIds={checkImagesIds}
      />
    );
  });

  function checkImagesIds(id) {
    if (imagesIds.includes(id)) {
      setScore(0);
      setImagesIds([]);
    } else {
      setImagesIds([...imagesIds, id]);
      setScore(score + 1);
    }
  }

  function suffleArray() {
    console.log(images);
    for (let i = images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
    }
    return images;
  }

  useEffect(() => {
    async function fetchData() {
      try {
        await fetch(
          "https://api.giphy.com/v1/gifs/trending?api_key=dH6eBbh6ucxMblVvigldoypBsYjEXfUS&limit=10&offset=0&rating=g&bundle=messaging_non_clips"
        )
          .then((response) => response.json())
          .then((response) => setImages(response.data));
        console.log(images);
      } catch (e) {
        console.log(e);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="game-wrapper">
      {images.length === 0 ? <h1>Loading</h1> : cards}
    </div>
  );
}
