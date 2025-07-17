"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, Heart, Award, Mail, Phone } from "lucide-react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SectionTitle from "../../components/ui/SectionTitle";
import AnimatedCard from "../../components/ui/AnimatedCard";
import AnimatedText from "../../components/ui/AnimatedText";

export default function MeetUsPage() {
  const teamMembers = [
    {
      src: "/images/team/team1.png",
      name: "Sofia Andersson",
      title: "Kreativ Direktör & Grundare",
      specialties: ["Kreativ Färgning", "Avant-garde Styling", "Trendanalys"],
      experience: "12+ år",
      description: "Sofia är hjärtat i vårt team med en passion för att skapa unika looks som speglar varje kunds personlighet. Hon har utbildat sig vid internationella akademier i Paris och Milano.",
      quote: "Varje klippning är en ny konstnärlig resa",
      achievements: ["Årets Stylist 2023", "International Color Award", "Nordisk Hårmästare"],
      email: "sofia@frisor.se",
      phone: "+46 70 123 45 01"
    },
    {
      src: "/images/team/team2.png",
      name: "Marcus Lindqvist",
      title: "Senior Stylist",
      specialties: ["Herrklippning", "Skäggstyling", "Klassiska Tekniker"],
      experience: "8+ år",
      description: "Marcus specialiserar sig på moderna herrfrisyrer och är expert på precision och detaljer. Hans lugna approach skapar en avslappnad atmosfär för alla kunder.",
      quote: "Precision är nyckeln till perfektion",
      achievements: ["Bästa Herrfrisör Stockholm", "Certified Barber Master", "Nordic Men's Style Expert"],
      email: "marcus@frisor.se",
      phone: "+46 70 123 45 02"
    },
    {
      src: "/images/team/team3.png",
      name: "Emma Karlsson",
      title: "Färgspecialist",
      specialties: ["Balayage", "Highlights", "Färgkorrektion"],
      experience: "6+ år",
      description: "Emma är vår färgexpert som skapar magiska transformationer. Hon har en unik förmåga att matcha färger med hudton och personlighet.",
      quote: "Färg är mitt språk för kreativitet",
      achievements: ["Color Specialist Certificate", "Advanced Balayage Expert", "Customer Choice Award 2024"],
      email: "emma@frisor.se",
      phone: "+46 70 123 45 03"
    },
    {
      src: "/images/team/team4.png",
      name: "Alexander Berg",
      title: "Style Consultant",
      specialties: ["Personlig Styling", "Bröllopsfrisyrer", "Event Styling"],
      experience: "5+ år",
      description: "Alexander har ett öga för detaljer och skapar looks för speciella tillfällen. Han arbetar ofta med bröllop och andra viktiga events.",
      quote: "Din speciella dag förtjänar en perfekt look",
      achievements: ["Wedding Specialist 2023", "Event Styling Expert", "VIP Client Specialist"],
      email: "alexander@frisor.se",
      phone: "+46 70 123 45 04"
    },
    {
      src: "/images/team/team5.png",
      name: "Lisa Nilsson",
      title: "Junior Stylist",
      specialties: ["Klippning", "Styling", "Hårvård"],
      experience: "2+ år",
      description: "Lisa är vårt senaste tillskott och brinner för att lära sig nya tekniker. Hon tar hand om grundläggande klippningar och styling med stor entusiasm.",
      quote: "Varje dag lär jag mig något nytt",
      achievements: ["Rising Talent 2024", "Customer Favorite", "Technical Excellence Award"],
      email: "lisa@frisor.se",
      phone: "+46 70 123 45 05"
    }
  ];

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-20">
              <div className="flex items-center justify-between mb-8">
                <AnimatedText
                  as="h1"
                  className="text-8xl md:text-9xl font-bold tracking-tighter leading-none"
                  delay={0.1}
                >
                  Möt Oss
                </AnimatedText>

                <AnimatedCard delay={0.2}>
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                </AnimatedCard>
              </div>

              <div className="w-full h-px bg-gray-200 mb-12"></div>

              <AnimatedText
                as="p"
                className="text-xl md:text-2xl leading-relaxed text-gray-700 max-w-4xl"
                delay={0.3}
              >
                Bakom varje fantastisk frisyr finns passion, kunskap och kreativitet.
                Vårt team av expertstylister delar en gemensam vision: att få dig att
                känna dig som din bästa version. Lär känna de talangfulla personer
                som gör magin möjlig.
              </AnimatedText>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              small="VÅRT TEAM"
              large="Expertis Och Passion"
              className="mb-16"
            />

            <div className="space-y-20">
              {teamMembers.map((member, index) => (
                <AnimatedCard key={index} delay={0.2 + index * 0.1}>
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}>

                    {/* Image */}
                    <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="relative overflow-hidden rounded-2xl">
                        <Image
                          src={member.src}
                          alt={member.name}
                          width={600}
                          height={700}
                          className="w-full object-cover aspect-[4/5]"
                        />
                        <div className="absolute top-6 left-6">
                          <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                            <span className="text-sm font-medium text-gray-900">
                              {member.experience} erfarenhet
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="mb-6">
                        <h3 className="text-4xl font-bold text-gray-900 mb-2">
                          {member.name}
                        </h3>
                        <p className="text-xl text-gray-600 mb-4">
                          {member.title}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {member.specialties.map((specialty, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-black text-white text-sm rounded-full"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      <blockquote className="text-lg italic text-gray-700 mb-6 pl-4 border-l-4 border-black">
                        &ldquo;{member.quote}&rdquo;
                      </blockquote>

                      <p className="text-gray-700 leading-relaxed mb-8">
                        {member.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-8">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Award className="w-4 h-4" />
                          Utmärkelser & Certifieringar
                        </h4>
                        <ul className="space-y-1">
                          {member.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                              <Star className="w-3 h-3 text-yellow-500" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Contact */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                          {member.email}
                        </a>
                        <a
                          href={`tel:${member.phone.replace(/\s/g, '')}`}
                          className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                          {member.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
