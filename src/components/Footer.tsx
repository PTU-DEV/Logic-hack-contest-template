import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code, Heart, ExternalLink, ArrowUp, Sparkles } from "lucide-react";

const Footer = () => {
  // const socialLinks = [
  //   { icon: "📸", label: "Instagram", url: "#" },
  //   { icon: "💼", label: "LinkedIn", url: "#" },
  //   { icon: "🐦", label: "Twitter", url: "#" },
  //   { icon: "📧", label: "Email", url: "mailto:admin@fossptu.dev" },
  // ];

  // const quickLinks = [
  //   { label: "Home", path: "/" },
  //   { label: "About", path: "/about" },
  //   { label: "Rules", path: "/rules" },
  //   { label: "Timeline", path: "/timeline" },
  //   { label: "Register", path: "/register" },
  //   { label: "QR Hunt", path: "/qr-hunt" },
  //   { label: "Fun Zone", path: "/fun" },
  //   { label: "Contact", path: "/contact" },
  // ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0a0a1a] overflow-hidden">
      {/* ── Gradient Top Border ── */}
      <div className="h-1 w-full bg-linear-to-r from-orange-500 via-yellow-400 to-green-500" />

      {/* ── Background Decorations ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -bottom-24 -right-24 w-125 h-125 opacity-[0.03]"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="w-full h-full border-4 border-orange-500"
            style={{
              clipPath:
                "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            }}
          />
        </motion.div>
        <motion.div
          className="absolute -top-28 -left-28 w-100 h-100 opacity-[0.03]"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="w-full h-full border-4 border-yellow-500"
            style={{
              clipPath:
                "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            }}
          />
        </motion.div>
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl" />
      </div>

      {/* ══════════════════════════════════════
          CTA BANNER — Full Width Centered
      ══════════════════════════════════════ */}
      <div className="relative w-full max-w-350 mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 md:mt-16 mb-12 md:mb-16 px-8 py-10 md:px-12 md:py-12 lg:px-16 lg:py-14 rounded-3xl bg-linear-to-r from-orange-500/10 via-yellow-500/10 to-green-500/10 border border-orange-500/20 backdrop-blur-sm"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
            <div className="text-center lg:text-left flex-1 space-y-5">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight">
                Ready to{" "}
                <span className="bg-linear-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
                  Loot the Logic
                </span>
                ? 🏆
              </h3>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                Register now and compete with the best coders across the nation!
              </p>
            </div>
            <Link to="/register" className="shrink-0">
              <motion.button
                className="px-8 py-4 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full font-black text-white text-lg tracking-wider shadow-xl shadow-orange-500/30 hover:shadow-orange-500/60 transition-shadow whitespace-nowrap flex items-center gap-4"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(249,115,22,0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                REGISTER NOW <ExternalLink className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* ══════════════════════════════════════
          MAIN FOOTER — Evenly Spread Grid
      ══════════════════════════════════════ */}
      <div className="relative w-full max-w-350 mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 pt-16 pb-24">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-0">
          {/* ═══ Column 1: Brand (Left) ═══ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1 space-y-10 lg:pr-12 lg:border-r lg:border-white/5"
          >
            <Link to="/" className="flex items-center gap-5 group">
              <div className="relative shrink-0">
                <div className="w-16 h-16 bg-linear-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-xl shadow-orange-500/40 group-hover:shadow-orange-500/60 transition-shadow">
                  <Code className="w-9 h-9 text-white" />
                </div>
                <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-pulse" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="font-black text-3xl bg-linear-to-r from-orange-500 via-yellow-400 to-green-500 bg-clip-text text-transparent">
                    LOGIC
                  </span>
                  <span className="font-black text-3xl text-white ml-2">
                    LOOT
                  </span>
                </div>
                <p className="text-sm text-gray-500 tracking-widest">
                  Think Smart. Code Strong.
                </p>
              </div>
            </Link>

            <p className="text-gray-400 text-lg leading-loose max-w-sm">
              A grand coding competition celebrating the spirit of
              problem-solving, logic, and innovation. Join the ultimate coding
              utsav! 🪔✨
            </p>
          </motion.div>
          {/* ═══ Column 2: Event Details (Center-Right) ═══ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex-1 space-y-10 lg:px-12 lg:border-r lg:border-white/5"
          >
            <h3 className="font-bold text-white text-2xl flex items-center gap-4">
              <span className="w-12 h-1 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full" />
              Event Details
            </h3>

            <div className="space-y-6">
              {[
                {
                  emoji: "📅",
                  title: "9th March 2026",
                  sub: "Mark your calendar!",
                },
                {
                  emoji: "⏰",
                  title: "10:00 AM – 1:00 PM",
                  sub: "3 hours of intense coding",
                },
                {
                  emoji: "📍",
                  title: "IKGPTU Campus",
                  sub: "CC Lab, Main Building",
                },
                {
                  emoji: "🏆",
                  title: "Prizes & Goodies",
                  sub: "Certificates for all",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-5 px-6 py-5 rounded-2xl bg-white/3 border border-white/5 hover:border-orange-500/20 transition-colors"
                >
                  <span className="text-3xl mt-0.5 shrink-0">{item.emoji}</span>
                  <div className="space-y-2">
                    <p className="text-white text-lg font-semibold leading-snug">
                      {item.title}
                    </p>
                    <p className="text-gray-500 text-base leading-relaxed">
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ═══ Column 4: Contact (Right) ═══ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex-1 space-y-10 lg:pl-12"
          >
            <h3 className="font-bold text-white text-2xl flex items-center gap-4">
              <span className="w-12 h-1 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full" />
              Get in Touch
            </h3>

            <div className="space-y-7">
              <a
                href="mailto:admin@fossptu.dev"
                className="flex items-center gap-5 text-gray-400 hover:text-orange-400 transition-colors text-lg"
              >
                <span className="text-3xl shrink-0">📧</span>
                <span>admin@fossptu.dev</span>
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-5 text-gray-400 hover:text-orange-400 transition-colors text-lg"
              >
                <span className="text-3xl shrink-0">📞</span>
                <span>+91 98765 43210</span>
              </a>
              <div className="flex items-center gap-5 text-gray-400 text-lg">
                <span className="text-3xl shrink-0">🌐</span>
                <span>c.fossptu.dev</span>
              </div>
            </div>

            {/* Unstop Card */}
            <a
              href="https://unstop.com/o/PQqMOZk"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                className="px-8 py-7 rounded-2xl bg-linear-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 hover:border-orange-500/40 transition-all group cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between gap-6">
                  <div className="space-y-3">
                    <p className="text-orange-400 text-lg font-bold">
                      Register on Unstop
                    </p>
                    <p className="text-gray-500 text-base">
                      Official registration platform
                    </p>
                  </div>
                  <ExternalLink className="w-7 h-7 text-orange-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0" />
                </div>
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          BOTTOM BAR — Spread Left / Center / Right
      ══════════════════════════════════════ */}
      <div className="relative border-t border-white/10">
        <div className="max-w-350 mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left */}
            <motion.p
              className="text-gray-500 text-lg flex items-center gap-3 flex-wrap justify-center md:justify-start"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Made with <Heart className="w-6 h-6 text-red-500 animate-pulse" />{" "}
              by IKGPTU Students
            </motion.p>

            {/* Center */}
            <p className="text-gray-600 text-base">
              © 2026 Logic Loot — All rights reserved
            </p>

            {/* Right */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-4 text-gray-500 hover:text-orange-400 transition-colors text-lg group"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Top
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 group-hover:border-orange-500/30 group-hover:bg-orange-500/10 flex items-center justify-center transition-all">
                <ArrowUp className="w-6 h-6" />
              </div>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
