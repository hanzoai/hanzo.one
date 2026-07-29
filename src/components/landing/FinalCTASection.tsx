import { Box, Link, MotionBox, MotionText } from '@/gui'
import React from "react";
import { motion } from "framer-motion";

import { ArrowRight, MessageSquare } from "lucide-react";

const BRAND_COLOR = "var(--foreground)";

const FinalCTASection = () => {
  return (
    <Box render="section" paddingVertical={128} paddingHorizontal={16} backgroundColor="var(--pure-black)" position="relative" overflow="hidden" $md={{ paddingHorizontal: 32 }}>
      {/* Background effects */}
      <Box position="absolute" top={0} right={0} bottom={0} left={0}>
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          position="absolute" top="50%" left="50%" x="-50%" y="-50%" width="600px" height="600px" borderRadius="var(--radius-full)"
          style={{
            background: `radial-gradient(circle, ${BRAND_COLOR} 0%, transparent 60%)`,
            filter: "blur(100px)",
          }}
        />
      </Box>

      <Box maxWidth="56rem" marginHorizontal="auto" position="relative" zIndex={10}>
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          textAlign="center"
        >
          <MotionText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="500" color="var(--foreground)" marginBottom={24} $md={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}
          >
            Ship faster.{" "}
            <span style={{ color: BRAND_COLOR }}>Keep control.</span>
          </MotionText>

          <MotionText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-400)" marginBottom={48} maxWidth="42rem" marginHorizontal="auto"
          >
            The governed agent platform for shipping production software—fast, verifiable, and under your policies.
          </MotionText>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={16} $sm={{ flexDirection: "row" }}
          >
            <Link
              to="/get-started"
              width="100%" display="inline-flex" justifyContent="center" alignItems="center" paddingHorizontal={32} paddingVertical={16} borderRadius="var(--radius-full)" fontWeight="500" color="var(--foreground)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $sm={{ width: "auto" }} hoverStyle={{ opacity: 0.9 }}
              style={{ backgroundColor: BRAND_COLOR }}
            >
              Start free
              <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={20} /></Box>
            </Link>

            <Link
              to="/contact"
              width="100%" display="inline-flex" justifyContent="center" alignItems="center" paddingHorizontal={32} paddingVertical={16} borderRadius="var(--radius-full)" fontWeight="500" color="var(--foreground)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" borderWidth={1} borderColor="var(--neutral-700)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $sm={{ width: "auto" }} hoverStyle={{ backgroundColor: "var(--neutral-900)", borderColor: "var(--neutral-600)" }}
            >
              <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><MessageSquare size={20} /></Box>
              Talk to sales
            </Link>
          </MotionBox>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default FinalCTASection;
