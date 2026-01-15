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
  Smile,
  TrendingUp,
  X,
  Target,
  Zap,
  AlertCircle,
  BadgeCheck
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
    { image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansrEctJIggJMAWrzNy61nv7tqUuYLkCVcsZQHl", label: "Facial Mole", timeline: "6 weeks" },
    { image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplans1GO6raPrPgLW2xY53lMqmX6sbNHJyknwUZt8", label: "Skin Tags", timeline: "3 weeks" },
    { image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansMb9ONqfF60kipOZwxPDGShftogB23RYsQ9cU", label: "Age Spot", timeline: "4 weeks" },
    { image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansnGSknDeeKuJpWcTySUNLz4R0I8Vw7fZ1G2kg", label: "Cheek Mole", timeline: "5 weeks" },
    { image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansbcDWDCOYpmXqDxfseSP45Qwn0azcOMUoCJih", label: "Neck Lesion", timeline: "4 weeks" },
    { image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansROkb0cNnPqXUigWtzfTd60QMsIbeE2vVLYuH", label: "Sun Spot", timeline: "5 weeks" },
    { image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansZO9NlbM6XwJuImFfqiz86x7V3CyK2odlaTv5", label: "Vascular Lesion", timeline: "3 weeks" },
    { image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplanspGTOtu9qI1imrJsTxKlZHRz3Vt25Gv4aoPnL", label: "Facial Lesion", timeline: "6 weeks" }
  ];

  const testimonialStories = [
    {
      name: "Lauren M.",
      age: 34,
      treatment: "Neck Mole Removal",
      timeAgo: "3 weeks ago",
      image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplanskcOsANoM8xhVQJusqtST06R5NiK7fcewbZ39",
      before: "I'd been staring at this thing on my neck for like 3 years. Every morning when I got ready, there it was. I kept saying I'd get it done but never followed through. I was worried it would hurt, worried about scarring, worried I'd regret it.",
      process: "Rhi made me feel so comfortable from the start. She explained everything, showed me what to expect, and honestly? It didn't hurt at all. The numbing worked perfectly.",
      after: "I wish I'd done this sooner. Healing was so quick and I can't even see where it was now. I don't avoid the mirror anymore. Such a simple thing but it's changed how I feel every single day.",
      result: "Confidence restored"
    },
    {
      name: "Marta R.",
      age: 42,
      treatment: "Multiple Skin Tags",
      timeAgo: "1 month ago",
      image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansL7WIuZcEpuNyB4c5UP1OD9z8GXJlTsjiKSLw",
      before: "I'd had these skin tags for years and they really bothered me. They'd catch on my jewelry and I was always conscious of them. I looked into removal before but everywhere seemed so expensive and clinical.",
      process: "Rhiannon was so professional and made the whole experience easy. She took her time, checked in with me throughout, and I felt completely safe.",
      after: "I'm so satisfied with the results. They're gone and healing was straightforward. I'm already planning to come back for another area. Would 100% recommend.",
      result: "Finally free"
    },
    {
      name: "Caroline H.",
      age: 38,
      treatment: "Vascular Treatment",
      timeAgo: "2 weeks ago",
      image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplans3crCSbkbzO1oaYGq0j4H8guRQFnhBerA3iyl",
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
              src="https://images.unsplash.com/photo-1609840534195-e6385ca0d10a?w=500&h=500&fit=crop"
              alt="Bandage on healing wound"
              className="rounded-lg object-cover h-32 md:h-48 w-full shadow-lg border-2 border-teal-100"
            />
            <img
              src="https://images.unsplash.com/photo-1765996796562-ce301df337a0?w=500&h=500&fit=crop"
              alt="Medical first aid aftercare kit"
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
              src="https://images.unsplash.com/photo-1761485172742-ec3457eef2d6?w=500&h=500&fit=crop"
              alt="Healing wound with protective scab"
              className="rounded-lg object-cover h-32 md:h-48 w-full shadow-lg border-2 border-teal-100"
            />
            <img
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop"
              alt="Gentle skincare moisturizing cream"
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
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&h=500&fit=crop"
              alt="Fresh pink healing skin after scab removal"
              className="rounded-lg object-cover h-32 md:h-48 w-full shadow-lg border-2 border-teal-100"
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1715604350275-0e326557803f?w=500&h=500&fit=crop"
              alt="Applying SPF sunscreen protection"
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
              src="https://plus.unsplash.com/premium_photo-1682096433084-b68c0cf072b8?w=500&h=500&fit=crop"
              alt="Fully healed clear glowing skin"
              className="rounded-lg object-cover h-32 md:h-48 w-full shadow-lg border-2 border-teal-100"
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1682096449710-1f3aa0624ef3?w=500&h=500&fit=crop"
              alt="Beautiful healthy radiant complexion"
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
          isHeaderScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            <Link to="/" className="group">
              <motion.div whileHover={{ opacity: 0.7 }} transition={{ duration: 0.2 }} className="w-11 h-11">
                <img src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansrKuIikggJMAWrzNy61nv7tqUuYLkCVcsZQHl" alt="RHI Aesthetics" className="w-full h-full object-contain" />
              </motion.div>
            </Link>

            <div className="flex items-center space-x-10">
              <nav className="hidden lg:flex items-center space-x-10">
                {['Results', 'Stories', 'Process'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-sm tracking-wider transition-colors duration-200 font-light uppercase ${
                      isHeaderScrolled ? 'text-white hover:text-teal-400' : 'text-white hover:text-teal-400'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </nav>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection('offer')}
                className="text-sm tracking-wider px-6 py-2.5 bg-teal-600 text-white hover:bg-teal-700 transition-colors duration-200 font-light uppercase shadow-lg shadow-teal-500/20 rounded-md"
              >
                Book £49 Intro Offer
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* SIMPLIFIED HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansZ9SpbP6XwJuImFfqiz86x7V3CyK2odlaTv5P"
            alt="Clinic"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight font-light">
              Finally Feel Free From That Mole or Skin Tag
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-white leading-relaxed max-w-3xl mx-auto font-light">
              Safe, professional skin lesion removal in Southampton with minimal scarring and natural results.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('offer')}
                className="px-12 py-4 bg-teal-600 text-white text-sm tracking-widest uppercase font-light hover:bg-teal-700 transition-all duration-200 shadow-xl shadow-teal-500/30 rounded-md"
              >
                Book £49 Intro Offer
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/447307762776"
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-4 border-2 border-white text-white text-sm tracking-widest uppercase font-light hover:bg-white/10 transition-all duration-200 rounded-md"
              >
                Message Rhia
              </motion.a>
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

      {/* BEFORE/AFTER GALLERY */}
      <section id="results" className="py-24 lg:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900 font-light mb-6">See For Yourself</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Every treatment performed in Southampton with precision and care. These are real clients, real results.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
            {beforeAfterImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative bg-white overflow-hidden border-2 border-teal-100 rounded-xl shadow-sm hover:shadow-xl transition-all"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={item.image} alt={`${item.label} Before & After`} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 bg-gradient-to-br from-teal-50/40 to-white border-t-2 border-teal-100">
                  <p className="text-sm text-gray-900 font-light mb-1">{item.label}</p>
                  <p className="text-xs text-teal-600 font-light tracking-wide">{item.timeline} healed</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE 3-YEAR TRUTH - STAT DRIVEN */}
      <section className="py-16 px-6 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 font-light mb-8">
              The average client waited <span className="text-teal-700">3.2 years</span> before calling.
            </h2>

            <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
              That's over <span className="font-normal text-gray-800">1,000 mornings</span> looking in the mirror and feeling frustrated.
            </p>

            <p className="text-base text-gray-600 font-light leading-relaxed italic">
              "I just wish I'd done it sooner" — The most common thing I hear after treatment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* YOU'RE NOT ALONE */}
      <section className="py-24 lg:py-32 px-6 bg-gradient-to-br from-teal-50/20 to-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900 font-light mb-6">You're Not Alone</h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
              I see it all the time. The way women come in and say...
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Eye,
                stat: "89%",
                text: "I feel like people are always staring at it when I'm talking to them"
              },
              {
                icon: Camera,
                stat: "76%",
                text: "I avoid certain angles in photos or try to hide that side of my face"
              },
              {
                icon: Clock,
                stat: "3+ years",
                text: "I've wanted this gone for years but kept putting it off"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-10 bg-white border-2 border-teal-100 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <item.icon className="w-10 h-10 text-teal-600 mx-auto mb-6" />
                <p className="text-3xl font-serif text-teal-700 font-light mb-4">{item.stat}</p>
                <p className="text-sm text-gray-700 font-light leading-relaxed italic">"{item.text}"</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-br from-teal-600 to-teal-700 text-white rounded-3xl p-12 lg:p-16 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 space-y-6">
              <Heart className="w-12 h-12 mx-auto mb-6 opacity-80" />
              <p className="text-2xl sm:text-3xl font-serif font-light leading-relaxed mb-6">
                Here's what I want you to know:
              </p>
              <p className="text-lg font-light leading-relaxed max-w-3xl mx-auto">
                Your feelings are valid. It's not vain to want this gone. It's not silly that it bothers you. And you don't have to live with it just because it's "not medically necessary."
              </p>
              <p className="text-xl font-light leading-relaxed mt-8">
                Your confidence matters. Let me help you get it back.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HEALING JOURNEY TIMELINE */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <p className="text-xs tracking-widest text-teal-600 uppercase mb-6 font-light">Healing Journey</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900 font-light mb-6">Your Path to Recovery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Transparent healing process from day 1 to full recovery
          </p>
        </div>
        <Timeline data={timelineData} />
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-24 lg:py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900 font-light mb-6">This Is For You If...</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
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
                transition={{ delay: index * 0.05 }}
                className="flex items-start space-x-4 p-6 bg-gradient-to-br from-teal-50/40 to-white border border-teal-100 rounded-xl hover:border-teal-300 transition-all"
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
            className="text-center"
          >
            <p className="text-lg text-gray-700 font-light italic mb-8">
              If any of these sound like you, you're in the right place.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection('offer')}
              className="px-10 py-4 bg-white border-2 border-teal-600 text-teal-600 text-sm tracking-wider uppercase font-light hover:bg-teal-50 transition-all rounded-md"
            >
              I'm Ready to Start
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* THIS ISN'T FOR YOU IF (EXCLUSIVITY/CONTRAST) */}
      <section className="py-24 lg:py-32 px-6 bg-gradient-to-br from-gray-50 to-white border-y border-gray-200">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 font-light mb-6">This ISN'T For You If...</h2>
          </motion.div>

          <div className="space-y-4 mb-12">
            {[
              "You're looking for a quick fix with no aftercare or healing time",
              "You want me to remove something I think should be checked by a dermatologist first",
              "You're not willing to follow simple aftercare instructions",
              "You expect zero healing process or instant perfection"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4 p-5 bg-white border border-gray-200 rounded-lg"
              >
                <X className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600 font-light leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-white border-2 border-gray-200 rounded-2xl p-10"
          >
            <p className="text-base text-gray-700 font-light leading-relaxed">
              I only work with people who are ready to trust the process, follow guidance, and understand that beautiful results take a few weeks of healing.
            </p>
            <p className="text-sm text-gray-500 font-light italic mt-4">
              If that's you, we'll be a great fit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* IMAGINE FREEDOM - AMPLIFIED WITH 6-MONTH FRAMING */}
      <section className="py-24 lg:py-32 px-6 bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-16"
          >
            <div className="space-y-6">
              <Sparkles className="w-14 h-14 mx-auto mb-8 opacity-90" />
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light">Picture This: 6 Months From Now...</h2>
              <div className="w-24 h-px bg-white/40 mx-auto" />
              <p className="text-lg font-light leading-relaxed max-w-3xl mx-auto opacity-90">
                Close your eyes for a second. Imagine it's six months from today. You're getting ready in the morning...
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 text-left">
              {[
                {
                  title: "Morning Routine",
                  description: "You look in the mirror and just... smile. No adjusting. No touching. No wishing it wasn't there. Just you."
                },
                {
                  title: "Photos With Friends",
                  description: "Someone says 'photo!' and you don't think twice. No angling. No hiding. Just natural, confident you."
                },
                {
                  title: "Conversations",
                  description: "You're talking to someone and you're actually present. Not wondering if they're staring. Not touching it nervously. Just being."
                },
                {
                  title: "Getting Ready",
                  description: "You're doing your makeup and you realize you haven't even thought about it in weeks. It's just... gone. And so is that daily frustration."
                },
                {
                  title: "Family Events",
                  description: "There's a family photo coming up and you're actually looking forward to it. No dreading it. No hiding. Just showing up as yourself."
                },
                {
                  title: "Everyday Confidence",
                  description: "You catch your reflection and think 'I look good.' Not 'I wish...' or 'If only...' Just confidence. Finally."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
                >
                  <div className="flex items-center space-x-3">
                    <Sparkles className="w-5 h-5 flex-shrink-0" />
                    <h3 className="text-lg font-serif font-light">{item.title}</h3>
                  </div>
                  <p className="text-sm font-light leading-relaxed opacity-90">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="space-y-8 pt-8">
              <div className="max-w-3xl mx-auto">
                <p className="text-3xl font-serif font-light italic mb-6">
                  "I wish I'd done this sooner"
                </p>
                <p className="text-lg font-light leading-relaxed opacity-90">
                  That's what almost everyone says. Not "I'm glad I waited." Not "I should've thought about it longer."
                </p>
                <p className="text-lg font-light leading-relaxed mt-4 opacity-90">
                  They say: <span className="font-normal">"Why did I wait so long?"</span>
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('offer')}
                className="group px-14 py-6 bg-white text-teal-700 text-sm tracking-widest uppercase font-normal hover:bg-gray-50 transition-all duration-200 shadow-2xl rounded-md"
              >
                <span className="flex items-center space-x-3">
                  <span>I'm Ready For This Future</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COST OF WAITING - EMOTIONAL TRIGGER */}
      <section className="py-24 lg:py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-6" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900 font-light mb-6">The Cost of Waiting Another Year</h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Let's be real about what waiting actually costs you.
            </p>
          </motion.div>

          <div className="space-y-6 mb-12">
            {[
              {
                count: "365",
                label: "more mornings seeing it in the mirror"
              },
              {
                count: "Dozens",
                label: "more photos where you adjust your angle or feel self-conscious"
              },
              {
                count: "Countless",
                label: "more conversations where you wonder if they're staring"
              },
              {
                count: "12",
                label: "more months of touching it, thinking about it, wishing it was gone"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-6 p-6 bg-gray-50 border border-gray-200 rounded-xl"
              >
                <div className="text-center min-w-[100px]">
                  <p className="text-3xl font-serif text-gray-800 font-light">{item.count}</p>
                </div>
                <p className="text-sm text-gray-700 font-light leading-relaxed">{item.label}</p>
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
              The price isn't just £49. The price is another year of your life feeling self-conscious.
            </p>
            <p className="text-lg text-teal-700 font-light leading-relaxed">
              That's the real cost of waiting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TRANSFORMED TESTIMONIALS - STORY FORMAT WITH TIMESTAMPS */}
      <section id="stories" className="py-24 lg:py-32 px-6 bg-gradient-to-br from-teal-50/30 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900 font-light mb-6">Their Journeys</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Real women from Southampton who finally felt free
            </p>
          </motion.div>

          <div className="space-y-16">
            {testimonialStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/3 flex-shrink-0">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border-2 border-teal-100">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="w-full lg:w-2/3 bg-white border-2 border-teal-100 rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-xl transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-8 gap-4">
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-gray-900 font-light mb-2">{story.name}</h3>
                      <p className="text-sm text-teal-600 font-light mb-2">{story.treatment}</p>
                      <p className="text-xs text-gray-400 font-light">{story.timeAgo}</p>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-teal-600 fill-teal-600" />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-8 h-0.5 bg-gray-300" />
                        <p className="text-xs tracking-widest text-gray-500 uppercase font-light">Before</p>
                      </div>
                      <p className="text-sm text-gray-700 font-light leading-relaxed italic pl-10">"{story.before}"</p>
                    </div>

                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-8 h-0.5 bg-teal-300" />
                        <p className="text-xs tracking-widest text-teal-600 uppercase font-light">The Experience</p>
                      </div>
                      <p className="text-sm text-gray-700 font-light leading-relaxed italic pl-10">"{story.process}"</p>
                    </div>

                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-8 h-0.5 bg-teal-500" />
                        <p className="text-xs tracking-widest text-teal-700 uppercase font-light">After</p>
                      </div>
                      <p className="text-sm text-gray-700 font-light leading-relaxed italic mb-4 pl-10">"{story.after}"</p>
                      <div className="pl-10">
                        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-700 text-white text-xs tracking-wider uppercase font-light rounded-full shadow-lg">
                          <CheckCircle className="w-4 h-4" />
                          <span>{story.result}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-base text-gray-600 font-light italic mb-8">
              Want to be one of these success stories?
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection('offer')}
              className="px-12 py-4 bg-teal-600 text-white text-sm tracking-wider uppercase font-light hover:bg-teal-700 transition-colors shadow-lg shadow-teal-500/30 rounded-md"
            >
              Start Your Journey
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* REFRAMED OFFER - TEST DRIVE PSYCHOLOGY WITH URGENCY */}
      <section id="offer" className="py-24 lg:py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-widest text-teal-600 uppercase mb-6 font-light">Try Before You Commit</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900 font-light mb-8">Start Small, See For Yourself</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              I know you might be nervous. Worried about pain, scarring, whether you can trust me. That's why I created this intro offer—so you can experience my work without the big commitment.
            </p>
          </motion.div>

          <div className="bg-gradient-to-br from-white to-teal-50/30 border-3 border-teal-200 rounded-3xl p-12 lg:p-16 text-center shadow-xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-teal-100 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-100 rounded-full blur-3xl opacity-50" />

            <div className="relative z-10">
              <div className="mb-14">
                <p className="text-base text-gray-600 font-light mb-6">Introductory Offer</p>
                <div className="inline-block">
                  <h3 className="font-serif text-7xl sm:text-8xl bg-gradient-to-r from-teal-700 via-teal-600 to-teal-500 bg-clip-text text-transparent font-light mb-4">£49</h3>
                  <div className="h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent" />
                </div>
                <p className="text-2xl sm:text-3xl text-gray-700 font-light mt-6">Remove 2 Small Lesions</p>
              </div>

              <div className="mb-14">
                <p className="text-lg text-gray-700 font-light leading-relaxed mb-8 max-w-2xl mx-auto">
                  This isn't just about removing two lesions. It's about letting you:
                </p>

                <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
                  {[
                    "See my skill level and attention to detail",
                    "Experience the actual pain level (spoiler: minimal)",
                    "Watch how YOUR skin heals",
                    "Check for scarring before committing to more",
                    "Build trust before bigger treatments",
                    "Test the process without the big price tag"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start space-x-3 text-left p-5 bg-white border-2 border-teal-100 rounded-xl hover:border-teal-300 transition-all"
                    >
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700 font-light leading-relaxed">{item}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-white border-2 border-teal-200 rounded-2xl p-8 max-w-4xl mx-auto shadow-sm">
                  <div className="flex items-center justify-center space-x-2 mb-6">
                    <BadgeCheck className="w-5 h-5 text-teal-600" />
                    <p className="text-xs tracking-widest text-teal-600 uppercase font-light">What's Included</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      "Free consultation (no obligation)",
                      "Removal of 2 small lesions",
                      "Complete aftercare kit",
                      "Detailed healing instructions",
                      "WhatsApp support during healing"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3 justify-center sm:justify-start">
                        <Heart className="w-5 h-5 text-teal-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700 font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-14 py-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white text-sm tracking-widest uppercase font-normal hover:from-teal-700 hover:to-teal-800 transition-all shadow-2xl shadow-teal-500/40 rounded-md"
                >
                  Book Your Treatment Now
                </motion.a>
                <p className="text-xs text-gray-500 font-light">Free consultation first • No pressure • Additional lesions available</p>

                {/* Urgency element */}
                <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-amber-50 border-2 border-amber-200 rounded-full mt-6">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <p className="text-xs text-amber-700 font-normal">Only 9 consultation spots remaining this month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY OTHER CLINICS MISS THE MARK - COMPARISON */}
      <section className="py-24 lg:py-32 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900 font-light mb-6">What Makes This Different</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              You've probably looked into this before. Here's what I do differently.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Other Clinics */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <X className="w-6 h-6 text-gray-400" />
                </div>
                <h3 className="font-serif text-2xl text-gray-700 font-light">Most Other Clinics</h3>
              </div>

              <div className="space-y-4">
                {[
                  "Clinical, sterile vibe that makes you feel like a number",
                  "£250-£500+ for similar treatments",
                  "You never meet the practitioner until the day",
                  "No ongoing support after you leave",
                  "Generic 'minimal scarring' promises with no proof",
                  "Pushy sales tactics and upselling"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-white border border-gray-200 rounded-lg">
                    <X className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600 font-light leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* With Me */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-serif text-2xl text-teal-800 font-light">With Me</h3>
              </div>

              <div className="space-y-4">
                {[
                  "Warm, human approach—you're working with Rhi directly",
                  "£49 intro offer so you can test my work first",
                  "Free consultation where we actually connect",
                  "WhatsApp access during your entire healing process",
                  "Real before/afters showing actual 6-week healed results",
                  "Zero pressure—message me first if you want"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-gradient-to-br from-teal-50 to-white border-2 border-teal-200 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700 font-light leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16 p-10 bg-white border-2 border-teal-100 rounded-2xl"
          >
            <p className="text-lg text-gray-700 font-light leading-relaxed italic">
              "You're not a transaction here—you're a person I genuinely care about."
            </p>
            <p className="text-sm text-teal-600 font-light mt-4">— Rhiannon</p>
          </motion.div>
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

          <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
            {/* Will It Scar? */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-teal-50/40 to-white border-2 border-teal-100 rounded-3xl p-10 lg:p-12 hover:border-teal-300 transition-all"
            >
              <Shield className="w-12 h-12 text-teal-600 mb-8" />
              <h3 className="font-serif text-2xl sm:text-3xl text-gray-900 font-light mb-6">"Will it scar?"</h3>
              <div className="space-y-4 text-sm text-gray-700 font-light leading-relaxed">
                <p>
                  <strong className="text-gray-900">Honest answer:</strong> You'll have a small mark at first—that's how healing works. But with proper technique and aftercare, most clients see it fade to nearly invisible within 4-8 weeks.
                </p>
                <p>
                  I use methods specifically designed to minimize scarring. The key is letting it heal naturally—no picking, following aftercare, protecting from sun.
                </p>
                <p className="text-teal-700 font-normal pt-4 border-t border-teal-200">
                  Most clients tell me the tiny healed mark is 100x better than the mole they'd been hiding for years.
                </p>
              </div>
            </motion.div>

            {/* Does It Hurt? */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-teal-50/40 to-white border-2 border-teal-100 rounded-3xl p-10 lg:p-12 hover:border-teal-300 transition-all"
            >
              <Heart className="w-12 h-12 text-teal-600 mb-8" />
              <h3 className="font-serif text-2xl sm:text-3xl text-gray-900 font-light mb-6">"Does it hurt?"</h3>
              <div className="space-y-4 text-sm text-gray-700 font-light leading-relaxed">
                <p>
                  <strong className="text-gray-900">Honest answer:</strong> The numbing injection? Yeah, you'll feel a quick pinch for about 2 seconds. After that? Nothing during the actual removal.
                </p>
                <p>
                  Some clients feel a slight pressure or tugging, but no pain. Most people are genuinely surprised by how easy it is.
                </p>
                <p className="text-teal-700 font-normal pt-4 border-t border-teal-200">
                  If I had to rate it: the injection is maybe a 3/10 for 2 seconds. The removal itself? 0/10. You won't feel it.
                </p>
              </div>
            </motion.div>

            {/* What If It's Cancerous? */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-teal-50/40 to-white border-2 border-teal-100 rounded-3xl p-10 lg:p-12 hover:border-teal-300 transition-all"
            >
              <CheckCircle className="w-12 h-12 text-teal-600 mb-8" />
              <h3 className="font-serif text-2xl sm:text-3xl text-gray-900 font-light mb-6">"What if it's cancerous?"</h3>
              <div className="space-y-4 text-sm text-gray-700 font-light leading-relaxed">
                <p>
                  <strong className="text-gray-900">Honest answer:</strong> During your free consultation, I examine it carefully. If anything looks concerning—unusual shape, color changes, irregular borders—I won't remove it.
                </p>
                <p>
                  I'll refer you to get it properly checked by a dermatologist first. Your safety is always the priority over any treatment.
                </p>
                <p className="text-teal-700 font-normal pt-4 border-t border-teal-200">
                  Most of what I see is completely benign—simple skin tags, moles, warts. But I'll never take risks with your health.
                </p>
              </div>
            </motion.div>

            {/* How Long Is Downtime? */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-teal-50/40 to-white border-2 border-teal-100 rounded-3xl p-10 lg:p-12 hover:border-teal-300 transition-all"
            >
              <Clock className="w-12 h-12 text-teal-600 mb-8" />
              <h3 className="font-serif text-2xl sm:text-3xl text-gray-900 font-light mb-6">"Can I go to work after?"</h3>
              <div className="space-y-4 text-sm text-gray-700 font-light leading-relaxed">
                <p>
                  <strong className="text-gray-900">Honest answer:</strong> Yes. Most people go straight back to work or their normal routine. You'll have a small scab, but you can cover it with makeup after day 1.
                </p>
                <p>
                  For makeup directly on the treated area, wait 5-7 days until the scab falls off. Around it? You're fine from day one.
                </p>
                <p className="text-teal-700 font-normal pt-4 border-t border-teal-200">
                  The healing is way easier than most people expect. Just protect it from sun and follow the simple aftercare.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 lg:py-32 px-6 bg-gradient-to-br from-teal-50/30 to-white">
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
                className="text-center space-y-6 p-8 bg-white border-2 border-teal-100 rounded-2xl hover:border-teal-300 transition-all"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 border-3 border-teal-300 rounded-full bg-gradient-to-br from-teal-50 to-white shadow-lg">
                  <step.icon className="w-9 h-9 text-teal-600" />
                </div>
                <div className="space-y-3">
                  <p className="text-sm tracking-widest text-teal-600 uppercase font-light">{step.number}</p>
                  <h3 className="font-serif text-2xl text-gray-900 font-light">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-light">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MY PROMISE TO YOU - GUARANTEE */}
      <section className="py-24 lg:py-32 px-6 bg-gradient-to-br from-teal-600 to-teal-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-10"
          >
            <div>
              <Shield className="w-16 h-16 mx-auto mb-8 opacity-90" />
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light mb-6">My Promise to You</h2>
              <div className="w-24 h-px bg-white/40 mx-auto mb-8" />
            </div>

            <div className="space-y-6 text-lg font-light leading-relaxed max-w-3xl mx-auto">
              <p>
                If you're not happy with your results, <span className="font-normal">I'll make it right</span>.
              </p>
              <p>
                If I think something needs medical attention, <span className="font-normal">I'll tell you honestly</span>—even if it means turning down your money.
              </p>
              <p>
                If you have questions during healing, <span className="font-normal">I'll be there</span>. WhatsApp me anytime.
              </p>
              <p>
                If you're nervous or unsure, <span className="font-normal">I'll take the time</span> to make sure you feel comfortable before we do anything.
              </p>
            </div>

            <div className="pt-8">
              <div className="inline-block p-8 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl">
                <p className="text-2xl font-serif font-light italic">
                  "Your confidence and your safety are more important to me than any sale."
                </p>
                <p className="text-sm font-light mt-4 opacity-90">— Rhiannon, Founder</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MEET RHI - ENHANCED WITH PERSONAL WHY */}
      <section className="py-24 lg:py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-[3/4] bg-teal-50 border-3 border-teal-200 overflow-hidden rounded-2xl shadow-2xl"
            >
              <img src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansrqBKEAggJMAWrzNy61nv7tqUuYLkCVcsZQHl" alt="Rhiannon" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <p className="text-xs tracking-widest text-teal-600 uppercase mb-6 font-light">About</p>
                <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 font-light mb-8">Hi, I'm Rhiannon</h2>

                <div className="space-y-6 text-sm text-gray-600 leading-relaxed font-light">
                  <p className="text-base">
                    I've helped hundreds of women in Southampton finally feel free from the moles, skin tags, and lesions they'd been hiding for years.
                  </p>
                  <p>
                    But here's the thing—I started doing this because I saw how much it actually <span className="italic">mattered</span> to people. Not in a medical way. In a <span className="font-normal text-gray-800">confidence</span> way.
                  </p>
                  <p>
                    I know you've probably been thinking about this for a while. Maybe you've looked into it before but got scared off by the price, the clinical websites, or the fear of scarring. Maybe the NHS turned you away and you felt stuck.
                  </p>
                  <p>
                    <strong className="text-gray-800">I get it.</strong> This isn't just about removing a physical imperfection—it's about getting your confidence back. It's about not adjusting your angle in every photo. It's about talking to people without wondering if they're staring at it.
                  </p>
                  <p className="text-base text-teal-700 font-normal border-l-4 border-teal-500 pl-6 py-4 bg-teal-50/30">
                    You deserve to feel comfortable in your own skin. Let me help you get there.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-8 pt-6 border-t-2 border-teal-200">
                <div>
                  <p className="font-serif text-4xl text-teal-700 font-light">300+</p>
                  <p className="text-xs tracking-wider text-gray-500 mt-1 uppercase font-light">Happy Clients</p>
                </div>
                <div className="w-px h-14 bg-teal-300" />
                <div>
                  <p className="font-serif text-4xl text-teal-700 font-light">5.0</p>
                  <p className="text-xs tracking-wider text-gray-500 mt-1 uppercase font-light">Average Rating</p>
                </div>
                <div className="w-px h-14 bg-teal-300" />
                <div>
                  <p className="font-serif text-4xl text-teal-700 font-light">5+</p>
                  <p className="text-xs tracking-wider text-gray-500 mt-1 uppercase font-light">Years Experience</p>
                </div>
              </div>

              <div className="pt-6">
                <motion.a
                  href="https://wa.me/447307762776"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center space-x-3 px-10 py-5 border-2 border-teal-600 text-teal-600 text-sm tracking-widest uppercase font-light hover:bg-teal-50 transition-colors rounded-md shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Message Me First</span>
                </motion.a>
                <p className="text-xs text-gray-500 font-light mt-4 italic">No pressure. Just honest conversation.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="py-24 lg:py-32 px-6 bg-gradient-to-br from-teal-50/30 to-white">
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

          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border-2 border-teal-100 rounded-xl overflow-hidden hover:border-teal-300 transition-all"
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
                  <div className="px-8 pb-6 text-sm text-gray-600 leading-relaxed font-light border-t border-teal-100 pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - EMOTIONALLY AMPLIFIED */}
      <section className="py-24 lg:py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-12 p-12 lg:p-16 bg-gradient-to-br from-teal-50/50 to-white border-3 border-teal-200 rounded-3xl shadow-xl"
          >
            <div className="space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900 font-light">
                How much longer will you wait?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                You've been thinking about this long enough. Let's have a conversation—no pressure, no obligation. Just honest answers to your questions and a clear path forward.
              </p>
              <p className="text-base text-gray-700 max-w-2xl mx-auto font-light italic">
                Six months from now, you'll wish you'd started today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-14 py-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white text-sm tracking-widest uppercase font-normal hover:from-teal-700 hover:to-teal-800 transition-all shadow-2xl shadow-teal-500/40 rounded-md"
              >
                <span className="flex items-center space-x-3">
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
              <motion.a
                href="https://wa.me/447307762776"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-14 py-6 border-2 border-teal-600 text-teal-600 text-sm tracking-widest uppercase font-light hover:bg-teal-50 transition-colors rounded-md"
              >
                Ask Me Anything First
              </motion.a>
            </div>

            <div className="pt-8 border-t border-teal-200">
              <p className="text-base text-gray-600 font-light italic mb-6">
                "I wish I'd done this sooner" — Almost every client says this.
              </p>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-4 h-4 text-amber-600" />
                <p className="text-xs text-amber-700 font-normal">Only 9 consultation spots remaining this month</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-teal-900 text-white py-12 px-6">
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

          <div className="mt-4 pt-4 border-t border-teal-800 text-center">
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
