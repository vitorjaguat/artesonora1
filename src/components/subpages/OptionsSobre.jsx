'use client';

import { useContext } from 'react';
import { MainContext } from '@/context/mainContext';

export default function OptionsSobre() {
  const { changeSobreOption, sobreOption } = useContext(MainContext);

  return (
    <div className='text-base text-white flex flex-col gap-2 items-end opacity-100'>
      <div
        className={
          'rounded-md bg-white/20 hover:bg-white/30 duration-300 ease-in-out px-2 py-1 cursor-pointer' +
          (sobreOption === 1 ? ' bg-white/30' : '')
        }
        onClick={() => changeSobreOption(1)}
      >
        Sobre o Arte Sonora
      </div>
      <div
        className={
          'rounded-md bg-white/20 hover:bg-white/30 duration-300 ease-in-out px-2 py-1 cursor-pointer' +
          (sobreOption === 2 ? ' bg-white/30' : '')
        }
        onClick={() => changeSobreOption(2)}
      >
        Quem somos
      </div>
      <div
        className={
          'rounded-md bg-white/20 hover:bg-white/30 duration-300 ease-in-out px-2 py-1 cursor-pointer' +
          (sobreOption === 3 ? ' bg-white/30' : '')
        }
        onClick={() => changeSobreOption(3)}
      >
        Uma breve história da Arte Sonora
      </div>
    </div>
  );
}
