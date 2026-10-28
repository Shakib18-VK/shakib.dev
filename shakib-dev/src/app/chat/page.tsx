'use client';

import React, { useState, useEffect, useRef, FC, ReactNode } from 'react';
import { 
  Send, 
  Bot, 
  User, 
  Trash2, 
  Settings, 
  Sparkles, 
  Copy, 
  Check, 
  Menu, 
  X, 
  RefreshCw, 
  MessageSquare, 
  Plus, 
  Zap,
  Terminal,
  Code,
  Briefcase,
  AlertCircle,
  LucideIcon
} from 'lucide-react';

// TypeScript Interfaces
interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  isError?: boolean;
}

interface ChatSession {
  id: string;
  title: string;
  date: string;
}

interface PromptSuggestion {
  icon: LucideIcon;
  text: string;
  tag: string;
}

// Safely retrieve environment variable or default fallback
const getEnvApiUrl = (): string => {
  if (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_CHAT_API_URL) {
    return process.env.NEXT_PUBLIC_CHAT_API_URL;
  }
  return 'https://shakib-dev-ai.onrender.com/chat';
};

const DEFAULT_API_URL = getEnvApiUrl();

// Suggested Quick Prompts
const QUICK_PROMPTS: PromptSuggestion[] = [
  { icon: Briefcase, text: "Why should I hire you?", tag: "Career" },
  { icon: Code, text: "What are your core skills and projects?", tag: "Skills" },
  { icon: Terminal, text: "Tell me about your AI Interview Assistant", tag: "Projects" },
  { icon: Zap, text: "How do you build AI Workflow Automation?", tag: "Architecture" },
];

