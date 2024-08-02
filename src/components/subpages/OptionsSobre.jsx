import Link from 'next/link';

export default function OptionsSobre({ sobreOption }) {
  return (
    <div className='hidden md:flex mt-8 text-base text-white flex-col gap-2 items-end opacity-100'>
      <Link
        href='/sobre?q=sobre'
        replace
        className={
          'rounded-md bg-white/20 hover:bg-white/30 duration-300 ease-in-out px-3 py-1 cursor-pointer border-[1px] border-transparent ' +
          (sobreOption === 'sobre' ? ' bg-white/30 border-white/40' : '')
        }
        // onClick={() => changeSobreOption('sobre')}
      >
        Sobre o Arte Sonora
      </Link>
      <Link
        replace
        href='/sobre?q=quem-somos'
        className={
          'rounded-md bg-white/20 hover:bg-white/30 duration-300 ease-in-out px-3 py-1 cursor-pointer border-[1px] border-transparent' +
          (sobreOption === 'quem-somos' ? ' bg-white/30 border-white/40' : '')
        }
        // onClick={() => changeSobreOption('quem-somos')}
      >
        Quem somos
      </Link>
      <Link
        replace
        href='/sobre?q=breve-historia'
        className={
          'rounded-md bg-white/20 hover:bg-white/30 duration-300 ease-in-out px-3 py-1 cursor-pointer border-[1px] border-transparent' +
          (sobreOption === 'breve-historia'
            ? ' bg-white/30 border-white/40'
            : '')
        }
        // onClick={() => changeSobreOption('breve-historia')}
      >
        Uma breve história da Arte Sonora
      </Link>
    </div>
  );
}
