import Image from 'next/image';

export default function HeaderSubpage({
  title,
  bgImg,
  kind = '1',
  blur = false,
}) {
  return (
    <div className={'bg-g h-80 w-full relative'}>
      <div className='absolute inset-0 bg-black w-full h-full overflow-hidden z-0'>
        <Image
          src={bgImg}
          alt={title}
          fill
          className='object-cover object-center'
          // className={'' + (blur ? ' blur-sm' : '')}
          style={{
            filter: blur && 'blur(5px)',
            // backdropFilter: blur && 'blur(10px)',
            opacity: blur && '70%',
          }}
        />
      </div>
      <div
        className={
          'absolute inset-0 w-full h-full flex justify-center text-white/90 ' +
          (kind === '1' ? 'text-5xl md:text-8xl' : 'text-3xl md:text-5xl')
        }
      >
        <div className='h-full w-[90%] md:w-[700px] lg:w-[900px] flex items-end justify-end'>
          {title}
        </div>
      </div>
    </div>
  );
}
