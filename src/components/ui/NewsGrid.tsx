'use client'

import { ArticleCard } from './ArticleCard'

interface NewsItem {
  id: string
  title: string
  description: string
  imageUrl?: string
  publishedAt: string
  buttonText?: string
  onReadMore?: () => void
}

interface NewsGridProps {
  articles: NewsItem[]
  className?: string
}

export const NewsGrid = ({ articles, className = "" }: NewsGridProps) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          title={article.title}
          description={article.description}
          imageUrl={article.imageUrl}
          publishedAt={article.publishedAt}
          buttonText={article.buttonText}
          onReadMore={article.onReadMore}
        />
      ))}
    </div>
  )
}
