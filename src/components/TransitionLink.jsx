'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function TransitionLink({ children, href, ...props }) {
  const router = useRouter();

  const sleep = (duration) => {
    return new Promise((resolve) => setTimeout(resolve, duration));
  };

  const handleTransition = async (e) => {
    e.preventDefault();

    const main = document.getElementById('main');
    main?.classList.add('page-transition');

    await sleep(500);

    router.push(href);

    await sleep(500);

    main?.classList.remove('page-transition');
  };

  return (
    <Link onClick={handleTransition} href={href} {...props}>
      {children}
    </Link>
  );
}
