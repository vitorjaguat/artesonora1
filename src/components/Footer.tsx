const Footer = () => {
  return (
    <footer className='bg-neutral-900 border-t-[1px] border-neutral-700 text-white/90 text-sm px-5 pt-10 pb-[150px] md:pb-[132px] flex justify-center'>
      <div className='flex flex-col gap-1 justify-center items-center'>
        <div className=''>Realização EXST</div>
        <div className='text-sm'>
          desenvolvimento{' '}
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
    </footer>
  );
};

export default Footer;
