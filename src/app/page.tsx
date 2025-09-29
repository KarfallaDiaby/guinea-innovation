
'use client'

import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { FeaturedNewsSection } from "@/components/sections/home/FeaturedNewsSection";
import { ExploreSection } from "@/components/sections/home/ExploreSection";
import { NewsletterSection } from "@/components/sections/home/NewsletterSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedNewsSection />
      <ExploreSection />
      <NewsletterSection />
    </div>
  );
}
