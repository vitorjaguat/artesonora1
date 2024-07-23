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
              <div className='mb-6 font-semibold font-chakra uppercase text-2xl'>
                Arte Sonora ANO 15
              </div>
              <div className=''>
                Neste ano comemoramos 15 anos do{' '}
                <span className='font-bold'>ARTE SONORA</span>, um programa
                pioneiro, proposto e conduzido pelo duo de artistas e
                professores <span className='font-bold'>Franz Manata</span> e{' '}
                <span className='font-bold'>Saulo Laudares</span>, na Escola de
                Artes Visuais do Parque Lage.
              </div>
              <div className=''>
                Este encontro é também um agradecimento aos mais de 250 artistas
                que passaram por ele e que, gentilmente, com suas trocas e
                experiências particulares, contribuíram para a formação e
                consolidação de uma cena artística em torno do som. Sem a
                decisiva participação e entrega nada seria possível!
              </div>
              <div className='w-full flex justify-center my-4'>
                {/* <div className='bg-white/[0.08] w-[85%] text-sm py-4 px-8 rounded-lg'> */}
                Participantes de várias gerações, regiões e cidades do Brasil
                (Rio de Janeiro, Belo Horizonte, Brasília, Goiânia, São Paulo
                etc) e de outros países (EUA, Portugal etc), apresentam
                trabalhos e ações que transitam entre narrativas ficcionais e
                experiências vividas, operando diversos meios tecnológicos. Os
                procedimentos poéticos desses artistas investigam, de modo
                sensível e plural, como essa geração está enfrentando o momento
                atual e suas questões.
                {/* </div> */}
              </div>
              <div className=''>
                Para esse encontro, foram preparadas várias atividades que
                colocam o Som no centro da questão através de múltiplas ações:
                exposição com artistas sonoro-visuais, DJs, músicos e
                pesquisadores, que apresentam: instalações, performances,
                vídeos, live P.A., DJ sets, roda de sample e palestras.
              </div>
              <div className=''>
                A mostra se estende para um site que disponibilizará
                semanalmente, além de toda memória desses quinze anos de
                atividades, 14 podcasts inéditos.
              </div>

              <div className='pt-12 pb-6 font-semibold font-chakra uppercase text-2xl'>
                PROGRAMAÇÃO
              </div>
              <div className='font-semibold font-chakra text-xl w-full'>
                1. EXPOSIÇÃO
              </div>
              <div className=''>
                <span className='font-bold'>
                  Cavalariças da Escola de Artes Visuais do Parque Lage
                </span>
                , no Rio de Janeiro, entre 25 de julho e 29 de setembro de 2024,
                com curadoria dos artistas e professores{' '}
                <span className='font-bold'>Franz Manata</span> e{' '}
                <span className='font-bold'>Saulo Laudares</span>, com 17
                artistas de várias regiões do Brasil e outros países, sendo
                eles:Ajítẹnà Marco Scarassatti, Bruno Queiroz, Caio Cesar
                Loures, Denise Alves-Rodrigues, Eduardo Politzer, Gabriel
                Ferreira, Jean Deffense, Juliana Frontin, Leandra Lambert,
                Leandro Araujo, Leliene Rodrigues, Manata Laudares, Marcelo
                Mudou, Marta Supernova, Ulisses Carvalho e Vivian Caccuri.
              </div>

              <div className='pt-4 font-semibold font-chakra text-xl'>
                2. RODA DE SAMPLE
              </div>
              <div className=''>
                Na abertura do evento (25 de julho, das 17h às 22h) o Circular
                Som Sistema conduzirá, com seu triciclo tunado, um sistema de
                som autônomo que permite a conexão simultânea de 20
                participantes, com artistas da mostra e aberto aos
                interessados(as) em participar.
              </div>

              <div className='pt-4 font-semibold font-chakra text-xl'>
                3. SESSÃO DE VÍDEOS
              </div>
              <div className=''>
                A sessão será voltada para os trabalhos sonoros que têm o vídeo
                como suporte, e ocorrerá no dia 29 de agosto, das 19h às 21h, no
                auditório da Escola. O evento contará com trabalhos inéditos de
                artistas de várias regiões do Brasil e dos EUA e Europa,
                desenvolvidos durante os encontros presenciais e virtuais.
                Participam da mostra: Denise Alves-Rodrigues, Eliane Terra,
                Felippe Schultz Mussel, Julio Santa Cecília, Leliene Rodrigues,
                Luísa Sequeira, Mary Fê, Marco Scarassatti e Sama.
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
