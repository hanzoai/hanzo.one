import { Anchor, Box, Grid, H2, H3, MotionBox, Paragraph, Separator, XStack, YStack } from '@/gui'
import React, { useState } from "react";
import { motion } from "framer-motion";
import ZenPrincipleCard from "./ZenPrincipleCard";
import { principles } from "./data/zenPrinciples";

const ZenOfHanzoPrinciples: React.FC = () => {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string | null>(null);
  
  // Get unique disciplines from principles data
  const disciplines = Array.from(new Set(principles.map(p => p.discipline)));

  const filteredPrinciples = selectedDiscipline
    ? principles.filter(p => p.discipline === selectedDiscipline)
    : principles;

  return (
    <Box marginTop={64} marginBottom={96} paddingHorizontal={16} id="principles">
      <MotionBox
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        textAlign="center" marginBottom={48}
      >
        <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16} color="var(--white)" $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>Our Principles</H2>
        <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" maxWidth="var(--container-prose)" marginHorizontal="auto">
          Time-tested principles guiding the development of next-generation AI systems and applications
        </Paragraph>
        <Box height={1} width={80} backgroundColor="var(--neutral-700)" marginHorizontal="auto" marginTop={24}></Box>
      </MotionBox>

      {/* Sticky Discipline Filter */}
      <Box position="sticky" top={0} zIndex={40} backgroundColor="rgb(0 0 0 / 0.95)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderBottomWidth={1} borderColor="var(--border-strong)" paddingVertical={24} marginBottom={32}>
        <XStack display="flex" flexWrap="wrap" justifyContent="center" gap={8}>
          <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44}
            render="button" paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-full)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" transition="all 200ms cubic-bezier(.4,0,.2,1)" backgroundColor={selectedDiscipline === null ? "var(--foreground)" : "rgb(255 255 255 / 0.5)"} color={selectedDiscipline === null ? "var(--pure-black)" : "var(--neutral-400)"} boxShadow={selectedDiscipline === null ? "0 10px 15px -3px rgb(0 0 0 / .35)" : undefined} hoverStyle={selectedDiscipline === null ? undefined : { backgroundColor: "var(--surface-card)", color: "var(--neutral-300)" }}
            onClick={() => setSelectedDiscipline(null)}
          >
            All Disciplines
          </Box>
          {disciplines.map(discipline => (
            <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44}
              key={discipline}
              render="button" paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-full)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" transition="all 200ms cubic-bezier(.4,0,.2,1)" backgroundColor={selectedDiscipline === discipline ? "var(--foreground)" : "rgb(255 255 255 / 0.5)"} color={selectedDiscipline === discipline ? "var(--pure-black)" : "var(--neutral-400)"} boxShadow={selectedDiscipline === discipline ? "0 10px 15px -3px rgb(0 0 0 / .35)" : undefined} hoverStyle={selectedDiscipline === discipline ? undefined : { backgroundColor: "var(--surface-card)", color: "var(--neutral-300)" }}
              onClick={() => setSelectedDiscipline(discipline)}
            >
              {discipline}
            </Box>
          ))}
        </XStack>
        
        {/* Display count of displayed principles */}
        <Box textAlign="center" marginTop={16} color="var(--neutral-500)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
          {selectedDiscipline ? (
            <p>Showing principles from the {selectedDiscipline} discipline</p>
          ) : (
            <p>Showing all engineering principles across {disciplines.length} disciplines</p>
          )}
        </Box>
      </Box>

      <Grid maxWidth="var(--container-max)" marginHorizontal="auto" display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
        {filteredPrinciples.map((principle, index) => (
          <ZenPrincipleCard 
            key={principle.number} 
            principle={principle} 
            index={index} 
          />
        ))}
      </Grid>
      
      <Box textAlign="center" marginTop={64}>
        <Box backgroundColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-xl)" padding={32} borderWidth={1} borderColor="rgb(255 255 255 / 0.1)" maxWidth="56rem" marginHorizontal="auto">
          <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" marginBottom={16}>Apply These Principles</H3>
          <Paragraph color="var(--neutral-400)" marginBottom={24}>
            Ready to build with these principles? Explore our documentation, try our models, or dive into our open-source platform.
          </Paragraph>
          <YStack display="flex" flexDirection="column" gap={16} justifyContent="center" $sm={{ flexDirection: "row" }}>
            <Anchor tap
              href="https://docs.hanzo.ai"
              target="_blank"
              rel="noopener noreferrer"
              paddingHorizontal={24} paddingVertical={12} backgroundColor="var(--foreground)" color="var(--pure-black)" borderRadius="var(--radius-lg)" transition="all 300ms cubic-bezier(.4,0,.2,1)" hoverStyle={{ backgroundColor: "var(--neutral-100)" }}
            >
              Read Documentation
            </Anchor>
            <Anchor tap
              href="/platform"
              paddingHorizontal={24} paddingVertical={12} backgroundColor="transparent" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" color="var(--foreground)" borderRadius="var(--radius-lg)" transition="all 300ms cubic-bezier(.4,0,.2,1)" hoverStyle={{ backgroundColor: "var(--foreground)", color: "var(--pure-black)" }}
            >
              Explore Platform
            </Anchor>
            <Anchor tap
              href="https://github.com/hanzoai"
              target="_blank"
              rel="noopener noreferrer"
              paddingHorizontal={24} paddingVertical={12} backgroundColor="transparent" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" color="var(--foreground)" borderRadius="var(--radius-lg)" transition="all 300ms cubic-bezier(.4,0,.2,1)" hoverStyle={{ backgroundColor: "var(--foreground)", color: "var(--pure-black)" }}
            >
              Open Source
            </Anchor>
          </YStack>
        </Box>
      </Box>
    </Box>
  );
};

export default ZenOfHanzoPrinciples;