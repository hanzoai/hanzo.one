import { Box, Button, Grid, H2, H3, H4, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Code, ArrowRight } from "lucide-react";

// Define a proper type for the presence event
interface PresenceEvent {
  action: 'join' | 'leave';
  userData: {
    name: string;
    [key: string]: any;
  };
}

const Integration = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={48}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--white)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Simple Integration
          </H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Add real-time capabilities to your application with just a few lines of code
          </Paragraph>
        </MotionBox>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={40} alignItems="center" $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" color="var(--white)" marginBottom={16}>Easy to Implement</H3>
            <Paragraph color="var(--neutral-300)" marginBottom={24}>
              Hanzo Realtime provides a clean, intuitive API that makes it simple to add 
              real-time functionality to any application. With support for multiple platforms 
              and frameworks, you can get started in minutes.
            </Paragraph>
            
            <Box rowGap={16} marginBottom={32}>
              <XStack display="flex" alignItems="flex-start">
                <XStack height={24} width={24} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" display="flex" alignItems="center" justifyContent="center" marginRight={12} marginTop={2}>
                  <Text color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="700">1</Text>
                </XStack>
                <div>
                  <H4 color="var(--white)" fontWeight="500" marginBottom={4}>Initialize the client</H4>
                  <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Connect to the Hanzo Realtime service with your API key</Paragraph>
                </div>
              </XStack>
              
              <XStack display="flex" alignItems="flex-start">
                <XStack height={24} width={24} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" display="flex" alignItems="center" justifyContent="center" marginRight={12} marginTop={2}>
                  <Text color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="700">2</Text>
                </XStack>
                <div>
                  <H4 color="var(--white)" fontWeight="500" marginBottom={4}>Subscribe to channels</H4>
                  <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Listen for updates on specific channels or topics</Paragraph>
                </div>
              </XStack>
              
              <XStack display="flex" alignItems="flex-start">
                <XStack height={24} width={24} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" display="flex" alignItems="center" justifyContent="center" marginRight={12} marginTop={2}>
                  <Text color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="700">3</Text>
                </XStack>
                <div>
                  <H4 color="var(--white)" fontWeight="500" marginBottom={4}>Publish messages</H4>
                  <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Send updates to all connected clients instantly</Paragraph>
                </div>
              </XStack>
            </Box>
            
            <Button backgroundColor="var(--neutral-600)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}>
              View Documentation <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
            </Button>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            backgroundColor="var(--black)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" padding={24}
          >
            <XStack display="flex" alignItems="center" marginBottom={16}>
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Code size={20} color="var(--foreground)" /></Box>
              <Text color="var(--neutral-300)">JavaScript Example</Text>
            </XStack>
            
            <Box backgroundColor="var(--neutral-900)" borderRadius="var(--radius-lg)" padding={16} fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" overflow="auto" maxHeight="400px">
              <Box color="var(--foreground)">// Initialize the Hanzo Realtime client</Box>
              <Box color="var(--neutral-300)">import {`{ Realtime }`} from '@hanzo/cloud';</Box>
              <Box color="var(--neutral-300)" marginBottom={16}>const realtime = new Realtime('YOUR_API_KEY');</Box>
              
              <Box color="var(--foreground)">// Subscribe to a channel</Box>
              <Box color="var(--neutral-300)">const channel = await realtime.subscribe('chat-room', {`{`}</Box>
              <Box color="var(--neutral-300)" paddingLeft={16}>onMessage: (message) {`=>`} {`{`}</Box>
              <Box color="var(--neutral-300)" paddingLeft={32}>console.log('New message received:', message);</Box>
              <Box color="var(--neutral-300)" paddingLeft={32}>// Update your UI with the message</Box>
              <Box color="var(--neutral-300)" paddingLeft={32}>appendMessageToChat(message);</Box>
              <Box color="var(--neutral-300)" paddingLeft={16}>{`}`},</Box>
              <Box color="var(--neutral-300)" paddingLeft={16}>onPresence: (event: PresenceEvent) {`=>`} {`{`}</Box>
              <Box color="var(--neutral-300)" paddingLeft={32}>if (event.action === 'join') {`{`}</Box>
              <Box color="var(--neutral-300)" paddingLeft={48}>{`console.log(\`\${event.userData.name} joined the chat\`);`}</Box>
              <Box color="var(--neutral-300)" paddingLeft={32}>{`}`} else {`{`}</Box>
              <Box color="var(--neutral-300)" paddingLeft={48}>{`console.log(\`\${event.userData.name} left the chat\`);`}</Box>
              <Box color="var(--neutral-300)" paddingLeft={32}>{`}`}</Box>
              <Box color="var(--neutral-300)" paddingLeft={16}>{`}`}</Box>
              <Box color="var(--neutral-300)">{`}`});</Box>
              <Box color="var(--neutral-300)" marginBottom={16}></Box>
              
              <Box color="var(--foreground)">// Publish a message to the channel</Box>
              <Box color="var(--neutral-300)">await realtime.publish('chat-room', {`{`}</Box>
              <Box color="var(--neutral-300)" paddingLeft={16}>user: {`{`}</Box>
              <Box color="var(--neutral-300)" paddingLeft={32}>id: 'user-123',</Box>
              <Box color="var(--neutral-300)" paddingLeft={32}>name: 'Alice'</Box>
              <Box color="var(--neutral-300)" paddingLeft={16}>{`}`},</Box>
              <Box color="var(--neutral-300)" paddingLeft={16}>text: 'Hello, world!',</Box>
              <Box color="var(--neutral-300)" paddingLeft={16}>timestamp: new Date().toISOString()</Box>
              <Box color="var(--neutral-300)">{`}`});</Box>
              <Box color="var(--neutral-300)" marginBottom={16}></Box>
              
              <Box color="var(--foreground)">// Clean up when done</Box>
              <Box color="var(--neutral-300)">await channel.unsubscribe();</Box>
            </Box>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default Integration;
