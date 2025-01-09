"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Linkedin, Github } from 'lucide-react'
import { useToast } from "@/components/ui/use-toast"

const contactMethods = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    value: "h2khan@uwaterloo.ca",
    href: "mailto:h2khan@uwaterloo.ca",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    value: "(416) 838-9352",
    href: "tel:4168389352",
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    title: "LinkedIn",
    value: "hasan-khan04",
    href: "https://linkedin.com/in/hasan-khan04",
  },
  {
    icon: <Github className="w-6 h-6" />,
    title: "GitHub",
    value: "HasanKhan04",
    href: "https://github.com/HasanKhan04",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Message Sent",
      description: "Thank you for your message. I'll get back to you soon!",
    })
    setFormData({ name: "", email: "", message: "" })
  }

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

      <SectionHeading subtitle="Get in touch with me">
        Contact
      </SectionHeading>

      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        <Card className="p-6">
          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-secondary"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white">
                  {method.icon}
                </div>
                <div>
                  <h3 className="font-medium">{method.title}</h3>
                  <p className="text-sm text-muted-foreground">{method.value}</p>
                </div>
              </a>
            ))}
          </div>
        </Card>

        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full min-h-[150px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

