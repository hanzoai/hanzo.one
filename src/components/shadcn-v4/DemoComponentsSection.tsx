import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Box, Button, Grid, H2, H3, Input, Label, MotionBox, Paragraph, RadioGroup, RadioGroupItem, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Switch, Tabs, TabsContent, TabsList, TabsTrigger, XStack, toast } from '@/gui'
import React from "react";
import { motion } from "framer-motion";



const DemoComponentsSection = () => {
  return (
    <Box render="section" paddingVertical={96} paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="64rem" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={24} color="var(--foreground)" $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>Updated Components</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Check out these updated shadcn/ui components with Tailwind v4 and React 19.
          </Paragraph>
        </MotionBox>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} marginBottom={48} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            backgroundColor="var(--surface-card-emphasis)" padding={32} borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--neutral-800)"
          >
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={24} color="var(--foreground)">Form Elements</H3>
            
            <Box rowGap={24}>
              <Box rowGap={8}>
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="Enter username" />
              </Box>
              
              <Box rowGap={8}>
                <Label htmlFor="framework">Framework</Label>
                <Select>
                  <SelectTrigger id="framework" width="100%">
                    <SelectValue placeholder="Select framework" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="vite">Vite</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="remix">Remix</SelectItem>
                  </SelectContent>
                </Select>
              </Box>
              
              <XStack display="flex" alignItems="center" columnGap={8}>
                <Switch id="theme-mode" />
                <Label htmlFor="theme-mode">Dark mode</Label>
              </XStack>
              
              <RadioGroup defaultValue="react19">
                <XStack display="flex" alignItems="center" columnGap={8}>
                  <RadioGroupItem value="react19" id="react19" />
                  <Label htmlFor="react19">React 19</Label>
                </XStack>
                <XStack display="flex" alignItems="center" columnGap={8}>
                  <RadioGroupItem value="react18" id="react18" />
                  <Label htmlFor="react18">React 18</Label>
                </XStack>
              </RadioGroup>
            </Box>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            backgroundColor="var(--surface-card-emphasis)" padding={32} borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--neutral-800)"
          >
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="600" marginBottom={24} color="var(--foreground)">Interactive Components</H3>
            
            <Box rowGap={24}>
              <Tabs defaultValue="buttons" width="100%">
                <TabsList display="grid" width="100%" gridTemplateColumns="repeat(2, minmax(0, 1fr))">
                  <TabsTrigger value="buttons">Buttons</TabsTrigger>
                  <TabsTrigger value="accordion">Accordion</TabsTrigger>
                </TabsList>
                <TabsContent value="buttons" paddingTop={16} rowGap={16}>
                  <XStack display="flex" flexWrap="wrap" gap={16}>
                    <Button variant="default" onClick={() => toast.success("Button clicked!")}>
                      Default
                    </Button>
                    <Button variant="secondary" onClick={() => toast.info("Secondary action")}>
                      Secondary
                    </Button>
                    <Button variant="outline" onClick={() => toast.message("Outline clicked")}>
                      Outline
                    </Button>
                    <Button variant="destructive" onClick={() => toast.error("Destructive action")}>
                      Destructive
                    </Button>
                  </XStack>
                  <XStack display="flex" flexWrap="wrap" gap={16}>
                    <Button size="sm">Small</Button>
                    <Button>Default</Button>
                    <Button size="lg">Large</Button>
                  </XStack>
                </TabsContent>
                <TabsContent value="accordion" paddingTop={16}>
                  <Accordion type="single" collapsible width="100%">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Tailwind v4 Benefits</AccordionTrigger>
                      <AccordionContent>
                        Enjoy faster build times, smaller file sizes, and access to the latest CSS features with Tailwind v4.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>React 19 New Features</AccordionTrigger>
                      <AccordionContent>
                        React 19 includes automatic batching, transitions, and suspense support for data fetching.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>How to Upgrade</AccordionTrigger>
                      <AccordionContent>
                        Follow our step-by-step guide to upgrade your existing projects to Tailwind v4 and React 19.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>
              </Tabs>
            </Box>
          </MotionBox>
        </Grid>
        
        <XStack display="flex" justifyContent="center">
          <Button 
            variant="outline" 
            color="var(--foreground)" borderColor="var(--border-strong)" hoverStyle={{ borderColor: "var(--border-strong)" }}
            onClick={() => window.open("https://v4.shadcn.com", "_blank")}
          >
            View All Components
          </Button>
        </XStack>
      </Box>
    </Box>
  );
};

export default DemoComponentsSection;
