import { Anchor, Box, Button, Grid, H1, H2, H3, Helmet, Paragraph, Text, XStack, YStack } from '@/gui'

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone, MessageSquare, Send, Github, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <Box minHeight="100vh" backgroundColor="var(--black)" color="var(--white)">
      <Helmet>
        <title>Contact Us - Hanzo Industries</title>
        <meta 
          name="description" 
          content="Get in touch with the Hanzo Industries team for inquiries, support, or partnership opportunities." 
        />
      </Helmet>
      
      <Navbar />
      
      <Box render="main" paddingTop={96} paddingBottom={64} paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <Box maxWidth="var(--container-max)" marginHorizontal="auto">
          <Box textAlign="center" marginBottom={64}>
            <H1 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontWeight="700" marginBottom={24} $md={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }}>Contact Us</H1>
            <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
              Have questions or need assistance? Our team is here to help. 
              Reach out to us through any of the channels below.
            </Paragraph>
          </Box>
          
          <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={48} marginBottom={64} $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
            {/* Contact Form */}
            <Box backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-xl)" padding={32} borderWidth={1} borderColor="var(--neutral-800)">
              <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" marginBottom={24}>Send Us a Message</H2>
              <Box render="form" rowGap={24}>
                <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $sm={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
                  <div>
                    <Text htmlFor="name" render="label" display="block" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-300)" marginBottom={4}>
                      Name
                    </Text>
                    <Box display="inline-block" minHeight={44}
                      type="text"
                      id="name"
                      render="input" width="100%" paddingHorizontal={16} paddingVertical={8} backgroundColor="rgb(0 0 0 / 0.5)" borderWidth={1} borderColor="var(--neutral-700)" borderRadius="var(--radius-md)" focusStyle={{ outlineStyle: "solid", outlineWidth: 2, outlineColor: "var(--neutral-500)" }}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <Text htmlFor="email" render="label" display="block" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-300)" marginBottom={4}>
                      Email
                    </Text>
                    <Box display="inline-block" minHeight={44}
                      type="email"
                      id="email"
                      render="input" width="100%" paddingHorizontal={16} paddingVertical={8} backgroundColor="rgb(0 0 0 / 0.5)" borderWidth={1} borderColor="var(--neutral-700)" borderRadius="var(--radius-md)" focusStyle={{ outlineStyle: "solid", outlineWidth: 2, outlineColor: "var(--neutral-500)" }}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </Grid>
                
                <div>
                  <Text htmlFor="subject" render="label" display="block" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-300)" marginBottom={4}>
                    Subject
                  </Text>
                  <Box display="inline-block" minHeight={44}
                    type="text"
                    id="subject"
                    render="input" width="100%" paddingHorizontal={16} paddingVertical={8} backgroundColor="rgb(0 0 0 / 0.5)" borderWidth={1} borderColor="var(--neutral-700)" borderRadius="var(--radius-md)" focusStyle={{ outlineStyle: "solid", outlineWidth: 2, outlineColor: "var(--neutral-500)" }}
                    placeholder="What is this regarding?"
                  />
                </div>
                
                <div>
                  <Text htmlFor="message" render="label" display="block" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-300)" marginBottom={4}>
                    Message
                  </Text>
                  <Box display="inline-block" minHeight={44}
                    id="message"
                    rows={6}
                    render="textarea" width="100%" paddingHorizontal={16} paddingVertical={8} backgroundColor="rgb(0 0 0 / 0.5)" borderWidth={1} borderColor="var(--neutral-700)" borderRadius="var(--radius-md)" focusStyle={{ outlineStyle: "solid", outlineWidth: 2, outlineColor: "var(--neutral-500)" }}
                    placeholder="Tell us how we can help..."
                  />
                </div>
                
                <Button type="submit" width="100%" display="flex" alignItems="center" justifyContent="center" backgroundColor="var(--neutral-600)" hoverStyle={{ backgroundColor: "var(--neutral-700)" }} size="sm">
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Send size={16} /></Box>
                  Send Message
                </Button>
              </Box>
            </Box>
            
            {/* Contact Information */}
            <YStack display="flex" flexDirection="column">
              <Box borderRadius="var(--radius-xl)" padding={32} borderWidth={1} borderColor="rgb(255 255 255 / 0.2)" marginBottom={32} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))">
                <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" marginBottom={24}>Contact Information</H2>
                <Box rowGap={24}>
                  <XStack display="flex" alignItems="flex-start">
                    <Box render="span" display="inline-flex" alignItems="center" marginRight={16} marginTop={4}><Mail size={24} color="var(--foreground)" /></Box>
                    <div>
                      <H3 fontWeight="500">Email</H3>
                      <Paragraph color="var(--neutral-300)">
                        <Anchor tap href="mailto:info@hanzo.ai" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}>
                          info@hanzo.ai
                        </Anchor>
                      </Paragraph>
                    </div>
                  </XStack>
                  
                  <XStack display="flex" alignItems="flex-start">
                    <Box render="span" display="inline-flex" alignItems="center" marginRight={16} marginTop={4}><Phone size={24} color="var(--foreground)" /></Box>
                    <div>
                      <H3 fontWeight="500">Phone</H3>
                      <Paragraph color="var(--neutral-300)">
                        <Anchor tap href="tel:+18005551234" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}>
                          +1 (800) 555-1234
                        </Anchor>
                      </Paragraph>
                    </div>
                  </XStack>
                  
                  <XStack display="flex" alignItems="flex-start">
                    <Box render="span" display="inline-flex" alignItems="center" marginRight={16} marginTop={4}><MapPin size={24} color="var(--foreground)" /></Box>
                    <div>
                      <H3 fontWeight="500">Location</H3>
                      <Paragraph color="var(--neutral-300)">
                        Kansas City, MO<br />
                        United States
                      </Paragraph>
                    </div>
                  </XStack>
                </Box>
              </Box>
              
              <Box backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-xl)" padding={32} borderWidth={1} borderColor="var(--neutral-800)" flexGrow={1}>
                <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" marginBottom={24}>Connect With Us</H2>
                <Paragraph color="var(--neutral-300)" marginBottom={24}>
                  Follow us on social media or join our community platforms to stay updated
                  on the latest news and engage with other Hanzo users.
                </Paragraph>
                
                <Box rowGap={16}>
                  <Anchor minHeight={44} href="https://discord.gg/XthHQQj" display="flex" paddingHorizontal={16} paddingVertical={12} backgroundColor="var(--neutral-800)" borderRadius="var(--radius-lg)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}>
                    <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><MessageSquare size={20} color="var(--foreground)" /></Box>
                    <span>Join our Discord Community</span>
                  </Anchor>
                  
                  <Anchor minHeight={44} href="https://github.com/hanzoai" display="flex" paddingHorizontal={16} paddingVertical={12} backgroundColor="var(--neutral-800)" borderRadius="var(--radius-lg)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}>
                    <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><Github size={20} color="var(--foreground)" /></Box>
                    <span>Follow us on GitHub</span>
                  </Anchor>
                  
                  <Anchor minHeight={44} href="https://twitter.com/hanzoai" display="flex" paddingHorizontal={16} paddingVertical={12} backgroundColor="var(--neutral-800)" borderRadius="var(--radius-lg)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}>
                    <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><Twitter size={20} color="var(--foreground)" /></Box>
                    <span>Follow us on Twitter</span>
                  </Anchor>

                  <Anchor minHeight={44} href="https://linkedin.com/company/hanzo-ai" display="flex" paddingHorizontal={16} paddingVertical={12} backgroundColor="var(--neutral-800)" borderRadius="var(--radius-lg)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}>
                    <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><Linkedin size={20} color="var(--foreground)" /></Box>
                    <span>Connect on LinkedIn</span>
                  </Anchor>

                  <Anchor minHeight={44} href="https://facebook.com/hanzo-inc" display="flex" paddingHorizontal={16} paddingVertical={12} backgroundColor="var(--neutral-800)" borderRadius="var(--radius-lg)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}>
                    <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><Facebook size={20} color="var(--foreground)" /></Box>
                    <span>Like us on Facebook</span>
                  </Anchor>

                  <Anchor minHeight={44} href="https://instagram.com/hanzoai" display="flex" paddingHorizontal={16} paddingVertical={12} backgroundColor="var(--neutral-800)" borderRadius="var(--radius-lg)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-700)" }}>
                    <Box render="span" display="inline-flex" alignItems="center" marginRight={12}><Instagram size={20} color="var(--foreground)" /></Box>
                    <span>Follow us on Instagram</span>
                  </Anchor>
                </Box>
              </Box>
            </YStack>
          </Grid>
          
          {/* FAQ Section */}
          <Box textAlign="center">
            <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" marginBottom={24}>Frequently Asked Questions</H2>
            <Paragraph color="var(--neutral-300)" marginBottom={16}>
              Can't find what you're looking for? Check our comprehensive FAQ section.
            </Paragraph>
            <Button variant="outline" borderColor="var(--neutral-500)" color="var(--white)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.2)" }} size="sm">
              <a href="/pricing#faq">View FAQ</a>
            </Button>
          </Box>
        </Box>
      </Box>
      
      <Footer />
    </Box>
  );
};

export default Contact;
