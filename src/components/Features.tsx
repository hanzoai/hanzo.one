import { Box, Grid, H2, H3, MotionBox, MotionText, Paragraph, Text, XStack, YStack } from '@/gui'
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, BarChart3, CreditCard, Wand2, Bot, Network, Cpu, Leaf, Brain, Target, Blocks, Cloud, HardDrive, Code, Shield, KeyRound, Bot as BotIcon, Monitor, ChevronLeft, ChevronRight, Globe, LineChart, Building2, GraduationCap, Newspaper, ShoppingCart, Users, DollarSign, Wrench } from "lucide-react";
import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { useEffect, useRef, useState } from "react";
import { getIcon } from "@/constants/iconMappings";

const allFeatures = [{
  icon: <Wand2 size={24} />,
  title: "Hanzo App",
  description: "Design, build, and launch full-featured applications with our generative App Builder. Native analytics and platform API integration."
}, {
  icon: <Bot size={24} />,
  title: "Hanzo Bot",
  description: "Launch agentic frameworks effortlessly using our drag-and-drop GUI to build and iterate on scalable agentic workflows."
}, {
  icon: <Code2 size={24} />,
  title: "Hanzo Code",
  description: "Open Source IDE that embeds AI agents directly into your coding workflow, accelerating development and deployment."
}, {
  icon: <Cpu size={24} />,
  title: "Hanzo Dev",
  description: "24/7 AI engineers that ingest your data and code to build, refine, test, and engineer alongside you autonomously."
}, {
  icon: <Network size={24} />,
  title: "Hanzo Router",
  description: "Access hosted and private models with dynamic routing, fallback systems, and advanced caching through our scalable AI platform."
}, {
  icon: <BarChart3 size={24} />,
  title: "Deep Learning Cloud",
  description: "Cloud orchestration with rapid deployment, auto-scaling, and NVIDIA hardware access through NVIDIA Inception Program."
}, {
  icon: <Leaf size={24} />,
  title: "Green Infrastructure",
  description: "1 Gigawatt of green energy secured at industry-leading prices, powering sustainable AI development and deployment."
}, {
  icon: <CreditCard size={24} />,
  title: "Hanzo Network",
  description: "Decentralized compute fabric allocating half its capacity to building next-gen frontier models in the open."
}];

