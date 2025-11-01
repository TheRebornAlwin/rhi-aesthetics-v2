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
  Sparkles,
  Heart,
  ChevronDown,
  MessageCircle,
  Instagram,
  Facebook,
  Play,
  Zap,
  Users,
  Clock,
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
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
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
        behavior: 'smooth'
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
    { day: "Pre-Treatment", description: "Full consultation, medical history review, and pigmentation risk screening. We assess your skin and ensure plasma treatment is safe and suitable for you.", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80" },
    { day: "Treatment", description: "Area is fully numbed before we begin. The plasma pen creates precise micro-points on the skin surface. You'll feel warmth, not pain. Treatment typically takes 30-60 minutes depending on the area.", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80" },
    { day: "Day 1", description: "Treatment complete. Skin feels warm and tight. Small dots are visible where the plasma contacted the skin. Mild swelling begins.", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80" },
    { day: "Day 2", description: "Swelling peaks — most visible under eyes. This is completely normal and expected. Dots darken slightly as the healing process begins.", image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=600&q=80" },
    { day: "Day 3–4", description: "Swelling eases significantly. Tiny dots darken further and begin to crust. Avoid picking or scratching — let them fall naturally.", image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80" },
    { day: "Day 5–6", description: "Dots fall off naturally. Redness begins to fade. Skin underneath is pink and new. Continue following aftercare instructions carefully.", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80" },
    { day: "Day 7+", description: "Skin tone evens out, light makeup OK. Healing progresses beautifully. Collagen production continues beneath the surface for weeks to come.", image: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=600&q=80" }
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
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <Sparkles className="text-teal-400 w-9 h-9 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
              <div className="absolute inset-0 bg-teal-400 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <span className={`text-2xl font-bold transition-colors duration-300 ${isHeaderScrolled ? 'text-white' : 'text-black'}`}>
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

          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/441234567890"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-full transition-all duration-300 ${
                isHeaderScrolled
                  ? 'text-teal-400 hover:bg-teal-400/10 hover:scale-110'
                  : 'text-black hover:bg-black/10 hover:scale-110'
              }`}
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            <button
              onClick={() => scrollToSection('cta')}
              className="relative bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:from-teal-400 hover:to-teal-500 transition-all duration-300 uppercase text-xs tracking-wider shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 hover:scale-105 overflow-hidden group"
            >
              <span className="relative z-10">Book Now</span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
        </div>
      </header>

      <AuroraBackground className="relative min-h-screen flex items-center overflow-hidden bg-white">
        <div className="hero-content max-w-7xl mx-auto px-6 pt-48 pb-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 fade-in-up">
              <div className="inline-block">
                <span className="px-4 py-2 bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 rounded-full text-teal-300 text-sm font-semibold uppercase tracking-wider">
                  Non-Surgical Skin Tightening
                </span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
                className="text-5xl lg:text-6xl font-black leading-[1.1] text-black"
              >
                Doctor-Led <span className="text-teal-600">Plasma Fibroblast</span> in Southampton
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
                className="text-xl lg:text-2xl text-black/80 leading-relaxed font-light"
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
                className="flex flex-col sm:flex-row gap-5 pt-6"
              >
                <button
                  onClick={() => scrollToSection('cta')}
                  className="group relative bg-teal-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-teal-500 transition-all duration-500 flex items-center justify-center space-x-3 shadow-2xl hover:shadow-teal-400/50 hover:scale-105"
                >
                  <Calendar className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Book Consultation</span>
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
                  <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center opacity-30"></div>
                  <div className="relative text-center space-y-4 z-10">
                    <div className="w-32 h-32 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full mx-auto flex items-center justify-center shadow-2xl shadow-teal-500/50">
                      <Heart className="w-16 h-16 text-white" />
                    </div>
                    <div className="bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 backdrop-blur-md px-6 py-4 rounded-xl">
                      <p className="font-bold text-2xl text-white">Rhi</p>
                      <p className="text-teal-100 text-sm">Qualified Aesthetic Practitioner</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </AuroraBackground>

      <section id="trust-strip" className="bg-white py-20 px-6 border-t border-teal-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-black mb-4">
                Real Results,{' '}
                <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                  Real Transformations
                </span>
              </h2>
              <p className="text-xl text-black/70">Witness the power of precision plasma treatments</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto px-6">
              <GlareCard className="relative">
                <img
                  className="h-full w-full absolute inset-0 object-cover opacity-90"
                  src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansgXnFmzy5kj61DYzc70ZnwdPfCoh3IRx4Amiu"
                  alt="Skin treatment result"
                />
              </GlareCard>
              <GlareCard className="relative">
                <img
                  className="h-full w-full absolute inset-0 object-cover opacity-90"
                  src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansJ3To3ecVXzGmdTHBK2gaqowhD8ubcMpkWnA7"
                  alt="Plasma pen treatment"
                />
              </GlareCard>
              <GlareCard className="relative">
                <img
                  className="h-full w-full absolute inset-0 object-cover opacity-90"
                  src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansnc4JjmIeeKuJpWcTySUNLz4R0I8Vw7fZ1G2k"
                  alt="Treatment room"
                />
              </GlareCard>
              <GlareCard className="relative">
                <img
                  className="h-full w-full absolute inset-0 object-cover opacity-90"
                  src="https://820i9wpaqi.ufs.sh/f/PwwcUidplans9cfuDhwHvBk0FM54DR6T7haPjcVdE8o3ZfIw"
                  alt="Natural Lifting Results"
                />
              </GlareCard>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, text: "Qualified Aesthetic Practitioner" },
              { icon: Droplet, text: "Medical-grade Plasma IQ Device" },
              { icon: Shield, text: "Registered & Insured Clinic" },
              { icon: MapPin, text: "Located in Southampton" }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl border border-teal-200 hover:border-teal-500/50 transition-all duration-500 hover-lift text-center space-y-4 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-teal-500/0 group-hover:from-teal-500/10 group-hover:to-teal-500/5 transition-all duration-500"></div>
                <item.icon className="w-14 h-14 text-teal-600 mx-auto relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                <p className="font-semibold text-black relative z-10 leading-tight">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg leading-relaxed">
              <h2 className="text-5xl lg:text-6xl font-black mb-8 leading-tight">
                You're not crazy for wanting something that actually works.
              </h2>

              <p className="text-black/70 text-xl">
                You've tried the facials and creams that felt relaxing but changed nothing.
              </p>

              <p className="text-black/70 text-xl">
                Every mirror, every photo, reminds you...you look tired even when you're not. You look older than you are, and you really don't like it.
              </p>

              <p className="text-black/70 text-xl">
                And yet… the idea of surgery feels too much. The idea of a "miracle cream" seems too fake.
              </p>

              <p className="text-black/70 text-xl">
                You just want a safe, proven way to tighten the skin you already have, and that's it.
              </p>

              <button
                onClick={() => scrollToSection('cta')}
                className="relative bg-gradient-to-r from-teal-500 to-teal-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-teal-400 hover:to-teal-500 transition-all duration-500 flex items-center justify-center space-x-3 shadow-2xl hover:shadow-teal-400/50 hover:scale-105 uppercase tracking-wide"
              >
                <Calendar className="w-6 h-6" />
                <span>Book Now</span>
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-teal-600/20 blur-3xl"></div>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden relative">
                  <div className="rounded-2xl aspect-[3/4] overflow-hidden relative">
                    <img
                      src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansRdrLHs1NnPqXUigWtzfTd60QMsIbeE2vVLYu"
                      alt="Rhi - Aesthetic Practitioner"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-br from-teal-600 to-teal-700 text-white p-8">

                      <p className="text-sm leading-relaxed mb-4">
                        Hey, I'm Rhi. I started this clinic because I was tired of people being misled by beauty promises that weren't real. I wanted a calm, honest, medical-standard space where you actually know what's happening every step of the way, and for you to LOVE your transformation.
                      </p>
                      <p className="text-sm leading-relaxed mb-4">
My goal is simple — natural, safe, and lasting results that you'll enjoy forever ❤️
                      </p>
                      <p className="text-sm leading-relaxed mb-4">
I'm fully qualified, insured, and I continue to learn and develop my knowledge with CPD training annually to make sure you get the best results possible!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-600 text-sm font-semibold uppercase tracking-wider mb-6">
              The Process
            </span>
            <h2 className="text-5xl lg:text-6xl font-black text-black mb-6">
              How It Works
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto font-light">
              Three simple steps to naturally tighten and lift your skin
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
                icon: Sparkles,
                title: "Natural Tightening",
                description: "In 6–12 weeks, your skin looks smoother, lifted, and rested — without injections or surgery.",
                number: "03",
                imagePlaceholder: true
              }
            ].map((step, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-teal-50 to-white p-10 rounded-3xl border border-teal-200 hover:border-teal-500/50 transition-all duration-500 hover-lift overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute top-4 right-4 text-8xl font-black text-teal-100 group-hover:text-teal-200 transition-colors duration-500">
                  {step.number}
                </div>

                <div className="relative z-10 space-y-6">
                  <div className="bg-gradient-to-br from-teal-100 to-teal-50 rounded-2xl aspect-video flex items-center justify-center border-2 border-teal-200 overflow-hidden relative mb-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mx-auto flex items-center justify-center mb-2">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-sm text-teal-600 font-medium">Image Placeholder</p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-black">{step.title}</h3>
                  <p className="text-black/70 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => scrollToSection('cta')}
              className="relative bg-gradient-to-r from-teal-500 to-teal-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-teal-400 hover:to-teal-500 transition-all duration-500 inline-flex items-center justify-center space-x-3 shadow-2xl hover:shadow-teal-400/50 hover:scale-105 uppercase tracking-wide"
            >
              <Calendar className="w-6 h-6" />
              <span>Book Now</span>
            </button>
          </div>

          <div className="mt-16 bg-gradient-to-r from-teal-50 to-teal-100/50 border border-teal-500/20 rounded-2xl p-8 max-w-3xl mx-auto text-center">
            <p className="text-xl text-black">
              <strong className="text-teal-600 font-bold">You'll feel warmth, not pain</strong> — we fully numb the area beforehand.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-black leading-tight text-black">
            It's your time to feel confident again. Safety, naturally, and without surgery.
          </h2>
        </div>
      </section>

      <section id="timeline" className="py-24 px-6 bg-white">
        <Timeline data={healingTimeline.map((item) => ({
          title: item.day,
          content: (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl overflow-hidden border-2 border-teal-200 shadow-lg aspect-[4/5]">
                <img src={item.image} alt={item.day} className="w-full h-full object-cover" />
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-8 border-2 border-teal-200 shadow-lg flex items-center aspect-[4/5]">
                <p className="text-lg text-black/80 leading-relaxed">{item.description}</p>
              </div>
            </div>
          )
        }))} />

        <div className="max-w-6xl mx-auto mt-16">
          <div className="bg-white text-black rounded-3xl p-12 text-center hover-lift border-2 border-teal-200">
            <Clock className="w-16 h-16 text-teal-600 mx-auto mb-6" />
            <p className="text-xl mb-8 leading-relaxed text-black">
              Every client receives a detailed aftercare PDF — including what to expect, what to avoid, and how to protect your results.
            </p>
            <button
              onClick={() => scrollToSection('cta')}
              className="relative bg-gradient-to-r from-teal-500 to-teal-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-teal-400 hover:to-teal-500 transition-all duration-500 inline-flex items-center justify-center space-x-3 shadow-2xl hover:shadow-teal-400/50 hover:scale-105 uppercase tracking-wide"
            >
              <Calendar className="w-6 h-6" />
              <span>Book Now</span>
            </button>
          </div>
        </div>
      </section>

      <section id="results" className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-600 text-sm font-semibold uppercase tracking-wider mb-6">
              Proven Results
            </span>
            <h2 className="text-5xl lg:text-6xl font-black text-black mb-6">
              Real Results
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Consistent lighting, real clients, visible transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className="group bg-gradient-to-br from-teal-50 to-white rounded-3xl overflow-hidden border border-teal-200 hover:border-teal-500/50 hover-lift"
              >
                <div className="relative bg-gradient-to-br from-teal-100 to-teal-50 aspect-[4/3] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center opacity-20"></div>
                  <div className="relative text-center bg-black/80 backdrop-blur-sm px-6 py-4 rounded-xl">
                    <Play className="w-12 h-12 text-teal-400 mx-auto mb-2" />
                    <p className="font-semibold text-lg text-white">Before/After</p>
                    <p className="text-sm text-teal-300">{item.area}</p>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-white to-teal-50">
                  <p className="font-bold text-teal-600 mb-3 text-lg">{item.area} — {item.weeks}</p>
                  <p className="text-sm text-black/70 italic leading-relaxed">
                    "{item.name} — 'I was nervous at first. By week {item.weeks.split(' ')[0]}, I couldn't believe how smooth my eyes looked.'"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl lg:text-6xl font-black text-center mb-20">
            Is This Right For You?
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="relative bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-3xl p-10 border-2 border-teal-500 overflow-hidden group hover-lift">
              <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-teal-900">Perfect For You If:</h3>
                </div>

                <ul className="space-y-5">
                  {[
                    "You're noticing sagging or loose eyelid skin",
                    "You want results without surgery or filler",
                    "You're realistic about 5–7 days of healing",
                    "You value expertise, safety, and guidance"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-4">
                      <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                      <span className="text-black/80 text-lg leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-neutral-50 to-neutral-100/50 rounded-3xl p-10 border-2 border-neutral-400 overflow-hidden group hover-lift">
              <div className="absolute top-0 right-0 w-40 h-40 bg-neutral-400/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-neutral-500 rounded-full flex items-center justify-center">
                    <XCircle className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-neutral-900">Not For You If:</h3>
                </div>

                <ul className="space-y-5">
                  {[
                    "You've had recent sun exposure or skin flare-ups",
                    "You expect surgery-level results overnight",
                    "You can't commit to aftercare",
                    "You're looking for a 'cheap quick fix'"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-4">
                      <XCircle className="w-6 h-6 text-neutral-600 flex-shrink-0 mt-1" />
                      <span className="text-black/80 text-lg leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center bg-gradient-to-r from-teal-50 to-teal-100/50 p-10 rounded-3xl">
            <Users className="w-16 h-16 text-teal-600 mx-auto mb-6" />
            <p className="text-2xl font-semibold text-black max-w-3xl mx-auto leading-relaxed mb-8">
              If you're unsure, book a consultation. We'll assess your skin and decide if this treatment is right for you.
            </p>
            <button
              onClick={() => scrollToSection('cta')}
              className="relative bg-gradient-to-r from-teal-500 to-teal-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-teal-400 hover:to-teal-500 transition-all duration-500 inline-flex items-center justify-center space-x-3 shadow-2xl hover:shadow-teal-400/50 hover:scale-105 uppercase tracking-wide"
            >
              <Calendar className="w-6 h-6" />
              <span>Book Now</span>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-600 text-sm font-semibold uppercase tracking-wider mb-6">
              Your Safety First
            </span>
            <h2 className="text-5xl lg:text-6xl font-black text-black mb-6">
              Safety & Screening
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Your safety is always the first step. Every client receives a full consultation, including pigment risk screening and medical history review.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-white rounded-3xl p-12 border border-teal-200">
            <p className="text-xl text-black/80 mb-12 text-center font-semibold">
              We check for:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                { icon: User, text: "Skin tone & pigmentation risk (Fitzpatrick scale)" },
                { icon: Pill, text: "Current medications" },
                { icon: History, text: "Healing history" },
                { icon: Sun, text: "Lifestyle factors like sun exposure" }
              ].map((item, index) => (
                <div key={index} className="min-h-[12rem] list-none">
                  <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                    <GlowingEffect
                      spread={40}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                      borderWidth={3}
                    />
                    <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-white p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
                      <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="w-fit rounded-lg border-[0.75px] border-teal-200 bg-teal-50 p-2">
                          <item.icon className="h-6 w-6 text-teal-600" />
                        </div>
                        <div className="space-y-3">
                          <p className="text-lg leading-relaxed text-black/80">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-8 text-center mb-8">
              <p className="text-3xl font-bold text-white leading-relaxed">
                "It's not about speed, it's about precision."
              </p>
            </div>

            <p className="text-center text-black/70 text-lg">
              Patch tests or micro-tests are available — and redeemable toward your full treatment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-600 text-sm font-semibold uppercase tracking-wider mb-6">
              Testimonials
            </span>
            <h2 className="text-5xl lg:text-6xl font-black text-black mb-6">
              What Clients Say
            </h2>
          </div>

          <AnimatedTestimonials
            testimonials={[
              {
                quote: "I was terrified before my treatment, but Rhi explained everything. The swelling lasted 3 days, dots gone in a week, results by week 8 — incredible.",
                name: "Christene",
                designation: "Age 46, Southampton",
                src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop"
              },
              {
                quote: "I'd wasted money on creams and gadgets. This actually worked. My eyelids feel lifted and I look awake again.",
                name: "Sophie",
                designation: "Age 52, Southampton",
                src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3540&auto=format&fit=crop"
              },
              {
                quote: "The honesty and care were unmatched. No fake promises, just results. I finally feel confident again.",
                name: "Karen",
                designation: "Age 40, Southampton",
                src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=3540&auto=format&fit=crop"
              },
              {
                quote: "Professional, safe, and the results speak for themselves. Best decision I've made for my skin in years.",
                name: "Michelle",
                designation: "Age 48, Southampton",
                src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=3540&auto=format&fit=crop"
              },
              {
                quote: "Rhi's expertise gave me confidence from day one. The healing was exactly as described, and my skin looks naturally refreshed.",
                name: "Emma",
                designation: "Age 55, Southampton",
                src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=3540&auto=format&fit=crop"
              }
            ]}
            autoplay={true}
          />
        </div>
      </section>

      <section id="faqs" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-600 text-sm font-semibold uppercase tracking-wider mb-6">
              Questions?
            </span>
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-teal-50 to-white rounded-2xl overflow-hidden shadow-lg border-2 border-teal-500/20 hover:border-teal-500/40 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-8 flex items-center justify-between hover:bg-teal-50/50 transition-colors"
                >
                  <span className="text-xl font-bold text-black pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-7 h-7 text-teal-600 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-8">
                    <p className="text-lg text-black/70 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="bg-white py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center space-y-8 mb-12">
            <div className="inline-block">
              <span className="px-6 py-3 bg-teal-500/20 backdrop-blur-sm border border-teal-500/30 rounded-full text-teal-600 text-sm font-bold uppercase tracking-wider">
                Ready to Transform?
              </span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-black leading-tight text-black">
              Start Your Journey to
              <span className="block mt-3 bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                Confident, Lifted Skin
              </span>
            </h2>

            <p className="text-xl leading-relaxed text-black/70 max-w-2xl mx-auto">
              Professional care, proven results, complete transparency
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-teal-50 to-white backdrop-blur-sm border border-teal-200 rounded-2xl p-6 text-center hover:border-teal-500/50 transition-all duration-300">
              <Shield className="w-10 h-10 text-teal-600 mx-auto mb-3" />
              <p className="text-black font-semibold">Medical-Grade Safety</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-white backdrop-blur-sm border border-teal-200 rounded-2xl p-6 text-center hover:border-teal-500/50 transition-all duration-300">
              <Heart className="w-10 h-10 text-teal-600 mx-auto mb-3" />
              <p className="text-black font-semibold">Personal Care</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-white backdrop-blur-sm border border-teal-200 rounded-2xl p-6 text-center hover:border-teal-500/50 transition-all duration-300">
              <Sparkles className="w-10 h-10 text-teal-600 mx-auto mb-3" />
              <p className="text-black font-semibold">Natural Results</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-gradient-to-r from-teal-500 to-teal-600 text-white px-12 py-6 rounded-full font-bold text-lg hover:from-teal-400 hover:to-teal-500 transition-all duration-300 shadow-2xl shadow-teal-500/30 hover:shadow-teal-500/50 hover:scale-105 uppercase tracking-wide">
              <span className="flex items-center justify-center space-x-3">
                <Calendar className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>Book Now</span>
              </span>
            </button>

            <a
              href="https://wa.me/441234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-teal-500 text-teal-600 px-12 py-6 rounded-full font-bold text-lg hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 uppercase tracking-wide"
            >
              <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              <span>Get in Touch</span>
            </a>
          </div>

          <p className="text-center text-black/60 mt-10 text-sm">
            £50 consultation deposit • Fully redeemable toward treatment
          </p>
        </div>
      </section>

      <footer className="bg-black text-white py-20 px-6 border-t border-teal-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 group">
                <Sparkles className="text-teal-400 w-10 h-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-2xl font-black">Rhi's Aesthetics</span>
              </div>
              <p className="text-white/60 leading-relaxed">
                Safe, natural skin tightening in Southampton.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-white/10 p-3 rounded-full hover:bg-teal-500 transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="bg-white/10 p-3 rounded-full hover:bg-teal-500 transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-black text-lg mb-6 text-teal-400">Contact</h3>
              <div className="space-y-4 text-white/70">
                <p className="flex items-center space-x-3 hover:text-teal-400 transition-colors duration-300">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <span>Southampton, UK</span>
                </p>
                <p className="flex items-center space-x-3 hover:text-teal-400 transition-colors duration-300">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>01234 567890</span>
                </p>
                <p className="flex items-center space-x-3 hover:text-teal-400 transition-colors duration-300">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>info@rhisesthetics.co.uk</span>
                </p>
                <p className="flex items-center space-x-3 hover:text-teal-400 transition-colors duration-300">
                  <Building2 className="w-5 h-5 flex-shrink-0" />
                  <span>reesesthetics.co.uk</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-black text-lg mb-6 text-teal-400">Quick Links</h3>
              <ul className="space-y-3 text-white/70">
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
              <h3 className="font-black text-lg mb-6 text-teal-400">Hours</h3>
              <div className="space-y-3 text-white/70">
                <p>Monday - Friday</p>
                <p className="text-white font-semibold">9:00 AM - 6:00 PM</p>
                <p className="mt-4">Saturday</p>
                <p className="text-white font-semibold">10:00 AM - 4:00 PM</p>
                <p className="mt-4">Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/50 text-sm">
              &copy; 2025 Rhi's Aesthetics — All rights reserved.
            </p>
            <p className="text-white/50 text-sm">
              Designed with precision and care
            </p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-8 right-8 lg:hidden z-50">
        <button
          onClick={() => scrollToSection('cta')}
          className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-5 rounded-full font-bold shadow-2xl hover:from-teal-400 hover:to-teal-500 transition-all duration-300 flex items-center space-x-3 hover:scale-110 teal-glow"
        >
          <Calendar className="w-6 h-6" />
          <span>Book Now</span>
        </button>
      </div>
    </div>
  );
}

export default App;
