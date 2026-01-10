import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Calendar,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Shield,
  Heart,
  ChevronDown,
  MessageCircle,
  Instagram,
  Facebook,
  Star,
  ArrowRight,
  Clock,
  Sparkles,
  Award,
  Users,
  Eye,
  Camera,
  Smile
} from 'lucide-react';
import { Timeline } from '../components/ui/timeline';

function SkinLesionRemovalPage() {
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
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
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const beforeAfterImages = [
    { before: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=600&h=800&fit=crop", after: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=800&fit=crop", label: "Facial Mole", timeline: "6 weeks" },
    { before: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=800&fit=crop", after: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=800&fit=crop", label: "Skin Tags", timeline: "3 weeks" },
    { before: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&h=800&fit=crop", after: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=800&fit=crop", label: "Age Spot", timeline: "4 weeks" },
    { before: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=800&fit=crop", after: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=800&fit=crop", label: "Cheek Mole", timeline: "5 weeks" },
    { before: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=800&fit=crop", after: "https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?w=600&h=800&fit=crop", label: "Neck Lesion", timeline: "6 weeks" },
    { before: "https://images.unsplash.com/photo-1498843053639-170ff2122f35?w=600&h=800&fit=crop", after: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=800&fit=crop", label: "Sun Spot", timeline: "4 weeks" }
  ];

  const testimonialStories = [
    {
      name: "Lauren M.",
      age: 34,
      treatment: "Neck Mole Removal",
      before: "I'd been staring at this thing on my neck for like 3 years. Every morning when I got ready, there it was. I kept saying I'd get it done but never followed through. I was worried it would hurt, worried about scarring, worried I'd regret it.",
      process: "Rhi made me feel so comfortable from the start. She explained everything, showed me what to expect, and honestly? It didn't hurt at all. The numbing worked perfectly.",
      after: "I wish I'd done this sooner. Healing was so quick and I can't even see where it was now. I don't avoid the mirror anymore. Such a simple thing but it's changed how I feel every single day.",
      result: "Confidence restored"
    },
    {
      name: "Marta R.",
      age: 42,
      treatment: "Multiple Skin Tags",
      before: "I'd had these skin tags for years and they really bothered me. They'd catch on my jewelry and I was always conscious of them. I looked into removal before but everywhere seemed so expensive and clinical.",
      process: "Rhiannon was so professional and made the whole experience easy. She took her time, checked in with me throughout, and I felt completely safe.",
      after: "I'm so satisfied with the results. They're gone and healing was straightforward. I'm already planning to come back for another area. Would 100% recommend.",
      result: "Finally free"
    },
    {
      name: "Caroline H.",
      age: 38,
      treatment: "Vascular Treatment",
      before: "I was nervous going in, not gonna lie. I'd never done anything like this before and I wasn't sure what to expect. But it was something that had bothered me for a while.",
      process: "Rhiannon was fantastic from start to finish. She made me feel totally at ease, took the time to ask exactly which areas I wanted treated, and regularly checked in to make sure I was comfortable throughout.",
      after: "I can already see results and I'm really pleased with them. The whole experience was so much better than I expected. I feel more confident already.",
      result: "Worth every penny"
    }
  ];

  const faqs = [
    { question: "Does it hurt?", answer: "The area is numbed before treatment. You'll feel a small pinch from the numbing injection (2 seconds), then nothing during the removal. Most clients are surprised by how painless it is." },
    { question: "Will it scar?", answer: "With proper technique and aftercare, scarring is minimal. Most clients see any mark fade completely within 4-8 weeks. I use methods specifically designed to minimize scarring." },
    { question: "What's included in the £49 offer?", answer: "The £49 offer includes removal of 2 small lesions, free consultation, aftercare kit, detailed healing instructions, and WhatsApp support during your healing process." },
    { question: "How long does healing take?", answer: "Most people see the bulk of healing within 5-7 days. You'll have a small scab for about a week, then new pink skin that fades to match your skin tone over 4-6 weeks." },
    { question: "What if it's cancerous or dangerous?", answer: "During your free consultation, I examine everything carefully. If I have any concerns, I won't remove it - I'll refer you to get it properly checked by a dermatologist. Your safety is the priority." },
    { question: "Will it come back?", answer: "When removed, it's gone for good. We remove the cells that created it, so that specific lesion won't grow back. However, you might develop new ones elsewhere if you're prone to them." },
    { question: "Can I wear makeup after?", answer: "Give it 5-7 days before putting makeup directly on the treated area. You can wear makeup around the area from day 1. Once the scab falls off, you can gently cover with mineral makeup." },
    { question: "What if the NHS rejected me?", answer: "The NHS prioritizes medical need, so cosmetic removals aren't covered. Just because it's not medically necessary doesn't mean it's not affecting your confidence. That's why I offer this service." }
  ];

  const timelineData = [
    {
      title: "Day 1-2",
      content: (
        <div>
          <p className="text-gray-700 text-sm md:text-base font-light mb-6 leading-relaxed">
            Immediately after treatment, a small scab begins to form over the treated area. You may notice minimal redness around the site, which is completely normal.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=500&fit=crop"
              alt="Initial healing stage"
              className="rounded-lg object-cover h-32 md:h-48 w-full shadow-lg border-2 border-teal-100"
            />
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=500&fit=crop"
              alt="Aftercare products"
              className="rounded-lg object-cover h-32 md:h-48 w-full shadow-lg border-2 border-teal-100"
            />
          </div>
          <div className="bg-gradient-to-br from-teal-50 to-white border border-teal-200 rounded-lg p-6">
            <h4 className="text-teal-800 font-serif text-lg mb-3 font-light">What to Expect</h4>
            <ul className="space-y-2 text-sm text-gray-700 font-light">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                <span>Small protective scab forms naturally</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                <span>Minimal discomfort or tenderness</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                <span>Keep area clean and dry</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Day 3-7",
      content: (
        <div>
          <p className="text-gray-700 text-sm md:text-base font-light mb-6 leading-relaxed">
            The scab remains in place, protecting the healing skin underneath. Avoid picking or scratching - let it fall off naturally. Continue following your aftercare instructions.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <img
              src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=500&h=500&fit=crop"
              alt="Healing progress"
              className="rounded-lg object-cover h-32 md:h-48 w-full shadow-lg border-2 border-teal-100"
            />
            <img
              src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop"
              alt="Clean skincare"
              className="rounded-lg object-cover h-32 md:h-48 w-full shadow-lg border-2 border-teal-100"
            />
          </div>
          <div className="bg-gradient-to-br from-teal-50 to-white border border-teal-200 rounded-lg p-6">
            <h4 className="text-teal-800 font-serif text-lg mb-3 font-light">Care Guidelines</h4>
            <ul className="space-y-2 text-sm text-gray-700 font-light">
              <li className="flex items-start space-x-2">
                <Shield className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                <span>Do not pick or remove the scab</span>
              </li>
              <li className="flex items-start space-x-2">
                <Shield className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                <span>Keep area moisturized with provided cream</span>
              </li>
              <li className="flex items-start space-x-2">
                <Shield className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                <span>Avoid direct sun exposure</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Week 2-4",
      content: (
        <div>
          <p className="text-gray-700 text-sm md:text-base font-light mb-6 leading-relaxed">
            The scab has naturally fallen off, revealing fresh pink skin underneath. This new skin will gradually fade to match your natural skin tone over the coming weeks.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <img
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=500&h=500&fit=crop"
              alt="Pink new skin"
              className="rounded-lg object-cover h-32 md:h-48 w-full shadow-lg border-2 border-teal-100"
            />
            <img
              src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&h=500&fit=crop"
              alt="SPF protection"
              className="rounded-lg object-cover h-32 md:h-48 w-full shadow-lg border-2 border-teal-100"
            />
          </div>
          <div className="bg-gradient-to-br from-teal-50 to-white border border-teal-200 rounded-lg p-6">
            <h4 className="text-teal-800 font-serif text-lg mb-3 font-light">This Stage</h4>
            <ul className="space-y-2 text-sm text-gray-700 font-light">
              <li className="flex items-start space-x-2">
                <Heart className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                <span>Pink skin gradually fades</span>
              </li>
              <li className="flex items-start space-x-2">
                <Heart className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                <span>Can apply mineral makeup</span>
              </li>
              <li className="flex items-start space-x-2">
                <Heart className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                <span>Use SPF 30+ when outdoors</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Week 6+",
      content: (
        <div>
          <p className="text-gray-700 text-sm md:text-base font-light mb-6 leading-relaxed">
            Full healing achieved. The treated area has blended seamlessly with your natural skin tone. Most clients report minimal to no visible marking at this stage.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <img
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&h=500&fit=crop"
              alt="Fully healed skin"
              className="rounded-lg object-cover h-32 md:h-48 w-full shadow-lg border-2 border-teal-100"
            />
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&h=500&fit=crop"
              alt="Beautiful clear skin"
              className="rounded-lg object-cover h-32 md:h-48 w-full shadow-lg border-2 border-teal-100"
            />
          </div>
          <div className="bg-gradient-to-br from-teal-50 to-white border border-teal-200 rounded-lg p-6">
            <h4 className="text-teal-800 font-serif text-lg mb-3 font-light">Final Results</h4>
            <ul className="space-y-2 text-sm text-gray-700 font-light">
              <li className="flex items-start space-x-2">
                <Sparkles className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                <span>Skin tone fully normalized</span>
              </li>
              <li className="flex items-start space-x-2">
                <Sparkles className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                <span>Minimal to no visible scarring</span>
              </li>
              <li className="flex items-start space-x-2">
                <Sparkles className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                <span>Confidence fully restored</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Elegant Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isHeaderScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            <Link to="/" className="group">
              <motion.div whileHover={{ opacity: 0.7 }} transition={{ duration: 0.2 }} className="w-11 h-11">
                <img src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansrKuIikggJMAWrzNy61nv7tqUuYLkCVcsZQHl" alt="RHI Aesthetics" className="w-full h-full object-contain" />
              </motion.div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-10">
              {['Results', 'Stories', 'Process'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm tracking-wider text-gray-600 hover:text-teal-600 transition-colors duration-200 font-light uppercase"
                >
                  {item}
                </button>
              ))}
            </nav>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection('offer')}
              className="text-sm tracking-wider px-6 py-2.5 bg-teal-600 text-white hover:bg-teal-700 transition-colors duration-200 font-light uppercase"
            >
              Start Your Journey
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* EMPATHY-DRIVEN HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-teal-50/30">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&h=1080&fit=crop"
            alt="Clinic"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-white/40" />
        </div>

        <motion.div
          style={{ opacity }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto py-32"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            {/* Empathy Hook */}
            <div className="space-y-4">
              <p className="text-lg sm:text-xl text-gray-700 font-light leading-relaxed italic">
                You've been thinking about it for years.
              </p>
              <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
                Every morning when you look in the mirror, there it is. When you're talking to someone, you wonder if they're staring at it instead of listening to you. You angle your face in photos. You've tried to ignore it, but it's always there.
              </p>
            </div>

            <div className="w-20 h-px bg-teal-400 mx-auto" />

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-tight tracking-tight font-light">
              It's time to feel free again.
            </h1>

            <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-light">
              Safe, professional mole & skin lesion removal in Southampton.
              <span className="block mt-3 text-lg text-teal-700">Minimal scarring. Natural results. Finally confident.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection('offer')}
                className="px-10 py-4 bg-teal-600 text-white text-sm tracking-widest uppercase font-light hover:bg-teal-700 transition-all duration-200 shadow-lg shadow-teal-500/20"
              >
                See How It Works
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="https://wa.me/447307762776"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 border-2 border-teal-600 text-teal-600 text-sm tracking-widest uppercase font-light hover:bg-teal-50 transition-all duration-200"
              >
                Ask Me Anything
              </motion.a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-8 pt-6 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-teal-600 fill-teal-600" />
                ))}
                <span className="ml-2 font-light">5.0 Rating</span>
              </div>
              <div className="w-px h-4 bg-teal-300" />
              <span className="font-light">300+ Treatments</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-12 bg-teal-400"
          />
        </motion.div>
      </section>

      {/* YOU'RE NOT ALONE */}
      <section className="py-24 lg:py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900 font-light mb-6">You're Not Alone</h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              I see it all the time. The way women come in and say...
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Eye,
                text: "I feel like people are always staring at it when I'm talking to them"
              },
              {
                icon: Camera,
                text: "I avoid certain angles in photos or try to hide that side of my face"
              },
              {
                icon: Smile,
                text: "I've wanted this gone for years but kept putting it off"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-teal-50/30 border border-teal-100 rounded-lg"
              >
                <item.icon className="w-8 h-8 text-teal-600 mx-auto mb-4" />
                <p className="text-sm text-gray-700 font-light leading-relaxed italic">"{item.text}"</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-br from-teal-50 to-white border-2 border-teal-200 rounded-2xl p-12"
          >
            <p className="text-xl text-gray-800 font-light leading-relaxed mb-6">
              Here's what I want you to know:
            </p>
            <p className="text-lg text-gray-700 font-light leading-relaxed">
              Your feelings are valid. It's not vain to want this gone. It's not silly that it bothers you. And you don't have to live with it just because it's "not medically necessary."
            </p>
            <p className="text-lg text-teal-700 font-light leading-relaxed mt-6">
              Your confidence matters. Let me help you get it back.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-24 lg:py-32 px-6 bg-gradient-to-br from-teal-50/40 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-widest text-teal-600 uppercase mb-6 font-light">Is This For You?</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900 font-light mb-6">This Is For You If...</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "You've been covering it with makeup or trying to hide it for months or years",
              "You find yourself adjusting your face angle in photos to hide it",
              "You worry people are looking at it instead of you when you speak",
              "You've looked into removal before but were put off by the price or fear",
              "The NHS said it's cosmetic and won't remove it, leaving you frustrated",
              "You're nervous about scarring or the healing process",
              "You want it gone but need to trust the person doing it",
              "You're ready to finally feel confident in your own skin again"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-white border border-teal-100 rounded-lg"
              >
                <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-700 font-light leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-700 font-light italic">
              If any of these sound like you, you're in the right place.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BEFORE/AFTER GALLERY */}
      <section id="results" className="py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-xs tracking-widest text-teal-600 uppercase mb-6 font-light">Real Results</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900 font-light mb-6">See For Yourself</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Every treatment performed in Southampton with precision and care. These are real clients, real results.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {beforeAfterImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative bg-white overflow-hidden border border-teal-100"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <div className="absolute inset-0 grid grid-cols-2">
                    <img src={item.before} alt={`Before ${item.label}`} className="w-full h-full object-cover" />
                    <img src={item.after} alt={`After ${item.label}`} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white" />
                  <div className="absolute top-4 left-4 text-xs tracking-wider text-white bg-black/50 backdrop-blur-sm px-3 py-1 uppercase font-light">Before</div>
                  <div className="absolute top-4 right-4 text-xs tracking-wider text-white bg-black/50 backdrop-blur-sm px-3 py-1 uppercase font-light">After</div>
                </div>
                <div className="p-5 bg-teal-50/30 border-t border-teal-100">
                  <p className="text-sm text-gray-900 font-light">{item.label}</p>
                  <p className="text-xs text-teal-600 mt-1 font-light tracking-wide">{item.timeline} healed</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGINE FREEDOM */}
      <section className="py-24 lg:py-32 px-6 bg-gradient-to-br from-teal-600 to-teal-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-12"
          >
            <div className="space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light">Imagine This...</h2>
              <div className="w-20 h-px bg-white/40 mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              {[
                "Looking in the mirror and actually smiling at what you see",
                "Taking photos from any angle without a second thought",
                "Talking to people knowing they're looking at YOU, not your mole",
                "Waking up and not immediately touching or thinking about it",
                "Wearing your hair however you want without trying to hide anything",
                "Feeling confident in your own skin for the first time in years"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <Sparkles className="w-5 h-5 mt-1 flex-shrink-0" />
                  <p className="text-base font-light leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>

            <div className="pt-8">
              <p className="text-2xl font-serif font-light italic mb-8">
                "I wish I'd done this sooner"
              </p>
              <p className="text-base font-light leading-relaxed">
                That's what almost everyone says after their treatment. The relief, the confidence, the freedom—it's worth so much more than the cost.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection('offer')}
              className="px-12 py-5 bg-white text-teal-700 text-sm tracking-widest uppercase font-light hover:bg-gray-50 transition-all duration-200 shadow-lg"
            >
              I'm Ready For This
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* TRANSFORMED TESTIMONIALS - STORY FORMAT */}
      <section id="stories" className="py-24 lg:py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-xs tracking-widest text-teal-600 uppercase mb-6 font-light">Real Stories</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900 font-light mb-6">Their Journeys</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Real women from Southampton who finally felt free
            </p>
          </motion.div>

          <div className="space-y-12">
            {testimonialStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-teal-50/40 to-white border border-teal-100 rounded-2xl p-8 lg:p-12"
              >
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="font-serif text-2xl text-gray-900 font-light mb-2">{story.name}</h3>
                    <p className="text-sm text-teal-600 font-light">{story.treatment}</p>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-teal-600 fill-teal-600" />
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-xs tracking-widest text-gray-500 uppercase mb-3 font-light">Before</p>
                    <p className="text-sm text-gray-700 font-light leading-relaxed italic">"{story.before}"</p>
                  </div>

                  <div className="w-full h-px bg-teal-200" />

                  <div>
                    <p className="text-xs tracking-widest text-gray-500 uppercase mb-3 font-light">The Experience</p>
                    <p className="text-sm text-gray-700 font-light leading-relaxed italic">"{story.process}"</p>
                  </div>

                  <div className="w-full h-px bg-teal-200" />

                  <div>
                    <p className="text-xs tracking-widest text-gray-500 uppercase mb-3 font-light">After</p>
                    <p className="text-sm text-gray-700 font-light leading-relaxed italic mb-4">"{story.after}"</p>
                    <div className="inline-block px-4 py-2 bg-teal-600 text-white text-xs tracking-wider uppercase font-light rounded">
                      {story.result}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REFRAMED OFFER - TEST DRIVE PSYCHOLOGY */}
      <section id="offer" className="py-24 lg:py-32 px-6 bg-gradient-to-br from-teal-50/40 to-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-widest text-teal-600 uppercase mb-6 font-light">Try Before You Commit</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900 font-light mb-6">Start Small, See For Yourself</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              I know you might be nervous. Worried about pain, scarring, whether you can trust me. That's why I created this intro offer—so you can experience my work without the big commitment.
            </p>
          </motion.div>

          <div className="bg-white border-2 border-teal-200 rounded-3xl p-12 text-center">
            <div className="mb-12">
              <p className="text-base text-gray-600 font-light mb-4">Introductory Offer</p>
              <h3 className="font-serif text-6xl sm:text-7xl bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent font-light mb-4">£49</h3>
              <p className="text-2xl text-gray-700 font-light">Remove 2 Small Lesions</p>
            </div>

            <div className="mb-12">
              <p className="text-lg text-gray-700 font-light leading-relaxed mb-6 max-w-2xl mx-auto">
                This isn't just about removing two lesions. It's about letting you:
              </p>

              <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
                {[
                  "See my skill level and attention to detail",
                  "Experience the actual pain level (spoiler: minimal)",
                  "Watch how YOUR skin heals",
                  "Check for scarring before committing to more",
                  "Build trust before bigger treatments",
                  "Test the process without the big price tag"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 text-left p-4 bg-teal-50/50 border border-teal-100 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700 font-light">{item}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-white border border-teal-200 rounded-xl p-6 max-w-3xl mx-auto">
                <p className="text-xs tracking-widest text-teal-600 uppercase mb-3 font-light">What's Included</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Free consultation (no obligation)",
                    "Removal of 2 small lesions",
                    "Complete aftercare kit",
                    "Detailed healing instructions",
                    "WhatsApp support during healing"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Heart className="w-4 h-4 text-teal-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700 font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block px-12 py-5 bg-teal-600 text-white text-sm tracking-widest uppercase font-light hover:bg-teal-700 transition-colors shadow-lg shadow-teal-500/30 mb-4"
            >
              Book Your Treatment
            </motion.a>
            <p className="text-xs text-gray-500 font-light">Free consultation first • No pressure • Additional lesions available</p>
          </div>
        </div>
      </section>

      {/* REAL TALK - RADICAL TRANSPARENCY */}
      <section className="py-24 lg:py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-xs tracking-widest text-teal-600 uppercase mb-6 font-light">No BS, Just Honesty</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900 font-light mb-6">Real Talk</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              You deserve to know exactly what to expect. No sugar-coating, no hiding the truth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Will It Scar? */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-teal-50/40 to-white border border-teal-100 rounded-2xl p-10"
            >
              <Shield className="w-10 h-10 text-teal-600 mb-6" />
              <h3 className="font-serif text-2xl text-gray-900 font-light mb-6">"Will it scar?"</h3>
              <div className="space-y-4 text-sm text-gray-700 font-light leading-relaxed">
                <p>
                  <strong className="text-gray-900">Honest answer:</strong> You'll have a small mark at first—that's how healing works. But with proper technique and aftercare, most clients see it fade to nearly invisible within 4-8 weeks.
                </p>
                <p>
                  I use methods specifically designed to minimize scarring. The key is letting it heal naturally—no picking, following aftercare, protecting from sun.
                </p>
                <p className="text-teal-700 font-normal">
                  Most clients tell me the tiny healed mark is 100x better than the mole they'd been hiding for years.
                </p>
              </div>
            </motion.div>

            {/* Does It Hurt? */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-teal-50/40 to-white border border-teal-100 rounded-2xl p-10"
            >
              <Heart className="w-10 h-10 text-teal-600 mb-6" />
              <h3 className="font-serif text-2xl text-gray-900 font-light mb-6">"Does it hurt?"</h3>
              <div className="space-y-4 text-sm text-gray-700 font-light leading-relaxed">
                <p>
                  <strong className="text-gray-900">Honest answer:</strong> The numbing injection? Yeah, you'll feel a quick pinch for about 2 seconds. After that? Nothing during the actual removal.
                </p>
                <p>
                  Some clients feel a slight pressure or tugging, but no pain. Most people are genuinely surprised by how easy it is.
                </p>
                <p className="text-teal-700 font-normal">
                  If I had to rate it: the injection is maybe a 3/10 for 2 seconds. The removal itself? 0/10. You won't feel it.
                </p>
              </div>
            </motion.div>

            {/* What If It's Cancerous? */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-teal-50/40 to-white border border-teal-100 rounded-2xl p-10"
            >
              <CheckCircle className="w-10 h-10 text-teal-600 mb-6" />
              <h3 className="font-serif text-2xl text-gray-900 font-light mb-6">"What if it's cancerous?"</h3>
              <div className="space-y-4 text-sm text-gray-700 font-light leading-relaxed">
                <p>
                  <strong className="text-gray-900">Honest answer:</strong> During your free consultation, I examine it carefully. If anything looks concerning—unusual shape, color changes, irregular borders—I won't remove it.
                </p>
                <p>
                  I'll refer you to get it properly checked by a dermatologist first. Your safety is always the priority over any treatment.
                </p>
                <p className="text-teal-700 font-normal">
                  Most of what I see is completely benign—simple skin tags, moles, warts. But I'll never take risks with your health.
                </p>
              </div>
            </motion.div>

            {/* How Long Is Downtime? */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-teal-50/40 to-white border border-teal-100 rounded-2xl p-10"
            >
              <Clock className="w-10 h-10 text-teal-600 mb-6" />
              <h3 className="font-serif text-2xl text-gray-900 font-light mb-6">"Can I go to work after?"</h3>
              <div className="space-y-4 text-sm text-gray-700 font-light leading-relaxed">
                <p>
                  <strong className="text-gray-900">Honest answer:</strong> Yes. Most people go straight back to work or their normal routine. You'll have a small scab, but you can cover it with makeup after day 1.
                </p>
                <p>
                  For makeup directly on the treated area, wait 5-7 days until the scab falls off. Around it? You're fine from day one.
                </p>
                <p className="text-teal-700 font-normal">
                  The healing is way easier than most people expect. Just protect it from sun and follow the simple aftercare.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 lg:py-32 px-6 bg-gradient-to-br from-teal-50/40 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-xs tracking-widest text-teal-600 uppercase mb-6 font-light">How It Works</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900 font-light mb-6">Simple & Seamless</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              From consultation to confidence in 3 steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                number: "01",
                title: "Free Consultation",
                desc: "We meet, I examine what you want removed, answer all your questions, and show you exactly what to expect. Zero pressure to book. This is about making sure you feel confident and informed.",
                icon: MessageCircle
              },
              {
                number: "02",
                title: "Quick Treatment",
                desc: "I numb the area (2-second pinch), then remove the lesion using advanced techniques. Most treatments take 15-20 minutes. You'll be amazed how easy it is.",
                icon: Shield
              },
              {
                number: "03",
                title: "Supported Healing",
                desc: "Small scab for about a week, then it heals beautifully. You get clear aftercare instructions plus WhatsApp support anytime. You're never alone in the process.",
                icon: Heart
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center space-y-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-teal-300 rounded-full bg-teal-50">
                  <step.icon className="w-7 h-7 text-teal-600" />
                </div>
                <div className="space-y-3">
                  <p className="text-xs tracking-widest text-teal-600 uppercase font-light">{step.number}</p>
                  <h3 className="font-serif text-2xl text-gray-900 font-light">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-light">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HEALING JOURNEY TIMELINE */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <p className="text-xs tracking-widest text-teal-600 uppercase mb-6 font-light">Healing Journey</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900 font-light mb-6">Your Path to Recovery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Transparent healing process from day 1 to full recovery
          </p>
        </div>
        <Timeline data={timelineData} />
      </section>

      {/* MEET RHI - ENHANCED WITH EMPATHY */}
      <section className="py-24 lg:py-32 px-6 bg-gradient-to-br from-teal-50/40 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-[3/4] bg-teal-50 border-2 border-teal-200 overflow-hidden rounded-lg"
            >
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=1000&fit=crop" alt="Rhiannon" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <p className="text-xs tracking-widest text-teal-600 uppercase mb-6 font-light">About</p>
                <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 font-light mb-6">Hi, I'm Rhiannon</h2>

                <div className="space-y-4 text-sm text-gray-600 leading-relaxed font-light">
                  <p>
                    I've helped hundreds of women in Southampton finally feel free from the moles, skin tags, and lesions they'd been hiding for years.
                  </p>
                  <p>
                    I know you've probably been thinking about this for a while. Maybe you've looked into it before but got scared off by the price, the clinical websites, or the fear of scarring. Maybe the NHS turned you away and you felt stuck.
                  </p>
                  <p>
                    <strong className="text-gray-800">I get it.</strong> This isn't just about removing a physical imperfection—it's about getting your confidence back. It's about not adjusting your angle in every photo. It's about talking to people without wondering if they're staring at it.
                  </p>
                  <p className="text-teal-700 font-normal">
                    You deserve to feel comfortable in your own skin. Let me help you get there.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-8 pt-4 border-t border-teal-200">
                <div>
                  <p className="font-serif text-3xl text-teal-700 font-light">300+</p>
                  <p className="text-xs tracking-wider text-gray-500 mt-1 uppercase font-light">Happy Clients</p>
                </div>
                <div className="w-px h-12 bg-teal-300" />
                <div>
                  <p className="font-serif text-3xl text-teal-700 font-light">5.0</p>
                  <p className="text-xs tracking-wider text-gray-500 mt-1 uppercase font-light">Average Rating</p>
                </div>
                <div className="w-px h-12 bg-teal-300" />
                <div>
                  <p className="font-serif text-3xl text-teal-700 font-light">5+</p>
                  <p className="text-xs tracking-wider text-gray-500 mt-1 uppercase font-light">Years Experience</p>
                </div>
              </div>

              <div className="pt-4">
                <motion.a
                  href="https://wa.me/447307762776"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-teal-600 text-teal-600 text-sm tracking-widest uppercase font-light hover:bg-teal-50 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Message Me First</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="py-24 lg:py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-xs tracking-widest text-teal-600 uppercase mb-6 font-light">Questions?</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 font-light mb-6">I've Got Answers</h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Everything you need to know
            </p>
          </motion.div>

          <div className="space-y-px">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-teal-100"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-teal-50/50 transition-colors"
                >
                  <span className="text-sm text-gray-900 pr-8 font-light">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-teal-600" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? 'auto' : 0, opacity: openFaq === index ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6 text-sm text-gray-600 leading-relaxed font-light">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - EMOTIONALLY DRIVEN */}
      <section className="py-24 lg:py-32 px-6 bg-gradient-to-br from-teal-50/40 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900 font-light">
              Ready to Feel Free?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              You've been thinking about this long enough. Let's have a conversation—no pressure, no obligation. Just honest answers to your questions and a clear path forward.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-12 py-5 bg-teal-600 text-white text-sm tracking-widest uppercase font-light hover:bg-teal-700 transition-colors shadow-lg shadow-teal-500/30"
            >
              Book Free Consultation
            </motion.a>
            <motion.a
              href="https://wa.me/447307762776"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-12 py-5 border-2 border-teal-600 text-teal-600 text-sm tracking-widest uppercase font-light hover:bg-teal-50 transition-colors"
            >
              Ask Me Anything First
            </motion.a>
          </div>

          <div className="pt-8">
            <p className="text-sm text-gray-500 font-light italic">
              "I wish I'd done this sooner" — Almost every client says this.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-teal-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-6">
              <div className="w-11 h-11">
                <img src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansrKuIikggJMAWrzNy61nv7tqUuYLkCVcsZQHl" alt="RHI Aesthetics" className="w-full h-full object-contain opacity-80" />
              </div>
              <p className="text-sm text-teal-100 font-light leading-relaxed">
                Professional skin lesion removal in Southampton
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/rhi.aesthetics?igsh=MWhvMjFqb3Zscms0aw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-teal-200 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61575636000105" target="_blank" rel="noopener noreferrer" className="text-teal-200 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xs tracking-widest uppercase mb-6 font-light">Contact</h3>
              <div className="space-y-4 text-sm text-teal-100 font-light">
                <p className="flex items-center space-x-3"><MapPin className="w-4 h-4" /><span>Southampton, UK</span></p>
                <p className="flex items-center space-x-3"><Phone className="w-4 h-4" /><span>07307 762776</span></p>
                <p className="flex items-center space-x-3"><Mail className="w-4 h-4" /><span>rhiaesthetics@mail.com</span></p>
              </div>
            </div>

            <div>
              <h3 className="text-xs tracking-widest uppercase mb-6 font-light">Services</h3>
              <ul className="space-y-3 text-sm text-teal-100 font-light">
                <li><Link to="/skin-lesion-removal" className="hover:text-white transition-colors">Skin Lesion Removal</Link></li>
                <li><Link to="/plasma-fibroblast" className="hover:text-white transition-colors">Plasma Fibroblast</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs tracking-widest uppercase mb-6 font-light">Hours</h3>
              <div className="space-y-3 text-sm text-teal-100 font-light">
                <p>Mon-Thurs: <span className="text-white">11am-8pm</span></p>
                <p>Friday: <span className="text-white">10am-3pm</span></p>
                <p>Sat-Sun: <span className="text-white">By Appointment</span></p>
              </div>
            </div>
          </div>

          <div className="border-t border-teal-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-teal-300 font-light">
              <p>&copy; 2025 RHI Aesthetics. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
                <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms</Link>
                <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookies</Link>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-teal-800 text-center">
            <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=alwin@tripletendigits.com" target="_blank" rel="noopener noreferrer" className="inline-block group">
              <p className="text-xs text-teal-300 font-light">
                <span className="text-teal-200 group-hover:text-white transition-colors">Triple Ten Digits</span>
                <span className="mx-2">|</span>
                <span className="group-hover:text-teal-200 transition-colors">Competition-crushing websites</span>
              </p>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SkinLesionRemovalPage;
