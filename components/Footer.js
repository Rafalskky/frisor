import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-offwhite pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 text-sm mb-20">
          <div>
            <h4 className="font-semibold mb-4">Kontakta Oss</h4>
            <a
              href="mailto:INFO@FRISOR.SE"
              className="flex items-center gap-3 mb-2"
            >
              <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
                <ArrowRight size={14} />
              </span>
              INFO@FRISOR.SE
            </a>
            <a href="tel:+46701234567" className="hover:text-black">
              (+46) 70 123 45 67
            </a>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Vår Adress</h4>
            <p className="text-gray-600">
              Frisör Salong AB
              <br />
              Drottninggatan 24,
              <br />
              111 51 Stockholm,
              <br />
              Sverige
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Följ oss</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-black">
                  TikTok
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  X
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Meny</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/" className="hover:text-black">
                  Hem
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="hover:text-black">
                  Galleri
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-black">
                  Om Oss
                </Link>
              </li>
              <li>
                <Link href="/#blog" className="hover:text-black">
                  Blogg
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-black">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-8xl md:text-[200px] font-bold tracking-tighter leading-none">
            FRISÖR
          </h2>
        </div>
      </div>
    </footer>
  );
}
