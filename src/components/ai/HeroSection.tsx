import { Box, Button, H1, H3, Link, MotionBox, MotionText, Paragraph, Text, XStack, YStack, FILL} from '@/gui'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PenLine,
  BookOpen,
  Code,
  Send,
  ArrowUp,
  X,
  Apple,
  CheckSquare,
  Square,
} from "lucide-react";


const BRAND_COLOR = "var(--foreground)";

// Quick action presets
const chatPresets = [
  { icon: PenLine, label: "Write" },
  { icon: BookOpen, label: "Learn" },
  { icon: Code, label: "Code" },
];

const HeroSection = () => {
  const [chatInput, setChatInput] = useState("");
  const [showMacOSPromo, setShowMacOSPromo] = useState(true);

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (chatInput.trim()) {
      // Open global chat with this message
      window.dispatchEvent(new CustomEvent('openGlobalChat', { detail: { message: chatInput } }));
      setChatInput("");
    }
  };

  const handlePresetClick = (label: string) => {
    window.dispatchEvent(new CustomEvent('openGlobalChat', { detail: { action: label } }));
  };

  return (
    <YStack render="section" position="relative" minHeight="85vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center" overflow="hidden">
      {/* Subtle background gradient */}
      <Box position="absolute" top={0} right={0} bottom={0} left={0} pointerEvents="none">
        <Box position="absolute" top="33.333333%" left="25%" width="600px" height="600px" backgroundColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-full)" filter="blur(120px)"></Box>
        <Box position="absolute" bottom="33.333333%" right="25%" width="400px" height="400px" backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-full)" filter="blur(100px)"></Box>
      </Box>

      <Box marginHorizontal="auto" paddingHorizontal={16} position="relative" zIndex={10} $sm={{ paddingHorizontal: 24 }}>
        <Box maxWidth="var(--container-prose)" marginHorizontal="auto">
          {/* Main headline */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            textAlign="center" marginBottom={32}
          >
            <H1 fontSize="var(--text-5xl)" lineHeight="var(--leading-5xl)" fontWeight="700" color="var(--foreground)" marginBottom={16} letterSpacing="var(--tracking-tight)" $md={{ fontSize: "var(--text-7xl)", lineHeight: "var(--leading-7xl)" }}>
              Meet your
              <br />
              <span style={{ color: BRAND_COLOR }}>thinking partner.</span>
            </H1>
          </MotionBox>

          {/* Subtitle */}
          <MotionText
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-400)" textAlign="center" marginBottom={40} maxWidth="36rem" marginHorizontal="auto"
          >
            Tackle any big, bold, bewildering challenge with Hanzo AI.
          </MotionText>

          {/* Chat input */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleChatSubmit}
            marginBottom={24}
          >
            <XStack position="relative" display="flex" alignItems="center">
              <Box display="inline-block" minHeight={44}
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="How can I help you today?"
                render="input" width="100%" backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-700)" borderRadius="var(--radius-xl)" paddingHorizontal={20} paddingVertical={16} paddingRight={144} fontSize="var(--text-base)" lineHeight="var(--leading-base)" color="var(--foreground)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" focusStyle={{ outlineStyle: "none", borderColor: "var(--neutral-600)" }}
              />
              <Button
                type="submit"
                position="absolute" right={8} paddingHorizontal={20} paddingVertical={8} borderRadius="var(--radius-lg)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" display="flex" alignItems="center" gap={8}
                style={FILL}
              >
                Ask Hanzo
                <ArrowUp size={16} />
              </Button>
            </XStack>
          </MotionBox>

          {/* Quick action buttons */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            flexDirection="row" display="flex" justifyContent="center" gap={12}
          >
            {chatPresets.map((preset) => {
              const Icon = preset.icon;
              return (
                <XStack minHeight={44}
                  key={preset.label}
                  onClick={() => handlePresetClick(preset.label)}
                  render="button" display="inline-flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-lg)" backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)" color="var(--neutral-300)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-800)", color: "var(--foreground)" }}
                >
                  <Icon width={16} height={16} />
                  {preset.label}
                </XStack>
              );
            })}
          </MotionBox>
        </Box>
      </Box>

      {/* macOS Download Promo - Bottom right popup */}
      <AnimatePresence>
        {showMacOSPromo && (
          <MotionBox
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, delay: 1 }}
            position="fixed" bottom={24} right={24} zIndex={50} maxWidth="24rem"
          >
            <Box backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-2xl)" padding={20} boxShadow="0 25px 50px -12px rgb(0 0 0 / .5)">
              {/* Header with close button */}
              <XStack display="flex" alignItems="center" justifyContent="space-between" marginBottom={12}>
                <XStack display="flex" alignItems="center" gap={8} color="var(--neutral-500)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">
                  <Text width={6} height={6} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)"></Text>
                  Preview
                </XStack>
                <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44}
                  onClick={() => setShowMacOSPromo(false)}
                  render="button" color="var(--neutral-500)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}
                >
                  <X size={16} />
                </Box>
              </XStack>

              <XStack display="flex" gap={16}>
                {/* Text content */}
                <Box flex={1}>
                  <H3 color="var(--foreground)" fontWeight="600" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" marginBottom={8}>
                    Some tasks just work better on macOS
                  </H3>
                  <Paragraph color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" marginBottom={16}>
                    With Hanzo Dev, AI can now work directly with your local files and tools. Available in the macOS app.
                  </Paragraph>

                  {/* Action buttons */}
                  <XStack display="flex" gap={8}>
                    <Link tap to="/download">
                      <Button
                        size="sm"
                        variant="outline"
                        color="var(--foreground)" borderColor="var(--neutral-700)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
                      >
                        Download
                      </Button>
                    </Link>
                    <Link tap to="/dev">
                      <Button
                        size="sm"
                        style={FILL}
                      >
                        Learn more
                      </Button>
                    </Link>
                  </XStack>
                </Box>

                {/* Visual - Checklist illustration */}
                <YStack width={96} height={96} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-xl)" display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center" padding={12} flexShrink={0}>
                  <XStack display="flex" alignItems="center" gap={8} marginBottom={8}>
                    <CheckSquare size={16} color="var(--foreground)" />
                    <Box width={40} height={6} backgroundColor="var(--neutral-700)" borderRadius="var(--radius)"></Box>
                  </XStack>
                  <XStack display="flex" alignItems="center" gap={8} marginBottom={8}>
                    <Square size={16} color="var(--neutral-600)" />
                    <Box width={32} height={6} backgroundColor="var(--neutral-700)" borderRadius="var(--radius)"></Box>
                  </XStack>
                  <XStack display="flex" alignItems="center" gap={8}>
                    <Square size={16} color="var(--neutral-600)" />
                    <Box width={24} height={6} backgroundColor="var(--neutral-700)" borderRadius="var(--radius)"></Box>
                  </XStack>
                </YStack>
              </XStack>
            </Box>
          </MotionBox>
        )}
      </AnimatePresence>
    </YStack>
  );
};

export default HeroSection;
