import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { images } from "@/lib/images"

const experiences = [
  {
    company: "SpeeTch AI",
    position: "AI Engineering Lead",
    date: "June 2024 – Present",
    image: images.companies.speechAi,
    description: [
      "Developed a real-time multilingual transcription platform used in 1000+ meetings by Fortune 500 companies and global conferences.",
      "Designed and built an AI chat and search feature using a RAG system with hybrid search, increasing customer satisfaction by 50%.",
      "Built a transcription system integrated with Whisper and Hugging Face Pyannote models, reducing hallucinations by 30%.",
    ],
    technologies: ["OpenAI GPT", "Whisper", "Llama", "RAG", "FastAPI", "AWS"],
  },
  {
    company: "Definity Financial Corporation",
    position: "Software Engineering Intern",
    date: "Sep 2024 – Dec 2024",
    image: images.companies.definity,
    description: [
      "Engineered automated pipelines to schedule and run 100+ functional test cases for an iOS and Android mobile app.",
      "Designed Spring Boot APIs with JPA repositories, improving data retrieval efficiency by 30%.",
    ],
    technologies: ["Spring Boot", "JPA", "iOS", "Android"],
  },
  {
    company: "Department of National Defence",
    position: "Full Stack Developer Intern",
    date: "Jan 2024 – May 2024",
    image: images.companies.dnd,
    description: [
      "Developed a Node.js and Vue.js app to streamline military network communication for 10,000+ RCAF members.",
      "Improved backend API response times by 30% by building efficient Node.js APIs with Sequelize ORM.",
    ],
    technologies: ["Node.js", "Vue.js", "Sequelize"],
  },
  {
    company: "University of Waterloo",
    position: "Full Stack Developer Intern",
    date: "Sep 2023 – Dec 2023",
    image: images.companies.waterloo,
    description: [
      "Implemented features and resolved 20+ critical bugs in React and Next.js web apps, serving 5000+ users.",
      "Increased data accuracy by 30% by optimizing MySQL REST APIs and conducting thorough testing with Postman.",
    ],
    technologies: ["React", "Next.js", "MySQL", "Postman"],
  },
  {
    company: "Adastra Corporation",
    position: "Software Engineering Intern",
    date: "May 2023 – Aug 2023",
    image: images.companies.adastra,
    description: [
      "Built a chatbot integrated with Microsoft Teams and OpenAI, bought by 10 clients within 2 months of deployment.",
      "Pioneered a POC tool with Microsoft Fabric and OpenAI to generate table-specific sample records from SQL DDL.",
    ],
    technologies: ["Microsoft Teams", "OpenAI", "Microsoft Fabric", "SQL"],
  },
]

export default function ExperiencePage() {
  return (
    <div className="container mx-auto py-12 relative">
      <SectionHeading subtitle="My professional journey and achievements">
        Work Experience
      </SectionHeading>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-purple-500 before:to-pink-500 md:before:mx-auto">
        {experiences.map((exp, index) => (
          <div key={index} className={`relative flex items-start md:justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 absolute left-0 md:relative shadow-lg">
              <span className="text-white font-bold">{index + 1}</span>
            </div>
            
            <Card className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
              index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
            }`}>
              <div className="relative h-32 overflow-hidden rounded-t-lg">
                <img
                  src={exp.image}
                  alt={exp.company}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{exp.position}</CardTitle>
                <CardDescription className="text-lg font-semibold text-primary">
                  {exp.company}
                </CardDescription>
                <CardDescription>{exp.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground">{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

