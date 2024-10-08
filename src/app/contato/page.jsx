'use client';

import HeaderSubpage from '@/components/HeaderSubpage';
import { RxInstagramLogo } from 'react-icons/rx';
import { LiaFacebookSquare } from 'react-icons/lia';
import ContactForm from '@/components/ContactForm';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRef, useState } from 'react';
import { verifyCaptcha } from '@/util/verifyCaptcha';
import Image from 'next/image';
import Title from '@/components/subpages/Title';
import Description from '@/components/subpages/Description';
import contactBg from '../../../public/images/contactBg2.jpg';
import { useMediaQuery } from '@/util/useMediaQuery';

export default function Page() {
  // return (
  //   <>
  //     <ReCAPTCHA
  //       sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
  //       ref={recaptchaRef}
  //       onChange={handleCaptchaSubmission}
  //     />
  //     <button type='submit' disabled={!isVerified}>
  //       Submit feedback
  //     </button>
  //   </>
  // );

  const isDesktop = useMediaQuery('md');

  return (
    <section className='relative text-white/90 max-w-[100vw] h-full md:max-w-none md:w-[calc(100vw-52px)]  md:h-full md:min-h-[calc(100vh-92px)] overflow-x-hidden'>
      {/* fixed: */}
      <div className='fixed top-0 md:left-[52px] w-full  md:w-[calc(100vw-52px)] h-[calc(100vh-109px)] md:h-[calc(100vh-92px)] overflow-x-hidden'>
        <div className='relative w-full h-full overflow-hidden '>
          <div className='absolute inset-0 max-h-full w-full h-full opacity-20'>
            <Image
              src={contactBg}
              alt='Contato'
              fill
              style={{
                objectFit: 'cover',
                zIndex: 0,
              }}
              priority={true}
            />
          </div>

          {/* title */}
          <div className='absolute top-[69px] md:top-14 right-5 md:right-8 lg:right-14 xl:right-24 z-10  text-right  text-white/90 font-light font-chakra text-5xl md:text-8xl  flex flex-col items-end gap-6'>
            <div className='block md:hidden'>
              <Title title='Contato' />
            </div>
            <div className='hidden  md:block'>Contato</div>
            <div className=' w-[100%]'>
              {/* redes sociais: */}
              <div className='w-full md:pt-8'>
                {/* <div className='text-center text-lg font-light tracking-wider text-white/90'>
                  Acompanhe as nossas{' '}
                  <span className='text-3xl'>redes sociais</span>
                </div> */}
                <div className='md:pt-6 w-full flex justify-end items-center gap-4 text-white/60'>
                  <a
                    href='https://www.instagram.com/manatalaudares/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:scale-105 hover:text-white duration-300 ease-in-out'
                  >
                    <RxInstagramLogo size={isDesktop ? 40 : 30} />
                  </a>
                  <a
                    href='https://www.facebook.com/groups/artesonora/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:scale-105 hover:text-white duration-300 ease-in-out'
                  >
                    <LiaFacebookSquare size={isDesktop ? 47 : 36} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* formulario */}
      <div className='relative max-w-[100vw] pt-48 px-4 md:px-0 md:pt-0 md:pl-[20%] md:max-w-[50%] md:h-[calc(100vh-92px)] flex items-center justify-center '>
        {/* <div className='text-white/60 text-lg flex w-full items-end gap-1'>
          Envie-nos uma <span className='text-3xl'>mensagem</span>
        </div> */}
        <ContactForm />
      </div>
    </section>
  );
}
