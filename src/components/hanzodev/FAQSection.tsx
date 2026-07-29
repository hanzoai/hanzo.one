import { Box, H2, Link, MotionBox, Paragraph, Text, XStack } from '@/gui'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageSquare } from "lucide-react";


const BRAND_COLOR = "var(--foreground)";

const faqs = [
  {
    question: "Can I try Hanzo AI Enterprise before committing?",
    answer: "We offer generous credits for teams at large enterprises to experiment with the Hanzo Agent before committing. Contact our sales team to get started with a trial.",
  },
  {
    question: "Can Hanzo AI be deployed on-premise?",
    answer: "Yes, Hanzo AI supports self-hosted and air-gapped deployment options. Our enterprise plan includes on-premise deployment support with full security compliance.",
  },
  {
    question: "What integrations are available?",
    answer: "Hanzo Dev integrates with 500+ tools including GitHub, GitLab, Slack, VS Code, JetBrains IDEs, and all major cloud providers. Check our automations page for the full list.",
  },
  {
    question: "Do you offer volume discounts for large teams?",
    answer: "Yes, we offer competitive volume discounts for teams of 50+ members. Contact our sales team for custom enterprise pricing.",
  },
  {
    question: "What support response times can we expect?",
    answer: "Enterprise customers receive priority support with response times under 4 hours. Pro and Max plan customers receive support within 24 hours.",
  },
  {
    question: "How does Hanzo AI ensure code privacy?",
    answer: "Your code never leaves your environment. Hanzo Dev runs locally with end-to-end encryption. For enterprise deployments, we offer complete data isolation and SOC 2 compliance.",
  },
];

const FAQItem = ({ faq, isOpen, onClick }: { faq: typeof faqs[0]; isOpen: boolean; onClick: () => void }) => {
  return (
    <Box borderBottomWidth={1} borderColor="var(--neutral-800)">
      <XStack minHeight={44}
        onClick={onClick}
        render="button" group width="100%" paddingVertical={24} display="flex" alignItems="center" justifyContent="space-between" textAlign="left"
      >
        <Text fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--foreground)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" paddingRight={16} $group-hover={{ color: "var(--foreground)" }}>
          {faq.question}
        </Text>
        <ChevronDown
          size={20} color="var(--neutral-500)"
        />
      </XStack>
      <AnimatePresence>
        {isOpen && (
          <MotionBox
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            overflow="hidden"
          >
            <Paragraph paddingBottom={24} color="var(--neutral-400)" lineHeight="var(--leading-relaxed)">
              {faq.answer}
            </Paragraph>
          </MotionBox>
        )}
      </AnimatePresence>
    </Box>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundColor="var(--pure-black)">
      <Box maxWidth="var(--container-prose)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          textAlign="center" marginBottom={48}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>
            Frequently Asked{" "}
            <span style={{ color: BRAND_COLOR }}>Questions</span>
          </H2>
          <Paragraph color="var(--neutral-400)">
            Looking for something in particular?{" "}
            <Link tap to="/contact" hoverStyle={{ textDecorationLine: "underline" }} style={{ color: BRAND_COLOR }}>
              Don't hesitate to reach out.
            </Link>
          </Paragraph>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          borderTopWidth={1} borderColor="var(--neutral-800)"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </MotionBox>
      </Box>
    </Box>
  );
};

export default FAQSection;
