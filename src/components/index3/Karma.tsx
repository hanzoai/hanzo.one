import { Box, Button, ChromeText, Grid, H3, MotionBox, Paragraph, Text, XStack } from '@/gui'
import React from "react";
import { motion } from "framer-motion";
import { Leaf, Recycle, ThermometerSun } from "lucide-react";
const Karma = () => {
  return <Box render="section" paddingVertical={128} paddingHorizontal={16} backgroundColor="var(--black)" position="relative" overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box position="absolute" top={80} right={80} width={256} height={256} backgroundColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      <Box position="absolute" bottom={-128} left={-128} width={384} height={384} backgroundColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={64} alignItems="center" $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <div>
            <MotionBox initial={{
            opacity: 0,
            y: -20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }} marginBottom={16}>
              <Text display="inline-block" paddingHorizontal={16} paddingVertical={4} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500">
                AI Engineering Platform
              </Text>
            </MotionBox>
            <MotionBox initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }}>
              <ChromeText as="h2" fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>
                Sustainable AI for the Future
              </ChromeText>
              <Box fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={32} rowGap={16}>
                <p>
                  At Hanzo, we believe AI should empower humanity while respecting our planet. Our commitment to sustainable AI development is reflected in every product we build.
                </p>
                <p>
                  From energy-efficient infrastructure to carbon-neutral operations, we're creating AI that's as sustainable as it is powerful.
                </p>
              </Box>
            </MotionBox>
            
            <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} marginBottom={40} $sm={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
              <MotionBox initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: 0.1
            }} display="flex" flexDirection="column" alignItems="center" textAlign="center" padding={16} borderRadius="var(--radius-lg)" backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--neutral-800)">
                <XStack width={48} height={48} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" display="flex" alignItems="center" justifyContent="center" marginBottom={12}>
                  <Leaf size={24} color="var(--foreground)" />
                </XStack>
                <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" marginBottom={4}>Carbon Neutral</H3>
                <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Offset all carbon emissions</Paragraph>
              </MotionBox>
              
              <MotionBox initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: 0.2
            }} display="flex" flexDirection="column" alignItems="center" textAlign="center" padding={16} borderRadius="var(--radius-lg)" backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--neutral-800)">
                <XStack width={48} height={48} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" display="flex" alignItems="center" justifyContent="center" marginBottom={12}>
                  <ThermometerSun size={24} color="var(--foreground)" />
                </XStack>
                <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" marginBottom={4}>Energy Efficient</H3>
                <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">90% lower energy usage</Paragraph>
              </MotionBox>
              
              <MotionBox initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: 0.3
            }} display="flex" flexDirection="column" alignItems="center" textAlign="center" padding={16} borderRadius="var(--radius-lg)" backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--neutral-800)">
                <XStack width={48} height={48} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" display="flex" alignItems="center" justifyContent="center" marginBottom={12}>
                  <Recycle size={24} color="var(--foreground)" />
                </XStack>
                <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" marginBottom={4}>Renewable Focus</H3>
                <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">100% renewable data centers</Paragraph>
              </MotionBox>
            </Grid>
            
            <MotionBox initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.4
          }} display="flex" flexDirection="row" gap={16}>
              <Button variant="outline" color="var(--white)" borderColor="rgb(255 255 255 / 0.2)" backgroundColor="rgb(255 255 255 / 0.05)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}>
                <a href="/leadership">Our Leadership</a>
              </Button>
              <Button variant="outline" color="var(--white)" borderColor="rgb(255 255 255 / 0.2)" backgroundColor="rgb(255 255 255 / 0.05)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}>
                <a href="/careers">Join Our Team</a>
              </Button>
            </MotionBox>
          </div>
          
          <MotionBox initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={32}>
            <XStack display="flex" alignItems="flex-start" marginBottom={24}>
              <Box width={64} height={64} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-800)" marginRight={16}></Box>
              <div>
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={4}>Zach Kelling</H3>
                <Paragraph color="var(--neutral-400)">CTO, Hanzo AI</Paragraph>
              </div>
            </XStack>
            
            <Box render="blockquote" fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" fontStyle="italic" marginBottom={24}>
              "Our mission at Hanzo is to democratize access to Amazon-level AI infrastructure while maintaining an unwavering commitment to sustainability. We've achieved incredible growth by providing powerful AI tools that don't compromise our environmental values."
            </Box>
            
            <Box render="blockquote" fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" fontStyle="italic">
              "By optimizing our infrastructure and operations, we're proving that cutting-edge AI and environmental responsibility can go hand in hand. This isn't just good karma—it's good business."
            </Box>
          </MotionBox>
        </Grid>
      </Box>
    </Box>;
};
export default Karma;