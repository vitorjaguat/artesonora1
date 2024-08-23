import WaterDropGridSmall from './WaterDropGridSmall';

const Footer = () => {
  return (
    <footer className='bg-neutral-900 border-t-[1px] border-neutral-700 text-white/90 text-sm px-5 pt-12 pb-[150px] md:pb-[132px] flex justify-center items-center'>
      <div className='relative w-full flex flex-col gap-1 justify-center items-start md:h-full'>
        <div className='flex flex-col md:flex-row gap-8  md:h-full'>
          <div className='h-full md:w-1/2 ml-4'>
            <div className='mb-8 font-chakra text-3xl'>Créditos</div>
            <div className='flex flex-col gap-4 text-base'>
              <div className=''>
                <div className='tracking-widest font-chakra mb-[3px]'>
                  Realização
                </div>
                <div className=''>EXST</div>
              </div>
              <div className=''>
                <div className=' font-chakra tracking-wider mb-1'>
                  Agradecimentos
                </div>
                <div className=''>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt adipisci deleniti exercitationem fugit, tempore illum
                  velit delectus totam ex eveniet aut rem enim expedita deserunt
                  nam incidunt suscipit harum nisi dolor? Officiis voluptatum
                  ratione nostrum consequuntur voluptas inventore perspiciatis.
                  Ea id tempora deserunt! Maiores, quidem assumenda tempore
                  itaque placeat quod nesciunt odio temporibus mollitia, magni
                  quas pariatur sunt ipsum incidunt! Voluptatem placeat
                  repellendus dolor praesentium. Repudiandae consequuntur ipsum
                  sint nihil? Optio dicta libero pariatur odio eaque. Officiis
                  et, dicta praesentium dolore reiciendis quisquam velit
                  maiores, repellendus facere modi sit quasi voluptatum nulla
                  consequatur. Ipsam nesciunt minus odio perferendis
                  exercitationem magnam.
                </div>
              </div>
              <div className=''>
                <div className=' font-chakra tracking-wider mb-0'>
                  Desenvolvimento do site
                </div>
                <div className=''>
                  <a
                    href='http://uint.studio'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-white/60 hover:text-white/80 duration-300'
                  >
                    uint studio
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='relative md:absolute md:bottom-0 md:right-0'>
            <div className=''>
              <WaterDropGridSmall />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
