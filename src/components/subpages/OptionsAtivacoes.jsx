'use client';

import { useContext } from 'react';
import { MainContext } from '@/context/mainContext';

export default function OptionsAtivacoes() {
  const { changeAtivacoesOption, ativacoesOption } = useContext(MainContext);

  return (
    <div className='text-base text-white flex flex-col gap-2 items-end opacity-100'>
      <div
        className={
          'rounded-md bg-white/20 hover:bg-white/30 duration-300 ease-in-out px-2 py-1 cursor-pointer' +
          (ativacoesOption === 1 ? ' bg-white/30' : '')
        }
        onClick={() => changeAtivacoesOption(1)}
      >
        ARTE SONORA Ano 15
      </div>
      <div
        className={
          'rounded-md bg-white/20 hover:bg-white/30 duration-300 ease-in-out px-2 py-1 cursor-pointer' +
          (ativacoesOption === 2 ? ' bg-white/30' : '')
        }
        onClick={() => changeAtivacoesOption(2)}
      >
        Programação
      </div>
      <div
        className={
          'rounded-md bg-white/20 hover:bg-white/30 duration-300 ease-in-out px-2 py-1 cursor-pointer' +
          (ativacoesOption === 3 ? ' bg-white/30' : '')
        }
        onClick={() => changeAtivacoesOption(3)}
      >
        Exposição
      </div>
      <div
        className={
          'rounded-md bg-white/20 hover:bg-white/30 duration-300 ease-in-out px-2 py-1 cursor-pointer' +
          (ativacoesOption === 3 ? ' bg-white/30' : '')
        }
        onClick={() => changeAtivacoesOption(4)}
      >
        Sessão de vídeos
      </div>
    </div>
  );
}
