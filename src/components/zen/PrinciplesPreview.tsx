import { Box, Grid, H2, H3, Link, MotionBox, Paragraph, Text, XStack } from '@/gui'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Info, X } from "lucide-react";

import { principles } from "./data/zenPrinciples";

interface WisdomDialogProps {
  principle: {
    number: string;
    title: string;
    description: string;
    discipline: string;
    emoji: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const WisdomDialog: React.FC<WisdomDialogProps> = ({ principle, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <MotionBox 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          flexDirection="row" position="fixed" top={0} right={0} bottom={0} left={0} backgroundColor="rgb(0 0 0 / 0.8)" backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" zIndex={50} display="flex" alignItems="center" justifyContent="center" padding={16}
          onClick={onClose}
        >
          <MotionBox
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            borderWidth={1} borderColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-2xl)" maxWidth="28rem" width="100%" padding={24} boxShadow="0 20px 25px -5px rgb(0 0 0 / .4)" backgroundImage="linear-gradient(to bottom right, var(--neutral-900), var(--pure-black))"
            onClick={(e) => e.stopPropagation()}
          >
            <XStack display="flex" alignItems="flex-start" justifyContent="space-between" marginBottom={16}>
              <XStack display="flex" alignItems="center">
                <XStack width={32} height={32} display="flex" alignItems="center" justifyContent="center" backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" color="var(--foreground)" marginRight={12}>
                  {principle.emoji}
                </XStack>
                <div>
                  <H3 color="var(--foreground)" fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500">{principle.title}</H3>
                  <Box color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                    {principle.discipline}
                  </Box>
                </div>
              </XStack>
              <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44} 
                onClick={onClose}
                render="button" color="var(--neutral-400)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}
              >
                <X size={20} />
              </Box>
            </XStack>
            
            <Box marginBottom={16} color="var(--neutral-200)" fontWeight="500">
              "{principle.description}"
            </Box>
            
            <Box color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
              Deep mastery of this principle leads to engineering excellence. Apply it consistently to create systems that are elegant, resilient, and sustainable.
            </Box>
            
            <Box marginTop={24} paddingTop={16} borderTopWidth={1} borderColor="rgb(255 255 255 / 0.1)" textAlign="center">
              <Link minHeight={44} 
                to="/philosophy" 
                color="var(--neutral-400)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" display="flex" justifyContent="center" hoverStyle={{ color: "var(--foreground)" }}
              >
                <span>Explore more principles</span>
                <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={12} /></Box>
              </Link>
            </Box>
          </MotionBox>
        </MotionBox>
      )}
    </AnimatePresence>
  );
};

