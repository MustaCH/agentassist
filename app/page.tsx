'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, TrendingUp } from "lucide-react"
import Image from "next/image"

import { useState } from "react";
import ContactForm from "../components/ContactForm";
import CalendlyInline from "../components/CalendlyInline";
import { useRouter } from "next/navigation";

export default function AgentAssistLanding() {
  const [contactOpen, setContactOpen] = useState(false);
  const [calendlyOpen, setCalendlyOpen] = useState(false);

  const router = useRouter();

  const handleContactOpen = () => {
    setContactOpen(true);
    // Agrega el parámetro ?contact=open a la URL sin recargar
    const url = new URL(window.location.href);
    url.searchParams.set('contact', 'open');
    router.replace(url.pathname + url.search + url.hash);
  };

  const handleContactClose = () => {
    setContactOpen(false);
    // Quita el parámetro ?contact de la URL
    const url = new URL(window.location.href);
    url.searchParams.delete('contact');
    router.replace(url.pathname + url.search + url.hash);
  };


  const handleCalendlyOpen = () => {
    setCalendlyOpen(true);
    router.push('/#cta');
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {contactOpen && <ContactForm onClose={handleContactClose} />}
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
           <Image src="logo.png" alt="Logo" width={14} height={14} />
          </div>
          <span className="text-xl font-semibold">AgentAssist</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-white hover:text-slate-300 transition-colors">
            Features
          </a>
          <a href="#testimonials" className="text-white hover:text-slate-300 transition-colors">
            Testimonials
          </a>
          <button onClick={handleContactOpen} className="text-white hover:text-slate-300 transition-colors">
            Contact Us
          </button>
        <Button onClick={handleCalendlyOpen} className="bg-slate-700 hover:bg-blue-500 text-white">Book a demo</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-neutral-900 h-[60vh] md:h-[80vh] rounded-2xl flex flex-col justify-center overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="hero-image.png"
                alt="City view through windows"
                fill
                className="object-cover object-top opacity-60"
              />
            </div>
            <div className="relative z-10 flex flex-col gap-1 text-2xl md:text-5xl font-bold ms-6 p-4">
              <h1>
                Never search for properties manually,
              </h1>
              <p className="bg-blue-500 w-fit text-white px-1 rounded">There is an AI for that.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Automate Your Workflow */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Why choose AgentAssist?</h2>
            <p className="text-slate-300 text-lg max-w-2xl">
              Our AI-powered platform automates your workflow, handles repetitive tasks, freeing you to focus on clients and closing deals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <Calendar className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">AI Assistant for Search and Consulting</h3>
                <p className="text-slate-300">Your assistant processes the information and performs precise searches in the property database.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Save Time and Improve Productivity</h3>
                <p className="text-slate-300">Eliminate repetitive tasks: lead follow-up, property inquiries, price range validation, and preparation of personalized responses.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <TrendingUp className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Data-Driven Decisions</h3>
                <p className="text-slate-300">
                  Gain insights into your clients' preferences and the performance of your searches to make better decisions and adjust your strategy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">How it works:</h2>
            <p className="text-slate-300 text-lg max-w-3xl">
              Explore the powerful features that make AgentAssist the ultimate AI automation tool for real estate professionals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="aspect-video bg-slate-800 rounded-lg overflow-hidden">
                <Image
                  src="/features/send_a_message.png"
                  alt="Automated Lead Nurturing"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Send a Message</h3>
                <p className="text-slate-300">
                  Share your client's search criteria—number of bedrooms, budget, desired neighbourhoods, outdoor features like a balcony or backyard, and any other preferences.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="aspect-video bg-teal-600 rounded-lg flex items-center justify-center">
                <div className="aspect-video bg-slate-800 rounded-lg overflow-hidden">
                <Image
                  src="/features/list_of_properties.png"
                  alt="Automated Lead Nurturing"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Receive a List of Properties</h3>
                <p className="text-slate-300">Get a personalized document with property options that match your criteria. Each listing includes images, key details, and a short description—ready to review or send.</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="aspect-video bg-slate-800 rounded-lg overflow-hidden">
                <Image
                  src="/features/send_it_to_your_client.png"
                  alt="Performance Analytics"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Send it to your client</h3>
                <p className="text-slate-300">
                  Forward the document to your client for review. Track visit feedback and automatically update client profiles with notes and preferences for future follow-ups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Testimonials</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-white rounded-full overflow-hidden">
                    <Image
                      src="/testimonials/omar_gutierrez.webp"
                      alt="Omar Gutierrez"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Omar Gutierrez</h4>
                    <p className="text-sm">RE/MAX DOCTA</p>
                  </div>
                </div>
                <p className="text-sm italic">
                  "AgentAssist has been a real game changer for me. I'm able to focus more on my clients, and deals seem to move along so much quicker. Honestly, I don't know how I managed without it before."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-white rounded-full overflow-hidden">
                  <Image
                      src="/testimonials/romina_frola.webp"
                      alt="Marcelo Del Llano"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Romina Frola</h4>
                    <p className="text-sm">RE/MAX TIME</p>
                  </div>
                </div>
                <p className="text-sm italic">"What I love most is how much time it saves me. The automation takes care of so many little tasks that used to eat up my day. It's freed me up to actually connect with people and grow my business."</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-white rounded-full overflow-hidden">
                    <Image
                      src="/testimonials/marcelo_del_llano.webp"
                      alt="Marcelo Del Llano"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Marcelo Del Llano</h4>
                    <p className="text-sm">RE/MAX DOCTA</p>
                  </div>
                </div>
                <p className="text-sm italic">
                  "The analytics give me a clear picture of what's working and what's not. It's helped me make smarter decisions and improve in ways I hadn't even considered before."    
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Start your free trial today and experience the power of AI automation.
          </p>
          <div className="flex flex-col items-center space-y-1">
            {!calendlyOpen && 
              <Button size="lg" className="w-fit bg-slate-700 hover:bg-blue-500 text-white px-8 py-3" onClick={handleCalendlyOpen}>
                Book a demo
              </Button>
            }
            {calendlyOpen && (
              <div className="w-full flex justify-center mt-4">
                <CalendlyInline />
              </div>
            )} 
            <button onClick={handleContactOpen} className="w-fit text-sm text-white hover:text-slate-300 px-8 py-3 underline underline-offset-2">
              or if you have any questions, contact us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">© 2025 AgentAssist. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
