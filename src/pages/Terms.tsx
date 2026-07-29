import { Anchor, Box, Grid, H2, H3, Helmet, Link, MotionBox, MotionText, Paragraph, Text, XStack, FILL} from '@/gui'
import React from "react";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Scale, Shield, Clock, ArrowRight, CheckCircle } from "lucide-react";

const BRAND_COLOR = "var(--foreground)";

const TERMS_HIGHLIGHTS = [
  {
    icon: FileText,
    title: "Clear Terms",
    description: "Plain language terms that are easy to understand, no legal jargon.",
  },
  {
    icon: Scale,
    title: "Fair Use",
    description: "Reasonable usage policies designed for developers and businesses.",
  },
  {
    icon: Shield,
    title: "Data Rights",
    description: "Your content remains yours. We only use it to provide our services.",
  },
  {
    icon: Clock,
    title: "Notice of Changes",
    description: "We'll notify you of any material changes to these terms.",
  },
];

const Terms = () => {
  return (
    <Box minHeight="100vh" backgroundColor="var(--black)" color="var(--white)">
      <Helmet>
        <title>Terms of Service - Hanzo AI</title>
        <meta
          name="description"
          content="Hanzo AI terms of service - the conditions for using our platform and services."
        />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <Box render="section" position="relative" paddingTop={96} paddingBottom={64} paddingHorizontal={16} overflow="hidden" $md={{ paddingHorizontal: 32 }} $lg={{ paddingHorizontal: 48 }}>
          <Box position="absolute" top={0} right={0} bottom={0} left={0} overflow="hidden" zIndex={0} pointerEvents="none">
            <Box
              position="absolute" top="50%" left="50%" x="-50%" y="-50%" width="800px" height="800px" borderRadius="var(--radius-full)" opacity={0.1}
              style={{
                background: `radial-gradient(circle, ${BRAND_COLOR} 0%, transparent 70%)`,
                filter: "blur(100px)",
              }}
            />
          </Box>

          <Box maxWidth="64rem" marginHorizontal="auto" position="relative" zIndex={10}>
            <Box textAlign="center">
              <MotionBox
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                flexDirection="row" display="inline-flex" alignItems="center" gap={8} paddingHorizontal={12} paddingVertical={4} borderRadius="var(--radius-full)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" marginBottom={24}
                style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
              >
                <FileText size={14} />
                Legal Agreement
              </MotionBox>

              <MotionText
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                fontSize="var(--text-3xl)" lineHeight="1.1" fontWeight="500" letterSpacing="var(--tracking-tight)" marginBottom={24} $sm={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }} $lg={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }} $xl={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}
              >
                <Text color="var(--foreground)">Terms of</Text>
                <br />
                <Text color="var(--neutral-400)">Service.</Text>
              </MotionText>

              <MotionText
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                fontSize="var(--text-base)" lineHeight="var(--leading-relaxed)" color="var(--neutral-400)" marginBottom={40} maxWidth="var(--container-prose)" marginHorizontal="auto" $lg={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-lg)" }}
              >
                These terms govern your use of Hanzo AI platform and services.
                We've written them in plain language to be as clear as possible.
              </MotionText>

              <MotionBox
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                flexDirection="row" display="flex" flexWrap="wrap" alignItems="center" justifyContent="center" gap={16}
              >
                <Anchor minHeight={44} 
                  href="#terms-content"
                  paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" hoverStyle={{ opacity: 0.9 }}
                  style={FILL}
                >
                  Read Full Terms
                  <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
                </Anchor>
                <Link tap
                  to="/privacy"
                  display="inline-flex" alignItems="center" paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderWidth={1} borderColor="var(--neutral-700)" backgroundColor="transparent" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
                >
                  Privacy Policy
                </Link>
              </MotionBox>
            </Box>
          </Box>
        </Box>

        {/* Terms Highlights */}
        <Box render="section" paddingVertical={64} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, var(--pure-black), rgb(255 255 255 / 0.08))" $md={{ paddingHorizontal: 32 }}>
          <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
            <Grid display="grid" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
              {TERMS_HIGHLIGHTS.map((item, index) => {
                const Icon = item.icon;
                return (
                  <MotionBox
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24}
                  >
                    <XStack
                      width={48} height={48} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}
                      style={{ backgroundColor: `${BRAND_COLOR}15` }}
                    >
                      <Icon width={24} height={24} style={{ color: BRAND_COLOR }} />
                    </XStack>
                    <H3 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--foreground)" marginBottom={8}>{item.title}</H3>
                    <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">{item.description}</Paragraph>
                  </MotionBox>
                );
              })}
            </Grid>
          </Box>
        </Box>

        {/* Terms Content */}
        <Box id="terms-content" render="section" paddingVertical={64} paddingHorizontal={16} $md={{ paddingHorizontal: 32 }}>
          <Box maxWidth="56rem" marginHorizontal="auto">
            <Box maxWidth="none">
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" marginTop={32} marginBottom={16} color="var(--foreground)">Use of Services</H2>
                <Paragraph color="var(--neutral-300)" marginBottom={24}>
                  Our services are provided for business and development purposes. You may use our services
                  only as permitted by these terms and any applicable laws and regulations.
                </Paragraph>

                <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" marginTop={32} marginBottom={16} color="var(--foreground)">User Accounts</H2>
                <Paragraph color="var(--neutral-300)" marginBottom={24}>
                  You may need to create an account to use some of our services. You are responsible for
                  maintaining the security of your account and password. Hanzo AI cannot and will not
                  be liable for any loss or damage from your failure to comply with this security obligation.
                </Paragraph>

                <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" marginTop={32} marginBottom={16} color="var(--foreground)">Content and Intellectual Property</H2>
                <Paragraph color="var(--neutral-300)" marginBottom={24}>
                  Content you create using our services remains yours. However, by using our services,
                  you grant us a license to use, host, store, reproduce, and modify such content as needed
                  to provide the services.
                </Paragraph>

                <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" marginTop={32} marginBottom={16} color="var(--foreground)">API Usage and Rate Limits</H2>
                <Paragraph color="var(--neutral-300)" marginBottom={24}>
                  Our APIs are subject to rate limits and usage restrictions. Excessive use that negatively
                  impacts our services or other users may result in temporary or permanent restriction of your access.
                </Paragraph>

                <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" marginTop={32} marginBottom={16} color="var(--foreground)">Termination</H2>
                <Paragraph color="var(--neutral-300)" marginBottom={24}>
                  We may terminate or suspend your access to our services immediately, without prior notice
                  or liability, for any reason, including breach of these Terms.
                </Paragraph>

                <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" marginTop={32} marginBottom={16} color="var(--foreground)">Disclaimer of Warranties</H2>
                <Paragraph color="var(--neutral-300)" marginBottom={24}>
                  Our services are provided "as is" and "as available" without any warranties of any kind,
                  either express or implied.
                </Paragraph>

                <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" marginTop={32} marginBottom={16} color="var(--foreground)">Limitation of Liability</H2>
                <Paragraph color="var(--neutral-300)" marginBottom={24}>
                  In no event shall Hanzo AI be liable for any indirect, incidental, special,
                  consequential or punitive damages, or any loss of profits or revenues.
                </Paragraph>

                <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" marginTop={32} marginBottom={16} color="var(--foreground)">Changes to Terms</H2>
                <Paragraph color="var(--neutral-300)" marginBottom={24}>
                  We reserve the right to modify these terms at any time. We will provide notice of
                  significant changes by posting an announcement on our website and sending you an email.
                </Paragraph>

                <Paragraph marginTop={32} color="var(--neutral-500)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
                  Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </Paragraph>
              </MotionBox>
            </Box>
          </Box>
        </Box>

        {/* CTA Section */}
        <Box render="section" paddingVertical={96} paddingHorizontal={16} position="relative" overflow="hidden" backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.08), var(--pure-black))" $md={{ paddingHorizontal: 32 }}>
          <Box position="absolute" top={-160} right={-160} width={320} height={320} backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)" pointerEvents="none" />
          <Box position="absolute" bottom={-160} left={-160} width={320} height={320} backgroundColor="rgb(255 255 255 / 0.05)" borderRadius="var(--radius-full)" filter="blur(64px)" pointerEvents="none" />

          <Box maxWidth="56rem" marginHorizontal="auto" textAlign="center" position="relative" zIndex={10}>
            <MotionText
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}
            >
              Have questions?
            </MotionText>

            <MotionText
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" marginBottom={40} maxWidth="42rem" marginHorizontal="auto"
            >
              Our team is available to answer any questions about our terms of service.
            </MotionText>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              flexDirection="row" display="flex" flexWrap="wrap" alignItems="center" justifyContent="center" gap={16}
            >
              <Link minHeight={44} 
                to="/contact"
                paddingHorizontal={32} paddingVertical={16} borderRadius="var(--radius-full)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-base)" lineHeight="var(--leading-base)" hoverStyle={{ opacity: 0.9 }}
                style={FILL}
              >
                Contact Us
                <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={20} /></Box>
              </Link>
              <Anchor tap
                href="mailto:legal@hanzo.ai"
                display="inline-flex" alignItems="center" paddingHorizontal={32} paddingVertical={16} borderRadius="var(--radius-full)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderWidth={1} borderColor="var(--neutral-700)" backgroundColor="transparent" fontSize="var(--text-base)" lineHeight="var(--leading-base)" color="var(--foreground)" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}
              >
                legal@hanzo.ai
              </Anchor>
            </MotionBox>
          </Box>
        </Box>
      </main>

      <Footer />
    </Box>
  );
};

export default Terms;
