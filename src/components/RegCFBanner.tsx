import { Box, Link, Paragraph, XStack } from '@/gui'
import React from "react";
import { ArrowRight } from "lucide-react";


const RegCFBanner = () => {
  return (
    <Box position="sticky" top={0} zIndex={50} backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" paddingVertical={8} paddingHorizontal={16} textAlign="center" color="var(--foreground)" borderBottomWidth={1} borderColor="rgb(255 255 255 / 0.1)" backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))">
      <XStack maxWidth="var(--container-wide)" marginHorizontal="auto" display="flex" alignItems="center" justifyContent="center" flexWrap="wrap" gap={8} $md={{ justifyContent: "space-between" }}>
        <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500">
          Invest in the Future of AI Collaboration—Join Our $5M Reg CF Campaign on Republic.com
        </Paragraph>
        <Link
          to="https://republic.com/hanzo" 
          target="_blank"
          rel="noopener noreferrer"
          display="inline-flex" alignItems="center" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" paddingHorizontal={12} paddingVertical={4} borderRadius="var(--radius-full)" backgroundColor="rgb(255 255 255 / 0.1)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.2)" }}
        >
          <span>Learn More / Invest</span>
          <Box render="span" display="inline-flex" alignItems="center" marginLeft={4}><ArrowRight size={12} /></Box>
        </Link>
      </XStack>
    </Box>
  );
};

export default RegCFBanner;