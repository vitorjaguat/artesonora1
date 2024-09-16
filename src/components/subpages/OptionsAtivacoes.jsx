'use client';

import { useContext, useState, useEffect } from 'react';
import { MainContext } from '@/context/mainContext';
import { useMediaQuery } from '@/util/useMediaQuery';

export default function OptionsAtivacoes() {
  const { changeAtivacoesYear, ativacoesYear } = useContext(MainContext);
  const isDesktop = useMediaQuery('md');

  const [yearsFrom2009, setYearsFrom2009] = useState([]);

  useEffect(() => {
    // Calculate the years from 2009 to the current year
    const currentYear = new Date().getFullYear();
    const yearArray = [];
    for (let year = 2009; year <= currentYear; year++) {
      yearArray.push(year);
    }
    setYearsFrom2009(yearArray.reverse()); // Reverse to have the most recent year first
  }, []);

  return (
    <div className='max-w-[400px] mt-10 text-base text-white flex flex-wrap justify-end gap-2 items-end opacity-100'>
      {yearsFrom2009.map((year, i) => (
        <div
          key={i}
          className={
            'rounded-md bg-white/20 hover:bg-white/30 duration-300 ease-in-out px-2 py-1 cursor-pointer border-[1px] border-transparent' +
            (ativacoesYear === year ? ' bg-white/30 border-white/50' : '')
          }
          onClick={() => changeAtivacoesYear(year)}
        >
          {year}
        </div>
      ))}
    </div>
  );
}
