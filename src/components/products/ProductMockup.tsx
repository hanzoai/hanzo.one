import { Box, Grid, MotionBox, Paragraph, Text, XStack } from '@/gui'
import React from "react";
import { motion } from "framer-motion";
import type { ProductCategory, Product } from "@/data/product-taxonomy";

interface ProductMockupProps {
  category: ProductCategory;
  product: Product;
  
}

// Database/SQL Mockup - Shows table view with query editor
const DatabaseMockup: React.FC<{ product: Product }> = ({ product }) => (
  <Box backgroundColor="var(--neutral-950)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" overflow="hidden">
    {/* Toolbar */}
    <XStack display="flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={12} borderBottomWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)">
      <XStack display="flex" gap={6}>
        <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
        <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
        <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
      </XStack>
      <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginLeft={8} fontFamily="var(--font-mono)">{product.shortName} Console</Text>
    </XStack>

    {/* Query Editor */}
    <Box padding={16} borderBottomWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)">
      <Box fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
        <Text color="var(--foreground)">SELECT</Text>
        <Text color="var(--neutral-300)"> * </Text>
        <Text color="var(--foreground)">FROM</Text>
        <Text color="var(--foreground)"> users </Text>
        <Text color="var(--foreground)">WHERE</Text>
        <Text color="var(--neutral-300)"> status = </Text>
        <Text color="var(--foreground)">'active'</Text>
        <Text color="var(--neutral-500)">;</Text>
      </Box>
    </Box>

    {/* Results Table */}
    <Box padding={16}>
      <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginBottom={12}>Results: 3 rows (2ms)</Box>
      <Box overflow="hidden" borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--neutral-800)">
        <Box render="table" display="table" width="100%" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
          <Box render="thead" display="table-header-group" backgroundColor="var(--surface-card-emphasis)">
            <tr>
              <Box render="th" display="table-cell" paddingHorizontal={12} paddingVertical={8} textAlign="left" color="var(--neutral-400)" fontWeight="500">id</Box>
              <Box render="th" display="table-cell" paddingHorizontal={12} paddingVertical={8} textAlign="left" color="var(--neutral-400)" fontWeight="500">name</Box>
              <Box render="th" display="table-cell" paddingHorizontal={12} paddingVertical={8} textAlign="left" color="var(--neutral-400)" fontWeight="500">email</Box>
              <Box render="th" display="table-cell" paddingHorizontal={12} paddingVertical={8} textAlign="left" color="var(--neutral-400)" fontWeight="500">status</Box>
            </tr>
          </Box>
          <Box render="tbody" display="table-row-group" fontFamily="var(--font-mono)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">
            <Box render="tr" display="table-row" borderTopWidth={1} borderColor="var(--neutral-800)">
              <Box render="td" display="table-cell" paddingHorizontal={12} paddingVertical={8} color="var(--foreground)">1</Box>
              <Box render="td" display="table-cell" paddingHorizontal={12} paddingVertical={8} color="var(--neutral-300)">alice</Box>
              <Box render="td" display="table-cell" paddingHorizontal={12} paddingVertical={8} color="var(--neutral-300)">alice@example.com</Box>
              <Box render="td" display="table-cell" paddingHorizontal={12} paddingVertical={8} color="var(--foreground)">active</Box>
            </Box>
            <Box render="tr" display="table-row" borderTopWidth={1} borderColor="var(--neutral-800)">
              <Box render="td" display="table-cell" paddingHorizontal={12} paddingVertical={8} color="var(--foreground)">2</Box>
              <Box render="td" display="table-cell" paddingHorizontal={12} paddingVertical={8} color="var(--neutral-300)">bob</Box>
              <Box render="td" display="table-cell" paddingHorizontal={12} paddingVertical={8} color="var(--neutral-300)">bob@example.com</Box>
              <Box render="td" display="table-cell" paddingHorizontal={12} paddingVertical={8} color="var(--foreground)">active</Box>
            </Box>
            <Box render="tr" display="table-row" borderTopWidth={1} borderColor="var(--neutral-800)">
              <Box render="td" display="table-cell" paddingHorizontal={12} paddingVertical={8} color="var(--foreground)">3</Box>
              <Box render="td" display="table-cell" paddingHorizontal={12} paddingVertical={8} color="var(--neutral-300)">carol</Box>
              <Box render="td" display="table-cell" paddingHorizontal={12} paddingVertical={8} color="var(--neutral-300)">carol@example.com</Box>
              <Box render="td" display="table-cell" paddingHorizontal={12} paddingVertical={8} color="var(--foreground)">active</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
);

