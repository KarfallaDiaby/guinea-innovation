interface SectionTitleProps {
  title: string
  className?: string
}

export const SectionTitle = ({ title, className = "" }: SectionTitleProps) => {
  return (
    <h2 className={`text-center font-[var(--font-inter)] font-bold text-4xl lg:text-[48px] leading-[48px] mb-16 ${className}`}>
      {title}
    </h2>
  )
}
