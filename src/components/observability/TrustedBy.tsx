import { Box, H2, MotionBox, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

const clients = [
  { name: "Damon", delay: 0 },
  { name: "Triller", delay: 0.1 },
  { name: "Zoo", delay: 0.2 },
  { name: "Skully", delay: 0.3 },
  { name: "Bellabeat", delay: 0.4 },
  { name: "Lifemed AI", delay: 0.5 }
];

const TrustedBy = () => {
  return (
    <Box render="section" paddingVertical={64} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, var(--pure-black), rgb(255 255 255 / 0.08))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={40}
        >
          <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="500" color="var(--neutral-400)">Trusted by Innovative Teams Worldwide</H2>
        </MotionBox>
        
        <XStack display="flex" flexWrap="wrap" justifyContent="center" alignItems="center" gap={24} paddingHorizontal={16} $sm={{ gap: 40 }}>
          {clients.map((client, index) => (
            <MotionBox
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: client.delay }}
              fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" backgroundClip="text" color="transparent" backgroundImage="linear-gradient(to right, var(--neutral-400), var(--neutral-300))" $sm={{ fontSize: "var(--text-3xl)", lineHeight: "var(--leading-3xl)" }}
            >
              {client.name}
            </MotionBox>
          ))}
        </XStack>
      </Box>
    </Box>
  );
};

export default TrustedBy;