// Vector Database Mockup - Shows vector visualization
const VectorMockup: React.FC<{ product: Product }> = ({ product }) => (
  <Box backgroundColor="var(--neutral-950)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" overflow="hidden">
    {/* Toolbar */}
    <XStack display="flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={12} borderBottomWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)">
      <XStack display="flex" gap={6}>
        <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
        <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
        <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
      </XStack>
      <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginLeft={8} fontFamily="var(--font-mono)">{product.shortName}</Text>
    </XStack>

    {/* Search Input */}
    <Box padding={16} borderBottomWidth={1} borderColor="var(--neutral-800)">
      <XStack display="flex" alignItems="center" gap={12}>
        <Box flex={1} backgroundColor="var(--neutral-900)" borderRadius="var(--radius-lg)" paddingHorizontal={16} paddingVertical={8} borderWidth={1} borderColor="var(--neutral-700)">
          <Text color="var(--neutral-400)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">Find similar: "machine learning tutorials"</Text>
        </Box>
        <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44} render="button" paddingHorizontal={16} paddingVertical={8} backgroundColor="var(--neutral-800)" color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" borderRadius="var(--radius-lg)" hoverStyle={{ backgroundColor: "var(--surface-card-emphasis)" }}>
          Search
        </Box>
      </XStack>
    </Box>

    {/* Vector Space Visualization */}
    <Box padding={16} position="relative" height={192}>
      <Box position="absolute" top={16} right={16} bottom={16} left={16}>
        {/* Grid */}
        <Box position="absolute" top={0} right={0} bottom={0} left={0} opacity={0.2}>
          {[...Array(5)].map((_, i) => (
            <Box key={`h-${i}`} position="absolute" width="100%" height={1} backgroundColor="var(--neutral-600)" style={{ top: `${i * 25}%` }} />
          ))}
          {[...Array(5)].map((_, i) => (
            <Box key={`v-${i}`} position="absolute" height="100%" width={1} backgroundColor="var(--neutral-600)" style={{ left: `${i * 25}%` }} />
          ))}
        </Box>

        {/* Vector points */}
        <MotionBox
          position="absolute" width={16} height={16} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-800)" boxShadow="0 10px 15px -3px rgb(0 0 0 / .35)" shadowColor="rgb(255 255 255 / 0.5)"
          style={{ left: '45%', top: '40%' }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <Box position="absolute" width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" style={{ left: '50%', top: '35%' }} />
        <Box position="absolute" width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" style={{ left: '40%', top: '45%' }} />
        <Box position="absolute" width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" style={{ left: '48%', top: '50%' }} />
        <Box position="absolute" width={8} height={8} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)" style={{ left: '20%', top: '25%' }} />
        <Box position="absolute" width={8} height={8} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)" style={{ left: '75%', top: '60%' }} />
        <Box position="absolute" width={8} height={8} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)" style={{ left: '65%', top: '20%' }} />
        <Box position="absolute" width={8} height={8} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-500)" style={{ left: '30%', top: '70%' }} />

        {/* Similarity lines */}
        <Box display="inline-block" render="svg" position="absolute" top={0} right={0} bottom={0} left={0} width="100%" height="100%" pointerEvents="none">
          <line x1="47%" y1="42%" x2="52%" y2="37%" stroke="#22d3ee" strokeWidth="1" strokeOpacity="0.5" />
          <line x1="47%" y1="42%" x2="42%" y2="47%" stroke="#22d3ee" strokeWidth="1" strokeOpacity="0.5" />
          <line x1="47%" y1="42%" x2="50%" y2="52%" stroke="#22d3ee" strokeWidth="1" strokeOpacity="0.5" />
        </Box>
      </Box>

      {/* Legend */}
      <XStack position="absolute" bottom={16} right={16} display="flex" alignItems="center" gap={16} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">
        <XStack display="flex" alignItems="center" gap={6}>
          <Box width={8} height={8} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-800)" />
          <Text color="var(--neutral-400)">Query</Text>
        </XStack>
        <XStack display="flex" alignItems="center" gap={6}>
          <Box width={8} height={8} borderRadius="var(--radius-full)" backgroundColor="var(--foreground)" />
          <Text color="var(--neutral-400)">Similar</Text>
        </XStack>
      </XStack>
    </Box>

    {/* Results */}
    <Box padding={16} borderTopWidth={1} borderColor="var(--neutral-800)">
      <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginBottom={8}>Top 3 matches (cosine similarity)</Box>
      <Box rowGap={8}>
        {[
          { score: 0.95, text: 'Intro to ML with Python' },
          { score: 0.89, text: 'Deep Learning Fundamentals' },
          { score: 0.84, text: 'Neural Networks Guide' }
        ].map((item, i) => (
          <XStack key={i} display="flex" alignItems="center" justifyContent="space-between" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
            <Text color="var(--neutral-300)" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">{item.text}</Text>
            <Text color="var(--foreground)" fontFamily="var(--font-mono)" marginLeft={8}>{item.score}</Text>
          </XStack>
        ))}
      </Box>
    </Box>
  </Box>
);

