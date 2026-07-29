import { Box, Button, ChromeText, Grid, GridLines, H2, H3, Helmet, Link, MotionBox, Paragraph, XStack, YStack, useToast } from '@/gui'

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Copy, Check, Gift, Users, Share2, DollarSign } from "lucide-react";


const Referrals = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  
  // Example referral link
  const referralLink = "https://hanzo.ai/signup?ref=YOUR_USERNAME";
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    
    toast({
      title: "Link copied!",
      description: "Your referral link has been copied to the clipboard",
    });
    
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <Box minHeight="100vh" backgroundColor="var(--black)" color="var(--white)" position="relative" overflow="hidden">
      <Helmet>
        <title>Referral Program - Hanzo AI</title>
        <meta name="description" content="Invite friends to Hanzo and earn $5 in credits for every successful referral. Our referral program rewards you for sharing the power of Hanzo AI with others." />
      </Helmet>
      
      {/* Background elements */}
      <Box position="fixed" top={0} right={0} bottom={0} left={0} zIndex={-10}>
        <GridLines spacing={100} opacity={0.07} />
        <Box position="absolute" top={0} right={0} width="50%" height="50%" backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)" x="25%" y="-25%"></Box>
        <Box position="absolute" bottom={0} left={0} width="50%" height="50%" backgroundColor="rgb(255 255 255 / 0.1)" borderRadius="var(--radius-full)" filter="blur(64px)" x="-25%" y="25%"></Box>
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
                <Gift size={32} />
              </Box>
              <ChromeText as="h1" fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}>
                Hanzo Referral Program
              </ChromeText>
              <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
                Share Hanzo with friends and colleagues to earn rewards. For every person who signs up and starts using our platform, you'll receive $5 in credits.
              </Paragraph>
            </MotionBox>
            
            {/* Referral Link Section */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              maxWidth="var(--container-prose)" marginHorizontal="auto" backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={32} marginBottom={64}
            >
              <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={16}>Your Referral Link</H2>
              <XStack display="flex" alignItems="center" gap={8} marginBottom={24}>
                <Box flex={1} backgroundColor="var(--neutral-800)" padding={16} borderRadius="var(--radius-lg)" color="var(--neutral-300)" fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" overflow="hidden">
                  {referralLink}
                </Box>
                <Button
                  onClick={copyToClipboard}
                  flexShrink={0} backgroundColor="var(--neutral-600)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}
                >
                  {copied ? <Check size={20} /> : <Copy size={20} />}
                </Button>
              </XStack>
              
              <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={16} $sm={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
                <Button
                  variant="outline"
                  display="flex" gap={8} borderColor="var(--neutral-700)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
                  onClick={() => window.open(`https://twitter.com/intent/tweet?text=Check out Hanzo AI!&url=${encodeURIComponent(referralLink)}`, '_blank')}
                >
                  <Box display="inline-block" render="svg" height={20} width={20} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </Box>
                  Share on Twitter
                </Button>
                <Button
                  variant="outline"
                  display="flex" gap={8} borderColor="var(--neutral-700)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
                  onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(referralLink)}`, '_blank')}
                >
                  <Box display="inline-block" render="svg" height={20} width={20} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </Box>
                  Share on LinkedIn
                </Button>
                <Button
                  variant="outline"
                  display="flex" gap={8} borderColor="var(--neutral-700)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
                  onClick={() => window.open(`mailto:?subject=Check out Hanzo AI&body=I've been using Hanzo AI and thought you might be interested. Use my referral link to sign up: ${referralLink}`, '_blank')}
                >
                  <Box display="inline-block" render="svg" height={20} width={20} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </Box>
                  Share via Email
                </Button>
              </Grid>
            </MotionBox>
            
            {/* How It Works */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              maxWidth="56rem" marginHorizontal="auto" marginBottom={64}
            >
              <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={32} textAlign="center">How It Works</H2>
              <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
                {[
                  {
                    icon: <Share2 size={32} color="var(--foreground)" />,
                    title: "Share Your Link",
                    description: "Send your unique referral link to friends and colleagues."
                  },
                  {
                    icon: <Users size={32} color="var(--foreground)" />,
                    title: "Friends Sign Up",
                    description: "They create an account using your referral link and start using Hanzo."
                  },
                  {
                    icon: <DollarSign size={32} color="var(--foreground)" />,
                    title: "Earn Rewards",
                    description: "You receive $5 in credits for each successful referral, automatically added to your account."
                  }
                ].map((step, index) => (
                  <Box key={index} backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24}>
                    <XStack height={64} width={64} borderRadius="var(--radius-full)" backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" display="flex" alignItems="center" justifyContent="center" marginBottom={16}>
                      {step.icon}
                    </XStack>
                    <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8}>{step.title}</H3>
                    <Paragraph color="var(--neutral-300)">{step.description}</Paragraph>
                  </Box>
                ))}
              </Grid>
            </MotionBox>
            
            {/* FAQ Section */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              maxWidth="56rem" marginHorizontal="auto"
            >
              <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={32} textAlign="center">Frequently Asked Questions</H2>
              <Box rowGap={24}>
                {[
                  {
                    question: "Is there a limit to how many people I can refer?",
                    answer: "No, there's no limit! You can refer as many people as you want and earn $5 for each successful referral."
                  },
                  {
                    question: "When do I receive my referral credits?",
                    answer: "Credits are added to your account automatically once your referred friend completes their signup and starts using their account."
                  },
                  {
                    question: "Do my referred friends get anything?",
                    answer: "Yes! Everyone who signs up gets $5 in free credits to start using Hanzo, whether they came through a referral or not."
                  },
                  {
                    question: "What can I use the credits for?",
                    answer: "Credits can be used for any Hanzo services, including AI compute, vector database usage, cloud deployments, and more."
                  },
                  {
                    question: "How do I track my referrals?",
                    answer: "You can track all your referrals and rewards from your account dashboard under the 'Referrals' tab."
                  }
                ].map((faq, index) => (
                  <Box key={index} backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" padding={24}>
                    <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8}>{faq.question}</H3>
                    <Paragraph color="var(--neutral-300)">{faq.answer}</Paragraph>
                  </Box>
                ))}
              </Box>
            </MotionBox>
          </Box>
        </Box>
        
        {/* CTA Section */}
        <Box render="section" paddingVertical={64} paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
          <Box maxWidth="64rem" marginHorizontal="auto" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" padding={40} textAlign="center" backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))">
            <ChromeText as="h2" fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16}>
              Ready to Start Earning?
            </ChromeText>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" marginBottom={32} maxWidth="var(--container-prose)" marginHorizontal="auto">
              Sign up for a Hanzo account today, get your referral link, and start sharing with friends to earn rewards.
            </Paragraph>
            <YStack display="flex" flexDirection="column" gap={16} justifyContent="center" $sm={{ flexDirection: "row" }}>
              <Button size="lg" backgroundColor="var(--neutral-600)" paddingHorizontal={32} hoverStyle={{ backgroundColor: "var(--neutral-700)" }}>
                <Link tap to="/signup">Create Account</Link>
              </Button>
              <Button size="lg" variant="outline" borderColor="var(--neutral-700)" paddingHorizontal={32} hoverStyle={{ backgroundColor: "var(--neutral-800)" }}>
                <Link tap to="/pricing">View Pricing</Link>
              </Button>
            </YStack>
          </Box>
        </Box>
      </Box>
      
      <Footer />
    </Box>
  );
};

export default Referrals;
