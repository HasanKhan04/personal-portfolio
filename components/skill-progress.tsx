interface SkillProgressProps {
    skill: string
    level: number
  }
  
  export function SkillProgress({ skill, level }: SkillProgressProps) {
    return (
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-sm font-medium">{skill}</span>
          <span className="text-sm text-muted-foreground">{level}%</span>
        </div>
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500 ease-out"
            style={{ width: `${level}%` }}
          />
        </div>
      </div>
    )
  }
  
  