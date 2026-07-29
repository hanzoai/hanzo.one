import { Box, Button, ChromeText, MotionBox, Paragraph, Text, XStack, YStack } from '@/gui'
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Terminal, Download } from "lucide-react";

const GetStartedSection = () => {
  return (
    <Box render="section" paddingVertical={128} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.08), var(--pure-black))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="64rem" marginHorizontal="auto" textAlign="center">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ChromeText as="h2" fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>
            Start Using Datastore in Minutes
          </ChromeText>
          <Paragraph fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-300)" marginBottom={48} maxWidth="var(--container-prose)" marginHorizontal="auto">
            Get up and running quickly with multiple installation options for MacOS, Linux, Windows, FreeBSD, and Docker.
          </Paragraph>

          <YStack display="flex" flexDirection="column" alignItems="center" justifyContent="center" rowGap={32} marginBottom={48}>
            <Box backgroundColor="var(--surface-card-emphasis)" padding={24} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" width="100%" maxWidth="42rem">
              <XStack display="flex" alignItems="center" marginBottom={12}>
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Terminal size={20} color="var(--foreground)" /></Box>
                <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">Installation Command</Text>
              </XStack>
              <Box fontFamily="var(--font-mono)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" backgroundColor="rgb(0 0 0 / 0.4)" padding={16} borderRadius="var(--radius-lg)" color="var(--neutral-200)" overflowX="auto">
                curl https://datastore.hanzo.ai/ | sh
              </Box>
            </Box>

            <XStack display="flex" flexWrap="wrap" justifyContent="center" gap={24}>
              <Button
                size="lg"
                color="var(--white)" paddingHorizontal={32} paddingVertical={24} borderRadius="var(--radius-lg)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500" boxShadow="0 10px 15px -3px rgb(0 0 0 / .35)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" display="flex" alignItems="center" backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-500))" hoverStyle={{ boxShadow: "0 20px 25px -5px rgb(0 0 0 / .4)", backgroundImage: "linear-gradient(to right, var(--neutral-500), var(--foreground))" }}
              >
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Download size={20} /></Box>
                Download
              </Button>

              <Button
                size="lg"
                variant="outline"
                borderColor="rgb(255 255 255 / 0.2)" backgroundColor="rgb(255 255 255 / 0.05)" color="var(--white)" paddingHorizontal={32} paddingVertical={24} borderRadius="var(--radius-lg)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" display="flex" alignItems="center" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}
              >
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Code size={20} /></Box>
                View Docs
              </Button>
            </XStack>
          </YStack>

          <MotionBox
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Button
              size="lg"
              color="var(--white)" paddingHorizontal={32} paddingVertical={24} borderRadius="var(--radius-lg)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500" boxShadow="0 10px 15px -3px rgb(0 0 0 / .35)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundImage="linear-gradient(to right, var(--neutral-600), var(--neutral-500))" hoverStyle={{ boxShadow: "0 20px 25px -5px rgb(0 0 0 / .4)", backgroundImage: "linear-gradient(to right, var(--neutral-500), var(--foreground))" }}
            >
              Deploy Now <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={20} /></Box>
            </Button>
          </MotionBox>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default GetStartedSection;
