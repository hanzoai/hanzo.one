import { Anchor, Box, Button, Grid, H2, H3, Helmet, Link, MotionBox, MotionText, Paragraph, Text, XStack, YStack, FILL} from '@/gui'
import React from "react";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CalendarIcon, User, Tag, ArrowRight, Rss, BookOpen } from "lucide-react";

const BRAND_COLOR = "var(--foreground)";

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "Introducing Hanzo AI v3: The next generation of AI development",
    excerpt: "Today we're excited to announce the release of Hanzo AI v3, our most powerful and flexible AI development platform yet.",
    date: "May 15, 2024",
    author: "Zach Kelling",
    category: "Product",
    tags: ["AI", "Release", "Development"],
    imageUrl: "/lovable-uploads/28d53ec4-328f-4812-862b-b9a760bbabae.png"
  },
  {
    id: 2,
    title: "How to build an AI-powered chatbot with Hanzo Bot in 10 minutes",
    excerpt: "In this tutorial, we'll show you how to create a custom AI chatbot using Hanzo Bot that can integrate with your existing systems.",
    date: "June 3, 2024",
    author: "David Tai",
    category: "Tutorial",
    tags: ["Bot", "Tutorial", "Integration"],
    imageUrl: "/lovable-uploads/96a9379c-acc3-4170-a96f-964fb8773dd3.png"
  },
  {
    id: 3,
    title: "The future of e-commerce with Hanzo Commerce",
    excerpt: "Explore how AI is transforming the e-commerce landscape and how Hanzo Commerce is leading the revolution.",
    date: "July 12, 2024",
    author: "Marketing Team",
    category: "Industry",
    tags: ["Commerce", "AI", "Future"],
    imageUrl: "/lovable-uploads/fd154f76-a7a9-4b99-ac2b-e1eb589ec4da.png"
  },
  {
    id: 4,
    title: "Scaling your application with Hanzo Vector",
    excerpt: "Learn how to scale your AI applications efficiently using Hanzo Vector's advanced embedding and semantic search capabilities.",
    date: "August 24, 2024",
    author: "Engineering Team",
    category: "Technical",
    tags: ["Vector", "Scaling", "Performance"],
    imageUrl: "/lovable-uploads/a31568fe-aa1f-4933-add1-b981564f25b9.png"
  }
];

