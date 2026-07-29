import { Box, Button, ChromeText, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Terminal, RefreshCw } from "lucide-react";

const DemoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [demoStep, setDemoStep] = useState(0);
  
  const demoSteps = [
    { code: "import { HanzoAI } from '@hanzo/ai';\n\nconst model = HanzoAI.loadModel('gpt-4');\n\nconst response = await model.generate({\n  prompt: 'Explain quantum computing',\n  maxTokens: 100\n});", output: "Quantum computing leverages quantum mechanics principles to process information. Unlike classical computers using bits (0 or 1), quantum computers use quantum bits or 'qubits' that can exist in multiple states simultaneously through superposition..." },
    { code: "const code = await HanzoAI.generateCode({\n  language: 'typescript',\n  task: 'Create a React component for a file uploader',\n  specifications: {\n    acceptedFileTypes: ['image/png', 'image/jpeg'],\n    maxFileSize: '5MB'\n  }\n});", output: "Generating React component for file uploader with specified parameters... Component successfully generated!" },
    { code: "const agent = HanzoAI.createAgent({\n  tools: ['database', 'web-search', 'code-analysis'],\n  goal: 'Optimize database query performance',\n  context: {\n    currentSchema: db.getSchema(),\n    slowQueries: await db.getSlowQueries()\n  }\n});", output: "Agent initialized with 3 tools. Analyzing slow queries and database schema... Found 4 optimization opportunities. Generating SQL modifications to improve performance by estimated 45%." }
  ];
  
  const playDemo = () => {
    setIsPlaying(true);
    let step = 0;
    
    const interval = setInterval(() => {
      step += 1;
      if (step >= demoSteps.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIsPlaying(false);
          setDemoStep(0);
        }, 3000);
        return;
      }
      setDemoStep(step);
    }, 5000);
  };
  
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} position="relative">
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        <Box textAlign="center" marginBottom={64}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ChromeText 
              as="h2" 
              fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}
            >
              See it in Action
            </ChromeText>
            
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
              Watch how simple it is to build AI applications with Hanzo
            </Paragraph>
          </MotionBox>
        </Box>
        
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          position="relative"
        >
          <Box backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" padding={16} backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)">
            <Box backgroundColor="rgb(0 0 0 / 0.7)" borderRadius="var(--radius-lg)" overflow="hidden" boxShadow="0 20px 25px -5px rgb(0 0 0 / .4)">
              <XStack display="flex" alignItems="center" backgroundColor="var(--neutral-900)" paddingVertical={8} paddingHorizontal={16} borderBottomWidth={1} borderColor="var(--neutral-800)">
                <XStack display="flex" columnGap={8} marginRight={16}>
                  <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)"></Box>
                  <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)"></Box>
                  <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)"></Box>
                </XStack>
                <Box color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontFamily="var(--font-mono)">
                  hanzo-ai-terminal
                </Box>
                <XStack marginLeft="auto" display="flex" alignItems="center" columnGap={12}>
                  {!isPlaying ? (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" gap={8} backgroundColor="var(--neutral-800)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}
                      onClick={playDemo}
                    >
                      <Play size={16} /> Run Demo
                    </Button>
                  ) : (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" gap={8} backgroundColor="var(--neutral-800)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}
                      disabled
                    >
                      <RefreshCw size={16} /> Running...
                    </Button>
                  )}
                </XStack>
              </XStack>
              
              <Box padding={24} fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" height="300px" overflow="hidden">
                <XStack display="flex" alignItems="flex-start">
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={8} marginTop={4}><Terminal size={20} color="var(--neutral-500)" /></Box>
                  <Box color="var(--neutral-400)">
                    <Text color="var(--foreground)">hanzo@ai</Text>:<Text color="var(--foreground)">~/projects/demo</Text>$ <Text color="var(--white)"> {isPlaying ? "node demo.js" : "node demo.js"}</Text>
                  </Box>
                </XStack>
                
                {(isPlaying || demoStep > 0) && (
                  <MotionBox
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    marginTop={16} borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-md)" padding={12} backgroundColor="var(--surface-card-emphasis)"
                  >
                    <Box color="var(--foreground)" marginBottom={8}>// Execute code</Box>
                    <Box color="var(--white)" whiteSpace="pre">{demoSteps[demoStep].code}</Box>
                  </MotionBox>
                )}
                
                {(isPlaying || demoStep > 0) && (
                  <MotionBox
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    marginTop={16}
                  >
                    <XStack display="flex">
                      <Text color="var(--neutral-500)">// Output:</Text>
                    </XStack>
                    <Box marginTop={8} color="var(--foreground)" fontStyle="italic">
                      {demoSteps[demoStep].output}
                    </Box>
                  </MotionBox>
                )}
              </Box>
            </Box>
          </Box>
          
          {/* Decorative glows */}
          <Box position="absolute" zIndex={-10} top="50%" left="50%" x="-50%" y="-50%" width="100%" height="100%">
            <Box position="absolute" top="25%" left="25%" width={256} height={256} backgroundColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-full)" filter="blur(100px)"></Box>
            <Box position="absolute" bottom="25%" right="25%" width={256} height={256} backgroundColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-full)" filter="blur(100px)"></Box>
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default DemoSection;
