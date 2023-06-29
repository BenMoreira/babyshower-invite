import React, { useRef, useState } from 'react';
import { useSpring, a } from '@react-spring/web';
import picOne from './assets/pic1.png';
import picTwo from './assets/pic2.jpg';
import { motion } from 'framer-motion';
import './App.css';

const App = () => {
  const [flipped, setFlipped] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <motion.div className="w-full flex justify-center mt-[3%]" onClick={() => setFlipped(!flipped)}
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 4.0
        }
      }}
    >
      <a.div
        className="absolute max-w-[500px] max-h-[800px] w-[350px] h-[700px] cursor-pointer will-change-transform border-2 border-pk-200 rounded-lg"
        style={{ opacity: opacity.to(o => 1 - o), transform }}
      >
        <div className='flex flex-col items-center justify-center gap-8 font-bold text-pk-200 h-[700px]'>
          <img src={picOne} className='w-[300px]' />

          <motion.div className='text-4xl'
            initial={{
              scale: 4.0,
              opacity: 1
            }}
            animate={{
              scale: 1.0,
              transition: {
                duration: 1.5
              }
            }}
          >
            You're Invited To
          </motion.div>

          <div className='text-xl'>
            Jose Luis Ulloa
          </div>

          <div className='text-xl'>
            &
          </div>

          <div className='text-xl'>
            Mariela Aparicio's
          </div>

          <div className='text-xl'>
            Babyshower!
          </div>
        </div>
      </a.div>

      <a.div
        className="absolute max-w-[500px] max-h-[800px] w-[350px] h-[700px] cursor-pointer will-change-transform border-2 border-pk-200 rounded-lg"
        style={{
          opacity,
          transform,
          rotateX: '180deg',
        }}
      >
        <div className='flex flex-col items-start m-[10%] gap-8 font-bold text-pk-200 h-[700px]'>
          <img src={picTwo} className='w-[300px]' />

          <div className='text-xl'>
            Date: 22nd of July
          </div>

          <div className='text-xl'>
            Time: 2:00 P.M.
          </div>

          <div className='text-xl'>
            Where: 3896 Egypt Rd, Snellville, GA. 30039 
          </div>
        </div>
      </a.div>
    </motion.div>
  );
};

export default App;
