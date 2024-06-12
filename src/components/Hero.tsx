export default function Hero() {
  return (
    <div className='relative bg-neutral-900 w-screen md:w-[calc(100vw-52px)] h-[calc(100vh-109px)] md:h-[calc(100vh-84px)]'>
      <div className='absolute right-5 top-[4rem] md:top-5 tracking-widest text-5xl md:text-8xl text-neutral-500 text-right'>
        <div className=''>ARTE</div>
        <div className=''>SONORA</div>
      </div>
      <div className='absolute left-3 bottom-3 md:left-5 md:bottom-5 text-neutral-600 text-base md:text-lg tracking-wider'>
        Realização EXST
      </div>
    </div>
  );
}
