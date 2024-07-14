'use client';

import HeaderSubpage from '@/components/HeaderSubpage';
import { RxInstagramLogo } from 'react-icons/rx';
import { LiaFacebookSquare } from 'react-icons/lia';
import ContactForm from '@/components/ContactForm';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRef, useState } from 'react';
import { verifyCaptcha } from '@/util/verifyCaptcha';

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

  return (
    <>
      <HeaderSubpage
        title='Contato'
        bgImg='https://placehold.co/1500x1000/png?text=imagem&font=lora'
      />
      <div className='pt-10 pb-60 min-h-screen w-full flex flex-col items-center bg-black/90 text-white/90'>
        <div className='flex flex-col gap-10 w-[90%] md:w-[700px] lg:w-[900px] items-center'>
          {/* redes sociais: */}
          <div className='w-full p-8 bg-white/20 rounded-lg '>
            <div className='text-center text-lg font-light tracking-wider text-white/60'>
              Acompanhe as nossas{' '}
              <span className='text-3xl'>redes sociais</span>
            </div>
            <div className='pt-6 w-full flex justify-center items-center gap-4 '>
              <a
                href='https://www.instagram.com/manatalaudares/'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:scale-105 hover:text-white duration-300 ease-in-out'
              >
                <RxInstagramLogo size={40} />
              </a>
              <a
                href='https://www.facebook.com/groups/artesonora/'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:scale-105 hover:text-white duration-300 ease-in-out'
              >
                <LiaFacebookSquare size={47} />
              </a>
            </div>
          </div>

          {/* formulario */}
          <div className='w-full max-w-[700px] flex flex-col items-center bg-white/20 rounded-lg py-6 gap-12'>
            <div className='text-white/60 text-lg'>
              Envie-nos uma <span className='text-3xl'>mensagem</span>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
