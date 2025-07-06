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
        <Button onClick={handleCalendlyOpen} className="bg-blue-500 hover:bg-blue-600 text-white">Book a demo</Button>
        </div>
        <Button onClick={handleCalendlyOpen} className="md:hidden bg-blue-500 hover:bg-blue-600 text-white">Book a demo</Button>
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
        {/** More features*/}
        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">And more...</h2>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <span className="inline-block bg-blue-700  text-white text-sm px-4 py-2 rounded-full font-semibold shadow">🧠 Remember client prospects</span>
              <span className="inline-block bg-blue-700  text-white text-sm px-4 py-2 rounded-full font-semibold shadow">✉️ Redact personalized messages and emails to your clients</span>
              <span className="inline-block bg-blue-700  text-white text-sm px-4 py-2 rounded-full font-semibold shadow">👤 Client profile based search</span>
              <span className="inline-block bg-blue-700  text-white text-sm px-4 py-2 rounded-full font-semibold shadow">🖼️ Extract data from images</span>
              <span className="inline-block bg-blue-700  text-white text-sm px-4 py-2 rounded-full font-semibold shadow">📄 Analize legal documents</span>
              <span className="inline-block bg-blue-700  text-white text-sm px-4 py-2 rounded-full font-semibold shadow">🎤 Send both audio or text messages</span>
              <span className="inline-block bg-blue-700  text-white text-sm px-4 py-2 rounded-full font-semibold shadow">📑 Create PDF presentations</span>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Use it on WhatsApp or Telegram</h2>
            <div className="flex justify-center gap-6 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <linearGradient id="BiF7D16UlC0RZ_VqXJHnXa_oWiuH0jFiU0R_gr1" x1="9.858" x2="38.142" y1="9.858" y2="38.142" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#33bef0"></stop><stop offset="1" stop-color="#0a85d9"></stop></linearGradient><path fill="url(#BiF7D16UlC0RZ_VqXJHnXa_oWiuH0jFiU0R_gr1)" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path d="M10.119,23.466c8.155-3.695,17.733-7.704,19.208-8.284c3.252-1.279,4.67,0.028,4.448,2.113	c-0.273,2.555-1.567,9.99-2.363,15.317c-0.466,3.117-2.154,4.072-4.059,2.863c-1.445-0.917-6.413-4.17-7.72-5.282	c-0.891-0.758-1.512-1.608-0.88-2.474c0.185-0.253,0.658-0.763,0.921-1.017c1.319-1.278,1.141-1.553-0.454-0.412	c-0.19,0.136-1.292,0.935-1.745,1.237c-1.11,0.74-2.131,0.78-3.862,0.192c-1.416-0.481-2.776-0.852-3.634-1.223	C8.794,25.983,8.34,24.272,10.119,23.466z" opacity=".05"></path><path d="M10.836,23.591c7.572-3.385,16.884-7.264,18.246-7.813c3.264-1.318,4.465-0.536,4.114,2.011	c-0.326,2.358-1.483,9.654-2.294,14.545c-0.478,2.879-1.874,3.513-3.692,2.337c-1.139-0.734-5.723-3.754-6.835-4.633	c-0.86-0.679-1.751-1.463-0.71-2.598c0.348-0.379,2.27-2.234,3.707-3.614c0.833-0.801,0.536-1.196-0.469-0.508	c-1.843,1.263-4.858,3.262-5.396,3.625c-1.025,0.69-1.988,0.856-3.664,0.329c-1.321-0.416-2.597-0.819-3.262-1.078	C9.095,25.618,9.075,24.378,10.836,23.591z" opacity=".07"></path><path fill="#fff" d="M11.553,23.717c6.99-3.075,16.035-6.824,17.284-7.343c3.275-1.358,4.28-1.098,3.779,1.91	c-0.36,2.162-1.398,9.319-2.226,13.774c-0.491,2.642-1.593,2.955-3.325,1.812c-0.833-0.55-5.038-3.331-5.951-3.984	c-0.833-0.595-1.982-1.311-0.541-2.721c0.513-0.502,3.874-3.712,6.493-6.21c0.343-0.328-0.088-0.867-0.484-0.604	c-3.53,2.341-8.424,5.59-9.047,6.013c-0.941,0.639-1.845,0.932-3.467,0.466c-1.226-0.352-2.423-0.772-2.889-0.932	C9.384,25.282,9.81,24.484,11.553,23.717z"></path>
              </svg>            
            </div>
            <p className="text-slate-300 text-lg">Our agent adjusts to your workflow, no adaptation process.</p>
          </div>

        </section>
      </section>
      {/* Testimonials */}
      <section id="testimonials" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Testimonials</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-800 text-white border-2 border-blue-500">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-white rounded-full border-2 border-red-700 overflow-hidden">
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

            <Card className="bg-slate-800 text-white border-2 border-blue-500">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-white rounded-full border-2 border-red-700 overflow-hidden">
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

            <Card className="bg-slate-800 text-white border-2 border-blue-500">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-white rounded-full border-2 border-red-700 overflow-hidden">
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
              <Button size="lg" className="w-fit bg-blue-500 hover:bg-blue-600 text-white px-8 py-3" onClick={handleCalendlyOpen}>
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
