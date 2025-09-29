interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export const CTAButton = ({ children, onClick, href, className = "" }: CTAButtonProps) => {
  const buttonClasses = `w-[283px] h-[48px] bg-[#3B82F6] border border-[#3B82F6] flex items-center justify-center font-[var(--font-inter)] font-medium text-white hover:bg-[#2563EB] hover:border-[#2563EB] transition-colors duration-200 ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};
