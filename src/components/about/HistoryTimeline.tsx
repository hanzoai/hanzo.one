import { Box, Button, H2, H3, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { Code, Rocket, Stars, Coins, Trophy, Lightbulb, Bot, User2 } from "lucide-react";

const timelineEvents = [
  {
    year: "2014-2016",
    title: "Origins: Verus Media & Crowdstart",
    description: "Zach Kelling founded Verus Media and launched Crowdstart, a platform to harness crowd-driven data and AI to help businesses grow.",
    icon: <Rocket color="var(--foreground)" />,
    highlight: "Record-breaking product launches and significant crowdfunding success.",
    link: { text: "Learn about our platform", url: "/platform" }
  },
  {
    year: "2016",
    title: "Reimagining as Hanzo",
    description: "The company formally incorporated as Hanzo AI, Inc., focusing on AI-powered marketing and development platforms.",
    icon: <Stars color="var(--foreground)" />,
    highlight: "Helped launch some of the most successful crowdsales in history.",
    link: { text: "View Hanzo AI", url: "/ai" }
  },
  {
    year: "2017",
    title: "Techstars Acceleration",
    description: "Selected for the inaugural Techstars Kansas City accelerator cohort, sharpening focus on e-commerce SaaS.",
    icon: <Trophy color="var(--foreground)" />,
    highlight: "23 beta users and $42M in client sales by Demo Day.",
    link: { text: "Explore Commerce", url: "/commerce" }
  },
  {
    year: "2018-2020",
    title: "AI Marketing & Blockchain",
    description: "Pivoted to AI marketing platform and blockchain technology, supporting tokenized crowdfunding.",
    icon: <Coins color="var(--foreground)" />,
    highlight: "Co-founded the first SEC-approved crowdfunding token offering.",
    link: { text: "See our analytics", url: "/analytics" }
  },
  {
    year: "2021-2023",
    title: "Product Innovation",
    description: "Launched Hanzo Dev, an AI-powered code editor and app builder translating natural language to live software.",
    icon: <Code color="var(--foreground)" />,
    highlight: "Open-sourced Hanzo Base, a powerful backend framework.",
    link: { text: "Try Hanzo Dev", url: "/dev" }
  },
  {
    year: "2024-Present",
    title: "Strategic Partnerships",
    description: "Formed key alliances like Personas Social Inc. partnership to expand Keek's user base using Hanzo's AI.",
    icon: <User2 color="var(--foreground)" />,
    highlight: "Driven over $1B in revenues to clients using AI-powered marketing.",
    link: { text: "Meet Hanzo Bot", url: "/bot" }
  },
];

const TimelineEvent = ({ event, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      display="flex" flexDirection="column" alignItems="center" gap={32} marginBottom={64} $md={{ ...({ flexDirection: "row" }), ...(isEven ? undefined : { flexDirection: "row-reverse" }) }}
    >
      <Box $md={{ width: "50%" }}>
        <Box backgroundColor="rgb(0 0 0 / 0.3)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-lg)" padding={32} height="100%">
          <XStack display="flex" alignItems="center" marginBottom={16}>
            <Box padding={12} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-900)" marginRight={16}>
              {event.icon}
            </Box>
            <div>
              <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" fontWeight="600">{event.year}</Text>
              <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700">{event.title}</H3>
            </div>
          </XStack>
          <Paragraph color="var(--neutral-300)" marginBottom={16}>{event.description}</Paragraph>
          <Box backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" borderRadius="var(--radius-lg)" padding={16} marginBottom={24}>
            <Paragraph color="var(--foreground)" fontStyle="italic">"{event.highlight}"</Paragraph>
          </Box>
          <Button variant="outline" borderColor="var(--neutral-500)" color="var(--white)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}>
            <a href={event.link.url}>{event.link.text}</a>
          </Button>
        </Box>
      </Box>
      
      <Box display="none" position="relative" $md={{ display: "block", width: "50%" }}>
        <XStack position="absolute" top={0} right={0} bottom={0} left={0} display="flex" alignItems="center" justifyContent="center">
          <Box width={4} height="100%" backgroundColor="var(--surface-card-emphasis)"></Box>
        </XStack>
        <XStack position="relative" display="flex" justifyContent="center">
          <XStack width={48} height={48} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-600)" display="flex" alignItems="center" justifyContent="center">
            <Text color="var(--white)" fontWeight="700">{index + 1}</Text>
          </XStack>
        </XStack>
      </Box>
    </MotionBox>
  );
};

const HistoryTimeline = () => {
  return (
    <Box id="timeline" render="section" paddingVertical={96} paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>Our Journey Through Time</H2>
          <Box height={4} width={80} backgroundColor="var(--neutral-500)" marginHorizontal="auto" marginBottom={24}></Box>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            From crowd-powered marketing to AI innovation, explore the key milestones
            that shaped Hanzo Industries.
          </Paragraph>
        </MotionBox>
        
        <Box marginTop={64}>
          {timelineEvents.map((event, index) => (
            <TimelineEvent key={index} event={event} index={index} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HistoryTimeline;
