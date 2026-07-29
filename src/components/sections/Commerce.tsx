import { Box, Button, Grid, H2, H3, H4, MotionBox, Paragraph, Text, XStack } from '@/gui'
import { motion } from "framer-motion";
import { ShoppingCart, CreditCard, DollarSign, BarChart } from "lucide-react";
const Commerce = () => {
  return <Box render="section" paddingVertical={80} backgroundColor="var(--black)" backgroundImage="linear-gradient(to bottom, var(--pure-black), var(--neutral-900))">
      <Box maxWidth="var(--container-max)" marginHorizontal="auto" paddingHorizontal={16} $sm={{ paddingHorizontal: 24 }} $lg={{ paddingHorizontal: 32 }}>
        <MotionBox initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} textAlign="center" marginBottom={64}>
          <XStack display="inline-flex" alignItems="center" columnGap={8} backgroundColor="rgb(255 255 255 / 0.1)" paddingHorizontal={16} paddingVertical={4} borderRadius="var(--radius-full)" marginBottom={24}>
            <ShoppingCart size={16} color="var(--white)" />
            <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--white)">E-commerce Platform</Text>
          </XStack>
          <H2 fontSize="var(--text-4xl)" lineHeight="var(--leading-4xl)" fontFamily="var(--font-display)" color="var(--white)" marginBottom={16}>Complete Commerce Stack</H2>
          <Paragraph fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" color="var(--neutral-300)" maxWidth="var(--container-prose)" marginHorizontal="auto">
            Everything you need to build and scale your e-commerce business.
          </Paragraph>
        </MotionBox>

        <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={32} marginBottom={64} $lg={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <MotionBox initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} padding={32} borderRadius="var(--radius-xl)" outlineWidth={1} outlineColor="rgb(255 255 255 / 0.1)" outlineStyle="solid" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.05), transparent)">
            <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="600" color="var(--white)" marginBottom={24}>One-Line Integration</H3>
            <Box backgroundColor="rgb(0 0 0 / 0.5)" padding={24} borderRadius="var(--radius-lg)" marginBottom={24}>
              <Box render="pre" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)">
                <code>{`import { createStore } from '@hanzo/commerce';

// Complete store in one line
const store = createStore();`}</code>
              </Box>
            </Box>
            <Paragraph color="var(--neutral-300)">Launch your store with just one line of code. Includes products, cart, checkout, and more.</Paragraph>
          </MotionBox>

          <MotionBox initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={16}>
            <Box padding={24} borderRadius="var(--radius-xl)" outlineWidth={1} outlineColor="rgb(255 255 255 / 0.1)" outlineStyle="solid" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.05), transparent)">
              <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><CreditCard size={32} color="var(--white)" /></Box>
              <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--white)" marginBottom={8}>Payments</H4>
              <Paragraph color="var(--neutral-300)">Global payment processing with 100+ methods</Paragraph>
            </Box>
            <Box padding={24} borderRadius="var(--radius-xl)" outlineWidth={1} outlineColor="rgb(255 255 255 / 0.1)" outlineStyle="solid" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.05), transparent)">
              <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><ShoppingCart size={32} color="var(--white)" /></Box>
              <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--white)" marginBottom={8}>Store</H4>
              <Paragraph color="var(--neutral-300)">Product management and inventory tracking</Paragraph>
            </Box>
            <Box padding={24} borderRadius="var(--radius-xl)" outlineWidth={1} outlineColor="rgb(255 255 255 / 0.1)" outlineStyle="solid" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.05), transparent)">
              <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><DollarSign size={32} color="var(--white)" /></Box>
              <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--white)" marginBottom={8}>Pricing</H4>
              <Paragraph color="var(--neutral-300)">Flexible pricing and subscription management</Paragraph>
            </Box>
            <Box padding={24} borderRadius="var(--radius-xl)" outlineWidth={1} outlineColor="rgb(255 255 255 / 0.1)" outlineStyle="solid" backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.05), transparent)">
              <Box render="span" display="inline-flex" alignItems="center" marginBottom={16}><BarChart size={32} color="var(--white)" /></Box>
              <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--white)" marginBottom={8}>Analytics</H4>
              <Paragraph color="var(--neutral-300)">Real-time sales and customer insights</Paragraph>
            </Box>
          </MotionBox>
        </Grid>

        <Box textAlign="center">
          <Button backgroundColor="rgb(255 255 255 / 0.05)" color="var(--white)" paddingHorizontal={32} paddingVertical={24} fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="rgb(255 255 255 / 0.1)" hoverStyle={{ backgroundColor: "rgb(255 255 255 / 0.1)", borderColor: "rgb(255 255 255 / 0.2)" }}>
            Start Building with Commerce
          </Button>
        </Box>
      </Box>
    </Box>;
};
export default Commerce;