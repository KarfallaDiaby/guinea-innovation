import Image from 'next/image'

export const HeroSection = () => {
  return (
    <section className="relative h-[120vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
         <Image
           src="/img/man-wearing-smart-glasses-touching-holographic-screen.jpg"
           alt="Innovation technologique en Guinée"
           fill
           className="object-cover scale-100"
           style={{ 
             objectPosition: '28% 0%',
           }}
           priority
         />
        {/* Overlay dégradé pour améliorer la lisibilité */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(270deg, rgba(153, 255, 205, 0) 0%, rgba(0, 0, 0, 0.31) 105.97%)'
          }}
        ></div>
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
              <button className="w-8 h-8 hover:opacity-80 transition-opacity duration-200">
                <Image
                  src="/icon/Round Alt Arrow Left.svg"
                  alt="Précédent"
                  width={32}
                  height={32}
                  className="w-full h-full"
                />
              </button>
              <button className="w-8 h-8 hover:opacity-80 transition-opacity duration-200">
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
    </section>
  )
}
