import { Box, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

const HanzoCodeCompanies = () => {
  const companies = [
    { name: "Company 1", logo: "/lovable-uploads/28d53ec4-328f-4812-862b-b9a760bbabae.png" },
    { name: "Company 2", logo: "/lovable-uploads/28d53ec4-328f-4812-862b-b9a760bbabae.png" },
    { name: "Company 3", logo: "/lovable-uploads/28d53ec4-328f-4812-862b-b9a760bbabae.png" },
    { name: "Company 4", logo: "/lovable-uploads/28d53ec4-328f-4812-862b-b9a760bbabae.png" },
    { name: "Company 5", logo: "/lovable-uploads/28d53ec4-328f-4812-862b-b9a760bbabae.png" },
  ];

  return (
    <Box render="section" paddingVertical={48} paddingHorizontal={16} backgroundColor="rgb(0 0 0 / 0.6)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={32}
        >
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-400)">Trusted by engineers at</Paragraph>
        </MotionBox>
        
        <XStack display="flex" flexWrap="wrap" justifyContent="center" alignItems="center" gap={32} $md={{ gap: 64 }}>
          {companies.map((company, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              flexDirection="row" height={32} width={96} display="flex" alignItems="center" justifyContent="center"
            >
              <Box display="inline-block"
                src={company.logo}
                alt={company.name}
                render="img" height={32} objectFit="contain" opacity={0.7} transition="opacity var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ opacity: 1 }}
              />
            </MotionBox>
          ))}
        </XStack>
      </Box>
    </Box>
  );
};

export default HanzoCodeCompanies;
