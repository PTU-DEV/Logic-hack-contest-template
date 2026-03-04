import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, XCircle, Shield, Zap } from "lucide-react";
import ParticleBackground from "../components/ParticleBackground";

const Rules = () => {
  const rules = [
    {
      category: "Team Structure",
      icon: "👥",
      color: "from-blue-500 to-cyan-500",
      items: [
        "Each team must have 2-3 members",
        "One member must be designated as Team Leader",
        "Team Leader represents the team during elimination rounds",
        "Inter-specialization teams are allowed",
      ],
    },
    {
      category: "Event Format",
      icon: "🎯",
      color: "from-orange-500 to-yellow-500",
      items: [
        "Contest duration: 3 hours (10:00 AM - 1:00 PM)",
        "Solve coding problems to earn points",
        "Every 15 minutes, 1-2 teams face 'The Prop'",
        "First half: 1/6 elimination chance",
        "Second half: 2/6 elimination chance",
        "Team Leader decides who takes the elimination chance",
      ],
    },
    {
      category: "QR Code Hunt",
      icon: "📱",
      color: "from-green-500 to-emerald-500",
      items: [
        "Multiple QR codes placed across campus",
        "QR codes activate randomly",
        "Scanning active QR = 10 minutes immunity",
        "Tampering with QR codes = immediate disqualification",
      ],
    },
    {
      category: "Scoring & Winning",
      icon: "🏆",
      color: "from-yellow-500 to-orange-500",
      items: [
        "Highest total points wins",
        "Tie-breaker: Total time taken to solve",
        "All submissions reviewed post-contest",
        "Results announced after verification",
      ],
    },
    {
      category: "Strict Prohibitions",
      icon: "⛔",
      color: "from-red-500 to-pink-500",
      items: [
        "No system switching or hardware tampering",
        "No collaboration between different teams",
        "No AI-generated code usage",
        "No unfair means of any kind",
        "Eliminated players cannot leave until event ends",
      ],
    },
    {
      category: "Allowed Resources",
      icon: "✅",
      color: "from-emerald-500 to-teal-500",
      items: [
        "Up to 6 handwritten A4 sheets as reference",
        "Internet usage as per lab guidelines",
        "At least one member must stay at system always",
      ],
    },
  ];

  const verificationChecks = [
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      text: "Malpractices detection",
      color: "text-yellow-400",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: "Unfair advantages check",
      color: "text-orange-400",
    },
    {
      icon: <XCircle className="w-5 h-5" />,
      text: "AI-generated code scan",
      color: "text-red-400",
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
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              📋
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
              Rules & <span className="text-orange-400">Guidelines</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Read carefully! These rules ensure fair play and an exciting
              experience for everyone.
            </p>
          </motion.div>

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-linear-to-r from-red-500 to-orange-500 rounded-2xl opacity-30 blur" />
              <div className="relative bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-8 h-8 text-red-400 shrink-0" />
                  <div>
                    <h3 className="text-red-400 font-bold text-lg mb-2">
                      Important Notice
                    </h3>
                    <p className="text-gray-300">
                      The organizing committee's decision is{" "}
                      <strong className="text-white">final and binding</strong>{" "}
                      in case of disputes. The committee reserves the right to
                      modify rules if required for fairness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rules Grid */}
      <section className="relative px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {rules.map((rule, index) => (
              <motion.div
                key={rule.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div
                  className={`absolute -inset-1 bg-linear-to-r ${rule.color} rounded-2xl opacity-20 group-hover:opacity-30 blur transition-opacity`}
                />
                <div className="relative h-full bg-accent rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{rule.icon}</span>
                    <h3 className="text-xl font-bold text-white">
                      {rule.category}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {rule.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Section */}
      <section className="relative px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Post-Contest <span className="text-orange-400">Verification</span>
            </h2>
            <p className="text-gray-400">
              All submissions undergo thorough verification before results are
              announced
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-4">
            {verificationChecks.map((check, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 rounded-xl p-6 border border-white/10 text-center"
              >
                <div className={`${check.color} mb-3 flex justify-center`}>
                  {check.icon}
                </div>
                <p className="text-gray-300 text-sm">{check.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Prop Detailed Rules */}
      <section className="relative px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-linear-to-r from-red-500/10 to-orange-500/10 rounded-3xl blur-xl" />
            <div className="relative bg-accent/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-red-500/20">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-5xl">🎲</span>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    The Prop - Elimination Rules
                  </h2>
                  <p className="text-gray-400">Survival is part of the game!</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
                    <h4 className="text-yellow-400 font-bold mb-2 flex items-center gap-2">
                      <Zap className="w-5 h-5" /> First Half (0-90 minutes)
                    </h4>
                    <p className="text-gray-300">
                      1/6 (16.67%) chance of elimination when selected
                    </p>
                  </div>

                  <div className="p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                    <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" /> Second Half (90-180
                      minutes)
                    </h4>
                    <p className="text-gray-300">
                      2/6 (33.33%) chance of elimination when selected
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-white font-bold">How it works:</h4>
                  <ol className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">
                        1
                      </span>
                      <span>Every 15 mins, 1-2 teams randomly selected</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">
                        2
                      </span>
                      <span>Team Leader chooses who faces "The Prop"</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">
                        3
                      </span>
                      <span>Selected member rolls for elimination</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">
                        4
                      </span>
                      <span>Eliminated members must stay in lab until end</span>
                    </li>
                  </ol>
                </div>
              </div>

              <div className="mt-8 p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                <h4 className="text-green-400 font-bold mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5" /> QR Code Immunity
                </h4>
                <p className="text-gray-300">
                  Scan an active QR code to gain{" "}
                  <strong className="text-white">10 minutes of immunity</strong>{" "}
                  from "The Prop"! QR codes are hidden across campus and
                  activate randomly.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Rules;
