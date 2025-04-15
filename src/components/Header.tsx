
import React from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-rookiBlack/95 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl">👁️‍🗨️</span>
          <h1 className="font-bold text-xl text-rookiWhite">Rooki</h1>
        </div>
        
        <Button 
          variant="outline" 
          className="bg-transparent border border-rookiGreen text-rookiGreen hover:bg-rookiGreen hover:text-rookiBlack transition-all"
          onClick={() => window.open('https://wa.me/1234567890', '_blank')}
        >
          Acessar via WhatsApp
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
