'use client';

import { useContext } from 'react';
import { MainContext } from '@/context/mainContext';
import { useMediaQuery } from '@/util/useMediaQuery';

export default function OptionsAtivacoes() {
  const { changeAtivacoesOption, ativacoesOption } = useContext(MainContext);
  const isDesktop = useMediaQuery('md');

  if (!isDesktop) return null;

  return (
    <div className='mt-10 text-base text-white flex flex-col gap-2 items-end opacity-100'>
      <div
        className={
          'rounded-md bg-white/20 hover:bg-white/30 duration-300 ease-in-out px-2 py-1 cursor-pointer border-[1px] border-transparent' +
          (ativacoesOption === 1 ? ' bg-white/30 border-white/50' : '')
        }
        onClick={() => changeAtivacoesOption(1)}
      >
        ARTE SONORA Ano 15
      </div>
      <div
        className={
          'rounded-md bg-white/20 hover:bg-white/30 duration-300 ease-in-out px-2 py-1 cursor-pointer  border-[1px] border-transparent' +
          (ativacoesOption === 2 ? ' bg-white/30 border-white/50' : '')
        }
        onClick={() => changeAtivacoesOption(2)}
      >
        Programação
      </div>
      <div
        className={
          'rounded-md bg-white/20 hover:bg-white/30 duration-300 ease-in-out px-3 py-1 cursor-pointer  border-[1px] ' +
          (ativacoesOption === 3
            ? ' bg-white/30 border-white/40'
            : ' border-transparent')
        }
        onClick={() => changeAtivacoesOption(3)}
      >
        Exposição
      </div>
      <div
        className={
          'rounded-md bg-white/20 hover:bg-white/30 duration-300 ease-in-out px-3 py-1 cursor-pointer border-[1px] border-transparent' +
          (ativacoesOption === 4 ? ' bg-white/30 border-white/40' : '')
        }
        onClick={() => changeAtivacoesOption(4)}
      >
        Sessão de vídeos
      </div>
      <div
        className={
          'rounded-md bg-white/20 hover:bg-white/30 duration-300 ease-in-out px-3 py-1 cursor-pointer border-[1px] border-transparent' +
          (ativacoesOption === 5 ? ' bg-white/30 border-white/40' : '')
        }
        onClick={() => changeAtivacoesOption(5)}
      >
        Happening
      </div>
      <div
        className={
          'rounded-md bg-white/20 hover:bg-white/30 duration-300 ease-in-out px-3 py-1 cursor-pointer border-[1px] border-transparent' +
          (ativacoesOption === 6 ? ' bg-white/30 border-white/40' : '')
        }
        onClick={() => changeAtivacoesOption(6)}
      >
        Serviço
      </div>
    </div>
  );
}
