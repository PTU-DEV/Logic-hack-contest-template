import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ExternalLink,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import confetti from "canvas-confetti";
import ParticleBackground from "../components/ParticleBackground";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("https://formspree.io/f/mykdrppj", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ff6b35", "#f7c435", "#00ff88"],
    });
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "admin@fossptu.dev",
      link: "mailto:admin@fossptu.dev",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 7484 962 276",
      link: "tel:+917484962276",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Venue",
      value: "IKGPTU CC Lab, Main Campus",
      link: "#",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram",
      url: "#",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      url: "#",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      label: "Twitter",
      url: "#",
      color: "from-cyan-400 to-blue-500",
    },
  ];

  const faqs = [
    {
      question: "Can I participate alone?",
      answer:
        "No, teams must have 2-3 members. Find teammates or we can help match you!",
    },
    {
      question: "What programming languages are allowed?",
      answer:
        "Most common languages are supported. Specific details will be shared before the event.",
    },
    {
      question: "Can I leave if I get eliminated?",
      answer:
        "No, eliminated participants must stay in the lab until the event concludes.",
    },
    {
      question: "Is there a registration fee?",
      answer:
        "Registration details are available on Unstop. Check the registration link for current fees.",
    },
    {
      question: "Can I use the internet during the contest?",
      answer:
        "Internet usage follows lab guidelines. Specific rules will be announced at the event.",
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              📞
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
              Get In <span className="text-orange-400">Touch</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Have questions? Need help? We're here for you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative px-4 py-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative block"
              >
                <div
                  className={`absolute -inset-1 bg-linear-to-r ${info.color} rounded-2xl opacity-30 group-hover:opacity-50 blur transition-opacity`}
                />
                <div className="relative bg-accent rounded-2xl p-6 border border-white/10 text-center h-full">
                  <div
                    className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-linear-to-r ${info.color} flex items-center justify-center text-white`}
                  >
                    {info.icon}
                  </div>
                  <p className="text-gray-400 text-sm mb-1">{info.label}</p>
                  <p className="text-white font-bold">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Social */}
      <section className="relative px-4 py-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-linear-to-r from-orange-500/20 to-yellow-500/20 rounded-3xl blur-xl" />
              <div className="relative bg-accent/90 backdrop-blur-xl rounded-3xl p-8 border border-orange-500/20">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Send className="w-6 h-6 text-orange-400" />
                  Send us a Message
                </h2>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-orange-500 focus:outline-none transition-colors"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-orange-500 focus:outline-none transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-orange-500 focus:outline-none transition-colors"
                        placeholder="What's this about?"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">
                        Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-orange-500 focus:outline-none transition-colors resize-none"
                        placeholder="Your message..."
                      />
                    </div>
                    <motion.button
                      type="submit"
                      className="w-full py-4 bg-linear-to-r from-orange-500 to-yellow-500 rounded-xl font-bold text-white flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                      <Send className="w-5 h-5" />
                    </motion.button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <span className="text-6xl mb-4 block">✅</span>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-400 mb-6">
                      We'll get back to you soon!
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          subject: "",
                          message: "",
                        });
                      }}
                      className="text-orange-400 hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Social & Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Social Media */}
              <div className="relative">
                <div className="absolute -inset-4 bg-linear-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl" />
                <div className="relative bg-accent/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20">
                  <h3 className="text-xl font-bold text-white mb-6">
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-14 h-14 rounded-xl bg-linear-to-r ${social.color} flex items-center justify-center text-white`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Registration Links */}
              <div className="relative">
                <div className="absolute -inset-4 bg-linear-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl" />
                <div className="relative bg-accent/90 backdrop-blur-xl rounded-3xl p-8 border border-green-500/20">
                  <h3 className="text-xl font-bold text-white mb-6">
                    Quick Links
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="https://unstop.com/o/PQqMOZk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group"
                    >
                      <span className="text-white font-medium">
                        Register on Unstop
                      </span>
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors" />
                    </a>
                    <a
                      href="https://tinyurl.com/logic-loot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group"
                    >
                      <span className="text-white font-medium">
                        Quick Registration Link
                      </span>
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Event Reminder */}
              <div className="relative">
                <div className="absolute -inset-4 bg-linear-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-xl" />
                <div className="relative bg-accent/90 backdrop-blur-xl rounded-3xl p-8 border border-orange-500/20">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">📅</span>
                    <div>
                      <p className="text-white font-bold text-lg">
                        9th March 2026
                      </p>
                      <p className="text-gray-400">10:00 AM - 1:00 PM</p>
                      <p className="text-orange-400 text-sm">IKGPTU CC Lab</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-5xl mb-4 block">❓</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Frequently Asked{" "}
              <span className="text-orange-400">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-6 bg-white/5 rounded-xl border border-white/10 hover:border-orange-500/30 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-medium pr-8">
                      {faq.question}
                    </h3>
                    <motion.span
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      className="text-orange-400 text-2xl"
                    >
                      ▼
                    </motion.span>
                  </div>

                  {openFaq === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-4 text-gray-400 border-t border-white/10 pt-4"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map/Location Placeholder */}
      <section className="relative px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-linear-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl" />
            <div className="relative bg-accent/90 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-blue-400" />
                Event Location
              </h3>
              <div className="aspect-video bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                <div className="text-center">
                  <span className="text-6xl mb-4 block">🏫</span>
                  <p className="text-white font-bold text-xl">IKGPTU CC Lab</p>
                  <p className="text-gray-400">Main Campus, Punjab</p>
                  <p className="text-orange-400 text-sm mt-2">
                    Exact location details will be shared with registered
                    participants
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
