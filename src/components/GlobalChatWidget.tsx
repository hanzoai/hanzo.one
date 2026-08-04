import { Anchor, Box, MotionBox, MotionText, Text, XStack } from '@/gui'
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  X,
  Send,
  Code,
  BookOpen,
  Search,
  PenLine,
  Minimize2,
  Maximize2,
  ChevronDown,
  Check,
} from "lucide-react";

// Hanzo is monochrome: the widget's accent is the foreground, not a hue.
const BRAND_COLOR = "var(--foreground)";

// Available Zen models for the dropdown
const zenModels = [
  { id: "zen-eco-4b", name: "Zen Eco", params: "4B", description: "Fast general-purpose" },
  { id: "zen-omni-8b", name: "Zen Omni", params: "8B", description: "Multimodal vision + audio" },
  { id: "zen-coder-flash", name: "Zen Coder Flash", params: "31B MoE", description: "Code generation" },
  { id: "zen-coder-plus", name: "Zen Coder Plus", params: "72B", description: "Advanced coding" },
];

// Chat action presets - matching footer order
const chatPresets = [
  { icon: PenLine, label: "Write", prompt: "Help me write " },
  { icon: BookOpen, label: "Learn", prompt: "Explain how " },
  { icon: Code, label: "Code", prompt: "Help me write code for " },
  { icon: Search, label: "Search", prompt: "Find information about " },
];

