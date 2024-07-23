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
    ativacoesOption,
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
        <div className='relative pt-36 sm:pt-8 px-4 sm:px-0 sm:pl-8 lg:pt-14 lg:pl-14 xl:pt-24 xl:pl-24 pb-[130px] sm:pb-[calc(109px+60px)] flex-1 flex flex-wrap gap-4 md:gap-4 md:justify-normal'>
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
          {ativacoesOption === 1 && (
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
            </>
          )}

          {ativacoesOption === 2 && (
            <>
              <div className='pb-6 font-semibold font-chakra uppercase text-2xl'>
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

              <div className='pt-4 font-semibold font-chakra text-xl uppercase'>
                4. Happening de encerramento [The Place]
              </div>
              <div className=''>
                No dia 27 de setembro, das 15h às 23h, acontece o happening de
                encerramento com Live performances inéditas, apresentando o
                seguinte line up: Ed Marola (AKA Eduardo Politzer), Ajítẹnà
                Marco Scarassatti, Marcelo Mudou e Savio de Queiroz, Gabriel
                Ferreira e Leandro Araújo, FormigANTI, Azullllllll, Pek0, DJ
                Frontinn (aka Juliana Frontin) e Marta Supernova.
              </div>

              <div className='pt-4 font-semibold font-chakra text-xl uppercase'>
                5. Entrevistas
              </div>
              <div className='pb-3'>
                <div className='font-chakra font-semibold '>
                  [ 1º de agosto ]
                </div>
                <div className='font-chakra font-semibold'>
                  Alberto do Campo (Berlim)
                </div>
                <div className='text-sm'>
                  Artista e professor de arte gerativa e computacional no
                  Institute for Time-Based Media, da Universidade de Berlim.
                </div>
              </div>
              <div className='pb-3'>
                <div className='font-chakra font-semibold '>
                  [ 15 de agosto ]
                </div>
                <div className='font-chakra font-semibold'>
                  Rees Archibald (Austrália)
                </div>
                <div className='text-sm'>
                  Artista sonoro que realiza instalações, composições e
                  performances.
                </div>
              </div>
              <div className='pb-3'>
                <div className='font-chakra font-semibold '>
                  [ 12 de setembro ]
                </div>
                <div className='font-chakra font-semibold'>
                  Jorge Antunes (Brasil)
                </div>
                <div className='text-sm'>
                  Maestro e precursor da música eletrônica brasileira, tendo
                  sido responsável pela publicação do primeiro disco deste
                  gênero por aqui.
                </div>
              </div>
            </>
          )}

          {ativacoesOption === 3 && (
            <>
              <div className='pb-6 font-semibold font-chakra uppercase text-2xl'>
                EXPOSIÇÃO
              </div>

              <div className='text-sm pb-4'>
                <div className='font-chakra font-semibold text-base pb-1'>
                  Ajítẹnà Marco Scarassatti
                </div>
                <div className='pb-2'>
                  Ìbí eré alárà, ou numa tradução livre e poética do yorubá, o
                  nascimento de uma criação sobrenatural, estaria no lugar
                  daquilo que nos acostumamos a chamar de poética. Algo que
                  nasce como criação, ou transformação do ordinário em
                  extraordinário. Na visão do artista, nasce a partir da escuta
                  dos sons percebendo sua forma e construindo a imagem.
                </div>
                <div className='font-semibold'>Ògún Lákáayé, oriki</div>
                <div className=''>2023</div>
                <div className=''>Objeto-instalação</div>
                <div className=''>Dimensões variáveis</div>
              </div>

              <div className='text-sm pb-4'>
                <div className='font-chakra font-semibold text-base pb-1'>
                  Bruno Qual (AKA Bruno Queiroz)
                </div>
                <div className='pb-2'>
                  Bruno Qual, é artista, produtor musical e agitador cultural.
                  Por 10 anos acompanhou a voz de Elza Soares, criando e
                  executando programações eletrônicas em shows. Em 2009 começou
                  a desenvolver sistemas sonoros portáteis e através dessa
                  prática articulou projetos como Circular Som Sistema, Nuvem
                  Móvel, Manie Dansante e RadioLixo. Colabora no Programa Arte
                  Sonora no Parque Lage desde 2013 e atualmente participa da
                  gestão da residência artística Casa Figueira.
                </div>
                <div className='font-semibold'>Circular Som Sistema</div>
                <div className=''>
                  Circular Som Sistema é uma plataforma de derivas sonoras. Um
                  coletivo em formato aberto que através de um triciclo equipado
                  com caixas de som, promove encontros de músicos, djs, poetas e
                  artistas, transitando nas fronteiras entre o tempo cênico e o
                  espaço comum. Com um olhar para os movimentos cíclicos, de
                  continuidades e transformações, faz do deslocamento uma
                  prática para novas formas de experienciar o espaço público e o
                  som. Atua desde 2018 na cidade do Rio de Janeiro e desde 2022
                  articula com desdobramentos nas cidades de Paris(FR) e
                  Marseille(FR).
                </div>
              </div>
              <div className='text-sm pb-4'>
                <div className='font-chakra font-semibold text-base pb-1'>
                  Caio Cesar Loures
                </div>
                <div className='pb-2'>
                  Caio é artista sonoro e profissional do som, que vive e
                  trabalha no Rio de Janeiro. Desde 2006 atua em audiovisual,
                  música e artes visuais. Graduado em produção fonográfica pela
                  UNESA e mestrando em Mídias Criativas pela UFRJ (PPGMC),
                  atualmente é diretor de operações e tecnologia do Núcleo de
                  Rádio e TV da UFRJ. Como artista sonoro, apresentou nas
                  coletivas: Paisagens Invisíveis, MuBE SP; Happening Arte
                  Sonora, 2015, EAV Parque Lage, RJ; Ocupação Arte Sonora, 2015,
                  Centro Cultural Oduvaldo Vianna Filho, RJ.
                </div>
                <div className='font-semibold'>Paisagens Sonoras Cariocas</div>
                <div className=''>2023</div>
                <div className=''>Peça sonora, 15"</div>
                <div className=''>
                  Ambiências sonoras dos principais cartões postais do Rio de
                  Janeiro, capturadas com técnicas de gravação de som 360º e
                  difusão binaural. Nesta imersão sonora, o público é
                  transportado para as ruas de Santa Teresa, Vista Chinesa,
                  Pedra do Arpoador, um jogo do Flamengo no Maracanã e o famoso
                  Réveillon de Copacabana. Inspirado no conceito de “paisagem
                  sonora” de Murray Schafer, o trabalho propõe outras percepções
                  da cidade.
                </div>
              </div>

              <div className='text-sm pb-4'>
                <div className='font-chakra font-semibold text-base pb-1'>
                  Denise Alves-Rodrigues
                </div>
                <div className='pb-2'>
                  Denise Alves-Rodrigues é artista visual, tecnóloga autodidata
                  e astrônoma amadora. Bacharela em Artes Visuais, vive e
                  trabalha em Brasília/DF. Inventa aparatos e instrumentos
                  dedicados à pesquisa e produção de tecnologias e é
                  especialista em obras de arte e instalações interativas no
                  museu SESI Lab em Brasília - DF. Atualmente é curadora adjunta
                  do festival chileno Toda la Teoría del Universo e é
                  representada pela Darling Pearls Co (UK) e Martins&Montero
                  (BR).
                </div>
                <div className='font-semibold'>
                  Sem título (Fanfarra Cigarra-Work in Progress)
                </div>
                <div className=''>2022/2024</div>
                <div className=''>Objeto sonoro</div>
                <div className=''>
                  Disco fonográfico 12', capa, fones de ouvido e toca discos
                </div>
                <div className=''>
                  Num trabalho sobre a Terra, o tempo e a técnica, a artista vem
                  captando, desde 2022, o ciciar das cigarras na cidade de
                  Brasília a cada primavera num programa que deve seguir por 14
                  anos. Uma massa sonora que se estende entre as asas do Plano
                  Piloto e que se esconde entre as árvores. O som é combinado a
                  uma ficção científica que vem sendo construída com o auxílio
                  da inteligência artificial.
                </div>
              </div>

              <div className='text-sm pb-4'>
                <div className='font-chakra font-semibold text-base pb-1'>
                  Eduardo Politzer
                </div>
                <div className='pb-2'>
                  Eduardo Politzer (aka Ed Marola) vive e trabalha no Rio de
                  Janeiro. Artista e profissional do som, desenvolve suas
                  narrativas explorando temas ontológicos em experiências
                  poéticas nos meios digitais. Interpretações de sonhos,
                  delírios existenciais e ficções metafísicas convivem com
                  imagens de pixel art, seres antropomórficos e músicas que
                  remetem ao universo sci-fi.
                </div>
                <div className='font-semibold'>Bolhalha</div>
                <div className=''>2024</div>
                <div className=''>Vídeo, 10'</div>
                <div className=''>
                  Narrativa ficcional-poético-científica, construída de cacos de
                  som e pixels que se conectam através de animações e textos,
                  abordando temas do delírio e da imaginação dentro de um
                  labirinto de tecnologias e relações existenciais no campo da
                  internet, com influência estética e temática dos videogames,
                  da arte naïf e da música eletrônica.
                </div>
              </div>

              <div className='text-sm pb-4'>
                <div className='font-chakra font-semibold text-base pb-1'>
                  Gabriel Ferreira
                </div>
                <div className='pb-2'>
                  G. Ferreira é de Goiânia, Graduado em música pela UFG (2020),
                  foi aluno do Programa de Pós-graduação em Direção de Arte da
                  EMAC-UFG (2022), passando por um intercâmbio acadêmico pela
                  USU (EUA, 2015). Sua pesquisa questiona aspectos da interação
                  e retroalimentação entre a percepção humana e as ferramentas
                  tecnológicas. Seu trabalho tem foco na música experimental,
                  arte sonora, fotografia, performance e mídias mistas.
                </div>
                <div className='font-semibold'>Série “códigos"</div>
                <div className=''>2023</div>
                <div className=''>
                  Impressões em papel fotográfico Ultra Glossy 180g
                </div>
                <div className=''>Tamanhos variados</div>
                <div className=''>
                  A série de gravuras digitais traça implicitamente relações
                  entre som e imagem, através da montagem de fotografias
                  conectadas a recortes de códigos de programação musical de
                  suas composições sonoras e inserções de trechos de textos de
                  diferentes autores. Assimila o erro e o ruído dos
                  processamentos digitais e ferramentas defeituosas, como
                  elemento conceitual.
                </div>
              </div>

              <div className='text-sm pb-4'>
                <div className='font-chakra font-semibold text-base pb-1'>
                  Jean Deffense
                </div>
                <div className='pb-2'>
                  Jean é artista e designer, vive e trabalha em São Paulo. Seus
                  trabalhos costuram o tátil e o sensorial, buscando a leveza do
                  imaterial e a robustez do físico. No anseio por extrair
                  materialidade do abstrato e abstração do material sua pesquisa
                  o leva para a experimentação brusca.
                </div>
                <div className='font-semibold'>O Peso</div>
                <div className=''>2022</div>
                <div className=''>Peça sonora, objeto</div>
                <div className=''>
                  "O Peso" é um revival de memórias que destaca como nosso
                  inconsciente habita, simultaneamente, arquivos de
                  desconhecidos. A peça sonora/objeto evoca imagens edipianas de
                  culpa, penitência e devoção. Um fado em loop contínuo serve de
                  base instrumental para um transe induzido.
                </div>
              </div>

              <div className='text-sm pb-4'>
                <div className='font-chakra font-semibold text-base pb-1'>
                  Juliana Frontin
                </div>
                <div className='pb-2'>
                  Juliana Frontin vive e trabalha em São Paulo. É uma artista
                  que explora o som em suas diversas dimensões e extensões no
                  tempo/espaço. Seus trabalhos tratam da contenção sonora e seus
                  transbordamentos, do volume ocupado no espaço e sua
                  materialidade e possibilidades escultóricas e visuais.
                </div>
                <div className='font-semibold'>
                  Contra-volume, espaço parcial
                </div>
                <div className=''>2024</div>
                <div className=''>43 x 36 x 3 cm</div>
                <div className=''>Cera de abelha</div>
                <div className=''>
                  "Contra-volume, espaço parcial" preenche o vazio do interior
                  da tampa de um toca-discos com cera de abelha.
                </div>
              </div>

              <div className='text-sm pb-4'>
                <div className='font-chakra font-semibold text-base pb-1'>
                  Leandra Lambert
                </div>
                <div className='pb-2'>
                  Leandra Lambert é doutora em Artes, atua na música
                  eletrônica/experimental desde os anos 90 e como multiartista
                  desde os anos 00. Produz e experimenta com o canto, os limites
                  da linguagem, gravações de campo, beats, rituais sônicos,
                  programação e improviso, objetos, instalações e performances.
                  Investiga relações entre memória, ambiente e a imaginação de
                  futuros enquanto explora possibilidades no cruzamento de
                  história, ficção, jogos oraculares e inteligência artificial.
                </div>
                <div className='font-semibold'>
                  Que essa ilusão se dissolva nas areias da ampulheta
                </div>
                <div className=''>2024</div>
                <div className=''>Objeto, dimensões variáveis</div>
                <div className=''>Tecido, vidro e elementos aquosos</div>
                <div className=''>
                  Uma veste/cortina, coberta de ampulhetas de vidros diversos e
                  irregulares contendo areia, água etc. Um rádio de ondas curtas
                  sintonizado em estação do Oriente Médio e um ventilador. Entre
                  areias e vidros, o tempo, o vento e a voz. Ondas curtas,
                  espectro. Vestir a lembrança do deserto que foi, do que virá.
                  Tempo é espaço. Voz deserta, prenúncio e fantasma, verbo, o
                  que é e será.
                </div>
              </div>

              <div className='text-sm pb-4'>
                <div className='font-chakra font-semibold text-base pb-1'>
                  Leandro Araújo
                </div>
                <div className='pb-2'>
                  Leandro Araújo é natural de Goiânia. Vive e trabalha entre a
                  capital e interior de Goiás. Possui formação em Engenharia de
                  Computação e Artes Visuais. Sua pesquisa correlaciona
                  natureza, cidade, tecnologias, histórias esquecidas ou
                  imaginadas, ideais de progresso e desenvolvimento, frente a
                  exploração desenfreada do Cerrado e o apagamento dos saberes
                  da terra e dos povos cerratenses.
                </div>
                <div className='font-semibold'>
                  A fogo-apagou é uma ave que canta com o bico fechado
                </div>
                <div className=''>2023</div>
                <div className=''>Instalação da série: Chamariz</div>
                <div className=''>200 x 75 x 120 cm</div>
                <div className=''>
                  Mídia generativa, estrutura de madeira, sacos de cimento e tv
                  32”
                </div>
                <div className=''>
                  Série itinerante de trabalhos, onde o artista percorre
                  cidades, tendo os cantos dos pássaros como condutores.
                  Questões relacionadas ao tombamento e à conservação de partes
                  históricas das cidades ecoam reflexões de discursos,
                  apagamentos e interesses que moldam o espaço urbano. Sons de
                  pássaros transmutam e corrompem imagens da cidade.
                </div>
              </div>

              <div className='text-sm pb-4'>
                <div className='font-chakra font-semibold text-base pb-1'>
                  Leliene Rodrigues
                </div>
                <div className='pb-2'>
                  Leliene Rodrigues vive e trabalha no Rio de Janeiro. Seus
                  trabalhos transitam entre o vídeo, objeto, fotografia e
                  instalações num jogo de sensações continuadas, onde o
                  participante/espectador investiga aspectos da alteridade. A
                  partir de histórias cotidianas, a artista propõe experiências
                  onde as cenas se estruturam em narrativas quase documentais:
                  momentos, acasos e situações que fazem parte da exuberância,
                  finitude e mazelas da vida humana.
                </div>
                <div className='font-semibold'>Cruz da moça</div>
                <div className=''>Video, 5' 56</div>
                <div className=''>
                  Uma pequena capela e sua crença bastam para sustentar o mito
                  da Cruz da Moça , relatado através de depoimentos.
                </div>
              </div>

              <div className='text-sm pb-4'>
                <div className='font-chakra font-semibold text-base pb-1'>
                  Manata Laudares
                </div>
                <div className='pb-2'>
                  O duo começou suas atividades em 1996, a partir da observação
                  sobre o universo do comportamento e da cultura da música
                  contemporânea, investigando a produção e vivências sob a égide
                  da era da informação. O duo tem realizado ações, programas de
                  residência e participando de mostras individuais e coletivas
                  dentro e fora do país.
                </div>
                <div className='font-semibold'>Amplified (bass)</div>
                <div className=''>2006</div>
                <div className=''>Da série SoundSystem</div>
                <div className=''>Impressão fotográfica</div>
                <div className=''>113 x 124 x 5 cm (díptico)</div>
                <div className=''>
                  Amplified (bass) reproduz fotograficamente duas caixas de
                  graves que foram modeladas virtualmente e fazem parte de uma
                  série de trabalhos que vêm sendo produzidos desde 2006 que
                  investigam aspectos do binômio real/virtual e sua incidência
                  nos corpos, nas coisas e na vida prática, através do som.
                </div>
              </div>

              <div className='text-sm pb-4'>
                <div className='font-chakra font-semibold text-base pb-1'>
                  Marta Supernova
                </div>
                <div className='pb-2'>
                  Marta é artista visual, DJ e produtora. Seu trabalho tece
                  questionamentos poéticos e metafísicos em uma tapeçaria
                  emocional, onde materiais e conceitos se entrelaçam em
                  composições sonoras e visuais. Como DJ, combina os subgêneros
                  da House Music com elementos sonoros orgânicos numa
                  intersecção brasileira e afro-indígena.
                </div>
                <div className='font-semibold'>Como tocar o ar</div>
                <div className=''>2024</div>
                <div className=''>Escultura sonora</div>
                <div className=''>Caixas de som</div>
                <div className=''>30 x 30 x 30cm (cada)</div>
                <div className=''>
                  Uma base eletrônica suave (drone) ecoa em duas caixas,
                  posicionadas em lados opostos, criando um diálogo. O trabalho
                  convida à reflexão sobre a relação com o ambiente que nos
                  cerca.
                </div>
              </div>

              <div className='text-sm pb-4'>
                <div className='font-chakra font-semibold text-base pb-1'>
                  Marcelo Mudou
                </div>
                <div className='pb-2'>
                  Marcelo Mudou trabalha com imagens, objetos e sons explora a
                  formação das imagens através de patologias sociais e seu
                  entorno psicológico. Estudou Design Gráfico na ESPM (RJ), IADE
                  (Lisboa) e UniverCidade (RJ). Frequentou a Escola de Artes
                  Visuais do Parque Lage (RJ). Participou do festival PornoPorsi
                  (Buenos Aires, 2011) e da Inhame Residência (Rio de Janeiro,
                  2011), e desde 2013 mantém o selo de música eletrônica
                  experimental Domina, com o qual participou do Festival Novas
                  Frequências (Rio de Janeiro, 2014) e da Ocupação Arte-Sonora
                  no Castelinho do Flamengo (Rio de Janeiro, 2014).
                </div>
                <div className='font-semibold'>Homenagem a Djalma Corrêa</div>
                <div className=''>2024</div>
                <div className=''>Fotografia (díptico)</div>
                <div className=''>35 x 42 cm (cada)</div>
              </div>

              <div className='text-sm pb-4'>
                <div className='font-chakra font-semibold text-base pb-1'>
                  Pedro Victor Brandão
                </div>
                <div className='pb-2'>
                  Pedro Victor Brandão é um artista visual que vive e trabalha
                  no Rio de Janeiro. Desenvolve séries em fotografia, pintura,
                  vídeo e experimentações sociais que confrontam tradições
                  artísticas em avaliações sobre o presente e o futuro do
                  capitalismo por meio de pesquisas em economia, direito à
                  cidade, cibernética e a atual natureza manipulável da imagem
                  técnica.
                </div>
                <div className='font-semibold'>Clique no saiba mais</div>
                <div className=''>2023</div>
                <div className=''>Instalação da série Detemura</div>
                <div className=''>480'</div>
                <div className=''>
                  Alto-falante paramétrico, recorte de vinil, peça sonora
                </div>
                <div className=''>
                  Oito horas de áudios extraídos da Biblioteca de Anúncios Meta
                  reúnem dicas sobre aumento de engajamento em rede, compras de
                  seguidores, produtos não-regulados e tentativas de golpe.
                </div>
              </div>

              <div className='text-sm pb-4'>
                <div className='font-chakra font-semibold text-base pb-1'>
                  Ulisses Carvalho
                </div>
                <div className='pb-2'>
                  Ulisses é um artista visual que vive e trabalha em Belo
                  Horizonte. Investiga a poética do som como fenômeno e matéria.
                  Explora a visualidade e a tactilidade do som por meio de
                  pinturas, objetos, serigrafias e ações sonoras. Graduou-se na
                  Escola Guignard - UEMG e é mestre em Artes Visuais pela UFMG.
                  Estudou criação sonora na Universidade de Barcelona e arte
                  sonora na EAV Parque Lage.
                </div>
                <div className='font-semibold'>Souvenir</div>
                <div className=''>2024</div>
                <div className=''>
                  Série de três pinturas em acrílica e serigrafia sobre papel
                </div>
                <div className=''>Dimensões variáveis</div>
                <div className=''>
                  Souvenir é uma série de pinturas feitas a partir de
                  fotografias de atividades sonoro-musicais e paisagens com
                  traços acústicos, ruidosos ou silenciosos. Cenários pictóricos
                  conjugados a imagens gráficas de elementos sonoros representam
                  uma forma simbólica de atualizar a experiência vivenciada na
                  pintura, buscando na memória visual, a lembrança sonora.
                </div>
              </div>

              <div className='text-sm pb-4'>
                <div className='font-chakra font-semibold text-base pb-1'>
                  Vivian Caccuri
                </div>
                <div className='pb-2'>
                  Vivian é uma artista brasileira, que vive e trabalha no Rio de
                  Janeiro. Experimenta o som em composições que desorientam o
                  arranjo convencional das experiências cotidianas. Aparelhagens
                  de som, microfones, alto-falantes, cabos, correntes, redes,
                  bordados, lâmpadas e velas são materiais presentes em suas
                  instalações e performances. Suas investigações tangenciam o
                  corpo, a memória e a história, e a partir da composição de
                  instalações escultóricas e trilhas.
                </div>
                <div className='font-semibold'>Trítono Frágil</div>
                <div className=''>2020</div>
                <div className=''>Escultura</div>
                <div className=''>Vidro, couro</div>
                <div className=''>27 x 25 x 1 cm (triângulo)</div>
                <div className=''>24 x 1 cm (baqueta)</div>
                <div className=''>
                  O trabalho repensa a solidez dos triângulos de ferro e latão,
                  reconstruindo-os em vidro. Instrumento pouco glamouroso na
                  hierarquia ocidental, o triângulo surgiu no Egito. Suas
                  origens ritualísticas são testemunha e artefato da matriz
                  mística de toda música popular.
                </div>
              </div>
            </>
          )}
        </div>

        <div className='hidden md:block flex-1 text-right text-white/90 pt-44 pr-8'></div>
      </div>
    </>
  );
}
