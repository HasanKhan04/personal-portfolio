import { Button } from "@/components/ui/button"
import { AnimatedGradientBackground } from "@/components/animated-gradient-background"
import { Github, Linkedin, Mail, ArrowRight, Terminal, Code, Server, Cpu } from 'lucide-react'
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { images } from "@/lib/images"

const highlights = [
  {
    icon: <Terminal className="w-6 h-6" />,
    title: "Full Stack Development",
    description: "Building scalable applications with modern technologies"
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "AI Engineering",
    description: "Implementing cutting-edge AI solutions"
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Cloud Architecture",
    description: "Designing robust cloud infrastructure"
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Software Engineering",
    description: "Creating efficient, maintainable systems"
  }
]

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      <AnimatedGradientBackground />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between py-20 gap-12">
          {/* Hero Left Section */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h1 className="text-7xl font-extrabold animate-fade-in">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Hasan Khan
                </span>
              </h1>
              <p className="text-3xl text-muted-foreground animate-fade-in-delay">
                Software Engineering Student
              </p>
              <p className="text-xl text-muted-foreground animate-fade-in-delay-2 max-w-2xl">
                AI Engineering Lead with expertise in full-stack development, 
                machine learning, and real-time systems. Building the future at SpeeTch AI.
              </p>
            </div>

            <div className="flex gap-4 animate-fade-in-delay-2">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/portfolio">
                  View My Work
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>

            <div className="flex gap-4 animate-fade-in-delay-3">
              <Button asChild variant="ghost" size="icon" className="rounded-full">
                <Link href="https://github.com/HasanKhan04" target="_blank">
                  <Github className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon" className="rounded-full">
                <Link href="https://linkedin.com/in/hasan-khan04" target="_blank">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon" className="rounded-full">
                <Link href="/contact">
                  <Mail className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero Right Section */}
          <div className="flex-1 relative">
            <img
              src={images.hero}
              alt="Hasan Khan"
              className="rounded-2xl shadow-2xl animate-fade-in object-cover h-[600px] w-full"
            />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-500/20 rounded-2xl animate-slow-spin" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-pink-500/20 rounded-2xl animate-slow-spin-reverse" />
          </div>
        </div>

        {/* Highlights Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 py-12">
          {highlights.map((highlight, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h3 className="font-semibold mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

