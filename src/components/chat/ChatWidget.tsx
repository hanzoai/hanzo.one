import { Anchor, Box, MotionBox, XStack, FILL} from '@/gui'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, ExternalLink, Bot } from "lucide-react";


// Quick action buttons
const quickActions = [
  { label: "What is Hanzo?", value: "What is Hanzo AI and what can I build with it?" },
  { label: "Get started", value: "How do I get started with Hanzo?" },
  { label: "Pricing", value: "What are Hanzo's pricing plans?" },
  { label: "API docs", value: "Where can I find the API documentation?" },
];

// System context for Hanzo AI
const HANZO_CONTEXT = `You are the Hanzo AI assistant on hanzo.ai. Help users understand and use the Hanzo platform.

Key Information:
- Hanzo is an AI PaaS (Platform as a Service) for building AI-powered applications
- Products include: Hanzo Dev (AI coding agent), Hanzo Auto (workflow automation), Hanzo Flow (visual AI workflow builder)
- Infrastructure: Vector DB, SQL, KV, Message Queue, Functions, Machines
- 260+ MCP (Model Context Protocol) tools available
- All core products are open source (MIT/Apache 2.0)
- GitHub orgs: hanzoai (AI), hanzo-js (JavaScript SDKs), hanzo-apps (templates and starters)

Products:
- Hanzo Dev (@hanzo/dev): Terminal-based AI coding agent that writes, debugs, tests, and opens PRs
- Hanzo Auto: Workflow automation with AI agents (based on n8n-style visual flows)
- Hanzo Flow: Visual AI/LLM workflow builder for creating AI pipelines
- Hanzo API: OpenAI-compatible API gateway to 100+ AI models

Hanzo Network:
- Decentralized AI compute network
- Contribute GPU power and earn rewards
- Powers AI inference and training at scale
- Learn more at hanzo.network

Getting Started:
1. Install: curl -fsSL hanzo.sh/install.sh | sh
2. Login: hanzo login
3. Start coding: hanzo dev "Build a RAG chatbot"

Templates (launch instantly at hanzo.app):
- ai-chat: Full-featured AI chat application
- rag-starter: RAG application with vector search
- agent-toolkit: Multi-agent application starter
- api-template: AI API server with streaming
- saas-starter: Full SaaS with AI features

Links:
- Docs: docs.hanzo.ai
- GitHub: github.com/hanzoai
- Discord: discord.gg/hanzo
- Research: zenlm.org
- Network: hanzo.network
- Full Chat: hanzo.chat

Help users understand the platform, get started, find templates, and discover the right resources.`;

interface Message {
  role: "user" | "assistant";
  content: string;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "👋 Hi! I'm Hanzo AI. How can I help you today? I can answer questions about our platform, help you get started, or point you to the right resources.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (text: string = input) => {
    if (!text.trim()) return;

