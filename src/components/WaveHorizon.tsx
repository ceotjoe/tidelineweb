import React from 'react'
import { ThemeMode } from '../tokens/colors'

interface WaveHorizonProps {
  mode: ThemeMode
  className?: string
  height?: number
  flip?: boolean
}

export const WaveHorizon: React.FC<WaveHorizonProps> = ({
  mode,
  className = '',
  height = 96,
  flip = false,
}) => {
  // Theme color mapping for waves
  const waveColors = {
    light: {
      back: '#CBE5DE',
      mid: '#9FD3C7',
      front: '#1F6F68',
    },
    dark: {
      back: '#16292E',
      mid: '#1E383D',
      front: '#7FD1C3',
    },
    sunlight: {
      back: '#F0F0F0',
      mid: '#D0E8E2',
      front: '#003D37',
    },
    nightred: {
      back: '#1A0000',
      mid: '#470904',
      front: '#CC2214',
    },
  }[mode]

  return (
    <div
      className={`relative w-full overflow-hidden leading-none select-none ${
        flip ? 'rotate-180' : ''
      } ${className}`}
      style={{ height: `${height}px` }}
      aria-hidden="true"
    >
      <svg
        className="absolute bottom-0 w-[200%] h-full animate-wave-slow opacity-60"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C150,90 350,-40 500,45 C650,130 900,-20 1200,50 L1200,120 L0,120 Z"
          fill={waveColors.back}
        />
      </svg>
      <svg
        className="absolute bottom-0 w-[200%] h-full animate-wave-fast opacity-80"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,20 C200,100 450,10 600,60 C750,110 1000,15 1200,40 L1200,120 L0,120 Z"
          fill={waveColors.mid}
        />
      </svg>
      <svg
        className="absolute bottom-0 w-full h-[60%]"
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
      >
        <path
          d="M0,35 C300,75 600,10 900,45 C1050,60 1150,30 1200,35 L1200,80 L0,80 Z"
          fill={waveColors.front}
        />
      </svg>
    </div>
  )
}
