import { Box, ChromeText, Link, MotionBox, Paragraph, Text, XStack } from '@/gui'

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";


interface DXPlatformCardProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  isHovered: string | null;
  setIsHovered: (id: string | null) => void;
  color?: string;
}

const getColorClasses = (color: string = "indigo", isHovered: boolean) => {
  const colorMap: Record<string, { bg: string, hoverBg: string, text: string, hoverText: string }> = {
    indigo: { 
    },
    purple: { 
    },
    blue: { 
    },
    green: { 
    },
    amber: { 
    },
    teal: { 
    },
    rose: { 
    },
    cyan: { 
    },
    gray: { 
    }
  };

  const colorClasses = colorMap[color] || colorMap.indigo;
  
  return {
    bgClass: isHovered ? colorClasses.hoverBg : colorClasses.bg,
    textClass: isHovered ? colorClasses.hoverText : colorClasses.text
  };
};

const DXPlatformCard: React.FC<DXPlatformCardProps> = ({
  id,
  title,
  description,
  features,
  icon: Icon,
  isHovered,
  setIsHovered,
  color = "indigo"
}) => {
  const isHoveredState = isHovered === id;
  const { bgClass, textClass } = getColorClasses(color, isHoveredState);

  const CardContent = (
    <>
      <XStack height={48} width={48} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" marginBottom={16} transition="color, background-color, border-color, fill, stroke 300ms cubic-bezier(.4,0,.2,1)">
        <Icon height={24} width={24} transition="color, background-color, border-color, fill, stroke 300ms cubic-bezier(.4,0,.2,1)" />
      </XStack>
      <ChromeText as="h3" fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" marginBottom={8}>
        {title}
      </ChromeText>
      <Paragraph color="var(--neutral-300)" marginBottom={16} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
        {description}
      </Paragraph>
      <Box render="ul" color="var(--neutral-400)" rowGap={8} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" marginTop="auto" display="none" $lg={{ display: "block" }}>
        {features.slice(0, 2).map((feature, index) => (
          <XStack key={`${id}-feature-${index}`} render="li" display="flex" alignItems="flex-start">
            <Text marginRight={8}>•</Text>
            <span>{feature}</span>
          </XStack>
        ))}
      </Box>
    </>
  );

  const containerClasses = "bg-gray-900/20 border border-gray-800 rounded-xl p-6 group hover:bg-gray-900/30 transition-colors h-full flex flex-col";

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.1 }}
      onMouseEnter={() => setIsHovered(id)}
      onMouseLeave={() => setIsHovered(null)}
    >
      {id === "more" ? (
        <Link tap to="/platform" >
          {CardContent}
        </Link>
      ) : (
        <Link tap to={`/${id}`} >
          {CardContent}
        </Link>
      )}
    </MotionBox>
  );
};

export default DXPlatformCard;
