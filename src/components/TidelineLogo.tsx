import React from 'react'
import { ThemeMode } from '../tokens/colors'

interface TidelineLogoProps {
  mode?: ThemeMode
  className?: string
  size?: number
}

export const TidelineLogo: React.FC<TidelineLogoProps> = ({
  mode = 'light',
  className = '',
  size = 40,
}) => {
  // Brand color mapping
  const colors = {
    light: {
      bg: '#1F6F68',
      tide: '#9FD3C7',
      signal: '#FFFCF6',
    },
    dark: {
      bg: '#16292E',
      tide: '#7FD1C3',
      signal: '#FFFCF6',
    },
    sunlight: {
      bg: '#003D37',
      tide: '#D0E8E2',
      signal: '#FFFFFF',
    },
    nightred: {
      bg: '#1A0000',
      tide: '#8A140A',
      signal: '#FF4433',
    },
  }[mode]

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`rounded-2xl transition-transform duration-300 hover:scale-105 shadow-sm ${className}`}
      aria-label="Tideline Logo"
    >
      {/* Base container tile */}
      <rect width="1024" height="1024" rx="224" fill={colors.bg} />

      {/* Waves (Tide layers) */}
      <path
        d="M150 692 C 240 662, 330 722, 420 692 C 510 662, 600 722, 690 692 C 780 662, 870 722, 874 692"
        stroke={colors.tide}
        strokeWidth="68"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M250 824 C 340 794, 430 854, 520 824 C 610 794, 700 854, 774 824"
        stroke={colors.tide}
        strokeWidth="68"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Transmitter Sun Rising on Horizon */}
      <path d="M380 580 A132 132 0 0 1 644 580 Z" fill={colors.signal} />

      {/* Radio arcs radiating outwards to left & right */}
      {/* Right lateral arcs */}
      <path
        d="M620 475 A232 232 0 0 1 737 523"
        stroke={colors.signal}
        strokeWidth="62"
        strokeLinecap="round"
      />
      <path
        d="M700 395 A342 342 0 0 1 836 474"
        stroke={colors.signal}
        strokeWidth="62"
        strokeLinecap="round"
      />

      {/* Left lateral arcs */}
      <path
        d="M404 475 A232 232 0 0 0 287 523"
        stroke={colors.signal}
        strokeWidth="62"
        strokeLinecap="round"
      />
      <path
        d="M324 395 A342 342 0 0 0 188 474"
        stroke={colors.signal}
        strokeWidth="62"
        strokeLinecap="round"
      />
    </svg>
  )
}
