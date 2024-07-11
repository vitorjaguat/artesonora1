import Link from 'next/link';
import HeaderSubpage from '../../components/HeaderSubpage';

export default function Page() {
  return (
    <>
      {/* Header */}
      <HeaderSubpage
        title='Sobre'
        bgImg='https://placehold.co/600x400?text=imagem&font=lora'
      />

      {/* Content */}
      <div className='pt-10 pb-60 bg-black w-full min-h-screen flex flex-col items-center'>
        <div className='w-[90%] md:w-[700px] lg:w-[900px] flex flex-col gap-16 text-white'>
          <div className='flex gap-4 justify-between h-60'>
            <div className='flex-1 bg-white/50'></div>
            <div className='flex-1'>
              Arte Sonora é uma prática artística coletiva desenvolvida pelo duo
              de artistas Franz Manata e Saulo Laudares, que possui diversos
              formatos, como: cursos, residências, exposições, happenings,
              programas de rádio, publicações etc.
            </div>
          </div>
          <div className='flex gap-4 justify-between h-60'>
            <div className='flex-1'>
              O programa teve início em 2009, na Escola de Artes Visuais do
              Parque Lage – RJ, como um curso de formação com happening ao
              final, apresentando os trabalhos dos participantes.
            </div>
            <div className='flex-1 bg-white/60'></div>
          </div>
          <div className='my-8 flex justify-center w-full'>
            <div className='bg-white/[0.15] w-[85%]  italic text-lg p-4 rounded-md'>
              Nossos objetivos eram organizar e disponibilizar as informações
              que acumulamos, desde meados dos anos 1990, desenvolver o
              pensamento dos participantes através de uma visada histórica sobre
              arte sonora no Séc. XX e contribuir para construção desta cena.
            </div>
          </div>
          <div className='ml-[20%]'>
            Desde o início do programa já foi produzido extenso conteúdo sobre o
            tema, abordando suas mais diversas manifestações sensíveis,
            divididos em:
          </div>
          <ul className='-my-10 ml-[20%] flex flex-col gap-2'>
            <Link href='/na-historia'>
              <li className='bg-white/10 hover:bg-white/20 p-2 grid grid-cols-5 gap-3 duration-300'>
                <span className='text-2xl text-white/70 col-span-1'>
                  Na História
                </span>
                <span className='text-sm col-span-4'>
                  Oito programas que apresentam a formação deste campo sensível,
                  suas principais questões, artistas e obras do século XX.
                </span>
              </li>
            </Link>
            <Link href='/podcast'>
              <li className='bg-white/10 hover:bg-white/20 p-2 grid grid-cols-5 gap-3 duration-300 '>
                <span className='text-white/70 text-2xl col-span-1 '>
                  Podcasts
                </span>
                <span className='col-span-4 text-sm'>
                  Artistas e pensadores brasileiros que investigam o mundo
                  através do som e suas interfaces.
                </span>
              </li>
            </Link>
            <Link href='/mixtape'>
              <li className='bg-white/10 hover:bg-white/20 p-2 grid grid-cols-5 gap-3 duration-300'>
                <span className='text-white/70  text-2xl col-span-1'>
                  Mixtapes
                </span>
                <span className='col-span-4 text-sm'>
                  Artistas, críticos e pensadores da cultura contemporânea
                  selecionam faixas de seu universo afetivo.
                </span>
              </li>
            </Link>
            <Link href='/arquivo'>
              <li className='bg-white/10 hover:bg-white/20 p-2 grid grid-cols-5 gap-3 duration-300'>
                <span className='text-white/70  text-2xl col-span-1'>
                  Arquivos
                </span>
                <span className='col-span-4 text-sm'>
                  Textos, imagens e vídeos sobre o tema e os projetos especiais
                  e ocupações desenvolvidas pelo programa.
                </span>
              </li>
            </Link>
          </ul>
          <div className=' ml-[20%]'>
            <span>Em 2017 teve início o </span>
            <span className='text-white/70  text-2xl'>Varanda Sonora</span>
            <span>
              , um encontro sonoro-musical na varanda da biblioteca da Escola de
              Artes Visuais do Parque Lage. A cada edição um artista, músico ou
              poeta é convidado para apresentar suas pesquisas ao vivo.
            </span>
          </div>
          <div className='flex gap-4 justify-between h-60'>
            <div className='flex-1 bg-white/50'></div>
            <div className='flex-1'>
              Ao longo dos anos Arte Sonora se firmou como plataforma pioneira
              no campo da produção, difusão e promoção deste campo sensível, se
              constituindo num documento sobre a história e memória da arte
              sonora no Brasil.
            </div>
          </div>
          <div className='flex gap-4 justify-between h-60'>
            <div className='flex-1'>
              Esse site foi construído de forma independente e colaborativa com
              a finalidade de organizar e disponibilizar, ao público em geral,
              os programas e a memória do projeto. Todo seu conteúdo foi
              produzido em “fair use”.
            </div>
            <div className='flex-1 bg-white/50'></div>
          </div>
        </div>
      </div>
    </>
  );
}
