import { useState, useEffect } from 'react';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(getScreenSize());

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSize());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
};

function getScreenSize() {
  const width = window.innerWidth;

  if (width < 640) {
    return 'mobile';
  } else if (width < 768) {
    return 'sm';
  } else if (width < 1024) {
    return 'md';
  } else if (width < 1280) {
    return 'lg';
  } else {
    return 'xl';
  }
}

export default useScreenSize;
