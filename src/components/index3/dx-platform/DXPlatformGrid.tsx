import { Box, Button, ChromeText, Grid, Link, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import DXPlatformCard from "./DXPlatformCard";
import { dxPlatformData } from "./dxPlatformData";


interface DXPlatformGridProps {
  isHovered: string | null;
  setIsHovered: (id: string | null) => void;
}

const DXPlatformGrid: React.FC<DXPlatformGridProps> = ({ isHovered, setIsHovered }) => {
  return (
    <Box rowGap={32}>
      {/* Enhanced Platform Visual with Grid Layout */}
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        marginBottom={48}
      >
        <Box position="relative" height={320} width="100%" backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-xl)" overflow="hidden" borderWidth={1} borderColor="var(--neutral-800)">
          <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.1), rgb(255 255 255 / 0.1))"></Box>
          
          {/* Background grid pattern with enhanced visibility */}
          <Grid position="absolute" top={0} right={0} bottom={0} left={0} display="grid" gridTemplateColumns="repeat(16, minmax(0, 1fr))" gridTemplateRows="repeat(8, minmax(0, 1fr))" gap={16} padding={16} opacity={0.3}>
            {Array(16 * 8).fill(0).map((_, i) => (
              <Box key={i} borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-sm)"></Box>
            ))}
          </Grid>
          
          {/* Central platform hub */}
          <Box position="absolute" top="50%" left="50%" x="-50%" y="-50%">
            <XStack width={112} height={112} borderRadius="var(--radius-full)" borderWidth={1} borderColor="var(--border-strong)" display="flex" alignItems="center" justifyContent="center" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))">
              <Text fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" color="var(--white)">Hanzo DX</Text>
            </XStack>
            
            {/* Connection lines to product categories */}
            <Box position="absolute" top="50%" left="50%" x="-50%" y="-50%" width="100%" height="100%">
              {dxPlatformData.slice(0, 12).map((platform, index) => {
                const angle = (index / 12) * Math.PI * 2;
                const distance = 180;
                const x = Math.cos(angle) * distance;
                const y = Math.sin(angle) * distance;
                
                return (
                  <React.Fragment key={platform.id}>
                    <Box 
                      position="absolute" width={2} backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))"
                      style={{
                        height: distance,
                        transform: `rotate(${angle + Math.PI/2}rad)`,
                        transformOrigin: 'top',
                        top: 0,
                        left: '50%'
                      }}
                    />
                    <XStack 
                      position="absolute" padding={8} borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--border-strong)" display="flex" alignItems="center" justifyContent="center" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))"
                      style={{
                        width: '80px',
                        height: '40px',
                        transform: `translate(${x}px, ${y}px)`,
                        top: '50%',
                        left: '50%'
                      }}
                      onMouseEnter={() => setIsHovered(platform.id)}
                      onMouseLeave={() => setIsHovered(null)}
                    >
                      <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" color="var(--white)" whiteSpace="nowrap">{platform.title}</Text>
                    </XStack>
                  </React.Fragment>
                );
              })}
            </Box>
          </Box>
        </Box>
      </MotionBox>
      
      {/* Products grid */}
      <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={16} $sm={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }} $xl={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }} $md={{ gap: 24 }}>
        {/* Display all platform cards */}
        {dxPlatformData.map((platform) => (
          <DXPlatformCard
            key={platform.id}
            id={platform.id}
            title={platform.title}
            description={platform.description}
            features={platform.features}
            icon={platform.icon}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
            color={platform.color}
          />
        ))}

        {/* Updated "Explore More" card */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          onMouseEnter={() => setIsHovered("more")}
          onMouseLeave={() => setIsHovered(null)}
        >
          <Link to="/platform" group backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" height="100%" display="flex" flexDirection="column" hoverStyle={{ backgroundColor: "var(--surface-card)" }}>
            <XStack height={48} width={48} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" marginBottom={16} transition="color, background-color, border-color, fill, stroke 300ms cubic-bezier(.4,0,.2,1)" backgroundColor="var(--surface-card-emphasis)" $group-hover={{ backgroundColor: "var(--surface-card)" }}>
              <Box display="inline-block" xmlns="http://www.w3.org/2000/svg" render="svg" height={24} width={24} color="var(--foreground)" transition="color, background-color, border-color, fill, stroke 300ms cubic-bezier(.4,0,.2,1)" $group-hover={{ color: "var(--foreground)" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </Box>
            </XStack>
            <ChromeText as="h3" fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8}>
              Explore More
            </ChromeText>
            <Paragraph color="var(--neutral-300)" marginBottom={16} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
              Discover our complete DX Platform and developer tools ecosystem
            </Paragraph>
            <Box marginTop="auto">
              <Button 
                color="var(--white)" width="100%" backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-600))" hoverStyle={{ backgroundImage: "linear-gradient(to right, var(--neutral-500), var(--neutral-500))" }}
                radius="full"
              >
                View All Tools
              </Button>
            </Box>
          </Link>
        </MotionBox>
      </Grid>

      {/* Get Started Free Section */}
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        marginTop={64} padding={32} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))"
      >
        <Box maxWidth="56rem" marginHorizontal="auto" textAlign="center">
          <ChromeText as="h2" fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={16} $md={{ fontSize: "var(--text-3xl)", lineHeight: "var(--leading-3xl)" }}>
            Start Building Today, Risk-Free
          </ChromeText>
          <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-300)" marginBottom={24}>
            Sign up now and receive $5 in free credits. Earn an additional $5 credit for every friend who joins through your referral link.
          </Paragraph>
          <Button 
            asChild
            size="lg"
            paddingHorizontal={32} paddingVertical={12} color="var(--white)" fontWeight="500" boxShadow="0 10px 15px -3px rgb(0 0 0 / .35)" transition="all 300ms cubic-bezier(.4,0,.2,1)" backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-600))" hoverStyle={{ backgroundImage: "linear-gradient(to right, var(--neutral-500), var(--neutral-500))" }}
            radius="full"
          >
            <Link tap to="/signup">Get Started Free</Link>
          </Button>
          <Paragraph marginTop={16} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">
            No credit card required. <Link tap to="/referrals" color="var(--foreground)" textDecorationLine="underline" hoverStyle={{ color: "var(--foreground)" }}>Learn more</Link> about our referral program.
          </Paragraph>
        </Box>
      </MotionBox>
    </Box>
  );
};

export default DXPlatformGrid;
