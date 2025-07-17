import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Calendar, Clock, User, CheckCircle, Droplets, Scissors, Sun, Heart } from "lucide-react";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import SectionTitle from "../../../components/ui/SectionTitle";
import AnimatedButton from "../../../components/ui/AnimatedButton";
import AnimatedCard from "../../../components/ui/AnimatedCard";
import AnimatedText from "../../../components/ui/AnimatedText";
import AnimatedCounter from "../../../components/ui/AnimatedCounter";

export default function BlogPage() {
  const healthStats = [
    {
      number: 89,
      suffix: "%",
      title: "Förbättrat Hårhälsa",
      description: "Av kunder som följer våra rutiner ser förbättring på 30 dagar"
    },
    {
      number: 7,
      title: "Dagar per Vecka",
      description: "Enkel daglig rutin som tar mindre än 5 minuter"
    },
    {
      number: 12,
      title: "Veckor",
      description: "Genomsnittlig tid för att se dramatisk förbättring"
    }
  ];

  const dailyRoutine = [
    {
      time: "Morgon",
      icon: <Sun className="w-8 h-8 text-yellow-500" />,
      title: "Skydda & Förbered",
      tips: [
        "Använd UV-skyddande leave-in conditioner",
        "Borsta försiktigt från topp till botten",
        "Undvik tight ponnytal på vått hår"
      ],
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      time: "Kväll",
      icon: <Heart className="w-8 h-8 text-purple-500" />,
      title: "Återställ & Vårda",
      tips: [
        "Massera hårbotten i 2-3 minuter",
        "Använd silk pillowcase för mindre friktion",
        "Applicera nourishing hair oil på topparna"
      ],
      color: "bg-purple-50 border-purple-200"
    }
  ];

  const weeklyTreatments = [
    {
      day: "Måndag",
      treatment: "Deep Cleanse",
      description: "Clarifying shampoo för att ta bort product buildup",
      image: "/images/process/konsultation.png",
      difficulty: "Lätt",
      time: "10 min"
    },
    {
      day: "Onsdag",
      treatment: "Protein Treatment",
      description: "Styrker hårstråna och förebygger breakage",
      image: "/images/process/analys.png",
      difficulty: "Medel",
      time: "20 min"
    },
    {
      day: "Fredag",
      treatment: "Moisture Mask",
      description: "Djup återfuktning för glansigt, mjukt hår",
      image: "/images/process/klipp.png",
      difficulty: "Lätt",
      time: "15 min"
    },
    {
      day: "Söndag",
      treatment: "Scalp Care",
      description: "Exfoliering och massage för hälsosam hårbotten",
      image: "/images/process/finish.png",
      difficulty: "Medel",
      time: "25 min"
    }
  ];

  const commonMistakes = [
    {
      mistake: "Tvättar håret dagligen",
      solution: "Tvätta varannan dag eller mindre",
      impact: "Bibehåller naturliga oljor"
    },
    {
      mistake: "Använder för varmt vatten",
      solution: "Ljummet vatten + kall sköljning",
      impact: "Stänger hårets kutiklar"
    },
    {
      mistake: "Borstar vått hår aggressivt",
      solution: "Wide-tooth kam från topparna uppåt",
      impact: "Förhindrar breakage och damage"
    },
    {
      mistake: "Skippar heat protection",
      solution: "Alltid heat protectant före styling",
      impact: "Förhindrar permanent skada"
    }
  ];

  const expertIngredients = [
    { name: "Argan Oil", benefit: "Deep hydration & shine", rating: 95 },
    { name: "Keratin", benefit: "Strength & repair", rating: 92 },
    { name: "Biotin", benefit: "Growth & thickness", rating: 88 },
    { name: "Hyaluronic Acid", benefit: "Moisture retention", rating: 90 },
    { name: "Peptides", benefit: "Scalp health", rating: 85 }
  ];

  const relatedPosts = [
    {
      date: "Feb 12, 2025",
      title: "De hetaste hårtrenderna 2025",
      img: "/images/blog/blog1.png",
      slug: "de-hetaste-hartrenderna-2025"
    },
    {
      date: "Jan 7, 2025",
      title: "Vilken frisyr passar din ansiktsform?",
      img: "/images/blog/blog3.png",
      slug: "vilken-frisyr-passar-din-ansiktsform"
    },
  ];

  return (
    <main>
      <Header />

      {/* Hero Section - Tips focused */}
      <section className="relative py-32 bg-gradient-to-br from-green-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-24 h-24 rounded-full bg-green-400"></div>
          <div className="absolute top-60 right-10 w-32 h-32 rounded-full bg-blue-400"></div>
          <div className="absolute bottom-20 left-1/2 w-20 h-20 rounded-full bg-purple-400"></div>
          <div className="absolute bottom-40 right-1/3 w-16 h-16 rounded-full bg-pink-400"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedText
              as="div"
              className="inline-flex items-center gap-2 text-gray-600 text-sm font-medium mb-6"
              delay={0.1}
            >
              <Calendar size={16} />
              Jan 25, 2025
              <span className="mx-2">•</span>
              <Heart size={16} />
              Hårhälsa & Vård
              <span className="mx-2">•</span>
              <User size={16} />
              Av Frisör Team
            </AnimatedText>

            <SectionTitle
              small="BLOGG"
              large="Våra bästa tips för ett friskt hår"
              className="mb-8"
            />

            <AnimatedText
              as="p"
              className="text-xl text-gray-600 max-w-2xl mx-auto mb-12"
              delay={0.4}
            >
              Enkla, vetenskapligt bevisade metoder för att förbättra din hårhälsa.
              Från dagliga rutiner till veckobehandlingar - allt du behöver veta.
            </AnimatedText>

            <AnimatedText delay={0.1}>
              <Link
                href="/#blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors"
              >
                <ArrowLeft size={16} />
                Tillbaka till blogg
              </Link>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Health Statistics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            small="RESULTAT"
            large="Bevisad Effektivitet"
            className="mb-16"
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {healthStats.map((stat, i) => (
              <AnimatedCard key={i} delay={0.2 + i * 0.1}>
                <div className="text-center p-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl">
                  <p className="text-5xl font-bold mb-4 text-gray-900">
                    <AnimatedCounter to={stat.number} />
                    {stat.suffix || ""}
                  </p>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{stat.title}</h3>
                  <p className="text-gray-600">{stat.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Routine - Process style */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            small="DAGLIG RUTIN"
            large="Morgon & Kväll"
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {dailyRoutine.map((routine, i) => (
              <AnimatedCard key={i} delay={0.3 + i * 0.2}>
                <div className={`p-8 rounded-2xl border-2 ${routine.color}`}>
                  <div className="flex items-center gap-4 mb-6">
                    {routine.icon}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{routine.title}</h3>
                      <p className="text-gray-600 font-medium">{routine.time}</p>
                    </div>
                  </div>
                  <ul className="space-y-4">
                    {routine.tips.map((tip, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Treatments - Service cards style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            small="VECKOSCHEMA"
            large="Professionella Behandlingar Hemma"
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {weeklyTreatments.map((treatment, i) => (
              <AnimatedCard key={i} delay={0.4 + i * 0.1}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg border">
                  <div className="relative overflow-hidden">
                    <Image
                      src={treatment.image}
                      alt={treatment.treatment}
                      width={400}
                      height={300}
                      className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-sm font-medium text-white bg-blue-600/90 backdrop-blur-sm">
                        {treatment.day}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold text-gray-900">{treatment.treatment}</h3>
                      <div className="text-right">
                        <div className="text-xs text-gray-500">{treatment.difficulty}</div>
                        <div className="text-xs text-blue-600 font-medium">{treatment.time}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {treatment.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <Droplets className="w-5 h-5 text-blue-500" />
                      <span className="text-xs text-gray-500 uppercase tracking-wide">Treatment</span>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            small="UNDVIK DETTA"
            large="Vanliga Misstag & Lösningar"
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {commonMistakes.map((item, i) => (
              <AnimatedCard key={i} delay={0.5 + i * 0.1}>
                <div className="bg-white p-6 rounded-2xl border border-red-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 font-bold">✗</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2">{item.mistake}</h3>
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium text-green-800 mb-1">{item.solution}</p>
                          <p className="text-sm text-gray-600">{item.impact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Ingredients Chart */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            small="EXPERTRÅD"
            large="Bästa Ingredienserna för Hårhälsa"
            className="mb-16"
          />

          <AnimatedCard delay={0.6}>
            <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">
                Effektivitetsranking
              </h3>
              <div className="space-y-6">
                {expertIngredients.map((ingredient, i) => (
                  <div key={i} className="flex items-center gap-6">
                    <div className="flex-shrink-0 w-32">
                      <h4 className="font-bold text-gray-900">{ingredient.name}</h4>
                      <p className="text-sm text-gray-600">{ingredient.benefit}</p>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-1000 ease-out"
                            style={{ width: `${ingredient.rating}%` }}
                          ></div>
                        </div>
                        <span className="ml-4 text-sm font-bold text-gray-700">{ingredient.rating}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Professional Treatment CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedCard delay={0.7}>
            <div className="max-w-3xl mx-auto">
              <Scissors className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-6 text-white">
                Redo för professionell hårvård?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Våra experter kan analysera ditt hår och skapa en personlig vårdplan
                som ger snabbare och bättre resultat än hemmabehandling.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton
                  href="/kontakt"
                  text="Boka hårhälsoanalys"
                  textColor="text-white"
                  borderColor="border-white"
                  arrowBgColor="bg-white"
                  arrowColor="text-blue-600"
                />
                <AnimatedButton
                  href="/kontakt"
                  text="Köp professionella produkter"
                  textColor="text-white"
                  borderColor="border-white"
                  arrowBgColor="bg-white"
                  arrowColor="text-blue-600"
                />
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Related Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            small="LÄSA MER"
            large="Fler Blogginlägg"
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedPosts.map((post, i) => (
              <AnimatedCard key={i} delay={0.3 + i * 0.1}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <Image
                        src={post.img}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="w-full object-cover h-64 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-gray-600 transition-colors">
                        {post.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm font-medium text-black group-hover:gap-3 transition-all">
                        Läs Mer <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
