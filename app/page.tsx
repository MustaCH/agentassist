'use client'

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, TrendingUp } from "lucide-react"
import Image from "next/image"

import { useState } from "react";
import ContactForm from "../components/ContactForm";
import CalendlyInline from "../components/CalendlyInline";
import { useRouter } from "next/navigation";

export default function AgentAssistLanding() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
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
    <div className="min-h-screen bg-blue-100 text-white overflow-x-hidden">
      {contactOpen && <ContactForm onClose={handleContactClose} />}
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-white">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
           <Image src="logo.png" alt="Logo" width={14} height={14} />
          </div>
          <span className="text-xl font-semibold text-blue-500">AgentAssist</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-black/70 hover:text-black transition-colors">
            Features
          </a>
          <a href="#testimonials" className="text-black/70 hover:text-black transition-colors">
            Testimonials
          </a>
          <button onClick={handleContactOpen} className="text-black/70 hover:text-black transition-colors">
            Contact Us
          </button>
        <Button onClick={handleCalendlyOpen} className="bg-blue-500 hover:bg-blue-600 text-white">Book a demo</Button>
        </div>
        <Button onClick={handleCalendlyOpen} className="md:hidden bg-blue-500 hover:bg-blue-600 text-white">Book a demo</Button>
      </nav>

      {/* Hero Section */}
      <section className="relative md:px-6 md:py-8 overflow-hidden">
  {/* Radial gradient background */}
  <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-blue-400 via-blue-200 to-blue-100 opacity-65" />
        <div className="max-w-6xl mx-auto">
          <div className="relative h-[90vh] md:rounded-2xl flex flex-col justify-center overflow-hidden">
            {/* <div className="absolute inset-0">
              <Image
                src="https://res.cloudinary.com/dfuru6l6d/image/upload/v1751893901/hero-image_zgstxb.png"
                alt="City view through windows"
                fill
                className="object-cover object-top opacity-60"
              />
            </div> */}
            <div className="relative z-10 flex flex-col md:items-center gap-4 text-3xl md:text-5xl font-bold p-4">
              <h1 data-aos="fade-up" data-aos-duration="1000" className="bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">
                Never search for properties manually,
              </h1>
              <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500" className="bg-gradient-to-l from-blue-800 to-blue-500 w-fit text-white px-1 rounded">There is an AI for that.</p>
              <p data-aos="fade-up" data-aos-duration="3000" data-aos-delay="1000" className="text-black/70 md:text-center font-thin text-sm md:text-lg max-w-2xl">Every real state agent should be focusing in what they do best: <span className="font-bold text-blue-500">closing deals.</span> Why waste time searching for properties manually? There's no need to. <br /> Agent Assist is here to do that for you.</p>           
              <Button data-aos="zoom-in" onClick={handleCalendlyOpen} className="bg-blue-500 hover:bg-blue-600 text-white mt-6">Book a demo</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Automate Your Workflow */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl text-black/70 font-bold mb-4">Why choose AgentAssist?</h2>
            <p className="text-black/70 text-lg max-w-2xl">
              Our AI-powered platform automates your workflow, handles repetitive tasks, freeing you to focus on clients and closing deals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" className="bg-gradient-to-br from-white via-white to-blue-100 drop-shadow-lg">
              <CardContent className="p-6">
                <Calendar className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-black/70">AI Assistant for Search and Consulting</h3>
                <p className="text-black/70">Your assistant processes the information and performs precise searches in the property database.</p>
              </CardContent>
            </Card>

            <Card data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="bg-gradient-to-br from-white via-white to-blue-100 drop-shadow-lg">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-black/70">Save Time and Improve Productivity</h3>
                <p className="text-black/70">Eliminate repetitive tasks: lead follow-up, property inquiries, price range validation, and preparation of personalized responses.</p>
              </CardContent>
            </Card>

            <Card data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" className="bg-gradient-to-br from-white via-white to-blue-100 drop-shadow-lg">
              <CardContent className="p-6">
                <TrendingUp className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-black/70">Data-Driven Decisions</h3>
                <p className="text-black/70">
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
            <h2 className="text-3xl text-black/70 font-bold mb-4">How it works:</h2>
            <p className="text-black/70 text-lg max-w-3xl">
              Explore the powerful features that make AgentAssist the ultimate AI automation tool for real estate professionals.
            </p>
          </div>
          <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 bg-white drop-shadow-lg rounded-lg">
              <div className="aspect-video bg-slate-800 rounded-tl-lg rounded-tr-lg md:rounded-tl-lg md:rounded-bl-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dfuru6l6d/image/upload/v1751893910/send_a_message_smdp4k.png"
                  alt="Automated Lead Nurturing"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-6 p-6">
                <h3 className="text-5xl text-black/70 font-semibold mb-2">Send a Message</h3>
                <p className="text-black/70">
                  Share your client's search criteria—number of bedrooms, budget, desired neighbourhoods, outdoor features like a balcony or backyard, and any other preferences.
                </p>
              </div>
            </div>

            <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400" className="flex flex-col md:flex-row-reverse items-center gap-4 bg-white drop-shadow-lg rounded-lg">
              <div className="aspect-video bg-blue-600 rounded-tr-lg rounded-tl-lg md:rounded-tr-lg md:rounded-br-lg overflow-hidden">
                <div className="aspect-video bg-slate-800 rounded-tr-lg rounded-br-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dfuru6l6d/image/upload/v1751893908/list_of_properties_tq6bjm.png"
                  alt="Automated Lead Nurturing"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
                </div>
              </div>
              <div className="flex flex-col gap-6 p-6">
                <h3 className="text-5xl text-black/70 font-semibold mb-2">Receive a List of Properties</h3>
                <p className="text-black/70">Get a personalized document with property options that match your criteria. Each listing includes images, key details, and a short description—ready to review or send.</p>
              </div>
            </div>

            <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600" className="flex flex-col md:flex-row items-center gap-4 bg-white drop-shadow-lg rounded-lg">
              <div className="aspect-video bg-slate-800 rounded-tl-lg rounded-tr-lg md:rounded-tl-lg md:rounded-bl-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dfuru6l6d/image/upload/v1751893915/send_it_to_your_client_bm9xgm.png"
                  alt="Performance Analytics"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-6 p-6">
                <h3 className="text-5xl text-black/70 font-semibold mb-2">Send it to your client</h3>
                <p className="text-black/70">
                  Forward the document to your client for review. Track visit feedback and automatically update client profiles with notes and preferences for future follow-ups.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/** More features*/}
        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl text-black/70 font-bold mb-6">And more...</h2>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <span data-aos="zoom-in-left" data-aos-duration="1000" data-aos-delay="200" className="inline-block bg-blue-700  text-white text-sm px-4 py-2 rounded-full font-semibold shadow">🧠 Remember client prospects</span>
              <span data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="400" className="inline-block bg-blue-700  text-white text-sm px-4 py-2 rounded-full font-semibold shadow">✉️ Redact personalized messages</span>
              <span data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="600" className="inline-block bg-blue-700  text-white text-sm px-4 py-2 rounded-full font-semibold shadow">👤 Client profile based search</span>
              <span data-aos="zoom-in-down" data-aos-duration="1000" data-aos-delay="800" className="inline-block bg-blue-700  text-white text-sm px-4 py-2 rounded-full font-semibold shadow">🖼️ Extract data from images</span>
              <span data-aos="zoom-in-left" data-aos-duration="1000" data-aos-delay="1000" className="inline-block bg-blue-700  text-white text-sm px-4 py-2 rounded-full font-semibold shadow">📄 Analize legal documents</span>
              <span data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="1200" className="inline-block bg-blue-700  text-white text-sm px-4 py-2 rounded-full font-semibold shadow">🎤 Send both audio or text messages</span>
              <span data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="1400" className="inline-block bg-blue-700  text-white text-sm px-4 py-2 rounded-full font-semibold shadow">📑 Create PDF presentations</span>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl text-black/70 md:text-4xl font-bold mb-4">Your partner on WhatsApp</h2>
            <div className="flex justify-center gap-6 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fillRule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clipRule="evenodd"></path>
              </svg>           
            </div>
            <p className="text-black/70 text-lg">Our agent adjusts to your workflow, no adaptation process.</p>
          </div>

        </section>
      </section>
      {/* Testimonials */}
      <section id="testimonials" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-black/70 font-bold mb-12">Testimonials</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" className="bg-white text-black/70 border-2 drop-shadow-lg">
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

            <Card data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="bg-white text-black/70 border-2 drop-shadow-lg">
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

            <Card data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" className="bg-white text-black/70 border-2 drop-shadow-lg">
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
          <h2 className="text-4xl text-black/70 font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-black/70 mb-8">
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
            <button onClick={handleContactOpen} className="w-fit text-sm text-black/70 hover:text-black px-8 py-3 underline underline-offset-2">
              or if you have any questions, contact us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-evenly items-center space-y-4 md:space-y-0 text-black/70">
            <a href="mailto:team@agentassist.info" className="text-slate-400 text-sm underline underline-offset-2">team@agentassist.info</a>
            <p className="text-slate-400 text-sm">© 2025 AgentAssist. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
