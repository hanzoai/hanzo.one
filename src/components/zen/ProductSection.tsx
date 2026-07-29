import { Grid, H3, H4, MotionBox, Paragraph } from '@/gui'

import React from "react";
import { motion } from "framer-motion";

interface Product {
  name: string;
  description: string;
}

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  products: Product[];
  bgClass?: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  subtitle,
  products,
  bgClass = "bg-gradient-to-br from-purple-900/20 to-indigo-900/20"
}) => {
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      borderRadius="var(--radius-xl)" padding={32} backdropFilter="blur(4px)" WebkitBackdropFilter="blur(4px)" borderWidth={1} borderColor="rgb(255 255 255 / 0.1)"
    >
      <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={8} $md={{ fontSize: "var(--text-3xl)", lineHeight: "var(--leading-3xl)" }}>{title}</H3>
      {subtitle && <Paragraph color="var(--neutral-300)" marginBottom={24}>{subtitle}</Paragraph>}
      
      <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={16} $md={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
        {products.map((product, index) => {
          // Handle products in format "Name – Description"
          let name, description;
          if (product.description.includes(" – ")) {
            [name, description] = product.description.split(" – ");
          } else {
            name = product.name;
            description = product.description;
          }
          
          return (
            <MotionBox
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              
              backgroundColor="rgb(0 0 0 / 0.3)" padding={16} borderRadius="var(--radius-lg)" borderWidth={1} borderColor="rgb(255 255 255 / 0.1)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--border-strong)" }}
            >
              <H4 fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--foreground)" marginBottom={4}>{name}</H4>
              <Paragraph color="var(--neutral-300)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">{description}</Paragraph>
            </MotionBox>
          );
        })}
      </Grid>
    </MotionBox>
  );
};

export default ProductSection;
