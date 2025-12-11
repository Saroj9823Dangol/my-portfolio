"use client"

import type React from "react"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Minus, Maximize2 } from "lucide-react"
import type { PlanetId } from "@/app/page"

interface TerminalProps {
  isOpen: boolean
  onToggle: () => void
  onNavigate: (target: string) => boolean
  activePlanet: PlanetId
}

interface TerminalLine {
  type: "input" | "output" | "error" | "success" | "ascii"
  content: string
}

const ASCII_WELCOME = `
╔══════════════════════════════════════════════════════════════╗
║   _____ ____  _        _    ____    ______   ______ _____ ___   ___║
║  / ___// __ \\| |      / \\  |  _ \\  / ___\\ \\ / / ___|_   _|  ___| \\/ /║
║  \\___ \\| |  | | |     / _ \\ | |_) | \\___ \\\\ V /\\___ \\ | | |  _|| |\\/| |║
║   ___) | |__| | |___ / ___ \\|  _ <   ___) || |  ___) || | | |__| |  | |║
║  |____/ \\____/|_____/_/   \\_\\_| \\_\\ |____/ |_| |____/ |_| |____|_|  |_|║
║                                                                        ║
║  Welcome to the Solar System Portfolio Terminal v1.0                  ║
║  Type 'help' for available commands                                   ║
╚══════════════════════════════════════════════════════════════╝
`

const HELP_TEXT = `
Available Commands:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  help              Show this help message
  whoami            About the developer
  ls                List all sections
  goto <planet>     Navigate to a planet
  list projects     Show all projects
  show skills       Display skills
  contact           Open contact form
  clear             Clear terminal
  sudo hire-me      Easter egg!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`

const WHOAMI_TEXT = `
╔═══════════════════════════════════════╗
║   SYSTEM ADMINISTRATOR: SAROJ DANGOL  ║
║   ROLE: FULLSTACK DEVELOPER           ║
║   LOCATION: SOLAR SYSTEM ALPHA-7      ║
║   STATUS: AVAILABLE FOR HIRE          ║
╚═══════════════════════════════════════╝
`

const LS_TEXT = `
📁 about/          🌍 Earth-like planet
📁 projects/       🔴 Mars colony
📁 skills/         🪐 Saturn rings
📁 experience/     💼 Jupiter station
📁 contact/        📧 Neptune outpost
📁 blog/           🛸 Satellite feed
`

const PROJECTS_TEXT = `
┌─────────────────────────────────────┐
│ 1. E-Commerce Platform    [React]   │
│ 2. AI Chat Bot           [Python]  │
│ 3. Portfolio Site        [Next.js] │
│ 4. Mobile App            [Flutter] │
└─────────────────────────────────────┘
`

const SKILLS_TEXT = `
┌─────────────────────────────────────────┐
│ Frontend: React, Next.js, TypeScript    │
│ Backend: Node.js, Python, Go            │
│ Database: PostgreSQL, MongoDB, Redis    │
│ Cloud: AWS, Vercel, Docker              │
│ Tools: Git, Figma, VS Code              │
└─────────────────────────────────────────┘
`

const HIRE_TEXT = `
🎉 INITIATING HIRE SEQUENCE...
💼 Preparing contract...
📧 Sending resume to employers...
🚀 You're hired! (Just kidding, but let's talk!)
`

