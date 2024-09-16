'use client';

import { useContext, useEffect, useState } from 'react';
import { MainContext } from '@/context/mainContext';
import Card from '@/components/subpages/Card';
import { useMediaQuery } from '@/util/useMediaQuery';
import RevealText from '../RevealText';
import Description from './Description';
import { usePathname } from 'next/navigation';
import CardAtivacoes from './CardAtivacoes';
import OptionsAtivacoes from './OptionsAtivacoes';

export default function AllCardsAtivacoes({ items }) {
  const isDesktop = useMediaQuery('md');
  const pathname = usePathname();
  const [filteredItems, setFilteredItems] = useState([]);
  const { ativacoesYear } = useContext(MainContext);
  // console.log('items', items);

  useEffect(() => {
    if (items.length && ativacoesYear) {
      const filtered = items.filter(
        (item) => item?.publishedAt.slice(0, 4) === ativacoesYear?.toString()
      );
      setFilteredItems(filtered);
    }
  }, [items, ativacoesYear]);

  return (
    <div className={'flex md:w-[calc(100vw-52px)]'}>
      <div className='relative pt-36 sm:pt-[13rem] px-4 sm:px-0 sm:pl-8 lg:pl-14 xl:pl-24 pb-[160px] sm:pb-[159px] flex-1 flex flex-col gap-12 sm:gap-10 justify-center md:justify-normal'>
        <div className='block sm:hidden pt-4 text-lg'>
          Ao longo dos anos, realizamos diversas ativações, que aos poucos serão
          documentadas por aqui.
        </div>
        <div className='block -mt-12 sm:hidden'>
          <OptionsAtivacoes items={items} />
        </div>

        {filteredItems.map((item, i) => (
          <div key={i} className={' duration-300 w-full'}>
            <CardAtivacoes post={item} />
          </div>
        ))}
        {filteredItems.length === 0 && (
          <div className='text-center text-white/90 text-lg font-lato'>
            Não há ativações para este ano.
          </div>
        )}
      </div>
      <div className='hidden md:block flex-1 text-right text-white/90 pt-44 pr-8'></div>
    </div>
  );
}
