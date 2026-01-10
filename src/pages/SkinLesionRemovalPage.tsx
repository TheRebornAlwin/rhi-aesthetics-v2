import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import {
  Calendar,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Shield,
  Award,
  Heart,
  ChevronDown,
  MessageCircle,
  Instagram,
  Facebook,
  Star,
  ArrowRight,
  BadgeCheck,
  Sparkles,
  Clock,
  Users,
  MoveRight
} from 'lucide-react';

function SkinLesionRemovalPage() {
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
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

  const beforeAfterImages = [
    { before: "https://placehold.co/600x800/e0f2f1/00897b?text=Before+1", after: "https://placehold.co/600x800/b2dfdb/00695c?text=After+1", label: "Facial Mole", timeline: "6 weeks" },
    { before: "https://placehold.co/600x800/e0f2f1/00897b?text=Before+2", after: "https://placehold.co/600x800/b2dfdb/00695c?text=After+2", label: "Skin Tags", timeline: "3 weeks" },
    { before: "https://placehold.co/600x800/e0f2f1/00897b?text=Before+3", after: "https://placehold.co/600x800/b2dfdb/00695c?text=After+3", label: "Age Spot", timeline: "4 weeks" },
    { before: "https://placehold.co/600x800/e0f2f1/00897b?text=Before+4", after: "https://placehold.co/600x800/b2dfdb/00695c?text=After+4", label: "Cheek Mole", timeline: "5 weeks" }
  ];

  const testimonials = [
    {
      quote: "Very professional and friendly staff, procedure carried out quickly and efficiently. Would recommend. Skin tag removal was my procedure for info.",
      name: "Frank R.",
      treatment: "Skin Tag Removal"
    },
    {
      quote: "Amazing service. Was really well received, had skin tags removed which were really bothering me for years and was so satisfied with the treatment. Will be returning for sure and would recommend the skin and laser treatment.",
      name: "Marta R.",
      treatment: "Skin Tags Removed"
    },
    {
      quote: "honestly ive been staring at this thing on my neck for like 3 years now, always said id get it done but never did. finally bit the bullet and wish i did it sooner!! didnt hurt at all and healing was so quick. cant even see where it was now",
      name: "Lauren M.",
      treatment: "Neck Mole"
    },
    {
      quote: "I had a vascular treatment with Rhiannon and she was fantastic from start to finish. She made me feel totally at ease, took the time to ask which areas on my legs I wanted treated, and regularly checked in to make sure I was comfortable. I can already see some results and I'm really pleased with them.",
      name: "Caroline H.",
      treatment: "Vascular Treatment"
    }
  ];

  const faqs = [
    {
      question: "Does it hurt?",
      answer: "The area is numbed before treatment. You'll feel a small pinch from the numbing injection (2 seconds), then nothing during the removal. Most clients are surprised by how painless it is."
    },
    {
      question: "Will it scar?",
      answer: "With proper technique and aftercare, scarring is minimal. Most clients see any mark fade completely within 4-8 weeks. I use methods specifically designed to minimize scarring."
    },
    {
      question: "What's included in the £49 offer?",
      answer: "The £49 offer includes removal of 2 small lesions, free consultation, aftercare kit, detailed healing instructions, and WhatsApp support during your healing process."
    },
    {
      question: "How long does healing take?",
      answer: "Most people see the bulk of healing within 5-7 days. You'll have a small scab for about a week, then new pink skin that fades to match your skin tone over 4-6 weeks."
    },
    {
      question: "What if it's cancerous or dangerous?",
      answer: "During your free consultation, I examine everything carefully. If I have any concerns, I won't remove it - I'll refer you to get it properly checked by a dermatologist. Your safety is the priority."
    },
    {
      question: "Will it come back?",
      answer: "When removed, it's gone for good. We remove the cells that created it, so that specific lesion won't grow back. However, you might develop new ones elsewhere if you're prone to them."
    }
  ];

  const AnimatedCounter = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (isInView) {
        let start = 0;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);

        return () => clearInterval(timer);
      }
    }, [isInView, end]);

    return <span ref={ref}>{count}{suffix}</span>;
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-teal-600 origin-left z-50"
        style={{ scaleX: scaleProgress }}
      />

      {/* Floating CTA */}
      <motion.button
        onClick={() => scrollToSection('offer')}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: isHeaderScrolled ? 1 : 0, y: isHeaderScrolled ? 0 : 100 }}
        className="fixed bottom-8 right-8 z-50 bg-teal-600 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 group"
      >
        <Calendar className="w-5 h-5" />
        <span className="font-semibold">Book Now - £49</span>
        <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </motion.button>

      {/* Glassmorphism Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isHeaderScrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center group">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="w-12 h-12"
              >
                <img
                  src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansrKuIikggJMAWrzNy61nv7tqUuYLkCVcsZQHl"
                  alt="RHI Aesthetics"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </Link>

            <div className="flex items-center space-x-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/447307762776"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center space-x-2 text-gray-700 hover:text-teal-600 transition-colors px-4 py-2 rounded-lg hover:bg-teal-50"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm font-medium">Message</span>
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('offer')}
                className="bg-gradient-to-r from-teal-600 to-teal-500 text-white px-6 py-2.5 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-sm"
              >
                Book Consultation
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* HERO - Futuristic with Parallax */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-blue-50">
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(20, 184, 166, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
              backgroundSize: '200% 200%',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-32 lg:py-40 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-10"
            >
              {/* Badge with Glassmorphism */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-5 py-2.5 bg-white/60 backdrop-blur-lg rounded-full border border-teal-200/50 shadow-lg"
              >
                <BadgeCheck className="w-4 h-4 text-teal-600 mr-2" />
                <span className="text-sm font-semibold bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                  300+ Treatments • Southampton
                </span>
              </motion.div>

              {/* Massive Kinetic Typography */}
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 leading-[0.95] tracking-tight"
                >
                  Safe Skin
                  <motion.span
                    className="block bg-gradient-to-r from-teal-600 via-teal-500 to-blue-500 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ['0%', '100%', '0%'],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{ backgroundSize: '200% auto' }}
                  >
                    Lesion Removal
                  </motion.span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl font-light"
                >
                  Professional mole, skin tag & lesion removal.{' '}
                  <span className="font-semibold text-teal-600">Minimal scarring.</span>{' '}
                  <span className="font-semibold text-teal-600">Quick healing.</span>
                </motion.p>
              </div>

              {/* Stats with Animated Counters */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-8 py-6"
              >
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="font-bold text-gray-900">5.0</span>
                </div>
                <div className="h-8 w-px bg-gray-300" />
                <div className="flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-teal-600" />
                  <span className="text-sm font-medium text-gray-700">Qualified Practitioner</span>
                </div>
              </motion.div>

              {/* CTAs with Micro-interactions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(20, 184, 166, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection('offer')}
                  className="group relative bg-gradient-to-r from-teal-600 to-teal-500 text-white px-10 py-5 rounded-2xl font-bold shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span className="text-lg">Book Free Consultation</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/447307762776"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-10 py-5 rounded-2xl font-bold transition-all duration-300 overflow-hidden bg-white/80 backdrop-blur-lg border-2 border-gray-200 hover:border-teal-500 shadow-lg hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2 text-gray-700 group-hover:text-teal-600">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-lg">Message First</span>
                  </span>
                </motion.a>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-sm text-gray-500"
              >
                ✓ Free consultation &nbsp;•&nbsp; ✓ No obligation &nbsp;•&nbsp; ✓ WhatsApp support
              </motion.p>
            </motion.div>

            {/* Right: 3D Card with Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              <motion.div
                className="relative rounded-3xl overflow-hidden"
                whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }}
                transition={{ duration: 0.3 }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: 1000,
                }}
              >
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-500/20 backdrop-blur-sm z-10 rounded-3xl" />

                <img
                  src="https://placehold.co/800x1000/e0f2f1/00897b?text=Rhi+Portrait"
                  alt="Rhiannon - Aesthetic Practitioner"
                  className="w-full h-auto object-cover relative z-0 shadow-2xl"
                />

                {/* Floating Info Card with Glassmorphism */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-8 left-8 right-8 z-20 bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/50"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Rhiannon</h3>
                  <p className="text-teal-600 font-medium mb-3">Qualified Aesthetic Practitioner</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span><AnimatedCounter end={300} suffix="+" /> clients</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>15-min treatment</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-teal-400 to-blue-400 rounded-full blur-3xl opacity-60"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full blur-3xl opacity-60"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 0.7, 0.6],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
        >
          <span className="text-sm text-gray-500 font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-2 bg-teal-600 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* BEFORE/AFTER - Interactive Hover Cards */}
      <section id="results" className="py-32 px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-20 left-10 w-96 h-96 bg-teal-200 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-teal-100 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-teal-600 mr-2" />
              <span className="text-sm font-semibold text-teal-700">Real Results</span>
            </motion.div>

            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Minimal Scarring,
              <span className="block bg-gradient-to-r from-teal-600 to-blue-500 bg-clip-text text-transparent">
                Natural Results
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Every treatment performed in Southampton with precision and care
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {beforeAfterImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative"
              >
                {/* 3D Card Effect */}
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform-gpu">
                  {/* Before/After Images */}
                  <div className="relative h-80 overflow-hidden">
                    <div className="absolute inset-0 grid grid-cols-2">
                      <div className="relative">
                        <img
                          src={item.before}
                          alt={`Before ${item.label}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 left-3 bg-red-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">
                          Before
                        </div>
                      </div>
                      <div className="relative">
                        <img
                          src={item.after}
                          alt={`After ${item.label}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 right-3 bg-teal-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">
                          After
                        </div>
                      </div>
                    </div>

                    {/* Divider line */}
                    <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white shadow-lg z-10" />
                  </div>

                  {/* Info Card with Glassmorphism */}
                  <div className="p-5 bg-gradient-to-br from-gray-50 to-white">
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{item.label}</h3>
                    <p className="text-sm text-teal-600 font-medium flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{item.timeline} healed</span>
                    </p>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-600/0 to-teal-600/0 group-hover:from-teal-600/10 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
                </div>

                {/* Floating shadow effect */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-teal-400/0 to-teal-400/20 blur-xl transform translate-y-4 group-hover:translate-y-8 transition-transform duration-500 rounded-2xl" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('offer')}
              className="group inline-flex items-center space-x-2 text-teal-600 font-bold text-lg hover:text-teal-700 transition-colors"
            >
              <span>See your results</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* THE OFFER - Luxury Glassmorphism Card */}
      <section id="offer" className="py-32 px-6 relative overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-teal-500 to-blue-500">
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
              backgroundSize: '200% 200%',
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-2xl rounded-3xl p-12 lg:p-16 border border-white/20 shadow-2xl"
          >
            <div className="text-center space-y-10">
              {/* Price Display with Animation */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring" }}
                className="space-y-6"
              >
                <div className="inline-block">
                  <motion.div
                    className="text-white/90 text-xl font-medium mb-4"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Introductory Offer
                  </motion.div>
                  <div className="flex items-baseline justify-center space-x-4">
                    <motion.span
                      className="text-8xl lg:text-9xl font-black text-white"
                      whileHover={{ scale: 1.05 }}
                    >
                      £49
                    </motion.span>
                  </div>
                  <div className="text-white/80 text-2xl font-light mt-4">
                    Remove 2 Lesions
                  </div>
                </div>
              </motion.div>

              {/* What's Included - Beautiful Icon Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-8">
                {[
                  { icon: CheckCircle, text: "2 Lesions Removed" },
                  { icon: Shield, text: "Free Consultation" },
                  { icon: Heart, text: "Aftercare Kit" },
                  { icon: MessageCircle, text: "WhatsApp Support" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <item.icon className="w-10 h-10 text-white" />
                    <span className="text-white font-medium text-center text-sm">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button - Premium Design */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="pt-6"
              >
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center space-x-3 bg-white text-teal-700 px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
                >
                  <Calendar className="w-6 h-6" />
                  <span>Book Your £49 Consultation</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </motion.a>

                <p className="text-white/80 text-sm mt-6">
                  No obligation • Additional lesions available • Book anytime
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Floating decorative orbs */}
          <motion.div
            className="absolute -top-20 -left-20 w-40 h-40 bg-white/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          />
          <motion.div
            className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: 1
            }}
          />
        </div>
      </section>

      {/* PROCESS - Sleek Timeline */}
      <section id="process" className="py-32 px-6 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Simple, <span className="bg-gradient-to-r from-teal-600 to-blue-500 bg-clip-text text-transparent">Seamless</span> Process
            </h2>
            <p className="text-xl text-gray-600 font-light">
              From consultation to full healing in 3 steps
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-teal-200 via-teal-400 to-teal-200 -translate-y-1/2" />

            <div className="grid md:grid-cols-3 gap-12 relative">
              {[
                {
                  number: "01",
                  title: "Free Consultation",
                  desc: "15-minute consultation. We examine, answer questions, show you what to expect. Zero pressure.",
                  icon: MessageCircle,
                  color: "from-teal-500 to-teal-600"
                },
                {
                  number: "02",
                  title: "Quick Treatment",
                  desc: "Area numbed (2-second pinch), then removal using advanced techniques. 15-20 minutes total.",
                  icon: Shield,
                  color: "from-teal-600 to-blue-500"
                },
                {
                  number: "03",
                  title: "Guided Healing",
                  desc: "Small scab for a week. Clear instructions plus WhatsApp support. Healing in 4-6 weeks.",
                  icon: Heart,
                  color: "from-blue-500 to-blue-600"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative"
                >
                  {/* Card with Glassmorphism */}
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                  >
                    {/* Step Number Badge */}
                    <div className={`absolute -top-6 left-8 w-14 h-14 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-xl`}>
                      <span className="text-white font-black text-xl">{step.number}</span>
                    </div>

                    {/* Icon with gradient */}
                    <div className="mt-8 mb-6">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${step.color}`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-blue-500/0 hover:from-teal-500/5 hover:to-blue-500/5 rounded-3xl transition-all duration-500 pointer-events-none" />
                  </motion.div>

                  {/* Floating shadow */}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-b from-teal-400/0 to-teal-400/10 blur-2xl transform translate-y-4 rounded-3xl" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - Elegant Slider */}
      <section className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/4 right-10 w-96 h-96 bg-teal-200 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-yellow-100 rounded-full mb-6"
            >
              <Star className="w-4 h-4 text-yellow-600 mr-2 fill-yellow-600" />
              <span className="text-sm font-semibold text-yellow-700">5.0 Rating</span>
            </motion.div>

            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Loved by <span className="bg-gradient-to-r from-teal-600 to-blue-500 bg-clip-text text-transparent">Southampton</span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Real experiences from real people
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group relative"
              >
                {/* Glassmorphism Card */}
                <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  {/* Stars */}
                  <div className="flex mb-5">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center space-x-4 pt-5 border-t border-gray-200">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-blue-400 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-teal-600 font-medium">{testimonial.treatment}</p>
                    </div>
                  </div>

                  {/* Decorative quote mark */}
                  <div className="absolute top-6 right-6 text-8xl text-teal-100 font-serif leading-none opacity-50 select-none">
                    "
                  </div>
                </div>

                {/* Floating shadow */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-teal-400/0 to-teal-400/10 blur-2xl transform translate-y-4 group-hover:translate-y-8 transition-transform duration-500 rounded-3xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Modern Accordion */}
      <section id="faqs" className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Common <span className="bg-gradient-to-r from-teal-600 to-blue-500 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Everything you need to know
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group"
              >
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left transition-colors"
                  >
                    <span className="font-bold text-gray-900 text-lg pr-8">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-6 h-6 text-teal-600" />
                    </motion.div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === index ? 'auto' : 0,
                      opacity: openFaq === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-gray-600 leading-relaxed text-lg">
                      {faq.answer}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - Immersive */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(20, 184, 166, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
              backgroundSize: '200% 200%',
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl lg:text-7xl font-black text-white leading-tight"
              >
                Ready to Get Started?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-2xl text-gray-300 font-light max-w-3xl mx-auto"
              >
                Free consultation with no obligation. Let's talk about what's right for you.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center space-x-3 bg-white text-gray-900 px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                <Calendar className="w-6 h-6" />
                <span>Book Free Consultation</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </motion.a>

              <motion.a
                href="https://wa.me/447307762776"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center space-x-3 border-2 border-white text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white/10 backdrop-blur-lg transition-all duration-300"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Message First</span>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-8 text-gray-400 text-sm pt-8"
            >
              {[
                { icon: CheckCircle, text: "Free Consultation" },
                { icon: Shield, text: "From £49" },
                { icon: MessageCircle, text: "WhatsApp Support" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <item.icon className="w-5 h-5 text-teal-400" />
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            delay: 1
          }}
        />
      </section>

      {/* FOOTER - Minimal & Elegant */}
      <footer className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-12 h-12"
              >
                <img
                  src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansrKuIikggJMAWrzNy61nv7tqUuYLkCVcsZQHl"
                  alt="RHI Aesthetics"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <p className="text-white/60 text-sm leading-relaxed">
                Professional skin lesion removal in Southampton
              </p>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="https://www.instagram.com/rhi.aesthetics?igsh=MWhvMjFqb3Zscms0aw%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="https://www.facebook.com/profile.php?id=61575636000105"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-sm mb-5 text-teal-400 uppercase tracking-wider">Contact</h3>
              <div className="space-y-4 text-white/70 text-sm">
                <p className="flex items-center space-x-3 hover:text-white transition-colors">
                  <MapPin className="w-4 h-4 text-teal-400" />
                  <span>Southampton, UK</span>
                </p>
                <p className="flex items-center space-x-3 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-teal-400" />
                  <span>07307 762776</span>
                </p>
                <p className="flex items-center space-x-3 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-teal-400" />
                  <span>rhiaesthetics@mail.com</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-sm mb-5 text-teal-400 uppercase tracking-wider">Services</h3>
              <ul className="space-y-3 text-white/70 text-sm">
                <li>
                  <Link to="/skin-lesion-removal" className="hover:text-teal-400 transition-colors">
                    Skin Lesion Removal
                  </Link>
                </li>
                <li>
                  <Link to="/plasma-fibroblast" className="hover:text-teal-400 transition-colors">
                    Plasma Fibroblast
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-sm mb-5 text-teal-400 uppercase tracking-wider">Hours</h3>
              <div className="space-y-3 text-white/70 text-sm">
                <p>Mon-Thurs: <span className="text-white font-medium">11am-8pm</span></p>
                <p>Friday: <span className="text-white font-medium">10am-3pm</span></p>
                <p>Sat-Sun: <span className="text-white font-medium">By Appointment</span></p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
              <p className="text-white/50">
                &copy; 2025 RHI Aesthetics. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <Link to="/privacy-policy" className="text-white/50 hover:text-teal-400 transition-colors">
                  Privacy
                </Link>
                <Link to="/terms-of-service" className="text-white/50 hover:text-teal-400 transition-colors">
                  Terms
                </Link>
                <Link to="/cookie-policy" className="text-white/50 hover:text-teal-400 transition-colors">
                  Cookies
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 text-center">
            <a
              href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=alwin@tripletendigits.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block group"
            >
              <p className="text-white/60 text-xs">
                <span className="text-teal-400 group-hover:text-teal-300 transition-colors font-semibold">Triple Ten Digits</span>
                <span className="text-white/40 mx-2">|</span>
                <span className="group-hover:text-white/80 transition-colors">Competition-crushing websites</span>
              </p>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SkinLesionRemovalPage;