// Gateway/Compute Mockup - Shows API routes and model selection
const GatewayMockup: React.FC<{ product: Product }> = ({ product }) => (
  <Box backgroundColor="var(--neutral-950)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" overflow="hidden">
    {/* Toolbar */}
    <XStack display="flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={12} borderBottomWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)">
      <XStack display="flex" gap={6}>
        <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
        <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
        <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
      </XStack>
      <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginLeft={8} fontFamily="var(--font-mono)">{product.shortName} Dashboard</Text>
    </XStack>

    {/* Model Selection */}
    <Box padding={16} borderBottomWidth={1} borderColor="var(--neutral-800)">
      <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginBottom={8}>Active Models</Box>
      <XStack display="flex" flexWrap="wrap" gap={8}>
        {['gpt-4o', 'claude-3.5', 'gemini-pro', 'llama-3.1'].map((model) => (
          <XStack key={model} display="flex" alignItems="center" gap={8} paddingHorizontal={12} paddingVertical={6} backgroundColor="var(--neutral-800)" borderRadius="var(--radius-full)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">
            <Box width={6} height={6} borderRadius="var(--radius-full)" backgroundColor="var(--foreground)" />
            <Text color="var(--neutral-300)">{model}</Text>
          </XStack>
        ))}
      </XStack>
    </Box>

    {/* API Endpoint */}
    <Box padding={16} borderBottomWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)">
      <Box fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
        <Text color="var(--foreground)">POST</Text>
        <Text color="var(--neutral-400)"> /v1/chat/completions</Text>
      </Box>
    </Box>

    {/* Request/Response */}
    <Grid display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))">
      <Box padding={16}>
        <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginBottom={8}>Request</Box>
        <Box render="pre" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontFamily="var(--font-mono)" color="var(--neutral-400)" overflow="hidden">
{`{
  "model": "gpt-4o",
  "messages": [
    {"role": "user",
     "content": "Hello!"}
  ]
}`}
        </Box>
      </Box>
      <Box padding={16}>
        <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginBottom={8}>Response <Text color="var(--foreground)">200</Text></Box>
        <Box render="pre" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontFamily="var(--font-mono)" color="var(--neutral-400)" overflow="hidden">
{`{
  "choices": [{
    "message": {
      "content": "Hi!"
    }
  }],
  "usage": {...}
}`}
        </Box>
      </Box>
    </Grid>

    {/* Stats */}
    <Grid padding={16} borderTopWidth={1} borderColor="var(--neutral-800)" display="grid" gridTemplateColumns="repeat(3, minmax(0, 1fr))" gap={16}>
      <div>
        <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">Requests/min</Box>
        <Box fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--foreground)">2.4K</Box>
      </div>
      <div>
        <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">Avg Latency</Box>
        <Box fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--foreground)">124ms</Box>
      </div>
      <div>
        <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">Success Rate</Box>
        <Box fontSize="var(--text-lg)" lineHeight="var(--leading-lg)" fontWeight="600" color="var(--foreground)">99.9%</Box>
      </div>
    </Grid>
  </Box>
);

