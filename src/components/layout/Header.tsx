import React from 'react'
import Image from 'next/image'
import { DropdownMenu } from '@/components/ui/dropdown-menu'

export const Header = () => {
  // Configuration des dropdowns selon l'architecture
  const startupTechOptions = [
    {
      label: "Actu Startup",
      onClick: () => console.log("Actu Startup"),
      Icon: null
    },
    {
      label: "Portraits Entrep.",
      onClick: () => console.log("Portraits Entrep."),
      Icon: null
    }
  ]

  const innovationsSocialesOptions = [
    {
      label: "Education",
      onClick: () => console.log("Education"),
      Icon: null
    },
    {
      label: "Agriculture",
      onClick: () => console.log("Agriculture"),
      Icon: null
    },
    {
      label: "Santé",
      onClick: () => console.log("Santé"),
      Icon: null
    },
    {
      label: "Développement communautaire",
      onClick: () => console.log("Développement communautaire"),
      Icon: null
    }
  ]

  const cultureOptions = [
    {
      label: "Music et Cinéma",
      onClick: () => console.log("Music et Cinéma"),
      Icon: null
    },
    {
      label: "Art et Design",
      onClick: () => console.log("Art et Design"),
      Icon: null
    },
    {
      label: "Patrimoine et Tradition",
      onClick: () => console.log("Patrimoine et Tradition"),
      Icon: null
    }
  ]

  return (
    <header className="bg-[#072E82] shadow-sm border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10">
              <Image
                src="/img/Guinee_innovation_favicon.svg"
                alt="Guinée Innovation"
                width={40}
                height={40}
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-tight font-[var(--font-poppins)]">
                Guinée
              </span>
              <span className="text-white text-sm leading-tight font-[var(--font-poppins)]">
                innovation
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
             {/* Accueil - Simple lien */}
             <a 
               href="/" 
               className="text-white border-b-2 border-white pb-1 font-[var(--font-inter)] font-normal text-base leading-none tracking-normal"
             >
               Accueil
             </a>

            {/* Startup & Tech - Dropdown */}
            <div className="relative group">
              <button className="text-[#FFFFFF80] hover:text-white transition-colors duration-200 font-[var(--font-inter)] font-normal text-base leading-none tracking-normal">
                Startup & Tech
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-[var(--border)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                <div className="py-2">
                  <a href="/actu-startup" className="block px-4 py-2 text-sm text-black hover:bg-[var(--primary-light)] hover:text-[var(--primary)] transition-colors duration-200">
                    Actu Startup
                  </a>
                  <a href="/portraits-entrep" className="block px-4 py-2 text-sm text-black hover:bg-[var(--primary-light)] hover:text-[var(--primary)] transition-colors duration-200">
                    Portraits Entrep.
                  </a>
                </div>
              </div>
            </div>

            {/* Innovations sociales - Dropdown */}
            <div className="relative group">
              <button className="text-[#FFFFFF80] hover:text-white transition-colors duration-200 font-[var(--font-inter)] font-normal text-base leading-none tracking-normal">
                Innovations sociales
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-[var(--border)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                <div className="py-2">
                  <a href="/education" className="block px-4 py-2 text-sm text-black hover:bg-[var(--primary-light)] hover:text-[var(--primary)] transition-colors duration-200">
                    Education
                  </a>
                  <a href="/agriculture" className="block px-4 py-2 text-sm text-black hover:bg-[var(--primary-light)] hover:text-[var(--primary)] transition-colors duration-200">
                    Agriculture
                  </a>
                  <a href="/sante" className="block px-4 py-2 text-sm text-black hover:bg-[var(--primary-light)] hover:text-[var(--primary)] transition-colors duration-200">
                    Santé
                  </a>
                  <a href="/developpement-communautaire" className="block px-4 py-2 text-sm text-black hover:bg-[var(--primary-light)] hover:text-[var(--primary)] transition-colors duration-200">
                    Développement communautaire
                  </a>
                </div>
              </div>
            </div>

            {/* Culture - Dropdown */}
            <div className="relative group">
              <button className="text-[#FFFFFF80] hover:text-white transition-colors duration-200 font-[var(--font-inter)] font-normal text-base leading-none tracking-normal">
                Culture
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-[var(--border)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                <div className="py-2">
                  <a href="/music-cinema" className="block px-4 py-2 text-sm text-black hover:bg-[var(--primary-light)] hover:text-[var(--primary)] transition-colors duration-200">
                    Music et Cinéma
                  </a>
                  <a href="/art-design" className="block px-4 py-2 text-sm text-black hover:bg-[var(--primary-light)] hover:text-[var(--primary)] transition-colors duration-200">
                    Art et Design
                  </a>
                  <a href="/patrimoine-tradition" className="block px-4 py-2 text-sm text-black hover:bg-[var(--primary-light)] hover:text-[var(--primary)] transition-colors duration-200">
                    Patrimoine et Tradition
                  </a>
                </div>
              </div>
            </div>

             {/* Évènements - Simple lien */}
             <a 
               href="/evenements" 
               className="text-[#FFFFFF80] hover:text-white transition-colors duration-200 font-[var(--font-inter)] font-normal text-base leading-none tracking-normal"
             >
               Évènements
             </a>
          </nav>

          {/* Profile Icon */}
          <div className="flex items-center">
            <button className="rounded-full hover:bg-white/20 transition-colors duration-200">
              <Image
                src="/icon/User Circle.svg"
                alt="Profil utilisateur"
                width={32}
                height={32}
                className="w-8 h-8 brightness-0 invert"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
