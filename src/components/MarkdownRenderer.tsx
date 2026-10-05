import React, { useState } from 'react'
import { Check, Copy } from 'lucide-react'

interface MarkdownRendererProps {
  content: string
  className?: string
}

type Block =
  | { type: 'heading'; level: number; text: string }
  | { type: 'code_block'; language?: string; code: string }
  | { type: 'unordered_list'; items: string[] }
  | { type: 'ordered_list'; items: string[] }
  | { type: 'blockquote'; text: string }
  | { type: 'paragraph'; text: string }

function parseMarkdownBlocks(markdown: string): Block[] {
  const lines = markdown.split('\n')
  const blocks: Block[] = []
  let i = 0

  while (i < lines.length) {
    const rawLine = lines[i]
    const trimmed = rawLine.trim()

    // Skip empty lines
    if (!trimmed) {
      i++
      continue
    }

    // Fenced Code Block
    if (trimmed.startsWith('```')) {
      const language = trimmed.replace(/^```/, '').trim()
      const codeLines: string[] = []
      i++
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i])
        i++
      }
      if (i < lines.length) i++ // Skip closing fence
      blocks.push({
        type: 'code_block',
        language,
        code: codeLines.join('\n'),
      })
      continue
    }

    // Heading (# to ######)
    const headingMatch = rawLine.match(/^(#{1,6})\s+(.+)$/)
    if (headingMatch) {
      blocks.push({
        type: 'heading',
        level: headingMatch[1].length,
        text: headingMatch[2].trim(),
      })
      i++
      continue
    }

    // Blockquote (> ...)
    if (trimmed.startsWith('>')) {
      const quoteLines: string[] = []
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        quoteLines.push(lines[i].replace(/^>\s?/, ''))
        i++
      }
      blocks.push({
        type: 'blockquote',
        text: quoteLines.join('\n'),
      })
      continue
    }

    // Unordered List (- or * followed by space)
    if (/^\s*[-*]\s+/.test(rawLine)) {
      const items: string[] = []
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*[-*]\s+/, '').trim())
        i++
      }
      blocks.push({
        type: 'unordered_list',
        items,
      })
      continue
    }

    // Ordered List (digits followed by . and space)
    if (/^\s*\d+\.\s+/.test(rawLine)) {
      const items: string[] = []
      while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*\d+\.\s+/, '').trim())
        i++
      }
      blocks.push({
        type: 'ordered_list',
        items,
      })
      continue
    }

    // Paragraph: accumulate lines until next block starter or empty line
    const paraLines: string[] = []
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].trim().startsWith('```') &&
      !lines[i].match(/^#{1,6}\s/) &&
      !lines[i].trim().startsWith('>') &&
      !/^\s*[-*]\s+/.test(lines[i]) &&
      !/^\s*\d+\.\s+/.test(lines[i])
    ) {
      paraLines.push(lines[i].trim())
      i++
    }

    if (paraLines.length > 0) {
      blocks.push({
        type: 'paragraph',
        text: paraLines.join(' '),
      })
    }
  }

  return blocks
}

function renderInline(text: string): React.ReactNode {
  // Regex to split on inline code `...`, bold **...**, italic *...*, and links [text](url)
  const regex = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g
  const parts = text.split(regex)

  return parts.map((part, index) => {
    if (!part) return null

    // Inline code: `...`
    if (part.startsWith('`') && part.endsWith('`') && part.length >= 2) {
      const code = part.slice(1, -1)
      return (
        <code
          key={index}
          className="px-1.5 py-0.5 rounded-md bg-[var(--bg-surface-variant)] text-[var(--color-primary)] font-mono text-xs sm:text-sm border border-[var(--border-outline)]/40 font-semibold"
        >
          {code}
        </code>
      )
    }

    // Bold: **...**
    if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
      const inner = part.slice(2, -2)
      return (
        <strong key={index} className="font-bold text-[var(--text-primary)]">
          {renderInline(inner)}
        </strong>
      )
    }

    // Italic: *...*
    if (part.startsWith('*') && part.endsWith('*') && part.length >= 2) {
      const inner = part.slice(1, -1)
      return (
        <em key={index} className="italic text-[var(--text-secondary)]">
          {renderInline(inner)}
        </em>
      )
    }

    // Link: [text](url)
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (linkMatch) {
      return (
        <a
          key={index}
          href={linkMatch[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-primary)] font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity"
        >
          {linkMatch[1]}
        </a>
      )
    }

    return <React.Fragment key={index}>{part}</React.Fragment>
  })
}

const CodeBlockView: React.FC<{ code: string; language?: string }> = ({ code, language }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="my-4 rounded-2xl bg-[var(--bg-surface-variant)] border border-[var(--border-outline)]/40 overflow-hidden shadow-sm">
      <div className="flex items-center justify-between px-4 py-2 border-b border-[var(--border-outline)]/30 bg-[var(--bg-surface)]/70 text-xs">
        <span className="font-mono font-semibold text-[var(--text-secondary)] uppercase">
          {language || 'code'}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg hover:bg-[var(--bg-surface-variant)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors font-medium text-xs"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-xs sm:text-sm font-mono text-[var(--text-primary)] leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  )
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className = '' }) => {
  const blocks = parseMarkdownBlocks(content)

  return (
    <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${className}`}>
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'heading': {
            if (block.level === 1) {
              return (
                <h1
                  key={index}
                  className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mt-6 mb-3 tracking-tight"
                >
                  {renderInline(block.text)}
                </h1>
              )
            }
            if (block.level === 2) {
              return (
                <h2
                  key={index}
                  className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mt-6 mb-2.5 pb-1 border-b border-[var(--border-outline)]/20"
                >
                  {renderInline(block.text)}
                </h2>
              )
            }
            if (block.level === 3) {
              return (
                <h3
                  key={index}
                  className="text-base sm:text-lg font-bold text-[var(--color-primary)] mt-5 mb-2 flex items-center gap-2"
                >
                  {renderInline(block.text)}
                </h3>
              )
            }
            return (
              <h4
                key={index}
                className="text-sm sm:text-base font-bold text-[var(--text-primary)] mt-4 mb-1.5"
              >
                {renderInline(block.text)}
              </h4>
            )
          }

          case 'code_block':
            return <CodeBlockView key={index} code={block.code} language={block.language} />

          case 'unordered_list':
            return (
              <ul key={index} className="space-y-2 my-3 pl-1 sm:pl-2">
                {block.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-start gap-2.5 text-sm sm:text-base text-[var(--text-primary)]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2 flex-shrink-0" />
                    <span className="flex-1">{renderInline(item)}</span>
                  </li>
                ))}
              </ul>
            )

          case 'ordered_list':
            return (
              <ol key={index} className="space-y-2.5 my-3 pl-1 sm:pl-2">
                {block.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-start gap-2.5 text-sm sm:text-base text-[var(--text-primary)]"
                  >
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[var(--bg-surface-variant)] border border-[var(--border-outline)]/40 text-[var(--color-primary)] font-mono text-xs font-bold flex-shrink-0 mt-0.5">
                      {itemIdx + 1}
                    </span>
                    <span className="flex-1">{renderInline(item)}</span>
                  </li>
                ))}
              </ol>
            )

          case 'blockquote':
            return (
              <blockquote
                key={index}
                className="my-3 pl-4 py-2 border-l-4 border-[var(--color-primary)] bg-[var(--bg-surface-variant)]/40 rounded-r-xl text-sm sm:text-base italic text-[var(--text-secondary)]"
              >
                {renderInline(block.text)}
              </blockquote>
            )

          case 'paragraph':
          default:
            return (
              <p
                key={index}
                className="text-sm sm:text-base text-[var(--text-primary)] leading-relaxed"
              >
                {renderInline(block.text)}
              </p>
            )
        }
      })}
    </div>
  )
}
