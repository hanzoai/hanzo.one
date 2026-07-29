import { Box, Button, Grid, H3, H4, MotionBox, MotionText, Paragraph, Text, XStack } from '@/gui'
import { motion } from "framer-motion";
import { BarChart, LineChart, PieChart, Activity, Users, Globe, Zap, Brain, CheckCircle2 } from "lucide-react";

const Analytics = () => {
  // Container animation variants
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Item animation variants
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Hover animation variants
  const hoverVariants = {
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  // User Insights section animation variants
  const userInsightsVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };
  const userInsightItemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  // AI Analytics section animation variants
  const aiAnalyticsVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4
      }
    }
  };
  const aiAnalyticsItemVariants = {
    hidden: {
      opacity: 0,
      x: -15,
      scale: 0.98
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14
      }
    }
  };

  // Animation variants for the milestone progress
  const milestoneLineVariants = {
    hidden: {
      width: 0
    },
    visible: (custom: number) => ({
      width: `${custom}%`,
      transition: {
        duration: 1,
        delay: custom === 25 ? 0 : custom === 50 ? 2 : custom === 75 ? 4 : 6,
        ease: "easeInOut"
      }
    })
  };
  const milestoneCircleVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0.5,
      borderColor: "#4B5563"
    },
    visible: (custom: number) => ({
      scale: 1,
      opacity: 1,
      borderColor: "#FFFFFF",
      transition: {
        duration: 0.5,
        delay: custom === 1 ? 1 : custom === 2 ? 3 : custom === 3 ? 5 : 0,
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    })
  };

  // Fixed icon variants - now using predefined color states rather than functions in the hidden state
  const iconVariantsFirst = {
    hidden: {
      color: "#9333EA"
    },
    visible: {
      color: "#FFFFFF",
      transition: {
        duration: 0.3,
        delay: 1
      }
    }
  };
  const iconVariantsSecond = {
    hidden: {
      color: "#3B82F6"
    },
    visible: {
      color: "#FFFFFF",
      transition: {
        duration: 0.3,
        delay: 3
      }
    }
  };
  const iconVariantsThird = {
    hidden: {
      color: "#06B6D4"
    },
    visible: {
      color: "#FFFFFF",
      transition: {
        duration: 0.3,
        delay: 5
      }
    }
  };

  return <Box render="section" paddingVertical={80} backgroundColor="var(--black)">
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <MotionBox initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.5
      }} textAlign="center" marginBottom={64}>
          <MotionBox initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.1,
          duration: 0.4
        }} flexDirection="row" display="inline-flex" alignItems="center" columnGap={8} backgroundColor="rgb(255 255 255 / 0.1)" paddingHorizontal={16} paddingVertical={4} borderRadius="var(--radius-full)" marginBottom={24}>
            <Activity size={16} color="var(--neutral-400)" />
            <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">Real-time Analytics</Text>
          </MotionBox>
          <MotionText initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2,
          duration: 0.4
        }} fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontFamily="var(--font-display)" color="var(--white)" marginBottom={16} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            Scale from Zero to One Billion Users
          </MotionText>
          <MotionText initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.3,
          duration: 0.4
        }} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto" paddingVertical={0} $md={{ fontSize: "var(--text-xl)", lineHeight: "var(--leading-xl)" }}>
            Enterprise-grade analytics built for the AI era. Track, analyze, and optimize your application with our powerful analytics suite.
          </MotionText>
        </MotionBox>

        {/* Milestone Progress Indicator - With numbered circles instead of icons */}
        <XStack position="relative" marginBottom={16} display="flex" justifyContent="center">
          <Box position="relative" width="100%" maxWidth="56rem">
            {/* Background line */}
            <Box position="absolute" top={24} left={0} width="100%" height={6} backgroundColor="var(--neutral-800)" borderRadius="var(--radius-full)"></Box>
            
            {/* Animated progress lines in segments - with fixed percentages for equal spacing */}
            <MotionBox position="absolute" top={24} left={0} height={6} backgroundColor="var(--white)" borderRadius="var(--radius-full)" transformOrigin="left" variants={milestoneLineVariants} initial="hidden" whileInView="visible" viewport={{
            once: true,
            margin: "-100px"
          }} custom={33.33}></MotionBox>
            
            <MotionBox position="absolute" top={24} left="33.33%" height={6} backgroundColor="var(--white)" borderRadius="var(--radius-full)" transformOrigin="left" variants={milestoneLineVariants} initial="hidden" whileInView="visible" viewport={{
            once: true,
            margin: "-100px"
          }} custom={33.33}></MotionBox>
            
            <MotionBox position="absolute" top={24} left="66.66%" height={6} backgroundColor="var(--white)" borderRadius="var(--radius-full)" transformOrigin="left" variants={milestoneLineVariants} initial="hidden" whileInView="visible" viewport={{
            once: true,
            margin: "-100px"
          }} custom={33.34}></MotionBox>
            
            {/* Milestone Points - with numbers clearly visible */}
            <XStack display="flex" justifyContent="space-between" alignItems="center" position="relative" width="100%">
              {/* First Milestone */}
              <Box textAlign="center" position="relative" width="33.333333%" paddingRight={16}>
                <MotionBox flexDirection="row" width={48} height={48} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-900)" borderWidth={2} borderColor="var(--foreground)" display="flex" alignItems="center" justifyContent="center" marginHorizontal="auto" position="relative" variants={milestoneCircleVariants} initial="hidden" whileInView="visible" viewport={{
                once: true,
                margin: "-100px"
              }} custom={1}>
                  <MotionText fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" color="var(--white)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>1</MotionText>
                </MotionBox>
                <Paragraph marginTop={8} fontWeight="500" color="var(--white)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" whiteSpace="nowrap" $sm={{ fontSize: "var(--text-sm)", lineHeight: "var(--leading-sm)" }} $md={{ fontSize: "var(--text-base)", lineHeight: "var(--leading-base)" }}>Real-time Events</Paragraph>
              </Box>
              
              {/* Second Milestone - Center */}
              <Box textAlign="center" position="relative" width="33.333333%" paddingHorizontal={8}>
                <MotionBox flexDirection="row" width={48} height={48} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-900)" borderWidth={2} borderColor="var(--foreground)" display="flex" alignItems="center" justifyContent="center" marginHorizontal="auto" variants={milestoneCircleVariants} initial="hidden" whileInView="visible" viewport={{
                once: true,
                margin: "-100px"
              }} custom={2}>
                  <MotionText fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" color="var(--white)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }}>2</MotionText>
                </MotionBox>
                <Paragraph marginTop={8} fontWeight="500" color="var(--white)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" whiteSpace="nowrap" $sm={{ fontSize: "var(--text-sm)", lineHeight: "var(--leading-sm)" }} $md={{ fontSize: "var(--text-base)", lineHeight: "var(--leading-base)" }}>User Insights</Paragraph>
              </Box>
              
              {/* Third Milestone */}
              <Box textAlign="center" position="relative" width="33.333333%" paddingLeft={16}>
                <MotionBox flexDirection="row" width={48} height={48} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-900)" borderWidth={2} borderColor="var(--foreground)" display="flex" alignItems="center" justifyContent="center" marginHorizontal="auto" variants={milestoneCircleVariants} initial="hidden" whileInView="visible" viewport={{
                once: true,
                margin: "-100px"
              }} custom={3}>
                  <MotionText fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" color="var(--white)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5 }}>3</MotionText>
                </MotionBox>
                <Paragraph marginTop={8} fontWeight="500" color="var(--white)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" whiteSpace="nowrap" $sm={{ fontSize: "var(--text-sm)", lineHeight: "var(--leading-sm)" }} $md={{ fontSize: "var(--text-base)", lineHeight: "var(--leading-base)" }}>AI Analytics</Paragraph>
              </Box>
            </XStack>
          </Box>
        </XStack>

        <MotionBox variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-50px"
      }} display="grid" gridTemplateColumns="repeat(3, minmax(0, 1fr))" gap={16} marginBottom={64} marginTop={40} $md={{ gap: 32 }}>
          <MotionBox variants={itemVariants} whileHover="hover" whileTap="tap" padding={16} borderRadius="var(--radius-xl)" transition="all 300ms cubic-bezier(.4,0,.2,1)" display="flex" flexDirection="column" alignItems="center" textAlign="center" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), transparent)" $md={{ padding: 24 }}>
            <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-300)" $md={{ fontSize: "var(--text-base)", lineHeight: "var(--leading-base)" }}>Track user behavior, system events, and business metrics in real-time with millisecond latency.</Paragraph>
          </MotionBox>

          <MotionBox variants={itemVariants} whileHover="hover" whileTap="tap" padding={16} borderRadius="var(--radius-xl)" transition="all 300ms cubic-bezier(.4,0,.2,1)" display="flex" flexDirection="column" alignItems="center" textAlign="center" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), transparent)" $md={{ padding: 24 }}>
            <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-300)" $md={{ fontSize: "var(--text-base)", lineHeight: "var(--leading-base)" }}>Understand user journeys, cohorts, and behavior patterns with AI-powered analytics.</Paragraph>
          </MotionBox>

          <MotionBox variants={itemVariants} whileHover="hover" whileTap="tap" padding={16} borderRadius="var(--radius-xl)" transition="all 300ms cubic-bezier(.4,0,.2,1)" display="flex" flexDirection="column" alignItems="center" textAlign="center" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), transparent)" $md={{ padding: 24 }}>
            <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-300)" $md={{ fontSize: "var(--text-base)", lineHeight: "var(--leading-base)" }}>Leverage machine learning to predict trends, detect anomalies, and optimize performance.</Paragraph>
          </MotionBox>
        </MotionBox>

        <MotionBox initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-50px"
      }} transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }} borderRadius="var(--radius-xl)" padding={32} marginBottom={64} backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), var(--pure-black), rgb(255 255 255 / 0.08))">
          <Grid display="grid" gap={32} alignItems="center" $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
            <MotionBox initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.3,
            duration: 0.5
          }}>
              <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)" marginBottom={16} $sm={{ fontSize: "var(--text-2xl)", lineHeight: "var(--leading-2xl)" }}>Planetary-Scale Infrastructure</H3>
              <MotionBox variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
              once: true
            }} rowGap={16}>
                <MotionBox variants={itemVariants} flexDirection="row" display="flex" alignItems="flex-start" columnGap={12}>
                  <Box render="span" display="inline-flex" alignItems="center" marginTop={4} $sm={{ height: 24, width: 24 }}><Zap size={20} color="var(--neutral-400)" /></Box>
                  <div>
                    <H4 fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--white)" fontWeight="600" $sm={{ fontSize: "var(--text-base)", lineHeight: "var(--leading-base)" }}>Global Edge Network</H4>
                    <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-300)" $sm={{ fontSize: "var(--text-sm)", lineHeight: "var(--leading-sm)" }}>200+ data centers worldwide ensuring sub-50ms latency for 99% of users</Paragraph>
                  </div>
                </MotionBox>
                <MotionBox variants={itemVariants} flexDirection="row" display="flex" alignItems="flex-start" columnGap={12}>
                  <Box render="span" display="inline-flex" alignItems="center" marginTop={4} $sm={{ height: 24, width: 24 }}><Globe size={20} color="var(--neutral-400)" /></Box>
                  <div>
                    <H4 fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--white)" fontWeight="600" $sm={{ fontSize: "var(--text-base)", lineHeight: "var(--leading-base)" }}>Infinite Scale</H4>
                    <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-300)" $sm={{ fontSize: "var(--text-sm)", lineHeight: "var(--leading-sm)" }}>Handle billions of events per day with automatic scaling and zero maintenance</Paragraph>
                  </div>
                </MotionBox>
                <MotionBox variants={itemVariants} flexDirection="row" display="flex" alignItems="flex-start" columnGap={12}>
                  <Box render="span" display="inline-flex" alignItems="center" marginTop={4} $sm={{ height: 24, width: 24 }}><Brain size={20} color="var(--neutral-400)" /></Box>
                  <div>
                    <H4 fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--white)" fontWeight="600" $sm={{ fontSize: "var(--text-base)", lineHeight: "var(--leading-base)" }}>AI-Powered Insights</H4>
                    <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-300)" $sm={{ fontSize: "var(--text-sm)", lineHeight: "var(--leading-sm)" }}>Automatic anomaly detection, trend analysis, and predictive analytics</Paragraph>
                  </div>
                </MotionBox>
              </MotionBox>
            </MotionBox>
            
          </Grid>
        </MotionBox>

        {/* User Insights Section - Enhanced centering */}
        <MotionBox initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-50px"
      }} transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 90
      }} marginBottom={64} marginHorizontal="auto">
          <MotionText initial={{
          opacity: 0,
          y: 15
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2,
          duration: 0.5
        }} fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" color="var(--white)" textAlign="center" marginBottom={48} $sm={{ fontSize: "var(--text-3xl)", lineHeight: "var(--leading-3xl)" }}>
            Powerful User Insights for Growth
          </MotionText>

          <MotionBox variants={userInsightsVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} display="grid" gridTemplateColumns="repeat(3, minmax(0, 1fr))" gap={16} $md={{ gap: 32 }}>
            <MotionBox variants={userInsightItemVariants} whileHover={{
            y: -5,
            transition: {
              duration: 0.2
            }
          }} borderRadius="var(--radius-xl)" padding={16} outlineWidth={1} outlineColor="rgb(255 255 255 / 0.1)" outlineStyle="solid" display="flex" flexDirection="column" alignItems="center" textAlign="center" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), transparent)" $md={{ padding: 24 }}>
              <XStack borderRadius="var(--radius-full)" padding={8} width={40} height={40} display="flex" alignItems="center" justifyContent="center" marginBottom={12} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))" $md={{ padding: 12, width: 56, height: 56, marginBottom: 16 }} $sm={{ width: 48, height: 48 }}>
                <Box render="span" display="inline-flex" alignItems="center" $sm={{ height: 24, width: 24 }}><Users size={20} color="var(--foreground)" /></Box>
              </XStack>
              <H3 fontSize="var(--text-base)" lineHeight="var(--leading-base)" fontWeight="500" color="var(--white)" marginBottom={8} $sm={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-lg)" }} $md={{ fontSize: "var(--text-xl)", lineHeight: "var(--leading-xl)", marginBottom: 12 }}>Cohort Analysis</H3>
              <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-300)" $sm={{ fontSize: "var(--text-sm)", lineHeight: "var(--leading-sm)" }}>Group users by common characteristics and behaviors to discover usage patterns.</Paragraph>
            </MotionBox>

            <MotionBox variants={userInsightItemVariants} whileHover={{
            y: -5,
            transition: {
              duration: 0.2
            }
          }} borderRadius="var(--radius-xl)" padding={16} outlineWidth={1} outlineColor="rgb(255 255 255 / 0.1)" outlineStyle="solid" display="flex" flexDirection="column" alignItems="center" textAlign="center" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), transparent)" $md={{ padding: 24 }}>
              <XStack borderRadius="var(--radius-full)" padding={8} width={40} height={40} display="flex" alignItems="center" justifyContent="center" marginBottom={12} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))" $md={{ padding: 12, width: 56, height: 56, marginBottom: 16 }} $sm={{ width: 48, height: 48 }}>
                <Box render="span" display="inline-flex" alignItems="center" $sm={{ height: 24, width: 24 }}><LineChart size={20} color="var(--foreground)" /></Box>
              </XStack>
              <H3 fontSize="var(--text-base)" lineHeight="var(--leading-base)" fontWeight="500" color="var(--white)" marginBottom={8} $sm={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-lg)" }} $md={{ fontSize: "var(--text-xl)", lineHeight: "var(--leading-xl)", marginBottom: 12 }}>User Journeys</H3>
              <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-300)" $sm={{ fontSize: "var(--text-sm)", lineHeight: "var(--leading-sm)" }}>Visualize and optimize the complete user journey from acquisition to conversion.</Paragraph>
            </MotionBox>

            <MotionBox variants={userInsightItemVariants} whileHover={{
            y: -5,
            transition: {
              duration: 0.2
            }
          }} borderRadius="var(--radius-xl)" padding={16} outlineWidth={1} outlineColor="rgb(255 255 255 / 0.1)" outlineStyle="solid" display="flex" flexDirection="column" alignItems="center" textAlign="center" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), transparent)" $md={{ padding: 24 }}>
              <XStack borderRadius="var(--radius-full)" padding={8} width={40} height={40} display="flex" alignItems="center" justifyContent="center" marginBottom={12} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))" $md={{ padding: 12, width: 56, height: 56, marginBottom: 16 }} $sm={{ width: 48, height: 48 }}>
                <Box render="span" display="inline-flex" alignItems="center" $sm={{ height: 24, width: 24 }}><PieChart size={20} color="var(--foreground)" /></Box>
              </XStack>
              <H3 fontSize="var(--text-base)" lineHeight="var(--leading-base)" fontWeight="500" color="var(--white)" marginBottom={8} $sm={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-lg)" }} $md={{ fontSize: "var(--text-xl)", lineHeight: "var(--leading-xl)", marginBottom: 12 }}>Engagement Metrics</H3>
              <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-300)" $sm={{ fontSize: "var(--text-sm)", lineHeight: "var(--leading-sm)" }}>Capture and analyze key engagement metrics to improve user retention.</Paragraph>
            </MotionBox>
          </MotionBox>
        </MotionBox>

        <MotionBox initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-50px"
      }} transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 85
      }} borderRadius="var(--radius-xl)" padding={32} marginBottom={64} backgroundImage="linear-gradient(to right, rgb(255 255 255 / 0.08), var(--pure-black), rgb(255 255 255 / 0.08))">
          <MotionText initial={{
          opacity: 0,
          y: 15
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2,
          duration: 0.5
        }} fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" color="var(--white)" textAlign="center" marginBottom={40} $sm={{ fontSize: "var(--text-3xl)", lineHeight: "var(--leading-3xl)" }}>
            Easily Integrate Hanzo AI-Powered Analytics
          </MotionText>

          <MotionBox variants={aiAnalyticsVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} rowGap={24}>
            <MotionBox variants={aiAnalyticsItemVariants} whileHover={{
            x: 5,
            transition: {
              duration: 0.2
            }
          }} flexDirection="row" borderRadius="var(--radius-lg)" padding={20} outlineWidth={1} outlineColor="rgb(255 255 255 / 0.05)" outlineStyle="solid" display="flex" alignItems="flex-start" columnGap={16} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(0 0 0 / 0.2))">
              <Box borderRadius="var(--radius-lg)" padding={12} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))">
                <Box render="span" display="inline-flex" alignItems="center" $sm={{ height: 24, width: 24 }}><Brain size={20} color="var(--foreground)" /></Box>
              </Box>
              <Box flex={1} textAlign="center">
                <H3 fontSize="var(--text-base)" lineHeight="var(--leading-base)" fontWeight="500" color="var(--white)" marginBottom={8} $sm={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-lg)" }}>Predictive Analysis</H3>
                <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-300)" $sm={{ fontSize: "var(--text-sm)", lineHeight: "var(--leading-sm)" }}>Forecast future trends and user behaviors with advanced machine learning algorithms.</Paragraph>
              </Box>
            </MotionBox>

            <MotionBox variants={aiAnalyticsItemVariants} whileHover={{
            x: 5,
            transition: {
              duration: 0.2
            }
          }} flexDirection="row" borderRadius="var(--radius-lg)" padding={20} outlineWidth={1} outlineColor="rgb(255 255 255 / 0.05)" outlineStyle="solid" display="flex" alignItems="flex-start" columnGap={16} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(0 0 0 / 0.2))">
              <Box borderRadius="var(--radius-lg)" padding={12} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))">
                <Box render="span" display="inline-flex" alignItems="center" $sm={{ height: 24, width: 24 }}><Activity size={20} color="var(--foreground)" /></Box>
              </Box>
              <Box flex={1} textAlign="center">
                <H3 fontSize="var(--text-base)" lineHeight="var(--leading-base)" fontWeight="500" color="var(--white)" marginBottom={8} $sm={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-lg)" }}>Anomaly Detection</H3>
                <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-300)" $sm={{ fontSize: "var(--text-sm)", lineHeight: "var(--leading-sm)" }}>Automatically identify unusual patterns and potential issues in your application.</Paragraph>
              </Box>
            </MotionBox>

            <MotionBox variants={aiAnalyticsItemVariants} whileHover={{
            x: 5,
            transition: {
              duration: 0.2
            }
          }} flexDirection="row" borderRadius="var(--radius-lg)" padding={20} outlineWidth={1} outlineColor="rgb(255 255 255 / 0.05)" outlineStyle="solid" display="flex" alignItems="flex-start" columnGap={16} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(0 0 0 / 0.2))">
              <Box borderRadius="var(--radius-lg)" padding={12} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))">
                <Box render="span" display="inline-flex" alignItems="center" $sm={{ height: 24, width: 24 }}><BarChart size={20} color="var(--foreground)" /></Box>
              </Box>
              <Box flex={1} textAlign="center">
                <H3 fontSize="var(--text-base)" lineHeight="var(--leading-base)" fontWeight="500" color="var(--white)" marginBottom={8} $sm={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-lg)" }}>Intelligent Recommendations</H3>
                <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-300)" $sm={{ fontSize: "var(--text-sm)", lineHeight: "var(--leading-sm)" }}>Get actionable insights and recommendations to optimize your business metrics.</Paragraph>
              </Box>
            </MotionBox>
          </MotionBox>
        </MotionBox>

        <MotionBox initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.8,
        duration: 0.5
      }} textAlign="center">
          <MotionBox whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} transition={{
          type: "spring",
          stiffness: 400,
          damping: 10
        }}>
            <Button backgroundColor="var(--neutral-600)" color="var(--white)" paddingHorizontal={24} paddingVertical={20} fontSize="var(--text-base)" lineHeight="var(--leading-base)" borderRadius="var(--radius-xl)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }} $sm={{ paddingHorizontal: 32, paddingVertical: 24, fontSize: "var(--text-lg)", lineHeight: "var(--leading-lg)" }}>
              Get Started with Analytics
            </Button>
          </MotionBox>
        </MotionBox>
      </Box>
    </Box>;
};
export default Analytics;
