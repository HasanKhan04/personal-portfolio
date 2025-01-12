import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { Github, ExternalLink } from 'lucide-react'
import Link from "next/link"
import { images } from "@/lib/images"

const projects = [
  {
    title: "Premier Picks",
    description: "A comprehensive statistics platform for Premier League, providing in-depth analysis and visualization of player and team performance metrics.",
    image: images.projects.premierPicks,
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "Premier League API"],
    github: "https://github.com/HasanKhan04/premier-picks",
    features: [
      "Real-time statistics updates",
      "Interactive data visualizations",
      "Player performance comparisons",
      "Team analytics dashboard"
    ]
  },
  {
    title: "Flight Scout",
    description: "An automated flight notification system that tracks and alerts users about cheap flights to their desired destinations.",
    image: images.projects.flightScout,
    technologies: ["Python", "Flask", "SQLAlchemy", "Twilio", "Flight APIs"],
    github: "https://github.com/HasanKhan04/flight-scout",
    features: [
      "Real-time price tracking",
      "Customizable price alerts",
      "Multi-airport search",
      "Price history analytics"
    ]
  },
  {
    title: "InsiderUnlocked",
    description: "A user friendly web app that displays US Senate stock trading data in a comprehensive manner.",
    image: images.projects.matchPredictor,
    technologies: ["React", "Django", "SQLite", "Redis", "Pandas"],
    github: "https://github.com/InsiderUnlocked/Insider-Unlocked",
    features: [
      "Frontend and Backend",
      "ETL Pipelines",
      "Data Cleaning & Visualization",
      "Redis Queues"
    ]
  },
  {
    title: "Spring Secure",
    description: "A comprehensive Spring Boot security implementation featuring JWT authentication, role-based access control, and secure API endpoints.",
    image: images.projects.springSecurity,
    technologies: ["Spring Boot", "JWT", "Spring Security", "PostgreSQL", "Docker"],
    github: "https://github.com/HasanKhan04",
    features: [
      "JWT authentication",
      "Role-based access control",
      "Secure API endpoints",
      "OAuth2 integration"
    ]
  }
]

export default function PortfolioPage() {
  return (
    <div className="container mx-auto py-12 relative">
      <SectionHeading subtitle="Check out some of my recent projects">
        Portfolio
      </SectionHeading>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={index} className="group overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="relative overflow-hidden aspect-video">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 flex justify-end">
                  <Button asChild size="sm" variant="secondary" className="rounded-full">
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">{project.title}</CardTitle>
              <CardDescription className="text-base">{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-sm bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="grid grid-cols-2 gap-2 mt-4">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

