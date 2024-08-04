'use client';

import { useContext, useState } from 'react';
import { MainContext } from '@/context/mainContext';
import { useMotionValueEvent } from 'framer-motion';
import Card from '@/components/subpages/Card';
import { useMediaQuery } from '@/util/useMediaQuery';
import RevealText from '../RevealText';
import Description from './Description';
import Link from 'next/link';
import { LiaFastBackwardSolid } from 'react-icons/lia';

//this was based on AllCards.jsx
export default function TextAtivacoesSlug({ title, content }) {
  const isDesktop = useMediaQuery('md');

  // desktop:
  return (
    <>
      <div className={'flex md:w-[calc(100vw-52px)]'}>
        <div className='relative pt-48 sm:pt-8 px-4 sm:px-0 sm:pl-8 lg:pt-14 lg:pl-14 xl:pt-24 xl:pl-24 pb-[130px] sm:pb-[calc(109px+60px)] flex-1 flex flex-wrap gap-4 md:gap-4 md:justify-normal'>
          <div className='mb-6 font-semibold font-chakra uppercase text-2xl text-neutral-400 tracking-wider'>
            {title}
          </div>
          <div
            className='content'
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>

          {/* voltar mobile */}
          <Link
            href='/ativacoes'
            className='md:hidden w-full flex justify-end text-neutral-300'
          >
            <div className='flex gap-1 items-center select-none'>
              <LiaFastBackwardSolid size={28} />
              <div className=''>voltar</div>
            </div>
          </Link>
        </div>

        <div className='hidden md:block flex-1 text-right text-white/90 pt-44 pr-8'></div>
      </div>
    </>
  );
}
