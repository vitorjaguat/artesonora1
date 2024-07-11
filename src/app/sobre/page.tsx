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
        <div className='w-[90%] md:w-[700px] lg:w-[900px] flex flex-col gap-8 text-white'>
          <div className=''>
            Arte Sonora é uma prática artística coletiva desenvolvida pelo duo
            de artistas Franz Manata e Saulo Laudares, que possui diversos
            formatos, como: cursos, residências, exposições, happenings,
            programas de rádio, publicações etc.
          </div>
          <div className=''>
            O programa teve início em 2009, na Escola de Artes Visuais do Parque
            Lage – RJ, como um curso de formação com happening ao final,
            apresentando os trabalhos dos participantes.
          </div>
          <div className=''>
            “Nossos objetivos eram organizar e disponibilizar as informações que
            acumulamos, desde meados dos anos 1990, desenvolver o pensamento dos
            participantes através de uma visada histórica sobre arte sonora no
            Séc. XX e contribuir para construção desta cena.”
          </div>
          <div className=''>
            Desde o início do programa já foi produzido extenso conteúdo sobre o
            tema, abordando suas mais diversas manifestações sensíveis,
            divididos em:
          </div>
          <ul className='ml-10 flex flex-col gap-2'>
            <li>
              <span className='text-2xl text-white/70 mr-3'>Na História</span>
              <span>
                Oito programas que apresentam a formação deste campo sensível,
                suas principais questões, artistas e obras do século XX.
              </span>
            </li>
            <li>
              <span className='text-white/70  text-2xl mr-3'>Podcasts</span>
              <span>
                Artistas e pensadores brasileiros que investigam o mundo através
                do som e suas interfaces.
              </span>
            </li>
            <li>
              <span className='text-white/70  text-2xl mr-3'>Mixtapes</span>
              <span>
                Artistas, críticos e pensadores da cultura contemporânea
                selecionam faixas de seu universo afetivo.
              </span>
            </li>
            <li>
              <span className='text-white/70  text-2xl mr-3'>Arquivos</span>
              <span>
                Textos, imagens e vídeos sobre o tema e os projetos especiais e
                ocupações desenvolvidas pelo programa.
              </span>
            </li>
          </ul>
          <div>
            <span>Em 2017 teve início o </span>
            <span className='text-white/70  text-2xl'>Varanda Sonora</span>
            <span>
              , um encontro sonoro-musical na varanda da biblioteca da Escola de
              Artes Visuais do Parque Lage. A cada edição um artista, músico ou
              poeta é convidado para apresentar suas pesquisas ao vivo.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
