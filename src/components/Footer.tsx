
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-rookiBlack text-rookiGray">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="text-xl">👁️‍🗨️</span>
            <p className="font-bold text-lg text-rookiWhite">Rooki</p>
          </div>
          
          <p className="text-sm text-center md:text-right">
            &copy; {new Date().getFullYear()} Rooki. Todos os direitos reservados.<br />
            <span className="text-rookiGreen">Você suspeita, a gente detecta.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
