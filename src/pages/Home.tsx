import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Trophy,
  Users,
  Clock,
  MapPin,
  Zap,
  Shield,
  Gift,
} from "lucide-react";
import ParticleBackground from "../components/ParticleBackground";

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date("2026-03-09T10:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "The Prop",
      description:
        "Face elimination every 15 mins! 1/6 chance in first half, 2/6 in second.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "QR Immunity",
      description:
        "Hunt QR codes across campus for 10-minute elimination immunity!",
      color: "from-green-500 to-cyan-500",
    },
    {
      icon: <Trophy className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Epic Prizes",
      description: "Certificates, medals, and glory await the champions!",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Gift className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Free Refreshments",
      description: "Cookies and refreshments to fuel your coding marathon!",
      color: "from-pink-500 to-purple-500",
    },
  ];

  const stats = [
    { value: "3", label: "Hours", icon: "⏱️" },
    { value: "2-3", label: "Team Size", icon: "👥" },
    { value: "∞", label: "Challenges", icon: "🎯" },
    { value: "1", label: "Winner", icon: "🏆" },
  ];

  return (
    <div ref={containerRef} className="relative overflow-x-hidden">
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-10 md:pt-12 pb-12 px-4 sm:px-8 md:px-12 lg:px-28">
        {/* Floating Elements - Hidden on mobile to prevent overflow */}
        <motion.div
          className="hidden md:block absolute top-32 left-10 text-4xl lg:text-6xl"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          🪔
        </motion.div>
        <motion.div
          className="hidden md:block absolute top-40 right-20 text-4xl lg:text-6xl"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 10, 0],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        >
          💻
        </motion.div>
        <motion.div
          className="hidden md:block absolute bottom-40 left-20 text-4xl lg:text-6xl"
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
        >
          🏆
        </motion.div>
        <motion.div
          className="hidden md:block absolute bottom-32 right-10 text-4xl lg:text-6xl"
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.3 }}
        >
          🎯
        </motion.div>

        {/* Main Content */}
        <div className="relative z-10 text-center w-full max-w-5xl mx-auto px-2 sm:px-4">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-500/20 border border-orange-500/30 rounded-full mb-4 sm:mb-8"
          >
            <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-orange-500" />
            </span>
            <span className="text-orange-400 text-xs sm:text-sm font-medium">
              IKGPTU Presents
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative mb-8 sm:mb-32 text-center"
          >
            {/* Decorative Ring - Hidden on mobile */}
            <motion.div
              className="hidden sm:block absolute -inset-8 md:-inset-12 opacity-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <linearGradient
                    id="ringGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#ff6b35" />
                    <stop offset="50%" stopColor="#f7c435" />
                    <stop offset="100%" stopColor="#00ff88" />
                  </linearGradient>
                </defs>
                <circle
                  cx="100"
                  cy="100"
                  r="95"
                  fill="none"
                  stroke="url(#ringGrad)"
                  strokeWidth="2"
                  strokeDasharray="10 5"
                />
              </svg>
            </motion.div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none">
              <motion.span
                className="block bg-linear-to-r from-orange-500 via-yellow-400 to-green-500 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                LOGIC
              </motion.span>
              <motion.span
                className="block text-white"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                LOOT
              </motion.span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg sm:text-2xl md:text-3xl text-gray-300 mb-8 sm:mb-6 font-light "
          >
            <span className="text-orange-400">Think Smart.</span>{" "}
            <span className="text-yellow-400">Code Strong.</span>{" "}
            <span className="text-green-400">Win Big.</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-gray-400 text-sm sm:text-base md:text-lg mb-8 sm:mb-8  mx-auto p-8 m-3"
          >
            A Coding Utsav where survival meets programming! Face "The Prop",
            hunt QR codes for immunity, and prove your coding supremacy.
          </motion.p>

          {/* Event Info Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-10"
          >
            <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 bg-white/5 rounded-full border border-white/10">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 shrink-0" />
              <span className="text-xs sm:text-sm whitespace-nowrap">
                9th March 2026
              </span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 bg-white/5 rounded-full border border-white/10">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 shrink-0" />
              <span className="text-xs sm:text-sm whitespace-nowrap">
                IKGPTU CC Lab
              </span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 bg-white/5 rounded-full border border-white/10">
              <Users className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 shrink-0" />
              <span className="text-xs sm:text-sm whitespace-nowrap">
                Teams of 2-3
              </span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4"
          >
            <Link to="/register" className="w-full sm:w-auto">
              <motion.button
                className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full font-bold text-white text-base sm:text-lg shadow-2xl shadow-orange-500/30 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Register Now
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-yellow-500 to-orange-500"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>

            <Link to="/about" className="w-full sm:w-auto">
              <motion.button
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/20 rounded-full font-bold text-white text-base sm:text-lg hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
                <span className="text-lg sm:text-xl">📖</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator - Hidden on small screens */}
        <motion.div
          className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-3 bg-orange-500 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Countdown Section */}
      <section className="relative py-12 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white">
              Event Starts In
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Minutes" },
              { value: timeLeft.seconds, label: "Seconds" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 sm:-inset-1 bg-linear-to-r from-orange-500 to-yellow-500 rounded-xl sm:rounded-2xl opacity-30 group-hover:opacity-50 blur transition-opacity" />
                <div className="relative bg-accent rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-orange-500/20">
                  <motion.span
                    className="block text-3xl sm:text-5xl md:text-6xl font-black bg-linear-to-b from-white to-gray-400 bg-clip-text text-transparent"
                    key={item.value}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                  >
                    {item.value.toString().padStart(2, "0")}
                  </motion.span>
                  <span className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-12 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-16"
          >
            <span className="text-orange-400 font-medium mb-2 block text-sm sm:text-base">
              What Makes Us Special
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-4">
              Not Your Average{" "}
              <span className="text-orange-400">Hackathon</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-2">
              Experience the thrill of coding under pressure with unique
              survival elements!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div
                  className={`absolute -inset-0.5 sm:-inset-1 bg-linear-to-r ${feature.color} rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
                />
                <div className="relative h-full bg-linear-to-b from-white/5 to-transparent backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-orange-500/30 transition-colors">
                  <div
                    className={`w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-linear-to-r ${feature.color} flex items-center justify-center mb-3 sm:mb-4 text-white`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-12 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
            <div className="absolute inset-0 bg-linear-to-r from-orange-500/20 to-yellow-500/20" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZjZiMzUiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

            <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 p-6 sm:p-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  className="text-center"
                >
                  <span className="text-2xl sm:text-4xl mb-1 sm:mb-2 block">
                    {stat.icon}
                  </span>
                  <span className="text-3xl sm:text-5xl md:text-6xl font-black text-white block">
                    {stat.value}
                  </span>
                  <span className="text-gray-400 text-xs sm:text-base">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Prop Section */}
      <section className="relative py-12 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <span className="text-orange-400 font-medium mb-2 block text-sm sm:text-base">
                Survival Element
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                Face <span className="text-red-500">"The Prop"</span>
              </h2>
              <p className="text-gray-400 mb-5 sm:mb-8 text-sm sm:text-lg">
                Every 15 minutes, 1-2 teams will be randomly selected to face
                elimination. Your team leader must choose who takes the risk!
              </p>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-lg sm:rounded-xl border border-white/10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500/20 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-xl sm:text-2xl">⚡</span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-white text-sm sm:text-base">
                      First Half (0-90 mins)
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      1/6 chance of elimination
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-lg sm:rounded-xl border border-red-500/30">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500/20 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-xl sm:text-2xl">🔥</span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-white text-sm sm:text-base">
                      Second Half (90-180 mins)
                    </p>
                    <p className="text-red-400 text-xs sm:text-sm">
                      2/6 chance of elimination
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Dice Animation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative aspect-square max-w-62.5 sm:max-w-87.5 md:max-w-md mx-auto">
                {/* Animated Dice */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{
                    rotateY: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-linear-to-br from-red-500 to-orange-500 rounded-xl sm:rounded-2xl shadow-2xl shadow-red-500/50 flex items-center justify-center">
                    <span className="text-4xl sm:text-5xl md:text-6xl">🎲</span>
                  </div>
                </motion.div>

                {/* Orbiting Elements */}
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center"
                    style={{
                      top: "50%",
                      left: "50%",
                    }}
                    animate={{
                      x: [
                        Math.cos((i * Math.PI) / 3) * 70,
                        Math.cos(((i + 6) * Math.PI) / 3) * 70,
                      ],
                      y: [
                        Math.sin((i * Math.PI) / 3) * 70,
                        Math.sin(((i + 6) * Math.PI) / 3) * 70,
                      ],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <span className="text-sm sm:text-lg md:text-2xl">
                      {i + 1}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-2 sm:-inset-4 bg-linear-to-r from-orange-500/20 via-yellow-500/20 to-green-500/20 rounded-2xl sm:rounded-3xl blur-xl" />
            <div className="relative bg-accent/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 border border-orange-500/20">
              <span className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 block">
                🚀
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-4">
                Ready to <span className="text-orange-400">Dominate?</span>
              </h2>
              <p className="text-gray-400 mb-5 sm:mb-8 text-sm sm:text-lg max-w-xl mx-auto">
                Form your team, sharpen your skills, and get ready for the
                ultimate coding battle!
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
                <Link to="/register" className="w-full sm:w-auto">
                  <motion.button
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full font-bold text-white text-base sm:text-lg shadow-2xl shadow-orange-500/30"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Register Your Team 🎯
                  </motion.button>
                </Link>
                <a
                  href="https://unstop.com/o/PQqMOZk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <motion.button
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-orange-500/30 rounded-full font-bold text-white text-base sm:text-lg hover:bg-orange-500/10 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Register on Unstop ↗
                  </motion.button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