export function Terminal({ isOpen, onToggle, onNavigate, activePlanet }: TerminalProps) {
  const [lines, setLines] = useState<TerminalLine[]>([{ type: "ascii", content: ASCII_WELCOME }])
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [isMinimized, setIsMinimized] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Keyboard shortcut to toggle terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "`" && !e.ctrlKey && !e.metaKey) {
        e.preventDefault()
        onToggle()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onToggle])

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [lines])

  // Focus input when terminal opens
  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen, isMinimized])

  const addLine = useCallback((type: TerminalLine["type"], content: string) => {
    setLines((prev) => [...prev, { type, content }])
  }, [])

  const processCommand = useCallback(
    (cmd: string) => {
      const trimmed = cmd.trim().toLowerCase()
      const parts = trimmed.split(" ")
      const command = parts[0]
      const args = parts.slice(1).join(" ")

      addLine("input", `$ ${cmd}`)

      switch (command) {
        case "help":
          addLine("output", HELP_TEXT)
          break

        case "whoami":
          addLine("ascii", WHOAMI_TEXT)
          break

        case "ls":
        case "dir":
          addLine("output", LS_TEXT)
          break

        case "goto":
        case "cd":
          if (args) {
            const success = onNavigate(args)
            if (success) {
              addLine("success", `🚀 Launching trajectory to ${args}...`)
              addLine("output", `⠋ Calculating orbital path... Done!`)
              addLine("success", `✓ Arrived at ${args.charAt(0).toUpperCase() + args.slice(1)} Planet`)
            } else {
              addLine("error", `Error: Planet '${args}' not found in solar system`)
            }
          } else {
            addLine("error", "Usage: goto <planet>")
          }
          break

        case "list":
          if (args === "projects") {
            addLine("output", PROJECTS_TEXT)
          } else {
            addLine("error", `Unknown list type: ${args}`)
          }
          break

        case "show":
          if (args === "skills") {
            addLine("output", SKILLS_TEXT)
          } else {
            addLine("error", `Unknown show type: ${args}`)
          }
          break

        case "contact":
          onNavigate("contact")
          addLine("success", "📧 Opening contact terminal...")
          break

        case "clear":
        case "cls":
          setLines([])
          break

        case "sudo":
          if (args === "hire-me") {
            addLine("ascii", HIRE_TEXT)
          } else {
            addLine("error", "Permission denied. Just kidding, try 'sudo hire-me'")
          }
          break

        case "home":
          onNavigate("home")
          addLine("success", "🏠 Returning to home position...")
          break

        case "":
          break

        default:
          addLine("error", `Command not found: ${command}. Type 'help' for available commands.`)
      }

      // Add to history
      if (cmd.trim()) {
        setHistory((prev) => [...prev, cmd])
        setHistoryIndex(-1)
      }
    },
    [addLine, onNavigate],
  )

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      processCommand(input)
      setInput("")
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (history.length > 0) {
        const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setInput(history[newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1
        if (newIndex >= history.length) {
          setHistoryIndex(-1)
          setInput("")
        } else {
          setHistoryIndex(newIndex)
          setInput(history[newIndex])
        }
      }
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: isMinimized ? "calc(100% - 40px)" : 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-primary/30"
          style={{ height: isMinimized ? "40px" : "300px" }}
        >
          {/* Terminal header */}
          <div className="flex items-center justify-between px-4 h-10 border-b border-primary/20 bg-card/50">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <button
                  onClick={onToggle}
                  className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors"
                />
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors"
                />
                <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors" />
              </div>
              <span className="font-terminal text-sm text-muted-foreground ml-2">
                terminal — {activePlanet ? `@${activePlanet}` : "solar-system"}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 hover:bg-white/10 rounded transition-colors"
              >
                <Minus size={14} className="text-muted-foreground" />
              </button>
              <button className="p-1 hover:bg-white/10 rounded transition-colors">
                <Maximize2 size={14} className="text-muted-foreground" />
              </button>
              <button onClick={onToggle} className="p-1 hover:bg-white/10 rounded transition-colors">
                <X size={14} className="text-muted-foreground" />
              </button>
            </div>
          </div>

          {/* Terminal content */}
          {!isMinimized && (
            <div
              ref={scrollRef}
              className="h-[calc(100%-40px)] overflow-y-auto p-4 font-terminal text-sm terminal-scrollbar"
              onClick={() => inputRef.current?.focus()}
            >
              {lines.map((line, i) => (
                <div
                  key={i}
                  className={`whitespace-pre-wrap mb-1 ${
                    line.type === "error"
                      ? "text-destructive"
                      : line.type === "success"
                        ? "text-green-400"
                        : line.type === "input"
                          ? "text-primary"
                          : line.type === "ascii"
                            ? "text-cosmic-blue"
                            : "text-foreground"
                  }`}
                >
                  {line.content}
                </div>
              ))}

              {/* Input line */}
              <div className="flex items-center">
                <span className="text-primary mr-2">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent outline-none text-foreground caret-primary"
                  spellCheck={false}
                  autoComplete="off"
                />
                <span className="w-2 h-5 bg-primary cursor-blink" />
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
