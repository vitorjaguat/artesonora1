'use client';

import anime from 'animejs';
import { useState, useEffect } from 'react';
import { useMediaQuery } from '../util/useMediaQuery';

const WaterDropGrid = () => {
  const [gridWidth, setGridWidth] = useState(2);
  const [gridHeight, setGridHeight] = useState(0);
  const isDesktop = useMediaQuery('md');

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        if (isDesktop) {
          setGridHeight(15);
          setGridWidth(15);
        } else {
          setGridHeight(8);
          setGridWidth(8);
        }
      }
    };
    // set initial window height:
    handleResize();
    //event for resize:
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='relative grid place-content-center  px-0 py-0'>
      <DotGrid gridWidth={gridWidth} gridHeight={gridHeight} />
    </div>
  );
};

// original:
// const GRID_WIDTH = 25;
// const GRID_HEIGHT = 20;

// const GRID_WIDTH = 45;
// const GRID_HEIGHT = 32;

const DotGrid = ({ gridWidth, gridHeight }) => {
  // console.log('gridWidth', gridWidth);
  // console.log('gridHeight', gridHeight);
  const handleDotClick = (e) => {
    anime({
      targets: '.dot-point',
      scale: [
        { value: 1.35, easing: 'easeOutSine', duration: 250 },
        { value: 1, easing: 'easeInOutQuad', duration: 500 },
      ],
      translateY: [
        { value: -10, easing: 'easeOutSine', duration: 250 },
        { value: 0, easing: 'easeInOutQuad', duration: 500 },
      ],
      opacity: [
        { value: 1, easing: 'easeOutSine', duration: 250 },
        { value: 0.5, easing: 'easeInOutQuad', duration: 500 },
      ],
      delay: anime.stagger(100, {
        // grid: [GRID_WIDTH, GRID_HEIGHT],
        grid: [gridWidth, gridHeight],
        from: e.target.dataset.index,
      }),
      // direction: 'alternate',
      loop: 1,
    });
  };

  const dots = [];
  let index = 0;

  // for (let i = 0; i < GRID_WIDTH; i++) {
  //   for (let j = 0; j < GRID_HEIGHT; j++) {
  for (let i = 0; i < gridWidth; i++) {
    for (let j = 0; j < gridHeight; j++) {
      dots.push(
        <div
          className='group cursor-crosshair rounded-full p-2 transition-colors duration-300 hover:bg-[radial-gradient(circle_at_50%_50%,#d3d3d380,#00009920)]'
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className='dot-point h-2 w-2 rounded-full bg-gradient-to-b from-neutral-500 to-neutral-400 opacity-50 '
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      onClick={handleDotClick}
      // style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      style={{ gridTemplateColumns: `repeat(${gridWidth}, 1fr)` }}
      className='grid w-fit'
    >
      {dots}
    </div>
  );
};

export default WaterDropGrid;
