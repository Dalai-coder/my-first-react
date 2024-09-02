import React from "react";
import Avengers from "./Avengers";
import image5 from "../images/image copy.png";
import image6 from "../images/image5.png";
import image7 from "../images/image6.png";
import image8 from "../images/image7.png";

const products1 = [
  {
    id: "1",
    name: "The Avengers",
    description: "Superheroes team up to save the world.",
    imageUrl: image5,
  },
  {
    id: "2",
    name: "Spider-Man: Into the Spider-Verse",
    description: "An animated adventure with multiple Spider-People.",
    imageUrl: image6,
  },
  {
    id: "3",
    name: "Iron man 3",
    description:
      "Iron Man 3 is a 2013 American superhero film based on the Marvel Comics character Iron Man",
    imageUrl: image7,
  },
  {
    id: "4",
    name: "Thor: Love and Thunder",
    description:
      "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.",
    imageUrl: image8,
  },
];
const Products1 = () => {
  return (
    <div className="products1-list">
      {products1.map((product1) => (
        <Avengers
          key={product1.id}
          imageUrl={product1.imageUrl}
          header={product1.name}
          description={product1.description}
        />
      ))}
    </div>
  );
};

export default Products1;
