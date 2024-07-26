import Link from 'next/link';

//this was based on AllCards.jsx
export default function TextSobre({ sobreOption }) {
  // const {
  //   changePlaySrc,
  //   playSrc,
  //   changePlayImg,
  //   changePlayTitle,
  //   changePlayArtist,
  //   changeDescription,
  //   description,
  // } = useContext(MainContext);

  return (
    <>
      <div className={'flex md:w-[calc(100vw-52px)]'}>
        <div className='relative pt-36 sm:pt-8 px-4 sm:px-0 sm:pl-8 lg:pt-14 lg:pl-14 xl:pt-24 xl:pl-24 pb-[130px] sm:pb-[calc(109px+60px)] flex-1 flex flex-wrap gap-4 md:gap-4 justify-center md:justify-normal'>
          {sobreOption === 'sobre' && (
            <>
              <div className='text-2xl font-chakra mt-6 mb-3 md:mt-0 md:mb-6 w-full text-left'>
                Sobre o <span className='text-3xl'>Arte Sonora</span>
              </div>
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

          {sobreOption === 'quem-somos' && (
            <>
              <div className='text-3xl font-chakra mb-6 w-full'>Quem somos</div>
              <div className=''>
                <span className='font-bold'>Franz Manata</span> (1964) é
                artista, curador e professor e{' '}
                <span className='font-bold'>Saulo Laudares</span> (1976) é
                artista, professor e DJ produtor, ambos vivem no Rio de Janeiro
                – BR. O duo nasceu em 1996, fruto de sua observação acerca do
                universo do comportamento e a cultura da música contemporânea.
                Os artistas vem realizando programas de residência e
                participando de mostras, individuais e coletivas, dentro e fora
                do Brasil. Desde 2009 coordenam o programa Arte Sonora na Escola
                de Artes Visuais do Parque Lage. Atualmente, são representados
                pela Galeria Sé – São Paulo, BR.
              </div>
            </>
          )}

          {sobreOption === 'breve-historia' && (
            <>
              <div className='text-3xl font-chakra mb-6 w-full'>
                Uma breve história{' '}
                <span className='text-xl block md:inline'>da Arte Sonora</span>
              </div>
              <div className=''>
                Apesar de ser um fenômeno recente – pois se insere
                definitivamente como um campo sensível da arte contemporânea a
                partir dos anos 1990 – a Arte Sonora remonta a séculos atrás
                quando o som era mixado com artes visuais nas igrejas.
              </div>
              <div className=''>
                Com o surgimento das salas de concerto no Século XIX e o
                crescimento das cidades, a arte começa a expandir seu campo
                usual ao misturar músicas e movimento através da dança, mas é o
                Século XX que irá valorizar o entorno acústico esteticamente.
              </div>
              <div className=''>
                Os primeiros a ficarem atentos a esta nova sensibilidade moderna
                foram os Futuristas italianos – Filippo Tommaso Marinetti,
                Umberto Boccioni, Luigi Russolo e Carlo Carrà – e os Dadaístas,
                via Marcel Duchamp. Nos anos 40, do século passado, a música
                eletrônica deixa de ser uma mera curiosidade científica. Os
                novos instrumentos vão despertar interesse da música clássica
                acadêmica, como forma de sobrepujar os limites dos instrumentos
                eletroacústicos.
              </div>
              <div className=''>
                John Cage vai ampliar as concepções e possibilidades da música
                ao provocar os ouvintes a escutar o silêncio nas composições e
                sentir os ruídos espontâneos nos concertos e ao introduzir o
                acaso como parte da composição, sem determinação prévia. A
                música e a arte nunca mais foram as mesmas.
              </div>
              <div className=''>
                Influenciado por estas idéias, os artistas do grupo FLUXUS vão
                realizar a primeira releitura das vanguardas históricas e, ao
                mesmo tempo, incorporar o discurso sonoro a performance, ao
                happening, aos ambientes e esculturas sonoras, contribuindo
                decisivamente para atribuir estatuto estético ao som.
              </div>
              <div className=''>
                O planeta já está conectado às novas mídias, aos procedimentos
                mecânicos e a velocidade da informação. Surge como objeto de
                reflexão da arte: o poder da publicidade, a comunicação de massa
                e o consumo exacerbado de mercadorias. A tecnologia de áudio
                analógico, principalmente pós Segunda Grande Guerra Mundial,
                permite uma substancial transformação da arte sonora e sua
                expressividade, inundando diversos campos.
              </div>
              <div className=''>
                A música eletrônica deixa de ser uma curiosidade científica ou
                acadêmica e passa a ser incorporada ao repertório de
                compositores vanguardistas com a possibilidade de se expandir os
                limites dos instrumentos eletroacústicos e experimentar novas
                sonoridades.
              </div>
              <div className=''>
                Hoje passamos por uma mudança de paradigmas. Do padrão
                tecnológico analógico para o digital, em todos os processos de
                produção, distribuição e comercialização. Agora, a network nos
                permite pensar on time, on line e on site, simultaneamente. A
                Era Digital nos exige uma nova reflexão sobre o fazer, o meio
                técnico e o endereçamento.
              </div>
            </>
          )}
        </div>

        <div className='hidden md:block flex-1 text-right text-white/90 pt-44 pr-8'></div>
      </div>
    </>
  );
}
