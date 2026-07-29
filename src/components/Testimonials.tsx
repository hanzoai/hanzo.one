import { Box, Button, Grid, H2, H3, H4, MotionBox, Paragraph, ScrollArea, XStack, YStack } from '@/gui'

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const testimonials = [{
  quote: "Hanzo has helped us to streamline our complex challenges and processes. Their suite of tools has made it easier for us to launch, scale, and innovate our business.",
  author: "Jennifer Smith",
  role: "Founder & CEO, Damon Motorcycles"
}, {
  quote: "Hanzo's digital solutions have empowered us to redefine success. Their platform has provided us with the tools we need to accelerate our growth and expand our reach.",
  author: "Marcus Chen",
  role: "Product Lead, Skully AR-1"
}, {
  quote: "We are impressed with Hanzo's pioneering approach to digital solutions. Their platform has helped us to transcend traditional boundaries and achieve new levels of success.",
  author: "Sarah Johnson",
  role: "CTO, Bellabeat"
}];

const brandLogos = [{
  name: "Sensei",
  logo: "https://sensei.partners/logo.png"
}, {
  name: "Damon Motorcycles",
  logo: "/placeholder.svg"
}, {
  name: "Skully AR-1",
  logo: "/placeholder.svg"
}, {
  name: "Triller",
  logo: "/placeholder.svg"
}, {
  name: "Bellabeat",
  logo: "/placeholder.svg"
}, {
  name: "Arca",
  logo: "/placeholder.svg"
}, {
  name: "ZOO",
  logo: "/placeholder.svg"
}, {
  name: "LUX",
  logo: "/placeholder.svg"
}];

const caseStudies = [{
  title: "Damon Motorcycles: Revolutionizing Electric Mobility",
  description: "How we helped Damon Motorcycles achieve unprecedented growth in their electric motorcycle platform through innovative digital solutions.",
  stats: {
    growth: "300%",
    timeframe: "6 months",
    roi: "450%"
  },
  videoUrl: "https://www.youtube.com/embed/your-video-id",
  learnMoreUrl: "https://sensei.group"
}, {
  title: "Skully AR-1: Transforming Motorcycle Safety",
  description: "A comprehensive digital transformation that revolutionized the AR helmet industry and had a record breaking crowdfunding campaign in first 24 hours.",
  stats: {
    efficiency: "200%",
    timeframe: "12 months",
    impact: "85%+"
  },
  videoUrl: "https://www.youtube.com/embed/your-video-id",
  learnMoreUrl: "https://sensei.group"
}];

