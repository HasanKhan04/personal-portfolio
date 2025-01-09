import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { SkillProgress } from "@/components/skill-progress"
import { Badge } from "@/components/ui/badge"
import { Cpu, Database, Cloud, Code } from 'lucide-react'
import { images } from "@/lib/images"

const skillCategories = [
  {
    icon: <Code className="w-6 h-6 text-white" />,
    title: "Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Java", level: 85 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    icon: <Cpu className="w-6 h-6 text-white" />,
    title: "Frameworks",
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "Node.js", level: 90 },
      { name: "Spring Boot", level: 85 },
      { name: "Vue.js", level: 80 },
    ],
  },
  {
    icon: <Cloud className="w-6 h-6 text-white" />,
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: 85 },
      { name: "Azure", level: 80 },
      { name: "Docker", level: 85 },
      { name: "CI/CD", level: 80 },
    ],
  },
  {
    icon: <Database className="w-6 h-6 text-white" />,
    title: "Databases",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 80 },
      { name: "MySQL", level: 85 },
    ],
  },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-3xl" 
          style={{ top: '-50%', left: '-20%' }} 
        />
        <div 
          className="absolute w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-blue-500/30 to-green-500/30 blur-3xl" 
          style={{ bottom: '-50%', right: '-20%' }} 
        />
      </div>

      <SectionHeading subtitle="Learn more about my skills and expertise">
        About Me
      </SectionHeading>

      <div className="grid gap-8 md:grid-cols-2 mb-12">
        <div className="relative">
          <img
            src={images.headshot}
            alt="Hasan Khan"
            className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
          />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl -z-10" />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Background</h2>
          <p className="text-lg text-muted-foreground">
            I'm a Software Engineering student at the University of Waterloo with a passion for building innovative solutions. 
            Currently serving as an AI Engineering Lead, I specialize in developing cutting-edge AI applications and robust 
            full-stack systems.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">Waterloo, Ontario</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Education</h3>
              <p className="text-muted-foreground">BASc. Management Engineering</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Experience</h3>
              <p className="text-muted-foreground">5+ Internships</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Interests</h3>
              <p className="text-muted-foreground">AI, Full Stack, Cloud</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category, index) => (
          <Card key={index} className="transition-all duration-300 hover:shadow-lg">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                {category.icon}
              </div>
              <CardTitle>{category.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {category.skills.map((skill, i) => (
                <SkillProgress key={i} skill={skill.name} level={skill.level} />
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-6 transition-all duration-300 hover:shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <Database className="w-6 h-6 text-white" />
            </div>
            <CardTitle>AI Expertise</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "OpenAI GPT Integration",
              "Speech Recognition (Whisper)",
              "LLM Development (Llama)",
              "Audio Processing (Pyannote)",
              "RAG Systems",
              "Hybrid Search Systems",
            ].map((skill, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