export default function ChatPage() {
  // Chat Messages State
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-msg',
      sender: 'bot',
      text: "👋 Hi! I'm Shakib's AI Assistant. Ask me anything about skills, projects, experience, or why you should hire me!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  
  // UI & Input States
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [apiUrl, setApiUrl] = useState<string>(DEFAULT_API_URL);
  const [tempApiUrl, setTempApiUrl] = useState<string>(DEFAULT_API_URL);
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([
    { id: '1', title: 'Developer & AI Skills Summary', date: 'Today' }
  ]);
  const [activeSession, setActiveSession] = useState<string>('1');

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom on message updates
  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Dynamic textarea height adjustment for mobile & desktop
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [input]);

  // Handle POST Request to Backend API
  const handleSend = async (customMessage: string | null = null): Promise<void> => {
    const textToSend = customMessage || input;
    if (!textToSend.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: textToSend.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    if (!customMessage) setInput('');
    setIsLoading(true);

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: textToSend }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: { reply?: string } = await response.json();
      
      if (data && data.reply) {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: data.reply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, botMessage]);
      } else {
        throw new Error('Invalid JSON response format from AI backend.');
      }
    } catch (err: unknown) {
      console.error('API Request Error:', err);
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        isError: true,
        text: `⚠️ **Connection Failed**: Could not get response.\n\n*Note:* Free tier backends (Render) take ~30-50s to wake up on cold starts.\n\nClick retry below or update the endpoint in Settings.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleCopy = (text: string, id: string): void => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClearChat = (): void => {
    if (window.confirm("Are you sure you want to clear this chat?")) {
      setMessages([
        {
          id: Date.now().toString(),
          sender: 'bot',
          text: "Chat cleared! What would you like to ask next?",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }
  };

  const handleNewChat = (): void => {
    const newId = Date.now().toString();
    const newSession: ChatSession = { id: newId, title: 'New Conversation', date: 'Just now' };
    setChatSessions([newSession, ...chatSessions]);
    setActiveSession(newId);
    setMessages([
      {
        id: newId + '-msg',
        sender: 'bot',
        text: "Started a new conversation. How can I assist you?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    if (window.innerWidth < 768) setIsSidebarOpen(false);
  };

  // Markdown Formatter with TS support
  const renderFormattedMarkdown = (content: string): ReactNode[] | null => {
    if (!content) return null;

    const lines = content.split('\n');
    const elements: ReactNode[] = [];
    let listItems: string[] = [];

    const flushList = (keyPrefix: string | number): void => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`ul-${keyPrefix}`} className="list-disc list-inside space-y-1.5 my-2 text-slate-300 pl-1">
            {listItems.map((item, idx) => (
              <li key={idx} className="leading-relaxed">
                <span dangerouslySetInnerHTML={{ __html: parseInlineFormatting(item) }} />
              </li>
            ))}
          </ul>
        );
        listItems = [];
      }
    };

    const parseInlineFormatting = (text: string): string => {
      let formatted = text;
      formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-sky-300">$1</strong>');
      formatted = formatted.replace(/`(.*?)`/g, '<code class="bg-slate-800 text-pink-400 px-1.5 py-0.5 rounded text-xs font-mono border border-slate-700/60">$1</code>');
      formatted = formatted.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-sky-400 hover:underline">$1</a>');
      return formatted;
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      if (trimmed === '---' || trimmed === '***') {
        flushList(index);
        elements.push(<hr key={index} className="my-4 border-slate-700/70" />);
        return;
      }

      if (trimmed.startsWith('### ')) {
        flushList(index);
        elements.push(
          <h3 key={index} className="text-lg font-bold text-slate-100 mt-4 mb-2 flex items-center gap-2 border-b border-slate-700/50 pb-1">
            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
            <span dangerouslySetInnerHTML={{ __html: parseInlineFormatting(trimmed.substring(4)) }} />
          </h3>
        );
        return;
      }

      if (trimmed.startsWith('## ')) {
        flushList(index);
        elements.push(
          <h2 key={index} className="text-xl font-extrabold text-white mt-5 mb-2 tracking-tight">
            <span dangerouslySetInnerHTML={{ __html: parseInlineFormatting(trimmed.substring(3)) }} />
          </h2>
        );
        return;
      }

      if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
        listItems.push(trimmed.substring(2));
        return;
      }

      if (/^\d+\.\s/.test(trimmed)) {
        flushList(index);
        const match = trimmed.match(/^\d+\.\s(.*)/);
        if (match) {
          elements.push(
            <div key={index} className="flex gap-2 my-1.5 pl-1 text-slate-300">
              <span className="font-bold text-sky-400 min-w-[1.2rem]">
                {trimmed.match(/^\d+/)?.[0]}.
              </span>
              <span dangerouslySetInnerHTML={{ __html: parseInlineFormatting(match[1]) }} />
            </div>
          );
        }
        return;
      }

      flushList(index);
      if (trimmed === '') {
        elements.push(<div key={index} className="h-2"></div>);
      } else {
        elements.push(
          <p key={index} className="text-slate-200 leading-relaxed my-1">
            <span dangerouslySetInnerHTML={{ __html: parseInlineFormatting(line) }} />
          </p>
        );
      }
    });

    flushList('final');
    return elements;
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-950 text-slate-100 font-sans antialiased selection:bg-sky-500/30 selection:text-sky-200">
      
      {/* Mobile Drawer Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 md:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Responsive Sidebar */}
      <aside className={`
        fixed md:static inset-y-0 left-0 z-50
        w-72 bg-slate-900/90 backdrop-blur-xl border-r border-slate-800/80
        flex flex-col transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/20">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-bold text-sm tracking-wide text-white">Shakib's AI</h1>
              <p className="text-xs text-slate-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Next.js TS Engine
              </p>
            </div>
          </div>
          <button 
            onClick={() => setIsSidebarOpen(false)} 
            className="md:hidden p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-3">
          <button
            onClick={handleNewChat}
            className="w-full py-2.5 px-4 rounded-xl bg-sky-600/20 hover:bg-sky-600/30 text-sky-300 border border-sky-500/30 font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-sm active:scale-[0.98]"
          >
            <Plus className="w-4 h-4" />
            New Chat Session
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-2 space-y-1">
          <div className="px-3 py-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            History
          </div>
          {chatSessions.map(session => (
            <button
              key={session.id}
              onClick={() => setActiveSession(session.id)}
              className={`w-full text-left p-2.5 rounded-xl text-xs flex items-center gap-3 transition-colors ${
                activeSession === session.id 
                  ? 'bg-slate-800 text-sky-400 font-medium border border-slate-700/60 shadow-inner' 
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
              }`}
            >
              <MessageSquare className="w-4 h-4 shrink-0 text-slate-500" />
              <div className="truncate flex-1">
                <p className="truncate text-slate-200">{session.title}</p>
                <p className="text-[10px] text-slate-500">{session.date}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="p-3 border-t border-slate-800 bg-slate-900/50 space-y-1">
          <button
            onClick={() => setIsSettingsOpen(true)}
            className="w-full py-2 px-3 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800 flex items-center gap-2.5 transition-colors"
          >
            <Settings className="w-4 h-4" />
            API Config & Env Settings
          </button>
        </div>
      </aside>

      {/* Main Chat Interface */}
      <main className="flex-1 flex flex-col h-full min-w-0 bg-slate-950 relative">
        <header className="h-14 border-b border-slate-800/80 bg-slate-900/40 backdrop-blur-md px-4 flex items-center justify-between shrink-0 z-30">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/80 md:hidden"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping opacity-75"></span>
              <h2 className="font-semibold text-slate-200 text-sm md:text-base">AI Portfolio Assistant</h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleClearChat}
              title="Clear Conversation"
              className="p-2 text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsSettingsOpen(true)}
              title="Settings"
              className="p-2 text-slate-400 hover:text-sky-400 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Messages Feed */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
          <div className="max-w-3xl mx-auto space-y-6">
            
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 md:gap-4 ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.sender === 'bot' && (
                  <div className={`w-8 h-8 md:w-9 md:h-9 rounded-xl flex items-center justify-center shrink-0 shadow-md ${
                    msg.isError 
                      ? 'bg-rose-500/20 border border-rose-500/40 text-rose-400' 
                      : 'bg-gradient-to-tr from-sky-600 to-indigo-600 text-white shadow-sky-500/10'
                  }`}>
                    {msg.isError ? <AlertCircle className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                  </div>
                )}

                <div className={`group relative max-w-[85%] md:max-w-[80%] rounded-2xl p-4 shadow-sm ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-r from-sky-600 to-sky-700 text-white rounded-br-none'
                    : msg.isError
                    ? 'bg-rose-950/40 border border-rose-800/60 text-slate-200 rounded-bl-none'
                    : 'bg-slate-900/90 border border-slate-800 text-slate-100 rounded-bl-none shadow-md backdrop-blur-sm'
                }`}>
                  
                  <div className="flex items-center justify-between gap-4 mb-1.5 text-[11px] font-medium opacity-70">
                    <span>{msg.sender === 'user' ? 'You' : 'Shakib AI Assistant'}</span>
                    <span>{msg.timestamp}</span>
                  </div>

                  <div className="text-sm md:text-base leading-relaxed break-words">
                    {msg.sender === 'bot' ? (
                      renderFormattedMarkdown(msg.text)
                    ) : (
                      <p className="whitespace-pre-wrap">{msg.text}</p>
                    )}
                  </div>

                  {msg.sender === 'bot' && (
                    <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                      <button
                        onClick={() => handleCopy(msg.text, msg.id)}
                        className="flex items-center gap-1.5 hover:text-sky-300 py-1 px-2 rounded hover:bg-slate-800/60 transition-colors"
                      >
                        {copiedId === msg.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400 text-[11px]">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span className="text-[11px]">Copy response</span>
                          </>
                        )}
                      </button>

                      {msg.isError && (
                        <button
                          onClick={() => handleSend(messages[messages.length - 2]?.text)}
                          className="flex items-center gap-1 text-rose-400 hover:text-rose-300 font-medium py-1 px-2 rounded bg-rose-500/10 hover:bg-rose-500/20 transition-colors text-[11px]"
                        >
                          <RefreshCw className="w-3.5 h-3.5" />
                          Retry
                        </button>
                      )}
                    </div>
                  )}
                </div>

                {msg.sender === 'user' && (
                  <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 text-sky-400 shadow-md">
                    <User className="w-5 h-5" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3 md:gap-4 items-start">
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-2xl rounded-bl-none p-4 text-slate-300 flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-bounce"></span>
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">Fetching response...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Quick Prompts */}
        {messages.length <= 2 && !isLoading && (
          <div className="px-4 py-2 max-w-3xl mx-auto w-full">
            <p className="text-[11px] font-semibold text-slate-500 mb-2 flex items-center gap-1.5 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              Suggested Questions
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {QUICK_PROMPTS.map((prompt, idx) => {
                const IconComponent = prompt.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSend(prompt.text)}
                    className="p-3 text-left rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800/80 hover:border-slate-700 transition-all text-xs text-slate-300 flex items-start gap-2.5 group"
                  >
                    <div className="p-1.5 rounded-lg bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="font-medium text-slate-200 block truncate">{prompt.text}</span>
                      <span className="text-[10px] text-slate-500">{prompt.tag}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Bottom Input Area */}
        <div className="p-3 md:p-4 border-t border-slate-800/80 bg-slate-900/60 backdrop-blur-xl">
          <div className="max-w-3xl mx-auto relative">
            <div className="relative flex items-end rounded-2xl bg-slate-950 border border-slate-800 focus-within:border-sky-500/70 focus-within:ring-2 focus-within:ring-sky-500/20 transition-all shadow-xl">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                rows={1}
                className="w-full bg-transparent text-slate-100 placeholder-slate-500 py-3.5 pl-4 pr-12 focus:outline-none resize-none max-h-32 text-sm leading-relaxed"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || isLoading}
                className={`absolute right-2 bottom-2 p-2.5 rounded-xl transition-all ${
                  input.trim() && !isLoading
                    ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/20 hover:scale-105 active:scale-95'
                    : 'bg-slate-800 text-slate-600 cursor-not-allowed'
                }`}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Settings Modal */}
      {isSettingsOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-md p-6 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Settings className="w-5 h-5 text-sky-400" />
                API Configuration
              </h3>
              <button 
                onClick={() => setIsSettingsOpen(false)}
                className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 block">
                Backend Endpoint URL
              </label>
              <input
                type="text"
                value={tempApiUrl}
                onChange={(e) => setTempApiUrl(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-sky-500 font-mono"
              />
              <p className="text-[11px] text-slate-500">
                Loaded via <span className="font-mono text-slate-400">NEXT_PUBLIC_CHAT_API_URL</span>
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => {
                  setTempApiUrl(DEFAULT_API_URL);
                  setApiUrl(DEFAULT_API_URL);
                  setIsSettingsOpen(false);
                }}
                className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-slate-200"
              >
                Reset Default
              </button>
              <button
                onClick={() => {
                  setApiUrl(tempApiUrl);
                  setIsSettingsOpen(false);
                }}
                className="px-4 py-2 text-xs font-medium bg-sky-600 hover:bg-sky-500 text-white rounded-xl shadow-lg"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}