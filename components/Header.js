"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedButton from "./ui/AnimatedButton";

const navLinkVariants = {
  rest: { y: 0 },
  hover: { y: "-50%" },
};

const navLinkTransition = {
  duration: 0.3,
  ease: "easeInOut",
};

const AnimatedNavLink = ({ href, children }) => (
  <Link href={href}>
    <motion.span
      className="relative block overflow-hidden h-5 text-sm font-medium uppercase tracking-wider"
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      <motion.span
        className="flex flex-col"
        variants={navLinkVariants}
        transition={navLinkTransition}
      >
        <span className="h-5 flex items-center">{children}</span>
        <span className="h-5 flex items-center">{children}</span>
      </motion.span>
    </motion.span>
  </Link>
);

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-40" style={{
      backdropFilter: 'blur(5px)',
      background: 'linear-gradient(rgba(255, 254, 250,0.3) 10%, rgba(255, 254, 250, 0) 100%)',
      WebkitMask: 'linear-gradient(rgb(0, 0, 0) 10%, rgba(0, 0, 0, 0) 100%)',
      mask: 'linear-gradient(rgb(0, 0, 0) 95%, rgba(0, 0, 0, 0) 100%)',
  }}>
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center h-20">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          FRISÖR®
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <AnimatedNavLink href="/">Hem</AnimatedNavLink>
          <AnimatedNavLink href="/#gallery">Galleri</AnimatedNavLink>
          <AnimatedNavLink href="/#about">Om Oss</AnimatedNavLink>
          <AnimatedNavLink href="/#blog">Blogg</AnimatedNavLink>
        </nav>
        <div className="hidden md:block">
          <AnimatedButton href="/kontakt" text="Kontakt" />
        </div>
        <motion.button
            className="md:hidden relative block overflow-hidden h-5 text-sm font-medium uppercase tracking-wider"
            whileHover="hover"
            initial="rest"
            animate="rest"
        >
            <motion.span
                className="flex flex-col"
                variants={navLinkVariants}
                transition={navLinkTransition}
            >
                <span className="h-5 flex items-center">Menu</span>
                <span className="h-5 flex items-center">Menu</span>
            </motion.span>
        </motion.button>
      </div>
    </div>
  </header>
);

export default Header;
