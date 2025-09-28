'use client'

import Image from 'next/image'

interface FeaturedArticleProps {
  title: string
  description: string
  imageUrl?: string
  buttonText?: string
  onReadMore?: () => void
  className?: string
}

export const FeaturedArticle = ({
  title,
  description,
  imageUrl,
  buttonText = "Lire l'article complet",
  onReadMore,
  className = ""
}: FeaturedArticleProps) => {
  return (
    <article className={`bg-[#F8F9FA] border border-white rounded-lg p-6 ${className}`}>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Image */}
        <div className="w-full lg:w-[300px] h-[200px] bg-gray-200 rounded-[10px] border border-white flex items-center justify-center">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              width={300}
              height={200}
              className="w-full h-full object-cover rounded-[10px]"
            />
          ) : (
            <div className="text-gray-400 text-sm">Image placeholder</div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="font-[var(--font-poppins)] font-bold text-2xl lg:text-[30px] leading-[36px] text-[#171A1F] mb-4">
            {title}
          </h3>
          
          <p className="font-[var(--font-inter)] font-normal text-base lg:text-[18px] leading-[28px] text-[#171A1F] mb-6">
            {description}
          </p>

          <button 
            onClick={onReadMore}
            className="bg-[#0166FF] text-white px-6 py-3 rounded-lg font-[var(--font-inter)] font-medium hover:bg-[#0052CC] transition-colors duration-200"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </article>
  )
}