const Testimonials = () => {
  return <Box render="section" paddingVertical={80} backgroundColor="rgb(0 0 0 / 0.5)">
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <Box textAlign="center" marginBottom={64}>
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontFamily="var(--font-display)" color="var(--white)">Our Impact</H2>
          <Paragraph marginTop={16} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-300)">Transforming businesses through innovation.</Paragraph>
        </Box>

        {/* Brand Logos Scroll Area */}
        <Box marginBottom={64}>
          <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontFamily="var(--font-display)" color="var(--white)" marginBottom={24}>Trusted By Industry Leaders</H3>
          <ScrollArea width="100%" whiteSpace="nowrap" borderRadius="var(--radius-lg)">
            <XStack display="flex" columnGap={32} padding={16}>
              {brandLogos.map((brand, index) => <MotionBox key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} flexShrink={0}>
                  <Box display="inline-block" src={brand.logo} alt={brand.name} render="img" height={48} width="auto" objectFit="contain" opacity={0.7} transition="opacity var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ opacity: 1 }} />
                </MotionBox>)}
            </XStack>
          </ScrollArea>
        </Box>

        {/* Case Studies */}
        <Box marginBottom={64}>
          <XStack display="flex" justifyContent="space-between" alignItems="center" marginBottom={32}>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontFamily="var(--font-display)" color="var(--white)">Featured Case Studies</H3>
            <Button variant="ghost" color="var(--white)">
              View All Case Studies <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
            </Button>
          </XStack>
          
          {/* Number milestone section - modified to use numbers and responsive layout */}
          <YStack display="flex" flexDirection="column" justifyContent="space-between" marginBottom={32} $md={{ flexDirection: "row" }}>
            <XStack display="flex" marginBottom={24} $md={{ alignItems: "center", columnGap: 24, marginBottom: 0 }}>
              <YStack display="flex" flexDirection="column" $md={{ flexDirection: "row", alignItems: "center" }}>
                <XStack display="flex" alignItems="center" marginBottom={16} $md={{ marginBottom: 0 }}>
                  <XStack width={32} height={32} borderRadius="var(--radius-full)" backgroundColor="rgb(255 255 255 / 0.1)" display="flex" alignItems="center" justifyContent="center" color="var(--white)" fontWeight="600" marginRight={12}>1</XStack>
                  <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500" color="var(--white)">Analyze</H4>
                </XStack>
              </YStack>
            </XStack>
            
            <XStack display="flex" marginBottom={24} $md={{ alignItems: "center", columnGap: 24, marginBottom: 0 }}>
              <YStack display="flex" flexDirection="column" $md={{ flexDirection: "row", alignItems: "center" }}>
                <XStack display="flex" alignItems="center" marginBottom={16} $md={{ marginBottom: 0 }}>
                  <XStack width={32} height={32} borderRadius="var(--radius-full)" backgroundColor="rgb(255 255 255 / 0.1)" display="flex" alignItems="center" justifyContent="center" color="var(--white)" fontWeight="600" marginRight={12}>2</XStack>
                  <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500" color="var(--white)">Optimize</H4>
                </XStack>
              </YStack>
            </XStack>
            
            <XStack display="flex" $md={{ alignItems: "center", columnGap: 24 }}>
              <YStack display="flex" flexDirection="column" $md={{ flexDirection: "row", alignItems: "center" }}>
                <XStack display="flex" alignItems="center">
                  <XStack width={32} height={32} borderRadius="var(--radius-full)" backgroundColor="rgb(255 255 255 / 0.1)" display="flex" alignItems="center" justifyContent="center" color="var(--white)" fontWeight="600" marginRight={12}>3</XStack>
                  <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500" color="var(--white)">Scale</H4>
                </XStack>
              </YStack>
            </XStack>
          </YStack>
          
          <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
            {caseStudies.map((study, index) => <MotionBox key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} backgroundColor="var(--surface-card-emphasis)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderRadius="var(--radius-xl)" overflow="hidden">
                <Box aspectRatio={1.7777777777777777} width="100%">
                  <Box display="inline-block" src={study.videoUrl} render="iframe" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Box>
                </Box>
                <Box padding={24}>
                  <H4 color="var(--white)" marginBottom={8} fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="400">{study.title}</H4>
                  <Paragraph color="var(--neutral-300)" marginBottom={16}>{study.description}</Paragraph>
                  <Grid display="grid" gridTemplateColumns="repeat(3, minmax(0, 1fr))" gap={16} marginBottom={16}>
                    {Object.entries(study.stats).map(([key, value], i) => <Box key={i} textAlign="center">
                        <Box fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--white)">{value}</Box>
                        <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">{key}</Box>
                      </Box>)}
                  </Grid>
                  <Button variant="outline" width="100%" onClick={() => window.open(study.learnMoreUrl, '_blank')}>
                    Learn More <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
                  </Button>
                </Box>
              </MotionBox>)}
          </Grid>
        </Box>
        
        {/* Testimonials */}
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {testimonials.map((testimonial, index) => <MotionBox key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} padding={24} backgroundColor="var(--surface-card-emphasis)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderRadius="var(--radius-xl)" outlineWidth={1} outlineColor="rgb(255 255 255 / 0.1)" outlineStyle="solid">
              <Paragraph color="var(--neutral-300)" fontStyle="italic">{testimonial.quote}</Paragraph>
              <Box marginTop={16}>
                <Paragraph color="var(--white)" fontWeight="600">{testimonial.author}</Paragraph>
                <Paragraph color="var(--neutral-400)">{testimonial.role}</Paragraph>
              </Box>
            </MotionBox>)}
        </Grid>
      </Box>
    </Box>;
};

export default Testimonials;
