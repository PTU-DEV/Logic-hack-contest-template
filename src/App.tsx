import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Rules from "./pages/Rules";
import Register from "./pages/Register";
import Timeline from "./pages/Timeline";
import Contact from "./pages/Contact";
import Fun from "./pages/Fun";
import QRHunt from "./pages/QRHunt";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-dark text-white flex flex-col">
        {/* Navbar fixed hai, isliye ye screen ke upar 'float' karega */}
        <Navbar />

        {/* MAIN FIX: Padding badha di hai taaki content niche se start ho */}
        <main className="grow pt-32 md:pt-48 lg:pt-52">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/register" element={<Register />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/fun" element={<Fun />} />
            <Route path="/qr-hunt" element={<QRHunt />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
