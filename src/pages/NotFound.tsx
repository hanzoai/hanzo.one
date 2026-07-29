import { Box, H1, H2, Helmet, Link, MotionBox, Paragraph, XStack, YStack, FILL} from '@/gui'
import React from "react";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Home, ArrowLeft, Search, FileQuestion } from "lucide-react";

const BRAND_COLOR = "var(--foreground)";

const NotFound = () => {
  return (
    <YStack minHeight="100vh" backgroundColor="var(--black)" color="var(--white)" display="flex" flexDirection="column">
      <Helmet>
        <title>404 - Page Not Found | Hanzo AI</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>

      <Navbar />

      <XStack render="main" flexGrow={1} display="flex" alignItems="center" justifyContent="center" paddingHorizontal={16} paddingVertical={96}>
        <Box maxWidth="42rem" marginHorizontal="auto" textAlign="center" position="relative">
          {/* Background glow */}
          <Box position="absolute" top={0} right={0} bottom={0} left={0} overflow="hidden" zIndex={0} pointerEvents="none">
            <Box
              position="absolute" top="50%" left="50%" x="-50%" y="-50%" width="600px" height="600px" borderRadius="var(--radius-full)" opacity={0.1}
              style={{
                background: `radial-gradient(circle, ${BRAND_COLOR} 0%, transparent 70%)`,
                filter: "blur(100px)",
              }}
            />
          </Box>

          <Box position="relative" zIndex={10}>
            <MotionBox
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              marginBottom={32}
            >
              <XStack
                width={96} height={96} borderRadius="var(--radius-2xl)" marginHorizontal="auto" display="flex" alignItems="center" justifyContent="center" marginBottom={24}
                style={{ backgroundColor: `${BRAND_COLOR}15` }}
              >
                <FileQuestion size={48} style={{ color: BRAND_COLOR }} />
              </XStack>

              <H1 fontSize="var(--text-8xl)" lineHeight="var(--leading-8xl)" fontWeight="700" marginBottom={16} backgroundClip="text" color="transparent" backgroundImage="linear-gradient(to bottom, var(--foreground), var(--neutral-600))" $md={{ fontSize: "var(--text-9xl)", lineHeight: "var(--leading-9xl)" }}>
                404
              </H1>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-3xl)", lineHeight: "var(--leading-3xl)" }}>
                Page not found
              </H2>
              <Paragraph color="var(--neutral-400)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" marginBottom={40} maxWidth="28rem" marginHorizontal="auto">
                The page you're looking for doesn't exist or has been moved to a new location.
              </Paragraph>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={16} $sm={{ flexDirection: "row" }}
            >
              <Link minHeight={44} 
                to="/"
                paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" hoverStyle={{ opacity: 0.9 }}
                style={FILL}
              >
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Home size={16} /></Box>
                Go to Homepage
              </Link>
              <XStack minHeight={44}
                onClick={() => window.history.back()}
                render="button" display="inline-flex" alignItems="center" paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderWidth={1} borderColor="var(--neutral-700)" backgroundColor="transparent" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
              >
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><ArrowLeft size={16} /></Box>
                Go Back
              </XStack>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              marginTop={48}
            >
              <Paragraph color="var(--neutral-500)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" marginBottom={16}>Looking for something?</Paragraph>
              <XStack display="flex" flexWrap="wrap" justifyContent="center" gap={12}>
                <Link tap
                  to="/products"
                  paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-lg)" backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)", borderColor: "var(--neutral-700)" }}
                >
                  Products
                </Link>
                <Link tap
                  to="/docs"
                  paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-lg)" backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)", borderColor: "var(--neutral-700)" }}
                >
                  Documentation
                </Link>
                <Link tap
                  to="/contact"
                  paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-lg)" backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)", borderColor: "var(--neutral-700)" }}
                >
                  Contact
                </Link>
                <Link tap
                  to="/status"
                  paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-lg)" backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)", borderColor: "var(--neutral-700)" }}
                >
                  Status
                </Link>
              </XStack>
            </MotionBox>
          </Box>
        </Box>
      </XStack>

      <Footer />
    </YStack>
  );
};

export default NotFound;
