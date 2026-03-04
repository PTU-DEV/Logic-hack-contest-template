import { motion } from "framer-motion";
import { useState, useRef } from "react";
import {
  ExternalLink,
  CheckCircle,
  Users,
  Trophy,
  Calendar,
} from "lucide-react";
import confetti from "canvas-confetti";
import ParticleBackground from "../components/ParticleBackground";

const Register = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noClickCount, setNoClickCount] = useState(0);
  const [showFunMessage, setShowFunMessage] = useState(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleYesClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ff6b35", "#f7c435", "#00ff88"],
    });
    setShowConfirmation(true);
  };

  const handleNoHover = () => {
    const container = containerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const maxX = containerRect.width - 150;
    const maxY = containerRect.height - 60;

    const newX = Math.random() * maxX - maxX / 2;
    const newY = Math.random() * maxY - maxY / 2;

    setNoButtonPosition({ x: newX, y: newY });
    setNoClickCount((prev) => prev + 1);

    if (noClickCount > 5) {
      setShowFunMessage(true);
    }
  };

  const funMessages = [
    "Nice try! 😂",
    "You can't escape coding!",
    "The button is faster than you!",
    "Just click YES already!",
    "Persistence won't help here! 🤣",
    "Give up and register!",
    "This button has trust issues!",
    "Almost got it... NOT! 😜",
  ];

  const benefits = [
    { icon: <Trophy className="w-6 h-6" />, text: "Win Certificates & Medals" },
    { icon: <Users className="w-6 h-6" />, text: "Network with Fellow Coders" },
    {
      icon: <Calendar className="w-6 h-6" />,
      text: "Experience Unique Format",
    },
  ];

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
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✍️
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
              Ready to <span className="text-orange-400">Register?</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Take the first step towards glory! Join Logic Loot and prove your
              coding supremacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fun Decision Section */}
      {!showConfirmation && (
        <section className="relative px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-linear-to-r from-orange-500/20 to-yellow-500/20 rounded-3xl blur-xl" />
              <div
                ref={containerRef}
                className="relative bg-accent/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-orange-500/20 min-h-100"
              >
                <div className="text-center mb-12">
                  <span className="text-5xl mb-4 block">🤔</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Do you want to participate in{" "}
                    <span className="text-orange-400">Logic Loot?</span>
                  </h2>
                  <p className="text-gray-400">Choose wisely... or try to 😉</p>
                </div>

                {/* Fun Message */}
                {showFunMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                  >
                    <p className="text-yellow-400 text-lg font-medium">
                      {funMessages[noClickCount % funMessages.length]}
                    </p>
                  </motion.div>
                )}

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 relative">
                  {/* YES Button */}
                  <motion.button
                    onClick={handleYesClick}
                    className="relative px-12 py-4 bg-linear-to-r from-green-500 to-emerald-500 rounded-full font-bold text-white text-xl shadow-2xl shadow-green-500/30 overflow-hidden group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      ✅ YES, I'm Ready!
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-linear-to-r from-emerald-500 to-green-500"
                      initial={{ x: "100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>

                  {/* NO Button - Moves away! */}
                  <motion.button
                    ref={noButtonRef}
                    onMouseEnter={handleNoHover}
                    onTouchStart={handleNoHover}
                    animate={{
                      x: noButtonPosition.x,
                      y: noButtonPosition.y,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative px-12 py-4 bg-linear-to-r from-red-500 to-pink-500 rounded-full font-bold text-white text-xl shadow-2xl shadow-red-500/30"
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center gap-2">
                      ❌ No, I'm Scared
                    </span>
                  </motion.button>
                </div>

                {/* Click counter */}
                {noClickCount > 0 && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center mt-8 text-gray-500 text-sm"
                  >
                    No button dodged: {noClickCount} times 🏃‍♂️
                  </motion.p>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Confirmation Section */}
      {showConfirmation && (
        <section className="relative px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-linear-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl" />
              <div className="relative bg-accent/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-green-500/20 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-24 h-24 mx-auto mb-6 bg-linear-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center"
                >
                  <CheckCircle className="w-12 h-12 text-white" />
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Awesome Choice! 🎉
                </h2>
                <p className="text-gray-400 text-lg mb-8">
                  Now complete your registration on Unstop to confirm your
                  participation!
                </p>

                {/* Benefits */}
                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="p-4 bg-white/5 rounded-xl border border-white/10"
                    >
                      <div className="text-orange-400 mb-2 flex justify-center">
                        {benefit.icon}
                      </div>
                      <p className="text-gray-300 text-sm">{benefit.text}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Registration Links */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="https://unstop.com/o/PQqMOZk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      className="w-full sm:w-auto px-8 py-4 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full font-bold text-white text-lg shadow-2xl shadow-orange-500/30 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Register on Unstop
                      <ExternalLink className="w-5 h-5" />
                    </motion.button>
                  </a>

                  <a
                    href="https://tinyurl.com/logic-loot"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      className="w-full sm:w-auto px-8 py-4 border-2 border-orange-500/30 rounded-full font-bold text-white text-lg hover:bg-orange-500/10 transition-colors flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Quick Link
                      <ExternalLink className="w-5 h-5" />
                    </motion.button>
                  </a>
                </div>

                {/* Reset */}
                <button
                  onClick={() => {
                    setShowConfirmation(false);
                    setNoClickCount(0);
                    setShowFunMessage(false);
                    setNoButtonPosition({ x: 0, y: 0 });
                  }}
                  className="mt-6 text-gray-500 hover:text-gray-300 text-sm"
                >
                  ← Back to decision
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Event Details Reminder */}
      <section className="relative px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-linear-to-r from-orange-500/10 to-yellow-500/10 rounded-3xl p-8 border border-orange-500/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Event Details
            </h3>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <span className="text-3xl mb-2 block">📅</span>
                <p className="text-white font-bold">9th March 2026</p>
                <p className="text-gray-400 text-sm">Mark your calendar!</p>
              </div>
              <div>
                <span className="text-3xl mb-2 block">⏰</span>
                <p className="text-white font-bold">10:00 AM - 1:00 PM</p>
                <p className="text-gray-400 text-sm">3 hours of action!</p>
              </div>
              <div>
                <span className="text-3xl mb-2 block">📍</span>
                <p className="text-white font-bold">IKGPTU CC Lab</p>
                <p className="text-gray-400 text-sm">Be there on time!</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Register;
