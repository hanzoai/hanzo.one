import { Anchor, Box, Grid, H3, Link, Paragraph, XStack } from '@/gui'

import React from "react";
import { Users, Shield, ExternalLink, Mail, Phone } from "lucide-react";


const ExpertServices: React.FC = () => {
  return (
    <Box marginBottom={96} padding={40} borderRadius="var(--radius-2xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(0 0 0 / 0.9))">
      <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={40} $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
        <Box padding={24} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" height="100%" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))" hoverStyle={{ borderColor: "var(--border-strong)" }}>
          <Box padding={12} borderRadius="var(--radius-lg)" backgroundColor="rgb(255 255 255 / 0.2)" alignSelf="flex-start" display="inline-block" marginBottom={16}>
            <Users size={24} color="var(--foreground)" strokeWidth={1.5} />
          </Box>
          <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--white)" marginBottom={12}>Hanzo Agency</H3>
          <Paragraph color="var(--neutral-300)" marginBottom={20}>
            Our AI-powered creative agency helps brands transform their digital presence with cutting-edge design, 
            content, and marketing strategies powered by artificial intelligence.
          </Paragraph>
          <XStack display="flex" flexWrap="wrap" gap={16}>
            <Anchor minHeight={44} 
              href="https://hanzo.agency" 
              target="_blank" 
              rel="noopener noreferrer"
              display="flex" alignItems="center" gap={8} paddingHorizontal={20} paddingVertical={10} backgroundColor="var(--neutral-600)" borderRadius="var(--radius-md)" color="var(--white)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-500)" }}
            >
              <span>Visit Hanzo Agency</span>
              <ExternalLink size={14} />
            </Anchor>
            <Anchor minHeight={44} 
              href="/contact" 
              display="flex" alignItems="center" gap={8} paddingHorizontal={20} paddingVertical={10} borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-md)" color="var(--foreground)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--neutral-500)", color: "var(--foreground)" }}
            >
              <span>Contact us</span>
              <Mail size={14} />
            </Anchor>
          </XStack>
        </Box>
        <Box padding={24} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" height="100%" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))" hoverStyle={{ borderColor: "var(--border-strong)" }}>
          <Box padding={12} borderRadius="var(--radius-lg)" backgroundColor="rgb(255 255 255 / 0.2)" alignSelf="flex-start" display="inline-block" marginBottom={16}>
            <Shield size={24} color="var(--foreground)" strokeWidth={1.5} />
          </Box>
          <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--white)" marginBottom={12}>Sensei Group</H3>
          <Paragraph color="var(--neutral-300)" marginBottom={20}>
            Our collective of fractional CXOs and industry experts help enterprises implement transformative 
            technology solutions and drive strategic growth initiatives.
          </Paragraph>
          <XStack display="flex" flexWrap="wrap" gap={16}>
            <Anchor minHeight={44} 
              href="https://sensei.group" 
              target="_blank" 
              rel="noopener noreferrer"
              display="flex" alignItems="center" gap={8} paddingHorizontal={20} paddingVertical={10} backgroundColor="var(--neutral-600)" borderRadius="var(--radius-md)" color="var(--white)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-500)" }}
            >
              <span>Visit Sensei Group</span>
              <ExternalLink size={14} />
            </Anchor>
            <Anchor minHeight={44} 
              href="tel:+1234567890" 
              display="flex" alignItems="center" gap={8} paddingHorizontal={20} paddingVertical={10} borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-md)" color="var(--foreground)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--neutral-500)", color: "var(--foreground)" }}
            >
              <span>Schedule a call</span>
              <Phone size={14} />
            </Anchor>
          </XStack>
        </Box>
      </Grid>
    </Box>
  );
};

export default ExpertServices;