// ML/Training Mockup - Shows training progress
const MLMockup: React.FC<{ product: Product }> = ({ product }) => (
  <Box backgroundColor="var(--neutral-950)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" overflow="hidden">
    {/* Toolbar */}
    <XStack display="flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={12} borderBottomWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)">
      <XStack display="flex" gap={6}>
        <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
        <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
        <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
      </XStack>
      <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginLeft={8} fontFamily="var(--font-mono)">{product.shortName}</Text>
    </XStack>

    {/* Training Status */}
    <Box padding={16} borderBottomWidth={1} borderColor="var(--neutral-800)">
      <XStack display="flex" alignItems="center" justifyContent="space-between" marginBottom={12}>
        <XStack display="flex" alignItems="center" gap={8}>
          <MotionBox animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} width={8} height={8} borderRadius="var(--radius-full)" backgroundColor="var(--foreground)" />
          <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)">Training in progress</Text>
        </XStack>
        <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">Epoch 15/50</Text>
      </XStack>
      <Box height={8} backgroundColor="var(--neutral-800)" borderRadius="var(--radius-full)" overflow="hidden">
        <MotionBox
          height="100%" backgroundImage="linear-gradient(to right, var(--foreground), var(--neutral-500))"
          initial={{ width: 0 }}
          animate={{ width: '30%' }}
          transition={{ duration: 1 }}
        />
      </Box>
    </Box>

    {/* Metrics Chart */}
    <Box padding={16} borderBottomWidth={1} borderColor="var(--neutral-800)">
      <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginBottom={12}>Loss vs Epochs</Box>
      <Box height={128} position="relative">
        <Box display="inline-block" render="svg" width="100%" height="100%">
          {/* Grid lines */}
          <line x1="0" y1="25%" x2="100%" y2="25%" stroke="#374151" strokeWidth="1" />
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#374151" strokeWidth="1" />
          <line x1="0" y1="75%" x2="100%" y2="75%" stroke="#374151" strokeWidth="1" />

          {/* Loss curve */}
          <motion.path
            d="M 0 80 Q 20 70 40 50 T 80 35 T 120 28 T 160 24 T 200 22"
            stroke="var(--foreground)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />

          {/* Validation curve */}
          <motion.path
            d="M 0 85 Q 20 75 40 55 T 80 42 T 120 36 T 160 32 T 200 30"
            stroke="#22d3ee"
            strokeWidth="2"
            fill="none"
            strokeDasharray="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
        </Box>

        {/* Legend */}
        <XStack position="absolute" top={0} right={0} display="flex" alignItems="center" gap={16} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">
          <XStack display="flex" alignItems="center" gap={6}>
            <Box width={12} height={2} backgroundColor="var(--neutral-800)" />
            <Text color="var(--neutral-400)">Train</Text>
          </XStack>
          <XStack display="flex" alignItems="center" gap={6}>
            <Box width={12} height={2} backgroundColor="var(--foreground)" style={{ borderTop: '2px dashed' }} />
            <Text color="var(--neutral-400)">Val</Text>
          </XStack>
        </XStack>
      </Box>
    </Box>

    {/* Metrics Grid */}
    <Grid padding={16} display="grid" gridTemplateColumns="repeat(4, minmax(0, 1fr))" gap={16}>
      <div>
        <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">Loss</Box>
        <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="600" color="var(--foreground)">0.0234</Box>
      </div>
      <div>
        <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">Accuracy</Box>
        <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="600" color="var(--foreground)">94.2%</Box>
      </div>
      <div>
        <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">LR</Box>
        <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="600" color="var(--foreground)">1e-4</Box>
      </div>
      <div>
        <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">GPU</Box>
        <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="600" color="var(--foreground)">A100</Box>
      </div>
    </Grid>
  </Box>
);

