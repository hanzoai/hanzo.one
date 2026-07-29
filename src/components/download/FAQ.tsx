import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Box, H2, MotionBox } from '@/gui'
import React from "react";
import { motion } from "framer-motion";


const FAQ = () => {
  const faqs = [
    {
      question: "What platforms does the Hanzo desktop app support?",
      answer: "Currently, the Hanzo desktop app supports macOS (both Apple Silicon and Intel) and Windows. Mobile support for iOS and Android is coming soon. We also offer browser extensions for Chrome, Firefox, and Edge, as well as a VS Code extension."
    },
    {
      question: "How do the browser extensions differ from the desktop app?",
      answer: "The browser extensions provide core Hanzo functionality within your browser, while the desktop app offers system-wide capabilities including screen capture, voice commands, and integration with all applications on your computer. For the most complete experience, we recommend using the desktop app."
    },
    {
      question: "Is my data kept private?",
      answer: "Yes, your data privacy is our priority. Audio transcription and screen captures are processed locally on your device whenever possible, and we maintain strict data protection policies for any cloud processing."
    },
    {
      question: "How do I get started with the desktop app?",
      answer: "Simply download the appropriate version for your operating system, run the installer, and follow the on-screen instructions. The app will guide you through the initial setup process."
    },
    {
      question: "Can I use the desktop app offline?",
      answer: "Some features are available offline, but full functionality requires an internet connection for AI processing and integration with cloud services."
    },
    {
      question: "Do I need a subscription to use the desktop app?",
      answer: "The basic features of the desktop app are free to use. Premium features require a Hanzo subscription, which you can manage through your account settings."
    },
    {
      question: "How does the VS Code extension work with Hanzo?",
      answer: "The Hanzo VS Code extension brings AI-powered code assistance directly into your development environment. It works alongside the desktop app to provide contextual code generation, refactoring, and documentation based on your project context."
    }
  ];

  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundColor="var(--black)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="56rem" marginHorizontal="auto">
        <MotionBox
          textAlign="center" marginBottom={48}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16} color="var(--white)" $sm={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Common Questions
          </H2>
        </MotionBox>
        
        <MotionBox 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible rowGap={16}>
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" overflow="hidden" backgroundColor="var(--surface-card-emphasis)"
              >
                <AccordionTrigger paddingHorizontal={24} paddingVertical={16} textAlign="left" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500" color="var(--white)" hoverStyle={{ textDecorationLine: "none" }}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent paddingHorizontal={24} paddingBottom={16} color="var(--neutral-300)">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default FAQ;
