'use client'

import Image from 'next/image'

interface ArticleCardProps {
  title: string
  description: string
  imageUrl?: string
  publishedAt: string
  buttonText?: string
  onReadMore?: () => void
  className?: string
}

export const ArticleCard = ({
  title,
  description,
  imageUrl,
  publishedAt,
  buttonText = "Lire plus",
  onReadMore,
  className = ""
}: ArticleCardProps) => {
  return (
    <article className={`bg-[#F8F9FA] border border-white rounded-lg p-6 ${className}`}>
      {/* Image */}
      <div className="w-full h-48 bg-gray-200 rounded-lg border border-white overflow-hidden mb-4 relative">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-gray-400 text-sm">Image placeholder</div>
          </div>
        )}
      </div>
      
      {/* Content */}
      <h4 className="font-[var(--font-poppins)] font-semibold text-xl lg:text-[24px] leading-[32px] text-[#171A1F] mb-3">
        {title}
      </h4>
      
      <p className="font-[var(--font-inter)] font-normal text-sm lg:text-[16px] leading-[24px] text-[#171A1F] mb-4">
        {description}
      </p>
      
      {/* Footer */}
      <div className="flex justify-between items-center">
        <button 
          onClick={onReadMore}
          className="text-[#0166FF] font-[var(--font-inter)] font-medium hover:underline transition-colors duration-200"
        >
          {buttonText}
        </button>
        <span className="text-gray-500 text-sm">{publishedAt}</span>
      </div>
    </article>
  )
}
