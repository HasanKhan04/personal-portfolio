interface SectionHeadingProps {
    children: React.ReactNode
    subtitle?: string
  }
  
  export function SectionHeading({ children, subtitle }: SectionHeadingProps) {
    return (
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          {children}
        </h2>
        {subtitle && (
          <p className="text-muted-foreground text-lg">{subtitle}</p>
        )}
      </div>
    )
  }
  
  