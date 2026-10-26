import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { getLogoUrl, PRODUCT_IMAGES, LEGAL_IMAGES } from "./src/config";
import { PrivacyPage, TermsPage } from "./src/LegalPages";

function isLegalPath() {
  if (typeof window === "undefined") return false;
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  return path === "/privacy" || path === "/privacy-policy" || path === "/terms" || path === "/terms-and-conditions";
}

// Single-file React + Tailwind mockup for Advok
// Default export is the main App component.
// Drop this into a Vite/CRA project with TailwindCSS + Framer Motion installed.

// Logo Components
function LogoA({ size = "w-12 h-12", className = "" }) {
  return (
    <motion.div
      className={`${size} rounded-full bg-black border border-gray-700 flex items-center justify-center relative overflow-hidden cursor-pointer ${className}`}
      whileHover={{
        scale: 1.45,
        transition: { type: "spring", stiffness: 300, damping: 15 },
      }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src={getLogoUrl()}
        alt="ADVOK Logo"
        className="w-3/4 h-3/4 object-contain pointer-events-none"
        onError={(e) => {
          e.target.style.display = "none";
          const next = e.target.nextElementSibling;
          if (next) next.style.display = "block";
        }}
        onLoad={(ev) => {
          const fallback = ev.target.nextElementSibling;
          if (fallback) fallback.style.display = "none";
        }}
      />
      <span className="text-2xl font-bold text-white font-system hidden" style={{ display: "none" }}>
        A
      </span>
    </motion.div>
  );
}

function LogoFull({ size = "text-lg", className = "" }) {
  return (
    <motion.div
      className={`flex items-center gap-3 ${className}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <LogoA size="w-14 h-14" />
      <motion.div
        className={`${size} font-semibold font-display tracking-wide uppercase`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        ADVOK
      </motion.div>
    </motion.div>
  );
}

function LogoText({ size = "text-2xl", className = "" }) {
  return (
    <motion.div 
      className={`${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className={`${size} font-bold font-display tracking-wide relative flex items-center group cursor-pointer`}
        whileHover={{ 
          scale: 1.05,
          transition: { 
            type: "spring", 
            stiffness: 400, 
            damping: 10 
          }
        }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Your trademarked logo with enhanced hover effects */}
        <motion.img 
          src={getLogoUrl()} 
          alt="ADVOK Logo" 
          className="h-8 w-auto object-contain transition-all duration-300"
          whileHover={{
            rotate: [0, -10, 10, 0],
            scale: 1.1,
            filter: "drop-shadow(0 0 10px rgba(255,255,255,0.5))"
          }}
          transition={{ 
            duration: 0.6,
            repeat: Infinity,
            repeatDelay: 2
          }}
        />
        
        {/* Glowing effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{
            boxShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 20px rgba(255,255,255,0.3)", "0 0 0px rgba(255,255,255,0)"]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
}

function FloatingLogo({ className = "" }) {
  return (
    <motion.div
      className={`hidden md:block fixed top-1/2 right-8 z-10 ${className} cursor-pointer`}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <motion.div
        className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center"
        animate={{
          y: [0, -10, 0],
          boxShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 20px rgba(255,255,255,0.2)", "0 0 0px rgba(255,255,255,0)"],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{
          scale: 1.2,
          backgroundColor: "rgba(255,255,255,0.2)",
          borderColor: "rgba(255,255,255,0.4)",
          transition: { duration: 0.3 },
        }}
      >
        <LogoA size="w-14 h-14" />
      </motion.div>
    </motion.div>
  );
}

// Official ADVOK Logo Component — larger, strong hover expand
function AdvokLogo({ size = "text-4xl", className = "" }) {
  return (
    <motion.div
      className={`${className} cursor-pointer`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      whileHover={{
        scale: 1.4,
        transition: { type: "spring", stiffness: 300, damping: 15 },
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div 
        className={`${size} font-bold font-display tracking-wide relative flex items-center`}
      >
        {/* Your trademarked logo with scale animation */}
        <motion.img 
          src={getLogoUrl()} 
          alt="ADVOK Logo" 
          className="h-12 w-auto object-contain"
          whileHover={{
            rotate: [0, 360],
            scale: 1.15,
            filter: "drop-shadow(0 0 15px rgba(255,255,255,0.6)) brightness(1.2)"
          }}
          transition={{ 
            duration: 1.5,
            rotate: { ease: "easeInOut" },
            scale: { type: "spring", stiffness: 400, damping: 10 }
          }}
        />
        
        {/* Pulsing glow effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Scale balance animation */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          whileHover={{
            rotate: [0, 2, -2, 0],
            transition: { duration: 1, repeat: Infinity }
          }}
        />
      </motion.div>
    </motion.div>
  );
}

// Intro: black + logo (zoom in → zoom out) → ADVOK text → logo goes to top-left → black slides up
const LOGO_CIRCLE_SIZE = 224; // intro logo size (w-56 / 14rem) — double of original
const HEADER_ICON_SIZE = 40;

function IntroOverlay({ onLogoLanded, onRevealContent, onComplete, headerLogoRef, getLogoUrl }) {
  const [phase, setPhase] = useState("logo");
  const [logoHidden, setLogoHidden] = useState(false);
  const [targetPos, setTargetPos] = useState({ x: 24 + HEADER_ICON_SIZE / 2, y: 24 + HEADER_ICON_SIZE / 2 });
  const overlayRef = useRef(null);

  // Logo zooms in then out over ~1.5s, then text phase starts
  useEffect(() => {
    const t1 = setTimeout(() => setPhase("text"), 1600);
    return () => clearTimeout(t1);
  }, []);

  useEffect(() => {
    if (phase !== "text") return;
    const tExit = setTimeout(() => {
      const el = headerLogoRef?.current;
      if (el) {
        const r = el.getBoundingClientRect();
        setTargetPos({
          x: r.left + HEADER_ICON_SIZE / 2,
          y: r.top + r.height / 2,
        });
      }
      setPhase("exit");
      onRevealContent?.();
    }, 1200);
    return () => clearTimeout(tExit);
  }, [phase, headerLogoRef, onRevealContent]);

  // Hide intro logo only after black panel has slid off (~2.55s) so logo stays visible the whole time
  useEffect(() => {
    if (phase !== "exit") return;
    const tHide = setTimeout(() => setLogoHidden(true), 2600);
    return () => clearTimeout(tHide);
  }, [phase]);

  useEffect(() => {
    if (phase !== "exit") return;
    const tLanded = setTimeout(() => onLogoLanded?.(), 850);
    return () => clearTimeout(tLanded);
  }, [phase, onLogoLanded]);

  useEffect(() => {
    if (phase !== "exit") return;
    const tDone = setTimeout(onComplete, 3200);
    return () => clearTimeout(tDone);
  }, [phase, onComplete]);

  const centerX = typeof window !== "undefined" ? window.innerWidth / 2 : 0;
  const centerY = typeof window !== "undefined" ? window.innerHeight / 2 : 0;
  const panelTransition = { duration: 2.4, delay: phase === "exit" ? 0.15 : 0, ease: [0.25, 0.46, 0.45, 0.94] };

  return (
    <motion.div
      ref={overlayRef}
      className="fixed inset-0 z-50 pointer-events-auto"
      initial={false}
      style={{ backgroundColor: phase === "exit" ? "transparent" : "#000" }}
    >
      {/* Black panel: slides UP; content below slides up with it */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-screen bg-black z-10"
        initial={{ y: 0 }}
        animate={{ y: phase === "exit" ? "-100%" : 0 }}
        transition={panelTransition}
      />

      {/* Logo flies to top-left (header position) and sits there; ADVOK fades out */}
      <motion.div
        className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none"
        initial={false}
      >
        <motion.div
          className="flex flex-col items-center justify-center absolute"
          initial={false}
          animate={
            phase === "exit"
              ? {
                  x: targetPos.x - centerX,
                  y: targetPos.y - centerY,
                  scale: HEADER_ICON_SIZE / LOGO_CIRCLE_SIZE,
                  opacity: logoHidden ? 0 : 1,
                }
              : {
                  x: 0,
                  y: 0,
                  scale: 1,
                  opacity: 1,
                }
          }
          transition={{
            duration: 0.85,
            delay: 0,
            ease: [0.25, 0.46, 0.45, 0.94],
            opacity: { duration: 0.2 },
          }}
          style={{ originX: "center", originY: "center" }}
        >
          <motion.div
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-black flex items-center justify-center relative"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: 1,
              scale: phase === "logo" ? [0.6, 1.35, 1] : 1,
              boxShadow: "none",
            }}
            transition={{
              opacity: { duration: 0.4, ease: "easeOut" },
              scale:
                phase === "logo"
                  ? { duration: 1.5, times: [0, 0.4, 1], ease: [0.25, 0.46, 0.45, 0.94] }
                  : { duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] },
            }}
          >
            <img
              src={getLogoUrl()}
              alt="ADVOK"
              className="w-3/4 h-3/4 object-contain"
              onError={(e) => {
                e.target.style.display = "none";
                const next = e.target.nextElementSibling;
                if (next) next.style.display = "block";
              }}
            />
            <span className="text-3xl font-bold text-white hidden" style={{ display: "none" }}>
              A
            </span>
          </motion.div>

          {/* ADVOK — Jaguar-style: refined condensed sans (Oswald), bold; fades out while logo moves */}
          <div className="mt-6 flex justify-center gap-[0.08em] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-intro font-semibold select-none tracking-[0.12em] uppercase">
            {"ADVOK".split("").map((letter, i) => (
              <motion.span
                key={i}
                className="inline-block"
                style={{
                  background: "linear-gradient(180deg, #e8e8e8 0%, #c8c8c8 50%, #d0d0d0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                initial={{ opacity: 0, y: 14 }}
                animate={{
                  opacity: phase === "text" || phase === "exit" ? (phase === "exit" ? 0 : 1) : 0,
                  y: phase === "text" || phase === "exit" ? 0 : 14,
                }}
                transition={{
                  opacity: {
                    duration: phase === "exit" ? 0.5 : 0.65,
                    delay: phase === "text" ? i * 0.26 : (phase === "exit" ? 0.35 : 0),
                    ease: "easeOut",
                  },
                  y: {
                    duration: 0.75,
                    delay: phase === "text" ? i * 0.26 : 0,
                    ease: [0.22, 0.8, 0.2, 1],
                  },
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function App() {
  const skipIntro = isLegalPath();
  const [introDone, setIntroDone] = useState(skipIntro);
  const [logoLanded, setLogoLanded] = useState(skipIntro);
  const [contentRevealing, setContentRevealing] = useState(skipIntro);
  const headerLogoRef = useRef(null);

  return (
    <div className="min-h-screen bg-black text-white antialiased overflow-x-hidden">
      {!introDone && (
        <IntroOverlay
          onLogoLanded={() => setLogoLanded(true)}
          onRevealContent={() => setContentRevealing(true)}
          onComplete={() => setIntroDone(true)}
          headerLogoRef={headerLogoRef}
          getLogoUrl={getLogoUrl}
        />
      )}
      <BrowserRouter>
        <ScrollToTop />
        <Header headerLogoRef={headerLogoRef} introDone={introDone} logoLanded={logoLanded} contentRevealing={contentRevealing} />
        <motion.div
          className="flex flex-col flex-1"
          initial={false}
          animate={{ y: contentRevealing ? 0 : "100%" }}
          transition={{
            duration: 2.4,
            delay: 0.15,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage contentRevealing={contentRevealing} />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/join" element={<JoinPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/terms-and-conditions" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/privacy-policy" element={<PrivacyPage />} />
            </Routes>
          </main>
          <Footer />
          <FloatingLogo />
        </motion.div>
      </BrowserRouter>
    </div>
  );
}

function HomePage({ contentRevealing }) {
  const [heroImgFailed, setHeroImgFailed] = useState(false);
  const easeOut = [0.33, 0.7, 0.2, 1];
  return (
    <>
      {/* Full-width hero — unchanged (Lady Justice / first image) */}
      <section className="relative w-full min-h-[85vh] md:min-h-[90vh] flex overflow-hidden">
        {!heroImgFailed ? (
          <motion.img
            src={LEGAL_IMAGES.hero}
            alt="Indian law — legal practice and justice"
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setHeroImgFailed(true)}
            initial={{ scale: 1.08 }}
            animate={{ scale: contentRevealing ? 1 : 1.08 }}
            transition={{ duration: 4, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
        )}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: contentRevealing ? 1 : 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        />
        <motion.div
          className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pb-16 md:pb-20 pt-20 sm:pt-24 flex flex-col justify-end min-h-[85vh] md:min-h-[90vh] text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: contentRevealing ? 1 : 0,
            y: contentRevealing ? 0 : 20,
          }}
          transition={{ duration: 0.9, delay: 0.2, ease: easeOut }}
        >
          <motion.p
            className="text-gray-300 font-text uppercase tracking-widest text-sm mb-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: contentRevealing ? 1 : 0, y: contentRevealing ? 0 : 12 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            One platform for Indian law
          </motion.p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-tight font-display text-white drop-shadow-md tracking-tight overflow-hidden">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: contentRevealing ? 1 : 0, y: contentRevealing ? 0 : 24 }}
              transition={{ duration: 0.7, delay: 0.5, ease: easeOut }}
            >
              Legal journey
            </motion.span>
            <motion.span
              className="block text-white"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: contentRevealing ? 1 : 0, y: contentRevealing ? 0 : 24 }}
              transition={{ duration: 0.7, delay: 0.7, ease: easeOut }}
            >
              starts here.
            </motion.span>
          </h1>
          <motion.p
            className="mt-5 text-gray-200 text-base md:text-lg max-w-xl font-text font-light md:max-w-2xl"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: contentRevealing ? 1 : 0, y: contentRevealing ? 0 : 14 }}
            transition={{ duration: 0.6, delay: 0.95 }}
          >
            From first consultation to final order — one platform for case management, AI-powered summaries, and secure client communication. Built for lawyers, clients, and firms across Indian law.
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link to="/product" className="inline-block bg-white text-black px-6 py-3 rounded-lg font-medium font-text shadow-lg hover:bg-gray-100 hover:shadow-xl transition-colors duration-300">
                See what we do
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16"
        initial={{ opacity: 0, y: 18 }}
        animate={{
          opacity: contentRevealing ? 1 : 0,
          y: contentRevealing ? 0 : 18,
        }}
        transition={{ duration: 0.8, delay: 0.65, ease: easeOut }}
      >
        <PlatformWhatWeDo />
        <ProductShowcase />
        <ProblemSolution />
        <Stats />
        <CTA />
      </motion.div>
    </>
  );
}

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

function ProductPage() {
  return (
    <motion.div className="max-w-6xl mx-auto px-6 py-16" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
      <motion.div variants={sectionVariants} custom={0}><Features /></motion.div>
      <motion.div variants={sectionVariants} custom={1}><ProductShowcase /></motion.div>
      <motion.div variants={sectionVariants} custom={2}><Pricing /></motion.div>
      <motion.div variants={sectionVariants} custom={3}><CTA /></motion.div>
    </motion.div>
  );
}

function AboutPage() {
  return (
    <motion.div className="max-w-6xl mx-auto px-6 py-16" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
      <motion.div variants={sectionVariants} custom={0}><AudienceTabs /></motion.div>
      <motion.div variants={sectionVariants} custom={1}><Testimonials /></motion.div>
      <motion.div variants={sectionVariants} custom={2}><CTA /></motion.div>
    </motion.div>
  );
}

function JoinPage() {
  return (
    <motion.div className="max-w-6xl mx-auto px-6 py-16" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
      <motion.div variants={sectionVariants} custom={0}><CTA /></motion.div>
      <motion.div variants={sectionVariants} custom={1}><Newsletter /></motion.div>
      <motion.div variants={sectionVariants} custom={2}><FAQ /></motion.div>
    </motion.div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Header({ headerLogoRef, introDone, logoLanded, contentRevealing }) {
  const show = logoLanded || contentRevealing;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Close mobile menu on route change or resize to desktop
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);
  useEffect(() => {
    const closeIfDesktop = () => {
      if (window.matchMedia("(min-width: 768px)").matches) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", closeIfDesktop);
    return () => window.removeEventListener("resize", closeIfDesktop);
  }, []);

  const linkClass = "relative py-2 md:py-1 font-text group md:inline-block";
  const navLinks = (
    <>
      <Link to="/product" className={linkClass} onClick={() => setMobileMenuOpen(false)}>
        <span className="group-hover:text-white transition-colors">Product</span>
        <motion.span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-[width] duration-300 md:block" layout />
      </Link>
      <Link to="/about" className={linkClass} onClick={() => setMobileMenuOpen(false)}>
        <span className="group-hover:text-white transition-colors">About</span>
        <motion.span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-[width] duration-300 md:block" layout />
      </Link>
      <Link to="/join" className={linkClass} onClick={() => setMobileMenuOpen(false)}>
        <span className="group-hover:text-white transition-colors">Join</span>
        <motion.span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-[width] duration-300 md:block" layout />
      </Link>
    </>
  );

  return (
    <motion.header
      className="sticky top-0 bg-black/90 backdrop-blur z-30 border-b border-gray-800"
      initial={false}
      animate={{
        opacity: show ? 1 : 0,
      }}
      transition={{ duration: 0.5, delay: contentRevealing ? 0.2 : 0, ease: "easeOut" }}
      style={{ visibility: show ? "visible" : "hidden" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div ref={headerLogoRef}>
          <Link to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
            <LogoA size="w-12 h-12 md:w-14 md:h-14" />
          </Link>
        </div>
        <nav className="hidden md:flex gap-6 items-center text-gray-300">
          {navLinks}
        </nav>
        <motion.button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden p-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800 transition"
          onClick={() => setMobileMenuOpen((o) => !o)}
          whileTap={{ scale: 0.95 }}
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </motion.button>
      </div>
      <motion.nav
        className="md:hidden border-t border-gray-800 overflow-hidden"
        initial={false}
        animate={{ height: mobileMenuOpen ? "auto" : 0, opacity: mobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <div className="px-4 py-4 flex flex-col gap-1 text-gray-300 bg-black/50">
          {navLinks}
        </div>
      </motion.nav>
    </motion.header>
  );
}

function CardPlaceholder({ title, subtitle }) {
  return (
    <div className="rounded-xl bg-gray-900/40 p-6 backdrop-blur-sm border border-gray-800 flex flex-col justify-between">
      <div>
        <div className="text-sm text-white font-semibold font-text">{title}</div>
        <div className="text-xs text-gray-400 mt-2 font-text">{subtitle}</div>
      </div>
      <div className="text-[10px] text-gray-500 mt-4 font-text uppercase">ADVOK mockup</div>
    </div>
  );
}

// Platform overview: what we do — for clients, lawyers, students, law firms & others (app description first)
function PlatformWhatWeDo() {
  const audiences = [
    {
      id: "clients",
      title: "For Clients",
      description: "Find verified lawyers, see your case status in one place, and get clear updates without chasing calls. Use secure messaging, access key documents when you need them, and follow timelines so you always know what happens next — from first meeting to final order.",
    },
    {
      id: "lawyers",
      title: "For Lawyers",
      description: "Run every matter from one workspace: upload and organise files, get AI-generated case summaries and key points in minutes, and talk to clients through encrypted chat. Use templates and checklists to stay court-ready, and cut paperwork so you can focus on strategy and outcomes.",
    },
    {
      id: "firms",
      title: "For Law Firms & Others",
      description: "Give your team shared workspaces, matter-based organisation, and firm-wide templates so everyone is aligned. Improve preparedness, reduce delays, and keep matters, clients, and court deadlines in one platform.",
    },
    {
      id: "students",
      title: "For Students",
      description: "Work with the same tools used in practice: organise cases, use research aids, and see how matters move from brief to hearing. Build the habits and workflows that define modern Indian legal practice while you learn.",
    },
  ];

  return (
    <section id="platform" className="mt-8 md:mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-light font-display text-gray-200 tracking-tight">What we do</h2>
        <p className="mt-4 text-gray-400 font-text text-lg max-w-2xl mx-auto">
          ADVOK is the single platform for Indian legal practice — from finding a lawyer to managing matters and staying court-ready. Here’s what we offer for every part of the ecosystem.
        </p>
      </motion.div>

      <div className="space-y-8 md:space-y-10">
        {audiences.map((audience, i) => (
          <motion.div
            key={audience.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="p-6 md:p-8 rounded-2xl bg-gray-900/40 border border-gray-800 hover:border-gray-600 hover:shadow-xl hover:shadow-black/20 transition-all duration-300"
          >
            <h3 className="text-xl md:text-2xl font-light font-display text-gray-100">{audience.title}</h3>
            <p className="mt-4 text-gray-300 font-text text-base md:text-lg max-w-3xl">{audience.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ProductShowcase() {
  const blocks = [
    {
      id: "cases",
      title: "Manage every case in one place",
      subtitle: "Upload and organise all matter-related documents in one workspace. Search and filter by date, type, or party so you find what you need in seconds — no more scattered drives or last-minute rushes before a hearing.",
      image: PRODUCT_IMAGES.cases,
      alt: "ADVOK case management — documents and folders",
    },
    {
      id: "ai",
      title: "AI that actually saves time",
      subtitle: "Get concise case summaries and key points generated from your documents in minutes. Spend less time re-reading long briefs and more time on strategy, arguments, and client conversations.",
      image: PRODUCT_IMAGES.ai,
      alt: "ADVOK AI summaries and insights",
    },
    {
      id: "chat",
      title: "Stay connected with clients",
      subtitle: "Use built-in, end-to-end encrypted messaging to send updates, share documents, and answer questions. Keep clients in the loop without switching to email or WhatsApp, and keep everything in one matter timeline.",
      image: PRODUCT_IMAGES.chat,
      alt: "ADVOK client chat — secure communication",
    },
    {
      id: "court",
      title: "Court-ready in less time",
      subtitle: "Work from templates, checklists, and matter timelines so you know what’s due and when. Walk into court prepared, reduce avoidable delays, and present your best case every time.",
      image: PRODUCT_IMAGES.court,
      alt: "ADVOK court prep and templates",
    },
  ];

  return (
    <section id="product" className="mt-24 md:mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-light font-display text-gray-200 tracking-tight">See ADVOK in action</h2>
        <p className="mt-4 text-gray-400 font-text text-lg max-w-2xl mx-auto">
          From case files to client chat and court prep — see how one platform cuts admin and gives you more time for the work that matters.
        </p>
      </motion.div>

      <div className="space-y-24 md:space-y-32">
        {blocks.map((block, i) => (
          <ProductBlock key={block.id} {...block} imageOnRight={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}

function ProductBlock({ title, subtitle, image, alt, imageOnRight }) {
  const [imgFailed, setImgFailed] = React.useState(false);
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex flex-col justify-center"
    >
      <h3 className="text-2xl md:text-3xl font-light font-display text-gray-100">{title}</h3>
      <p className="mt-4 text-gray-300 font-text text-lg max-w-xl">{subtitle}</p>
      <Link to="/join" className="mt-6 inline-flex items-center text-white font-medium font-text hover:underline group">
        Join
        <motion.span className="ml-2 inline-block" whileHover={{ x: 6 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>→</motion.span>
      </Link>
    </motion.div>
  );
  const visual = (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 1.02 }}
      className="rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/50 shadow-xl"
    >
      {!imgFailed ? (
        <img
          src={image}
          alt={alt}
          className="w-full h-auto object-cover"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <div className="aspect-video flex items-center justify-center text-gray-500 font-text text-sm p-8 text-center">
          Add <code className="bg-gray-800 px-1 rounded">{image.replace("/", "")}</code> to <code className="bg-gray-800 px-1 rounded">public/</code> for a product screenshot
        </div>
      )}
    </motion.div>
  );

  return (
    <div className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${imageOnRight ? "md:grid-flow-dense" : ""}`}>
      {imageOnRight ? (
        <>
          <div className="md:col-start-2">{content}</div>
          <div className="md:col-start-1 md:row-start-1">{visual}</div>
        </>
      ) : (
        <>
          <div>{content}</div>
          <div>{visual}</div>
        </>
      )}
    </div>
  );
}

function ProblemSolution() {
  const [imgFailed, setImgFailed] = React.useState(false);
  return (
    <section className="mt-24 md:mt-32 grid md:grid-cols-2 gap-10 items-center">
      <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h3 className="text-2xl md:text-3xl font-light font-display text-gray-200 tracking-tight">The legal system is evolving. Your tools should too.</h3>
        <p className="mt-6 text-gray-300 font-text text-lg">
          Scattered files, slow client updates, and last-minute prep cost time, trust, and outcomes. ADVOK puts case management, secure client communication, and AI-powered summaries in one place — so you spend less time on admin and more on the work that wins.
        </p>
        <ul className="mt-8 space-y-3 text-gray-300 font-text">
          <li className="flex items-center gap-3">
            <span className="text-white font-bold">•</span>
            Less paperwork and duplicate effort — more time for research and arguments.
          </li>
          <li className="flex items-center gap-3">
            <span className="text-white font-bold">•</span>
            End-to-end encrypted messaging so client conversations stay private and on-record.
          </li>
          <li className="flex items-center gap-3">
            <span className="text-white font-bold">•</span>
            Clear timelines and checklists so you and your clients are better prepared and delays drop.
          </li>
        </ul>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
        {!imgFailed ? (
          <img
            src={PRODUCT_IMAGES.problem}
            alt="ADVOK workflow — from case files to court"
            className="w-full rounded-2xl border border-gray-800 shadow-xl object-cover"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="rounded-2xl p-8 bg-gradient-to-br from-gray-900/60 to-black/40 border border-gray-800 aspect-video flex items-center justify-center">
            <p className="text-gray-500 font-text text-sm text-center">
              Add <code className="bg-gray-800 px-1 rounded">problem-solution.png</code> to <code className="bg-gray-800 px-1 rounded">public/</code> for a workflow visual
            </p>
          </div>
        )}
      </motion.div>
    </section>
  );
}

function Features() {
  const items = [
    { id: 1, title: "Streamline every case", desc: "Upload, organise, and AI-summarise matter files in one place. Search and filter so you find what you need in seconds and keep every case under control." },
    { id: 2, title: "Client relationships", desc: "Encrypted in-app messaging, timely updates, and clear matter timelines so clients stay informed and you keep everything on record in one thread." },
    { id: 3, title: "Court preparedness", desc: "Templates, checklists, and matter-based timelines so you know what’s due when and walk in prepared — with fewer delays and better outcomes." },
    { id: 4, title: "Professional visibility", desc: "Build a profile that helps clients and referring lawyers find you, and keep your practice visible where it matters." },
  ];

  return (
    <section id="features" className="mt-24 md:mt-32">
      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h3 className="text-2xl md:text-3xl font-light font-display text-gray-200 tracking-tight">Built for how you work</h3>
        <p className="text-gray-400 mt-4 max-w-2xl font-text text-lg">Four pillars that cut admin, keep matters organised, and help you focus on the work that wins cases and builds trust.</p>
      </motion.div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it) => (
          <motion.div
            key={it.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="p-6 md:p-8 rounded-2xl bg-gray-900/30 border border-gray-800 hover:border-gray-700 hover:shadow-lg transition-all duration-300"
          >
            <div className="text-white font-semibold font-text text-lg md:text-xl">{it.title}</div>
            <div className="mt-3 text-gray-300 font-text text-base">{it.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function AudienceTabs() {
  const tabs = [
    { id: "lawyers", title: "Lawyers", content: "A secure place for all matter documents, AI-generated case summaries, reusable templates, and a profile that helps clients and referring lawyers find you. Less admin, more time for practice." },
    { id: "clients", title: "Clients", content: "Find verified lawyers, track your case in one place, and get clear updates via secure messaging. See key documents and timelines so you’re never left wondering what happens next." },
    { id: "courts", title: "Courts", content: "Better-prepared advocates, clearer filings, and matter timelines that support fewer adjournments and smoother hearings for everyone." },
  ];

  const [active, setActive] = React.useState("lawyers");

  return (
    <section id="audience" className="mt-16">
      <h3 className="text-modern-3xl font-light font-display text-gray-200 tracking-tight">Benefits by Audience</h3>
      <div className="mt-4">
        <div className="flex gap-3">
          {tabs.map((t) => (
            <button key={t.id} onClick={() => setActive(t.id)} className={`px-6 py-3 rounded-full text-sm font-text transition-all duration-300 ${active === t.id ? "bg-white text-black font-semibold" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}>
              {t.title}
            </button>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mt-8 rounded-xl p-8 bg-gray-900/30 border border-gray-800">
          <div className="text-white font-semibold capitalize font-text text-modern-xl">{tabs.find((t) => t.id === active).title}</div>
          <div className="mt-4 text-gray-300 font-text text-modern-base">{tabs.find((t) => t.id === active).content}</div>
          <div className="mt-6 text-sm text-gray-400 font-text uppercase">Outcome: improved efficiency & trust</div>
        </motion.div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="mt-16 rounded-2xl p-10 bg-gradient-to-r from-gray-900 to-black border border-gray-800 relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <LogoA size="w-24 h-24" className="mx-auto mb-4" />
        </motion.div>
        <h3 className="text-modern-3xl font-light font-display text-gray-200 tracking-tight">Join Our Early Network of Legal Professionals</h3>
        <p className="mt-6 text-gray-300 font-text text-modern-lg">Get priority onboarding, early access to new features before public release, and a direct say in what we build next. Join lawyers, firms, and students who are already shaping the future of legal practice in India.</p>
        <div className="mt-8 flex justify-center gap-6 flex-wrap">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link to="/join" className="inline-block px-8 py-4 rounded-lg bg-white text-black font-semibold font-text hover:bg-gray-100 transition-colors duration-300 hover:shadow-xl">Register at advokus.com</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <a href="mailto:voxonconsultingbl@gmail.com" className="inline-block px-8 py-4 rounded-lg border border-gray-700 text-gray-300 hover:text-white transition-colors duration-300 font-text">Contact Us</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { number: "500+", label: "Legal Professionals" },
    { number: "10,000+", label: "Cases Managed" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "50%", label: "Time Saved" },
  ];

  return (
    <section className="mt-20 py-16 bg-gradient-to-r from-gray-900 to-black rounded-2xl relative overflow-hidden">
      {/* Background Logo */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <AdvokLogo size="text-8xl" />
      </motion.div>
      
      <div className="text-center mb-12 relative z-10">
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <LogoA size="w-20 h-20" className="mx-auto mb-4" />
        </motion.div>
        <h3 className="text-modern-3xl font-light font-display text-gray-200 tracking-tight mb-4">Trusted by Legal Professionals</h3>
        <p className="text-gray-400 font-text text-modern-lg max-w-2xl mx-auto">Join thousands of lawyers who have transformed their practice with ADVOK</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.12, type: "spring", stiffness: 100, damping: 15 }}
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <div className="text-modern-4xl font-light font-display text-gray-100 mb-2">{stat.number}</div>
            <div className="text-gray-400 font-text text-modern-base">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Criminal Defense Attorney",
      content: "ADVOK has revolutionized how I manage my cases. The AI summaries save me hours every week, and my clients love the transparent communication.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Corporate Lawyer",
      content: "The document management system is incredible. I can find any case file in seconds, and the templates have standardized our entire practice.",
      rating: 5
    },
    {
      name: "Dr. Priya Sharma",
      role: "Family Law Specialist",
      content: "My clients appreciate the real-time updates and secure communication. It's built trust and improved our relationships significantly.",
      rating: 5
    }
  ];

  return (
    <section className="mt-20">
      <div className="text-center mb-12">
        <h3 className="text-modern-3xl font-light font-display text-gray-200 tracking-tight mb-4">What Legal Professionals Say</h3>
        <p className="text-gray-400 font-text text-modern-lg">Real feedback from lawyers who use ADVOK daily</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.4)" }}
            className="p-8 rounded-2xl bg-gray-900/30 border border-gray-800"
          >
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <p className="text-gray-300 font-text text-modern-base mb-6 leading-relaxed">"{testimonial.content}"</p>
            <div>
              <div className="font-semibold font-text text-modern-base text-white">{testimonial.name}</div>
              <div className="text-gray-400 font-text text-modern-sm">{testimonial.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "Forever",
      description: "Perfect for solo practitioners getting started",
      features: [
        "Up to 10 cases",
        "Basic document storage",
        "Email support",
        "Standard templates"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "₹2,999",
      period: "per month",
      description: "Ideal for growing law firms",
      features: [
        "Unlimited cases",
        "AI-powered summaries",
        "Advanced templates",
        "Priority support",
        "Client portal access",
        "Analytics dashboard"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large law firms and organizations",
      features: [
        "Everything in Professional",
        "Custom integrations",
        "Dedicated account manager",
        "Advanced security",
        "Custom branding",
        "API access"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section className="mt-20">
      <div className="text-center mb-12">
        <h3 className="text-modern-3xl font-light font-display text-gray-200 tracking-tight mb-4">Simple, Transparent Pricing</h3>
        <p className="text-gray-400 font-text text-modern-lg">Choose the plan that fits your practice</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className={`p-8 rounded-2xl border-2 ${
              plan.popular 
                ? 'border-white bg-gray-900/50' 
                : 'border-gray-800 bg-gray-900/30'
            } relative`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-white text-black px-4 py-1 rounded-full text-sm font-text font-semibold">
                  Most Popular
                </span>
              </div>
            )}
            
            <div className="text-center mb-6">
              <h4 className="text-modern-xl font-bold font-text text-white mb-2">{plan.name}</h4>
              <div className="text-modern-3xl font-light font-display text-gray-100 mb-1">{plan.price}</div>
              <div className="text-gray-400 font-text text-modern-sm">{plan.period}</div>
              <p className="text-gray-300 font-text text-modern-sm mt-3">{plan.description}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-gray-300 font-text text-modern-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <button className={`w-full py-3 rounded-lg font-text font-semibold transition-all duration-300 ${
              plan.popular
                ? 'bg-white text-black hover:bg-gray-100'
                : 'border border-gray-700 text-gray-300 hover:text-white hover:border-gray-600'
            }`}>
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = React.useState(0);

  const faqs = [
    {
      question: "How does ADVOK's AI case summarization work?",
      answer: "Our AI analyzes your case documents and automatically generates concise summaries highlighting key facts, legal issues, and important dates. This saves you hours of manual review time while ensuring nothing important is missed."
    },
    {
      question: "Is my client data secure on ADVOK?",
      answer: "Absolutely. We use end-to-end encryption for all communications and documents. Our platform is SOC 2 compliant and follows the highest security standards in the legal industry."
    },
    {
      question: "Can I integrate ADVOK with my existing case management system?",
      answer: "Yes, ADVOK offers API integrations with most popular case management systems. Our Enterprise plan includes custom integration support to ensure seamless workflow."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer email support for all users, priority support for Professional plan subscribers, and dedicated account management for Enterprise customers. Our team includes legal professionals who understand your needs."
    },
    {
      question: "Can I try ADVOK before committing to a paid plan?",
      answer: "Yes! Our Professional plan comes with a 14-day free trial, and our Starter plan is free forever. You can upgrade or downgrade at any time."
    }
  ];

  return (
    <section className="mt-20">
      <div className="text-center mb-12">
        <h3 className="text-modern-3xl font-light font-display text-gray-200 tracking-tight mb-4">Frequently Asked Questions</h3>
        <p className="text-gray-400 font-text text-modern-lg">Everything you need to know about ADVOK</p>
      </div>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="border-b border-gray-800 last:border-b-0"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              className="w-full py-6 text-left flex items-center justify-between hover:text-gray-300 transition"
            >
              <span className="font-text text-modern-lg font-semibold">{faq.question}</span>
              <span className={`text-2xl transition-transform ${openIndex === index ? 'rotate-45' : ''}`}>
                +
              </span>
            </button>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="pb-6"
              >
                <p className="text-gray-300 font-text text-modern-base leading-relaxed">{faq.answer}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = React.useState('');

  return (
    <section className="mt-20 py-16 bg-gradient-to-r from-gray-900 to-black rounded-2xl">
      <div className="text-center max-w-2xl mx-auto">
        <h3 className="text-modern-3xl font-light font-display text-gray-200 tracking-tight mb-4">Stay Updated</h3>
        <p className="text-gray-400 font-text text-modern-lg mb-8">
          Get the latest updates on new features, legal industry insights, and platform improvements.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 font-text focus:outline-none focus:border-white transition"
          />
          <button className="px-6 py-3 bg-white text-black rounded-lg font-text font-semibold hover:bg-gray-100 transition">
            Subscribe
          </button>
        </div>
        
        <p className="text-gray-500 font-text text-modern-sm mt-4">
          No spam. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}

// APKDownload section removed now that app is live on major app stores.

function Footer() {
  const externalLinks = [
    { href: "https://advokus.com", label: "advokus.com" },
    { href: "mailto:voxonconsultingbl@gmail.com", label: "voxonconsultingbl@gmail.com" },
  ];
  const legalLinks = [
    { to: "/privacy", label: "Privacy Policy" },
    { to: "/terms", label: "Terms and Conditions" },
  ];
  return (
    <motion.footer
      className="mt-16 border-t border-gray-800 py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 text-gray-400 flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.div className="flex items-center gap-4 text-center md:text-left" whileHover={{ scale: 1.02 }}>
          <LogoA size="w-12 h-12" />
          <div className="font-text text-modern-sm">© {new Date().getFullYear()} ADVOK — All rights reserved.</div>
        </motion.div>
        <div className="flex flex-wrap gap-4 md:gap-6 items-center justify-center md:justify-end">
          {legalLinks.map((link, i) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -2 }}
            >
              <Link to={link.to} className="text-gray-400 hover:text-white transition font-text text-modern-sm">
                {link.label}
              </Link>
            </motion.div>
          ))}
          {externalLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="text-gray-400 hover:text-white transition font-text text-modern-sm"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (legalLinks.length + i) * 0.08 }}
              whileHover={{ y: -2 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
