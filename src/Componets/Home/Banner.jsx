import React from 'react';

export default function Banner() {
  return (
    <div className="carousel w-full lg:h-[600px] bg-opacity-60">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://static.vecteezy.com/system/resources/previews/023/010/450/non_2x/the-cup-of-latte-coffee-with-heart-shaped-latte-art-and-ai-generated-free-photo.jpg"
          className="w-full object-cover h-full" // Ensure the image covers the entire slide
          alt="Coffee Latte"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div> {/* Dark overlay */}
        <div className="absolute top-1/2 left-5 right-5 transform -translate-y-1/2 flex justify-between items-center">
          <a href="#slide4" className="btn btn-circle text-white">❮</a>
          <a href="#slide2" className="btn btn-circle text-white">❯</a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://coffeebean.com.au/cdn/shop/articles/nathan-dumlao-6VhPY27jdps-unsplash_1600x.jpg?v=1670108329"
          className="w-full object-cover h-full"
          alt="Coffee Beans"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
        <div className="absolute top-1/2 left-5 right-5 transform -translate-y-1/2 flex justify-between items-center">
          <a href="#slide1" className="btn btn-circle text-white">❮</a>
          <a href="#slide3" className="btn btn-circle text-white">❯</a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://www.hindustantimes.com/ht-img/img/2024/09/22/1600x900/Garlic_Coffee_1722949921853_1727007650059.jpg"
          className="w-full object-cover h-full"
          alt="Garlic Coffee"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
        <div className="absolute top-1/2 left-5 right-5 transform -translate-y-1/2 flex justify-between items-center">
          <a href="#slide2" className="btn btn-circle text-white">❮</a>
          <a href="#slide4" className="btn btn-circle text-white">❯</a>
        </div>
      </div>

      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://www.guardian.in/cdn/shop/articles/black-coffee-benefits-side-effects.jpg?v=1705491089&width=1000"
          className="w-full object-cover h-full"
          alt="Black Coffee"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
        <div className="absolute top-1/2 left-5 right-5 transform -translate-y-1/2 flex justify-between items-center">
          <a href="#slide3" className="btn btn-circle text-white">❮</a>
          <a href="#slide1" className="btn btn-circle text-white">❯</a>
        </div>
      </div>
    </div>
  );
}
