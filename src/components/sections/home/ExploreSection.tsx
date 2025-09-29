import { CategoryCard } from "@/components/ui/CategoryCard";
import { CTAButton } from "@/components/ui/CTAButton";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const ExploreSection = () => {
  const categories = [
    { title: "Startup & Tech", href: "/startup-tech" },
    { title: "Innovations sociales", href: "/innovations-sociales" },
    { title: "Culture", href: "/culture" },
    { title: "Événements", href: "/evenements" },
    { title: "Portraits", href: "/portraits" },
    { title: "Témoignages", href: "/temoignages" }
  ];

  const handleDiscoverAll = () => {
    console.log("Découvrir tous les articles");
    // Navigation vers la page des articles
  };

  return (
    <section className="w-full bg-white border border-white py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre de la section */}
        <div className="text-center mb-12">
          <SectionTitle 
            title="Explorez"
            className="text-[#171A1F] font-[var(--font-poppins)] font-bold text-4xl sm:text-5xl lg:text-6xl"
          />
        </div>

        {/* Grille des catégories avec défilement infini */}
        <div className="relative overflow-hidden mb-12">
          {/* Dégradé gauche */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Dégradé droit */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex gap-6 animate-scroll">
            {/* Première série de cartes */}
            {categories.map((category, index) => (
              <CategoryCard
                key={`first-${index}`}
                title={category.title}
                href={category.href}
              />
            ))}
            {/* Deuxième série de cartes pour l'effet infini */}
            {categories.map((category, index) => (
              <CategoryCard
                key={`second-${index}`}
                title={category.title}
                href={category.href}
              />
            ))}
          </div>
        </div>

        {/* Bouton CTA */}
        <div className="flex justify-center">
          <CTAButton onClick={handleDiscoverAll}>
            Découvrir tous les articles
          </CTAButton>
        </div>
      </div>
    </section>
  );
};