// Chat/Agent Mockup - Shows chat interface with tool calls
const ChatMockup: React.FC<{ product: Product }> = ({ product }) => (
  <Box backgroundColor="var(--neutral-950)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" overflow="hidden">
    {/* Toolbar */}
    <XStack display="flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={12} borderBottomWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)">
      <XStack display="flex" gap={6}>
        <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
        <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
        <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
      </XStack>
      <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginLeft={8} fontFamily="var(--font-mono)">{product.shortName}</Text>
      <XStack marginLeft="auto" display="flex" alignItems="center" gap={8}>
        <Box width={8} height={8} borderRadius="var(--radius-full)" backgroundColor="var(--foreground)" />
        <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)">gpt-4o</Text>
      </XStack>
    </XStack>

    {/* Messages */}
    <Box padding={16} rowGap={16} maxHeight={256} overflowY="auto">
      {/* User message */}
      <XStack display="flex" justifyContent="flex-end">
        <Box backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={1} borderColor="var(--border-strong)" borderRadius="var(--radius-2xl)" borderBottomRightRadius="var(--radius-md)" paddingHorizontal={16} paddingVertical={8} maxWidth="80%">
          <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)">What's the weather in Tokyo?</Paragraph>
        </Box>
      </XStack>

      {/* Tool call */}
      <XStack display="flex" justifyContent="flex-start">
        <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-700)" borderRadius="var(--radius-lg)" paddingHorizontal={12} paddingVertical={8} maxWidth="90%">
          <XStack display="flex" alignItems="center" gap={8} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)" marginBottom={4}>
            <Box display="inline-block" render="svg" width={12} height={12} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </Box>
            <span>get_weather</span>
            <Text color="var(--foreground)">completed</Text>
          </XStack>
          <Box render="pre" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontFamily="var(--font-mono)" color="var(--neutral-500)">{"{ \"city\": \"Tokyo\" }"}</Box>
        </Box>
      </XStack>

      {/* Assistant message */}
      <XStack display="flex" justifyContent="flex-start">
        <Box backgroundColor="var(--surface-card-emphasis)" borderWidth={1} borderColor="var(--neutral-700)" borderRadius="var(--radius-2xl)" borderBottomLeftRadius="var(--radius-md)" paddingHorizontal={16} paddingVertical={8} maxWidth="80%">
          <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-200)">The weather in Tokyo is currently 18C and partly cloudy. Perfect for a walk!</Paragraph>
        </Box>
      </XStack>
    </Box>

    {/* Input */}
    <Box padding={16} borderTopWidth={1} borderColor="var(--neutral-800)">
      <XStack display="flex" alignItems="center" gap={8}>
        <Box display="inline-block" minHeight={44}
          type="text"
          placeholder="Type a message..."
          render="input" flex={1} backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-700)" borderRadius="var(--radius-lg)" paddingHorizontal={16} paddingVertical={8} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" placeholderTextColor="var(--neutral-500)" focusStyle={{ outlineStyle: "none", borderColor: "var(--neutral-600)" }}
        />
        <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44} render="button" padding={8} backgroundColor="var(--neutral-800)" color="var(--foreground)" borderRadius="var(--radius-lg)" hoverStyle={{ backgroundColor: "var(--surface-card-emphasis)" }}>
          <Box display="inline-block" render="svg" width={20} height={20} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </Box>
        </Box>
      </XStack>
    </Box>
  </Box>
);

// Agent Workflow Mockup
const AgentMockup: React.FC<{ product: Product }> = ({ product }) => (
  <Box backgroundColor="var(--neutral-950)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" overflow="hidden">
    {/* Toolbar */}
    <XStack display="flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={12} borderBottomWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)">
      <XStack display="flex" gap={6}>
        <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
        <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
        <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
      </XStack>
      <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginLeft={8} fontFamily="var(--font-mono)">{product.shortName} Workflow</Text>
    </XStack>

    {/* Workflow visualization */}
    <Box padding={24} position="relative">
      <XStack display="flex" alignItems="center" justifyContent="space-between">
        {/* Nodes */}
        <MotionBox
          display="flex" flexDirection="column" alignItems="center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0 }}
        >
          <XStack width={56} height={56} borderRadius="var(--radius-xl)" backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={2} borderColor="var(--foreground)" display="flex" alignItems="center" justifyContent="center">
            <Box display="inline-block" render="svg" width={24} height={24} color="var(--foreground)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </Box>
          </XStack>
          <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)" marginTop={8}>Input</Text>
        </MotionBox>

        {/* Arrow */}
        <MotionBox
          flex={1} height={2} marginHorizontal={8} backgroundImage="linear-gradient(to right, var(--foreground), var(--foreground))"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3 }}
        />

        <MotionBox
          display="flex" flexDirection="column" alignItems="center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <XStack width={56} height={56} borderRadius="var(--radius-xl)" backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={2} borderColor="var(--neutral-500)" display="flex" alignItems="center" justifyContent="center">
            <Box display="inline-block" render="svg" width={24} height={24} color="var(--foreground)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </Box>
          </XStack>
          <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)" marginTop={8}>Planner</Text>
        </MotionBox>

        {/* Arrow */}
        <MotionBox
          flex={1} height={2} marginHorizontal={8} backgroundImage="linear-gradient(to right, var(--foreground), var(--foreground))"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6 }}
        />

        <MotionBox
          display="flex" flexDirection="column" alignItems="center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <XStack width={56} height={56} borderRadius="var(--radius-xl)" backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={2} borderColor="var(--neutral-500)" display="flex" alignItems="center" justifyContent="center">
            <Box display="inline-block" render="svg" width={24} height={24} color="var(--foreground)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </Box>
          </XStack>
          <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)" marginTop={8}>Tools</Text>
        </MotionBox>

        {/* Arrow */}
        <MotionBox
          flex={1} height={2} marginHorizontal={8} backgroundImage="linear-gradient(to right, var(--foreground), var(--foreground))"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.9 }}
        />

        <MotionBox
          display="flex" flexDirection="column" alignItems="center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          <XStack width={56} height={56} borderRadius="var(--radius-xl)" backgroundColor="rgb(255 255 255 / 0.2)" borderWidth={2} borderColor="var(--neutral-500)" display="flex" alignItems="center" justifyContent="center">
            <Box display="inline-block" render="svg" width={24} height={24} color="var(--foreground)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </Box>
          </XStack>
          <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-400)" marginTop={8}>Output</Text>
        </MotionBox>
      </XStack>
    </Box>

    {/* Tool calls */}
    <Box padding={16} borderTopWidth={1} borderColor="var(--neutral-800)">
      <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginBottom={8}>Tool Calls</Box>
      <Box rowGap={8}>
        {[
          { name: 'search_web', status: 'completed', time: '120ms' },
          { name: 'read_file', status: 'completed', time: '45ms' },
          { name: 'write_code', status: 'running', time: '...' }
        ].map((tool, i) => (
          <XStack key={i} display="flex" alignItems="center" justifyContent="space-between" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">
            <XStack display="flex" alignItems="center" gap={8}>
              <Box width={6} height={6} borderRadius="var(--radius-full)" backgroundColor={tool.status === 'running' ? "var(--foreground)" : "var(--foreground)"} />
              <Text fontFamily="var(--font-mono)" color="var(--neutral-300)">{tool.name}</Text>
            </XStack>
            <Text color={tool.status === 'running' ? "var(--foreground)" : "var(--neutral-500)"}>{tool.time}</Text>
          </XStack>
        ))}
      </Box>
    </Box>
  </Box>
);

