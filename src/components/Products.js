import React from "react";
import image from "../images/image.png";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";

const products = [
  {
    id: "1",
    name: "Nike Blazer Mid '77",
    description: "Classic sneakers with a vintage look.",
    imageUrl: image,
  },
  {
    id: "2",
    name: "Nike Air Max 270",
    description: "Air Max series with a comfortable and stylish design.",
    imageUrl: image1,
  },
  {
    id: "3",
    name: "Nike React Element 55",
    description: "Modern design with React technology for a comfortable feel.",
    imageUrl: image2,
  },
  {
    id: "4",
    name: "Nike Zoom Pegasus Turbo 2",
    description: "Lightweight and responsive running shoes.",
    imageUrl: image3,
  },
  {
    id: "5",
    name: "Nike Air Force 1",
    description: "Timeless style and versatility.",
    imageUrl: image4,
  },
  {
    id: "6",
    name: "Nike Joyride Run Flyknit",
    description: "Innovative cushioning for a smooth and comfortable run.",
    imageUrl: image4,
  },
];

const Products = () => {
  return (
    <div className="products-list">
      {products.map((product) => (
        <Sneaker
          key={product.id}
          imageUrl={product.imageUrl}
          header={product.name}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default Products;
