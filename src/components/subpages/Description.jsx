'use client';

// import RevealText from '../RevealText';
import RevealTextWhenMount from '../RevealTextWhenMount';
import { useContext } from 'react';
import { MainContext } from '@/context/mainContext';
import { usePathname } from 'next/navigation';

export default function Description() {
  const { description } = useContext(MainContext);
  let title, content;
  title = description?.title;
  content = description?.content?.split('\n')[1];
  // console.log(description);
  const pathname = usePathname();

  if (description)
    return (
      <div className='w-full text-white/90 text-base md:text-sm flex flex-col gap-4'>
        <RevealTextWhenMount width='100%'>
          <div className='font-chakra text-xl w-full'>{title}</div>
        </RevealTextWhenMount>
        <RevealTextWhenMount width='100%'>
          <div className='w-full flex justify-end text-right'>{content}</div>
        </RevealTextWhenMount>
      </div>
    );

  if (!description && pathname === '/podcast')
    return (
      <div className='w-full text-white/90 text-base md:text-sm flex flex-col gap-2'>
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

  if (!description && pathname === '/mixtape')
    return (
      <div className='w-full text-white/90 text-base md:text-sm flex flex-col gap-2'>
        <RevealTextWhenMount>
          <div className=''>
            <span className='font-bold'>Arte Sonora Mixtape</span> aborda o
            universo sonoro e a influência da música no trabalho de artistas,
            críticos e pensadores da cultura contemporânea, que selecionam
            faixas afetivas.
          </div>
        </RevealTextWhenMount>
        <RevealTextWhenMount>
          <div className=''>
            Nos três primeiros minutos nosso convidado fala do percurso e
            interesses, comenta sobre o papel da música no trabalho e na vida,
            além de apresentar as faixas escolhidas.
          </div>
        </RevealTextWhenMount>
        <RevealTextWhenMount>
          <div className=''>
            Cada mixtape é um mundo particular. Puro divertimento. Pode ser
            funk, mpb, pop, étinico, clássico, regional e uma infinidade de
            repertórios, mas o que os une é o carinho e a dedicação dos
            participantes.
          </div>
        </RevealTextWhenMount>
      </div>
    );

  if (!description && pathname === '/na-historia')
    return (
      <div className='w-full text-white/90 text-base md:text-sm flex flex-col gap-2'>
        <RevealTextWhenMount>
          <div className=''>
            <span className='font-bold'>Arte Sonora na História</span> é uma
            série de oito programas onde apresentamos a formação deste campo
            sensível, suas principais questões, artistas e obras, criadas ao
            longo do século XX até os dias de hoje.
          </div>
        </RevealTextWhenMount>
        <RevealTextWhenMount>
          <div className=''>
            Nos programas, a Arte Sonora é abordada desde os seus primórdios,
            com os Futuristas e Dadaístas, passando pelo desenvolvimento da
            tecnologia como suporte para criação, o legado da música
            eletroacústica e suas reverberações nas produções conceituais do
            pós-guerra, até chegar à relação desenvolvida entre arte e música no
            Brasil.
          </div>
        </RevealTextWhenMount>
        <RevealTextWhenMount>
          <div className=''>
            Na primeira parte do programa, de forma clara e direta, apresentamos
            os artistas, seus pensamentos e obras; na sequência um{' '}
            <span className=' italic'>setlist</span> cobre grande parte do
            assunto discutido em cada podcast e, pra fechar o programa, criamos
            uma seção chamada “hora do recreio”, quando indicamos de forma livre
            faixas afetivas que se relacionam ou não com o tema do programa.
          </div>
        </RevealTextWhenMount>
        <RevealTextWhenMount>
          <div className=''>
            Este programas receberam o apoio institucional da ArtRio - Feira
            Internacional de Arte Contemporânea do Rio de Janeiro, para sua
            realização.
          </div>
        </RevealTextWhenMount>
      </div>
    );

  if (!description && pathname === '/varanda-sonora')
    return (
      <div className='w-full text-white/90 text-base md:text-sm flex flex-col gap-2'>
        <RevealTextWhenMount>
          <div className=''>
            VARANDA SONORA reúne a documentação de encontros ocorridos na
            varanda da biblioteca da Escola de Artes Visuais do Parque Lage que
            contribuíram para a expansão na noção de convivência, uso e produção
            de conteúdo de uma biblioteca de arte, hoje.
          </div>
        </RevealTextWhenMount>
        <RevealTextWhenMount>
          <div className=''>
            O som e suas manifestações são a questão central desses encontros,
            que podem assumir diversos formatos, que vão desde apresentações
            musicais, leitura de poemas, entrevistas ou debates sobre o assunto,
            instalações sonoras-espaciais e todas as possibilidades que podem
            estabelecer um diálogo com a arquitetura da Escola e seu meio
            ambiente.
          </div>
        </RevealTextWhenMount>
      </div>
    );
}
