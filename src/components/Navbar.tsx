import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/rules", label: "Rules" },
    { path: "/timeline", label: "Timeline" },
    { path: "/register", label: "Register" },
    { path: "/qr-hunt", label: "QR Hunt" },
    { path: "/fun", label: "Fun Zone" },
    { path: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      if (currentY > lastScrollY.current && currentY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: hidden && !isOpen ? -200 : 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-50 mb-32 ${scrolled ? "bg-black/95 backdrop-blur-xl shadow-2xl shadow-orange-500/10" : "bg-black/70 backdrop-blur-md"
          }`}
      >
        <div className="h-0.75 w-full bg-linear-to-r from-orange-500 via-yellow-400 to-green-500" />

        <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24 md:h-28">

            {/* LEFT: Logo Section */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
              <motion.div className="relative" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-linear-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/50">
                  <Code className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-yellow-400 animate-pulse" />
              </motion.div>
              <div className="flex items-center select-none font-black text-xl md:text-2xl">
                <span className="bg-linear-to-r from-orange-500 via-yellow-400 to-green-500 bg-clip-text text-transparent">LOGIC</span>
                <span className="text-white ml-1">LOOT</span>
              </div>
            </Link>

            {/* CENTRE: Navigation Links with Bigger Hover Shapes */}
            <div className="hidden lg:grid grid-cols-4 gap-x-12 gap-y-4 px-10 flex-1 justify-center max-w-3xl mx-auto">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path}>
                  <motion.div
                    /* INCREASED HOVER/ACTIVE BOX SIZE: px-6 py-2.5 instead of px-4 py-2 */
                    className={`relative px-6 py-2.5 rounded-xl text-sm font-bold text-center whitespace-nowrap transition-colors ${location.pathname === item.path ? "text-white" : "text-gray-400 hover:text-white"
                      }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="activeDesktop"
                        className="absolute inset-0 bg-orange-500/20 rounded-xl border border-orange-500/40"
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* RIGHT: Optimized Register Button */}
            <div className="hidden lg:flex shrink-0 items-center justify-end">
              <Link to="/register">
                <motion.button
                  /* BALANCED PADDING AND TEXT SIZE: px-10 py-4 and text-lg */
                  className="px-10 py-4 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full font-black text-white text-lg tracking-widest shadow-lg shadow-orange-500/40 hover:shadow-orange-500/70 transition-all whitespace-nowrap border-2 border-white/10"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(249,115,22,0.6)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  REGISTER NOW
                </motion.button>
              </Link>
            </div>

            <motion.button className="lg:hidden p-2.5 text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md lg:hidden" onClick={() => setIsOpen(false)} />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} className="fixed right-0 top-0 h-full w-full sm:w-87.5 z-50 bg-dark border-l border-orange-500/20 lg:hidden shadow-2xl">
              <div className="flex items-center justify-between p-6 border-b border-white/10 text-white font-black text-lg">
                <span>LOGIC LOOT</span>
                <button onClick={() => setIsOpen(false)}><X /></button>
              </div>
              <div className="px-4 py-6">
                {navItems.map((item) => (
                  <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className={`flex items-center gap-4 px-4 py-4 rounded-xl mb-2 ${location.pathname === item.path ? "bg-orange-500/20 text-white" : "text-gray-400"}`}>
                    <span className="font-bold">{item.label}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;