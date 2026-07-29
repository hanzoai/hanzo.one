import { Box, Text, XStack } from '@/gui'
import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

// Simple token-based syntax highlighting
const highlightCode = (code: string, language: string): React.ReactNode[] => {
  const lines = code.split('\n');

  return lines.map((line, lineIdx) => {
    const tokens: React.ReactNode[] = [];
    let remaining = line;
    let key = 0;

    // Language-specific patterns
    const patterns: { regex: RegExp; tone: Record<string, string> }[] = [];

    if (language === 'typescript' || language === 'javascript') {
      patterns.push(
        { regex: /^(import|export|from|const|let|var|function|async|await|return|new|if|else|for|while|class|extends|implements|interface|type)\b/, tone: { color: 'var(--foreground)', fontWeight: '600' } },
        { regex: /^(true|false|null|undefined)\b/, tone: { color: 'var(--neutral-300)' } },
        { regex: /^"[^"]*"|^'[^']*'|^`[^`]*`/, tone: { color: 'var(--neutral-300)' } },
        { regex: /^\d+\.?\d*/, tone: { color: 'var(--neutral-300)' } },
        { regex: /^\/\/.*$/, tone: { color: 'var(--neutral-500)', fontStyle: 'italic' } },
        { regex: /^(process|console|window|document)\b/, tone: { color: 'var(--neutral-200)' } },
        { regex: /^\.[a-zA-Z_]\w*/, tone: { color: 'var(--neutral-200)' } },
        { regex: /^[A-Z][a-zA-Z0-9]*/, tone: { color: 'var(--foreground)' } },
        { regex: /^(env|HANZO_API_KEY)\b/, tone: { color: 'var(--neutral-200)' } },
      );
    } else if (language === 'python') {
      patterns.push(
        { regex: /^(import|from|as|def|class|return|if|elif|else|for|while|with|async|await|try|except|finally|raise|pass|break|continue|and|or|not|in|is)\b/, tone: { color: 'var(--foreground)', fontWeight: '600' } },
        { regex: /^(True|False|None)\b/, tone: { color: 'var(--neutral-300)' } },
        { regex: /^"[^"]*"|^'[^']*'|^"""[\s\S]*?"""|^'''[\s\S]*?'''/, tone: { color: 'var(--neutral-300)' } },
        { regex: /^f"[^"]*"|^f'[^']*'/, tone: { color: 'var(--neutral-300)' } },
        { regex: /^\d+\.?\d*/, tone: { color: 'var(--neutral-300)' } },
        { regex: /^#.*$/, tone: { color: 'var(--neutral-500)', fontStyle: 'italic' } },
        { regex: /^(os|sys|print|open|len|range|str|int|float|list|dict|set)\b/, tone: { color: 'var(--neutral-200)' } },
        { regex: /^[A-Z][a-zA-Z0-9]*/, tone: { color: 'var(--foreground)' } },
      );
    } else if (language === 'go') {
      patterns.push(
        { regex: /^(package|import|func|return|if|else|for|range|switch|case|default|type|struct|interface|var|const|map|chan|go|defer|select)\b/, tone: { color: 'var(--foreground)', fontWeight: '600' } },
        { regex: /^(true|false|nil)\b/, tone: { color: 'var(--neutral-300)' } },
        { regex: /^"[^"]*"|^`[^`]*`/, tone: { color: 'var(--neutral-300)' } },
        { regex: /^\d+\.?\d*/, tone: { color: 'var(--neutral-300)' } },
        { regex: /^\/\/.*$/, tone: { color: 'var(--neutral-500)', fontStyle: 'italic' } },
        { regex: /^(fmt|os|context|http|json|string|int|error|bool)\b/, tone: { color: 'var(--neutral-200)' } },
        { regex: /^[A-Z][a-zA-Z0-9]*/, tone: { color: 'var(--foreground)' } },
      );
    } else if (language === 'bash' || language === 'shell') {
      patterns.push(
        { regex: /^\$\s*/, tone: { color: 'var(--neutral-500)' } },
        { regex: /^(curl|sh|npm|npx|pip|go|cargo|hanzo|dev)\b/, tone: { color: 'var(--foreground)', fontWeight: '600' } },
        { regex: /^"[^"]*"|^'[^']*'/, tone: { color: 'var(--neutral-300)' } },
        { regex: /^#.*$/, tone: { color: 'var(--neutral-500)', fontStyle: 'italic' } },
        { regex: /^-[a-zA-Z]+/, tone: { color: 'var(--neutral-200)' } },
        { regex: /^https?:\/\/[^\s]+/, tone: { color: 'var(--neutral-200)' } },
      );
    } else if (language === 'rust') {
      patterns.push(
        { regex: /^(use|mod|fn|let|mut|const|pub|impl|struct|enum|trait|where|async|await|return|if|else|for|while|loop|match|self|Self|crate|super)\b/, tone: { color: 'var(--foreground)', fontWeight: '600' } },
        { regex: /^(true|false|None|Some|Ok|Err)\b/, tone: { color: 'var(--neutral-300)' } },
        { regex: /^"[^"]*"/, tone: { color: 'var(--neutral-300)' } },
        { regex: /^\d+\.?\d*/, tone: { color: 'var(--neutral-300)' } },
        { regex: /^\/\/.*$/, tone: { color: 'var(--neutral-500)', fontStyle: 'italic' } },
        { regex: /^(String|Vec|Option|Result|Box|Rc|Arc|i32|i64|u32|u64|f32|f64|bool|str)\b/, tone: { color: 'var(--neutral-200)' } },
        { regex: /^[A-Z][a-zA-Z0-9]*/, tone: { color: 'var(--foreground)' } },
      );
    }

    while (remaining.length > 0) {
      let matched = false;

      // Try each pattern
      for (const { regex, tone } of patterns) {
        const match = remaining.match(regex);
        if (match && match.index === 0) {
          tokens.push(
            <Text key={key++} {...tone}>
              {match[0]}
            </Text>
          );
          remaining = remaining.slice(match[0].length);
          matched = true;
          break;
        }
      }

      // If no pattern matched, take one character as plain text
      if (!matched) {
        // Group consecutive plain characters
        let plainEnd = 1;
        while (plainEnd < remaining.length) {
          let wouldMatch = false;
          for (const { regex } of patterns) {
            if (remaining.slice(plainEnd).match(regex)?.index === 0) {
              wouldMatch = true;
              break;
            }
          }
          if (wouldMatch) break;
          plainEnd++;
        }
        tokens.push(
          <Text key={key++} color="var(--neutral-300)">
            {remaining.slice(0, plainEnd)}
          </Text>
        );
        remaining = remaining.slice(plainEnd);
      }
    }

    return (
      <Box key={lineIdx} lineHeight="var(--leading-relaxed)">
        {tokens.length > 0 ? tokens : <Text>&nbsp;</Text>}
      </Box>
    );
  });
};

interface CodeBlockProps {
  code: string;
  language: string;
  showLineNumbers?: boolean;
  [prop: string]: unknown;
}

export const CodeBlock = ({ code, language, showLineNumbers = false, ...styleProps }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlightedCode = highlightCode(code.trim(), language);

  return (
    <Box {...styleProps} position="relative" borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--neutral-950)" overflow="hidden">
      {/* Header */}
      <XStack display="flex" alignItems="center" justifyContent="space-between" paddingHorizontal={16} paddingVertical={8} borderBottomWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)">
        <Text fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" fontFamily="var(--font-mono)">{language}</Text>
        <Box
          onClick={handleCopy}
          render="button" padding={6} borderRadius="var(--radius)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
          title="Copy code"
        >
          {copied ? (
            <Check size={14} color="var(--neutral-500)" />
          ) : (
            <Copy size={14} color="var(--neutral-500)" />
          )}
        </Box>
      </XStack>

      {/* Code content */}
      <Box padding={16} overflowX="auto">
        <Box render="pre" fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
          {showLineNumbers ? (
            <XStack display="flex">
              <Box paddingRight={16} userSelect="none" color="var(--neutral-600)" textAlign="right">
                {highlightedCode.map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </Box>
              <div>{highlightedCode}</div>
            </XStack>
          ) : (
            highlightedCode
          )}
        </Box>
      </Box>
    </Box>
  );
};

// Language tab selector component
interface LanguageTab {
  language: string;
  label: string;
  code: string;
}

interface CodeTabsProps {
  tabs: LanguageTab[];
  
}

export const CodeTabs = ({ tabs, ...styleProps }: CodeTabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box {...styleProps} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--neutral-950)" overflow="hidden">
      {/* Tab headers */}
      <XStack display="flex" alignItems="center" borderBottomWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)" overflowX="auto">
        {tabs.map((tab, idx) => (
          <Box
            key={tab.language}
            onClick={() => setActiveTab(idx)}
            render="button" paddingHorizontal={16} paddingVertical={10} fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" fontWeight="500" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" whiteSpace="nowrap" color={activeTab === idx ? "var(--foreground)" : "var(--neutral-500)"} backgroundColor={activeTab === idx ? "var(--neutral-800)" : undefined} borderBottomWidth={activeTab === idx ? 2 : undefined} borderColor={activeTab === idx ? "var(--foreground)" : undefined} hoverStyle={activeTab === idx ? undefined : { color: "var(--neutral-300)" }}
          >
            {tab.label}
          </Box>
        ))}
      </XStack>

      {/* Code content */}
      <Box padding={16} overflowX="auto">
        <Box render="pre" fontFamily="var(--font-mono)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)">
          {highlightCode(tabs[activeTab].code.trim(), tabs[activeTab].language)}
        </Box>
      </Box>
    </Box>
  );
};

export default CodeBlock;
