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
  Award
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
              {['Results', 'Process', 'Pricing'].map((item) => (
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
              Book Consultation
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* HERO - Full Background with Centered Overlay */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-teal-50/30">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&h=1080&fit=crop"
            alt="Clinic"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-white/40" />
        </div>

        {/* Centered Content */}
        <motion.div
          style={{ opacity }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Elegant Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-teal-200">
              <Shield className="w-4 h-4 text-teal-600" />
              <span className="text-xs tracking-widest text-gray-700 font-light uppercase">Qualified Practitioner • Southampton</span>
            </div>

            {/* Main Heading - Elegant Serif */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-gray-900 leading-tight tracking-tight font-light">
              Safe Skin Lesion
              <span className="block mt-2">Removal</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto font-light tracking-wide">
              Professional mole, skin tag & lesion removal in Southampton.
              <span className="block mt-2">Minimal scarring. Natural results.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection('offer')}
                className="px-10 py-4 bg-teal-600 text-white text-sm tracking-widest uppercase font-light hover:bg-teal-700 transition-all duration-200 shadow-lg shadow-teal-500/20"
              >
                Book Free Consultation
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="https://wa.me/447307762776"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 border-2 border-teal-600 text-teal-600 text-sm tracking-widest uppercase font-light hover:bg-teal-50 transition-all duration-200"
              >
                Message First
              </motion.a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-8 pt-6 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-teal-600 fill-teal-600" />
                ))}
                <span className="ml-2 font-light">5.0</span>
              </div>
              <div className="w-px h-4 bg-teal-300" />
              <span className="font-light">300+ Treatments</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
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

      {/* Trust Strip */}
      <section className="py-16 px-6 bg-gradient-to-br from-teal-50/40 to-white border-y border-teal-200">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { label: "Treatments", value: "300+" },
            { label: "Average Rating", value: "5.0" },
            { label: "Treatment Time", value: "15 min" },
            { label: "Healing Time", value: "4-6 weeks" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-2"
            >
              <p className="font-serif text-4xl text-teal-700 font-light">{stat.value}</p>
              <p className="text-xs tracking-widest text-gray-600 uppercase font-light">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BEFORE/AFTER - Elegant Gallery */}
      <section id="results" className="py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-xs tracking-widest text-teal-600 uppercase mb-6 font-light">Portfolio</p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gray-900 font-light mb-6">Real Results</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Every treatment performed in Southampton with precision and care
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

      {/* THE OFFER */}
      <section id="offer" className="py-24 lg:py-32 px-6 bg-gradient-to-br from-teal-50/40 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <p className="text-xs tracking-widest text-teal-600 uppercase font-light">Introductory Offer</p>
              <h2 className="font-serif text-6xl sm:text-7xl lg:text-8xl bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent font-light">£49</h2>
              <p className="text-2xl text-gray-700 font-light tracking-wide">Remove 2 Lesions</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: CheckCircle, text: "2 Lesions Removed" },
                { icon: Shield, text: "Free Consultation" },
                { icon: Heart, text: "Aftercare Kit" },
                { icon: MessageCircle, text: "WhatsApp Support" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center space-y-3 p-6 bg-white border border-teal-100">
                  <item.icon className="w-6 h-6 text-teal-600" />
                  <span className="text-xs tracking-wider text-gray-700 text-center uppercase font-light">{item.text}</span>
                </div>
              ))}
            </div>

            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block px-12 py-5 bg-teal-600 text-white text-sm tracking-widest uppercase font-light hover:bg-teal-700 transition-colors shadow-lg shadow-teal-500/30"
            >
              Book Your £49 Consultation
            </motion.a>
            <p className="text-xs text-gray-500 font-light">No obligation • Additional lesions available</p>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 lg:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-xs tracking-widest text-teal-600 uppercase mb-6 font-light">Process</p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gray-900 font-light mb-6">Simple & Seamless</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              From consultation to full healing in 3 steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {[
              { number: "01", title: "Free Consultation", desc: "15-minute consultation where I examine what you want removed, answer all questions, and show you what to expect. Zero pressure.", icon: MessageCircle },
              { number: "02", title: "Quick Treatment", desc: "Area is numbed (2-second pinch), then I remove the lesion using advanced techniques. Most treatments take 15-20 minutes.", icon: Shield },
              { number: "03", title: "Guided Healing", desc: "Small scab for about a week. Clear aftercare instructions plus WhatsApp support anytime. Most see complete healing in 4-6 weeks.", icon: Heart }
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

      {/* WHAT WE TREAT */}
      <section className="py-24 lg:py-32 px-6 bg-gradient-to-br from-teal-50/40 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-xs tracking-widest text-teal-600 uppercase mb-6 font-light">Treatments</p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gray-900 font-light mb-6">What We Treat</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Safe removal of benign skin lesions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["Moles", "Skin Tags", "Age Spots", "Warts", "Cherry Angiomas", "Seborrheic Keratosis", "Milia", "Benign Lesions"].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-center p-6 bg-white border border-teal-100 hover:border-teal-300 hover:shadow-lg transition-all duration-200"
              >
                <CheckCircle className="w-6 h-6 text-teal-600 mx-auto mb-4" />
                <p className="text-sm text-gray-900 font-light">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HEALING JOURNEY TIMELINE */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <p className="text-xs tracking-widest text-teal-600 uppercase mb-6 font-light">Healing Journey</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gray-900 font-light mb-6">Your Path to Recovery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Transparent healing process from day 1 to full recovery
          </p>
        </div>
        <Timeline data={timelineData} />
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 lg:py-32 px-6 bg-gradient-to-br from-teal-50/40 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-xs tracking-widest text-teal-600 uppercase mb-6 font-light">Testimonials</p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gray-900 font-light mb-6">Client Experiences</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Real feedback from Southampton residents
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 border border-teal-100"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-teal-600 fill-teal-600" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-8 font-light italic">"{testimonial.quote}"</p>
                <div className="pt-6 border-t border-teal-200">
                  <p className="text-sm text-gray-900 font-light">{testimonial.name}</p>
                  <p className="text-xs text-teal-600 mt-1 font-light tracking-wide">{testimonial.treatment}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MEET RHI */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-[3/4] bg-teal-50 border-2 border-teal-200 overflow-hidden"
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
                <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 font-light mb-6">Meet Rhiannon</h2>
                <p className="text-sm text-gray-600 leading-relaxed font-light mb-4">
                  I'm a qualified aesthetic practitioner specializing in safe, professional skin lesion removal in Southampton.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed font-light mb-4">
                  With over 300 successful treatments, I understand the concerns my clients have about scarring, pain, and healing. That's why I prioritize clear communication, gentle techniques, and ongoing support throughout your journey.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Your confidence and comfort are my top priorities. I'm here to answer every question and ensure you feel informed and at ease.
                </p>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <p className="font-serif text-3xl text-teal-700 font-light">300+</p>
                  <p className="text-xs tracking-wider text-gray-500 mt-1 uppercase font-light">Treatments</p>
                </div>
                <div className="w-px h-12 bg-teal-300" />
                <div>
                  <p className="font-serif text-3xl text-teal-700 font-light">5.0</p>
                  <p className="text-xs tracking-wider text-gray-500 mt-1 uppercase font-light">Rating</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="py-24 lg:py-32 px-6 bg-gradient-to-br from-teal-50/40 to-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-xs tracking-widest text-teal-600 uppercase mb-6 font-light">FAQ</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 font-light mb-6">Common Questions</h2>
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

      {/* FINAL CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gray-900 font-light">
              Ready to Begin?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Free consultation with no obligation. Let's discuss what's right for you.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-12 py-5 bg-teal-600 text-white text-sm tracking-widest uppercase font-light hover:bg-teal-700 transition-colors shadow-lg shadow-teal-500/30"
            >
              Book Consultation
            </motion.a>
            <motion.a
              href="https://wa.me/447307762776"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-12 py-5 border-2 border-teal-600 text-teal-600 text-sm tracking-widest uppercase font-light hover:bg-teal-50 transition-colors"
            >
              Message First
            </motion.a>
          </div>

          <div className="flex items-center justify-center gap-8 text-xs text-gray-500 font-light">
            <span className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-teal-600" />
              <span>Free Consultation</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-teal-600" />
              <span>From £49</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-2">
              <MessageCircle className="w-4 h-4 text-teal-600" />
              <span>WhatsApp Support</span>
            </span>
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
