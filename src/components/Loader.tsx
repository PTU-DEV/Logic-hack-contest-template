import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const codeLines = [
    'Initializing Logic Loot...',
    'Loading hackathon modules...',
    'Preparing challenges...',
    'Setting up "The Prop"...',
    'Activating QR codes...',
    'Ready to dominate! 🚀'
  ];

  return (
    <div className="fixed inset-0 bg-[#0a0a1a] flex items-center justify-center z-50 overflow-hidden px-4">
      {/* Matrix Rain Background - Reduced on mobile */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-500 font-mono text-xs sm:text-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: -50
            }}
            animate={{
              y: ['0vh', '110vh']
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          >
            {String.fromCharCode(0x30A0 + Math.random() * 96)}
          </motion.div>
        ))}
      </div>

      {/* Main Loader Content */}
      <div className="relative z-10 text-center w-full max-w-md">
        {/* Animated Logo */}
        <motion.div
          className="mb-6 sm:mb-8"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        >
          <div className="relative inline-block">
            <div className="text-4xl sm:text-5xl md:text-6xl font-black">
              <span className="bg-linear-to-r from-orange-500 via-yellow-400 to-green-500 bg-clip-text text-transparent">
                Logic
              </span>
              <span className="text-white"> Loot</span>
            </div>

            {/* Diya Animation */}
            <motion.div
              className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 text-2xl sm:text-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              🪔
            </motion.div>
          </div>
        </motion.div>

        {/* Terminal Style Loading */}
        <div className="bg-black/80 border border-green-500/30 rounded-lg p-4 sm:p-6 font-mono text-left mx-auto">
          <div className="flex gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
          </div>

          {codeLines.slice(0, Math.floor(progress / 18) + 1).map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-green-400 text-xs sm:text-sm mb-1.5 sm:mb-2 truncate"
            >
              <span className="text-gray-500">$</span> {line}
            </motion.div>
          ))}

          <motion.span
            className="inline-block w-1.5 sm:w-2 h-3 sm:h-4 bg-green-500"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
        </div>

        {/* Progress Bar */}
        <div className="mt-6 sm:mt-8 w-full max-w-xs mx-auto px-4">
          <div className="h-1.5 sm:h-2 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full gradient-border"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-gray-400 mt-2 text-xs sm:text-sm">{progress}% loaded</p>
        </div>

        {/* Emoji Row */}
        <div className="mt-6 sm:mt-8 flex justify-center gap-2 sm:gap-4">
          {['🏆', '💻', '🎯', '🔥', '🚀'].map((emoji, i) => (
            <motion.span
              key={i}
              className="text-xl sm:text-2xl md:text-3xl"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
            >
              {emoji}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;