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
      date: "Jan 25, 2025",
      title: "Så får du din hårfärg att hålla längre",
      img: "/images/inspiration/blog2.png",
      slug: "sa-far-du-din-harfarg-att-halla-langre"
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
            src="/images/inspiration/blog1.png"
            alt="Professionell klippning"
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
            Feb 12, 2025
            <span className="mx-2">•</span>
            <Clock size={16} />
            5 min läsning
            <span className="mx-2">•</span>
            <User size={16} />
            Av Frisör Team
          </AnimatedText>
          <SectionTitle
            small="INSPIRATION"
            large="Varför en professionell klippning gör skillnad"
            className="mb-8 text-white"
            textColor="text-white"
          />
          <AnimatedText
            as="p"
            className="text-xl text-white/90 max-w-2xl mx-auto"
            delay={0.4}
          >
            Upptäck skillnaden mellan hemmaklippning och professionell service.
            Vi förklarar varför expertis inom hårvård är en investering som lönar sig.
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
            I en värld där hemmaklippning och billiga alternativ blir allt vanligare,
            kan det vara lätt att glömma bort värdet av professionell hårvård. Men
            sanningen är att en professionell klippning gör betydligt mer skillnad
            än vad många tror.
          </AnimatedText>

          {/* Section 1 */}
          <AnimatedCard delay={0.3}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Expertis och erfarenhet
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                En professionell frisör har genomgått års utbildning och praktisk
                träning. De förstår hårets struktur, ansiktsformer och hur olika
                tekniker påverkar slutresultatet. Denna kunskap är omöjlig att
                ersätta med YouTube-tutorials eller hemmakit.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Våra stylister på Frisör har över 10 års samlad erfarenhet och
                håller sig ständigt uppdaterade med de senaste trenderna och
                teknikerna inom branschen.
              </p>
            </div>
          </AnimatedCard>

          {/* Quote Section */}
          <AnimatedCard delay={0.4}>
            <div className="bg-gray-50 p-8 rounded-2xl mb-16 border-l-4 border-black">
              <blockquote className="text-2xl font-medium text-gray-900 italic mb-4">
                &ldquo;En bra klippning är inte bara om att klippa bort hår -
                det handlar om att skapa en form som kompletterar dig som person.&rdquo;
              </blockquote>
              <cite className="text-sm text-gray-600 font-medium">
                - Anna Lindberg, Huvudstylist på Frisör
              </cite>
            </div>
          </AnimatedCard>

          {/* Section 2 */}
          <AnimatedCard delay={0.5}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Rätt verktyg för rätt resultat
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Professionella verktyg gör en enorm skillnad. Vassa, högkvalitativa
                saxar som underhålls regelbundet ger renare snitt och minskar
                risken för kluvna toppar. Våra stylister använder endast verktyg
                från välkända märken som Wahl och Babyliss.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Dessutom har vi tillgång till produkter som inte finns tillgängliga
                för konsumenter - professionella färger, behandlingar och
                stylingprodukter som ger långvariga resultat.
              </p>
            </div>
          </AnimatedCard>

          {/* Image Section */}
          <AnimatedCard delay={0.6}>
            <div className="mb-16">
              <Image
                src="/images/work1.png"
                alt="Professionell styling"
                width={800}
                height={500}
                className="w-full object-cover rounded-2xl"
              />
              <p className="text-sm text-gray-500 mt-4 text-center italic">
                Exempel på professionell styling och färgning
              </p>
            </div>
          </AnimatedCard>

          {/* Section 3 */}
          <AnimatedCard delay={0.7}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Personlig konsultation och analys
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Innan vi ens tar fram saxen börjar vi med en grundlig konsultation.
                Vi analyserar din ansiktsform, hårstruktur, livsstil och personliga
                stil för att skapa en frisyr som verkligen passar dig.
              </p>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Vad vi analyserar:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <ArrowRight size={16} className="text-gray-500 mt-1 flex-shrink-0" />
                    <span>Ansiktsform och proportioner</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight size={16} className="text-gray-500 mt-1 flex-shrink-0" />
                    <span>Hårstruktur och tillväxtmönster</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight size={16} className="text-gray-500 mt-1 flex-shrink-0" />
                    <span>Livsstil och underhållsvilja</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight size={16} className="text-gray-500 mt-1 flex-shrink-0" />
                    <span>Personlig stil och preferenser</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedCard>

          {/* Section 4 */}
          <AnimatedCard delay={0.8}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Långsiktiga resultat
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                En professionell klippning växer ut bättre. Genom att följa hårets
                naturliga fall och skapa rätt lagring, ser din frisyr bra ut även
                veckor efter klippningen. Detta sparar både tid och pengar i längden.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Våra kunder berättar ofta att de får komplimanger för sitt hår
                månader efter besöket - det är skillnaden som expertis gör.
              </p>
            </div>
          </AnimatedCard>

          {/* Call to Action */}
          <AnimatedCard delay={0.9}>
            <div className="bg-black text-white p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">
                Redo att uppleva skillnaden?
              </h3>
              <p className="text-lg mb-6 text-gray-300">
                Boka en konsultation med våra expertstylister och upptäck
                vad professionell hårvård kan göra för dig.
              </p>
              <AnimatedButton
                href="/kontakt"
                text="Boka tid nu"
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
