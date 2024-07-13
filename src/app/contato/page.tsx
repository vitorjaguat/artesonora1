import HeaderSubpage from '@/components/HeaderSubpage';
import { RxInstagramLogo } from 'react-icons/rx';
import { LiaFacebookSquare } from 'react-icons/lia';

export default function Page() {
  return (
    <>
      <HeaderSubpage
        title='Contato'
        bgImg='https://placehold.co/600x400?text=imagem&font=lora'
      />
      <div className='pt-10 pb-60 min-h-screen w-full flex flex-col items-center bg-black/90 text-white/90'>
        <div className='flex flex-col gap-5 w-[90%] md:w-[700px] lg:w-[900px]'>
          {/* redes sociais: */}
          <div className='w-full p-8 bg-white/20 rounded-lg '>
            <div className='text-center text-xl font-thin'>
              Acompanhe as nossas redes sociais
            </div>
            <div className='pt-4 w-full flex justify-center items-center gap-4 '>
              <a
                href='https://www.instagram.com/manatalaudares/'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:scale-105 hover:text-white duration-300 ease-in-out'
              >
                <RxInstagramLogo size={32} />
              </a>
              <a
                href='https://www.facebook.com/groups/artesonora/'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:scale-105 hover:text-white duration-300 ease-in-out'
              >
                <LiaFacebookSquare size={38} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
