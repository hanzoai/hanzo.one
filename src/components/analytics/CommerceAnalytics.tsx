import { Box, Grid, H2, H3, H4, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShoppingCart, DollarSign, CreditCard, Zap } from "lucide-react";

const CommerceAnalytics = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 1]);

  return (
    <Box 
      ref={sectionRef}
      render="section" paddingVertical={128} paddingHorizontal={16} backgroundColor="var(--black)" position="relative" overflow="hidden" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}
    >
      {/* Background gradient */}
      <Box position="absolute" top={0} right={0} bottom={0} left={0} opacity={0.5} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.1), rgb(255 255 255 / 0.05))"></Box>
      
      {/* Content */}
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" position="relative" zIndex={10}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={80}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>Commerce-Focused Analytics</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Optimize your sales funnel and boost revenue with insights designed specifically for commerce.
          </Paragraph>
        </MotionBox>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={64} $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <Box rowGap={48}>
            {[
              {
                icon: <Zap size={24} />,
                title: "AI-powered recommendations",
                description: "Personalize experiences based on real-time user insights and behavior patterns."
              },
              {
                icon: <DollarSign size={24} />,
                title: "Dynamic Pricing & Predictive Analytics",
                description: "Forecast sales, detect anomalies, and optimize revenue streams with AI-powered insights."
              },
              {
                icon: <CreditCard size={24} />,
                title: "Seamless Payments & Omnichannel Insights",
                description: "Unified tracking across web, mobile, in-store, and global commerce channels."
              }
            ].map((feature, index) => (
              <MotionBox
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                flexDirection="row" display="flex"
              >
                <Box marginRight={16} padding={12} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" color="var(--foreground)" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))">
                  {feature.icon}
                </Box>
                <div>
                  <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8}>{feature.title}</H3>
                  <Paragraph color="var(--neutral-400)">{feature.description}</Paragraph>
                </div>
              </MotionBox>
            ))}
          </Box>
          
          <MotionBox
            style={{ scale, opacity }}
            borderRadius="var(--radius-xl)" overflow="hidden" borderWidth={1} borderColor="var(--neutral-800)" boxShadow="0 20px 25px -5px rgb(0 0 0 / .4)" backgroundImage="linear-gradient(to bottom right, var(--neutral-900), var(--pure-black))"
          >
            <Box padding={16} borderBottomWidth={1} borderColor="var(--neutral-800)">
              <XStack display="flex" alignItems="center">
                <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><ShoppingCart size={20} color="var(--foreground)" /></Box>
                <Text color="var(--white)" fontWeight="500">Commerce Dashboard</Text>
              </XStack>
            </Box>
            
            <Box padding={24}>
              <Box marginBottom={24}>
                <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500" marginBottom={16}>Sales Performance</H4>
                <Box height={160} backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-lg)" position="relative" overflow="hidden">
                  {/* Bar chart */}
                  <XStack position="absolute" top={0} right={0} bottom={0} left={0} display="flex" alignItems="flex-end" justifyContent="space-around" paddingHorizontal={16} paddingBottom={16}>
                    {[65, 80, 55, 90, 70, 85, 60].map((height, i) => (
                      <MotionBox
                        key={i}
                        width={24} borderTopLeftRadius="var(--radius)" borderTopRightRadius="var(--radius)" backgroundImage="linear-gradient(to top, var(--neutral-600), var(--foreground))"
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      ></MotionBox>
                    ))}
                  </XStack>
                </Box>
              </Box>
              
              <Grid display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={16} marginBottom={24}>
                <Box backgroundColor="var(--surface-card-emphasis)" padding={16} borderRadius="var(--radius-lg)">
                  <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">Conversion Rate</Box>
                  <Box fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginTop={8}>4.78%</Box>
                  <XStack color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" display="flex" alignItems="center" marginTop={4}>
                    <Box display="inline-block" render="svg" width={12} height={12} marginRight={4} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </Box>
                    +0.6%
                  </XStack>
                </Box>
                <Box backgroundColor="var(--surface-card-emphasis)" padding={16} borderRadius="var(--radius-lg)">
                  <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">Avg. Order Value</Box>
                  <Box fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginTop={8}>$87.32</Box>
                  <XStack color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" display="flex" alignItems="center" marginTop={4}>
                    <Box display="inline-block" render="svg" width={12} height={12} marginRight={4} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </Box>
                    +2.4%
                  </XStack>
                </Box>
              </Grid>
              
              <Box borderTopWidth={1} borderColor="var(--neutral-800)" paddingTop={16}>
                <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="500" marginBottom={16}>Product Recommendations</H4>
                <Box rowGap={12}>
                  {[
                    { name: "Premium Headphones", score: 98 },
                    { name: "Wireless Keyboard", score: 85 },
                    { name: "Smart Watch", score: 79 }
                  ].map((product, i) => (
                    <XStack key={i} display="flex" alignItems="center" justifyContent="space-between">
                      <Text color="var(--neutral-300)">{product.name}</Text>
                      <XStack display="flex" alignItems="center">
                        <Box width={96} height={8} backgroundColor="var(--neutral-800)" borderRadius="var(--radius-full)" marginRight={8} overflow="hidden">
                          <MotionBox
                            height="100%" backgroundColor="var(--neutral-500)"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${product.score}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                          ></MotionBox>
                        </Box>
                        <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)">{product.score}%</Text>
                      </XStack>
                    </XStack>
                  ))}
                </Box>
              </Box>
            </Box>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};

export default CommerceAnalytics;