// Observability Mockup - Shows metrics/logs
const ObservabilityMockup: React.FC<{ product: Product }> = ({ product }) => (
  <Box backgroundColor="var(--neutral-950)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" overflow="hidden">
    {/* Toolbar */}
    <XStack display="flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={12} borderBottomWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)">
      <XStack display="flex" gap={6}>
        <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
        <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
        <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
      </XStack>
      <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginLeft={8} fontFamily="var(--font-mono)">{product.shortName}</Text>
    </XStack>

    {/* Metrics Overview */}
    <Grid display="grid" gridTemplateColumns="repeat(3, minmax(0, 1fr))" borderBottomWidth={1} borderColor="var(--neutral-800)">
      <Box padding={16}>
        <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginBottom={4}>Requests/sec</Box>
        <Box fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--foreground)">1,247</Box>
        <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--foreground)">+12.3%</Box>
      </Box>
      <Box padding={16}>
        <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginBottom={4}>P99 Latency</Box>
        <Box fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--foreground)">234ms</Box>
        <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--foreground)">+2.1%</Box>
      </Box>
      <Box padding={16}>
        <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginBottom={4}>Error Rate</Box>
        <Box fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" color="var(--foreground)">0.02%</Box>
        <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--foreground)">-0.01%</Box>
      </Box>
    </Grid>

    {/* Mini chart */}
    <Box padding={16} borderBottomWidth={1} borderColor="var(--neutral-800)">
      <XStack height={80} display="flex" alignItems="flex-end" gap={4}>
        {[65, 72, 68, 85, 92, 78, 88, 95, 82, 90, 87, 93].map((h, i) => (
          <MotionBox
            key={i}
            flex={1} borderTopLeftRadius="var(--radius)" borderTopRightRadius="var(--radius)" backgroundImage="linear-gradient(to top, var(--foreground), rgb(255 255 255 / 0.08))"
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ delay: i * 0.05 }}
          />
        ))}
      </XStack>
    </Box>

    {/* Logs */}
    <Box padding={16}>
      <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginBottom={8}>Recent Logs</Box>
      <Box rowGap={4} fontFamily="var(--font-mono)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">
        {[
          { level: 'info', msg: 'Request completed successfully', time: '12:34:56' },
          { level: 'warn', msg: 'Rate limit approaching', time: '12:34:55' },
          { level: 'info', msg: 'New connection established', time: '12:34:54' }
        ].map((log, i) => (
          <XStack key={i} display="flex" alignItems="flex-start" gap={8}>
            <Text color="var(--neutral-600)">{log.time}</Text>
            <Text color={log.level === 'warn' ? "var(--foreground)" : "var(--foreground)"}>[{log.level}]</Text>
            <Text color="var(--neutral-400)" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">{log.msg}</Text>
          </XStack>
        ))}
      </Box>
    </Box>
  </Box>
);

