import HeaderSubpage from '@/components/HeaderSubpage';

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
          <div className='w-full p-8 bg-pink-300 '>
            <div className='text-center text-lg'>
              Acompanhe as nossas redes sociais
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
