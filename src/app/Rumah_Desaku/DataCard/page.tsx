import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DataCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  onClick?: () => void;
}

const DataCard: React.FC<DataCardProps> = ({ title, icon, description, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [pathData, setPathData] = useState<Array<{d: string, delay: number}>>([]);
  const [dotData, setDotData] = useState<Array<{
    size: string,
    color: string,
    position: {left: string, top: string},
    animation: {x: number, y: number, duration: number, delay: number}
  }>>([]);

  // Generate random data only on client side
  useEffect(() => {
    setIsMounted(true);
    
    setPathData(Array.from({ length: 12 }).map(() => ({
      d: `M${Math.random() * 100} ${Math.random() * 100} L${Math.random() * 100} ${Math.random() * 100}`,
      delay: Math.random() * 0.5
    })));

    setDotData(Array.from({ length: 15 }).map(() => ({
      size: `${Math.random() * 6 + 2}px`,
      color: `hsl(${Math.random() * 60 + 200}, 80%, 60%)`,
      position: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      },
      animation: {
        x: Math.random() * 40 - 20,
        y: Math.random() * 40 - 20,
        duration: 2 + Math.random() * 3,
        delay: Math.random() * 0.5
      }
    })));
  }, []);

  // Text animation config
  const textAnimation = {
    background: isHovered 
      ? 'linear-gradient(90deg, #3b82f6, #8b5cf6)'
      : 'linear-gradient(90deg, #111827, #111827)',
    WebkitBackgroundClip: 'text' as const,
    WebkitTextFillColor: 'transparent' as const,
    backgroundClip: 'text' as const
  };

  if (!isMounted) {
    // Return a simplified version for SSR
    return (
      <div className="relative h-full bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6">
          <div className="flex items-start gap-5">
            <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-inner">
              {icon}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="relative h-full" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      aria-label={`Card for ${title}`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
        {/* Animated gradient mesh */}
        <svg className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-10 transition-opacity duration-500">
          {pathData.map((path, i) => (
            <motion.path
              key={`path-${i}`}
              d={path.d}
              stroke="url(#gradient)"
              strokeWidth="0.3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: isHovered ? 0.5 : 0 }}
              transition={{ duration: 1.5, delay: path.delay }}
            />
          ))}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating quantum dots */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
            >
              {dotData.map((dot, i) => (
                <motion.div
                  key={`dot-${i}`}
                  className="absolute rounded-full"
                  style={{
                    width: dot.size,
                    height: dot.size,
                    background: dot.color,
                    left: dot.position.left,
                    top: dot.position.top
                  }}
                  initial={{ scale: 0 }}
                  animate={{
                    scale: [0, 1, 0],
                    x: [0, dot.animation.x, 0],
                    y: [0, dot.animation.y, 0]
                  }}
                  transition={{
                    duration: dot.animation.duration,
                    delay: dot.animation.delay,
                    repeat: Infinity
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Main Card */}
      <motion.button
        onClick={onClick}
        className="group relative w-full h-full bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden text-left focus:outline-none focus:ring-4 focus:ring-blue-500/20"
        style={{
          transformStyle: 'preserve-3d'
        }}
        whileHover={{
          y: -8,
          rotateX: 1,
          rotateY: -1,
          transition: { type: "spring", stiffness: 300, damping: 15 }
        }}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", damping: 15, stiffness: 200 }}
        aria-labelledby={`card-title-${title.replace(/\s+/g, '-')}`}
      >
        {/* Liquid border effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-transparent pointer-events-none"
          animate={{
            borderRadius: isHovered ? 
              ["30% 70% 70% 30% / 30% 30% 70% 70%", 
               "60% 40% 40% 60% / 60% 25% 75% 40%"] : 
              "1rem"
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />

        {/* Dynamic lighting */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? 0.4 : 0,
            background: `radial-gradient(
              circle at ${isHovered ? "70% 20%" : "50% 50%"}, 
              rgba(59, 130, 246, 0.8) 0%, 
              transparent 70%
            )`
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Content container */}
        <div className="relative h-full p-6 flex flex-col z-10">
          {/* Header with animated accent */}
          <div className="relative pb-4 mb-4">
            <motion.div 
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: isHovered ? '100%' : '30%' }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <div className="flex items-start gap-5">
              {/* Animated icon */}
              <motion.div 
                className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-inner"
                whileHover={{ 
                  rotate: [0, 5, -5, 0],
                  transition: { duration: 0.6 }
                }}
              >
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  {icon}
                </div>
              </motion.div>
              
              {/* Text content with fixed animation */}
              <div className="flex-1">
                <motion.h3
                  id={`card-title-${title.replace(/\s+/g, '-')}`}
                  className="text-xl font-bold mb-2"
                  animate={textAnimation}
                  transition={{ duration: 0.5 }}
                >
                  {title}
                </motion.h3>
                <motion.p 
                  className="text-sm leading-relaxed"
                  initial={{ color: '#6b7280' }}
                  animate={{ color: isHovered ? '#1f2937' : '#6b7280' }}
                  transition={{ duration: 0.5 }}
                >
                  {description}
                </motion.p>
              </div>
            </div>
          </div>
          
          {/* Data stream effect at bottom */}
          <div className="mt-auto pt-4 relative">
            <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden pointer-events-none">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={`stream-${i}`}
                  className="absolute h-full w-1 bg-blue-400"
                  style={{
                    left: `${i * 5}%`,
                    bottom: '0'
                  }}
                  animate={{
                    height: isHovered ? ['0%', '100%', '0%'] : '0%',
                    opacity: isHovered ? [0, 1, 0] : 0
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.1,
                    repeat: Infinity
                  }}
                />
              ))}
            </div>
            
            {/* Animated arrow indicator */}
            <motion.div 
              className="flex justify-end"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-blue-100 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-500 shadow-sm">
                <svg 
                  className="w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 transform group-hover:translate-x-1 transition-all duration-500"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.button>
    </div>
  );
};

export default DataCard;