const PrinciplesPreview = () => {
  const [selectedPrinciple, setSelectedPrinciple] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedDiscipline, setSelectedDiscipline] = useState<string | null>(null);

  // Get unique disciplines from principles
  const disciplines = Array.from(new Set(principles.map(p => p.discipline)));

  // Get 8 representative principles - one from each discipline
  const previewPrinciples = disciplines.map(discipline => {
    return principles.find(p => p.discipline === discipline);
  }).filter(Boolean);

  const openWisdomDialog = (principle: any) => {
    setSelectedPrinciple(principle);
    setIsDialogOpen(true);
  };

  const closeWisdomDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} position="relative" id="principles">
      <Box 
        position="absolute" top={0} right={0} bottom={0} left={0} pointerEvents="none" opacity={0.5}
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(20,20,20,1) 100%)"
        }}
      />
      
      <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          textAlign="center" marginBottom={48}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16} display="inline-block" backgroundClip="text" color="transparent" backgroundImage="linear-gradient(to bottom, var(--foreground), rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))">
            Zen of Hanzo
          </H2>
          <Paragraph color="var(--neutral-500)" maxWidth="42rem" marginHorizontal="auto">
            Engineering principles rooted in ancient wisdom, designed for modern developers building 
            next-generation AI systems and applications.
          </Paragraph>
        </MotionBox>
        
        {/* Discipline Filter */}
        <XStack display="flex" flexWrap="wrap" justifyContent="center" gap={8} marginBottom={48}>
          <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44}
            render="button" paddingHorizontal={12} paddingVertical={4} borderRadius="var(--radius-full)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundColor={selectedDiscipline === null ? "rgb(255 255 255 / 0.2)" : "rgb(255 255 255 / 0.5)"} color={selectedDiscipline === null ? "var(--foreground)" : "var(--neutral-400)"} hoverStyle={selectedDiscipline === null ? undefined : { backgroundColor: "var(--neutral-800)", color: "var(--neutral-300)" }}
            onClick={() => setSelectedDiscipline(null)}
          >
            All
          </Box>
          {disciplines.map(discipline => (
            <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44}
              key={discipline}
              render="button" paddingHorizontal={12} paddingVertical={4} borderRadius="var(--radius-full)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundColor={selectedDiscipline === discipline ? "rgb(255 255 255 / 0.2)" : "rgb(255 255 255 / 0.5)"} color={selectedDiscipline === discipline ? "var(--foreground)" : "var(--neutral-400)"} hoverStyle={selectedDiscipline === discipline ? undefined : { backgroundColor: "var(--neutral-800)", color: "var(--neutral-300)" }}
              onClick={() => setSelectedDiscipline(discipline)}
            >
              {discipline}
            </Box>
          ))}
        </XStack>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $sm={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
          {(selectedDiscipline 
            ? previewPrinciples.filter(p => p?.discipline === selectedDiscipline)
            : previewPrinciples
          ).map((principle, index) => principle && (
            <MotionBox
              key={principle.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              
              viewport={{ once: true }}
              whileHover={{ 
                y: -5, 
                transition: { duration: 0.2 }
              }}
              group borderWidth={1} borderColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-2xl)" padding={24} transition="all 300ms cubic-bezier(.4,0,.2,1)" position="relative" overflow="hidden" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))" hoverStyle={{ borderColor: "var(--border-strong)", boxShadow: "0 10px 15px -3px rgb(0 0 0 / .35)" }}
              onClick={() => openWisdomDialog(principle)}
            >
              <Box position="absolute" top={8} right={8} color="rgb(255 255 255 / 0.4)" opacity={0} transition="opacity var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ opacity: 1 }}>
                <Info size={16} />
              </Box>
              
              <XStack display="flex" alignItems="center" marginBottom={16}>
                <XStack width={40} height={40} borderRadius="var(--radius-full)" backgroundColor="rgb(255 255 255 / 0.1)" display="flex" alignItems="center" justifyContent="center" marginRight={12} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)">
                  {principle.emoji}
                </XStack>
                <div>
                  <H3 color="var(--foreground)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500">{principle.title}</H3>
                  <Box color="var(--neutral-500)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                    {principle.discipline}
                  </Box>
                </div>
              </XStack>
              <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" marginBottom={16}>{principle.description}</Paragraph>
              
              <MotionBox 
                position="absolute" top={0} right={0} bottom={0} left={0} backgroundColor="rgb(255 255 255 / 0.05)" opacity={0} transition="opacity var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderRadius="var(--radius-2xl)" $group-hover={{ opacity: 1 }}
                initial={false}
                whileHover={{ scale: 1.05, opacity: 0.1 }}
              />
            </MotionBox>
          ))}
        </Grid>
        
        <Box textAlign="center" marginTop={48}>
          <Link minHeight={44} to="/philosophy" group color="var(--neutral-400)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}>
            <Text $group-hover={{ textDecorationLine: "underline" }}>Learn more principles</Text>
            <Box render="span" display="inline-flex" alignItems="center" marginLeft={8} $group-hover={{ x: 4 }}><ArrowRight size={16} /></Box>
          </Link>
        </Box>
      </Box>

      {selectedPrinciple && (
        <WisdomDialog 
          principle={selectedPrinciple} 
          isOpen={isDialogOpen} 
          onClose={closeWisdomDialog} 
        />
      )}
    </Box>
  );
};

export default PrinciplesPreview;