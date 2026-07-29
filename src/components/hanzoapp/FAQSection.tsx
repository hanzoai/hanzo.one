import { Box, H2, Link, MotionBox, Paragraph, Text, XStack } from '@/gui'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";


const BRAND_COLOR = "var(--foreground)";

const faqs = [
  {
    question: "What's the difference between web and desktop?",
    answer: "The web app runs in your browser with cloud sync, perfect for quick access from any device. The desktop app is a native application with offline support, faster performance, and deeper system integrations like file watchers and terminal access.",
  },
  {
    question: "How does Local AI mode work?",
    answer: "Local AI mode runs models entirely on your machine using your GPU. We support Qwen3, Llama, and other open models. Your code and prompts never leave your computer - perfect for sensitive projects or air-gapped environments.",
  },
  {
    question: "What is Hanzo Node?",
    answer: "Hanzo Node lets you contribute compute to the decentralized network and earn LUX tokens. Your node validates AI inferences and participates in Proof of AI consensus. It's optional - you can use Hanzo without running a node.",
  },
  {
    question: "Can I switch between modes?",
    answer: "Yes! Your workspace syncs across all modes when connected. Start on web, continue on desktop, run sensitive tasks locally, and your history follows you. Node mode runs in the background regardless of which interface you use.",
  },
  {
    question: "What models are supported?",
    answer: "Cloud mode supports 100+ models including GPT-4o, Claude, Gemini, and more. Local mode supports Qwen3 (8B-72B), Llama 3, Mistral, and other open models that run on consumer hardware.",
  },
  {
    question: "Is my code private?",
    answer: "In Local AI mode, absolutely - nothing leaves your machine. In cloud mode, we never train on your code and offer SOC 2 compliance, E2E encryption, and enterprise data isolation options.",
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
    <Box render="section" paddingVertical={96} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.08), var(--pure-black))" $md={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-prose)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          textAlign="center" marginBottom={48}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Frequently asked questions
          </H2>
          <Paragraph color="var(--neutral-400)">
            Have another question?{" "}
            <Link tap to="/contact" hoverStyle={{ textDecorationLine: "underline" }} style={{ color: BRAND_COLOR }}>
              Contact us
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
