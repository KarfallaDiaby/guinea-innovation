interface CategoryCardProps {
  title: string;
  href?: string;
  onClick?: () => void;
}

export const CategoryCard = ({ title, href, onClick }: CategoryCardProps) => {
  const content = (
    <div className="w-[284px] h-[160px] bg-[#D9D9D9] border border-white flex items-center justify-center cursor-pointer hover:bg-[#C9C9C9] transition-colors duration-200 flex-shrink-0">
      <h3 className="font-[var(--font-poppins)] font-bold text-lg text-[#171A1F] text-center px-4">
        {title}
      </h3>
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
