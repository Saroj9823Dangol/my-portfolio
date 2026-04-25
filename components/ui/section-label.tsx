interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`label-mono ${className}`}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}
