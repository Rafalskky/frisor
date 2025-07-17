import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Calendar, Clock, User, TrendingUp, Sparkles, Star } from "lucide-react";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import SectionTitle from "../../../components/ui/SectionTitle";
import AnimatedButton from "../../../components/ui/AnimatedButton";
import AnimatedCard from "../../../components/ui/AnimatedCard";
import AnimatedText from "../../../components/ui/AnimatedText";
import AnimatedCounter from "../../../components/ui/AnimatedCounter";

export default function BlogPage() {
  const trendStats = [
    {
      number: 73,
      suffix: "%",
      title: "Väljer Naturliga Toner",
      description: "Av våra kunder väljer jordnära färger detta år"
    },
    {
      number: 2025,
      title: "Årets Trend",
      description: "Handlar om personlig autenticitet och hållbarhet"
    },
    {
      number: 5,
      title: "Topp Trender",
      description: "Som kommer dominera den svenska hårscenen"
    }
  ];

  const topTrends = [
    {
      title: "Curtain Bangs 2.0",
      description: "Den klassiska curtain bang får en modern twist med asymmetriska linjer och texturerade ends.",
      popularity: "Extremely Popular",
      difficulty: "Medel",
      image: "/images/work1.png",
      badge: "Hetast"
    },
    {
      title: "Copper Glow",
      description: "Varma koppartoner som fängslar ljuset och ger en naturlig, sun-kissed effekt året runt.",
      popularity: "Rising Star",
      difficulty: "Avancerad",
      image: "/images/work2.png",
      badge: "Ny"
    },
    {
      title: "Textured Bob",
      description: "Den klassiska bobben får ny liv med layers och movement som ger volym och personlighet.",
      popularity: "Steady Favorite",
      difficulty: "Lätt",
      image: "/images/work1.png",
      badge: "Klassiker"
    },
    {
      title: "Face-Framing Layers",
      description: "Strategiskt placerade layers som lyfter fram dina bästa drag och ger instant glow-up.",
      popularity: "Growing Fast",
      difficulty: "Medel",
      image: "/images/work2.png",
      badge: "Populär"
    }
  ];

  const colorTrends = [
    { name: "Warm Brunette", percentage: 28, color: "bg-amber-600" },
    { name: "Honey Blonde", percentage: 24, color: "bg-yellow-400" },
    { name: "Copper Red", percentage: 18, color: "bg-orange-500" },
    { name: "Ash Brown", percentage: 16, color: "bg-gray-500" },
    { name: "Platinum", percentage: 14, color: "bg-gray-200" }
  ];

  const relatedPosts = [
    {
      date: "Jan 25, 2025",
      title: "Våra bästa tips för ett friskt hår",
      img: "/images/blog/blog2.png",
      slug: "vara-basta-tips-for-ett-friskt-har"
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

      {/* Hero Section - Different from inspiration articles */}
      <section className="relative py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-black"></div>
          <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-gray-400"></div>
          <div className="absolute bottom-20 left-1/3 w-16 h-16 rounded-full bg-gray-600"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedText
              as="div"
              className="inline-flex items-center gap-2 text-gray-600 text-sm font-medium mb-6"
              delay={0.1}
            >
              <Calendar size={16} />
              Feb 12, 2025
              <span className="mx-2">•</span>
              <TrendingUp size={16} />
              Trender & Inspiration
              <span className="mx-2">•</span>
              <User size={16} />
              Av Frisör Team
            </AnimatedText>

            <SectionTitle
              small="BLOGG"
              large="De hetaste hårtrenderna 2025"
              className="mb-8"
            />

            <AnimatedText
              as="p"
              className="text-xl text-gray-600 max-w-2xl mx-auto mb-12"
              delay={0.4}
            >
              Upptäck årets viktigaste hårtrend och få inspiration från de stilar
              som kommer definiera 2025. Från naturliga toner till djärva klippningar.
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

      {/* Trend Statistics - Homepage style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            small="TREND DATA"
            large="Årets Siffror"
            className="mb-16"
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {trendStats.map((stat, i) => (
              <AnimatedCard key={i} delay={0.2 + i * 0.1}>
                <div className="text-center p-8 bg-gray-50 rounded-2xl">
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

      {/* Top Trends - Service card style */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            small="TOPP 4"
            large="Årets Hetaste Trender"
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {topTrends.map((trend, i) => (
              <AnimatedCard key={i} delay={0.3 + i * 0.1}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-sm">
                  <div className="relative overflow-hidden">
                    <Image
                      src={trend.image}
                      alt={trend.title}
                      width={800}
                      height={600}
                      className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className="px-3 py-1 rounded-full text-sm font-medium text-white"
                        style={{
                          background: trend.badge === "Hetast" ? 'rgba(239, 68, 68, 0.9)' :
                                     trend.badge === "Ny" ? 'rgba(34, 197, 94, 0.9)' :
                                     trend.badge === "Klassiker" ? 'rgba(59, 130, 246, 0.9)' :
                                     'rgba(168, 85, 247, 0.9)',
                          backdropFilter: 'blur(8px)',
                          WebkitBackdropFilter: 'blur(8px)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                        }}
                      >
                        {trend.badge}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Sparkles className="text-white w-6 h-6" />
                    </div>
                  </div>

                  <div
                    className="p-6"
                    style={{
                      background: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{trend.title}</h3>
                      <div className="text-right">
                        <div className="text-sm text-gray-500 mb-1">{trend.popularity}</div>
                        <div
                          className="text-xs text-gray-600 px-2 py-1 rounded-md inline-block"
                          style={{
                            background: 'rgba(255, 255, 255, 0.8)',
                            backdropFilter: 'blur(5px)',
                            WebkitBackdropFilter: 'blur(5px)',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                          }}
                        >
                          {trend.difficulty}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                      {trend.description}
                    </p>
                    <AnimatedButton
                      href="/kontakt"
                      text="Boka denna trend"
                      textColor="text-black"
                      borderColor="border-black"
                      arrowBgColor="bg-black"
                      arrowColor="text-white"
                    />
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Color Trends Chart */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            small="FÄRGANALYS"
            large="Populäraste Färgtrenderna"
            className="mb-16"
          />

          <AnimatedCard delay={0.4}>
            <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">
                Färgfördelning 2025
              </h3>
              <div className="space-y-6">
                {colorTrends.map((color, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-full ${color.color} flex-shrink-0`}></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900">{color.name}</span>
                        <span className="text-sm text-gray-600">{color.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${color.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${color.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Expert Predictions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            small="EXPERTTIPS"
            large="Våra Förutsägelser"
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedCard delay={0.5}>
              <div className="bg-white p-8 rounded-2xl border-l-4 border-black">
                <Star className="w-8 h-8 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Trend att hålla ögonen på
                </h3>
                <p className="text-gray-700 mb-4">
                  <strong>Wolf Cut Renaissance:</strong> Vi förutspår att wolf cut kommer
                  tillbaka i en mer raffinerad version under senare delen av 2025.
                  Denna gång med mer strukturerade layers och mindre mullet-inspiration.
                </p>
                <cite className="text-sm text-gray-600 font-medium">
                  - Anna Lindberg, Huvudstylist
                </cite>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.6}>
              <div className="bg-white p-8 rounded-2xl border-l-4 border-gray-400">
                <TrendingUp className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Hållbarhetstrenden
                </h3>
                <p className="text-gray-700 mb-4">
                  Fler kunder väljer <strong>low-maintenance färger</strong> och
                  klippningar som växer ut snyggt. Vi ser en 40% ökning av förfrågningar
                  om &ldquo;grow-out friendly&rdquo; stilar som kräver mindre underhåll.
                </p>
                <cite className="text-sm text-gray-600 font-medium">
                  - Erik Svensson, Kreativ Direktör
                </cite>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedCard delay={0.7}>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl text-white font-bold mb-6">
                Redo att testa årets hetaste trend?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Boka en konsultation med våra trendexperter och upptäck vilken
                2025-trend som passar dig bäst. Vi hjälper dig hitta din nya signatur-look.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton
                  href="/kontakt"
                  text="Boka trendkonsultation"
                  textColor="text-white"
                  borderColor="border-white"
                  arrowBgColor="bg-white"
                  arrowColor="text-black"
                />
                <AnimatedButton
                  href="/#gallery"
                  text="Se vårt galleri"
                  textColor="text-white"
                  borderColor="border-white"
                  arrowBgColor="bg-white"
                  arrowColor="text-black"
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
