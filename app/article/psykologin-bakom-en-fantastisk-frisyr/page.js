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
      date: "Jan 25, 2025",
      title: "Så får du din hårfärg att hålla längre",
      img: "/images/inspiration/blog2.png",
      slug: "sa-far-du-din-harfarg-att-halla-langre"
    },
  ];

  return (
    <main>
      <Header />

      {/* Article Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/inspiration/blog3.png"
            alt="Psykologin bakom en fantastisk frisyr"
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
            Jan 7, 2025
            <span className="mx-2">•</span>
            <Clock size={16} />
            7 min läsning
            <span className="mx-2">•</span>
            <User size={16} />
            Av Frisör Team
          </AnimatedText>
          <SectionTitle
            small="INSPIRATION"
            large="Psykologin bakom en fantastisk frisyr"
            className="mb-8 text-white"
            textColor="text-white"
          />
          <AnimatedText
            as="p"
            className="text-xl text-white/90 max-w-2xl mx-auto"
            delay={0.4}
          >
            Utforska den djupa kopplingen mellan hår och självkänsla. Förstå hur
            rätt frisyr kan transformera inte bara ditt utseende, utan hela din självbild.
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
            Din frisyr är mycket mer än bara hår - den är en förlängning av din
            personlighet och en kraftfull kommunikator av vem du är. Forskning visar
            att människor formar sin första uppfattning om dig på mindre än sju sekunder,
            och ditt hår spelar en avgörande roll i det intrycket.
          </AnimatedText>

          {/* Section 1 */}
          <AnimatedCard delay={0.3}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Självkänsla börjar uppifrån
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Studier inom psykologi visar att när vi ser bra ut, känner vi oss
                också bättre. Detta fenomen kallas &ldquo;enclothed cognition&rdquo; -
                tanken att vårt yttre påverkar vårt inre tillstånd. När du känner
                dig nöjd med din frisyr börjar dagen med en positiv känsla.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                En välvård frisyr kan fungera som en daglig påminnelse om att du
                bryr dig om dig själv. Denna enkla handling av egenvård sänder
                signaler till både dig själv och omgivningen om ditt självvärde
                och din professionalism.
              </p>
            </div>
          </AnimatedCard>

          {/* Quote Section */}
          <AnimatedCard delay={0.4}>
            <div className="bg-gray-50 p-8 rounded-2xl mb-16 border-l-4 border-black">
              <blockquote className="text-2xl font-medium text-gray-900 italic mb-4">
                &ldquo;När en kund lämnar vår salong med en frisyr de älskar,
                ser vi inte bara en fysisk förändring. Vi ser hur de bär sig,
                hur de ler, hur hela deras energi förändras.&rdquo;
              </blockquote>
              <cite className="text-sm text-gray-600 font-medium">
                - Erik Svensson, Kreativ Direktör på Frisör
              </cite>
            </div>
          </AnimatedCard>

          {/* Section 2 */}
          <AnimatedCard delay={0.5}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Första intryck och social psykologi
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Forskare vid Princeton University fann att människor bildar
                intryck av andra på bara 100 millisekunder. Din frisyr kommunicerar
                omedelbart information om din personlighet, kreativitet,
                professionalism och uppmärksamhet på detaljer.
              </p>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Vad din frisyr kommunicerar:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <ArrowRight size={16} className="text-gray-500 mt-1 flex-shrink-0" />
                    <span><strong>Välvård:</strong> Professionalism och självdisciplin</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight size={16} className="text-gray-500 mt-1 flex-shrink-0" />
                    <span><strong>Modern stil:</strong> Kreativitet och trendmedvetenhet</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight size={16} className="text-gray-500 mt-1 flex-shrink-0" />
                    <span><strong>Klassisk look:</strong> Tillförlitlighet och elegans</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight size={16} className="text-gray-500 mt-1 flex-shrink-0" />
                    <span><strong>Personlig touch:</strong> Individualitet och självförtroende</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedCard>

          {/* Image Section */}
          <AnimatedCard delay={0.6}>
            <div className="mb-16">
              <Image
                src="/images/work1.png"
                alt="Självsäker person med fantastisk frisyr"
                width={800}
                height={500}
                className="w-full object-cover rounded-2xl"
              />
              <p className="text-sm text-gray-500 mt-4 text-center italic">
                Självförtroende strålar inifrån och förstärks av rätt stil
              </p>
            </div>
          </AnimatedCard>

          {/* Section 3 */}
          <AnimatedCard delay={0.7}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Transformationens kraft
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                En dramatisk förändring av frisyren kan fungera som en symbolisk
                återfödselse. Många av våra kunder berättar att en ny frisyr
                hjälpte dem att gå vidare efter en svår period, markera en ny
                fas i livet eller helt enkelt återfinna glädjen i att ta hand om sig själv.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Denna &ldquo;makeover-effekt&rdquo; är välbelagd inom psykologin.
                När vi förändrar vårt yttre skapar det ofta en mental förskjutning
                som gör det lättare att anta nya beteenden och attityder.
              </p>
            </div>
          </AnimatedCard>

          {/* Section 4 */}
          <AnimatedCard delay={0.8}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Kontroll och rutiner
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                I en värld full av osäkerhet ger en väldefinierad frisyr en känsla
                av kontroll. Din morgonrutin med håret blir en meditation, en stund
                av fokus innan dagens utmaningar. Detta bidrar till minskad stress
                och ökad mental klarhet.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3 text-blue-800">
                  💡 Psykologisk fördel
                </h3>
                <p className="text-blue-700">
                  Människor som har en fast hårruti rapporterar högre nivåer av
                  självförtroende och känner sig mer förberedda för dagen. Det
                  handlar om att skapa förutsägbarhet i något du kan kontrollera.
                </p>
              </div>
            </div>
          </AnimatedCard>

          {/* Section 5 */}
          <AnimatedCard delay={0.9}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Professionell framgång och hår
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Forskning från Yale School of Management visar att välklädda
                personer med välvård hår oftare uppfattas som mer kompetenta
                och får fler befordringar. Din frisyr är en investering i din
                karriär och dina professionella relationer.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Det handlar inte om att anpassa sig till andras förväntningar,
                utan om att använda alla verktyg som finns tillgängliga för att
                kommunicera din kompetens och professionalitet på bästa möjliga sätt.
              </p>
            </div>
          </AnimatedCard>

          {/* Section 6 */}
          <AnimatedCard delay={1.0}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Kreativt uttryck och identitet
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Din frisyr är en av de mest synliga formerna av kreativt uttryck.
                Genom att välja färg, form och stil kommunicerar du din personlighet
                utan att säga ett ord. Det är en form av icke-verbal kommunikation
                som kan vara otroligt kraftfull.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                För många är frisyren ett sätt att utforska olika aspekter av
                sin identitet. En ny look kan hjälpa dig att känna dig mer kreativ,
                professionell, lekfull eller sofistikerad - beroende på vad du
                vill uttrycka just nu i ditt liv.
              </p>
            </div>
          </AnimatedCard>

          {/* Call to Action */}
          <AnimatedCard delay={1.1}>
            <div className="bg-black text-white p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">
                Redo för din transformation?
              </h3>
              <p className="text-lg mb-6 text-gray-300">
                Låt oss hjälpa dig hitta en frisyr som inte bara ser fantastisk ut,
                utan också får dig att känna dig som din bästa version av dig själv.
              </p>
              <AnimatedButton
                href="/kontakt"
                text="Boka stylist-konsultation"
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
