import { Box, Button, Grid, H1, H2, H3, MotionBox, Paragraph, Text, XStack, YStack } from '@/gui'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Users, CreditCard, BarChart3, Calendar, FileText, Mail, MessageSquare, Check } from "lucide-react";

const features = [
  { icon: Users, name: "Team Management", description: "Manage your entire organization" },
  { icon: CreditCard, name: "Billing & Invoicing", description: "Automated financial workflows" },
  { icon: BarChart3, name: "Analytics", description: "Real-time business intelligence" },
  { icon: Calendar, name: "Scheduling", description: "Smart calendar management" },
  { icon: FileText, name: "Documents", description: "AI-powered document processing" },
  { icon: Mail, name: "Email", description: "Unified inbox with AI assist" },
  { icon: MessageSquare, name: "Communication", description: "Team chat and video calls" },
  { icon: Building2, name: "CRM", description: "Customer relationship management" },
];

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "For small teams",
    features: ["Up to 5 team members", "Basic analytics", "Email support"],
  },
  {
    name: "Business",
    price: "$99",
    description: "For growing companies",
    features: ["Up to 50 team members", "Advanced analytics", "Priority support", "Custom integrations"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: ["Unlimited team members", "Dedicated support", "SLA guarantee", "On-premise option"],
  },
];

const OneLanding = () => {
  return (
    <Box minHeight="100vh" backgroundColor="var(--background)" color="var(--foreground)">
      <Navbar />
      {/* Hero */}
      <XStack render="section" position="relative" minHeight="100vh" display="flex" alignItems="center" justifyContent="center" overflow="hidden">
        <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), var(--pure-black), rgb(255 255 255 / 0.08))" />
        <Box position="absolute" top="33.333333%" left="50%" x="-50%" width="800px" height="400px" backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)" />

        <Box position="relative" zIndex={10} marginHorizontal="auto" paddingHorizontal={24} textAlign="center">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <XStack display="inline-flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-full)" backgroundColor="rgb(255 255 255 / 0.1)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" marginBottom={32}>
              <Building2 size={16} />
              All-in-One Business Suite
            </XStack>

            <H1 fontSize="var(--text-5xl)" lineHeight="var(--leading-5xl)" fontWeight="700" marginBottom={24} backgroundClip="text" color="transparent" backgroundImage="linear-gradient(to right, var(--foreground), var(--foreground), var(--foreground))" $md={{ fontSize: "var(--text-7xl)", lineHeight: "var(--leading-7xl)" }}>
              One Platform.
              <br />
              Zero Complexity.
            </H1>

            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-relaxed)" color="var(--neutral-400)" maxWidth="42rem" marginHorizontal="auto" marginBottom={32}>
              Everything you need to run your business. Team management, billing,
              analytics, documents—all powered by AI.
            </Paragraph>

            <YStack display="flex" flexDirection="column" gap={16} justifyContent="center" marginBottom={64} $sm={{ flexDirection: "row" }}>
              <Button size="lg" variant="default" fontWeight="600" paddingHorizontal={32}>
                Start Free Trial
                <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
              </Button>
              <Button size="lg" variant="outline" borderColor="var(--neutral-700)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}>
                Book a Demo
              </Button>
            </YStack>
          </MotionBox>
        </Box>
      </XStack>

      {/* Features Grid */}
      <Box render="section" paddingVertical={96} backgroundColor="var(--neutral-950)">
        <Box marginHorizontal="auto" paddingHorizontal={24}>
          <Box textAlign="center" marginBottom={64}>
            <H2 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={16}>Everything in One Place</H2>
            <Paragraph color="var(--neutral-400)" maxWidth="42rem" marginHorizontal="auto">
              Stop juggling between apps. Hanzo One brings all your business tools together.
            </Paragraph>
          </Box>

          <Grid display="grid" gap={24} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
            {features.map((feature, index) => (
              <MotionBox
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                
                padding={20} borderRadius="var(--radius-xl)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)" }}
              >
                <feature.icon width={32} height={32} color="var(--foreground)" marginBottom={12} />
                <H3 fontWeight="600" marginBottom={4}>{feature.name}</H3>
                <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">{feature.description}</Paragraph>
              </MotionBox>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Pricing */}
      <Box render="section" paddingVertical={96}>
        <Box marginHorizontal="auto" paddingHorizontal={24}>
          <Box textAlign="center" marginBottom={64}>
            <H2 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={16}>Simple Pricing</H2>
            <Paragraph color="var(--neutral-400)">One price for everything. No hidden fees.</Paragraph>
          </Box>

          <Grid display="grid" gap={32} maxWidth="64rem" marginHorizontal="auto" $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
            {plans.map((plan, index) => (
              <MotionBox
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                /* Both fills were `rgb(255 255 255 / 0.5)` — 50% white, which on a
                   #050505 page painted these three cards as light-grey slabs
                   instead of dark ones (the popular card said it twice, as a
                   gradient between two identical stops). That is a `bg-white/5`
                   that lost its zero on the way over: the surface ladder this
                   site actually runs on tops out at 0.2. @hanzo/design already
                   names both rungs a pricing grid needs, so they are used here
                   rather than restated — and the featured card is marked by a
                   brighter HAIRLINE rather than the 2px var(--neutral-500)
                   (#737373) ring it wore, which was the heaviest border on the
                   page and read as a wireframe. */
                position="relative" padding={24} borderRadius="var(--radius-2xl)" borderWidth={1} borderColor={plan.popular ? "var(--white-20)" : "var(--neutral-800)"} backgroundColor={plan.popular ? "var(--surface-card-emphasis)" : "var(--surface-card)"}
              >
                {plan.popular && (
                  <Box position="absolute" top={-12} left="50%" x="-50%" paddingHorizontal={12} paddingVertical={4} backgroundColor="var(--neutral-500)" color="var(--pure-black)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="600" borderRadius="var(--radius-full)">
                    Most Popular
                  </Box>
                )}
                <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={4}>{plan.name}</H3>
                <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" marginBottom={16}>{plan.description}</Paragraph>
                <Box marginBottom={24}>
                  <Text fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700">{plan.price}</Text>
                  {plan.price !== "Custom" && <Text color="var(--neutral-400)">/month</Text>}
                </Box>
                <Box render="ul" rowGap={12} marginBottom={24}>
                  {plan.features.map((feature) => (
                    <XStack key={feature} render="li" display="flex" alignItems="center" gap={8} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)">
                      <Check size={16} color="var(--foreground)" />
                      {feature}
                    </XStack>
                  ))}
                </Box>
                <Button
                  width="100%" variant={plan.popular ? "default" : "secondary"}
                >
                  Get Started
                </Button>
              </MotionBox>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* CTA */}
      <Box render="section" paddingVertical={96} backgroundImage="linear-gradient(to bottom, var(--neutral-950), var(--pure-black))">
        <Box marginHorizontal="auto" paddingHorizontal={24} textAlign="center">
          <H2 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={16}>Ready to Simplify?</H2>
          <Paragraph color="var(--neutral-400)" maxWidth="36rem" marginHorizontal="auto" marginBottom={32}>
            One login, one bill, one place to run the whole business.
          </Paragraph>
          <XStack display="flex" justifyContent="center">
            <Button size="lg" variant="default" fontWeight="600" paddingHorizontal={32}>
              Start Free Trial
            </Button>
          </XStack>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default OneLanding;
