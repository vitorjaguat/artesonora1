import Link from 'next/link';
import HeaderSubpage from '../../components/HeaderSubpage';

export default function Page() {
  return (
    <>
      {/* Header */}
      <HeaderSubpage
        title='Sobre'
        bgImg='https://placehold.co/600x400?text=imagem&font=lora
        '
      />

      {/* submenu */}
      <div className='w-full h-12 bg-zinc-900 flex items-center justify-center uppercase text-white/70 sticky top-0  border-zinc-500 shadow-md shadow-zinc-900/40'>
        <div className='h-full w-[90%] md:w-[700px] lg:w-[900px] flex justify-between items-center'>
          <Link
            href='/sobre'
            className='w-full h-full text-left  hover:bg-white/30 flex items-center justify-center duration-300'
          >
            sobre o arte sonora
          </Link>
          <Link
            href='/sobre#quem-somos'
            className='w-full h-full text-center  hover:bg-white/30 flex items-center duration-300 justify-center'
          >
            quem somos
          </Link>
          <Link
            href='/sobre#breve-historia'
            className='w-full h-full text-right  hover:bg-white/30 flex items-center duration-300 justify-center'
          >
            uma breve história
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className='pt-10 pb-60 bg-black w-full flex flex-col items-center'>
        <div className='w-[90%] md:w-[700px] lg:w-[900px] flex flex-col gap-24 text-white'>
          <div className='flex gap-4 justify-between h-60'>
            <div className='flex-1 bg-white/50'></div>
            <div className='flex-1'>
              Arte Sonora é uma prática artística coletiva desenvolvida pelo duo
              de artistas <span className='font-bold'>Franz Manata</span> e{' '}
              <span className='font-bold'>Saulo Laudares</span>, que possui
              diversos formatos, como: cursos, residências, exposições,
              happenings, programas de rádio, publicações etc.
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
            <div className='bg-white/[0.15] w-[85%]  italic text-lg py-4 px-8 rounded-lg'>
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
            <Link href='/arquivos'>
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
              Este site foi construído de forma independente e colaborativa com
              a finalidade de organizar e disponibilizar, ao público em geral,
              os programas e a memória do projeto. Todo seu conteúdo foi
              produzido em “fair use”.
            </div>
            <div className='flex-1 bg-white/50'></div>
          </div>

          {/* quem somos */}
          <div className='pt-16 text-5xl' id='quem-somos'>
            Quem somos
          </div>
          <div className='-mt-10 flex gap-4 justify-between h-60'>
            <div className='flex-1'>
              <span className='font-bold'>Franz Manata</span> (1964) é artista,
              curador e professor e{' '}
              <span className='font-bold'>Saulo Laudares</span> (1976) é
              artista, professor e DJ produtor, ambos vivem no Rio de Janeiro –
              BR. O duo nasceu em 1996, fruto de sua observação acerca do
              universo do comportamento e a cultura da música contemporânea. Os
              artistas vem realizando programas de residência e participando de
              mostras, individuais e coletivas, dentro e fora do Brasil. Desde
              2009 coordenam o programa Arte Sonora na Escola de Artes Visuais
              do Parque Lage. Atualmente, são representados pela Galeria Sé –
              São Paulo, BR.
            </div>
            <div className='flex-1 bg-white/50'></div>
          </div>

          {/* uma breve história */}
          <div className='pt-16 text-5xl' id='breve-historia'>
            Uma breve história <span className='text-3xl'>da Arte Sonora</span>
          </div>
          <div className='-mt-10 flex flex-col gap-4'>
            <div className=''>
              Apesar de ser um fenômeno recente – pois se insere definitivamente
              como um campo sensível da arte contemporânea a partir dos anos
              1990 – a Arte Sonora remonta a séculos atrás quando o som era
              mixado com artes visuais nas igrejas.
            </div>
            <div className=''>
              Com o surgimento das salas de concerto no Século XIX e o
              crescimento das cidades, a arte começa a expandir seu campo usual
              ao misturar músicas e movimento através da dança, mas é o Século
              XX que irá valorizar o entorno acústico esteticamente.
            </div>
            <div className=''>
              Os primeiros a ficarem atentos a esta nova sensibilidade moderna
              foram os Futuristas italianos – Filippo Tommaso Marinetti, Umberto
              Boccioni, Luigi Russolo e Carlo Carrà – e os Dadaístas, via Marcel
              Duchamp. Nos anos 40, do século passado, a música eletrônica deixa
              de ser uma mera curiosidade científica. Os novos instrumentos vão
              despertar interesse da música clássica acadêmica, como forma de
              sobrepujar os limites dos instrumentos eletroacústicos.
            </div>
            <div className=''>
              John Cage vai ampliar as concepções e possibilidades da música ao
              provocar os ouvintes a escutar o silêncio nas composições e sentir
              os ruídos espontâneos nos concertos e ao introduzir o acaso como
              parte da composição, sem determinação prévia. A música e a arte
              nunca mais foram as mesmas.
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
              reflexão da arte: o poder da publicidade, a comunicação de massa e
              o consumo exacerbado de mercadorias. A tecnologia de áudio
              analógico, principalmente pós Segunda Grande Guerra Mundial,
              permite uma substancial transformação da arte sonora e sua
              expressividade, inundando diversos campos.
            </div>
            <div className=''>
              A música eletrônica deixa de ser uma curiosidade científica ou
              acadêmica e passa a ser incorporada ao repertório de compositores
              vanguardistas com a possibilidade de se expandir os limites dos
              instrumentos eletroacústicos e experimentar novas sonoridades.
            </div>
            <div className=''>
              Hoje passamos por uma mudança de paradigmas. Do padrão tecnológico
              analógico para o digital, em todos os processos de produção,
              distribuição e comercialização. Agora, a network nos permite
              pensar on time, on line e on site, simultaneamente. A Era Digital
              nos exige uma nova reflexão sobre o fazer, o meio técnico e o
              endereçamento.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
