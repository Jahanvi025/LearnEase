import React from 'react';
import backgroundimg from "../../Assets/images/smiling-blonde-woman-relaxing-home-listening-music-typing-something-keyboard.jpg";

const Teaching = () => {
  return (
    <div>
      <div 
        className="w-full h-[86vh] bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: `url(${backgroundimg})` }}
      >
        <h1 className="text-8xl font-bold mb-4 text-center">Come teach <br /> with us</h1>
        <p className="text-lg text-font font-bold">Become an instructor and change lives — including your own</p>
      </div>
    </div>
  );
}

export default Teaching;
