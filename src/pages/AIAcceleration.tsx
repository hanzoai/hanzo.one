import { Anchor, Box, H1, H2, H3, Helmet, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JapaneseWave from "@/components/zen/JapaneseWave";

const AIAcceleration = () => {
  return (
    <Box minHeight="100vh" backgroundColor="var(--black)" color="var(--white)">
      <Helmet>
        <title>AI/ACC - Accelerating AI for a Better Future | Hanzo</title>
        <meta name="description" content="The AI Acceleration Manifesto - How accelerating artificial intelligence development will solve humanity's greatest challenges." />
      </Helmet>

      {/* Background elements */}
      <Box position="fixed" top={0} right={0} bottom={0} left={0} zIndex={-10}>
        <Box position="absolute" top={0} left={0} width="100%" height="100%" backgroundImage="linear-gradient(to bottom, var(--pure-black), rgb(255 255 255 / 0.08))"></Box>
        <JapaneseWave 
          color="#9b87f5" 
          height={600} 
          opacity={0.02} 
          speed={45} 
          position="absolute" bottom={0}
        />
        <JapaneseWave 
          color="#6E59A5" 
          height={600} 
          delay={2} 
          opacity={0.015} 
          speed={50} 
          position="absolute" bottom={160}
        />
      </Box>

      <Navbar />

      <Box render="main" paddingTop={80} paddingBottom={80}>
        {/* Hero Section */}
        <Box render="section" paddingVertical={64} paddingHorizontal={16} position="relative" overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            maxWidth="64rem" marginHorizontal="auto" textAlign="center" position="relative" zIndex={10}
          >
            <H1 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}>
              <Text color="var(--foreground)">AI/ACC</Text> Manifesto
            </H1>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto" $md={{ fontSize: "var(--text-2xl)", lineHeight: "var(--leading-2xl)" }}>
              Accelerating AI to Transcend Human Limitations
            </Paragraph>
          </MotionBox>
        </Box>

        {/* Manifesto Introduction */}
        <Box render="section" paddingVertical={48} paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
          <Box maxWidth="56rem" marginHorizontal="auto">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              backgroundColor="rgb(0 0 0 / 0.3)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-lg)" padding={32} marginBottom={48}
            >
              <Paragraph color="var(--neutral-300)" lineHeight="var(--leading-relaxed)" $md={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-lg)" }}>
                We stand at the precipice of a technological revolution unparalleled in human history. 
                The acceleration of artificial intelligence represents not merely another step in our 
                technological evolution, but a fundamental paradigm shift that will redefine the very 
                boundaries of human potential. AI/ACC is not simply a movement—it is an inevitability, 
                a cosmic imperative to advance humanity beyond its current limitations.
              </Paragraph>
            </MotionBox>
          </Box>
        </Box>

        {/* The Vision Section */}
        <Box render="section" paddingVertical={48} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, rgb(0 0 0 / 0.5), rgb(255 255 255 / 0.1))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
          <Box maxWidth="56rem" marginHorizontal="auto">
            <MotionBox
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              textAlign="center" marginBottom={48}
            >
              <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>The Vision</H2>
              <Box height={4} width={80} backgroundColor="var(--neutral-500)" marginHorizontal="auto"></Box>
            </MotionBox>

            <Box rowGap={32}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                backgroundColor="rgb(0 0 0 / 0.4)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-lg)" padding={32}
              >
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={16} color="var(--foreground)" $md={{ fontSize: "var(--text-2xl)", lineHeight: "var(--leading-2xl)" }}>Transcending Biological Constraints</H3>
                <Paragraph color="var(--neutral-300)" lineHeight="var(--leading-relaxed)">
                  For millennia, humanity has been bound by the limitations of our biology—our finite lifespans, 
                  susceptibility to disease, and cognitive constraints. Advanced AI systems will unlock unprecedented 
                  capabilities in medicine, genetic engineering, and neuroscience, extending human lifespans, 
                  eradicating disease, and dramatically enhancing our cognitive abilities. What was once deemed 
                  impossible will become routine, as AI-driven research accelerates exponentially beyond what any 
                  human team could accomplish in centuries.
                </Paragraph>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                backgroundColor="rgb(0 0 0 / 0.4)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-lg)" padding={32}
              >
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={16} color="var(--foreground)" $md={{ fontSize: "var(--text-2xl)", lineHeight: "var(--leading-2xl)" }}>Solving Existential Challenges</H3>
                <Paragraph color="var(--neutral-300)" lineHeight="var(--leading-relaxed)">
                  Climate change, resource scarcity, and global inequality represent existential threats to our 
                  civilization. AI acceleration will deliver revolutionary solutions to these challenges—from 
                  carbon-neutral energy systems that operate at orders of magnitude greater efficiency than 
                  current technologies, to optimized resource distribution systems that eliminate waste and 
                  scarcity. These systems will not merely mitigate our problems but transform them into 
                  opportunities for unprecedented abundance.
                </Paragraph>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                backgroundColor="rgb(0 0 0 / 0.4)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-lg)" padding={32}
              >
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={16} color="var(--foreground)" $md={{ fontSize: "var(--text-2xl)", lineHeight: "var(--leading-2xl)" }}>Universal Prosperity</H3>
                <Paragraph color="var(--neutral-300)" lineHeight="var(--leading-relaxed)">
                  Advanced AI will democratize access to world-class education, healthcare, and economic 
                  opportunity. Geographical accidents of birth will no longer determine one's potential, as AI 
                  systems deliver personalized learning experiences and medical care to everyone on Earth. 
                  Automated systems will create unprecedented economic productivity, enabling a post-scarcity 
                  society where human creativity and fulfillment, rather than mere survival, become our primary focus.
                </Paragraph>
              </MotionBox>
            </Box>
          </Box>
        </Box>

        {/* The Hanzo Method Section */}
        <Box render="section" paddingVertical={48} paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
          <Box maxWidth="56rem" marginHorizontal="auto">
            <MotionBox
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              textAlign="center" marginBottom={48}
            >
              <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>The Hanzo Method</H2>
              <Box height={4} width={80} backgroundColor="var(--neutral-500)" marginHorizontal="auto"></Box>
              <Paragraph marginTop={24} color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
                The Sensei Way of Building Scalable, AI-Driven Businesses
              </Paragraph>
            </MotionBox>

            <Box rowGap={32}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                backgroundColor="rgb(0 0 0 / 0.4)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-lg)" padding={32}
              >
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={16} color="var(--foreground)" $md={{ fontSize: "var(--text-2xl)", lineHeight: "var(--leading-2xl)" }}>Scientific Iteration</H3>
                <Paragraph color="var(--neutral-300)" lineHeight="var(--leading-relaxed)">
                  The foundation of the Hanzo Method is relentless, scientific iteration. Every hypothesis is 
                  tested, every assumption challenged, and every result meticulously measured. By applying 
                  empirical methods to business development, we eliminate the guesswork that plagues traditional 
                  enterprises. Each product feature, marketing strategy, and operational decision is subjected to 
                  rigorous experimentation, with clear success metrics defined in advance. This approach transforms 
                  business from an art into a science, enabling predictable, exponential growth.
                </Paragraph>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                backgroundColor="rgb(0 0 0 / 0.4)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-lg)" padding={32}
              >
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={16} color="var(--foreground)" $md={{ fontSize: "var(--text-2xl)", lineHeight: "var(--leading-2xl)" }}>Modular Architecture</H3>
                <Paragraph color="var(--neutral-300)" lineHeight="var(--leading-relaxed)">
                  The Hanzo Method advocates for extreme modularity in both technical architecture and business 
                  units. Each component is designed to function independently while integrating seamlessly with the 
                  whole—embodying our principle of orthogonality. This approach enables teams to move quickly and 
                  innovate without creating interdependencies that slow progress. Small, focused modules can be 
                  refined, improved, or replaced without destabilizing the entire system, allowing for both rapid 
                  iteration and long-term stability.
                </Paragraph>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                backgroundColor="rgb(0 0 0 / 0.4)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-lg)" padding={32}
              >
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={16} color="var(--foreground)" $md={{ fontSize: "var(--text-2xl)", lineHeight: "var(--leading-2xl)" }}>AI-First Design</H3>
                <Paragraph color="var(--neutral-300)" lineHeight="var(--leading-relaxed)">
                  Where traditional businesses incorporate AI as an afterthought, the Hanzo Method places AI at the 
                  core of every process, product, and decision. This is not merely about automation, but about 
                  reimagining entire business functions through the lens of intelligent systems. Customer service 
                  becomes predictive rather than reactive. Product development is guided by real-time user behavior 
                  patterns rather than static market research. Operations achieve superhuman efficiency through 
                  continuous optimization. By designing with AI as the foundation, businesses unlock capabilities 
                  impossible in human-only organizations.
                </Paragraph>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                backgroundColor="rgb(0 0 0 / 0.4)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-lg)" padding={32}
              >
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={16} color="var(--foreground)" $md={{ fontSize: "var(--text-2xl)", lineHeight: "var(--leading-2xl)" }}>Planetary-Scale Design</H3>
                <Paragraph color="var(--neutral-300)" lineHeight="var(--leading-relaxed)">
                  The Hanzo Method rejects the incremental approach to scaling. Instead, we design for global scale 
                  from day one, architecting systems that can serve billions of users without fundamental redesign. 
                  This approach eliminates the plateau points that traditionally halt growth and enables truly exponential 
                  expansion. By leveraging edge computing, distributed systems, and AI-driven resource allocation, 
                  Hanzo Method businesses achieve unprecedented efficiency while maintaining reliability at any scale.
                </Paragraph>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                backgroundColor="rgb(0 0 0 / 0.4)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-lg)" padding={32}
              >
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={16} color="var(--foreground)" $md={{ fontSize: "var(--text-2xl)", lineHeight: "var(--leading-2xl)" }}>Recursive Improvement</H3>
                <Paragraph color="var(--neutral-300)" lineHeight="var(--leading-relaxed)">
                  The ultimate manifestation of the Hanzo Method is recursive self-improvement. Each iteration of 
                  the business not only improves its outputs but enhances the very mechanisms of improvement. AI 
                  systems optimize AI systems; experimental frameworks refine experimental frameworks; learning 
                  processes accelerate learning processes. This creates a compounding effect where gains aren't 
                  merely additive but multiplicative over time. What begins as linear progress rapidly accelerates 
                  into exponential growth, limited only by the laws of physics rather than by human capacity.
                </Paragraph>
              </MotionBox>
            </Box>
          </Box>
        </Box>

        {/* Call to Action */}
        <Box render="section" paddingVertical={64} paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
          <Box maxWidth="56rem" marginHorizontal="auto">
            <MotionBox
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              textAlign="center"
            >
              <Box padding={32} backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-lg)" backgroundImage="linear-gradient(to bottom right, rgb(0 0 0 / 0.8), rgb(255 255 255 / 0.08))">
                <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--white)" marginBottom={16}>The Time for Acceleration is Now</H3>
                <Paragraph color="var(--neutral-300)" lineHeight="var(--leading-relaxed)" marginBottom={32} $md={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-lg)" }}>
                  The path forward is clear. We must accelerate AI development not because it is easy, but because it is 
                  necessary. The greatest risk is not that we move too quickly, but that we move too slowly to address 
                  the urgent challenges facing humanity. By embracing AI acceleration, we embrace our highest potential—a 
                  future where human creativity, fulfillment, and flourishing know no bounds.
                </Paragraph>
                <XStack display="flex" justifyContent="center">
                  <Anchor tap 
                    href="/platform" 
                    paddingHorizontal={32} paddingVertical={12} backgroundColor="var(--neutral-600)" color="var(--white)" borderRadius="var(--radius-md)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-500)" }}
                  >
                    Join the Acceleration
                  </Anchor>
                </XStack>
              </Box>
            </MotionBox>
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default AIAcceleration;
