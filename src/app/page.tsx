
'use client'

import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { FeaturedNewsSection } from "@/components/sections/home/FeaturedNewsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedNewsSection />
    </div>
  );
}
