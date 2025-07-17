"use client";

import { useState } from "react";
import { Plus, Minus, ArrowDownRight } from "lucide-react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AnimatedText from "../../components/ui/AnimatedText";
import AnimatedCard from "../../components/ui/AnimatedCard";
import AnimatedButton from "../../components/ui/AnimatedButton";

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const faqItems = [
    {
      question: "Vilka tjänster erbjuder ni?",
      answer: "Vi erbjuder klippning, färgning, styling, skäggtrimning, barnklippning och specialbehandlingar. Vi har också månatliga prenumerationspaket för regelbunden hårvård."
    },
    {
      question: "Hur fungerar er prisstruktur?",
      answer: "Våra priser varierar beroende på tjänst och stylist. Vi erbjuder både enskilda behandlingar och månatliga medlemskap. Kontakta oss för en personlig konsultation och prisuppgift."
    },
    {
      question: "Hur lång tid tar en vanlig behandling?",
      answer: "En klippning tar cirka 20-30 minuter, medan klippning + skägg tar 30-45 minuter. Färgning kan ta 1-3 timmar beroende på önskad stil. Vi ger alltid en tidsuppskattning vid bokning."
    },
    {
      question: "Behöver jag boka tid i förväg?",
      answer: "Vi rekommenderar starkt att boka tid i förväg för att garantera din önskade tid. Drop-in behandlingar kan vara möjliga beroende på vår dagliga kapacitet."
    },
    {
      question: "Arbetar ni med alla hårtyper?",
      answer: "Ja, våra erfarna stylister har expertis inom alla hårtyper och texturer. Vi anpassar våra tekniker och produkter efter ditt specifika hår för bästa resultat."
    },
    {
      question: "Erbjuder ni konsultationer?",
      answer: "Absolut! Vi erbjuder kostnadsfria konsultationer där vi analyserar ditt hår, diskuterar dina önskemål och rekommenderar den bästa behandlingen för dig."
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main>
      <Header />

      {/* Contact Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            {/* Header */}
            <div className="mb-20">
              <div className="flex items-center justify-between mb-8">
                <AnimatedText
                  as="h1"
                  className="text-8xl md:text-9xl font-bold tracking-tighter leading-none"
                  delay={0.1}
                >
                  Kontakt
                </AnimatedText>

                <AnimatedCard delay={0.2}>
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                    <ArrowDownRight className="w-5 h-5 text-white" />
                  </div>
                </AnimatedCard>
              </div>

              <div className="w-full h-px bg-gray-200 mb-12"></div>

              <AnimatedText
                as="p"
                className="text-xl md:text-2xl leading-relaxed text-gray-700 max-w-4xl"
                delay={0.3}
              >
                Redo för en ny look? Vi finns här för att hjälpa dig förverkliga
                din drömfrisyr. Oavsett om du söker en klassisk klippning, djärv
                färgförändring eller professionell styling inför ett speciellt
                tillfälle - vårt team av expertstylister är redo att skapa något
                unikt tillsammans med dig. Kontakta oss idag för att boka din
                konsultation.
              </AnimatedText>
            </div>

            {/* Contact Form and Info */}
            <div className="grid lg:grid-cols-2 gap-16">

              {/* Left side - Contact Info */}
              <div>
                <AnimatedCard delay={0.4}>
                  <div className="mb-12">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                      <h3 className="text-sm font-medium uppercase tracking-wider text-gray-500">
                        KOM I KONTAKT
                      </h3>
                    </div>
                  </div>
                </AnimatedCard>

                <AnimatedCard delay={0.5}>
                  <div className="space-y-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Besöksadress</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Drottninggatan 24<br />
                        111 51 Stockholm<br />
                        Sverige
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Kontaktuppgifter</h4>
                      <p className="text-gray-600 leading-relaxed">
                        <a href="mailto:info@frisor.se" className="hover:text-black transition-colors">
                          info@frisor.se
                        </a><br />
                        <a href="tel:+46701234567" className="hover:text-black transition-colors">
                          (+46) 70 123 45 67
                        </a>
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Öppettider</h4>
                      <div className="text-gray-600 leading-relaxed space-y-1">
                        <div className="flex justify-between">
                          <span>Måndag - Fredag</span>
                          <span>09:00 - 19:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Lördag</span>
                          <span>09:00 - 17:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Söndag</span>
                          <span>10:00 - 16:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              </div>

              {/* Right side - Contact Form */}
              <div>
                <AnimatedCard delay={0.6}>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm text-gray-600 mb-2">
                        Namn*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-0 py-3 border-0 border-b border-gray-200 bg-transparent focus:border-black focus:outline-none focus:ring-0 transition-colors"
                        placeholder="Ditt fullständiga namn"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm text-gray-600 mb-2">
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-0 py-3 border-0 border-b border-gray-200 bg-transparent focus:border-black focus:outline-none focus:ring-0 transition-colors"
                        placeholder="din@email.se"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm text-gray-600 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-0 py-3 border-0 border-b border-gray-200 bg-transparent focus:border-black focus:outline-none focus:ring-0 transition-colors"
                        placeholder="+46 70 123 45 67"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm text-gray-600 mb-2">
                        Meddelande
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-0 py-3 border-0 border-b border-gray-200 bg-transparent focus:border-black focus:outline-none focus:ring-0 transition-colors resize-none"
                        placeholder="Berätta om dina önskemål eller frågor..."
                      />
                    </div>

                    <div className="pt-6">
                      <button
                        type="submit"
                        className="px-8 py-3 bg-black text-white text-sm font-medium uppercase tracking-wider hover:bg-gray-800 transition-colors"
                      >
                        SKICKA
                      </button>
                    </div>
                  </form>
                </AnimatedCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            <div className="grid lg:grid-cols-2 gap-16">

              {/* Left side - FAQ Header */}
              <div>
                <AnimatedCard delay={0.7}>
                  <div className="mb-12">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                      <h3 className="text-sm font-medium uppercase tracking-wider text-gray-500">
                        FAQ
                      </h3>
                    </div>
                  </div>
                </AnimatedCard>
              </div>

              {/* Right side - FAQ Questions */}
              <div>
                <div className="space-y-4">
                  {faqItems.map((item, index) => (
                    <AnimatedCard key={index} delay={0.8 + index * 0.1}>
                      <div className="bg-white rounded-none border-b border-gray-200">
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-lg font-medium text-gray-900 pr-4">
                            {item.question}
                          </span>
                          {openFaq === index ? (
                            <Minus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                          ) : (
                            <Plus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                          )}
                        </button>

                        {openFaq === index && (
                          <div className="px-6 pb-6">
                            <p className="text-gray-600 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    </AnimatedCard>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
