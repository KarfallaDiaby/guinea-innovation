'use client'

import { SectionTitle } from '@/components/ui/SectionTitle'
import { FeaturedArticle } from '@/components/ui/FeaturedArticle'
import { NewsGrid } from '@/components/ui/NewsGrid'

export const FeaturedNewsSection = () => {
  // Données des articles
  const featuredArticle = {
    title: "L'impact des fintechs sur l'économie guinéenne",
    description: "Les technologies financières (fintechs) transforment le paysage économique guinéen en offrant des solutions innovantes pour l'inclusion financière, les paiements mobiles et les services bancaires. Découvrez comment ces innovations redéfinissent l'accès au capital et stimulent la croissance des petites et moyennes entreprises.",
    imageUrl: "/img/managing-smart-speakers-concept.jpg",
    onReadMore: () => console.log('Lire article principal')
  }

  const newsArticles = [
    {
      id: '1',
      title: "Nouvelle initiative pour l'éducation numérique",
      description: "Un programme pilote vise à intégrer les outils numériques dans les écoles rurales de Guinée, améliorant l'accès à l'information et les compétences technologiques des élèves.",
      imageUrl: "/img/side-view-kid-laying-bed.jpg",
      publishedAt: "Publié il y a 1h",
      onReadMore: () => console.log('Lire article 1')
    },
    {
      id: '2',
      title: "Le rôle de l'IA dans l'agriculture locale",
      description: "L'intelligence artificielle est explorée pour optimiser les rendements agricoles en Guinée, grâce à l'analyse des données météorologiques et des sols.",
      imageUrl: "/img/man-wearing-smart-glasses-touching-holographic-screen.jpg",
      publishedAt: "Publié il y a 2h",
      onReadMore: () => console.log('Lire article 2')
    },
    {
      id: '3',
      title: "Les défis de l'accès à l'énergie propre en Guinée",
      description: "Malgré un potentiel solaire et hydroélectrique important, la Guinée fait face à des défis majeurs pour assurer un accès équitable à l'énergie propre.",
      imageUrl: "/img/african-american-disabled-artist-with-vr-glasses-technology-drawing-concept-studio-black-invalid-woman-wheelchair-using-headset-goggles-modern-masterpiece-creation.jpg",
      publishedAt: "Publié il y a 3h",
      onReadMore: () => console.log('Lire article 3')
    }
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="À la Une : Innovations et Actualités" />
        
        <FeaturedArticle
          title={featuredArticle.title}
          description={featuredArticle.description}
          imageUrl={featuredArticle.imageUrl}
          onReadMore={featuredArticle.onReadMore}
          className="mb-12"
        />

        <NewsGrid articles={newsArticles} />
      </div>
    </section>
  )
}
