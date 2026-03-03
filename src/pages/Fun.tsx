import { motion } from 'framer-motion';
import { useState } from 'react';
import confetti from 'canvas-confetti';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';

const Fun = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [diceResult, setDiceResult] = useState<number | null>(null);
  const [isRolling, setIsRolling] = useState(false);
  const [survivalScore, setSurvivalScore] = useState(0);
  const [attempts, setAttempts] = useState(0);

  const rollDice = () => {
    if (isRolling) return;

    setIsRolling(true);
    setAttempts(prev => prev + 1);

    // Simulate dice roll
    let rollCount = 0;
    const rollInterval = setInterval(() => {
      setDiceResult(Math.floor(Math.random() * 6) + 1);
      rollCount++;

      if (rollCount > 10) {
        clearInterval(rollInterval);
        const finalResult = Math.floor(Math.random() * 6) + 1;
        setDiceResult(finalResult);
        setIsRolling(false);

        // Check if survived (not 1 in first half rules)
        if (finalResult !== 1) {
          setSurvivalScore(prev => prev + 1);
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.7 },
            colors: ['#00ff88', '#00d4ff']
          });
        } else {
          // Eliminated!
          confetti({
            particleCount: 100,
            spread: 100,
            origin: { y: 0.7 },
            colors: ['#ff0000', '#ff6600']
          });
        }
      }
    }, 100);
  };

  const codingJokes = [
    { setup: "Why do programmers prefer dark mode?", punchline: "Because light attracts bugs! 🐛" },
    { setup: "Why was the JavaScript developer sad?", punchline: "Because he didn't Node how to Express himself! 😢" },
    { setup: "Why do Java developers wear glasses?", punchline: "Because they can't C#! 👓" },
    { setup: "What's a programmer's favorite hangout place?", punchline: "Foo Bar! 🍺" },
    { setup: "Why did the developer go broke?", punchline: "Because he used up all his cache! 💸" }
  ];

  const [currentJoke, setCurrentJoke] = useState(0);
  const [showPunchline, setShowPunchline] = useState(false);

  const nextJoke = () => {
    setShowPunchline(false);
    setCurrentJoke((prev) => (prev + 1) % codingJokes.length);
  };

  return (
    <div className="min-h-screen pt-10 md:pt-12 pb-24">
      <ParticleBackground />
      {/* Hero Section */}
      <section className="relative px-4 mb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.span
              className="inline-block text-6xl mb-4"
              animate={{
                rotate: [0, 20, -20, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              🎮
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
              Fun <span className="text-orange-400">Zone</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Take a break from the serious stuff! Games, jokes, and Easter eggs await!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dice Simulator */}
      <section className="relative px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-linear-to-r from-red-500/20 to-orange-500/20 rounded-3xl blur-xl" />
            <div className="relative bg-accent/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-red-500/20 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                🎲 The Prop Simulator
              </h2>
              <p className="text-gray-400 mb-8">
                Practice your luck! Roll 1 = Eliminated (First Half Rules)
              </p>

              {/* Dice Display */}
              <motion.div
                className={`w-32 h-32 mx-auto mb-8 bg-linear-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center text-6xl font-black text-white shadow-2xl ${isRolling ? 'animate-bounce' : ''}`}
                animate={isRolling ? { rotate: [0, 360] } : {}}
                transition={{ duration: 0.3, repeat: isRolling ? Infinity : 0 }}
              >
                {diceResult || '?'}
              </motion.div>

              {/* Result Message */}
              {diceResult && !isRolling && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`mb-6 p-4 rounded-xl ${diceResult === 1
                    ? 'bg-red-500/20 border border-red-500/30'
                    : 'bg-green-500/20 border border-green-500/30'
                    }`}
                >
                  <p className={`text-xl font-bold ${diceResult === 1 ? 'text-red-400' : 'text-green-400'}`}>
                    {diceResult === 1 ? '💀 ELIMINATED!' : '✅ SURVIVED!'}
                  </p>
                </motion.div>
              )}

              {/* Stats */}
              <div className="flex justify-center gap-8 mb-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">{attempts}</p>
                  <p className="text-gray-400 text-sm">Attempts</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-400">{survivalScore}</p>
                  <p className="text-gray-400 text-sm">Survived</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-red-400">{attempts - survivalScore}</p>
                  <p className="text-gray-400 text-sm">Eliminated</p>
                </div>
              </div>

              <motion.button
                onClick={rollDice}
                disabled={isRolling}
                className="px-8 py-4 bg-linear-to-r from-red-500 to-orange-500 rounded-full font-bold text-white text-xl shadow-2xl shadow-red-500/30 disabled:opacity-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isRolling ? 'Rolling...' : 'Roll The Dice! 🎲'}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coding Jokes */}
      <section className="relative px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-linear-to-r from-yellow-500/20 to-orange-500/20 rounded-3xl blur-xl" />
            <div className="relative bg-accent/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-yellow-500/20 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                😂 Coding Jokes
              </h2>

              <div className="min-h-50 flex flex-col justify-center">
                <motion.p
                  key={currentJoke}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-xl text-white mb-6"
                >
                  {codingJokes[currentJoke].setup}
                </motion.p>

                {showPunchline && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl font-bold text-orange-400"
                  >
                    {codingJokes[currentJoke].punchline}
                  </motion.p>
                )}
              </div>

              <div className="flex justify-center gap-4 mt-8">
                {!showPunchline ? (
                  <motion.button
                    onClick={() => setShowPunchline(true)}
                    className="px-8 py-3 bg-linear-to-r from-yellow-500 to-orange-500 rounded-full font-bold text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Show Punchline 😏
                  </motion.button>
                ) : (
                  <motion.button
                    onClick={nextJoke}
                    className="px-8 py-3 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full font-bold text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Next Joke →
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Easter Egg */}
      <section className="relative px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500 mb-4">Click the cookie 10 times for a surprise!</p>
            <motion.button
              onClick={() => {
                setClickCount(prev => prev + 1);
                if (clickCount >= 9) {
                  setShowEasterEgg(true);
                  confetti({
                    particleCount: 200,
                    spread: 100,
                    origin: { y: 0.6 }
                  });
                }
              }}
              className="text-8xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              🍪
            </motion.button>
            <p className="text-gray-500 mt-2">{clickCount}/10 clicks</p>

            {showEasterEgg && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 p-6 bg-linear-to-r from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/30"
              >
                <h3 className="text-2xl font-bold text-white mb-2">🎉 Easter Egg Found!</h3>
                <p className="text-purple-400">
                  You're officially a cookie monster! 🍪 Now go register for Logic Loot!
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="relative px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            💡 Fun Facts About <span className="text-orange-400">Logic Loot</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { emoji: "🎲", fact: "You have a 16.67% chance of elimination in the first half!" },
              { emoji: "🔥", fact: "The second half doubles your elimination risk to 33.33%!" },
              { emoji: "📱", fact: "QR codes can save your life - literally (in the game)!" },
              { emoji: "🍪", fact: "Free cookies are provided because coding is hard work!" },
              { emoji: "🎵", fact: "The entire event has background music to keep vibes high!" },
              { emoji: "📝", fact: "You can bring 6 handwritten A4 sheets - no printed cheat sheets!" },
              { emoji: "👑", fact: "Team Leader has the power to decide who faces The Prop!" },
              { emoji: "🏆", fact: "Certificates AND medals for winners - double glory!" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-orange-500/30 transition-colors"
              >
                <span className="text-3xl">{item.emoji}</span>
                <p className="text-gray-300">{item.fact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Motivational Quote Generator */}
      <section className="relative px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <MotivationalQuote />
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Motivational Quote Component
const MotivationalQuote = () => {
  const quotes = [
    { quote: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
    { quote: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { quote: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
    { quote: "It's not a bug – it's an undocumented feature.", author: "Anonymous" },
    { quote: "Debugging is twice as hard as writing the code.", author: "Brian Kernighan" },
    { quote: "Any fool can write code that a computer can understand.", author: "Martin Fowler" },
    { quote: "Programming isn't about what you know; it's about what you can figure out.", author: "Chris Pine" },
    { quote: "The only way to learn a new programming language is by writing programs in it.", author: "Dennis Ritchie" }
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.7 },
      colors: ['#ff6b35', '#f7c435']
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="absolute -inset-4 bg-linear-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl" />
      <div className="relative bg-accent/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-purple-500/20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          ✨ Coding Motivation
        </h2>

        <motion.div
          key={currentQuote}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="min-h-37.5 flex flex-col justify-center"
        >
          <p className="text-xl md:text-2xl text-white italic mb-4">
            "{quotes[currentQuote].quote}"
          </p>
          <p className="text-purple-400 font-medium">
            — {quotes[currentQuote].author}
          </p>
        </motion.div>

        <motion.button
          onClick={nextQuote}
          className="mt-8 px-8 py-3 bg-linear-to-r from-purple-500 to-pink-500 rounded-full font-bold text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Inspired ✨
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Fun;