// Platform/Infrastructure Mockup
const PlatformMockup: React.FC<{ product: Product }> = ({ product }) => (
  <Box backgroundColor="var(--neutral-950)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" overflow="hidden">
    {/* Toolbar */}
    <XStack display="flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={12} borderBottomWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)">
      <XStack display="flex" gap={6}>
        <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
        <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
        <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
      </XStack>
      <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginLeft={8} fontFamily="var(--font-mono)">{product.shortName}</Text>
    </XStack>

    {/* Deployment Status */}
    <Box padding={16} borderBottomWidth={1} borderColor="var(--neutral-800)">
      <XStack display="flex" alignItems="center" justifyContent="space-between" marginBottom={12}>
        <XStack display="flex" alignItems="center" gap={8}>
          <Box width={8} height={8} borderRadius="var(--radius-full)" backgroundColor="var(--foreground)" />
          <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" fontWeight="500">Production</Text>
        </XStack>
        <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">v2.4.1</Text>
      </XStack>
      <XStack display="flex" alignItems="center" gap={16} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">
        <XStack display="flex" alignItems="center" gap={6}>
          <Box display="inline-block" render="svg" width={16} height={16} color="var(--neutral-400)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
          </Box>
          <Text color="var(--neutral-400)">3 replicas</Text>
        </XStack>
        <XStack display="flex" alignItems="center" gap={6}>
          <Box display="inline-block" render="svg" width={16} height={16} color="var(--neutral-400)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
          </Box>
          <Text color="var(--neutral-400)">us-east-1</Text>
        </XStack>
      </XStack>
    </Box>

    {/* Services */}
    <Box padding={16}>
      <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginBottom={12}>Services</Box>
      <Box rowGap={8}>
        {[
          { name: 'api-gateway', status: 'healthy', cpu: '23%' },
          { name: 'auth-service', status: 'healthy', cpu: '12%' },
          { name: 'worker', status: 'scaling', cpu: '78%' }
        ].map((svc, i) => (
          <XStack key={i} display="flex" alignItems="center" justifyContent="space-between" padding={8} backgroundColor="var(--neutral-900)" borderRadius="var(--radius-lg)">
            <XStack display="flex" alignItems="center" gap={8}>
              <Box width={6} height={6} borderRadius="var(--radius-full)" backgroundColor={svc.status === 'scaling' ? "var(--foreground)" : "var(--foreground)"} />
              <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-300)">{svc.name}</Text>
            </XStack>
            <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">{svc.cpu} CPU</Text>
          </XStack>
        ))}
      </Box>
    </Box>
  </Box>
);

// Async/Queue Mockup
const AsyncMockup: React.FC<{ product: Product }> = ({ product }) => (
  <Box backgroundColor="var(--neutral-950)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" overflow="hidden">
    {/* Toolbar */}
    <XStack display="flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={12} borderBottomWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)">
      <XStack display="flex" gap={6}>
        <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
        <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
        <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
      </XStack>
      <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginLeft={8} fontFamily="var(--font-mono)">{product.shortName}</Text>
    </XStack>

    {/* Queue Stats */}
    <Grid display="grid" gridTemplateColumns="repeat(3, minmax(0, 1fr))" borderBottomWidth={1} borderColor="var(--neutral-800)">
      <Box padding={16}>
        <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginBottom={4}>Pending</Box>
        <Box fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" color="var(--foreground)">1,247</Box>
      </Box>
      <Box padding={16}>
        <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginBottom={4}>Processing</Box>
        <Box fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" color="var(--foreground)">32</Box>
      </Box>
      <Box padding={16}>
        <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginBottom={4}>Completed</Box>
        <Box fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="700" color="var(--foreground)">45.2K</Box>
      </Box>
    </Grid>

    {/* Queue visualization */}
    <Box padding={16} borderBottomWidth={1} borderColor="var(--neutral-800)">
      <XStack display="flex" alignItems="center" gap={4}>
        {[...Array(12)].map((_, i) => (
          <MotionBox
            key={i}
            flex={1} height={32} borderRadius="var(--radius)" backgroundColor={i < 8 ? "rgb(255 255 255 / 0.6)" : "var(--neutral-800)"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05 }}
          />
        ))}
      </XStack>
      <XStack display="flex" justifyContent="space-between" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginTop={8}>
        <span>In</span>
        <span>Out</span>
      </XStack>
    </Box>

    {/* Recent Jobs */}
    <Box padding={16}>
      <Box fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginBottom={8}>Recent Jobs</Box>
      <Box rowGap={8}>
        {[
          { id: 'job-a1b2', status: 'completed', time: '234ms' },
          { id: 'job-c3d4', status: 'running', time: '...' },
          { id: 'job-e5f6', status: 'pending', time: '-' }
        ].map((job, i) => (
          <XStack key={i} display="flex" alignItems="center" justifyContent="space-between" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">
            <XStack display="flex" alignItems="center" gap={8}>
              <Box
                width={6}
                height={6}
                borderRadius="var(--radius-full)"
                backgroundColor={job.status === 'completed' ? 'var(--foreground)' : job.status === 'running' ? 'var(--neutral-300)' : 'var(--neutral-500)'}
              />
              <Text fontFamily="var(--font-mono)" color="var(--neutral-300)">{job.id}</Text>
            </XStack>
            <Text color="var(--neutral-500)">{job.time}</Text>
          </XStack>
        ))}
      </Box>
    </Box>
  </Box>
);

