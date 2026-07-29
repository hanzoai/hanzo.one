import { Box, Button, Grid, H2, H3, MotionBox, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const OperativeUsage = () => {
  return (
    <Box render="section" paddingVertical={96} backgroundColor="var(--neutral-950)" position="relative" overflow="hidden" id="get-started">
      {/* Background gradient */}
      <Box position="absolute" top="50%" left="25%" x="-50%" y="-50%" width="50%" height="50%" backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)"></Box>
      
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" paddingHorizontal={16} position="relative" zIndex={10} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <Box textAlign="center" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={64}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
              Getting Started with Hanzo Operative
            </H2>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)">
              Set up your environment in minutes and start using AI to operate your computer
            </Paragraph>
          </MotionBox>
        </Box>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $lg={{ gridTemplateColumns: "repeat(5, minmax(0, 1fr))" }}>
          <Box rowGap={24} $lg={{ gridColumn: "span 2 / span 2" }}>
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24}
            >
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)" marginBottom={16}>Installation</H3>
              
              <Box rowGap={16}>
                <div>
                  <Paragraph color="var(--neutral-400)" marginBottom={8}>1. Install the package</Paragraph>
                  <Box backgroundColor="var(--neutral-900)" borderRadius="var(--radius-md)" padding={12} fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--white)" overflowX="auto">
                    pip install hanzo-operative
                  </Box>
                </div>
                
                <div>
                  <Paragraph color="var(--neutral-400)" marginBottom={8}>2. Run the operative</Paragraph>
                  <Box backgroundColor="var(--neutral-900)" borderRadius="var(--radius-md)" padding={12} fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--white)" overflowX="auto">
                    operative
                  </Box>
                </div>
                
                <div>
                  <Paragraph color="var(--neutral-400)" marginBottom={8}>3. Enter your API key when prompted</Paragraph>
                </div>
              </Box>
              
              <Box marginTop={24}>
                <Button size="sm" variant="outline" color="var(--neutral-300)" borderColor="var(--neutral-700)">
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Terminal size={16} /></Box>
                  Copy Installation Commands
                </Button>
              </Box>
            </MotionBox>
            
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24}
            >
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)" marginBottom={16}>System Requirements</H3>
              
              <Box render="ul" rowGap={8} color="var(--neutral-400)">
                <li>• macOS, Windows, or Linux (with X server)</li>
                <li>• Python 3.8 or higher</li>
                <li>• 8GB RAM recommended</li>
                <li>• Internet connection for API access</li>
              </Box>
            </MotionBox>
          </Box>
          
          <MotionBox
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} height="100%" $lg={{ gridColumn: "span 3 / span 3" }}
          >
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)" marginBottom={16}>Basic Usage</H3>
            
            <Box rowGap={24}>
              <div>
                <Paragraph color="var(--neutral-400)" marginBottom={8}>Running with default settings (GPT-4o)</Paragraph>
                <Box backgroundColor="var(--neutral-900)" borderRadius="var(--radius-md)" padding={12} fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--white)" overflowX="auto">
                  operative
                </Box>
              </div>
              
              <div>
                <Paragraph color="var(--neutral-400)" marginBottom={8}>Using voice input mode</Paragraph>
                <Box backgroundColor="var(--neutral-900)" borderRadius="var(--radius-md)" padding={12} fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--white)" overflowX="auto">
                  operative --voice
                </Box>
              </div>
              
              <div>
                <Paragraph color="var(--neutral-400)" marginBottom={8}>Using OCR mode for enhanced element detection</Paragraph>
                <Box backgroundColor="var(--neutral-900)" borderRadius="var(--radius-md)" padding={12} fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--white)" overflowX="auto">
                  operative -m gpt-4-with-ocr
                </Box>
              </div>
              
              <div>
                <Paragraph color="var(--neutral-400)" marginBottom={8}>Using Set-of-Mark (SoM) prompting</Paragraph>
                <Box backgroundColor="var(--neutral-900)" borderRadius="var(--radius-md)" padding={12} fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--white)" overflowX="auto">
                  operative -m gpt-4-with-som
                </Box>
              </div>
              
              <Box paddingTop={8}>
                <Paragraph color="var(--neutral-400)">After running any of these commands, you'll be prompted to enter an objective for the AI to accomplish.</Paragraph>
              </Box>
            </Box>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default OperativeUsage;
