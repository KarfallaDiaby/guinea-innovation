import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Section supérieure - Navigation */}
        <div className="flex justify-end mb-8">
          <nav className="flex space-x-8">
            <Link 
              href="/about" 
              className="font-[var(--font-inter)] font-medium text-sm leading-5 text-[#171A1F] hover:text-[#565E6D] transition-colors duration-200"
            >
              À propos
            </Link>
            <Link 
              href="/resources" 
              className="font-[var(--font-inter)] font-medium text-sm leading-5 text-[#171A1F] hover:text-[#565E6D] transition-colors duration-200"
            >
              Ressources
            </Link>
            <Link 
              href="/support" 
              className="font-[var(--font-inter)] font-medium text-sm leading-5 text-[#171A1F] hover:text-[#565E6D] transition-colors duration-200"
            >
              Support
            </Link>
          </nav>
        </div>

        {/* Ligne de séparation */}
        <div className="w-full h-px bg-[#9095A0] mb-8"></div>

        {/* Section inférieure - Copyright et réseaux sociaux */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          {/* Copyright */}
          <div className="text-center sm:text-left">
            <p className="font-[var(--font-inter)] font-normal text-sm text-[#6B7280]">
              © {currentYear} Guinées Innovations. Tous droits réservés.
            </p>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex space-x-6">
            <Link 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#171A1F] hover:text-[#565E6D] transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </Link>
            <Link 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#171A1F] hover:text-[#565E6D] transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </Link>
            <Link 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#171A1F] hover:text-[#565E6D] transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
            <Link 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#171A1F] hover:text-[#565E6D] transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