// Generic fallback mockup
const GenericMockup: React.FC<{ product: Product }> = ({ product }) => (
  <Box backgroundColor="var(--neutral-950)" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" overflow="hidden">
    {/* Toolbar */}
    <XStack display="flex" alignItems="center" gap={8} paddingHorizontal={16} paddingVertical={12} borderBottomWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)">
      <XStack display="flex" gap={6}>
        <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
        <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
        <Box width={12} height={12} borderRadius="var(--radius-full)" backgroundColor="var(--surface-overlay)" />
      </XStack>
      <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" marginLeft={8} fontFamily="var(--font-mono)">{product.shortName}</Text>
    </XStack>

    <XStack padding={32} display="flex" alignItems="center" justifyContent="center">
      <Box textAlign="center">
        <XStack width={64} height={64} borderRadius="var(--radius-2xl)" borderWidth={1} borderColor="var(--border-strong)" display="flex" alignItems="center" justifyContent="center" marginHorizontal="auto" marginBottom={16} backgroundImage="linear-gradient(to bottom right, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.08))">
          <MotionBox
            width={32} height={32} borderRadius="var(--radius-lg)" backgroundColor="var(--surface-card-emphasis)"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </XStack>
        <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">{product.tagline}</Paragraph>
      </Box>
    </XStack>
  </Box>
);

// Main ProductMockup component that selects the appropriate mockup
export const ProductMockup: React.FC<ProductMockupProps> = ({ category, product, ...styleProps }) => {
  // Select mockup based on product ID or category
  const getMockup = () => {
    // Specific product mockups
    if (['sql', 'sql-vector', 'documentdb', 'kv', 'datastore', 'datastore-vector'].includes(product.id)) {
      return <DatabaseMockup product={product} />;
    }
    if (['vector', 'search'].includes(product.id)) {
      return <VectorMockup product={product} />;
    }
    if (['gateway', 'functions', 'runtime', 'machines'].includes(product.id)) {
      return <GatewayMockup product={product} />;
    }
    if (['chat', 'mcp'].includes(product.id)) {
      return <ChatMockup product={product} />;
    }
    if (['agent', 'operative', 'flow'].includes(product.id)) {
      return <AgentMockup product={product} />;
    }
    if (['tasks', 'cron', 'queues', 'pubsub'].includes(product.id)) {
      return <AsyncMockup product={product} />;
    }

    // Category-based mockups
    switch (category) {
      case 'data':
        return <DatabaseMockup product={product} />;
      case 'compute':
        return <GatewayMockup product={product} />;
      case 'ml':
        return <MLMockup product={product} />;
      case 'observability':
        return <ObservabilityMockup product={product} />;
      case 'platform':
        return <PlatformMockup product={product} />;
      case 'async':
        return <AsyncMockup product={product} />;
      case 'apps':
        return <ChatMockup product={product} />;
      default:
        return <GenericMockup product={product} />;
    }
  };

  return (
    <MotionBox {...styleProps}
      
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {getMockup()}
    </MotionBox>
  );
};

export default ProductMockup;
