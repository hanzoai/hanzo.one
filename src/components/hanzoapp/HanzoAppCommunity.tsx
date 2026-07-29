import { Box, Button, Grid, H2, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

const TweetCard = ({ username, handle, content, date, replies }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      
      backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--neutral-700)" }}
    >
      <XStack display="flex" alignItems="center" marginBottom={16}>
        <XStack width={48} height={48} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-800)" display="flex" alignItems="center" justifyContent="center" color="var(--white)" fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700">
          {username[0]}
        </XStack>
        <Box marginLeft={12}>
          <Box fontWeight="700">{username}</Box>
          <Box color="var(--neutral-500)">@{handle}</Box>
        </Box>
      </XStack>
      <Box color="var(--neutral-300)" marginBottom={16}>{content}</Box>
      <XStack display="flex" alignItems="center" justifyContent="space-between" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)">
        <div>{date}</div>
        <XStack display="flex" alignItems="center">
          <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><MessageSquare size={16} /></Box> {replies}
        </XStack>
      </XStack>
    </MotionBox>
  );
};

const HanzoAppCommunity = () => {
  const tweets = [
    {
      username: "Siddhant Gupta",
      handle: "Siddhan65490545",
      content: "Finally after a month of relentless trial and error, I've successfully created an AI persona bot emulating the teaching style of my mentor @abnux, the founder of @10kdesigners. Excited to share my journey in this twitter thread. 🤖🎨 \"Sound on 🎙️🔊\"",
      date: "9:43 AM · Oct 10, 2023",
      replies: "261"
    },
    {
      username: "Shubham Saboo",
      handle: "Saboo_Shubham_",
      content: "Hanzo AI is trending on GitHub. It's an open-source drag & drop UI tool that lets you build custom LLM apps in just minutes. Powered by LangChain, it features: - Ready-to-use app templates - Conversational agents that remember - Seamless deployment on cloud platforms",
      date: "11:05 PM · Aug 15, 2023",
      replies: "522"
    },
    {
      username: "Muratcan",
      handle: "koylanai",
      content: "When you lose momentum, it's hard to regain it. But here we go again, building a Personal Cockpit with AI Agents. I've built a chatbot connected to the internet and various APIs, linking it to multiple workflows and AI agents. Here's the first demo: 1. AI Newsletter Agent…",
      date: "1:42 AM · Oct 8, 2023",
      replies: "465"
    },
    {
      username: "Eugene",
      handle: "sudo_eugene",
      content: "Using our new AI bot called Koos with @Hanzo AI to create project management tasks in Notion, right from Slack 🤯 Let me know who would like to see a 5min explainer on how we did this 🎉",
      date: "3:39 AM · Sep 20, 2023",
      replies: "16"
    },
    {
      username: "Lior⚡",
      handle: "LiorOnAI",
      content: "Hanzo AI just reached 12,000 stars on Github. It allows you to build customized LLM apps using a simple drag & drop UI. You can even use built-in templates with logic and conditions connected to LangChain and GPT: ▸ Conversational agent with memory ▸ Chat with PDF and Excel…",
      date: "11:33 AM · Aug 10, 2023",
      replies: "833"
    },
    {
      username: "Derek Cheung",
      handle: "derekcheungsa",
      content: "A multi-modal chatbot that effortlessly merges text and image generation into seamless conversations. 🚀 📢 Watch the demo with conversation starting with asking for advice on building strong financial habits (sped up slightly for demo) 🪄Chatbot magically generates a visual…",
      date: "10:11 PM · Oct 1, 2023",
      replies: "21"
    }
  ];

  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="var(--neutral-950)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16}>Community 🫶</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={32}>
            Open source community is the heart of Hanzo AI. See why developers love and build using Hanzo AI
          </Paragraph>
          <Button 
            size="lg"
            backgroundColor="var(--neutral-600)" color="var(--white)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}
          >
            Join Discord
          </Button>
        </MotionBox>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {tweets.map((tweet, index) => (
            <TweetCard 
              key={index}
              username={tweet.username}
              handle={tweet.handle}
              content={tweet.content}
              date={tweet.date}
              replies={tweet.replies}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HanzoAppCommunity;
