import React from 'react';

interface TechIconProps {
  className?: string;
}

export const RubyIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M6 3L2 9L12 21L22 9L18 3H6Z"
      fill="#CC342D"
    />
    <path
      d="M6 3L12 21L18 3H6Z"
      fill="#E0463D"
      opacity="0.7"
    />
    <path
      d="M2 9H22L12 21L2 9Z"
      fill="#9E1F1A"
      opacity="0.5"
    />
    <path
      d="M6 3L10 9L12 21L14 9L18 3H6Z"
      fill="#FF6B6B"
      opacity="0.3"
    />
  </svg>
);

export const RailsIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="5" fill="#D30001" />
    <path
      d="M5 8C5 6.89543 5.89543 6 7 6H17C18.1046 6 19 6.89543 19 8V16C19 17.1046 18.1046 18 17 18H7C5.89543 18 5 17.1046 5 16V8Z"
      stroke="white"
      strokeWidth="1.5"
    />
    <path
      d="M7 10H17M7 14H17M10 6V18M14 6V18"
      stroke="white"
      strokeWidth="1.2"
    />
  </svg>
);

export const PostgresIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
      fill="#336791"
    />
    <path
      d="M16.5 10C16.5 7.5 14.5 6.5 12 6.5C9.5 6.5 7.5 7.5 7.5 10C7.5 11.5 8.5 12.8 10 13.5V17C10 17.5 10.5 18 11 18H13C13.5 18 14 17.5 14 17V13.5C15.5 12.8 16.5 11.5 16.5 10Z"
      fill="white"
      opacity="0.9"
    />
    <path
      d="M9 10C9 9 10.3 8.2 12 8.2C13.7 8.2 15 9 15 10"
      stroke="#336791"
      strokeWidth="1.2"
    />
  </svg>
);

export const ReactIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" />
    <ellipse
      cx="12"
      cy="12"
      rx="10"
      ry="4"
      transform="rotate(60 12 12)"
      stroke="#61DAFB"
      strokeWidth="1.5"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="10"
      ry="4"
      transform="rotate(120 12 12)"
      stroke="#61DAFB"
      strokeWidth="1.5"
    />
    <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
  </svg>
);

export const DockerIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M22 13C21.7 13 21 12.3 20 12.3C18.6 12.3 17.9 13.5 16.5 13.5C15.4 13.5 14.8 12.8 13.5 12.8C12.4 12.8 11.8 13.5 10.5 13.5C9.4 13.5 8.8 12.8 7.5 12.8C6.1 12.8 5.5 14 4 14C3 14 2 13.5 2 13.5V15C2 18 4.5 20.5 10 20.5C16.5 20.5 21.5 16.5 22 13Z"
      fill="#2496ED"
    />
    <rect x="5" y="9.5" width="2.2" height="2" fill="#2496ED" />
    <rect x="8" y="9.5" width="2.2" height="2" fill="#2496ED" />
    <rect x="11" y="9.5" width="2.2" height="2" fill="#2496ED" />
    <rect x="8" y="6.8" width="2.2" height="2" fill="#2496ED" />
    <rect x="11" y="6.8" width="2.2" height="2" fill="#2496ED" />
    <rect x="14" y="6.8" width="2.2" height="2" fill="#2496ED" />
  </svg>
);

export const RedisIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 2L2 7L12 12L22 7L12 2Z"
      fill="#D82C20"
    />
    <path
      d="M2 12L12 17L22 12"
      stroke="#D82C20"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 17L12 22L22 17"
      stroke="#D82C20"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
