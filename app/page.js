"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ArrowDown,
  Globe,
  Crown,
  Flame,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionTitle from "../components/ui/SectionTitle";
import AnimatedButton from "../components/ui/AnimatedButton";
import AnimatedCounter from "../components/ui/AnimatedCounter";
import TeamCarousel from "../components/ui/TeamCarousel";
import AnimatedCard from "../components/ui/AnimatedCard";
import AnimatedText from "../components/ui/AnimatedText";
import SubscriptionModal from "../components/ui/SubscriptionModal";

const Plan = ({ name, price, desc, features, icon, isFeatured = false, onSubscribe }) => (
  <div
    className={`p-8 border rounded-lg ${
      isFeatured
        ? "bg-black text-white border-black"
        : "bg-white border-gray-200"
    }`}
  >
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-4xl font-medium">{name}</h3>
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center ${
          isFeatured ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        {icon}
      </div>
    </div>
    <p className="text-2xl mb-4">
      <span className="font-bold">{price} kr</span>
      <span className={`${isFeatured ? "text-gray-400" : "text-gray-500"}`}>
        /månad
      </span>
    </p>
    <p
      className={`mb-8 text-sm ${
        isFeatured ? "text-gray-300" : "text-gray-600"
      }`}
    >
      {desc}
    </p>
    <button
      onClick={onSubscribe}
      className={`w-full flex items-center justify-center gap-2 text-sm font-semibold border rounded-full px-5 py-3 mb-8 transition-colors ${
        isFeatured
          ? "border-white hover:bg-white hover:text-black"
          : "border-black hover:bg-black hover:text-white"
      }`}
    >
      Starta prenumeration <ArrowRight size={16} />
    </button>
    <ul className="space-y-3 text-sm">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center gap-3">
          <ArrowRight
            size={16}
            className={isFeatured ? "text-gray-400" : "text-gray-500"}
          />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      name: "Essential",
      price: "399",
      desc: "Perfekt för dig som vill ha regelbunden hårvård utan att behöva tänka på kostnad varje gång.",
      icon: <Flame />,
      features: [
        "1 klippning per månad",
        "Schamponering & balsam",
        "Grundläggande styling",
        "10% rabatt på produkter",
        "Flexibel bokning online",
      ],
    },
    {
      name: "Premium",
      price: "799",
      desc: "Exklusiv service med prioriterad bokning och avancerade behandlingar för den kräsne kunden.",
      icon: <Globe />,
      isFeatured: true,
      features: [
        "Obegränsade klippningar",
        "1 färgning per månad",
        "Prioriterad bokning",
        "Exklusiv huvudmassage",
        "20% rabatt på alla produkter",
        "Personlig stylist-konsultation",
      ],
    },
    {
      name: "VIP Elite",
      price: "1299",
      desc: "Den ultimata lyx-upplevelsen med obegränsad tillgång till alla våra tjänster och VIP-behandling.",
      icon: <Crown />,
      features: [
        "Obegränsade alla tjänster",
        "VIP-bokning när som helst",
        "Exklusiva avancerade behandlingar",
        "Personliga produkter hemskickade",
        "Dedikerad premium stylist",
        "Champagne-service",
        "Gratis hembesök (1 per månad)",
      ],
    },
  ];

  const handleSubscribe = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const teamMembers = [
    {
      src: "/images/team/team1.png",
      alt: "Arbetare 1"
    },
    {
      src: "/images/team/team2.png",
      alt: "Arbetare 2"
    },
    {
      src: "/images/team/team3.png",
      alt: "Arbetare 3"
    },
    {
      src: "/images/team/team4.png",
      alt: "Arbetare 4"
    },
    {
      src: "/images/team/team5.png",
      alt: "Arbetare 5"
    }
  ];

  const blogArticles = [
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
    {
      date: "Jan 7, 2025",
      title: "Vilken frisyr passar din ansiktsform?",
      img: "/images/blog/blog3.png",
      slug: "vilken-frisyr-passar-din-ansiktsform"
    },
  ];

  const insightsArticles = [
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
    {
      date: "Jan 7, 2025",
      title: "Psykologin bakom en fantastisk frisyr",
      img: "/images/inspiration/blog3.png",
      slug: "psykologin-bakom-en-fantastisk-frisyr"
    },
  ];

  const processSteps = [
    {
      num: 1,
      title: "Konsultation",
      desc: "Vi börjar med ett samtal för att förstå din vision, dina mål och dina önskemål.",
      img: "/images/process/konsultation.png",
    },
    {
      num: 2,
      title: "Analys & Rådgivning",
      desc: "Vårt team analyserar ditt hår och ger råd om de bästa alternativen för just dig.",
      img: "/images/process/analys.png",
    },
    {
      num: 3,
      title: "Klipp & Färg",
      desc: "Vi skapar en högkvalitativ klippning och färg som överensstämmer med dina mål.",
      img: "/images/process/klipp.png",
    },
    {
      num: 4,
      title: "Styling & Finish",
      desc: "Du granskar resultatet, ger feedback och vi finjusterar allt för ett perfekt slutresultat.",
      img: "/images/process/finish.png",
    },
  ];

  return (
    <main>
      <Header />
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/hero3.jpg"
            alt="Close up of a person's eye"
            layout="fill"
            objectFit="cover"
            className="opacity-100"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-offwhite via-brand-offwhite/50 to-transparent"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-left h-full flex items-end pb-20">
          <div className="w-full flex flex-col md:flex-row justify-between items-end">
            <div className="flex flex-col items-start max-w-3xl text-white/90 w-full md:w-auto mb-8 md:mb-0">
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-medium tracking-normal leading-tight">
                Vi Skapar Stilar
                <br />
                Som Håller
              </h1>
              <p className="text-xl font-medium mb-4 mt-4 md:mt-0">Frisör® Salong</p>
              <p className="mb-6 max-w-xs text-lg text-white block md:hidden">
                Vi hjälper dig att uttrycka din personlighet genom djärv design,
                vass strategi och smarta klippningar som skapar igenkänning,
                engagemang och långvarig stil.
              </p>
              <div className="block md:hidden">
                <AnimatedButton
                  href="/kontakt"
                  text="Boka tid"
                  textColor="text-white"
                  borderColor="border-white"
                  arrowBgColor="bg-white"
                  arrowColor="text-black"
                />
              </div>
            </div>
            <div className="hidden md:flex flex-col items-start max-w-xs text-lg text-white">
              <p className="mb-6">
                Vi hjälper dig att uttrycka din personlighet genom djärv design,
                vass strategi och smarta klippningar som skapar igenkänning,
                engagemang och långvarig stil.
              </p>
              <AnimatedButton
                href="/kontakt"
                text="Boka tid"
                textColor="text-white"
                borderColor="border-white"
                arrowBgColor="bg-white"
                arrowColor="text-black"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="content-container">
          <SectionTitle
            small="VÅRA MERITER"
            large="Vår Erfarenhet Talar För Sig Själv"
            className="mb-12"
          />
          <div className="stats-grid">
            <div className="stat-item">
              <p className="stat-number">
                <AnimatedCounter to={5000} />+
              </p>
              <h3 className="stat-title">Nöjda Kunder</h3>
              <p className="paragraph-description">
                Vi bygger långsiktiga relationer med våra fantastiska kunder.
              </p>
            </div>
            <div className="stat-item">
              <p className="stat-number">
                <AnimatedCounter to={10} />+
              </p>
              <h3 className="stat-title">Års Erfarenhet</h3>
              <p className="paragraph-description">
                Vårt team har över ett decennium av samlad erfarenhet.
              </p>
            </div>
            <div className="stat-item">
              <p className="stat-number">
                <AnimatedCounter to={3} />
              </p>
              <h3 className="stat-title">Prisbelönta Stylister</h3>
              <p className="paragraph-description">
                Våra stylister har vunnit flera priser för sin kreativitet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="content-section">
        <div className="content-container">
          <SectionTitle small="GALLERI" large="Vårt Arbete" className="mb-12" />
          <p className="paragraph-section">
            Ett urval av våra senaste projekt som visar vår expertis inom
            klippning, färgning och styling. Varje stil speglar vår passion för
            kreativitet och skönhet – upptäck hur vi kan förverkliga dina
            hårdrömmar.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Image
                src="/images/work2.png"
                alt="Fashion models"
                width={800}
                height={600}
                className="w-full object-cover"
              />
              <h3 className="card-title mt-4">Modern Stil</h3>
            </div>
            <div>
              <Image
                src="/images/work1.png"
                alt="Gift wrapping"
                width={800}
                height={600}
                className="w-full object-cover"
              />
              <h3 className="card-title mt-4">Kreativ Färgning</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            small="VAD VI ERBJUDER"
            large="Tjänster"
            className="mb-12"
          />
          <AnimatedText
            as="p"
            className="text-center max-w-2xl mx-auto text-gray-600 mb-16"
            delay={0.3}
          >
            Professionella frisörtjänster med fokus på kvalitet och precision.
            Våra erfarna stylister skapar den perfekta looken för dig.
          </AnimatedText>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Service Card 1 */}
            <AnimatedCard delay={0.1}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="relative overflow-hidden">
                  <Image
                    src="/images/klippningochskagg.png"
                    alt="Klippning och skägg"
                    width={800}
                    height={600}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 rounded-full text-sm font-medium text-white"
                    style={{
                      background: 'rgba(0, 0, 0, 0.7)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    Populärast
                  </span>
                </div>
              </div>

              <div
                className="p-6"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Klippning & Skägg</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">490 kr</div>
                    <div
                      className="text-sm text-gray-600 px-2 py-1 rounded-md inline-block mt-1"
                      style={{
                        background: 'rgba(255, 255, 255, 0.6)',
                        backdropFilter: 'blur(5px)',
                        WebkitBackdropFilter: 'blur(5px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                      }}
                    >
                      30 min
                    </div>
                  </div>
                </div>
                                <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                  Komplett service som inkluderar professionell klippning och precisionsskäggtrimning.
                  Perfekt för dig som vill ha en komplett makeover på en gång.
                </p>
                <AnimatedButton
                  href="/kontakt"
                  text="Boka"
                  textColor="text-black"
                  borderColor="border-black"
                  arrowBgColor="bg-black"
                  arrowColor="text-white"
                />
              </div>
            </div>
            </AnimatedCard>

            {/* Service Card 2 */}
            <AnimatedCard delay={0.2}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="relative overflow-hidden">
                  <Image
                    src="/images/klippning.png"
                    alt="Klippning"
                    width={800}
                    height={600}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
              </div>

              <div
                className="p-6"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Klippning</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">290 kr</div>
                    <div
                      className="text-sm text-gray-600 px-2 py-1 rounded-md inline-block mt-1"
                      style={{
                        background: 'rgba(255, 255, 255, 0.6)',
                        backdropFilter: 'blur(5px)',
                        WebkitBackdropFilter: 'blur(5px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                      }}
                    >
                      20 min
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                  Klassisk klippning utförd av våra erfarna stylister.
                  Snabb och effektiv service som ger dig en fräsch ny look.
                </p>
                <AnimatedButton
                  href="/kontakt"
                  text="Boka"
                  textColor="text-black"
                  borderColor="border-black"
                  arrowBgColor="bg-black"
                  arrowColor="text-white"
                />
              </div>
            </div>
            </AnimatedCard>

            {/* Service Card 3 */}
            <AnimatedCard delay={0.3}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="relative overflow-hidden">
                  <Image
                    src="/images/barn.png"
                    alt="Barnklippning"
                    width={800}
                    height={600}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 rounded-full text-sm font-medium text-white"
                    style={{
                      background: 'rgba(255, 165, 0, 0.9)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 165, 0, 0.3)',
                    }}
                  >
                    Barn
                  </span>
                </div>
              </div>

              <div
                className="p-6"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Barnklippning</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">240 kr</div>
                    <div
                      className="text-sm text-gray-600 px-2 py-1 rounded-md inline-block mt-1"
                      style={{
                        background: 'rgba(255, 255, 255, 0.6)',
                        backdropFilter: 'blur(5px)',
                        WebkitBackdropFilter: 'blur(5px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                      }}
                    >
                      20 min
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                  Specialanpassad klippning för barn i en trygg och rolig miljö.
                  Våra stylister har stor erfarenhet av att jobba med barn.
                </p>
                <AnimatedButton
                  href="/kontakt"
                  text="Boka"
                  textColor="text-black"
                  borderColor="border-black"
                  arrowBgColor="bg-black"
                  arrowColor="text-white"
                />
              </div>
            </div>
            </AnimatedCard>

            {/* Service Card 4 */}
            <AnimatedCard delay={0.4}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm ">
                <div className="relative overflow-hidden">
                  <Image
                    src="/images/skagg.png"
                    alt="Skäggtrimning"
                    width={800}
                    height={600}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div
                  className="p-6"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                  }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">Skägg Trimning</h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">200 kr</div>
                      <div
                        className="text-sm text-gray-600 px-2 py-1 rounded-md inline-block mt-1"
                        style={{
                          background: 'rgba(255, 255, 255, 0.6)',
                          backdropFilter: 'blur(5px)',
                          WebkitBackdropFilter: 'blur(5px)',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                        }}
                      >
                        20 min
                      </div>
                    </div>
                  </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                  Professionell skäggtrimning med precision och omsorg.
                  Vi formar ditt skägg för att komplettera din ansiktsform perfekt.
                </p>
                <AnimatedButton
                  href="/kontakt"
                  text="Boka"
                  textColor="text-black"
                  borderColor="border-black"
                  arrowBgColor="bg-black"
                  arrowColor="text-white"
                />
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            small="VÅR PROCESS"
            large="Process"
            className="mb-12"
          />
          <AnimatedText
            as="p"
            className="text-center max-w-2xl mx-auto text-gray-600 mb-16"
            delay={0.3}
          >
            För att säkerställa en smidig och enkel upplevelse för dig har vi
            skapat en enkel och effektiv process som hjälper oss att förstå
            dina önskemål från första stund.
          </AnimatedText>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.num}>
                <Image
                  src={step.img}
                  alt={step.title}
                  width={400}
                  height={500}
                  className="w-full object-cover h-64"
                />
                <div className="mt-6 text-left">
                  <p className="text-sm text-gray-400 border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center mb-4">
                    {step.num}
                  </p>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <button className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center mx-auto">
              <ArrowDown />
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <SectionTitle
            small="VILKA ÄR VI?"
            large="Om Frisör"
            className="mb-8"
          />
          <AnimatedText
            as="p"
            className="text-3xl md:text-4xl font-medium max-w-4xl mx-auto tracking-tight text-gray-800 mb-16"
            delay={0.4}
          >
            Vi är en modern salong som ligger i framkant av dagens hårmode. Vi
            blandar djärv innovation med tidlös kvalitet, och förblir
            flexibla, strategiska och drivna. Men vi är inte färdiga med att
            utvecklas - tillväxt och lärande driver allt vi gör.
          </AnimatedText>
          <AnimatedCard delay={0.5}>
            <div className="relative">
              <TeamCarousel teamMembers={teamMembers} />
            </div>
          </AnimatedCard>
          <AnimatedCard delay={0.6}>
            <div className="mt-12">
              <AnimatedButton
                href="/mot-oss"
                text="Möt oss"
                textColor="text-black"
                borderColor="border-black"
                arrowBgColor="bg-black"
                arrowColor="text-white"
              />
            </div>
          </AnimatedCard>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle small="PRENUMERATION" large="Månatlig Medlemskap" className="mb-16" />
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Plan
                key={index}
                name={plan.name}
                price={plan.price}
                desc={plan.desc}
                features={plan.features}
                icon={plan.icon}
                isFeatured={plan.isFeatured}
                onSubscribe={() => handleSubscribe(plan)}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedText delay={0.2}>
            <div className="flex justify-between items-center mb-12">
              <h2 className="section-title-large">Inspiration</h2>
              <Link
                href="/#blog"
                className="flex items-center gap-2 text-sm font-semibold uppercase border border-gray-300 rounded-full px-5 py-3 hover:bg-black hover:text-white transition-colors"
              >
                Alla Artiklar <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedText>
          <div className="grid md:grid-cols-3 gap-8">
            {insightsArticles.map((article, i) => (
              <AnimatedCard key={i} delay={0.3 + i * 0.1}>
                <Link href={`/article/${article.slug}`} className="group block">
                  <div>
                    <div className="relative overflow-hidden">
                      <Image
                        src={article.img}
                        alt={article.title}
                        width={600}
                        height={400}
                        className="w-full object-cover h-64 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                      <h3 className="text-xl font-semibold mb-3">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm font-medium">
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

      <section id="blog" className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedText delay={0.2}>
            <div className="flex justify-between items-center mb-12">
              <h2 className="section-title-large">Blogg</h2>
              <Link
                href="/#blog"
                className="flex items-center gap-2 text-sm font-semibold uppercase border border-gray-300 rounded-full px-5 py-3 hover:bg-black hover:text-white transition-colors"
              >
                Alla Artiklar <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedText>
          <div className="grid md:grid-cols-3 gap-8">
            {blogArticles.map((article, i) => (
              <AnimatedCard key={i} delay={0.3 + i * 0.1}>
                <Link href={article.slug ? `/blog/${article.slug}` : "#"} className="group block">
                  <div>
                    <div className="relative overflow-hidden">
                      <Image
                        src={article.img}
                        alt={article.title}
                        width={600}
                        height={400}
                        className="w-full object-cover h-64 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                      <h3 className="text-xl font-semibold mb-3">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm font-medium">
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


      <SubscriptionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={selectedPlan}
      />

      <Footer />
    </main>
  );
}