// Page context mapping for better AI responses
const getPageContext = (pathname: string): string => {
  const contexts: Record<string, string> = {
    "/": "Hanzo homepage - AI platform overview",
    "/dev": "Hanzo Dev - Multi-agent coding workspace with parallel agents, dialable autonomy, and evidence-driven output",
    "/cloud": "Hanzo Cloud - Complete cloud platform with 90+ managed services",
    "/platform": "Hanzo Platform - Open source backend-as-a-service",
    "/ai": "Hanzo AI - Foundation models and AI capabilities",
    "/products": "Hanzo Products catalog",
    "/pricing": "Hanzo Pricing plans and options",
    "/blockchain": "Hanzo Web3 - Blockchain infrastructure services",
    "/operative": "Hanzo Operative - AI agents and automation",
    "/base": "Hanzo Base - Backend-as-a-service",
    "/functions": "Hanzo Functions - Serverless compute",
    "/datastore": "Hanzo Datastore - Managed databases",
    "/vector": "Hanzo Vector - Vector database for AI",
    "/analytics": "Hanzo Analytics - Observability and telemetry",
    "/realtime": "Hanzo Realtime - WebSocket and live sync",
    "/identity": "Hanzo Identity - Authentication and authorization",
    "/edge": "Hanzo Edge - Edge computing infrastructure",
    "/enterprise": "Hanzo Enterprise - Enterprise solutions",
    "/contact": "Hanzo Contact - Get in touch",
    "/team": "Hanzo Team - Meet the team",
    "/security": "Hanzo Security - Security practices and compliance",
    "/zen": "Zen AI Models - Open source AI model family",
    "/philosophy": "Zen of Hanzo - Our engineering principles",
    "/solutions": "Hanzo Solutions - Use cases and industries",
  };

  // Check for partial matches
  for (const [path, context] of Object.entries(contexts)) {
    if (pathname.startsWith(path) && path !== "/") {
      return context;
    }
  }

  return contexts[pathname] || `Hanzo AI page: ${pathname}`;
};

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const GlobalChatWidget = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState(zenModels[0]);
  const [isModelDropdownOpen, setIsModelDropdownOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const modelDropdownRef = useRef<HTMLDivElement>(null);

  const pageContext = getPageContext(location.pathname);

  // Close model dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modelDropdownRef.current && !modelDropdownRef.current.contains(event.target as Node)) {
        setIsModelDropdownOpen(false);
      }
    };

    if (isModelDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isModelDropdownOpen]);

  // Listen for events from footer chat widget
  useEffect(() => {
    const handleOpenChat = (event: CustomEvent) => {
      setIsOpen(true);

      // If there's a message from footer, set it as input
      if (event.detail?.message) {
        setInput(event.detail.message);
        // Optionally auto-submit
        setTimeout(() => {
          inputRef.current?.focus();
        }, 100);
      }

      // If there's an action (Write, Learn, Code), set the appropriate prompt
      if (event.detail?.action) {
        const preset = chatPresets.find(p => p.label === event.detail.action);
        if (preset) {
          setInput(preset.prompt);
          setTimeout(() => inputRef.current?.focus(), 100);
        }
      }
    };

    window.addEventListener('openGlobalChat', handleOpenChat as EventListener);
    return () => window.removeEventListener('openGlobalChat', handleOpenChat as EventListener);
  }, []);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Add welcome message when first opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          role: "assistant",
          content: `Hi! I'm here to help you with anything related to Hanzo. You're currently viewing ${pageContext}. How can I assist you today?`,
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen, pageContext]);

  const handleSend = useCallback(async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Call Hanzo AI API with selected Zen model
      const response = await fetch("https://api.hanzo.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer hz_widget_public",
        },
        body: JSON.stringify({
          model: selectedModel.id,
          messages: [
            {
              role: "system",
              content: `You are Zen AI, powered by the ${selectedModel.name} model (${selectedModel.params}). You're helping users on the Hanzo AI website. Current page context: ${pageContext}. Be helpful, concise, and knowledgeable about Hanzo's products, Zen AI models, and AI development tools. For technical questions, provide accurate information. For pricing or sales, direct users to /pricing or /contact.`,
            },
            ...messages.slice(-10).map((m) => ({ role: m.role, content: m.content })),
            { role: "user", content: input.trim() },
          ],
          max_tokens: 800,
          temperature: 0.7,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: data.choices[0].message.content,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, assistantMessage]);
      } else {
        // Fallback for API errors
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: `I'm having trouble connecting to the AI service right now. You can explore our documentation at [docs.hanzo.ai](https://docs.hanzo.ai), try the full chat at [hanzo.chat](https://hanzo.chat), or contact our team at [/contact](/contact).`,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, assistantMessage]);
      }
    } catch (error) {
      // Fallback for network errors
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `I'm experiencing connectivity issues. Please try [hanzo.chat](https://hanzo.chat) for the full AI experience, or visit [docs.hanzo.ai](https://docs.hanzo.ai) for documentation.`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, pageContext, messages, selectedModel]);

  const handlePreset = (preset: typeof chatPresets[0]) => {
    setInput(preset.prompt);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating chat button */}
      <AnimatePresence>
        {!isOpen && (
          <MotionBox
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            flexDirection="row" position="fixed" bottom="calc(24px + var(--safe-bottom))" right="calc(24px + var(--safe-right))" zIndex={50} width={56} height={56} borderRadius="var(--radius-full)" boxShadow="0 10px 15px -3px rgb(0 0 0 / .35)" display="flex" alignItems="center" justifyContent="center" backgroundColor="var(--pure-black)" borderWidth={1} borderColor="var(--neutral-800)"
          >
            <Box display="inline-block" src="/zen-logo.png" alt="Zen AI" render="img" width={32} height={32} />
            {/* Pulse animation */}
            <MotionText render="span" animate={{ scale: [1, 2], opacity: [0.75, 0] }} transition={{ duration: 1, repeat: Infinity, ease: "easeOut" }} position="absolute" top={0} right={0} bottom={0} left={0} borderRadius="var(--radius-full)" opacity={0.2} backgroundColor={BRAND_COLOR} />
          </MotionBox>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <MotionBox
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            position="fixed" zIndex={50} backgroundColor="var(--pure-black)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-2xl)" boxShadow="0 25px 50px -12px rgb(0 0 0 / .5)" overflow="hidden" display="flex" flexDirection="column" top={isExpanded ? "calc(16px + var(--safe-top))" : undefined} right={isExpanded ? "calc(16px + var(--safe-right))" : "calc(24px + var(--safe-right))"} bottom={isExpanded ? "calc(16px + var(--safe-bottom))" : "calc(24px + var(--safe-bottom))"} left={isExpanded ? "calc(16px + var(--safe-left))" : undefined} width={isExpanded ? undefined : "380px"} maxWidth={isExpanded ? undefined : "calc(100vw-48px)"} height={isExpanded ? undefined : "520px"} maxHeight={isExpanded ? undefined : "80vh"} $md={isExpanded ? { top: "calc(32px + var(--safe-top))", right: "calc(32px + var(--safe-right))", bottom: "calc(32px + var(--safe-bottom))", left: "calc(32px + var(--safe-left))" } : undefined}
          >
            {/* Header */}
            <XStack display="flex" alignItems="center" justifyContent="space-between" paddingHorizontal={16} paddingVertical={12} borderBottomWidth={1} borderColor="var(--neutral-800)">
              <XStack display="flex" alignItems="center" gap={12}>
                <XStack width={32} height={32} borderRadius="var(--radius-full)" display="flex" alignItems="center" justifyContent="center" backgroundColor="var(--pure-black)" borderWidth={1} borderColor="var(--neutral-700)">
                  <Box display="inline-block" src="/zen-logo.png" alt="Zen AI" render="img" width={20} height={20} />
                </XStack>
                {/* Model selector dropdown */}
                <Box position="relative" ref={modelDropdownRef}>
                  <XStack minHeight={44}
                    onClick={() => setIsModelDropdownOpen(!isModelDropdownOpen)}
                    render="button" display="flex" alignItems="center" gap={6} borderRadius="var(--radius-md)" paddingHorizontal={8} paddingVertical={4} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--surface-card)" }}
                  >
                    <Box textAlign="left">
                      <XStack color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" display="flex" alignItems="center" gap={6}>
                        {selectedModel.name}
                        <Text fontSize="10px" fontFamily="var(--font-mono)" color="var(--neutral-500)" backgroundColor="var(--neutral-800)" paddingHorizontal={4} paddingVertical={2} borderRadius="var(--radius)">
                          {selectedModel.params}
                        </Text>
                      </XStack>
                    </Box>
                    <ChevronDown size={14} color="var(--neutral-500)" />
                  </XStack>

                  {/* Model dropdown menu */}
                  <AnimatePresence>
                    {isModelDropdownOpen && (
                      <MotionBox
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        position="absolute" left={0} top="100%" marginTop={4} width={224} backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-lg)" boxShadow="0 20px 25px -5px rgb(0 0 0 / .4)" overflow="hidden" zIndex={10}
                      >
                        {zenModels.map((model) => (
                          <XStack minHeight={44}
                            key={model.id}
                            onClick={() => {
                              setSelectedModel(model);
                              setIsModelDropdownOpen(false);
                            }}
                            render="button" width="100%" display="flex" alignItems="center" justifyContent="space-between" paddingHorizontal={12} paddingVertical={8} textAlign="left" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-800)" }} backgroundColor={selectedModel.id === model.id ? "rgb(255 255 255 / 0.5)" : undefined}
                          >
                            <div>
                              <XStack fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" display="flex" alignItems="center" gap={8}>
                                {model.name}
                                <Text fontSize="10px" fontFamily="var(--font-mono)" color="var(--neutral-500)">{model.params}</Text>
                              </XStack>
                              <Box fontSize="10px" color="var(--neutral-500)">{model.description}</Box>
                            </div>
                            {selectedModel.id === model.id && (
                              <Check size={16} color="var(--neutral-500)" />
                            )}
                          </XStack>
                        ))}
                        <Box borderTopWidth={1} borderColor="var(--neutral-800)" paddingHorizontal={12} paddingVertical={8}>
                          <Anchor tap
                            href="/zen"
                            fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)" }}
                          >
                            View all models →
                          </Anchor>
                        </Box>
                      </MotionBox>
                    )}
                  </AnimatePresence>
                </Box>
              </XStack>
              <XStack display="flex" alignItems="center" gap={4}>
                <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44}
                  onClick={() => setIsExpanded(!isExpanded)}
                  render="button" padding={6} borderRadius="var(--radius-md)" color="var(--neutral-500)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)", backgroundColor: "var(--neutral-800)" }}
                >
                  {isExpanded ? (
                    <Minimize2 size={16} />
                  ) : (
                    <Maximize2 size={16} />
                  )}
                </Box>
                <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44}
                  onClick={() => setIsOpen(false)}
                  render="button" padding={6} borderRadius="var(--radius-md)" color="var(--neutral-500)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--foreground)", backgroundColor: "var(--neutral-800)" }}
                >
                  <X size={16} />
                </Box>
              </XStack>
            </XStack>

            {/* Messages */}
            <Box flex={1} overflowY="auto" padding={16} rowGap={16}>
              {messages.map((message) => (
                <XStack
                  key={message.id}
                  display="flex" justifyContent={message.role === "user" ? "flex-end" : "flex-start"}
                >
                  <Box
                    maxWidth="85%" paddingHorizontal={12} paddingVertical={8} borderRadius="var(--radius-2xl)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" backgroundColor={message.role === "user" ? "var(--foreground)" : "var(--neutral-800)"} color={message.role === "user" ? "var(--foreground)" : "var(--neutral-200)"} borderBottomRightRadius={message.role === "user" ? "var(--radius-md)" : undefined} borderBottomLeftRadius={message.role === "user" ? undefined : "var(--radius-md)"}
                  >
                    {message.content}
                  </Box>
                </XStack>
              ))}
              {isLoading && (
                <XStack display="flex" justifyContent="flex-start">
                  <Box backgroundColor="var(--neutral-800)" paddingHorizontal={16} paddingVertical={8} borderRadius="var(--radius-2xl)" borderBottomLeftRadius="var(--radius-md)">
                    <XStack display="flex" gap={4}>
                      <MotionText render="span" animate={{ y: [0, -25, 0] }} transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }} width={8} height={8} backgroundColor="var(--neutral-500)" borderRadius="var(--radius-full)" style={{ animationDelay: "0ms" }} />
                      <MotionText render="span" animate={{ y: [0, -25, 0] }} transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }} width={8} height={8} backgroundColor="var(--neutral-500)" borderRadius="var(--radius-full)" style={{ animationDelay: "150ms" }} />
                      <MotionText render="span" animate={{ y: [0, -25, 0] }} transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }} width={8} height={8} backgroundColor="var(--neutral-500)" borderRadius="var(--radius-full)" style={{ animationDelay: "300ms" }} />
                    </XStack>
                  </Box>
                </XStack>
              )}
              <div ref={messagesEndRef} />
            </Box>

            {/* Preset buttons */}
            {messages.length <= 1 && (
              <Box paddingHorizontal={16} paddingBottom={8}>
                <XStack display="flex" flexWrap="wrap" gap={8}>
                  {chatPresets.map((preset) => {
                    const Icon = preset.icon;
                    return (
                      <XStack minHeight={44}
                        key={preset.label}
                        onClick={() => handlePreset(preset)}
                        render="button" display="inline-flex" alignItems="center" gap={6} paddingHorizontal={12} paddingVertical={6} borderRadius="var(--radius-md)" backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)" color="var(--neutral-400)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-800)", color: "var(--foreground)" }}
                      >
                        <Icon width={12} height={12} />
                        {preset.label}
                      </XStack>
                    );
                  })}
                </XStack>
              </Box>
            )}

            {/* Input */}
            <Box padding={12} borderTopWidth={1} borderColor="var(--neutral-800)">
              <Box position="relative">
                <Box display="inline-block" minHeight={44}
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask anything..."
                  render="input" width="100%" backgroundColor="var(--neutral-900)" borderWidth={1} borderColor="var(--neutral-800)" borderRadius="var(--radius-full)" paddingHorizontal={16} paddingVertical={10} paddingRight={48} fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--foreground)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" focusStyle={{ outlineStyle: "none", borderColor: "var(--neutral-700)" }}
                />
                <XStack
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  render="button" position="absolute" right={6} top="50%" y="-50%" width={32} height={32} borderRadius="var(--radius-full)" display="flex" alignItems="center" justifyContent="center" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" disabledStyle={{ opacity: 0.5 }}
                  backgroundColor={input.trim() ? BRAND_COLOR : "transparent"}
                >
                  <Send size={16} />
                </XStack>
              </Box>
              <Box marginTop={8} textAlign="center">
                <Text color="var(--neutral-600)" fontSize="10px">
                  Press Enter to send • <Text paddingHorizontal={4} paddingVertical={2} backgroundColor="var(--neutral-800)" borderRadius="var(--radius)" color="var(--neutral-500)">⌘K</Text> for quick navigation
                </Text>
              </Box>
            </Box>
          </MotionBox>
        )}
      </AnimatePresence>
    </>
  );
};

export default GlobalChatWidget;
