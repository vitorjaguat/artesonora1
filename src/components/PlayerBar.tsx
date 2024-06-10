'use client';

import 'shikwasa/dist/style.css';
import '../styles/player-bar.css';
import { useRef, useEffect } from 'react';

const originalLog = console.log;
console.log = () => {};
import { Player } from 'shikwasa';
import { usePathname } from 'next/navigation';
console.log = originalLog;

export default function PlayerBar() {
  const playerRef = useRef(null);
  const pathname = usePathname();

  let player: any;

  useEffect(() => {
    if (!pathname.includes('outstatic') && !pathname.includes('admin')) {
      player = new Player({
        container: playerRef.current,
        audio: {
          title: 'Sky Fits Heaven (demo)',
          artist: 'Madonna',
          // cover: '/images/couple-pizza.png',
          cover:
            'https://1.bp.blogspot.com/-LoKlow8dGZc/XQ9jIeR9DxI/AAAAAAABGVc/EKlE83PyBm8owjwVuF9ywBE5SS2xZjJGgCLcBGAs/s1600/Ray%2Bof%2BLight%2BDemo%2BAssembly%2Bby%2Balb69.jpg',
          // src: '/audio/audio.mp3',
          // src: 'https://s3i4vqew3cvrd6rabrqoewqqruwkhspfzca532jrm7wx6x5e7sja.arweave.net/ltHKwJbYqxH6IAxg4loQjSyjyeXIgd3pMWftf1-k_JI',
          src: 'https://ia904507.us.archive.org/16/items/madonna-rol-demos/01%20Sky%20Fits%20Heaven.mp3',
        },
        download: true,
      });

      // Clean up function
      return () => {
        player.destroy();
      };
    }
  }, []);

  // if (pathname.includes('outstatic') || pathname.includes('admin')) return null;

  return (
    <div>
      <div
        ref={playerRef}
        className='player-container fixed bottom-0 left-0 z-10 w-full px-20 bg-black'
      ></div>
    </div>
  );
}
