import React from 'react';

const ExampleCarouselImage = ({ text }) => {
  let div = null;

  if (text === "First slide") {
    div = (
      <div className="h-[600px] bg-cover bg-center">
        <img src="https://www.hindustantimes.com/ht-img/img/2024/09/22/1600x900/Garlic_Coffee_1722949921853_1727007650059.jpg" alt="" />
      </div>
    );
  } else if (text === "Second slide") {
    div = (
      <div className="h-[600px] bg-cover bg-center">
        <img src="https://coffeebean.com.au/cdn/shop/articles/nathan-dumlao-6VhPY27jdps-unsplash_1600x.jpg?v=1670108329" alt="" />
      </div>
    );
  } else if (text === "Third slide") {
    div = (
      <div className="h-[600px] bg-cover bg-center">
        <img src="https://static.vecteezy.com/system/resources/previews/023/010/450/non_2x/the-cup-of-latte-coffee-with-heart-shaped-latte-art-and-ai-generated-free-photo.jpg" alt="" />
      </div>
    );
  }

  return <>{div}</>;
};

export default ExampleCarouselImage;
