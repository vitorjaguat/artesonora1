import { bg } from 'date-fns/locale';
import Image from 'next/image';

export default function HeaderSubpage({ title, bgImg, kind, blur }) {
  return (
    <div className={'bg-g h-80 w-full relative'}>
      <div className='absolute inset-0 bg-black w-full h-full overflow-hidden'>
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
          'absolute bottom-4 right-4 text-right text-white/90 ' +
          (kind === '1' ? 'text-5xl md:text-8xl' : 'text-3xl md:text-5xl')
        }
      >
        {title}
      </div>
    </div>
  );
}
