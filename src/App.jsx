import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useSpring, a } from '@react-spring/web';
import './App.css';

const App = () => {
  const [flipped, setFlipped] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <div className="w-full h-screen flex justify-center items-center" onClick={() => setFlipped(!flipped)}>
      <a.div
        className="max-w-[500px] max-h-[500px] w-[350px] h-[200px] cursor-pointer will-change-transform  
         bg-[url(https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i&auto=format&fit=crop)]
         bg-cover"
        style={{ opacity: opacity.to(o => 1 - o), transform }}
      />
      <a.div
        className="absolute max-w-[500px] max-h-[500px] w-[350px] h-[200px] cursor-pointer will-change-transform
         bg-[url(https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80&auto=format&fit=crop)] bg-cover"
        style={{
          opacity,
          transform,
          rotateX: '180deg',
        }}
      />
    </div>
  );
};

export default App;