const Blog = () => {
  return (
    <Box minHeight="100vh" backgroundColor="var(--black)" color="var(--white)">
      <Helmet>
        <title>Blog - Hanzo AI</title>
        <meta
          name="description"
          content="Latest news, tutorials, and insights from the Hanzo AI team."
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
                <BookOpen size={14} />
                Engineering Blog
              </MotionBox>

              <MotionText
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                fontSize="var(--text-3xl)" lineHeight="1.1" fontWeight="500" letterSpacing="var(--tracking-tight)" marginBottom={24} $sm={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }} $lg={{ fontSize: "var(--text-5xl)", lineHeight: "var(--leading-5xl)" }} $xl={{ fontSize: "var(--text-6xl)", lineHeight: "var(--leading-6xl)" }}
              >
                <Text color="var(--foreground)">Insights from</Text>
                <br />
                <Text color="var(--neutral-400)">the team.</Text>
              </MotionText>

              <MotionText
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                fontSize="var(--text-base)" lineHeight="var(--leading-relaxed)" color="var(--neutral-400)" marginBottom={40} maxWidth="var(--container-prose)" marginHorizontal="auto" $lg={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-lg)" }}
              >
                Tutorials, product updates, and deep dives into AI development
                from the Hanzo engineering team.
              </MotionText>

              <MotionBox
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                flexDirection="row" display="flex" flexWrap="wrap" alignItems="center" justifyContent="center" gap={16}
              >
                <Anchor minHeight={44} 
                  href="#posts"
                  paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" hoverStyle={{ opacity: 0.9 }}
                  style={FILL}
                >
                  Latest Posts
                  <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
                </Anchor>
                <XStack minHeight={44} render="button" display="inline-flex" alignItems="center" paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" borderWidth={1} borderColor="var(--neutral-700)" backgroundColor="transparent" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}>
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Rss size={16} /></Box>
                  Subscribe to RSS
                </XStack>
              </MotionBox>
            </Box>
          </Box>
        </Box>

        {/* Blog Content */}
        <Box id="posts" render="section" paddingVertical={64} paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
          <Box maxWidth="var(--container-max)" marginHorizontal="auto">
            {/* Featured Post */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              marginBottom={64}
            >
              <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} borderRadius="var(--radius-xl)" overflow="hidden" borderWidth={1} borderColor="var(--neutral-800)" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.1), rgb(255 255 255 / 0.08))" $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
                <YStack padding={32} display="flex" flexDirection="column" justifyContent="center">
                  <XStack display="flex" alignItems="center" columnGap={16} marginBottom={16}>
                    <Text
                      paddingHorizontal={12} paddingVertical={4} borderRadius="var(--radius-full)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)"
                      style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
                    >
                      Featured
                    </Text>
                    <Text color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" display="flex" alignItems="center">
                      <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><CalendarIcon size={16} /></Box>
                      {blogPosts[0].date}
                    </Text>
                  </XStack>

                  <H2 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={16} color="var(--foreground)" $md={{ fontSize: "var(--text-3xl)", lineHeight: "var(--leading-3xl)" }}>{blogPosts[0].title}</H2>
                  <Paragraph color="var(--neutral-300)" marginBottom={24}>{blogPosts[0].excerpt}</Paragraph>

                  <XStack display="flex" alignItems="center" columnGap={16} marginBottom={24}>
                    <XStack display="flex" alignItems="center">
                      <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><User size={16} color="var(--neutral-400)" /></Box>
                      <Text color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{blogPosts[0].author}</Text>
                    </XStack>
                    <XStack display="flex" alignItems="center">
                      <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Tag size={16} color="var(--neutral-400)" /></Box>
                      <Text color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{blogPosts[0].category}</Text>
                    </XStack>
                  </XStack>

                  <XStack minHeight={44}
                    render="button" display="inline-flex" alignItems="center" width="fit-content" paddingHorizontal={24} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" hoverStyle={{ opacity: 0.9 }}
                    style={FILL}
                  >
                    Read Article
                    <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
                  </XStack>
                </YStack>

                <Box position="relative" height={256} $md={{ height: "auto" }}>
                  <Box display="inline-block"
                    src={blogPosts[0].imageUrl}
                    alt={blogPosts[0].title}
                    render="img" position="absolute" top={0} right={0} bottom={0} left={0} width="100%" height="100%" objectFit="cover"
                  />
                </Box>
              </Grid>
            </MotionBox>

            {/* Blog Post Grid */}
            <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
              {blogPosts.slice(1).map((post, index) => (
                <MotionBox
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  
                  backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-xl)" overflow="hidden" borderWidth={1} borderColor="var(--neutral-800)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--neutral-700)" }}
                >
                  <Box position="relative" height={192}>
                    <Box display="inline-block"
                      src={post.imageUrl}
                      alt={post.title}
                      render="img" position="absolute" top={0} right={0} bottom={0} left={0} width="100%" height="100%" objectFit="cover"
                    />
                  </Box>

                  <Box padding={24}>
                    <XStack display="flex" alignItems="center" columnGap={16} marginBottom={12}>
                      <Text color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" display="flex" alignItems="center">
                        <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><CalendarIcon size={16} /></Box>
                        {post.date}
                      </Text>
                      <Text color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" display="flex" alignItems="center">
                        <Box render="span" display="inline-flex" alignItems="center" marginRight={4}><Tag size={16} /></Box>
                        {post.category}
                      </Text>
                    </XStack>

                    <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={12} color="var(--foreground)">{post.title}</H3>
                    <Paragraph color="var(--neutral-400)" marginBottom={16} WebkitLineClamp={3} display="-webkit-box" WebkitBoxOrient="vertical" overflow="hidden">{post.excerpt}</Paragraph>

                    <XStack display="flex" alignItems="center" justifyContent="space-between">
                      <XStack display="flex" alignItems="center">
                        <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><User size={16} color="var(--neutral-500)" /></Box>
                        <Text color="var(--neutral-500)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{post.author}</Text>
                      </XStack>
                      <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44}
                        render="button" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))"
                        style={{ color: BRAND_COLOR }}
                      >
                        Read More →
                      </Box>
                    </XStack>
                  </Box>
                </MotionBox>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* Newsletter CTA Section */}
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
              Stay up to date
            </MotionText>

            <MotionText
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" color="var(--neutral-400)" marginBottom={40} maxWidth="42rem" marginHorizontal="auto"
            >
              Get the latest Hanzo news, product updates, and tutorials delivered directly to your inbox.
            </MotionText>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              display="flex" flexDirection="column" gap={12} maxWidth="32rem" marginHorizontal="auto" $sm={{ flexDirection: "row" }}
            >
              <Box display="inline-block" minHeight={44}
                type="email"
                placeholder="Enter your email"
                render="input" flexGrow={1} paddingHorizontal={16} paddingVertical={12} backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-full)" color="var(--foreground)" focusStyle={{ outlineStyle: "none", borderColor: "var(--neutral-600)" }}
              />
              <XStack minHeight={44}
                render="button" display="inline-flex" alignItems="center" justifyContent="center" paddingHorizontal={32} paddingVertical={12} borderRadius="var(--radius-full)" fontWeight="500" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" fontSize="var(--text-base)" lineHeight="var(--leading-base)" hoverStyle={{ opacity: 0.9 }}
                style={FILL}
              >
                Subscribe
              </XStack>
            </MotionBox>
          </Box>
        </Box>
      </main>

      <Footer />
    </Box>
  );
};

export default Blog;
