'use client';

import { useContext, useState } from 'react';
import { MainContext } from '@/context/mainContext';
import { useMotionValueEvent } from 'framer-motion';
import Card from '@/components/subpages/Card';
import { useMediaQuery } from '@/util/useMediaQuery';
import RevealText from '../RevealText';
import Description from './Description';
import Link from 'next/link';

//this was based on AllCards.jsx
export default function SobreText({ items, sideRight = false }) {
  const isDesktop = useMediaQuery('md');
  const firstThree = items;

  const {
    changePlaySrc,
    playSrc,
    changePlayImg,
    changePlayTitle,
    changePlayArtist,
    changeDescription,
    description,
    sobreText,
  } = useContext(MainContext);

  const handleClickPlay = (e, post) => {
    e.preventDefault();
    e.stopPropagation();
    changePlaySrc(post.fileLink);
    changePlayImg(post.collaborators[0].coverImage);
    changePlayTitle(post.title);
    changePlayArtist(
      post.collaborators.map((colObj) => colObj.title).join(', ')
    );
  };

  const cardVariants = {
    hidden: { opacity: 0 },
    visible1: { opacity: 1 },
    visible2: { opacity: 1 },
    visible3: { opacity: 1 },
  };

  return (
    <>
      <div className={'flex md:w-[calc(100vw-52px)]'}>
        <div className='relative pt-36 sm:pt-8 px-4 sm:px-0 sm:pl-8 lg:pt-14 lg:pl-14 xl:pt-24 xl:pl-24 pb-[130px] sm:pb-[calc(109px+60px)] flex-1 flex flex-wrap gap-4 md:gap-4 justify-center md:justify-normal'>
          {/* <div className='block sm:hidden pb-8'>
            <Description />
          </div>
          {items.map((item, i) => (
            <div key={i} className={' duration-300 w-full sm:w-32'}>
              <Card
                post={item}
                changeDescription={changeDescription}
                handleClickPlay={handleClickPlay}
                description={description}
              />
            </div>
          ))} */}
          {sobreText === 1 && (
            <>
              <div className=''>
                Arte Sonora é uma prática artística coletiva desenvolvida pelo
                duo de artistas <span className='font-bold'>Franz Manata</span>{' '}
                e <span className='font-bold'>Saulo Laudares</span>, que possui
                diversos formatos, como: cursos, residências, exposições,
                happenings, programas de rádio, publicações etc.
              </div>
              <div className=''>
                O programa teve início em 2009, na Escola de Artes Visuais do
                Parque Lage – RJ, como um curso de formação com happening ao
                final, apresentando os trabalhos dos participantes.
              </div>
              <div className='w-full flex justify-center my-4'>
                <div className='bg-white/[0.08] w-[85%] text-sm py-4 px-8 rounded-lg'>
                  Nossos objetivos eram organizar e disponibilizar as
                  informações que acumulamos, desde meados dos anos 1990,
                  desenvolver o pensamento dos participantes através de uma
                  visada histórica sobre arte sonora no século 20 e contribuir
                  para construção desta cena.
                </div>
              </div>
              <div className=''>
                Desde o início do programa já foi produzido extenso conteúdo
                sobre o tema, abordando suas mais diversas manifestações
                sensíveis, divididos em:
              </div>
              <ul className='flex flex-col gap-2'>
                <Link href='/na-historia'>
                  <li className='bg-white/10 hover:bg-white/20 p-2 grid grid-cols-5 gap-3 duration-300'>
                    <span className='text-xl text-white/70 col-span-2 md:col-span-1'>
                      Na História
                    </span>
                    <span className='text-sm col-span-3'>
                      Oito programas que apresentam a formação deste campo
                      sensível, suas principais questões, artistas e obras do
                      século XX.
                    </span>
                  </li>
                </Link>
                <Link href='/podcast'>
                  <li className='bg-white/10 hover:bg-white/20 p-2 grid grid-cols-5 gap-3 duration-300 '>
                    <span className='text-white/70 text-xl col-span-2 md:col-span-1'>
                      Podcasts
                    </span>
                    <span className='col-span-3 md:col-span-4 text-sm'>
                      Artistas e pensadores brasileiros que investigam o mundo
                      através do som e suas interfaces.
                    </span>
                  </li>
                </Link>
                <Link href='/mixtape'>
                  <li className='bg-white/10 hover:bg-white/20 p-2 grid grid-cols-5 gap-3 duration-300'>
                    <span className='text-white/70  text-xl col-span-2 md:col-span-1'>
                      Mixtapes
                    </span>
                    <span className='col-span-3 md:col-span-4 text-sm'>
                      Artistas, críticos e pensadores da cultura contemporânea
                      selecionam faixas de seu universo afetivo.
                    </span>
                  </li>
                </Link>
                <Link href='/arquivos'>
                  <li className='bg-white/10 hover:bg-white/20 p-2 grid grid-cols-5 gap-3 duration-300'>
                    <span className='text-white/70  text-xl col-span-2 md:col-span-1'>
                      Arquivos
                    </span>
                    <span className='col-span-3 md:col-span-4 text-sm'>
                      Textos, imagens e vídeos sobre o tema e os projetos
                      especiais e ocupações desenvolvidas pelo programa.
                    </span>
                  </li>
                </Link>
              </ul>
              <div className=''>
                <span>Em 2017 teve início o </span>
                <span className='text-white/70  text-xl'>Varanda Sonora</span>
                <span>
                  , um encontro sonoro-musical na varanda da biblioteca da
                  Escola de Artes Visuais do Parque Lage. A cada edição um
                  artista, músico ou poeta é convidado para apresentar suas
                  pesquisas ao vivo.
                </span>
              </div>
              <div className=''>
                Ao longo dos anos Arte Sonora se firmou como plataforma pioneira
                no campo da produção, difusão e promoção deste campo sensível,
                se constituindo num documento sobre a história e memória da arte
                sonora no Brasil.
              </div>
              <div className=''>
                Este site foi construído de forma independente e colaborativa
                com a finalidade de organizar e disponibilizar, ao público em
                geral, os programas e a memória do projeto. Todo seu conteúdo
                foi produzido em “fair use”.
              </div>
            </>
          )}
        </div>

        <div className='hidden md:block flex-1 text-right text-white/90 pt-44 pr-8'></div>
      </div>
    </>
  );
}
