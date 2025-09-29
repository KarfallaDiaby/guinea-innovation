import Image from 'next/image'

interface CategoryCardProps {
  title: string;
  href?: string;
  onClick?: () => void;
  backgroundImage?: string;
}

export const CategoryCard = ({ title, href, onClick, backgroundImage }: CategoryCardProps) => {
  const content = (
    <div className="relative w-[284px] h-[160px] border border-white cursor-pointer overflow-hidden flex-shrink-0 group">
      {/* Image de fond */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      
      {/* Overlay pour la lisibilité */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
      
      {/* Contenu */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <h3 className="font-[var(--font-poppins)] font-bold text-lg text-white text-center px-4 drop-shadow-lg">
          {title}
        </h3>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  if (onClick) {
    return (
      <div onClick={onClick}>
        {content}
      </div>
    );
  }

  return content;
};
