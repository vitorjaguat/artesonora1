'use client';

// import '../custom-packages/shikwasa/src/css/base.css';
// import 'shikwasa/dist/style.css';
import '../styles/player-bar.css';
import { useRef, useEffect, useContext } from 'react';

// const originalLog = console.log;
// console.log = () => {};
// import { Player } from 'shikwasa';
import Player from '../custom-packages/shikwasa/src/player';
import { usePathname } from 'next/navigation';
import { MainContext } from '@/context/mainContext';
// console.log = originalLog;

export default function PlayerBar() {
  const playerRef = useRef(null);
  const pathname = usePathname();
  const { playSrc, playImg, playTitle, playArtist } = useContext(MainContext);

  let player: any;

  useEffect(() => {
    console.log('playSrc', playSrc);

    if (!pathname.includes('outstatic') && !pathname.includes('admin')) {
      player = new Player({
        container: playerRef.current,
        audio: {
          title: playTitle,
          artist: playArtist,
          // cover: '/images/couple-pizza.png',
          cover: playImg,
          // src: '/audio/audio.mp3',
          // src: 'https://s3i4vqew3cvrd6rabrqoewqqruwkhspfzca532jrm7wx6x5e7sja.arweave.net/ltHKwJbYqxH6IAxg4loQjSyjyeXIgd3pMWftf1-k_JI',
          src: playSrc,
        },
        download: true,
        autoplay: false,
      });
      player.play();

      // Clean up function
      return () => {
        player.destroy();
      };
    }
  }, [playSrc]);

  // if (pathname.includes('outstatic') || pathname.includes('admin')) return null;

  return (
    <div
      ref={playerRef}
      className='player-container fixed bottom-0 left-0 w-full px-20 md:pl-14 md:pr-2 md:pt-2 bg-neutral-800 z-[10000] font-chakra max-w-[100vw]'
    ></div>
  );
}
