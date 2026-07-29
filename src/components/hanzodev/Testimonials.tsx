import { Anchor, Box, Grid, H2, MotionBox, Paragraph, Text, XStack } from '@/gui'
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const BRAND_COLOR = "var(--foreground)";

const testimonials = [
  {
    company: "Ramp",
    logo: "R",
    quote: "Hanzo Dev has dramatically accelerated our team's coding efficiency. I can now write EDA code in a notebook—pulling data, training a model, and evaluating it with basic metrics—and then ask Hanzo to convert that into a Metaflow pipeline. This process saves 1-2 days of routine (and often boring!) work per model.",
    author: "Anton Biryukov",
    title: "Staff Software Engineer",
    link: "/customers/ramp",
  },
  {
    company: "Intercom",
    logo: "I",
    quote: "With Hanzo, we're not just automating customer service—we're elevating it to truly human quality. This lets support teams think more strategically about customer experience and what makes interactions genuinely valuable.",
    author: "Fergal Reid",
    title: "VP of AI",
    link: "/customers/intercom",
  },
  {
    company: "Notion",
    logo: "N",
    quote: "Hanzo Dev is moving our team up a level: we decide what needs to happen, and smooth the process so it can build and verify end-to-end. A big part of my job now is to keep as many instances of Hanzo Dev busy as possible.",
    author: "Simon Last",
    title: "Co-founder",
    link: "/customers/notion",
  },
];

const companyLogos = [
  "Ramp", "Intercom", "Notion", "Stripe", "Shopify", "Vercel",
  "Linear", "Figma", "Pitch", "Loom", "Discord", "Slack",
];

const Testimonials = () => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--pure-black)">
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          textAlign="center" marginBottom={64}
        >
          <Paragraph
            display="inline-flex" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" borderRadius="var(--radius-full)" paddingHorizontal={16} paddingVertical={8} borderWidth={1} marginBottom={24}
            style={{ color: BRAND_COLOR, borderColor: `${BRAND_COLOR}4d` }}
          >
            Testimonials
          </Paragraph>
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>
            What developers are saying
          </H2>
        </MotionBox>

        {/* Company logos marquee */}
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          flexDirection="row" display="flex" justifyContent="center" gap={32} marginBottom={64} overflow="hidden"
        >
          <MotionBox flexDirection="row" animate={{ x: ["0%", "-100%"] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} display="flex" gap={32}>
            {[...companyLogos, ...companyLogos].map((logo, i) => (
              <Box
                key={i}
                color="var(--neutral-600)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500" whiteSpace="nowrap"
              >
                {logo}
              </Box>
            ))}
          </MotionBox>
        </MotionBox>

        {/* Testimonial cards */}
        <Grid display="grid" gap={24} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {testimonials.map((testimonial, index) => (
            <MotionBox
              key={testimonial.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              
              group backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)" }}
            >
              {/* Company logo */}
              <XStack display="flex" alignItems="center" gap={12} marginBottom={16}>
                <XStack
                  width={40} height={40} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" color="var(--foreground)" fontWeight="700"
                  style={{ backgroundColor: `${BRAND_COLOR}40` }}
                >
                  {testimonial.logo}
                </XStack>
                <Text color="var(--foreground)" fontWeight="600">{testimonial.company}</Text>
              </XStack>

              {/* Quote */}
              <Box render="blockquote" color="var(--neutral-300)" fontSize="var(--text-sm)" lineHeight="var(--leading-relaxed)" marginBottom={24}>
                "{testimonial.quote}"
              </Box>

              {/* Author */}
              <XStack display="flex" alignItems="center" justifyContent="space-between">
                <div>
                  <Box color="var(--foreground)" fontWeight="500" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{testimonial.author}</Box>
                  <Box color="var(--neutral-500)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">{testimonial.title}</Box>
                </div>
                <Anchor tap
                  href={testimonial.link}
                  fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" display="flex" alignItems="center" gap={4} opacity={0} transition="opacity var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ opacity: 1 }}
                  style={{ color: BRAND_COLOR }}
                >
                  Read story
                  <ArrowRight size={12} />
                </Anchor>
              </XStack>
            </MotionBox>
          ))}
        </Grid>
      </Box>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </Box>
  );
};

export default Testimonials;
