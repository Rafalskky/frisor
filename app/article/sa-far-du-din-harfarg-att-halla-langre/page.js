import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Calendar, Clock, User } from "lucide-react";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import SectionTitle from "../../../components/ui/SectionTitle";
import AnimatedButton from "../../../components/ui/AnimatedButton";
import AnimatedCard from "../../../components/ui/AnimatedCard";
import AnimatedText from "../../../components/ui/AnimatedText";

export default function ArticlePage() {
  const relatedArticles = [
    {
      date: "Feb 12, 2025",
      title: "Varför en professionell klippning gör skillnad",
      img: "/images/inspiration/blog1.png",
      slug: "varfor-en-professionell-klippning-gor-skillnad"
    },
    {
      date: "Jan 7, 2025",
      title: "Psykologin bakom en fantastisk frisyr",
      img: "/images/inspiration/blog3.png",
      slug: "psykologin-bakom-en-fantastisk-frisyr"
    },
  ];

  return (
    <main>
      <Header />

      {/* Article Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/inspiration/blog2.png"
            alt="Hårfärg som håller längre"
            layout="fill"
            objectFit="cover"
            className="opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <AnimatedText
            as="div"
            className="inline-flex items-center gap-2 text-white/80 text-sm font-medium mb-4"
            delay={0.1}
          >
            <Calendar size={16} />
            Jan 25, 2025
            <span className="mx-2">•</span>
            <Clock size={16} />
            6 min läsning
            <span className="mx-2">•</span>
            <User size={16} />
            Av Frisör Team
          </AnimatedText>
          <SectionTitle
            small="INSPIRATION"
            large="Så får du din hårfärg att hålla längre"
            className="mb-8 text-white"
            textColor="text-white"
          />
          <AnimatedText
            as="p"
            className="text-xl text-white/90 max-w-2xl mx-auto"
            delay={0.4}
          >
            Lär dig experternas bästa tips för att bevara din hårfärg och få
            den att se fräsch ut längre. Från rätt produkter till smarta rutiner.
          </AnimatedText>
        </div>
      </section>

      {/* Article Navigation */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedText delay={0.1}>
            <Link
              href="/#inspiration"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              <ArrowLeft size={16} />
              Tillbaka till inspiration
            </Link>
          </AnimatedText>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Introduction */}
          <AnimatedText
            as="p"
            className="text-xl leading-relaxed text-gray-700 mb-12 font-light"
            delay={0.2}
          >
            Att färga håret är en investering i både tid och pengar. Men med
            rätt teknik och produkter kan du få din hårfärg att hålla betydligt
            längre än du tror. Här delar vi våra bästa professionella tips för
            att bevara din färg och få den att se fantastisk ut vecka efter vecka.
          </AnimatedText>

          {/* Section 1 */}
          <AnimatedCard delay={0.3}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Vänta med första tvättningen
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                En av de viktigaste reglerna för långvarig hårfärg är att vänta
                minst 48-72 timmar innan du tvättar håret första gången efter
                färgningen. Under denna tid fortsätter färgmolekylerna att binda
                till hårstråna, vilket ger en djupare och mer bestående färg.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Under väntetiden bör du också undvika intensiv träning, bastu
                eller andra aktiviteter som får dig att svettas mycket, eftersom
                fukt kan påverka färgprocessen negativt.
              </p>
            </div>
          </AnimatedCard>

          {/* Quote Section */}
          <AnimatedCard delay={0.4}>
            <div className="bg-gray-50 p-8 rounded-2xl mb-16 border-l-4 border-black">
              <blockquote className="text-2xl font-medium text-gray-900 italic mb-4">
                &ldquo;Det första intrycket av din nya hårfärg formas under de
                första 72 timmarna. Vårdas den rätt då, kommer den att glänsa
                veckor framöver.&rdquo;
              </blockquote>
              <cite className="text-sm text-gray-600 font-medium">
                - Maria Johansson, Färgspecialist på Frisör
              </cite>
            </div>
          </AnimatedCard>

          {/* Section 2 */}
          <AnimatedCard delay={0.5}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Investera i rätt produkter
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Vanliga schampon innehåller ofta starka rengöringsmedel som kan
                tvätta bort hårfärgen snabbare än nödvändigt. Färgskyddande
                schampon är speciellt formulerade för att vara mildare och
                innehåller ofta UV-filter som skyddar mot solblekning.
              </p>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Våra rekommenderade produkttyper:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <ArrowRight size={16} className="text-gray-500 mt-1 flex-shrink-0" />
                    <span>Sulfatfria schampon för färgat hår</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight size={16} className="text-gray-500 mt-1 flex-shrink-0" />
                    <span>Djupt närande hårmasker med färgskydd</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight size={16} className="text-gray-500 mt-1 flex-shrink-0" />
                    <span>Leave-in behandlingar med UV-skydd</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight size={16} className="text-gray-500 mt-1 flex-shrink-0" />
                    <span>Kalla vatten för sköljning</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedCard>

          {/* Image Section */}
          <AnimatedCard delay={0.6}>
            <div className="mb-16">
              <Image
                src="/images/work2.png"
                alt="Vacker hårfärg"
                width={800}
                height={500}
                className="w-full object-cover rounded-2xl"
              />
              <p className="text-sm text-gray-500 mt-4 text-center italic">
                Professionell färgning med långvariga resultat
              </p>
            </div>
          </AnimatedCard>

          {/* Section 3 */}
          <AnimatedCard delay={0.7}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Temperatur och frekvens
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Varmt vatten öppnar hårets kutiklar, vilket gör det lättare för
                färgmolekylerna att rinna ut. Använd ljummet eller kallt vatten
                när du tvättar håret, särskilt vid sköljningen. Det kallare
                vattnet hjälper till att stänga kutiklarna och låsa in färgen.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Försök också att tvätta håret mer sällan. Många kan klara sig
                med att tvätta håret varannan eller var tredje dag istället för
                dagligen. Använd torrschampo mellan tvättningarna för att hålla
                håret fräscht.
              </p>
            </div>
          </AnimatedCard>

          {/* Section 4 */}
          <AnimatedCard delay={0.8}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Skydda mot miljöfaktorer
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Solen är en av de största fienderna till hårfärg. UV-strålarna
                bryter ned färgmolekylerna och kan få din färg att blekna eller
                få en brassig ton. Använd produkter med UV-skydd eller bär hatt
                när du vistas i solen länge.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Klorvatten i pooler kan också påverka hårfärgen negativt. Blöt
                håret med vanligt vatten innan du går i poolen och använd en
                skyddande leave-in behandling.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3 text-yellow-800">
                  ⚠️ Tips för sommaren
                </h3>
                <p className="text-yellow-700">
                  Under sommarmånaderna när du är mer utsatt för sol och
                  klorvatten, överväg att boka en färguppfräschning lite oftare
                  för att behålla din önskade ton.
                </p>
              </div>
            </div>
          </AnimatedCard>

          {/* Section 5 */}
          <AnimatedCard delay={0.9}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Regelbunden underhåll hos frisören
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Även med den bästa hemvården behöver hårfärgen professionell
                underhåll. Beroende på din naturliga hårfärg och önskad slutresultat
                rekommenderar vi att komma för färguppfräschning var 6-8:e vecka.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Under dessa besök kan vi också ge dig personliga råd baserat på
                hur din specifika färg utvecklats och anpassa behandlingen efter
                ditt hårs behov.
              </p>
            </div>
          </AnimatedCard>

          {/* Call to Action */}
          <AnimatedCard delay={1.0}>
            <div className="bg-black text-white p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">
                Vill du ha professionell färgvård?
              </h3>
              <p className="text-lg mb-6 text-gray-300">
                Boka en konsultation med våra färgspecialister och få en
                personlig plan för att bevara din hårfärg längre.
              </p>
              <AnimatedButton
                href="/kontakt"
                text="Boka konsultation"
                textColor="text-white"
                borderColor="border-white"
                arrowBgColor="bg-white"
                arrowColor="text-black"
                className="mx-auto"
              />
            </div>
          </AnimatedCard>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            small="LÄSA MER"
            large="Relaterade Artiklar"
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedArticles.map((article, i) => (
              <AnimatedCard key={i} delay={0.3 + i * 0.1}>
                <Link href={`/article/${article.slug}`} className="group block">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <Image
                        src={article.img}
                        alt={article.title}
                        width={600}
                        height={400}
                        className="w-full object-cover h-64 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-gray-600 transition-colors">
                        {article.title}
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
