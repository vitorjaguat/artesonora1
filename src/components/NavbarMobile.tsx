import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';
import { GrClose } from 'react-icons/gr';

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className='md:hidden fixed top-0 right-0 pr-5 pt-5 cursor-pointer'
        onClick={() => setIsOpen(true)}
      >
        <RxHamburgerMenu size={30} className='text-zinc-500' />
      </div>
      {isOpen && (
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-black'>
          <div className='relative w-full h-full'>
            <div className='absolute top-5 right-5'>
              <GrClose
                size={30}
                className='text-zinc-500 cursor-pointer'
                onClick={() => setIsOpen(false)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
