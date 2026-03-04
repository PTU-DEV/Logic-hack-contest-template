import { motion } from "framer-motion";
import ParticleBackground from "../components/ParticleBackground";

const Timeline = () => {
  const timelineEvents = [
    {
      time: "10:00 AM",
      title: "🚀 Event Kickoff",
      description: "Welcome, instructions, and system allocation",
      type: "start",
      color: "from-green-500 to-emerald-500",
    },
    {
      time: "10:00 - 10:15",
      title: "💻 Coding Begins",
      description: "Start solving problems to earn points!",
      type: "coding",
      color: "from-blue-500 to-cyan-500",
    },
    {
      time: "10:15",
      title: "🎲 First Prop Round",
      description: "1-2 teams face The Prop (1/6 elimination chance)",
      type: "prop",
      color: "from-orange-500 to-yellow-500",
    },
    {
      time: "10:30",
      title: "🎲 Prop Round 2",
      description: "Another team faces elimination",
      type: "prop",
      color: "from-orange-500 to-yellow-500",
    },
    {
      time: "10:45",
      title: "🎲 Prop Round 3",
      description: "The tension continues!",
      type: "prop",
      color: "from-orange-500 to-yellow-500",
    },
    {
      time: "11:00",
      title: "🎲 Prop Round 4",
      description: "Midway through first half",
      type: "prop",
      color: "from-orange-500 to-yellow-500",
    },
    {
      time: "11:15",
      title: "🎲 Prop Round 5",
      description: "Still 1/6 elimination chance",
      type: "prop",
      color: "from-orange-500 to-yellow-500",
    },
    {
      time: "11:30",
      title: "⚡ HALFTIME - Difficulty Increases!",
      description: "Elimination probability now 2/6!",
      type: "halftime",
      color: "from-red-500 to-pink-500",
    },
    {
      time: "11:30",
      title: "🎲 Prop Round 6",
      description: "First round with 2/6 chance!",
      type: "prop-danger",
      color: "from-red-500 to-orange-500",
    },
    {
      time: "11:45",
      title: "🎲 Prop Round 7",
      description: "2/6 elimination continues",
      type: "prop-danger",
      color: "from-red-500 to-orange-500",
    },
    {
      time: "12:00 PM",
      title: "🍪 Cookie Break + Prop",
      description: "Refreshments served! But Prop continues...",
      type: "break",
      color: "from-purple-500 to-pink-500",
    },
    {
      time: "12:15",
      title: "🎲 Prop Round 9",
      description: "Final stretch begins!",
      type: "prop-danger",
      color: "from-red-500 to-orange-500",
    },
    {
      time: "12:30",
      title: "🎲 Prop Round 10",
      description: "Last 30 minutes!",
      type: "prop-danger",
      color: "from-red-500 to-orange-500",
    },
    {
      time: "12:45",
      title: "🎲 Final Prop Round",
      description: "Last chance for elimination!",
      type: "prop-danger",
      color: "from-red-500 to-orange-500",
    },
    {
      time: "1:00 PM",
      title: "🏁 Coding Ends",
      description: "Submit your solutions!",
      type: "end",
      color: "from-yellow-500 to-orange-500",
    },
    {
      time: "After 1:00 PM",
      title: "🔍 Verification & Results",
      description: "Code review, malpractice check, winner announcement",
      type: "results",
      color: "from-gold-500 to-yellow-500",
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
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              ⏰
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
              Event <span className="text-orange-400">Timeline</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              3 hours of intense coding, survival challenges, and glory!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Column 1 - First Half */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-green-500 via-orange-500 to-yellow-500" />

              {timelineEvents.slice(0, 8).map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="relative pl-20 pb-8 group"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className={`absolute left-6 w-5 h-5 rounded-full bg-linear-to-r ${event.color} border-4 border-dark group-hover:scale-125 transition-transform`}
                    whileHover={{ scale: 1.5 }}
                  />

                  {/* Event Card */}
                  <div
                    className={`relative bg-linear-to-r ${event.color} p-0.5 rounded-xl group-hover:scale-102 transition-transform shadow-lg shadow-black/20`}
                  >
                    <div className="bg-accent rounded-xl p-4">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono text-white">
                          {event.time}
                        </span>
                        {event.type === "prop" && (
                          <span className="px-2 py-1 bg-orange-500/20 rounded-full text-xs text-orange-400">
                            1/6 Chance
                          </span>
                        )}
                        {event.type === "prop-danger" && (
                          <span className="px-2 py-1 bg-red-500/20 rounded-full text-xs text-red-400">
                            2/6 Chance ⚠️
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1">
                        {event.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Column 2 - Second Half */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-orange-500 via-red-500 to-yellow-500" />

              {timelineEvents.slice(8).map((event, index) => (
                <motion.div
                  key={index + 8}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="relative pl-20 pb-8 group"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className={`absolute left-6 w-5 h-5 rounded-full bg-linear-to-r ${event.color} border-4 border-dark group-hover:scale-125 transition-transform`}
                    whileHover={{ scale: 1.5 }}
                  />

                  {/* Event Card */}
                  <div
                    className={`relative bg-linear-to-r ${event.color} p-0.5 rounded-xl group-hover:scale-102 transition-transform shadow-lg shadow-black/20`}
                  >
                    <div className="bg-accent rounded-xl p-4">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono text-white">
                          {event.time}
                        </span>
                        {event.type === "prop-danger" && (
                          <span className="px-2 py-1 bg-red-500/20 rounded-full text-xs text-red-400">
                            2/6 Chance ⚠️
                          </span>
                        )}
                        {event.type === "halftime" && (
                          <span className="px-2 py-1 bg-red-500/20 rounded-full text-xs text-red-400 animate-pulse">
                            DANGER ZONE
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1">
                        {event.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="relative px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "12", label: "Prop Rounds", emoji: "🎲" },
              { value: "6", label: "First Half", emoji: "⚡" },
              { value: "6", label: "Second Half", emoji: "🔥" },
              { value: "3", label: "Hours Total", emoji: "⏱️" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 rounded-xl p-4 text-center border border-white/10"
              >
                <span className="text-3xl mb-2 block">{stat.emoji}</span>
                <p className="text-3xl font-black text-white">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timeline;
