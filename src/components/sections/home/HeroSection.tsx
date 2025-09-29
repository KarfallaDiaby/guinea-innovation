'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const heroImages = [
    {
      src: "/img/man-wearing-smart-glasses-touching-holographic-screen.jpg",
      alt: "Innovation technologique en Guinée",
      objectPosition: "28% 0%",
      gradient: "linear-gradient(270deg, rgba(153, 255, 205, 0) 0%, rgba(0, 0, 0, 0.31) 105.97%)"
    },
    {
      src: "/img/black-girl-engages-with-virtual-reality-while-partner-works-laptop-desk.jpg",
      alt: "Collaboration technologique et réalité virtuelle",
      objectPosition: "100% 0%",
      gradient: "linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.6) 105.97%)"
    },
    {
      src: "/img/close-up-man-repairing-computer-chips.jpg",
      alt: "Innovation et réparation technologique",
      objectPosition: "180% 0%",
      gradient: "linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 105.97%)"
    }
  ]

  // Défilement automatique toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [heroImages.length])

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentImageIndex((prevIndex => 
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    ))
  }

  return (
    <section className="relative h-[120vh] w-full overflow-hidden">
      {/* Background Images Carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={`object-cover scale-100 ${index === 2 ? 'scale-x-[-1]' : ''}`}
              style={{ 
                objectPosition: image.objectPosition,
              }}
              priority={index === 0}
            />
            
            {/* Overlay dégradé spécifique à chaque image */}
            <div 
              className="absolute inset-0"
              style={{
                background: image.gradient
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
             {/* Titre */}
             <h1 className="font-[var(--font-poppins)] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[72px] leading-tight text-white mb-4">
               L&apos;impact des <span className="bg-gradient-to-r from-[#99FFCD] to-[#072E82] bg-clip-text text-transparent">fintechs</span> <br /> sur l&apos;économie guinéenne
             </h1>

            {/* Description */}
            <p className="font-[var(--font-inter)] font-normal text-base sm:text-lg lg:text-xl xl:text-[18px] leading-relaxed text-white max-w-2xl mb-4">
              Les technologies financières (fintechs) transforment le paysage économique guinéen en offrant des solutions innovantes pour
              l&apos;inclusion financière, les paiements mobiles et les services...{' '}
              <a 
                href="#" 
                className="underline underline-offset-2 hover:text-[#99FFCD] transition-colors duration-200"
              >
                Lire la suite
              </a>
            </p>

            {/* Navigation Icons */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={goToPrevious}
                className="w-8 h-8 hover:opacity-80 transition-opacity duration-200"
                aria-label="Image précédente"
              >
                <Image
                  src="/icon/Round Alt Arrow Left.svg"
                  alt="Précédent"
                  width={32}
                  height={32}
                  className="w-full h-full"
                />
              </button>
              <button 
                onClick={goToNext}
                className="w-8 h-8 hover:opacity-80 transition-opacity duration-200"
                aria-label="Image suivante"
              >
                <Image
                  src="/icon/Round Alt Arrow Right.svg"
                  alt="Suivant"
                  width={32}
                  height={32}
                  className="w-full h-full"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Indicateurs de position */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
