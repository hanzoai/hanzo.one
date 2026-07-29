import { Anchor, Box, Button, XStack } from '@/gui'
import React from "react";
import { Github } from "lucide-react";

const PricingFooterLinks = () => {
  return (
    <XStack marginTop={32} textAlign="center" display="flex" flexWrap="wrap" justifyContent="center">
      <Button variant="outline" borderColor="var(--neutral-800)" paddingHorizontal={16} paddingVertical={8} height={40} minWidth="152px" hoverStyle={{ backgroundColor: "var(--neutral-800)" }} size="sm">
        <Anchor minHeight={44} href="https://github.com/hanzoai" target="_blank" rel="noopener noreferrer" display="flex" >
          Hanzo GitHub
          <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><Github size={16} /></Box>
        </Anchor>
      </Button>
      <Button variant="outline" borderColor="var(--neutral-800)" paddingHorizontal={16} paddingVertical={8} height={40} minWidth="152px" hoverStyle={{ backgroundColor: "var(--neutral-800)" }} size="sm">
        <a href="mailto:sales@hanzo.ai">
          Contact Sales
        </a>
      </Button>
      <Button variant="outline" borderColor="var(--neutral-800)" paddingHorizontal={16} paddingVertical={8} height={40} minWidth="152px" hoverStyle={{ backgroundColor: "var(--neutral-800)" }} size="sm">
        <a href="https://discord.gg/XthHQQj" target="_blank" rel="noopener noreferrer">
          Join Discord
        </a>
      </Button>
    </XStack>
  );
};

export default PricingFooterLinks;