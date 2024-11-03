import React from 'react';
import bannerImage from '../../../public/banner.jpg';

export default function Banner() {
  return (
    <div
      className="hero h-[600px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">The Art and Allure of Coffee</h1>
          <p className="mb-5">
            Coffee is a daily ritual that awakens the senses and fuels both focus and inspiration.
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
}
