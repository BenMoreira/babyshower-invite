import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useSpring, a } from '@react-spring/web';
import picOne from './assets/pic1.png';
import './App.css';

const App = () => {
  const [flipped, setFlipped] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <div className="w-full h-screen flex items-center justify-center" onClick={() => setFlipped(!flipped)}>
      <a.div
        className="absolute max-w-[500px] max-h-[800px] w-[350px] h-[700px] cursor-pointer will-change-transform border-2 border-black rounded-lg"
        style={{ opacity: opacity.to(o => 1 - o), transform }}
      >
        <div className='flex flex-col justify-center items-center gap-8'>
          <img src={picOne} />

          <div className='text-3xl font-bold text-pk-200'>
            You're Invited To
          </div>

          <div className='text-xl font-bold text-pk-200'>
            Jose Luis Ulloa
          </div>

          <div className='text-xl font-bold text-pk-200'>
            &
          </div>

          <div className='text-xl font-bold text-pk-200'>
            Mariela Aparicio's
          </div>

          <div className='text-xl font-bold text-pk-200'>
            Babyshower!
          </div>
        </div>
      </a.div>

      <a.div
        className="absolute max-w-[500px] max-h-[800px] w-[350px] h-[700px] cursor-pointer will-change-transform border-2 border-black rounded-lg"
        style={{
          opacity,
          transform,
          rotateX: '180deg',
        }}
      >
        Bye
      </a.div>
    </div>
  );
};

export default App;
