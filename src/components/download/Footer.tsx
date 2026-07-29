import { Anchor, Box, H3, MotionBox } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

const FooterSection = ({ title, links }: { title: string; links: string[] }) => (
  <div>
    <H3 color="var(--white)" fontWeight="600" marginBottom={12}>{title}</H3>
    <Box render="ul" rowGap={8}>
      {links.map((link, index) => (
        <li key={index}>
          <Anchor tap href={link === "Discord Server" ? "https://discord.gg/XthHQQj" : "#"} color="var(--neutral-500)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" hoverStyle={{ color: "var(--white)" }}>
            {link}
          </Anchor>
        </li>
      ))}
    </Box>
  </div>
);

const DownloadFooter = () => {
  const usefulLinks = ["Discord Server"];
  const resources = ["Support"];
  const contact = ["Developer Docs"];
  const legal = ["Terms & Service", "Privacy Policy"];
  const promptLibrary = [
    "Discover Prompts for Hanzo AI",
    "Writing prompts",
    "Essay prompts",
    "Business prompts"
  ];

  return (
    <Box render="section" paddingVertical={48} paddingHorizontal={16} backgroundColor="rgb(0 0 0 / 0.8)" borderTopWidth={1} borderColor="var(--neutral-800)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        <MotionBox 
          display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(5, minmax(0, 1fr))" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <FooterSection title="Useful Links" links={usefulLinks} />
          <FooterSection title="Resources" links={resources} />
          <FooterSection title="Contact" links={contact} />
          <FooterSection title="Legal Information" links={legal} />
          <FooterSection title="Prompt Library" links={promptLibrary} />
        </MotionBox>
        
        <Box marginTop={48} paddingTop={24} borderTopWidth={1} borderColor="var(--neutral-800)" textAlign="center" color="var(--neutral-500)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
          © 2025 Hanzo AI. All rights reserved. Not associated with or endorsed by ChatGPT, Perplexity, or Claude.
        </Box>
      </Box>
    </Box>
  );
};

export default DownloadFooter;
