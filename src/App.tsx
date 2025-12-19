import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  Sun,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { AuroraBackground } from './components/ui/aurora-background';
import { Timeline } from './components/ui/timeline';
import { AnimatedTestimonials } from './components/ui/animated-testimonials';
import { GlareCard } from './components/ui/glare-card';
import { GlowingEffect } from './components/ui/glowing-effect';

function App() {
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [showAllResults, setShowAllResults] = useState(false);
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({
    'how-it-works': true,
    'timeline': true,
    'is-right-for-you': true
  });

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const glareCardImages = [
    "https://820i9wpaqi.ufs.sh/f/PwwcUidplansgXnFmzy5kj61DYzc70ZnwdPfCoh3IRx4Amiu",
    "https://820i9wpaqi.ufs.sh/f/PwwcUidplansJ3To3ecVXzGmdTHBK2gaqowhD8ubcMpkWnA7",
    "https://820i9wpaqi.ufs.sh/f/PwwcUidplansnc4JjmIeeKuJpWcTySUNLz4R0I8Vw7fZ1G2k",
    "https://820i9wpaqi.ufs.sh/f/PwwcUidplans4b8WVbwZlV9LZ7rOzhpUH0MiuGACRPD3jNeQ",
    "https://820i9wpaqi.ufs.sh/f/PwwcUidplansxdVd0JYj7ghxUT0Ry8DfXk9KamOCNAuW12ML",
    "https://820i9wpaqi.ufs.sh/f/PwwcUidplansxHBoMsYj7ghxUT0Ry8DfXk9KamOCNAuW12ML",
    "https://820i9wpaqi.ufs.sh/f/PwwcUidplansbKWsjXtOYpmXqDxfseSP45Qwn0azcOMUoCJi",
    "https://820i9wpaqi.ufs.sh/f/PwwcUidplanse4pxfsjL6QinpDZP2GqN4OBEU7XWxH5kjR30",
    "https://820i9wpaqi.ufs.sh/f/PwwcUidplansFS8xsDj0GAmy2ZwjtQus7gKan49xlXPdebB6",
    "https://820i9wpaqi.ufs.sh/f/PwwcUidplansZOAMWMH6XwJuImFfqiz86x7V3CyK2odlaTv5",
    "https://820i9wpaqi.ufs.sh/f/PwwcUidplanskh2WII5oM8xhVQJusqtST06R5NiK7fcewbZ3",
    "https://820i9wpaqi.ufs.sh/f/PwwcUidplansMIRcmXfF60kipOZwxPDGShftogB23RYsQ9cU"
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Preload critical images only
    const criticalImages = [
      "https://820i9wpaqi.ufs.sh/f/PwwcUidplansZkeOPd6XwJuImFfqiz86x7V3CyK2odlaTv5P",
      "https://820i9wpaqi.ufs.sh/f/PwwcUidplansykJ9XUnOIJPwhi3Q9WsA61ykCl5eRHLYpVSN"
    ];
    criticalImages.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
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

  const nextCarousel = () => {
    setCarouselIndex((prev) => (prev + 4) % glareCardImages.length);
  };

  const prevCarousel = () => {
    setCarouselIndex((prev) => (prev - 4 + glareCardImages.length) % glareCardImages.length);
  };

  const getVisibleCards = (count: number) => {
    const cards = [];
    for (let i = 0; i < count; i++) {
      const index = (carouselIndex + i) % glareCardImages.length;
      cards.push(glareCardImages[index]);
    }
    return cards;
  };

  const faqs = [
    {
      question: "Does it hurt?",
      answer: "I'll be honest with you - you'll feel something, but I numb you up properly beforehand so it's totally manageable. Most of my clients say it feels warm and tingly, like a little zap. Nothing scary, I promise!"
    },
    {
      question: "How long will I look swollen?",
      answer: "Day 2 is usually the puffiest, especially around the eyes - I won't lie, you might look a bit like you've had a cry! But by Day 5, those little dots start flaking off and you'll start seeing the magic happen."
    },
    {
      question: "When can I wear makeup again?",
      answer: "Give it about a week to let everything heal properly. I know it's tempting to cover up, but trust me - your skin will thank you for the patience!"
    },
    {
      question: "How long do results last?",
      answer: "This is the good bit - you're looking at 2-3 years! Obviously it depends on your skin and how you look after yourself, but this isn't some temporary fix that disappears after a month."
    },
    {
      question: "Is it safe near the eyes?",
      answer: "Absolutely! I use a medical-grade device and I've had proper training for delicate areas. It's a controlled treatment on the surface of your skin - nothing like surgery at all."
    },
    {
      question: "Can I go to work after?",
      answer: "You can if you need to, but honestly? Most of my clients book a few days off. You'll have visible dots and some puffiness, and you deserve to rest and let your body do its thing without worrying about what colleagues might think!"
    },
    {
      question: "What do you check for in the consultation?",
      answer: "I do a proper assessment before we even think about treatment! I'll look at your skin tone and any pigmentation concerns, go through your medical history and medications, check how your skin usually heals, and chat about your lifestyle - sun exposure, skincare routine, that sort of thing. I need to make sure you're a good fit for this treatment, and if I don't think it's right for you, I'll tell you straight."
    }
  ];


  const healingTimeline = [
    { day: "Pre-Treatment", description: "We'll sit down together and go through everything - your medical history, what you're hoping to achieve, and make absolutely sure your skin is ready for this. No rushing, just honest answers to all your questions.", image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansx1VNHZYj7ghxUT0Ry8DfXk9KamOCNAuW12ML" },
    { day: "Treatment", description: "You'll be fully numbed before I even start - promise! The plasma pen creates tiny little dots on your skin. Most people say it feels warm, maybe a bit tingly, but definitely not painful. Usually takes about 30-60 minutes depending on what we're treating.", image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplans7PxdNs38MLZ8BjbFlapw42zWhdu7D1XryRQI" },
    { day: "Day 1", description: "You did it! Your skin will feel warm and a bit tight - that's totally normal. You'll see those little dots where the plasma touched your skin, and some mild puffiness might start to show up.", image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansVJQl3YsFVUwgoZMhOsNaYPvRxcu28A0rf1b5" },
    { day: "Day 2", description: "Okay, this is usually the puffiest day, especially under your eyes. I know it looks dramatic but this is exactly what we expect! The dots might get a bit darker as your skin starts its natural healing magic.", image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansVRjfzCsFVUwgoZMhOsNaYPvRxcu28A0rf1b5" },
    { day: "Day 3–4", description: "The swelling's calming down now - see? Those tiny dots will get darker and start to crust over. I know it's tempting, but please don't pick at them! Let them do their thing and fall off naturally.", image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansLZKh1t8cEpuNyB4c5UP1OD9z8GXJlTsjiKSL" },
    { day: "Day 5–6", description: "The dots are starting to flake away on their own - exciting! The redness is fading and underneath you'll see fresh, pink skin. Keep following those aftercare steps I gave you, you're doing amazing.", image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansB3LukPXAT70DbI3p4EqW1ve6ijGVXNYd8hwf" },
    { day: "Day 7+", description: "Your skin tone's evening out beautifully! You can start wearing light makeup again if you want. The surface healing is pretty much done, but the real magic - all that collagen building - that's still happening deep beneath the surface for weeks to come.", image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansmHIdXGEvIL2Qu3fNjFstHoVDamzgMXZvnwb1" }
  ];


  return (
    <div className="min-h-screen bg-white">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isHeaderScrolled
            ? 'bg-black/95 backdrop-blur-xl shadow-2xl shadow-teal-500/10 py-4'
            : 'bg-black/95 lg:bg-transparent py-3 lg:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center group cursor-pointer">
            <div className="w-10 h-10 sm:w-12 sm:h-12">
              <img
                src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansrKuIikggJMAWrzNy61nv7tqUuYLkCVcsZQHl"
                alt="RHI Aesthetics Logo"
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>

          <nav className="hidden lg:flex items-center justify-center space-x-8 flex-1">
            {['how-it-works', 'results', 'timeline', 'faqs'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="relative text-sm font-medium uppercase tracking-wider transition-colors duration-300 group text-white/90 hover:text-teal-400"
              >
                {section === 'timeline' ? 'your journey' : section.split('-').join(' ')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <a
              href="https://wa.me/441234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-full transition-all duration-300 text-white hover:bg-white/10 hover:scale-110"
            >
              <MessageCircle className="w-5 sm:w-6 h-5 sm:h-6" />
            </a>
            <a
              href="https://www.fresha.com/a/rhi-aesthetics-eastleigh-heron-square-hly29r98?service=s%3A22476966&pId=2514594"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded font-semibold hover:bg-teal-700 transition-all duration-300 uppercase text-xs tracking-wider shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span className="lg:hidden">Book Now</span>
              <span className="hidden lg:inline">Book Free Consultation</span>
            </a>
          </div>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansZkeOPd6XwJuImFfqiz86x7V3CyK2odlaTv5P"
            alt="Plasma Fibroblast Treatment"
            className="w-full h-full object-cover sm:object-center object-[center_30%]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
            className="space-y-6 sm:space-y-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-normal text-white leading-tight">
              Plasma Fibroblast
            </h1>

            <div className="flex items-center justify-center gap-3">
              <div className="w-16 sm:w-20 h-px bg-teal-400"></div>
            </div>

            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 font-light">
              in Southampton
            </p>

            <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Clinically experienced practitioner trusted by 150+ women for safe, natural skin tightening. Surgical results without the knife or the prices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 px-4">
              <a
                href="https://www.fresha.com/a/rhi-aesthetics-eastleigh-heron-square-hly29r98?service=s%3A22476966&pId=2514594"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-600 text-white px-10 py-4 rounded font-semibold hover:bg-teal-700 transition-all duration-300 uppercase text-sm tracking-wider shadow-lg hover:shadow-xl hover:scale-105 w-auto sm:w-auto inline-block text-center"
              >
                Book Free Consultation
              </a>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="bg-white border-2 border-teal-600 text-teal-600 px-10 py-4 rounded font-semibold hover:bg-teal-600 hover:text-white transition-all duration-300 uppercase text-sm tracking-wider shadow-lg hover:shadow-xl hover:scale-105 w-auto sm:w-auto"
              >
                View All Treatments
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="results" className="bg-white py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-600 text-sm font-semibold uppercase tracking-wider mb-6">
              Transformations
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-4 text-black">
              Real Results, <br className="sm:hidden" />Real Transformations
            </h2>
            <p className="text-lg sm:text-xl text-black/60 max-w-2xl mx-auto font-light">
              Witness the power of precision plasma treatments with proven results.
            </p>
          </div>

          {/* Luxury Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-2 sm:gap-6 mb-16">
            {glareCardImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative rounded-lg overflow-hidden h-full"
              >
                <img
                  src={image}
                  alt={`Treatment result ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: Award, text: "Qualified Aesthetic Practitioner" },
              { icon: Droplet, text: "Medical-grade Plasma IQ Device" },
              { icon: Shield, text: "GDC Registered, CPD Accredited & Fully Insured Practitioner" },
              { icon: MapPin, text: "Located in Southampton" }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-teal-50 to-white p-6 sm:p-8 rounded-2xl border border-teal-200 hover:border-teal-400 transition-all duration-300 text-center"
              >
                <div className="bg-teal-500 w-12 h-12 sm:w-14 sm:h-14 rounded-xl mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
                </div>
                <p className="font-semibold text-xs sm:text-sm text-black/80">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Side */}
            <div className="relative h-[500px] lg:h-[700px]">
              <img
                src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansrqBKEAggJMAWrzNy61nv7tqUuYLkCVcsZQHl"
                alt="Rhia - Aesthetic Practitioner"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
            </div>

            {/* Content Side */}
            <div className="flex items-center px-8 sm:px-12 lg:px-16 py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-teal-50/40 to-white">
              <div className="max-w-xl mx-auto text-center sm:text-left">
                <span className="inline-block px-4 py-2 bg-white border border-teal-200 rounded-full text-teal-600 text-sm font-semibold uppercase tracking-wider mb-8">
                  Meet Rhia
                </span>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-black mb-8 leading-tight">
                  I get it - you just want{' '}
                  <span className="font-normal italic">something that works</span>
                </h2>

                <div className="w-16 h-px bg-teal-500 mb-8 mx-auto sm:mx-0"></div>

                <div className="space-y-6 text-base sm:text-lg text-black/70 leading-relaxed mb-10">
                  <p>
                    I've been there too. Spending money on fancy creams that smell nice but do nothing. Trying every facial going and still seeing the same tired reflection. It's frustrating, isn't it?
                  </p>
                  <p>
                    Surgery felt too scary and way too expensive. Those "miracle" products on Instagram? Yeah, not fooling anyone. You just want something real - something that actually tightens and lifts without all the drama.
                  </p>
                  <p className="text-teal-700 font-medium">
                    That's exactly why I fell in love with plasma fibroblast. It's the real deal, and I'll be with you every step of the way.
                  </p>
                </div>

                <a
                  href="https://www.fresha.com/a/rhi-aesthetics-eastleigh-heron-square-hly29r98?service=s%3A22476966&pId=2514594"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-600 text-white px-10 py-4 rounded font-semibold hover:bg-teal-700 transition-all duration-300 uppercase text-sm tracking-wider shadow-lg hover:shadow-xl hover:scale-105 mx-auto sm:mx-0 inline-block"
                >
                  Book Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-white py-12 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="w-full text-center mb-12 sm:mb-20">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-600 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 sm:mb-6">
              The Process
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-black mb-4 sm:mb-6">
              How It Works
            </h2>
            <p className="text-base sm:text-xl text-black/60 max-w-3xl mx-auto font-light">
              Let me walk you through what actually happens - no confusing jargon, I promise!
            </p>
          </div>

          <div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Zap,
                title: "The Plasma Magic",
                description: "I use a special pen that creates tiny little dots on your skin. It sounds weird but these micro-points wake up your fibroblasts - basically the cells that build collagen. They get to work rebuilding your skin's elasticity from the inside out.",
                number: "01",
                image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplans9BafFowHvBk0FM54DR6T7haPjcVdE8o3ZfIw"
              },
              {
                icon: Heart,
                title: "Your Skin Does Its Thing",
                description: "Over the next few days, your skin naturally contracts and tightens. Those little dots will fade as brand new collagen builds up underneath. Your body's doing all the hard work here - clever, right?",
                number: "02",
                image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansB3LukPXAT70DbI3p4EqW1ve6ijGVXNYd8hwf"
              },
              {
                icon: Heart,
                title: "Hello, Lifted Skin!",
                description: "Within 6-12 days you'll start seeing it - smoother, tighter, more lifted skin. And the best bit? No needles, no surgery, just your own natural collagen doing its job.",
                number: "03",
                image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansxBjMKqYj7ghxUT0Ry8DfXk9KamOCNAuW12ML"
              }
            ].map((step, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-teal-50 to-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-teal-200 hover:border-teal-500/50 transition-all duration-500 hover-lift overflow-hidden text-center"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute top-4 left-1/2 -translate-x-1/2 sm:left-4 sm:translate-x-0 w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 z-10">
                  <span className="text-2xl sm:text-3xl font-black text-white">{step.number}</span>
                </div>

                <div className="relative z-10 space-y-4 sm:space-y-6 pt-16 sm:pt-20">
                  <div className="bg-gradient-to-br from-teal-100 to-teal-50 rounded-2xl aspect-video flex items-center justify-center border-2 border-teal-200 overflow-hidden relative mb-4">
                    <img src={step.image} alt={step.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-black">{step.title}</h3>
                  <p className="text-sm sm:text-base text-black/70 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 bg-gradient-to-r from-teal-50 to-teal-100/50 border border-teal-500/20 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto text-center">
            <p className="text-lg sm:text-xl text-black">
              <strong className="text-teal-600 font-bold">Don't worry about pain</strong> — I numb you up properly first, so you'll just feel a warm, tingly sensation.
            </p>
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <a
              href="https://www.fresha.com/a/rhi-aesthetics-eastleigh-heron-square-hly29r98?service=s%3A22476966&pId=2514594"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-600 text-white px-10 py-4 rounded font-semibold hover:bg-teal-700 transition-all duration-300 uppercase text-sm tracking-wider shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Free Consultation</span>
            </a>
          </div>
          </div>
        </div>
      </section>

      <section id="timeline" className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="w-full text-center mb-4 sm:mb-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-center text-black mb-4">
              Your Journey
            </h2>
          </div>
        </div>

        <div>
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

              <h3 className="text-2xl sm:text-3xl font-black mb-4 text-teal-900">I've Got You Covered</h3>
              <p className="text-base sm:text-lg mb-8 leading-relaxed text-black/80 max-w-2xl mx-auto">
                You won't be left wondering what to do next! I'll give you a proper aftercare guide - what's normal, what to avoid, and how to get the best results. And you can always message me if you're worried about anything.
              </p>

              <a
                href="https://www.fresha.com/a/rhi-aesthetics-eastleigh-heron-square-hly29r98?service=s%3A22476966&pId=2514594"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-600 text-white px-10 py-4 rounded font-semibold hover:bg-teal-700 transition-all duration-300 uppercase text-sm tracking-wider shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Free Consultation</span>
              </a>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-teal-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-600 text-sm font-semibold uppercase tracking-wider mb-6">
              Testimonials
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-black mb-4">
              What Our <br className="sm:hidden" />Customers Say
            </h2>
            <p className="text-lg sm:text-xl text-black/60 max-w-2xl mx-auto font-light">
              Real feedback from real clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                quote: "Rhia is amazing! I got really bad acne scarring and had no idea who to trust. She's helped my skin get better with every treatment and truly isn't out to just make money. She's gone routes that help my face while not breaking the bank lol. Been coming for over 6 months and my skin is healing and looking better than when I first started. I trust & recommend RHI Aesthetics all the time!",
                name: "Christine M.",
                location: "Southampton"
              },
              {
                quote: "I've been seeing Rhia for a little over 6 months now. I've always struggled with my skin but in just a few months I've noticed such a difference! Rhia is so knowledgeable and tailors my facial to what my skin needs. She answers any and all questions I have about skin treatments or products. She's the best, I highly recommend!",
                name: "Sophie T.",
                location: "Southampton"
              },
              {
                quote: "Cannot say enough good things about this place! From the moment you walk in, you are greeted with a warm smile, such a friendly hello; you feel so welcome. I see Rhia for my facials and I absolutely love her! The care and attention to every little detail made all the difference. My skin looks naturally refreshed - not overdone or fake looking at all.",
                name: "Karen P.",
                location: "Southampton"
              },
              {
                quote: "I mean, I can't say enough great things about this place! From the moment you walk in, you're greeted with such a friendly hello; you feel so welcome. I see Rhia for plasma treatments and I already see such great improvements in just a short few weeks. Already can't wait for my next appointment!",
                name: "Michelle R.",
                location: "Southampton"
              },
              {
                quote: "From day one I felt in such good hands. Rhia's expertise just gave me this confidence that everything would be okay. And it was! The healing went exactly how she said it would. Best decision I've made for my skin in years. The confidence boost alone is worth it but the results just keep getting better!",
                name: "Emma L.",
                location: "Southampton"
              },
              {
                quote: "Best decision I've ever made. The whole thing felt so professional and safe, you can tell Rhia really knows what she's doing. The results honestly speak for themselves! I had pretty high expectations going in but honestly? This exceeded them. My skin genuinely feels tighter and I look years younger!",
                name: "Rebecca S.",
                location: "Southampton"
              },
              {
                quote: "Not gonna lie, I was super skeptical at first. But the transformation is actually real?? My friends keep asking if I've had work done because it looks so natural. What I loved most was the honesty. No fake promises or overselling, just straight talk about what to expect. I feel like myself again, just... better!",
                name: "Lisa H.",
                location: "Southampton"
              },
              {
                quote: "The entire journey was just... caring. That's the word. Professional yes, but also really caring. I genuinely feel like I've turned back the clock on my skin aging and I'm here for it! Why did I wait so long to do this?! If you're on the fence just book a consultation, seriously. You won't regret it!",
                name: "Janet M.",
                location: "Southampton"
              },
              {
                quote: "Honestly I was SO nervous before! But Rhia sat with me and explained every single thing. The swelling was only bad for like 3 days, dots were gone in a week, and by week 8... WOW. Just incredible. I've literally wasted hundreds on creams that did absolutely nothing. This ACTUALLY worked! Hands down the best investment!",
                name: "Sarah B.",
                location: "Southampton"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-teal-100 hover:shadow-lg hover:border-teal-200 transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-teal-100 pt-4">
                  <p className="font-semibold text-black">{testimonial.name}</p>
                  <p className="text-sm text-black/60">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => toggleSection('is-right-for-you')}
            className="w-full text-center mb-12 sm:mb-20 cursor-pointer"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-center text-black mb-4">
              Is This Right For You?
            </h2>
          </button>

          <div className={`overflow-visible transition-all duration-500 ease-in-out ${expandedSections['is-right-for-you'] ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-10 py-4">
            <div className="relative bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-2xl sm:rounded-3xl p-6 sm:p-10 border-2 border-teal-500 group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-teal-500/10 rounded-full blur-3xl -z-10"></div>

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-6 sm:mb-8">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-teal-900 text-center sm:text-left">You'll Love This If:</h3>
                </div>

                <ul className="space-y-4 sm:space-y-5">
                  {[
                    "You're fed up with saggy eyelids or loose skin that makes you look tired",
                    "You want real results but surgery feels too extreme (and expensive!)",
                    "You can take 5-7 days to let your skin heal properly",
                    "You want someone who actually knows what they're doing and will look after you"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3 sm:space-x-4">
                      <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-teal-600 flex-shrink-0 mt-0.5 sm:mt-1" />
                      <span className="text-black/80 text-sm sm:text-lg leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-neutral-50 to-neutral-100/50 rounded-2xl sm:rounded-3xl p-6 sm:p-10 border-2 border-neutral-400 group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-neutral-400/10 rounded-full blur-3xl -z-10"></div>

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-6 sm:mb-8">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-neutral-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <XCircle className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-neutral-900 text-center sm:text-left">Maybe Not For You If:</h3>
                </div>

                <ul className="space-y-4 sm:space-y-5">
                  {[
                    "You've been sunbathing recently or your skin's having a bit of a moment",
                    "You're expecting to wake up looking 20 years younger overnight",
                    "You can't be bothered with the aftercare (it's important, sorry!)",
                    "You're after the cheapest option going - this is an investment in yourself"
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
              Not sure if it's right for you? Just book a chat with me - no pressure, I'll take a look at your skin and give you my honest opinion.
            </p>
            <a
              href="https://www.fresha.com/a/rhi-aesthetics-eastleigh-heron-square-hly29r98?service=s%3A22476966&pId=2514594"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-600 text-white px-10 py-4 rounded font-semibold hover:bg-teal-700 transition-all duration-300 uppercase text-sm tracking-wider shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Free Consultation</span>
            </a>
          </div>
          </div>
        </div>
      </section>

      <section id="faqs" className="py-12 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-black mb-4">
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

      <section id="cta" className="relative py-20 sm:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansykJ9XUnOIJPwhi3Q9WsA61ykCl5eRHLYpVSN"
            alt="Treatment background"
            className="w-full h-full object-cover sm:object-center object-[center_30%]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-20">
          <div className="text-center">
            <span className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-semibold uppercase tracking-wider mb-8">
              Ready to Transform?
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-light text-white mb-6 leading-tight">
              Start Your{' '}
              <span className="font-normal italic">Journey</span>
            </h2>

            <div className="w-20 h-px bg-white mx-auto mb-10"></div>

            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed">
              Imagine waking up feeling confident in your own skin again - naturally lifted, beautifully you.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <a
                href="https://www.fresha.com/a/rhi-aesthetics-eastleigh-heron-square-hly29r98?service=s%3A22476966&pId=2514594"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-600 text-white px-10 py-4 rounded font-semibold hover:bg-teal-700 transition-all duration-300 uppercase text-sm tracking-wider shadow-lg hover:shadow-xl hover:scale-105"
              >
                Book Free Consultation
              </a>

              <a
                href="https://wa.me/441234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-teal-600 text-teal-600 px-10 py-4 rounded font-semibold hover:bg-teal-600 hover:text-white transition-all duration-300 uppercase text-sm tracking-wider shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Send Message</span>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="hidden sm:flex flex-wrap items-center justify-center gap-3 sm:gap-8 text-xs sm:text-sm text-white/80">
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <Shield className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-white" />
                <span>GDC Registered</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <Award className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-white" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <Users className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-white" />
                <span>150+ Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white pt-12 sm:pt-20 pb-4 sm:pb-6 px-4 sm:px-6 border-t border-teal-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div className="space-y-4 sm:space-y-6 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start group">
                <div className="w-10 h-10 sm:w-12 sm:h-12">
                  <img
                    src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansrKuIikggJMAWrzNy61nv7tqUuYLkCVcsZQHl"
                    alt="RHI Aesthetics Logo"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                Safe, natural skin tightening in Southampton.
              </p>
              <div className="flex space-x-3 sm:space-x-4 justify-center sm:justify-start">
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

            <div className="text-center sm:text-left">
              <h3 className="font-black text-base sm:text-lg mb-4 sm:mb-6 text-teal-400">Contact</h3>
              <div className="space-y-3 sm:space-y-4 text-white/70 text-sm sm:text-base">
                <p className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 hover:text-teal-400 transition-colors duration-300">
                  <MapPin className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                  <span>Southampton, UK</span>
                </p>
                <p className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 hover:text-teal-400 transition-colors duration-300">
                  <Phone className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                  <span>07307 762776</span>
                </p>
                <p className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 hover:text-teal-400 transition-colors duration-300">
                  <Mail className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                  <span>rhiaesthetics@mail.com</span>
                </p>
              </div>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="font-black text-base sm:text-lg mb-4 sm:mb-6 text-teal-400">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3 text-white/70 text-sm sm:text-base">
                {['how-it-works', 'results', 'timeline', 'faqs'].map((link) => (
                  <li key={link} className="flex justify-center sm:justify-start">
                    <button
                      onClick={() => {
                        const element = document.getElementById(link);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                      className="hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="font-black text-base sm:text-lg mb-4 sm:mb-6 text-teal-400">Hours</h3>
              <div className="space-y-2 sm:space-y-3 text-white/70 text-sm sm:text-base">
                <p>Mon-Thurs: <span className="text-white font-semibold">11am-8pm</span></p>
                <p>Friday: <span className="text-white font-semibold">10am-3pm</span></p>
                <p>Sat-Sun: <span className="text-white font-semibold">Appointments on Request</span></p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 sm:pt-10">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
              <p className="text-white/50 text-xs sm:text-sm">
                &copy; 2025 RHI Aesthetics. All rights reserved.
              </p>
              <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
                <Link
                  to="/privacy-policy"
                  className="text-white/50 hover:text-teal-400 transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <span className="text-white/30">•</span>
                <Link
                  to="/terms-of-service"
                  className="text-white/50 hover:text-teal-400 transition-colors duration-300"
                >
                  Terms of Service
                </Link>
                <span className="text-white/30">•</span>
                <Link
                  to="/cookie-policy"
                  className="text-white/50 hover:text-teal-400 transition-colors duration-300"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>

          {/* Triple Ten Digits Banner */}
          <div className="mt-8 pt-4 border-t border-white/10">
            <div className="text-center">
              <a
                href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=alwin@tripletendigits.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <p className="text-white/60 text-xs sm:text-sm">
                  <span className="text-teal-400 hover:text-teal-300 transition-colors font-semibold underline">Triple Ten Digits</span>
                  {' '}<span className="text-white/40">|</span>{' '}
                  Competition-crushing websites. Delivered in a week or less. Designed to convert.
                </p>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