const industriesData = [{
  name: "Cloud",
  icon: <Box render="span" display="inline-flex" alignItems="center" marginBottom={8}><Globe size={20} color="var(--foreground)" /></Box>,
  image: "/lovable-uploads/a6b76d5c-59a9-4ba8-897e-69558005b6ed.png",
  description: "Cloud orchestration with rapid deployment"
}, {
  name: "Cybersecurity",
  icon: <Box render="span" display="inline-flex" alignItems="center" marginBottom={8}><Shield size={20} color="var(--foreground)" /></Box>,
  image: "/lovable-uploads/97902904-f9ea-475e-9c65-5664eab422e5.png",
  description: "Advanced security solutions for business"
}, {
  name: "Data and Artificial Intelligence",
  icon: <Box render="span" display="inline-flex" alignItems="center" marginBottom={8}><Brain size={20} color="var(--foreground)" /></Box>,
  image: "/lovable-uploads/a31568fe-aa1f-4933-add1-b981564f25b9.png",
  description: "Cutting-edge AI solutions for business transformation"
}, {
  name: "Digital Engineering and Manufacturing",
  icon: <Box render="span" display="inline-flex" alignItems="center" marginBottom={8}><Code size={20} color="var(--foreground)" /></Box>,
  image: "/lovable-uploads/a1e0f18b-41a7-4f58-ac3b-7272aa8e7a77.png",
  description: "Engineering solutions for manufacturing"
}, {
  name: "Emerging Technology",
  icon: <Box render="span" display="inline-flex" alignItems="center" marginBottom={8}><Cpu size={20} color="var(--foreground)" /></Box>,
  image: "/lovable-uploads/41fa31ba-8c5b-4553-afeb-ba51591f7024.png",
  description: "Frontier technology solutions"
}, {
  name: "Ecosystem Partners",
  icon: <Box render="span" display="inline-flex" alignItems="center" marginBottom={8}><Network size={20} color="var(--foreground)" /></Box>,
  image: "/lovable-uploads/96a9379c-acc3-4170-a96f-964fb8773dd3.png",
  description: "Collaborative partnership networks"
}, {
  name: "Finance and Risk Management",
  icon: <Box render="span" display="inline-flex" alignItems="center" marginBottom={8}><DollarSign size={20} color="var(--foreground)" /></Box>,
  image: "/lovable-uploads/22f3cbb5-8cd9-48e2-92bc-8b084da1f4ff.png",
  description: "Financial solutions and risk assessment"
}, {
  name: "Infrastructure and Capital Projects",
  icon: <Box render="span" display="inline-flex" alignItems="center" marginBottom={8}><Building2 size={20} color="var(--neutral-400)" /></Box>,
  image: "/lovable-uploads/f1241c85-7df8-45b5-a92a-263554ff10cd.png",
  description: "Infrastructure development and capital management"
}, {
  name: "Learning",
  icon: <Box render="span" display="inline-flex" alignItems="center" marginBottom={8}><GraduationCap size={20} color="var(--foreground)" /></Box>,
  image: "/lovable-uploads/37d6bc13-a83a-4de2-a8d4-a67f2339598e.png",
  description: "Educational technology and learning solutions"
}, {
  name: "Marketing and Experience",
  icon: <Box render="span" display="inline-flex" alignItems="center" marginBottom={8}><Newspaper size={20} color="var(--foreground)" /></Box>,
  image: "/lovable-uploads/96d1e3da-614a-4809-98e4-30d8a868dc11.png",
  description: "Marketing solutions and experience design"
}, {
  name: "Metaverse",
  icon: <Box render="span" display="inline-flex" alignItems="center" marginBottom={8}><LineChart size={20} color="var(--foreground)" /></Box>,
  image: "/lovable-uploads/65ace6da-40cf-401a-9f0a-e3e757f00633.png",
  description: "Metaverse development and integration"
}, {
  name: "Sales and Commerce",
  icon: <Box render="span" display="inline-flex" alignItems="center" marginBottom={8}><ShoppingCart size={20} color="var(--foreground)" /></Box>,
  image: "/placeholder.svg",
  description: "Sales enablement and commerce solutions"
}];

const industriesSectors = [{
  name: "Artificial Intelligence",
  image: "/lovable-uploads/a31568fe-aa1f-4933-add1-b981564f25b9.png",
  description: "Cutting-edge AI solutions for business transformation"
}, {
  name: "Financial Services",
  image: "/placeholder.svg",
  description: "Innovative solutions for banking and finance sectors"
}, {
  name: "Manufacturing & Mobility",
  image: "/placeholder.svg",
  description: "Optimizing operations and driving innovation in manufacturing"
}, {
  name: "Healthcare",
  image: "/placeholder.svg",
  description: "Digital transformation for healthcare providers"
}, {
  name: "Retail & Consumer",
  image: "/placeholder.svg",
  description: "Creating exceptional customer experiences"
}, {
  name: "Technology",
  image: "/placeholder.svg",
  description: "Empowering the tech industry with advanced solutions"
}, {
  name: "Energy & Utilities",
  image: "/placeholder.svg",
  description: "Smart solutions for sustainable energy management"
}, {
  name: "Telecommunications",
  image: "/placeholder.svg",
  description: "Next-generation communication infrastructure"
}, {
  name: "Education",
  image: "/placeholder.svg",
  description: "Digital learning platforms and educational technology"
}, {
  name: "Government",
  image: "/placeholder.svg",
  description: "Digital transformation for public services"
}];

