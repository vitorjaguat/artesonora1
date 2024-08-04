'use client';

import { useContext, useState } from 'react';
import { MainContext } from '@/context/mainContext';
import Card from '@/components/subpages/Card';
import { useMediaQuery } from '@/util/useMediaQuery';
import RevealText from '../RevealText';
import Description from './Description';
import { usePathname } from 'next/navigation';
import CardAtivacoes from './CardAtivacoes';

export default function AllCardsAtivacoes({ items }) {
  const isDesktop = useMediaQuery('md');
  const pathname = usePathname();

  return (
    <div className={'flex md:w-[calc(100vw-52px)]'}>
      <div className='relative pt-36 sm:pt-[13rem] px-4 sm:px-0 sm:pl-8 lg:pl-14 xl:pl-24 pb-[130px] sm:pb-[159px] flex-1 flex flex-col gap-8 sm:gap-10 justify-center md:justify-normal'>
        <div className='block sm:hidden py-4 text-lg'>
          Ao longo dos anos, realizamos diversas ativações, que aos poucos serão
          documentadas por aqui.
        </div>
        {items.map((item, i) => (
          <div key={i} className={' duration-300 w-full'}>
            <CardAtivacoes post={item} />
          </div>
        ))}
      </div>
      <div className='hidden md:block flex-1 text-right text-white/90 pt-44 pr-8'></div>
    </div>
  );
}
