import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import ParticleBackground from "../components/ParticleBackground";

const About = () => {
  const eventHighlights = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Date",
      value: "9th March 2026",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time",
      value: "10:00 AM - 1:00 PM",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Venue",
      value: "IKGPTU CC Lab",
      color: "from-green-500 to-cyan-500",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Size",
      value: "2-3 Members",
      color: "from-blue-500 to-purple-500",
    },
  ];

  const whatMakesUnique = [
    {
      emoji: "🎲",
      title: "The Prop - Elimination Game",
      description:
        "Every 15 minutes, teams face a chance of elimination. It's not just about coding - it's about survival!",
    },
    {
      emoji: "📱",
      title: "QR Code Hunt",
      description:
        "Hidden QR codes across campus grant immunity. Find them before your competitors do!",
    },
    {
      emoji: "🍪",
      title: "Refreshments",
      description:
        "Cookies and refreshments provided to fuel your coding marathon!",
    },
    {
      emoji: "🏆",
      title: "Prizes & Recognition",
      description:
        "Certificates, medals, and eternal glory await the champions!",
    },
    {
      emoji: "📝",
      title: "Handwritten Reference",
      description:
        "Bring up to 6 A4 sheets of handwritten notes - prepare like a pro!",
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
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              📖
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
              About <span className="text-orange-400">Logic Loot</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              A unique coding competition where programming skills meet survival
              instincts. Welcome to IKGPTU's most thrilling tech event!
            </p>
          </motion.div>

          {/* Event Info Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {eventHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div
                  className={`absolute -inset-1 bg-linear-to-r ${item.color} rounded-2xl opacity-30 group-hover:opacity-50 blur transition-opacity`}
                />
                <div className="relative bg-accent rounded-2xl p-6 border border-white/10 text-center">
                  <div
                    className={`w-14 h-14 rounded-xl bg-linear-to-r ${item.color} flex items-center justify-center mx-auto mb-4 text-white`}
                  >
                    {item.icon}
                  </div>
                  <p className="text-gray-400 text-sm mb-1">{item.title}</p>
                  <p className="text-white font-bold text-lg">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Logic Loot */}
      <section className="relative px-4 py-20 bg-linear-to-b from-transparent via-orange-500/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What is <span className="text-orange-400">Logic Loot?</span>
              </h2>
              <div className="space-y-4 text-gray-300 text-lg">
                <p>
                  Logic Loot is not just another coding competition - it's a{" "}
                  <span className="text-orange-400 font-semibold">
                    Coding Utsav
                  </span>{" "}
                  that combines the thrill of competitive programming with
                  unique survival elements.
                </p>
                <p>
                  Form a team of 2-3 members, solve challenging problems to earn
                  points, while navigating the exciting elimination system
                  called{" "}
                  <span className="text-red-400 font-semibold">"The Prop"</span>
                  .
                </p>
                <p>
                  Hunt for QR codes across the campus for immunity, code under
                  pressure, and emerge as the ultimate champion!
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Speed", "Accuracy", "Survival", "Strategy"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square relative">
                {/* Central Logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-48 h-48 bg-linear-to-br from-orange-500/20 to-yellow-500/20 rounded-3xl border border-orange-500/30 flex items-center justify-center"
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <span className="text-8xl">💻</span>
                  </motion.div>
                </div>

                {/* Orbiting Icons */}
                {["🏆", "🎯", "🔥", "⚡", "🎲", "📱"].map((emoji, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10"
                    style={{
                      top: `${50 + 40 * Math.sin((i * Math.PI) / 3)}%`,
                      left: `${50 + 40 * Math.cos((i * Math.PI) / 3)}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  >
                    <span className="text-3xl">{emoji}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Unique */}
      <section className="relative px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Makes Us <span className="text-orange-400">Unique?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Features that set Logic Loot apart from every other coding
              competition
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatMakesUnique.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-linear-to-r from-orange-500/20 to-yellow-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                <div className="relative h-full bg-linear-to-b from-white/5 to-transparent backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 transition-colors">
                  <span className="text-4xl mb-4 block">{item.emoji}</span>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="relative px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-linear-to-r from-green-500/10 to-cyan-500/10 rounded-3xl blur-xl" />
            <div className="relative bg-accent/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-green-500/20">
              <div className="text-center mb-8">
                <span className="text-5xl mb-4 block">✅</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Eligibility
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: "🎓", text: "Open to all IKGPTU students" },
                  { icon: "🤝", text: "Inter-specialization teams allowed" },
                  { icon: "👥", text: "Team of 2-3 members required" },
                  { icon: "👑", text: "One member must be Team Leader" },
                  { icon: "🖥️", text: "Use only allocated CC Lab system" },
                  { icon: "📋", text: "Follow all lab discipline rules" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-gray-300">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
