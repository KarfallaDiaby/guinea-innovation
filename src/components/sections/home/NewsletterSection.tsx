'use client'

import { useState } from 'react';
import { Mail } from 'lucide-react';

export const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Email inscrit:', email);
      setIsSubscribed(true);
      setEmail('');
      // Ici vous pouvez ajouter la logique d'inscription à la newsletter
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="w-full bg-[#565E6D4D] py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Titre principal */}
          <h2 className="w-full max-w-[800px] h-auto font-[var(--font-inter)] font-normal text-4xl sm:text-5xl lg:text-[48px] leading-[48px] text-[#171A1F] mb-8">
            Restez informé de nos dernières innovations !
          </h2>

          {/* Description */}
          <p className="w-full max-w-[672px] h-auto font-[var(--font-inter)] font-normal text-lg sm:text-xl lg:text-[20px] leading-[28px] text-[#171A1F] mb-12">
            Abonnez-vous à notre newsletter pour recevoir les actualités, analyses et événements exclusifs de Guinées Innovations.
          </p>

          {/* Formulaire d'inscription */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4">
            {/* Input email avec icône */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#BCC1CA]">
                <Mail size={20} />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email"
                className="w-[407px] h-[49px] pl-12 pr-4 bg-white border border-[#BCC1CA] focus:outline-none focus:ring-2 focus:ring-[#565E6D] focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            {/* Bouton d'inscription */}
            <button
              type="submit"
              className="w-[153px] h-[48px] bg-[#565E6D] border border-black text-white font-[var(--font-inter)] font-medium hover:bg-[#4A5360] transition-colors duration-200 flex items-center justify-center"
            >
              {isSubscribed ? 'Inscrit !' : 'S\'abonner'}
            </button>
          </form>

          {/* Message de confirmation */}
          {isSubscribed && (
            <div className="mt-4 p-3 bg-green-100 border border-green-300 text-green-700 rounded">
              Merci pour votre inscription ! Vous recevrez bientôt nos actualités.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
