"use client";

export function DecorativeShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <svg
        className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] opacity-30"
        viewBox="0 0 500 500"
        fill="none"
      >
        <defs>
          <linearGradient id="shape1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F7B801" />
            <stop offset="100%" stopColor="#2C5282" />
          </linearGradient>
        </defs>
        <circle cx="250" cy="250" r="200" fill="url(#shape1)" opacity="0.5" />
      </svg>
      
      <svg
        className="absolute top-[40%] right-[-5%] w-[400px] h-[400px] opacity-20"
        viewBox="0 0 400 400"
        fill="none"
      >
        <defs>
          <linearGradient id="shape2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2C5282" />
            <stop offset="100%" stopColor="#F7B801" />
          </linearGradient>
        </defs>
        <ellipse cx="200" cy="200" rx="180" ry="120" fill="url(#shape2)" opacity="0.6" />
      </svg>
      
      <svg
        className="absolute bottom-[15%] left-[10%] w-[350px] h-[350px] opacity-25"
        viewBox="0 0 350 350"
        fill="none"
      >
        <defs>
          <linearGradient id="shape3" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F7B801" />
            <stop offset="50%" stopColor="#0B1F3B" />
            <stop offset="100%" stopColor="#2C5282" />
          </linearGradient>
        </defs>
        <path
          d="M175 25 L325 125 L275 300 L75 300 L25 125 Z"
          fill="url(#shape3)"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
