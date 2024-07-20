'use client';

// import RevealText from '../RevealText';
import RevealTextWhenMount from '../RevealTextWhenMount';
import { useContext } from 'react';
import { MainContext } from '@/context/mainContext';

export default function Description() {
  const { description } = useContext(MainContext);
  let title, content;
  title = description?.title;
  content = description?.content?.split('\n')[1];
  console.log(description);

  if (!description)
    return (
      <div className='w-full text-white/90 text-sm flex flex-col gap-2'>
        <RevealTextWhenMount>
          <div className=''>
            <span className='font-bold'>Arte Sonora Podcast</span> apresenta de
            forma monográfica os principais artistas e pensadores brasileiros
            que vêm investigando o mundo através do som e suas interfaces,
            apresentando seu pensamento, obras e interesses.
          </div>
        </RevealTextWhenMount>
        <RevealTextWhenMount>
          <div className=''>
            O programa foi estruturado na forma de uma conversa informal, e
            algumas das vezes foi gravado no próprio espaço do entrevistado,
            exceto um depoimento e duas palestras que ocorreram na Escola de
            Artes Visuais do Parque Lage.
          </div>
        </RevealTextWhenMount>
        <RevealTextWhenMount>
          <div className=''>
            Procuramos colocar o artista e seu pensamento no centro do problema.
            Geralmente, conversamos sobre formação, o interesse pela arte e o
            som, passando pelos principais trabalhos e mostras. Ao final, cada
            entrevistado é instigado a refletir sobre o que lhe move nos dias de
            hoje.
          </div>
        </RevealTextWhenMount>
        <RevealTextWhenMount>
          <div className=''>
            Nossas escolhas são de caráter afetivo mas não deixam de considerar
            o percurso, relevância histórica e originalidade do trabalho.{' '}
          </div>
        </RevealTextWhenMount>
        <RevealTextWhenMount>
          <div className=''>
            Por fim, entendemos Arte Sonora como um campo amplo e plural que
            recusa categorizações, o que nos permite apresentar artistas,
            pesquisadores, acadêmicos, músicos, maestros, DJs produtores,
            repentistas e muito mais.
          </div>
        </RevealTextWhenMount>
      </div>
    );
  // return null;
  return (
    <div className='w-full text-white/90 text-sm flex flex-col gap-4'>
      <RevealTextWhenMount width='100%'>
        <div className='font-chakra text-xl w-full'>{title}</div>
      </RevealTextWhenMount>
      <RevealTextWhenMount width='100%'>
        <div className='w-full flex justify-end text-right'>{content}</div>
      </RevealTextWhenMount>
    </div>
  );
}
