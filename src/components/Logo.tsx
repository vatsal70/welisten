import { motion } from "motion/react";

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 48 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background Glow - Static */}
      <circle
        cx="20"
        cy="20"
        r="19"
        fill="currentColor"
        fillOpacity="0.05"
      />

      {/* The Brain - Stylized and recognizable lobes */}
      <path
        d="M20 10C16 10 12 13 12 17C12 21 16 23 20 23C24 23 28 21 28 17C28 13 24 10 20 10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 10V23"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M16 14C15 14 14 15 14 17C14 19 15 20 16 20"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M24 14C25 14 26 15 26 17C26 19 25 20 24 20"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* The Stethoscope - Wrapping around the base of the brain */}
      <path
        d="M10 18C10 18 8 22 8 26C8 30 12 34 20 34C28 34 32 30 32 26C32 22 30 18 30 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* The Stethoscope Chestpiece */}
      <circle
        cx="20"
        cy="34"
        r="3"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="white"
      />
      <circle
        cx="20"
        cy="34"
        r="1"
        fill="currentColor"
      />

      {/* Clarity Spark at the top */}
      <circle
        cx="20"
        cy="7"
        r="2"
        fill="currentColor"
      />
    </svg>
  );
}
