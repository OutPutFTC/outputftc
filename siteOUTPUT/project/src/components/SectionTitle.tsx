interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primaryRed to-primaryOrange bg-clip-text text-transparent text-center mb-12 ${className}`}>
      {children}
    </h2>
  );
}
