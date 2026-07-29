import { Box, Grid, H2, H3, H4, MotionBox, Paragraph, XStack } from '@/gui'

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    company: "Damon Motorcycles",
    quote: "Hanzo has revolutionized our approach to electric motorcycle development. Their platform gives us the tools to innovate at a pace that would be impossible with traditional infrastructure.",
    author: "Jay Giraud",
    role: "Founder & CEO at Damon Motorcycles",
    avatar: "/placeholder.svg"
  },
  {
    company: "SKULLY",
    quote: "Working with Hanzo has transformed our ability to create the highest successfully funded Indiegogo project in history. Their DX platform streamlines our development processes while maintaining the highest standards of quality and safety.",
    author: "Marcus Weller",
    role: "CEO at SKULLY",
    avatar: "/placeholder.svg"
  },
  {
    company: "Bellabeat",
    quote: "As a company focused on women's health technology, we need partners who understand both tech and human needs. Hanzo has been instrumental in helping us scale our infrastructure while maintaining the personal touch our customers expect.",
    author: "Sandro Mur",
    role: "Co-founder & CEO at Bellabeat",
    avatar: "/placeholder.svg"
  },
  {
    company: "Karma",
    quote: "Hanzo's platform revolutionized our growth strategy and catalyzed sales for our crowdfunding campaign. Their AI-driven insights helped us connect with our audience in ways we never thought possible, making our latest collection launch our most successful to date.",
    author: "Antje Worring",
    role: "CEO at Karma Fashion",
    avatar: "/placeholder.svg"
  },
  {
    company: "Triller",
    quote: "With Trillerfest reaching over 169M people, Hanzo's platform has been essential to our success. Their scalable solutions have allowed us to deliver exceptional user experiences at a global scale.",
    author: "Vincent Butta",
    role: "Board Member at Triller",
    avatar: "/placeholder.svg"
  },
  {
    company: "Lifemed AI",
    quote: "Hanzo's AI Cloud and DX Platform have been transformative for our healthcare AI initiatives. Their solution enables us to deploy sophisticated ML models with confidence while meeting strict compliance requirements.",
    author: "Matthew Joynes",
    role: "Co-founder at Lifemed AI",
    avatar: "/placeholder.svg"
  }
];

const TrustedBy = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Box 
      ref={containerRef} 
      render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--black)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}
    >
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={80}
        >
          <H2 
            fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="500" marginBottom={24} backgroundImage="linear-gradient(90deg, var(--neutral-400), var(--foreground), var(--neutral-400))" backgroundClip="text" color="transparent" $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}
            style={{
              backgroundPosition: `${(mousePosition.x / (containerRef.current?.offsetWidth || 1)) * 100}% ${(mousePosition.y / (containerRef.current?.offsetHeight || 1)) * 100}%`,
            }}
          >
            Trusted by the best in business
          </H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Industry leaders across various sectors rely on Hanzo for their technological needs. Here's what they have to say.
          </Paragraph>
        </MotionBox>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {testimonials.map((testimonial, index) => (
            <MotionBox
              key={testimonial.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              backgroundColor="rgb(0 0 0 / 0.5)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderRadius="var(--radius-xl)" padding={32} borderWidth={1} borderColor="rgb(255 255 255 / 0.2)"
            >
              <Box marginBottom={16}>
                <H3 
                  fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500" backgroundImage="linear-gradient(90deg, var(--neutral-400), var(--foreground), var(--neutral-400))" backgroundClip="text" color="transparent"
                  style={{
                    backgroundPosition: `${(mousePosition.x / (containerRef.current?.offsetWidth || 1)) * 100}% ${(mousePosition.y / (containerRef.current?.offsetHeight || 1)) * 100}%`,
                  }}
                >
                  {testimonial.company}
                </H3>
              </Box>
              
              <Paragraph color="var(--neutral-300)" marginBottom={24} lineHeight="var(--leading-relaxed)">"{testimonial.quote}"</Paragraph>
              
              <XStack display="flex" alignItems="center">
                <Box marginRight={16}>
                  <Box display="inline-block"
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    render="img" height={48} width={48} borderRadius="var(--radius-full)" objectFit="cover" backgroundColor="var(--neutral-900)"
                  />
                </Box>
                <div>
                  <H4 fontWeight="500" color="var(--white)">{testimonial.author}</H4>
                  <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">{testimonial.role}</Paragraph>
                </div>
              </XStack>
            </MotionBox>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default TrustedBy;
