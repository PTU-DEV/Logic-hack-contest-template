import { motion } from "framer-motion";
import { QrCode, Shield, Clock, MapPin, AlertTriangle } from "lucide-react";
import ParticleBackground from "../components/ParticleBackground";

const QRHunt = () => {
  const qrLocations = [
    {
      area: "Library Building",
      hint: "Near the knowledge hub",
      difficulty: "Easy",
    },
    {
      area: "Cafeteria",
      hint: "Where hunger meets code",
      difficulty: "Medium",
    },
    { area: "Main Building", hint: "Administrative zone", difficulty: "Hard" },
    { area: "Sports Complex", hint: "Athletes' corner", difficulty: "Medium" },
    { area: "Workshop Area", hint: "Where machines hum", difficulty: "Hard" },
    { area: "???", hint: "Secret location!", difficulty: "Legendary" },
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
            <motion.div
              className="inline-block text-6xl mb-4"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              📱
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
              QR Code <span className="text-green-400">Hunt</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Scan to survive! Hidden QR codes across campus grant immunity from
              "The Prop"
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          >
            How It <span className="text-green-400">Works</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: <QrCode className="w-8 h-8" />,
                title: "Find QR Codes",
                description:
                  "Multiple QR codes are hidden across the IKGPTU campus",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Random Activation",
                description: "QR codes activate randomly during the event",
                color: "from-orange-500 to-yellow-500",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Gain Immunity",
                description:
                  "Scanning an ACTIVE QR = 10 minutes elimination immunity!",
                color: "from-green-500 to-emerald-500",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div
                  className={`absolute -inset-1 bg-linear-to-r ${step.color} rounded-2xl opacity-30 group-hover:opacity-50 blur transition-opacity`}
                />
                <div className="relative bg-accent rounded-2xl p-6 border border-white/10 text-center h-full">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-linear-to-r ${step.color} flex items-center justify-center text-white`}
                  >
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sample QR Code Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-r from-green-500/20 to-cyan-500/20 rounded-3xl blur-xl" />
              <div className="relative bg-accent rounded-3xl p-8 border border-green-500/20 text-center">
                <p className="text-gray-400 mb-4">
                  Sample QR Code (for demonstration)
                </p>
                <div className="w-48 h-48 mx-auto bg-white rounded-2xl p-4 mb-4">
                  <div className="w-full h-full bg-linear-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                    <QrCode className="w-24 h-24 text-white" />
                  </div>
                </div>
                <p className="text-green-400 font-medium">
                  Actual QR codes will be revealed during the event!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Possible Locations */}
      <section className="relative px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-4"
          >
            Possible <span className="text-orange-400">Locations</span>
          </motion.h2>
          <p className="text-gray-400 text-center mb-12">
            Hints for where QR codes might be hiding (actual locations are
            secret!)
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {qrLocations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-green-500/30 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400 group-hover:bg-green-500/30 transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-white">{location.area}</h3>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          location.difficulty === "Easy"
                            ? "bg-green-500/20 text-green-400"
                            : location.difficulty === "Medium"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : location.difficulty === "Hard"
                                ? "bg-orange-500/20 text-orange-400"
                                : "bg-purple-500/20 text-purple-400"
                        }`}
                      >
                        {location.difficulty}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{location.hint}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning */}
      <section className="relative px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-linear-to-r from-red-500 to-orange-500 rounded-2xl opacity-30 blur" />
            <div className="relative bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-red-400 shrink-0" />
                <div>
                  <h3 className="text-red-400 font-bold text-lg mb-2">
                    ⚠️ Warning
                  </h3>
                  <p className="text-gray-300">
                    <strong className="text-white">
                      Any tampering with QR codes will lead to immediate
                      disqualification!
                    </strong>
                    <br />
                    <br />
                    This includes:
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-300">
                    <li>• Removing or hiding QR codes</li>
                    <li>• Damaging QR codes</li>
                    <li>• Blocking others from scanning</li>
                    <li>• Creating fake QR codes</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QRHunt;
