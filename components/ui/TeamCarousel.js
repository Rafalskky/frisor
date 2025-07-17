'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const TeamCarousel = ({ teamMembers }) => {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);

  // Double the array for seamless loop
  const doubledMembers = [...teamMembers, ...teamMembers];

  // Animation variants for the button
  const navLinkVariants = {
    rest: { y: 0 },
    hover: { y: "-50%" },
  };

  const navLinkTransition = {
    duration: 0.3,
    ease: "easeInOut",
  };

    useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame
    const containerWidth = scrollContainer.scrollWidth / 2; // Half because we doubled the array

    const animate = () => {
      scrollPosition += scrollSpeed;

      // Reset position when we've scrolled through the first set of images
      if (scrollPosition >= containerWidth) {
        scrollPosition = 0;
      }

            scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [teamMembers]);

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {/* Carousel Container */}
      <div ref={scrollRef} className="flex h-full gap-1">
        {doubledMembers.map((member, index) => (
          <div key={index} className="flex-shrink-0" style={{ width: 'calc(25% - 0.75px)' }}>
            <Image
              src={member.src}
              alt={member.alt}
              width={400}
              height={500}
              className="w-full h-96 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Left Gradient */}
      <div className="absolute inset-y-0 left-0 w-48 pointer-events-none z-10" style={{
        background: 'linear-gradient(to right, #f6f6f6, #f6f6f6dd, #f6f6f688, transparent)'
      }}></div>

      {/* Right Gradient */}
      <div className="absolute inset-y-0 right-0 w-48 pointer-events-none z-10" style={{
        background: 'linear-gradient(to left, #f6f6f6, #f6f6f6dd, #f6f6f688, transparent)'
      }}></div>
    </div>
  );
};

export default TeamCarousel;
