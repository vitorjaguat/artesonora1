// export default function ContactForm() {
//   return <div>ContactForm</div>;
// }

'use client';

import ReCAPTCHA from 'react-google-recaptcha';
import { useRef, useState } from 'react';
import { verifyCaptcha } from '@/util/verifyCaptcha';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [showCaptcha, setShowCaptcha] = useState(false);

  const recaptchaRef = useRef();
  const [isVerified, setIsVerified] = useState(false);

  const sendEmail = async () => {
    console.log(name, email, subject, message);
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    });
    const data = await res.json();
    console.log(data);
  };

  async function handleCaptchaSubmission(token) {
    // Server function to verify captcha
    await verifyCaptcha(token)
      .then(() => {
        setIsVerified(true);
        setShowCaptcha(false);
        sendEmail();
      })
      .catch(() => setIsVerified(false));
  }

  return (
    <div className='w-full p-4 pt-0 md:pt-4'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setShowCaptcha(true);
        }}
      >
        <div className='flex flex-col gap-4 w-full md:py-1 pb-2'>
          <div className='flex flex-col w-full'>
            <label className='lowercase text-sm py-1' htmlFor='from_name'>
              nome
            </label>
            <input
              className='border-2 rounded-sm p-2 flex w-full text-zinc-200 border-none bg-zinc-800'
              type='text'
              name='from_name'
              id='from_name'
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        </div>
        <div className='flex flex-col py-1'>
          <label className='lowercase text-sm py-1' htmlFor='reply_to'>
            e-mail
          </label>
          <input
            type='email'
            name='reply_to'
            id='reply_to'
            className='border-2 rounded-sm p-2 flex border-none bg-zinc-800 text-zinc-200'
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className='flex flex-col py-1'>
          <label className='lowercase text-sm py-1' htmlFor='subject'>
            Assunto
          </label>
          <input
            type='text'
            name='subject'
            id='subject'
            className='border-2 rounded-sm p-2 flex border-none bg-zinc-800 text-zinc-200'
            required
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
          />
        </div>
        <div className='flex flex-col py-1'>
          <label className='lowercase text-sm py-1' htmlFor='message'>
            Mensagem
          </label>
          <textarea
            className='border-2 rounded-sm p-2 border-none bg-zinc-800 text-zinc-200'
            rows='10'
            name='message'
            id='message'
            required
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>

        {!showCaptcha ? (
          <button className='w-full lowercase bg-zinc-500 p-4 text-gray-100 mt-4 hover:bg-zinc-700 hover:scale-[1.01] ease-in-out duration-300'>
            Enviar
          </button>
        ) : (
          <div className='flex w-full gap-4 justify-between'>
            <div className=''>Complete o CAPTCHA para enviar:</div>
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              ref={recaptchaRef}
              onChange={handleCaptchaSubmission}
            />
          </div>
          //   <ReCAPTCHA
          //     sitekey='6LdyfDUnAAAAAPSlDjtujCddrG1SakTVbzcVpeUD'
          //     onChange={sendEmail}
          //   />
        )}
      </form>
    </div>
  );
}
