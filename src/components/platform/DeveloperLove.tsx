import { Anchor, Box, Button, Grid, H2, H4, MotionBox, Paragraph, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const tweets = [
  {
    name: "Bob Jones",
    handle: "@heybobjones",
    content: "Installed @umami_software with @Hanzo in 60 seconds. Then did it again on AWS with a new Ubuntu 24 instance, Docker, Nginx, Postgres, Certbot and Cloudflare in 60 minutes.",
    avatar: "/placeholder.svg"
  },
  {
    name: "Fabio Coelho",
    handle: "@fccoelho7",
    content: "this week I swapped @heroku with @Hanzo, no more annoying redis/postgres obligatory updates anymore.. in love with Hanzo's docker support",
    avatar: "/placeholder.svg"
  },
  {
    name: "Lyes",
    handle: "@lyker_zi",
    content: "There is an easier option. Deploying literally anything on @Hanzo",
    avatar: "/placeholder.svg"
  },
  {
    name: "Benjamin Klieger",
    handle: "@BenjaminKlieger",
    content: "\"Ship your apps, databases, and more to production in seconds.\"@Hanzo is not exaggerating, it's a breeze to deploy. Bringing Infinite Bookshelf online with a custom domain took minutes… and that just because I had to create a Dockerfile!",
    avatar: "/placeholder.svg"
  },
  {
    name: "kinsyu",
    handle: "@kinsyudev",
    content: "Addicted to organising my services in @Hanzo",
    avatar: "/placeholder.svg"
  },
  {
    name: "Sam Newby",
    handle: "@SamNewby_",
    content: "The UX in deploying a new app on @Hanzo is probably the best I've ever used. Spinning up a new MySQL database was so easy and fast.",
    avatar: "/placeholder.svg"
  },
  {
    name: "flavio",
    handle: "@flaviocopes",
    content: "I'm using @Hanzo_App to get a PostgreSQL database in the cloud and tbh it feels like magic",
    avatar: "/placeholder.svg"
  },
  {
    name: "Kyle McDonald",
    handle: "@kpmdev",
    content: "Damn, @Hanzo is by far the fastest I've ever got up and running on a host. What an insanely good experience.",
    avatar: "/placeholder.svg"
  }
];

const DeveloperLove = () => {
  return (
    <Box render="section" paddingVertical={80} paddingHorizontal={16} backgroundImage="linear-gradient(to bottom, var(--neutral-900), var(--pure-black))" $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center" marginBottom={64}
        >
          <H2 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" marginBottom={16}>…and loved by developers</H2>
          <XStack display="flex" justifyContent="center">
            <Anchor minHeight={44} 
              href="https://twitter.com/search?q=hanzo" 
              target="_blank" 
              rel="noopener noreferrer"
              color="var(--foreground)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}
            >
              Join nearly 1M developers building with Hanzo <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ArrowRight size={16} /></Box>
            </Anchor>
          </XStack>
        </MotionBox>
        
        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={16} $sm={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
          {tweets.map((tweet, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              backgroundColor="var(--surface-card-emphasis)" borderRadius="var(--radius-xl)" padding={16} borderWidth={1} borderColor="var(--neutral-800)"
            >
              <XStack display="flex" alignItems="center" marginBottom={12}>
                <Box display="inline-block"
                  src={tweet.avatar}
                  alt={tweet.name}
                  render="img" height={40} width={40} borderRadius="var(--radius-full)" objectFit="cover" marginRight={12}
                />
                <div>
                  <H4 fontWeight="600" color="var(--white)">{tweet.name}</H4>
                  <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">{tweet.handle}</Paragraph>
                </div>
              </XStack>
              <Paragraph color="var(--neutral-300)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{tweet.content}</Paragraph>
            </MotionBox>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default DeveloperLove;
