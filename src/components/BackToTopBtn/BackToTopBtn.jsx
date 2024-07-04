import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const BackToTopBtn = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return show && (
    <button 
      onClick={scrollToTop}
      className='fixed flex items-center justify-center w-12 h-12 text-white transition-all bg-gray-700 rounded-full cursor-pointer hover:bg-red-400 right-10 bottom-10'>
        <KeyboardDoubleArrowUpIcon className='w-8 h-8'/>
    </button>
  );
};

export default BackToTopBtn;