    const userMessage: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Call Hanzo AI API
      const response = await fetch("https://api.hanzo.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Use public key for widget - rate limited
          "Authorization": "Bearer hz_widget_public",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          messages: [
            { role: "system", content: HANZO_CONTEXT },
            ...messages.map((m) => ({ role: m.role, content: m.content })),
            { role: "user", content: text },
          ],
          max_tokens: 500,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const assistantMessage: Message = {
          role: "assistant",
          content: data.choices[0].message.content,
        };
        setMessages((prev) => [...prev, assistantMessage]);
      } else {
        // Fallback response
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "I'm having trouble connecting right now. You can visit [docs.hanzo.ai](https://docs.hanzo.ai) for documentation or join our [Discord](https://discord.gg/hanzo) for help!",
          },
        ]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I'm having trouble connecting. Please try again or visit [docs.hanzo.ai](https://docs.hanzo.ai).",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickAction = (value: string) => {
    handleSend(value);
  };

  return (
    <>
      {/* Chat toggle button */}
      <MotionBox
        onClick={() => setIsOpen(!isOpen)}
        flexDirection="row" position="fixed" bottom={24} right={24} zIndex={50} width={56} height={56} borderRadius="var(--radius-full)" display="flex" alignItems="center" justifyContent="center" boxShadow="0 10px 15px -3px rgb(0 0 0 / .35)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))"
        style={FILL}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <MotionBox
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
            >
              <X size={24} color="var(--foreground)" />
            </MotionBox>
          ) : (
            <MotionBox
              key="chat"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
            >
              <MessageSquare size={24} color="var(--foreground)" />
            </MotionBox>
          )}
        </AnimatePresence>
      </MotionBox>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <MotionBox
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            position="fixed" bottom={96} right={24} zIndex={50} width="380px" maxWidth="calc(100vw-3rem)" height="500px" maxHeight="calc(100vh-8rem)" borderRadius="var(--radius-2xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--neutral-950)" boxShadow="0 25px 50px -12px rgb(0 0 0 / .5)" display="flex" flexDirection="column" overflow="hidden"
          >
            {/* Header */}
            <XStack display="flex" alignItems="center" justifyContent="space-between" paddingHorizontal={16} paddingVertical={12} borderBottomWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--neutral-900)">
              <XStack display="flex" alignItems="center" gap={8}>
                <XStack width={32} height={32} borderRadius="var(--radius-lg)" display="flex" alignItems="center" justifyContent="center" style={FILL}>
                  <Bot size={16} color="var(--foreground)" />
                </XStack>
                <div>
                  <Box fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--foreground)">Hanzo AI</Box>
                  <Box fontSize="10px" color="var(--neutral-500)">Ask me anything</Box>
                </div>
              </XStack>
              <Anchor tap
                href="https://hanzo.chat"
                target="_blank"
                rel="noopener noreferrer"
                fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" display="flex" alignItems="center" gap={4} hoverStyle={{ color: "var(--foreground)" }}
              >
                Full chat
                <ExternalLink size={12} />
              </Anchor>
            </XStack>

            {/* Messages */}
            <Box flex={1} overflowY="auto" padding={16} rowGap={16}>
              {messages.map((message, idx) => (
                <XStack
                  key={idx}
                  display="flex" justifyContent={message.role === "user" ? "flex-end" : "flex-start"}
                >
                  <Box
                    maxWidth="85%" borderRadius="var(--radius-xl)" paddingHorizontal={12} paddingVertical={8} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" backgroundColor={message.role === "user" ? "var(--foreground)" : "var(--neutral-900)"} color={message.role === "user" ? "var(--foreground)" : "var(--neutral-300)"} borderWidth={message.role === "user" ? undefined : 1} borderColor={message.role === "user" ? undefined : "var(--neutral-800)"}
                  >
                    {message.content}
                  </Box>
                </XStack>
              ))}
              {isLoading && (
                <XStack display="flex" justifyContent="flex-start">
                  <Box backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-xl)" paddingHorizontal={16} paddingVertical={8}>
                    <XStack display="flex" gap={4}>
                      <MotionBox animate={{ y: [0, -25, 0] }} transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }} width={8} height={8} backgroundColor="var(--neutral-600)" borderRadius="var(--radius-full)" style={{ animationDelay: "0ms" }} />
                      <MotionBox animate={{ y: [0, -25, 0] }} transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }} width={8} height={8} backgroundColor="var(--neutral-600)" borderRadius="var(--radius-full)" style={{ animationDelay: "150ms" }} />
                      <MotionBox animate={{ y: [0, -25, 0] }} transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }} width={8} height={8} backgroundColor="var(--neutral-600)" borderRadius="var(--radius-full)" style={{ animationDelay: "300ms" }} />
                    </XStack>
                  </Box>
                </XStack>
              )}
            </Box>

            {/* Quick actions */}
            {messages.length <= 1 && (
              <Box paddingHorizontal={16} paddingBottom={8}>
                <XStack display="flex" flexWrap="wrap" gap={8}>
                  {quickActions.map((action) => (
                    <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44}
                      key={action.label}
                      onClick={() => handleQuickAction(action.value)}
                      render="button" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" paddingHorizontal={12} paddingVertical={6} borderRadius="var(--radius-full)" borderWidth={1} borderColor="var(--neutral-800)" color="var(--neutral-400)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-900)", color: "var(--foreground)" }}
                    >
                      {action.label}
                    </Box>
                  ))}
                </XStack>
              </Box>
            )}

            {/* Input */}
            <Box padding={16} borderTopWidth={1} borderColor="var(--neutral-800)">
              <XStack
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                render="form" display="flex" gap={8}
              >
                <Box display="inline-block" minHeight={44}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything..."
                  render="input" flex={1} backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" paddingHorizontal={12} paddingVertical={8} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" placeholderTextColor="var(--neutral-500)" focusStyle={{ outlineStyle: "none", borderColor: "var(--neutral-700)" }}
                  disabled={isLoading}
                />
                <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44}
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  render="button" padding={8} borderRadius="var(--radius-lg)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" disabledStyle={{ opacity: 0.5 }}
                  style={FILL}
                >
                  <Send size={16} color="var(--foreground)" />
                </Box>
              </XStack>
            </Box>
          </MotionBox>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
