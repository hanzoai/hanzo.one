import { Box, Button, Grid, H2, H3, MotionBox, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Chrome, Compass, LayoutGrid, Globe } from "lucide-react";

const BrowserCard = ({ icon: Icon, title, description, buttonText }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={32} display="flex" flexDirection="column"
    >
      <Box marginBottom={16}>
        <Icon height={48} width={48} color="var(--foreground)" marginBottom={16} />
        <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={8}>{title}</H3>
        <Paragraph color="var(--neutral-300)" marginBottom={24}>{description}</Paragraph>
      </Box>
      
      <Box marginTop="auto">
        <Button width="100%" backgroundColor="var(--neutral-600)" hoverStyle={{ backgroundColor: "var(--neutral-500)" }}>
          {buttonText}
        </Button>
      </Box>
    </MotionBox>
  );
};

const HanzoExtensionBrowsers = () => {
  return (
    <Box id="browsers" render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="var(--black)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16}>Available on All Major Browsers</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Install the Hanzo Extension on your preferred browser
          </Paragraph>
        </MotionBox>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
          <BrowserCard 
            icon={Chrome}
            title="Chrome"
            description="Perfect integration with Google Chrome browser with all features supported."
            buttonText="Add to Chrome"
          />
          
          <BrowserCard 
            icon={Globe}
            title="Firefox"
            description="Fully compatible with Mozilla Firefox for privacy-conscious users."
            buttonText="Get Firefox Add-on"
          />
          
          <BrowserCard 
            icon={Compass}
            title="Edge"
            description="Enhanced experience on Microsoft Edge with optimized performance."
            buttonText="Add to Edge"
          />
          
          <BrowserCard 
            icon={LayoutGrid}
            title="More Browsers"
            description="Safari, Opera, and other Chromium-based browsers are also supported."
            buttonText="View All Browsers"
          />
        </Grid>
      </Box>
    </Box>
  );
};

export default HanzoExtensionBrowsers;
