import { Box, Button, ChromeText, Grid, GridLines, H3, Helmet, Link, MotionBox, Paragraph, XStack, YStack } from '@/gui'

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ExternalLink, DollarSign, BarChart, Target, Award, Briefcase, BookOpen } from "lucide-react";


const Affiliates = () => {
  return (
    <Box minHeight="100vh" backgroundColor="var(--black)" color="var(--white)" position="relative" overflow="hidden">
      <Helmet>
        <title>Affiliate Program - Hanzo AI</title>
        <meta name="description" content="Join Hanzo's Affiliate Program and earn recurring commissions for promoting our AI tools and services to your audience." />
      </Helmet>
      
      {/* Background elements */}
      <Box position="fixed" top={0} right={0} bottom={0} left={0} zIndex={-10}>
        <GridLines spacing={100} opacity={0.07} />
        <Box position="absolute" top={0} left={0} width="50%" height="50%" backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)" x="-25%" y="-25%"></Box>
        <Box position="absolute" bottom={0} right={0} width="50%" height="50%" backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)" x="25%" y="25%"></Box>
      </Box>
      
      <Navbar />
      
      <Box render="main" paddingTop={80} paddingBottom={96}>
        {/* Hero Section */}
        <Box render="section" paddingVertical={64} paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
          <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              textAlign="center" marginBottom={64}
            >
              <Box display="inline-block" padding={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--border-strong)" color="var(--foreground)" marginBottom={24}>
                <Briefcase size={32} />
              </Box>
              <ChromeText as="h1" fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}>
                Hanzo Affiliate Program
              </ChromeText>
              <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
                Earn recurring commissions by promoting Hanzo's AI tools and services to your audience. Join our growing network of influencers, content creators, and AI enthusiasts.
              </Paragraph>
              <Box marginTop={32}>
                <Button size="lg" backgroundColor="var(--neutral-600)" paddingHorizontal={32} hoverStyle={{ backgroundColor: "var(--neutral-700)" }}>
                  Apply Now
                </Button>
              </Box>
            </MotionBox>
          </Box>
        </Box>
        
        {/* Commission Structure */}
        <Box render="section" paddingVertical={64} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, transparent, rgb(255 255 255 / 0.1))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
          <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              textAlign="center" marginBottom={48}
            >
              <ChromeText as="h2" fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16}>
                Commission Structure
              </ChromeText>
              <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
                Earn competitive commissions on all Hanzo products and services
              </Paragraph>
            </MotionBox>
            
            <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} marginBottom={64} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
              {[
                {
                  icon: <DollarSign size={40} color="var(--foreground)" />,
                  title: "30% First Payment",
                  description: "Earn 30% commission on the first payment made by customers you refer"
                },
                {
                  icon: <BarChart size={40} color="var(--foreground)" />,
                  title: "15% Recurring Revenue",
                  description: "Continue earning 15% on recurring payments for the lifetime of the customer"
                },
                {
                  icon: <Target size={40} color="var(--foreground)" />,
                  title: "90-Day Cookie",
                  description: "Our 90-day cookie tracking ensures you get credit for your referrals"
                }
              ].map((item, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={32} textAlign="center"
                >
                  <XStack height={80} width={80} borderRadius="var(--radius-full)" backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" display="flex" alignItems="center" justifyContent="center" marginHorizontal="auto" marginBottom={24}>
                    {item.icon}
                  </XStack>
                  <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={12}>{item.title}</H3>
                  <Paragraph color="var(--neutral-300)">{item.description}</Paragraph>
                </MotionBox>
              ))}
            </Grid>
            
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              borderRadius="var(--radius-xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" padding={32} backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))"
            >
              <YStack display="flex" flexDirection="column" alignItems="center" justifyContent="space-between" gap={32} $md={{ flexDirection: "row" }}>
                <div>
                  <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={8}>Revenue Calculator</H3>
                  <Paragraph color="var(--neutral-300)">
                    See how much you could earn as a Hanzo affiliate based on your audience size and conversion rates.
                  </Paragraph>
                </div>
                <Button backgroundColor="var(--neutral-600)" paddingHorizontal={24} hoverStyle={{ backgroundColor: "var(--neutral-700)" }}>
                  Calculate Your Earnings
                </Button>
              </YStack>
            </MotionBox>
          </Box>
        </Box>
        
        {/* Benefits Section */}
        <Box render="section" paddingVertical={64} paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
          <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              textAlign="center" marginBottom={48}
            >
              <ChromeText as="h2" fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16}>
                Why Become an Affiliate
              </ChromeText>
              <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
                Join forces with a leading AI technology company and earn while helping others discover powerful AI tools
              </Paragraph>
            </MotionBox>
            
            <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
              {[
                {
                  icon: <Award size={32} color="var(--foreground)" />,
                  title: "Industry-Leading Commissions",
                  description: "Earn some of the highest commission rates in the AI industry with our tiered structure"
                },
                {
                  icon: <BookOpen size={32} color="var(--foreground)" />,
                  title: "Comprehensive Resources",
                  description: "Access marketing materials, banners, product information, and case studies"
                },
                {
                  icon: <DollarSign size={32} color="var(--foreground)" />,
                  title: "Timely Payments",
                  description: "Get paid reliably every month via PayPal, Stripe, or bank transfer"
                },
                {
                  icon: <BarChart size={32} color="var(--foreground)" />,
                  title: "Detailed Analytics",
                  description: "Track your performance with real-time reporting and conversion data"
                },
                {
                  icon: <Target size={32} color="var(--foreground)" />,
                  title: "Dedicated Support",
                  description: "Work with our affiliate manager to optimize your campaigns and maximize earnings"
                },
                {
                  icon: <ExternalLink size={32} color="var(--foreground)" />,
                  title: "High-Converting Landing Pages",
                  description: "Direct your traffic to optimized pages designed to convert visitors into customers"
                }
              ].map((benefit, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24}
                >
                  <XStack height={48} width={48} borderRadius="var(--radius-lg)" backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}>
                    {benefit.icon}
                  </XStack>
                  <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8}>{benefit.title}</H3>
                  <Paragraph color="var(--neutral-300)">{benefit.description}</Paragraph>
                </MotionBox>
              ))}
            </Grid>
          </Box>
        </Box>
        
        {/* How It Works */}
        <Box render="section" paddingVertical={64} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, transparent, rgb(255 255 255 / 0.1))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
          <Box maxWidth="var(--container-wide)" marginHorizontal="auto">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              textAlign="center" marginBottom={48}
            >
              <ChromeText as="h2" fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16}>
                How It Works
              </ChromeText>
              <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
                Get started with Hanzo's Affiliate Program in just a few simple steps
              </Paragraph>
            </MotionBox>
            
            <Box position="relative">
              <Box position="absolute" left="50%" x="-50%" height="100%" width={2} display="none" backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))" $md={{ display: "block" }}></Box>
              
              <Box rowGap={48} position="relative">
                {[
                  {
                    number: "01",
                    title: "Apply to the Program",
                    description: "Fill out our simple application form to join the Hanzo Affiliate Program"
                  },
                  {
                    number: "02",
                    title: "Get Approved",
                    description: "Our team will review your application and approve your account within 48 hours"
                  },
                  {
                    number: "03",
                    title: "Access Your Dashboard",
                    description: "Get your unique affiliate links and access marketing materials through your dashboard"
                  },
                  {
                    number: "04",
                    title: "Promote Hanzo",
                    description: "Share your affiliate links through your website, social media, newsletter, or other channels"
                  },
                  {
                    number: "05",
                    title: "Track Performance",
                    description: "Monitor your referrals, conversions, and earnings in real-time"
                  },
                  {
                    number: "06",
                    title: "Get Paid",
                    description: "Receive monthly payments for all qualified conversions"
                  }
                ].map((step, index) => (
                  <MotionBox
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    display="flex" flexDirection="column" alignItems="center" gap={32} $md={index % 2 === 0 ? { flexDirection: "row" } : { flexDirection: "row-reverse" }}
                  >
                    <XStack display="flex" justifyContent="center" $md={{ width: "50%" }}>
                      <XStack height={80} width={80} borderRadius="var(--radius-full)" display="flex" alignItems="center" justifyContent="center" fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" zIndex={10} backgroundImage="linear-gradient(to bottom right, var(--neutral-600), var(--neutral-600))">
                        {step.number}
                      </XStack>
                    </XStack>
                    <Box backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24} $md={{ width: "50%" }}>
                      <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8}>{step.title}</H3>
                      <Paragraph color="var(--neutral-300)">{step.description}</Paragraph>
                    </Box>
                  </MotionBox>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
        
        {/* CTA Section */}
        <Box render="section" paddingVertical={64} paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
          <Box maxWidth="64rem" marginHorizontal="auto" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" padding={40} textAlign="center" backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))">
            <ChromeText as="h2" fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16}>
              Ready to Become an Affiliate?
            </ChromeText>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={32} maxWidth="var(--container-prose)" marginHorizontal="auto">
              Join our affiliate program today and start earning commissions by promoting Hanzo's powerful AI tools and services.
            </Paragraph>
            <YStack display="flex" flexDirection="column" gap={16} justifyContent="center" $sm={{ flexDirection: "row" }}>
              <Button size="lg" backgroundColor="var(--neutral-600)" paddingHorizontal={32} hoverStyle={{ backgroundColor: "var(--neutral-700)" }}>
                Apply Now
              </Button>
              <Button size="lg" variant="outline" borderColor="var(--neutral-700)" paddingHorizontal={32} hoverStyle={{ backgroundColor: "var(--neutral-800)" }}>
                <Link tap to="/contact">Contact Us</Link>
              </Button>
            </YStack>
          </Box>
        </Box>
      </Box>
      
      <Footer />
    </Box>
  );
};

export default Affiliates;