const Features = () => {
  const displayedFeatures = allFeatures.slice(0, 16);
  const hasMoreFeatures = allFeatures.length > 16;
  const industryIcons = {
    "Artificial Intelligence": <Box render="span" display="inline-flex" alignItems="center" marginBottom={8}><Brain size={20} color="var(--foreground)" /></Box>,
    "Adtech": <Box render="span" display="inline-flex" alignItems="center" marginBottom={8}><Target size={20} color="var(--foreground)" /></Box>,
    "Blockchain": <Box render="span" display="inline-flex" alignItems="center" marginBottom={8}><Blocks size={20} color="var(--foreground)" /></Box>,
    "Cloud Computing": <Box render="span" display="inline-flex" alignItems="center" marginBottom={8}><Cloud size={20} color="var(--foreground)" /></Box>,
    "GPU": <Box render="span" display="inline-flex" alignItems="center" marginBottom={8}><Cpu size={20} color="var(--foreground)" /></Box>,
    "Hardware": <Box render="span" display="inline-flex" alignItems="center" marginBottom={8}><HardDrive size={20} color="var(--neutral-400)" /></Box>,
    "Machine Learning": <Box render="span" display="inline-flex" alignItems="center" marginBottom={8}><Brain size={20} color="var(--foreground)" /></Box>,
    "Software": <Box render="span" display="inline-flex" alignItems="center" marginBottom={8}><Code size={20} color="var(--foreground)" /></Box>,
    "Cyber Security": <Box render="span" display="inline-flex" alignItems="center" marginBottom={8}><Shield size={20} color="var(--foreground)" /></Box>,
    "Confidential Computing": <Box render="span" display="inline-flex" alignItems="center" marginBottom={8}><KeyRound size={20} color="var(--foreground)" /></Box>
  };
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };
  const testimonialText = "We've helped businesses and individuals harness the power of AI to drive growth, efficiency, and innovation.";
  const testimonialCharacters = testimonialText.split("");
  const textContainerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.1
      }
    }
  };
  const characterVariants = {
    hidden: {
      opacity: 0,
      y: 5
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15
      }
    }
  };
  const industriesSectionRef = useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: industriesSectionRef,
    offset: ["start end", "end start"]
  });
  const industriesTitleY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const industriesDescriptionY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const industriesCarouselY = useTransform(scrollYProgress, [0, 1], [50, -20]);
  const [api, setApi] = useState<any>(null);
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);
  return (
    <>
      <Box width="100%" backgroundColor="var(--black)" paddingVertical={32} paddingHorizontal={16}>
        <Box maxWidth="var(--container-max)" marginHorizontal="auto">
          <MotionBox 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            width="100%" overflow="hidden" borderRadius="var(--radius-xl)"
          >
            <Box display="inline-block" 
              src="/lovable-uploads/684632bf-21ce-4823-b54d-aad69037446f.png" 
              alt="AI Human Interface Visualization" 
              render="img" width="100%" height="auto" objectFit="cover"
            />
          </MotionBox>
        </Box>
      </Box>
      
      <Box id="features" render="section" paddingVertical={80} backgroundColor="var(--black)">
        <Box maxWidth="var(--container-max)" marginHorizontal="auto" paddingHorizontal={16} paddingVertical={64} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }} $md={{ paddingVertical: 96 }}>
          <Box textAlign="center">
            <MotionText initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5
            }} fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontFamily="var(--font-display)" color="var(--white)" $sm={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
              Leading the Fourth Industrial Revolution
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
              duration: 0.5,
              delay: 0.1
            }} marginTop={16} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
              Hanzo is a developer-first AI platform bringing frontier research directly into your workflow with open, private, and decentralized solutions.
            </MotionText>
          </Box>

          <Grid marginTop={80} display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $sm={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
            {displayedFeatures.map((feature, index) => <MotionBox key={feature.title} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} position="relative" padding={24} backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderRadius="var(--radius-xl)" boxShadow="0 10px 15px -3px rgb(0 0 0 / .35)" outlineWidth={1} outlineColor="rgb(255 255 255 / 0.1)" outlineStyle="solid" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" display="flex" flexDirection="column" alignItems="center" textAlign="center" marginVertical={0} hoverStyle={{ outlineColor: "rgb(255 255 255 / 0.2)", outlineStyle: "solid" }}>
                <Box padding={8} backgroundColor="rgb(255 255 255 / 0.1)" width="fit-content" borderRadius="var(--radius-lg)" color="var(--white)">
                  {feature.icon}
                </Box>
                <H3 marginTop={16} fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" color="var(--white)">
                  {feature.title}
                </H3>
                <Paragraph marginTop={8} color="var(--neutral-300)">{feature.description}</Paragraph>
              </MotionBox>)}
          </Grid>

          {hasMoreFeatures && <MotionBox initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }} marginTop={48} textAlign="center">
            <Button variant="ghost" onClick={() => window.location.href = '/solutions'} color="var(--white)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}>
              View All Solutions
            </Button>
          </MotionBox>}
        </Box>

        <Box maxWidth="var(--container-max)" marginHorizontal="auto" paddingHorizontal={16} paddingVertical={64} borderTopWidth={1} borderColor="rgb(255 255 255 / 0.05)" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }} $md={{ paddingVertical: 96 }}>
          <MotionBox initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }} textAlign="center" marginBottom={48}>
            <H2 fontFamily="var(--font-display)" color="transparent" backgroundClip="text" fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" backgroundImage="linear-gradient(to right, var(--foreground), var(--foreground), var(--foreground))">
              Hanzo has an impressive track record...
            </H2>
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
            duration: 0.5
          }} display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
            <Box padding={24} backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderRadius="var(--radius-xl)" outlineWidth={1} outlineColor="rgb(255 255 255 / 0.1)" outlineStyle="solid">
              <Box maxWidth="28rem" overflow="hidden">
                <MotionBox variants={textContainerVariants} initial="hidden" whileInView="visible" viewport={{
              once: true,
              amount: 0.8
            }} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-300)" overflow="hidden">
                  <span>We've helped businesses and individuals harness the </span> 
                  <Text color="var(--white)" fontWeight="700">power of AI</Text>
                  <span> to drive growth, efficiency, and innovation.</span>
                </MotionBox>
                <Button variant="outline" marginTop={24} backgroundColor="var(--white)" color="var(--pure-black)" borderColor="var(--foreground)" hoverStyle={{ backgroundColor: "var(--neutral-100)", color: "var(--pure-black)" }}>
                  Our Testimonial
                </Button>
              </Box>
            </Box>
            
            <Grid display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={32} $md={{ gridColumn: "span 2 / span 2" }}>
              <YStack padding={24} backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderRadius="var(--radius-xl)" outlineWidth={1} outlineColor="rgb(255 255 255 / 0.1)" outlineStyle="solid" display="flex" flexDirection="column" alignItems="center" textAlign="center">
                <H3 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="500" color="var(--white)">1M<sup>+</sup></H3>
                <Paragraph marginTop={8} color="var(--neutral-300)">Users benefiting from our AI-powered solutions</Paragraph>
              </YStack>
              
              <YStack padding={24} backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderRadius="var(--radius-xl)" outlineWidth={1} outlineColor="rgb(255 255 255 / 0.1)" outlineStyle="solid" display="flex" flexDirection="column" alignItems="center" textAlign="center">
                <H3 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="500" color="var(--white)">4.9<Text fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)">/5</Text></H3>
                <Paragraph marginTop={8} color="var(--neutral-300)">Average rating across all AI-driven applications</Paragraph>
              </YStack>
              
              <YStack padding={24} backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderRadius="var(--radius-xl)" outlineWidth={1} outlineColor="rgb(255 255 255 / 0.1)" outlineStyle="solid" display="flex" flexDirection="column" alignItems="center" textAlign="center">
                <H3 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="500" color="var(--white)">80<sup>%</sup></H3>
                <Paragraph marginTop={8} color="var(--neutral-300)">Faster decision-making with AI recommendations</Paragraph>
              </YStack>
              
              <YStack padding={24} backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderRadius="var(--radius-xl)" outlineWidth={1} outlineColor="rgb(255 255 255 / 0.1)" outlineStyle="solid" display="flex" flexDirection="column" alignItems="center" textAlign="center">
                <H3 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="500" color="var(--white)">99<sup>%</sup></H3>
                <Paragraph marginTop={8} color="var(--neutral-300)">Uptime guarantee for seamless AI experience</Paragraph>
              </YStack>
            </Grid>
          </MotionBox>
        </Box>

        <Box ref={industriesSectionRef} maxWidth="var(--container-max)" marginHorizontal="auto" paddingHorizontal={16} paddingVertical={64} borderTopWidth={1} borderColor="rgb(255 255 255 / 0.05)" position="relative" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }} $md={{ paddingVertical: 96 }}>
          <Box textAlign="center" marginBottom={24}>
            <MotionText style={{
              y: industriesTitleY
            }} color="#de8e3d" fontWeight="500" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" marginBottom={8}>
              Industries we serve
            </MotionText>
            <MotionText style={{
              y: industriesTitleY
            }} fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontFamily="var(--font-display)" color="var(--white)" marginBottom={12}>
              We deliver impact in various industries
            </MotionText>
            <MotionText style={{
              y: industriesDescriptionY
            }} color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto" marginBottom={32}>
              We have a proven track record of delivering impactful solutions tailored to various industries, 
              driving success and innovation across diverse business sectors.
            </MotionText>
          </Box>
          
          <MotionBox style={{
            y: industriesCarouselY
          }} position="relative" zIndex={20} paddingVertical={0}>
            <Carousel opts={{
              align: "start",
              loop: true
            }} width="100%" setApi={setApi}>
              <CarouselContent marginLeft={-8} $md={{ marginLeft: -16 }}>
                {industriesData.map((industry, index) => <CarouselItem key={index} paddingLeft={8} $md={{ paddingLeft: 16, flexBasis: "50%" }} $lg={{ flexBasis: "33.333333%" }}>
                    <Box group height="400px" position="relative" overflow="hidden" borderRadius="var(--radius-xl)">
                      <Box position="absolute" top={0} right={0} bottom={0} left={0} zIndex={10} backgroundImage="linear-gradient(to top, var(--pure-black), transparent, transparent)" />
                      <Box display="inline-block" src={industry.image} alt={industry.name} render="img" height="100%" width="100%" objectFit="cover" transition="transform 500ms cubic-bezier(.4,0,.2,1)" $group-hover={{ scale: 1.1 }} />
                      <Box position="absolute" bottom={0} left={0} right={0} padding={24} zIndex={20}>
                        <XStack display="flex" alignItems="center" marginBottom={8}>
                          {industry.icon}
                          <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500" color="var(--white)" marginLeft={8}>{industry.name}</H3>
                        </XStack>
                        <Paragraph color="var(--neutral-300)">{industry.description}</Paragraph>
                      </Box>
                    </Box>
                  </CarouselItem>)}
              </CarouselContent>
              <CarouselPrevious left={16} backgroundColor="rgb(255 255 255 / 0.1)" borderStyle="none" color="var(--white)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.2)" }} />
              <CarouselNext right={16} backgroundColor="rgb(255 255 255 / 0.1)" borderStyle="none" color="var(--white)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.2)" }} />
            </Carousel>
          </MotionBox>
        </Box>
      </Box>
    </>
  );
};

export default Features;
