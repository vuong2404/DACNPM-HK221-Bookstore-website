import { useEffect } from 'react';
import { useState } from 'react';
const getBootstrapSize = (width) => {
  return (
    (width >= 1400 && 'xxl') ||
    (width >= 1200 && 'xl') ||
    (width >= 992 && 'lg') ||
    (width >= 768 && 'md') ||
    (width >= 576 && 'sm')|| 
    (width <= 576 && 'lsm')
  );
};

export const useViewport = () => {
  const [viewport, setViewport] = useState({ width: window.innerWidth, size: getBootstrapSize(window.innerWidth) });

  useEffect(() => {
    const handleWindowResize = () => {
      setViewport({ width: window.innerWidth, size: getBootstrapSize(window.innerWidth) });
    };
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return viewport;
};
