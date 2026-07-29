import { Box, Button, H2, MotionBox, Paragraph, Text, XStack, YStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Play, Terminal } from "lucide-react";

const DemoShowcase: React.FC = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} position="relative" overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(to bottom, var(--pure-black), rgb(255 255 255 / 0.1))" />
      
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" position="relative" zIndex={10}>
        <YStack display="flex" flexDirection="column" alignItems="center" gap={48} $lg={{ flexDirection: "row" }}>
          <MotionBox 
            width="100%" $lg={{ width: "50%" }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Box display="inline-block" paddingHorizontal={16} paddingVertical={4} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" marginBottom={24}>
              See it in action
            </Box>
            
            <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={24} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
              AI Engineering in Real Time
            </H2>
            
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={32}>
              Watch how Hanzo accelerates development and delivers better AI experiences with our 
              integrated tools and services.
            </Paragraph>
            
            <Button 
              borderRadius="var(--radius-full)" paddingHorizontal={24} paddingVertical={24} color="var(--white)" backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-600))" hoverStyle={{ backgroundImage: "linear-gradient(to right, var(--neutral-700), var(--neutral-700))" }}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Play size={20} /></Box> Watch Demo
            </Button>
          </MotionBox>
          
          <MotionBox 
            width="100%" $lg={{ width: "50%" }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Box backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" overflow="hidden" boxShadow="0 25px 50px -12px rgb(0 0 0 / .5)">
              <XStack backgroundColor="var(--neutral-950)" padding={12} display="flex" alignItems="center" borderBottomWidth={1} borderColor="var(--neutral-800)">
                <XStack display="flex" columnGap={8} marginRight={16}>
                  <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)"></Box>
                  <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)"></Box>
                  <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)"></Box>
                </XStack>
                <XStack display="flex" alignItems="center" backgroundColor="var(--neutral-800)" paddingHorizontal={16} paddingVertical={4} borderRadius="var(--radius-md)" color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Terminal size={16} /></Box> hanzo-demo.tsx
                </XStack>
              </XStack>
              
              <Box padding={24} fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                <Box render="pre" fontFamily="var(--font-mono)">
                  <Text render="code" display="block" color="var(--foreground)">import {"{"} <Text color="var(--foreground)">useHanzoAI</Text> {"}"} from <Text color="var(--foreground)">'@hanzo/ai'</Text>;</Text>
                  <Text render="code" display="block" marginTop={16} color="var(--foreground)">function <Text color="var(--foreground)">AIAssistant</Text><Text color="var(--white)">()</Text> <Text color="var(--white)">{"{"}</Text></Text>
                  <Text render="code" display="block" marginLeft={16} color="var(--foreground)">const {"{"} <Text color="var(--foreground)">assistant, isLoading, error</Text> {"}"} = <Text color="var(--foreground)">useHanzoAI</Text>({"{"}</Text>
                  <Text render="code" display="block" marginLeft={32} color="var(--foreground)">model: <Text color="var(--foreground)">'gpt-4'</Text>,</Text>
                  <Text render="code" display="block" marginLeft={32} color="var(--foreground)">temperature: <Text color="var(--foreground)">0.7</Text>,</Text>
                  <Text render="code" display="block" marginLeft={32} color="var(--foreground)">systemPrompt: <Text color="var(--foreground)">'You are a helpful AI assistant.'</Text></Text>
                  <Text render="code" display="block" marginLeft={16} color="var(--white)">{"})"}</Text>
                  <Text render="code" display="block" marginTop={16} marginLeft={16} color="var(--foreground)">return <Text color="var(--white)">(</Text></Text>
                  <Text render="code" display="block" marginLeft={32} color="var(--white)">{"<"}<Text color="var(--foreground)">div</Text> <Text color="var(--foreground)">className</Text>=<Text color="var(--foreground)">"ai-container"</Text>{">"}</Text>
                  <Text render="code" display="block" marginLeft={48} color="var(--white)">{"{"}<Text color="var(--foreground)">isLoading</Text> ? <Text color="var(--foreground)">'Loading...'</Text> : <Text color="var(--foreground)">assistant</Text>.response{"}"}</Text>
                  <Text render="code" display="block" marginLeft={32} color="var(--white)">{"</div>"}</Text>
                  <Text render="code" display="block" marginLeft={16} color="var(--white)">)</Text>
                  <Text render="code" display="block" color="var(--white)">{"}"}</Text>
                </Box>
              </Box>
            </Box>
          </MotionBox>
        </YStack>
      </Box>
    </Box>
  );
};

export default DemoShowcase;
