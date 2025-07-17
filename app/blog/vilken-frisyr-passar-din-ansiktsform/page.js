import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Calendar, Clock, User, Circle, Square, Triangle, Diamond, Heart, Ruler } from "lucide-react";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import SectionTitle from "../../../components/ui/SectionTitle";
import AnimatedButton from "../../../components/ui/AnimatedButton";
import AnimatedCard from "../../../components/ui/AnimatedCard";
import AnimatedText from "../../../components/ui/AnimatedText";
import AnimatedCounter from "../../../components/ui/AnimatedCounter";

export default function BlogPage() {
  const faceShapeStats = [
    {
      number: 67,
      suffix: "%",
      title: "Väljer Fel Frisyr",
      description: "På grund av att de inte känner sin ansiktsform"
    },
    {
      number: 5,
      title: "Grundformer",
      description: "Alla ansikten kan kategoriseras i dessa former"
    },
    {
      number: 24,
      title: "Timmar Styling",
      description: "Sparas per månad med rätt frisyr för din form"
    }
  ];

  const faceShapes = [
    {
      shape: "Ovalt",
      icon: <div className="w-12 h-16 bg-blue-500 rounded-full mx-auto"></div>,
      percentage: 32,
      characteristics: [
        "Längre än det är brett",
        "Mjukt rundade kanter",
        "Bredast vid kinderna",
        "Smal haka"
      ],
      bestStyles: [
        "Nästan alla frisyrer fungerar",
        "Curtain bangs",
        "Layered cuts",
        "Både kort och långt hår"
      ],
      avoid: ["Alltför långa, raka frisyrer utan volym"],
      celebrity: "Scarlett Johansson, Natalie Portman",
      image: "/images/work1.png",
      color: "bg-blue-50 border-blue-200"
    },
    {
      shape: "Runt",
      icon: <div className="w-14 h-14 bg-green-500 rounded-full mx-auto"></div>,
      percentage: 28,
      characteristics: [
        "Lika bred som lång",
        "Mjuka, rundade linjer",
        "Fullare kinder",
        "Kort haka"
      ],
      bestStyles: [
        "Volym på toppen",
        "Side-swept bangs",
        "Asymmetriska cuts",
        "Långt, rakt hår"
      ],
      avoid: ["Blunt bangs", "Korta frisyrer som avslutas vid hakan"],
      celebrity: "Emma Stone, Selena Gomez",
      image: "/images/work2.png",
      color: "bg-green-50 border-green-200"
    },
    {
      shape: "Fyrkantigt",
      icon: <div className="w-14 h-14 bg-orange-500 rounded-lg mx-auto"></div>,
      percentage: 22,
      characteristics: [
        "Bred panna och käklinje",
        "Markerade kanter",
        "Lika bred vid panna och käke",
        "Kort, bred haka"
      ],
      bestStyles: [
        "Mjuka layers",
        "Side parts",
        "Curtain bangs",
        "Rundade former"
      ],
      avoid: ["Blunt cuts", "Mittenbena", "Raka linjer"],
      celebrity: "Angelina Jolie, Keira Knightley",
      image: "/images/work1.png",
      color: "bg-orange-50 border-orange-200"
    },
    {
      shape: "Hjärtformat",
      icon: <Heart className="w-12 h-12 text-pink-500 mx-auto" />,
      percentage: 12,
      characteristics: [
        "Bred panna",
        "Smal haka",
        "Högre kindben",
        "Spetsig haka"
      ],
      bestStyles: [
        "Chin-length bobs",
        "Side-swept bangs",
        "Volym vid hakan",
        "Texturerade ends"
      ],
      avoid: ["Volym på toppen", "Korta frisyrer över öronen"],
      celebrity: "Reese Witherspoon, Jennifer Lopez",
      image: "/images/work2.png",
      color: "bg-pink-50 border-pink-200"
    },
    {
      shape: "Diamantformat",
      icon: <Diamond className="w-12 h-12 text-purple-500 mx-auto" />,
      percentage: 6,
      characteristics: [
        "Smal panna och haka",
        "Breda kindben",
        "Markerade käklinje",
        "Spetsig haka"
      ],
      bestStyles: [
        "Full bangs",
        "Volym vid tinningarna",
        "Mjuka layers",
        "Chin-length cuts"
      ],
      avoid: ["Slicked-back styles", "Tight ponytails"],
      celebrity: "Rihanna, Elizabeth Olsen",
      image: "/images/work1.png",
      color: "bg-purple-50 border-purple-200"
    }
  ];

  const stylingTips = [
    {
      category: "Längd",
      icon: <Ruler className="w-8 h-8 text-blue-600" />,
      tips: [
        {
          rule: "Ovalt",
          advice: "Alla längder fungerar - du har fritt val!"
        },
        {
          rule: "Runt",
          advice: "Undvik längder som slutar vid hakan"
        },
        {
          rule: "Fyrkantigt",
          advice: "Medellånga cuts är mest smickrande"
        },
        {
          rule: "Hjärtformat",
          advice: "Längre hår balanserar en bred panna"
        }
      ]
    },
    {
      category: "Lugg",
      icon: <Triangle className="w-8 h-8 text-green-600" />,
      tips: [
        {
          rule: "Ovalt",
          advice: "Alla luggtyper - experimentera fritt"
        },
        {
          rule: "Runt",
          advice: "Side-swept lugg förlänger ansiktet"
        },
        {
          rule: "Fyrkantigt",
          advice: "Mjuk, avsides lugg mjukar upp kanter"
        },
        {
          rule: "Hjärtformat",
          advice: "Full lugg döljer en bred panna perfekt"
        }
      ]
    }
  ];

  const beforeAfter = [
    {
      before: "Fel frisyr för runt ansikte",
      after: "Rätt frisyr med volym på toppen",
      improvement: "+85% mer smickrande",
      technique: "Layered cut med side-swept bangs"
    },
    {
      before: "Fyrkantigt ansikte med hårt cut",
      after: "Mjuka layers och side part",
      improvement: "+78% mjukare utseende",
      technique: "Texturerade ends och curtain bangs"
    },
    {
      before: "Hjärtformat med fel volym",
      after: "Balanserad stil med volym vid hakan",
      improvement: "+92% bättre proportion",
      technique: "Chin-length bob med inward curl"
    }
  ];

  const professionalAnalysis = [
    {
      step: 1,
      title: "Mätning",
      description: "Vi mäter förhållandet mellan panna, kinder och haka",
      icon: <Ruler className="w-6 h-6 text-blue-600" />,
      time: "5 min"
    },
    {
      step: 2,
      title: "Analys",
      description: "Bestämmer din primära och sekundära ansiktsform",
      icon: <Circle className="w-6 h-6 text-green-600" />,
      time: "10 min"
    },
    {
      step: 3,
      title: "Rekommendation",
      description: "Föreslår 3-5 perfekta frisyrer för just dig",
      icon: <Heart className="w-6 h-6 text-pink-600" />,
      time: "15 min"
    },
    {
      step: 4,
      title: "Styling",
      description: "Skapar din nya look med professionell teknik",
      icon: <Triangle className="w-6 h-6 text-purple-600" />,
      time: "45 min"
    }
  ];

  const relatedPosts = [
    {
      date: "Feb 12, 2025",
      title: "De hetaste hårtrenderna 2025",
      img: "/images/blog/blog1.png",
      slug: "de-hetaste-hartrenderna-2025"
    },
    {
      date: "Jan 25, 2025",
      title: "Våra bästa tips för ett friskt hår",
      img: "/images/blog/blog2.png",
      slug: "vara-basta-tips-for-ett-friskt-har"
    },
  ];

  return (
    <main>
      <Header />

      {/* Hero Section - Shape focused */}
      <section className="relative py-32 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-20 h-24 bg-purple-400 rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-pink-400 rounded-lg"></div>
          <div className="absolute bottom-20 left-1/3 w-16 h-20 bg-blue-400 rounded-full"></div>
          <div className="absolute bottom-40 right-1/3 w-18 h-18 bg-green-400" style={{clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedText
              as="div"
              className="inline-flex items-center gap-2 text-gray-600 text-sm font-medium mb-6"
              delay={0.1}
            >
              <Calendar size={16} />
              Jan 7, 2025
              <span className="mx-2">•</span>
              <Ruler size={16} />
              Styling & Analys
              <span className="mx-2">•</span>
              <User size={16} />
              Av Frisör Team
            </AnimatedText>

            <SectionTitle
              small="BLOGG"
              large="Vilken frisyr passar din ansiktsform?"
              className="mb-8"
            />

            <AnimatedText
              as="p"
              className="text-xl text-gray-600 max-w-2xl mx-auto mb-12"
              delay={0.4}
            >
              Upptäck din ansiktsform och få personliga rekommendationer.
              Lär dig välja frisyrer som framhäver dina bästa drag och skapar perfekt balans.
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

      {/* Face Shape Statistics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            small="FAKTA"
            large="Ansiktsform & Styling"
            className="mb-16"
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {faceShapeStats.map((stat, i) => (
              <AnimatedCard key={i} delay={0.2 + i * 0.1}>
                <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
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

      {/* Face Shape Guide - Visual cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            small="IDENTIFIERA"
            large="De 5 Grundformerna"
            className="mb-16"
          />

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {faceShapes.map((shape, i) => (
              <AnimatedCard key={i} delay={0.3 + i * 0.1}>
                <div className={`p-6 rounded-2xl border-2 ${shape.color} bg-white`}>
                  <div className="text-center mb-6">
                    {shape.icon}
                    <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-2">{shape.shape}</h3>
                    <div className="text-4xl font-bold text-gray-600 mb-2">{shape.percentage}%</div>
                    <p className="text-sm text-gray-500">av befolkningen</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Kännetecken:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {shape.characteristics.map((char, j) => (
                          <li key={j} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                            {char}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Bästa stilar:</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        {shape.bestStyles.map((style, j) => (
                          <li key={j} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            {style}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Undvik:</h4>
                      <ul className="text-sm text-red-600 space-y-1">
                        {shape.avoid.map((avoid, j) => (
                          <li key={j} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                            {avoid}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-gray-200">
                      <p className="text-xs text-gray-500">
                        <strong>Inspiration:</strong> {shape.celebrity}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Styling Tips */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            small="SNABBTIPS"
            large="Universella Regler"
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {stylingTips.map((category, i) => (
              <AnimatedCard key={i} delay={0.4 + i * 0.2}>
                <div className="bg-gray-50 p-8 rounded-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    {category.icon}
                    <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.tips.map((tip, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <div className="w-20 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-gray-700">{tip.rule}</span>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">{tip.advice}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Results */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            small="TRANSFORMATIONER"
            large="Före & Efter Resultat"
            className="mb-16"
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {beforeAfter.map((result, i) => (
              <AnimatedCard key={i} delay={0.5 + i * 0.1}>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-green-600 mb-2">{result.improvement}</div>
                    <p className="text-sm text-gray-500">förbättring</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full flex-shrink-0"></div>
                      <p className="text-sm text-gray-600">{result.before}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full flex-shrink-0"></div>
                      <p className="text-sm text-gray-900 font-medium">{result.after}</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <p className="text-xs text-blue-600 font-medium">
                      Teknik: {result.technique}
                    </p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Process - Process style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            small="VÅR METOD"
            large="Professionell Ansiktsanalys"
            className="mb-16"
          />

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {professionalAnalysis.map((step, i) => (
              <AnimatedCard key={i} delay={0.6 + i * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3">
                      {step.step}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                  <div className="text-xs text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full inline-block">
                    {step.time}
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedCard delay={0.7}>
            <div className="max-w-3xl mx-auto">
              <Diamond className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-6 text-white">
                Upptäck din perfekta frisyr
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Boka en professionell ansiktsanalys och få personliga rekommendationer
                från våra expertstylister. Vi hjälper dig hitta stilen som passar just dig.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton
                  href="/kontakt"
                  text="Boka ansiktsanalys"
                  textColor="text-white"
                  borderColor="border-white"
                  arrowBgColor="bg-white"
                  arrowColor="text-purple-600"
                />
                <AnimatedButton
                  href="/#gallery"
                  text="Se våra transformationer"
                  textColor="text-white"
                  borderColor="border-white"
                  arrowBgColor="bg-white"
                  arrowColor="text-purple-600"
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
