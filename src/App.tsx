import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  XCircle,
  Shield,
  Award,
  Building2,
  Droplet,
  Heart,
  ChevronDown,
  MessageCircle,
  Instagram,
  Facebook,
  Play,
  Zap,
  Users,
  User,
  Pill,
  History,
  Sun
} from 'lucide-react';
import { AuroraBackground } from './components/ui/aurora-background';
import { Timeline } from './components/ui/timeline';
import { AnimatedTestimonials } from './components/ui/animated-testimonials';
import { GlareCard } from './components/ui/glare-card';
import { GlowingEffect } from './components/ui/glowing-effect';

function App() {
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'auto'
      });
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Does it hurt?",
      answer: "You'll be fully numbed before treatment. Most people describe it as a warm, tingling feeling rather than pain."
    },
    {
      question: "How long will I look swollen?",
      answer: "Swelling peaks on Day 2, especially under the eyes. By Day 5, dots begin to fall away naturally."
    },
    {
      question: "When can I wear makeup again?",
      answer: "Usually around Day 7, once the surface is fully healed."
    },
    {
      question: "How long do results last?",
      answer: "Results typically last 2–3 years depending on your skin and lifestyle."
    },
    {
      question: "Is it safe near the eyes?",
      answer: "Yes, when performed by a trained practitioner using a medical-grade device. It's a controlled, superficial treatment, not surgery."
    },
    {
      question: "Can I go to work after?",
      answer: "You can, but expect visible dots and mild swelling for several days — most clients prefer to schedule around their time off."
    }
  ];


  const healingTimeline = [
    { day: "Pre-Treatment", description: "Full consultation, medical history review, and pigmentation risk screening. We assess your skin and ensure plasma treatment is safe and suitable for you.", image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansx1VNHZYj7ghxUT0Ry8DfXk9KamOCNAuW12ML" },
    { day: "Treatment", description: "Area is fully numbed before we begin. The plasma pen creates precise micro-points on the skin surface. You'll feel warmth, not pain. Treatment typically takes 30-60 minutes depending on the area.", image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplans7PxdNs38MLZ8BjbFlapw42zWhdu7D1XryRQI" },
    { day: "Day 1", description: "Treatment complete. Skin feels warm and tight. Small dots are visible where the plasma contacted the skin. Mild swelling begins.", image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansVJQl3YsFVUwgoZMhOsNaYPvRxcu28A0rf1b5" },
    { day: "Day 2", description: "Swelling peaks — most visible under eyes. This is completely normal and expected. Dots darken slightly as the healing process begins.", image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansVRjfzCsFVUwgoZMhOsNaYPvRxcu28A0rf1b5" },
    { day: "Day 3–4", description: "Swelling eases significantly. Tiny dots darken further and begin to crust. Avoid picking or scratching — let them fall naturally.", image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansLZKh1t8cEpuNyB4c5UP1OD9z8GXJlTsjiKSL" },
    { day: "Day 5–6", description: "Dots fall off naturally. Redness begins to fade. Skin underneath is pink and new. Continue following aftercare instructions carefully.", image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansB3LukPXAT70DbI3p4EqW1ve6ijGVXNYd8hwf" },
    { day: "Day 7+", description: "Skin tone evens out, light makeup OK. Healing progresses beautifully. Collagen production continues beneath the surface for weeks to come.", image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansmHIdXGEvIL2Qu3fNjFstHoVDamzgMXZvnwb1" }
  ];


  return (
    <div className="min-h-screen bg-white">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isHeaderScrolled
            ? 'bg-black/95 backdrop-blur-xl shadow-2xl shadow-teal-500/10 py-4'
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10">
              <img
                src="https://820i9wpaqi.ufs.sh/f/PwwcUidplans0iqVKkBZmf2arIMiUH3nS4jP6K8OLs0thCzV"
                alt="Rhi's Aesthetics Logo"
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className={`text-lg sm:text-2xl font-bold transition-colors duration-300 ${isHeaderScrolled ? 'text-white' : 'text-black'}`}>
              Rhi's Aesthetics
            </span>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {['how-it-works', 'results', 'timeline', 'pricing', 'about', 'faqs'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`relative text-sm font-medium uppercase tracking-wider transition-colors duration-300 group ${
                  isHeaderScrolled ? 'text-white/80 hover:text-teal-400' : 'text-black/80 hover:text-teal-600'
                }`}
              >
                {section.split('-').join(' ')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <a
              href="https://wa.me/441234567890"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 sm:p-2.5 rounded-full transition-all duration-300 ${
                isHeaderScrolled
                  ? 'text-teal-400 hover:bg-teal-400/10 hover:scale-110'
                  : 'text-black hover:bg-black/10 hover:scale-110'
              }`}
            >
              <MessageCircle className="w-5 sm:w-6 h-5 sm:h-6" />
            </a>
            <button
              onClick={() => scrollToSection('cta')}
              className="relative bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:from-teal-400 hover:to-teal-500 transition-all duration-300 uppercase text-xs tracking-wider shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 hover:scale-105 overflow-hidden group"
            >
              <span className="relative z-10">Book Now</span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
        </div>
      </header>

      <AuroraBackground className="relative min-h-screen flex items-center overflow-hidden bg-white">
        <div className="hero-content max-w-7xl mx-auto px-4 sm:px-6 pt-32 sm:pt-48 pb-20 sm:pb-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 fade-in-up text-center lg:text-left">
              <div className="inline-block">
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 rounded-full text-teal-300 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                  Non-Surgical Skin Tightening
                </span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] text-black"
              >
                Doctor-Led <span className="text-teal-600">Plasma Fibroblast</span> in Southampton
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
                className="text-lg sm:text-xl lg:text-2xl text-black/80 leading-relaxed font-light"
              >
                Doctor-led, trusted by 300+ women in Southampton for safe, natural skin tightening.
                <span className="block mt-3 text-black/70">
                  Professional plasma fibroblast treatments delivering proven results without surgery, backed by medical expertise and a commitment to your safety.
                </span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-5 pt-4 sm:pt-6 justify-center lg:justify-start"
              >
                <button
                  onClick={() => scrollToSection('cta')}
                  className="group relative bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:from-teal-400 hover:to-teal-500 transition-all duration-500 flex items-center justify-center space-x-3 shadow-2xl hover:shadow-teal-400/50 hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center space-x-3">
                    <Calendar className="w-5 sm:w-6 h-5 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Book Consultation</span>
                  </span>
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
              className="relative fade-in mt-6"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-teal-600/20 blur-3xl rounded-full"></div>
              <div className="relative rounded-3xl overflow-hidden">
                <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-2xl aspect-[4/3] flex items-center justify-center overflow-hidden relative">
                  <img
                    src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansZkeOPd6XwJuImFfqiz86x7V3CyK2odlaTv5P"
                    alt="Rhi - Aesthetic Practitioner"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </AuroraBackground>

      <section id="trust-strip" className="bg-white py-12 sm:py-20 px-4 sm:px-6 border-t border-teal-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-20">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
                Real Results,{' '}
                <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                  Real Transformations
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-black/70">Witness the power of precision plasma treatments</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-7xl mx-auto px-2 sm:px-6">
              <GlareCard className="relative w-[160px] sm:w-[280px] lg:w-[260px]">
                <img
                  className="h-full w-full absolute inset-0 object-cover opacity-90"
                  src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansgXnFmzy5kj61DYzc70ZnwdPfCoh3IRx4Amiu"
                  alt="Skin treatment result"
                  loading="lazy"
                />
              </GlareCard>
              <GlareCard className="relative w-[160px] sm:w-[280px] lg:w-[260px]">
                <img
                  className="h-full w-full absolute inset-0 object-cover opacity-90"
                  src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansJ3To3ecVXzGmdTHBK2gaqowhD8ubcMpkWnA7"
                  alt="Plasma pen treatment"
                  loading="lazy"
                />
              </GlareCard>
              <GlareCard className="relative w-[160px] sm:w-[280px] lg:w-[260px]">
                <img
                  className="h-full w-full absolute inset-0 object-cover opacity-90"
                  src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansnc4JjmIeeKuJpWcTySUNLz4R0I8Vw7fZ1G2k"
                  alt="Treatment room"
                  loading="lazy"
                />
              </GlareCard>
              <GlareCard className="relative w-[160px] sm:w-[280px] lg:w-[260px]">
                <img
                  className="h-full w-full absolute inset-0 object-cover opacity-90"
                  src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansP2YVCbplansMeUbGIOLF6SBXiAE1CKD5xpJ0"
                  alt="Natural Lifting Results"
                  loading="lazy"
                />
              </GlareCard>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {[
              { icon: Award, text: "Qualified Aesthetic Practitioner" },
              { icon: Droplet, text: "Medical-grade Plasma IQ Device" },
              { icon: Shield, text: "Registered & Insured Clinic" },
              { icon: MapPin, text: "Located in Southampton" }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-teal-50 to-white p-4 sm:p-8 rounded-2xl border border-teal-200 hover:border-teal-500/50 transition-all duration-500 hover-lift text-center space-y-3 sm:space-y-4 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-teal-500/0 group-hover:from-teal-500/10 group-hover:to-teal-500/5 transition-all duration-500"></div>
                <item.icon className="w-10 sm:w-14 h-10 sm:h-14 text-teal-600 mx-auto relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                <p className="font-semibold text-sm sm:text-base text-black relative z-10 leading-tight">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-teal-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.05),transparent_50%)]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="inline-block">
                <span className="px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full text-teal-700 text-xs sm:text-sm font-bold uppercase tracking-wider">
                  Meet Rhi
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.2] bg-gradient-to-r from-black via-teal-900 to-black bg-clip-text text-transparent pb-2">
                You're not crazy for wanting something that actually works.
              </h2>

              <div className="space-y-5 text-base sm:text-lg text-black/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                <p>
                  You've tried facials and creams that felt relaxing but changed nothing. Every mirror reminds you — you look tired even when you're not.
                </p>
                <p>
                  Surgery feels too much. "Miracle creams" seem too fake. You just want a safe, proven way to tighten the skin you already have.
                </p>
                <p className="font-semibold text-teal-700 text-lg sm:text-xl">
                  That's exactly what plasma fibroblast offers — real results, without surgery, backed by medical expertise.
                </p>
              </div>

              <button
                onClick={() => scrollToSection('cta')}
                className="relative bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:from-teal-400 hover:to-teal-500 transition-all duration-500 inline-flex items-center justify-center space-x-3 shadow-2xl hover:shadow-teal-400/50 hover:scale-105 uppercase tracking-wide overflow-hidden group"
              >
                <span className="relative z-10 flex items-center space-x-3">
                  <Calendar className="w-5 sm:w-6 h-5 sm:h-6" />
                  <span>Book Now</span>
                </span>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-teal-500/20 to-teal-600/20 blur-3xl rounded-full"></div>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl shadow-teal-500/20">
                  <div className="aspect-[3/4] overflow-hidden relative group">
                    <img
                      src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansRdrLHs1NnPqXUigWtzfTd60QMsIbeE2vVLYu"
                      alt="Rhi - Aesthetic Practitioner"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                      <div className="mb-4 inline-block px-4 py-1.5 bg-teal-500/90 backdrop-blur-sm rounded-full">
                        <p className="text-xs sm:text-sm font-bold">Rhi • Qualified Aesthetic Practitioner</p>
                      </div>
                      <p className="text-xs sm:text-sm leading-relaxed mb-3">
                        "I started this clinic because I was tired of people being misled by beauty promises that weren't real."
                      </p>
                      <p className="text-xs sm:text-sm leading-relaxed font-semibold">
                        My goal: natural, safe, and lasting results that you'll enjoy forever ❤️
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="bg-white py-12 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-600 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 sm:mb-6">
              Proven Results
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-black mb-4 sm:mb-6">
              Real Results
            </h2>
            <p className="text-base sm:text-xl text-black/70 max-w-3xl mx-auto">
              Consistent lighting, real clients, visible transformation
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {[
              { area: "Upper Eyelids", weeks: "6 Weeks", name: "Sarah, 48" },
              { area: "Under-Eye Crepiness", weeks: "8 Weeks", name: "Michelle, 52" },
              { area: "Smile Lines", weeks: "10 Weeks", name: "Emma, 45" },
              { area: "Neck Lift", weeks: "12 Weeks", name: "Janet, 56" },
              { area: "Crow's Feet", weeks: "8 Weeks", name: "Lisa, 43" },
              { area: "Upper Lip Lines", weeks: "6 Weeks", name: "Rebecca, 50" }
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-teal-50 to-white rounded-2xl sm:rounded-3xl overflow-hidden border border-teal-200 hover:border-teal-500/50 hover-lift"
              >
                <div className="relative bg-gradient-to-br from-teal-100 to-teal-50 aspect-[4/3] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center opacity-20"></div>
                  <div className="relative text-center bg-black/80 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-xl">
                    <Play className="w-8 sm:w-12 h-8 sm:h-12 text-teal-400 mx-auto mb-2" />
                    <p className="font-semibold text-sm sm:text-lg text-white">Before/After</p>
                    <p className="text-xs sm:text-sm text-teal-300">{item.area}</p>
                  </div>
                </div>
                <div className="p-4 sm:p-6 bg-gradient-to-br from-white to-teal-50">
                  <p className="font-bold text-teal-600 mb-2 sm:mb-3 text-sm sm:text-lg">{item.area} — {item.weeks}</p>
                  <p className="text-xs sm:text-sm text-black/70 italic leading-relaxed">
                    "{item.name} — 'I was nervous at first. By week {item.weeks.split(' ')[0]}, I couldn't believe how smooth my eyes looked.'"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-white py-12 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-20">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-600 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 sm:mb-6">
              The Process
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-black mb-4 sm:mb-6">
              How It Works
            </h2>
            <p className="text-base sm:text-xl text-black/70 max-w-3xl mx-auto font-light">
              Three simple steps to naturally tighten and lift your skin
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Zap,
                title: "Precision Plasma",
                description: "A tiny plasma arc creates micro-points on the skin surface, triggering your fibroblasts — the collagen-building cells — to wake up and rebuild elasticity.",
                number: "01",
                imagePlaceholder: true
              },
              {
                icon: Heart,
                title: "Controlled Healing",
                description: "Over a few days, the skin naturally contracts and tightens. Those small dots fade as new collagen strengthens beneath.",
                number: "02",
                imagePlaceholder: true
              },
              {
                icon: Heart,
                title: "Natural Tightening",
                description: "In 6–12 weeks, your skin looks smoother, lifted, and rested — without injections or surgery.",
                number: "03",
                imagePlaceholder: true
              }
            ].map((step, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-teal-50 to-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-teal-200 hover:border-teal-500/50 transition-all duration-500 hover-lift overflow-visible"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute -top-4 -right-4 text-6xl sm:text-7xl font-black text-teal-500/20 group-hover:text-teal-500/30 transition-colors duration-500 select-none z-0">
                  {step.number}
                </div>

                <div className="relative z-10 space-y-4 sm:space-y-6">
                  <div className="bg-gradient-to-br from-teal-100 to-teal-50 rounded-2xl aspect-video flex items-center justify-center border-2 border-teal-200 overflow-hidden relative mb-4">
                    <div className="text-center">
                      <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mx-auto flex items-center justify-center mb-2">
                        <step.icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                      </div>
                      <p className="text-xs sm:text-sm text-teal-600 font-medium">Image Placeholder</p>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-black">{step.title}</h3>
                  <p className="text-sm sm:text-base text-black/70 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 bg-gradient-to-r from-teal-50 to-teal-100/50 border border-teal-500/20 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto text-center">
            <p className="text-lg sm:text-xl text-black">
              <strong className="text-teal-600 font-bold">You'll feel warmth, not pain</strong> — we fully numb the area beforehand.
            </p>
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <button
              onClick={() => scrollToSection('cta')}
              className="relative bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:from-teal-400 hover:to-teal-500 transition-all duration-500 inline-flex items-center justify-center space-x-3 shadow-2xl hover:shadow-teal-400/50 hover:scale-105 uppercase tracking-wide overflow-hidden group"
            >
              <span className="relative z-10 flex items-center space-x-3">
                <Calendar className="w-5 sm:w-6 h-5 sm:h-6" />
                <span>Book Now</span>
              </span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
        </div>
      </section>

      <section id="timeline" className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <Timeline data={healingTimeline.map((item) => ({
          title: item.day,
          content: (
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl overflow-hidden border-2 border-teal-200 shadow-lg aspect-[4/5]">
                <img src={item.image} alt={item.day} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-6 sm:p-8 border-2 border-teal-200 shadow-lg flex items-center aspect-[4/5]">
                <p className="text-sm sm:text-lg text-black/80 leading-relaxed">{item.description}</p>
              </div>
            </div>
          )
        }))} />

        <div className="max-w-6xl mx-auto mt-12 sm:mt-16">
          <div className="relative bg-white border-4 border-teal-500 text-black rounded-3xl p-8 sm:p-12 text-center shadow-xl overflow-hidden">
            <div className="absolute top-0 left-0 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-teal-600/10 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 bg-teal-500 rounded-2xl mb-6 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 sm:w-10 h-8 sm:h-10 text-white">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black mb-4 text-teal-900">Complete Aftercare Support</h3>
              <p className="text-base sm:text-lg mb-8 leading-relaxed text-black/80 max-w-2xl mx-auto">
                Every client receives a detailed aftercare PDF — including what to expect, what to avoid, and how to protect your results.
              </p>

              <button
                onClick={() => scrollToSection('cta')}
                className="relative bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:from-teal-400 hover:to-teal-500 transition-all duration-500 inline-flex items-center justify-center space-x-3 shadow-2xl hover:scale-105 uppercase tracking-wide overflow-hidden group"
              >
                <span className="relative z-10 flex items-center space-x-3">
                  <Calendar className="w-5 sm:w-6 h-5 sm:h-6" />
                  <span>Book Now</span>
                </span>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-black mb-4 sm:mb-6">
              What Our Customers Say
            </h2>
          </div>

          <div className="relative z-0">
            <AnimatedTestimonials
              testimonials={[
                {
                  quote: "I was terrified before my treatment, but Rhi explained everything. The swelling lasted 3 days, dots gone in a week, results by week 8 — incredible.",
                  name: "Christene",
                  designation: "Age 46, Southampton",
                  src: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansYITsSXcmMa7NBSypFmPq9WJnje0DE4gr8R1A"
                },
                {
                  quote: "I'd wasted money on creams and gadgets. This actually worked. My eyelids feel lifted and I look awake again.",
                  name: "Sophie",
                  designation: "Age 52, Southampton",
                  src: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansfkweXWDJuMR1SytWIdgA9xsk8eLD2ZPNqzrf"
                },
                {
                  quote: "The honesty and care were unmatched. No fake promises, just results. I finally feel confident again.",
                  name: "Karen",
                  designation: "Age 40, Southampton",
                  src: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansgBUEXKy5kj61DYzc70ZnwdPfCoh3IRx4Amiu"
                },
                {
                  quote: "Professional, safe, and the results speak for themselves. Best decision I've made for my skin in years.",
                  name: "Michelle",
                  designation: "Age 48, Southampton",
                  src: "https://820i9wpaqi.ufs.sh/f/PwwcUidplans4rxsHjZlV9LZ7rOzhpUH0MiuGACRPD3jNeQk"
                },
                {
                  quote: "Rhi's expertise gave me confidence from day one. The healing was exactly as described, and my skin looks naturally refreshed.",
                  name: "Emma",
                  designation: "Age 55, Southampton",
                  src: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansOWLi5VAwPqZhND8kpUK40TVgGEMsnxv2atlY"
                },
                {
                  quote: "The results exceeded my expectations. My skin feels tighter and looks years younger without any surgery.",
                  name: "Rebecca",
                  designation: "Age 50, Southampton",
                  src: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansDBrqUMFlbUg7HiPYe8pNhaWf5E4dG26xVuXJ"
                },
                {
                  quote: "I was skeptical at first, but the transformation is real. My friends can't believe how natural it looks.",
                  name: "Lisa",
                  designation: "Age 43, Southampton",
                  src: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansn1adYIeeKuJpWcTySUNLz4R0I8Vw7fZ1G2kg"
                },
                {
                  quote: "The entire process was professional and caring. I feel like I've turned back the clock on my skin aging.",
                  name: "Janet",
                  designation: "Age 56, Southampton",
                  src: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansLiieE7cEpuNyB4c5UP1OD9z8GXJlTsjiKSLw"
                },
                {
                  quote: "Best investment in myself. The confidence boost is incredible and the results keep getting better.",
                  name: "Sarah",
                  designation: "Age 48, Southampton",
                  src: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansLZKjaqycEpuNyB4c5UP1OD9z8GXJlTsjiKSL"
                },
                {
                  quote: "I wish I had done this sooner. The care and attention to detail made all the difference in my results.",
                  name: "Amanda",
                  designation: "Age 51, Southampton",
                  src: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansyLPATlSnOIJPwhi3Q9WsA61ykCl5eRHLYpVS"
                }
              ]}
              autoplay={true}
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-center mb-12 sm:mb-20">
            Is This Right For You?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-10">
            <div className="relative bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-2xl sm:rounded-3xl p-6 sm:p-10 border-2 border-teal-500 overflow-hidden group hover-lift">
              <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-teal-500/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6 sm:mb-8">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-teal-900">Perfect For You If:</h3>
                </div>

                <ul className="space-y-4 sm:space-y-5">
                  {[
                    "You're noticing sagging or loose eyelid skin",
                    "You want results without surgery or filler",
                    "You're realistic about 5–7 days of healing",
                    "You value expertise, safety, and guidance"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3 sm:space-x-4">
                      <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-teal-600 flex-shrink-0 mt-0.5 sm:mt-1" />
                      <span className="text-black/80 text-sm sm:text-lg leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-neutral-50 to-neutral-100/50 rounded-2xl sm:rounded-3xl p-6 sm:p-10 border-2 border-neutral-400 overflow-hidden group hover-lift">
              <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-neutral-400/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6 sm:mb-8">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-neutral-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <XCircle className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-neutral-900">Not For You If:</h3>
                </div>

                <ul className="space-y-4 sm:space-y-5">
                  {[
                    "You've had recent sun exposure or skin flare-ups",
                    "You expect surgery-level results overnight",
                    "You can't commit to aftercare",
                    "You're looking for a 'cheap quick fix'"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3 sm:space-x-4">
                      <XCircle className="w-5 sm:w-6 h-5 sm:h-6 text-neutral-600 flex-shrink-0 mt-0.5 sm:mt-1" />
                      <span className="text-black/80 text-sm sm:text-lg leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 text-center bg-gradient-to-r from-teal-50 to-teal-100/50 p-6 sm:p-10 rounded-2xl sm:rounded-3xl">
            <Users className="w-12 sm:w-16 h-12 sm:h-16 text-teal-600 mx-auto mb-4 sm:mb-6" />
            <p className="text-lg sm:text-2xl font-semibold text-black max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8">
              If you're unsure, book a consultation. We'll assess your skin and decide if this treatment is right for you.
            </p>
            <button
              onClick={() => scrollToSection('cta')}
              className="relative bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:from-teal-400 hover:to-teal-500 transition-all duration-500 inline-flex items-center justify-center space-x-3 shadow-2xl hover:shadow-teal-400/50 hover:scale-105 uppercase tracking-wide overflow-hidden group"
            >
              <span className="relative z-10 flex items-center space-x-3">
                <Calendar className="w-5 sm:w-6 h-5 sm:h-6" />
                <span>Book Now</span>
              </span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-black mb-4 sm:mb-6">
              Safety & Screening
            </h2>
            <p className="text-base sm:text-xl text-black/70 max-w-3xl mx-auto">
              Your safety is always the first step. Every client receives a full consultation, including pigment risk screening and medical history review.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-12 border border-teal-200">
            <p className="text-lg sm:text-xl text-black/80 mb-6 sm:mb-8 text-center font-semibold">
              We check for:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {[
                { icon: User, text: "Skin tone & pigmentation risk" },
                { icon: Pill, text: "Current medications" },
                { icon: History, text: "Healing history" },
                { icon: Sun, text: "Sun exposure factors" }
              ].map((item, index) => (
                <div key={index} className="min-h-[8rem] sm:min-h-[10rem] list-none">
                  <div className="relative h-full rounded-xl sm:rounded-[1.25rem] border-[0.75px] border-border p-2 sm:p-3">
                    <GlowingEffect
                      spread={40}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                      borderWidth={3}
                    />
                    <div className="relative flex h-full flex-col justify-between gap-4 sm:gap-6 overflow-hidden rounded-lg sm:rounded-xl border-[0.75px] bg-white p-4 sm:p-6 shadow-sm">
                      <div className="relative flex flex-1 flex-col justify-between gap-2 sm:gap-3">
                        <div className="w-fit rounded-lg border-[0.75px] border-teal-200 bg-teal-50 p-1.5 sm:p-2">
                          <item.icon className="h-5 sm:h-6 w-5 sm:w-6 text-teal-600" />
                        </div>
                        <div>
                          <p className="text-sm sm:text-base leading-relaxed text-black/80 font-medium">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-black/70 text-sm sm:text-lg">
              Patch tests or micro-tests are available.
            </p>
          </div>
        </div>
      </section>

      <section id="faqs" className="py-12 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-teal-50 to-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border-2 border-teal-500/20 hover:border-teal-500/40 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-4 sm:p-8 flex items-center justify-between hover:bg-teal-50/50 transition-colors"
                >
                  <span className="text-base sm:text-xl font-bold text-black pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 sm:w-7 h-6 sm:h-7 text-teal-600 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 sm:px-8 pb-4 sm:pb-8">
                    <p className="text-sm sm:text-lg text-black/70 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-teal-100"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl sm:rounded-[3rem] shadow-2xl border border-teal-200/50 overflow-hidden">
            <div className="p-8 sm:p-16 text-center">
              <div className="mb-8 sm:mb-12">
                <div className="inline-flex items-center justify-center w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl shadow-lg mb-6 sm:mb-8">
                  <Calendar className="w-10 sm:w-12 h-10 sm:h-12 text-white" />
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 sm:mb-8">
                  <span className="bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600 bg-clip-text text-transparent">
                    Start Your Journey to
                  </span>
                  <br />
                  <span className="text-black mt-2 block">
                    Confident, Lifted Skin
                  </span>
                </h2>

                <p className="text-lg sm:text-2xl text-black/70 max-w-2xl mx-auto leading-relaxed font-light">
                  Professional care • Proven results • Complete transparency
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-14 max-w-4xl mx-auto">
                <div className="group bg-gradient-to-br from-teal-50 to-white p-6 sm:p-8 rounded-2xl border-2 border-teal-200 hover:border-teal-500 hover:shadow-xl transition-all duration-300">
                  <Shield className="w-12 sm:w-14 h-12 sm:h-14 text-teal-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <p className="font-bold text-base sm:text-lg text-black">Medical-Grade Safety</p>
                </div>
                <div className="group bg-gradient-to-br from-teal-50 to-white p-6 sm:p-8 rounded-2xl border-2 border-teal-200 hover:border-teal-500 hover:shadow-xl transition-all duration-300">
                  <Heart className="w-12 sm:w-14 h-12 sm:h-14 text-teal-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <p className="font-bold text-base sm:text-lg text-black">Personal Care</p>
                </div>
                <div className="group bg-gradient-to-br from-teal-50 to-white p-6 sm:p-8 rounded-2xl border-2 border-teal-200 hover:border-teal-500 hover:shadow-xl transition-all duration-300">
                  <Award className="w-12 sm:w-14 h-12 sm:h-14 text-teal-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <p className="font-bold text-base sm:text-lg text-black">Natural Results</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <button
                  onClick={() => scrollToSection('cta')}
                  className="group w-full sm:w-auto bg-gradient-to-r from-teal-500 to-teal-600 text-white px-10 sm:px-14 py-5 sm:py-6 rounded-full font-bold text-lg sm:text-xl hover:from-teal-400 hover:to-teal-500 transition-all duration-300 shadow-2xl shadow-teal-500/30 hover:shadow-teal-500/50 hover:scale-105 uppercase tracking-wide relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-3">
                    <Calendar className="w-6 sm:w-7 h-6 sm:h-7 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Book Now</span>
                  </span>
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>

                <a
                  href="https://wa.me/441234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full sm:w-auto border-3 border-teal-600 text-teal-600 px-10 sm:px-14 py-5 sm:py-6 rounded-full font-bold text-lg sm:text-xl hover:bg-teal-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 uppercase tracking-wide shadow-lg"
                >
                  <MessageCircle className="w-6 sm:w-7 h-6 sm:h-7 group-hover:scale-110 transition-transform duration-300" />
                  <span>Get in Touch</span>
                </a>
              </div>

              <p className="text-center text-black/60 mt-8 sm:mt-10 text-sm sm:text-base font-medium">
                £50 consultation deposit • Fully redeemable toward treatment
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12 sm:py-20 px-4 sm:px-6 border-t border-teal-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-2 sm:space-x-3 group">
                <div className="w-8 h-8 sm:w-10 sm:h-10">
                  <img
                    src="https://820i9wpaqi.ufs.sh/f/PwwcUidplans0iqVKkBZmf2arIMiUH3nS4jP6K8OLs0thCzV"
                    alt="Rhi's Aesthetics Logo"
                    className="w-full h-full object-contain brightness-0 invert group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="text-xl sm:text-2xl font-black">Rhi's Aesthetics</span>
              </div>
              <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                Safe, natural skin tightening in Southampton.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                <a
                  href="https://www.instagram.com/rhi.aesthetics?igsh=MWhvMjFqb3Zscms0aw%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2.5 sm:p-3 rounded-full hover:bg-teal-500 transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-5 sm:w-6 h-5 sm:h-6" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61575636000105"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2.5 sm:p-3 rounded-full hover:bg-teal-500 transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="w-5 sm:w-6 h-5 sm:h-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-black text-base sm:text-lg mb-4 sm:mb-6 text-teal-400">Contact</h3>
              <div className="space-y-3 sm:space-y-4 text-white/70 text-sm sm:text-base">
                <p className="flex items-center space-x-2 sm:space-x-3 hover:text-teal-400 transition-colors duration-300">
                  <MapPin className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                  <span>Southampton, UK</span>
                </p>
                <p className="flex items-center space-x-2 sm:space-x-3 hover:text-teal-400 transition-colors duration-300">
                  <Phone className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                  <span>01234 567890</span>
                </p>
                <p className="flex items-center space-x-2 sm:space-x-3 hover:text-teal-400 transition-colors duration-300">
                  <Mail className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                  <span>info@rhisesthetics.co.uk</span>
                </p>
                <p className="flex items-center space-x-2 sm:space-x-3 hover:text-teal-400 transition-colors duration-300">
                  <Building2 className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                  <span>reesesthetics.co.uk</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-black text-base sm:text-lg mb-4 sm:mb-6 text-teal-400">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3 text-white/70 text-sm sm:text-base">
                {['about', 'how-it-works', 'faqs', 'timeline'].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollToSection(link)}
                      className="hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </button>
                  </li>
                ))}
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-black text-base sm:text-lg mb-4 sm:mb-6 text-teal-400">Hours</h3>
              <div className="space-y-2 sm:space-y-3 text-white/70 text-sm sm:text-base">
                <p>Monday - Friday</p>
                <p className="text-white font-semibold">9:00 AM - 6:00 PM</p>
                <p className="mt-3 sm:mt-4">Saturday</p>
                <p className="text-white font-semibold">10:00 AM - 4:00 PM</p>
                <p className="mt-3 sm:mt-4">Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 sm:pt-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/50 text-xs sm:text-sm text-center md:text-left">
              &copy; 2025 Rhi's Aesthetics — All rights reserved.
            </p>
            <p className="text-white/50 text-xs sm:text-sm text-center md:text-right">
              Designed with precision and care
            </p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 sm:bottom-8 right-6 sm:right-8 lg:hidden z-40">
        <button
          onClick={() => scrollToSection('cta')}
          className="relative bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 sm:px-8 py-4 sm:py-5 rounded-full font-bold shadow-2xl hover:from-teal-400 hover:to-teal-500 transition-all duration-300 flex items-center space-x-2 sm:space-x-3 hover:scale-110 overflow-hidden group"
        >
          <span className="relative z-10 flex items-center space-x-2 sm:space-x-3">
            <Calendar className="w-5 sm:w-6 h-5 sm:h-6" />
            <span className="text-sm sm:text-base">Book Now</span>
          </span>
          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </button>
      </div>
    </div>
  );
}

export default App;
