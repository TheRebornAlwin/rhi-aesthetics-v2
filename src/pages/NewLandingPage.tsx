import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
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
  X,
  Send,
} from 'lucide-react';

function NewLandingPage() {
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const form = document.getElementById('booking-form');
    if (form) {
      const offset = 40;
      const elementPosition = form.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    if ((window as any).fbq) {
      (window as any).fbq('track', 'Schedule');
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Rhia! I'd like to book a skin lesion removal consultation.\n\nName: ${formData.name}\nPhone: ${formData.phone}${formData.message ? `\nMessage: ${formData.message}` : ''}`;
    window.open(`https://wa.me/447307762776?text=${encodeURIComponent(msg)}`, '_blank');
    if ((window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }
  };

  useEffect(() => {
    if ((window as any).fbq) {
      (window as any).fbq('track', 'PageView');
    }
    document.title = 'Skin Lesion Removal Southampton | RHI Aesthetics';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional skin lesion removal in Southampton. Safe mole and skin tag removal with minimal scarring. Expert care, natural results, £49 intro offer.');
    }

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const scrollTimer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
    return () => clearTimeout(scrollTimer);
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

  // Social proof badge component (reused throughout page)
  const SocialProofBadge = ({ className = '' }: { className?: string }) => (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex -space-x-2">
        <div className="w-8 h-8 rounded-full bg-teal-200 border-2 border-white overflow-hidden">
          <img src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansvhu53QI2LoFzNsU8hi6XjReWVPbCHytdQ0YT" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-8 h-8 rounded-full bg-teal-300 border-2 border-white overflow-hidden">
          <img src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansLUrYbcEpuNyB4c5UP1OD9z8GXJlTsjiKSLwq" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-8 h-8 rounded-full bg-teal-400 border-2 border-white overflow-hidden">
          <img src="https://820i9wpaqi.ufs.sh/f/PwwcUidplans1jAiKGPrPgLW2xY53lMqmX6sbNHJyknwUZt8?v=2" alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      <div>
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <p className="text-xs text-gray-600 font-light">
          <span className="font-normal text-gray-800">300+</span> happy clients in Southampton
        </p>
      </div>
    </div>
  );

  const beforeAfterImages = [
    { image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansrEctJIggJMAWrzNy61nv7tqUuYLkCVcsZQHl", label: "Facial Mole", timeline: "6 weeks" },
    { image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplans1GO6raPrPgLW2xY53lMqmX6sbNHJyknwUZt8", label: "Skin Tags", timeline: "3 weeks" },
    { image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansMb9ONqfF60kipOZwxPDGShftogB23RYsQ9cU", label: "Age Spot", timeline: "4 weeks" },
    { image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansnGSknDeeKuJpWcTySUNLz4R0I8Vw7fZ1G2kg", label: "Cheek Mole", timeline: "5 weeks" },
    { image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansbcDWDCOYpmXqDxfseSP45Qwn0azcOMUoCJih", label: "Neck Lesion", timeline: "4 weeks" },
    { image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansROkb0cNnPqXUigWtzfTd60QMsIbeE2vVLYuH", label: "Sun Spot", timeline: "5 weeks" },
  ];

  const faqs = [
    { question: "Does it hurt?", answer: "The area is numbed before treatment. You'll feel a small pinch from the numbing injection (2 seconds), then nothing during the removal. Most clients are surprised by how painless it is." },
    { question: "Will it scar?", answer: "With proper technique and aftercare, scarring is minimal. Most clients see any mark fade completely within 4-8 weeks. I use methods specifically designed to minimize scarring." },
    { question: "What's included in the £49 offer?", answer: "The £49 offer includes removal of a small lesion, free consultation, aftercare kit, detailed healing instructions, and WhatsApp support during your healing process." },
    { question: "How long does healing take?", answer: "Most people see the bulk of healing within 5-7 days. You'll have a small scab for about a week, then new pink skin that fades to match your skin tone over 4-6 weeks." },
    { question: "What if it's cancerous or dangerous?", answer: "During your free consultation, I examine everything carefully. If I have any concerns, I won't remove it — I'll refer you to get it properly checked by a dermatologist. Your safety is the priority." },
    { question: "What if the NHS rejected me?", answer: "The NHS prioritizes medical need, so cosmetic removals aren't covered. Just because it's not medically necessary doesn't mean it's not affecting your confidence. That's why I offer this service." },
  ];

  return (
    <div className="min-h-screen bg-[#FDF8F6]">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isHeaderScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="group">
              <motion.div whileHover={{ opacity: 0.7 }} transition={{ duration: 0.2 }} className="w-10 h-10">
                <img src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansrKuIikggJMAWrzNy61nv7tqUuYLkCVcsZQHl" alt="RHI Aesthetics" className="w-full h-full object-contain" />
              </motion.div>
            </Link>

            <div className="flex items-center space-x-8">
              <nav className="hidden lg:flex items-center space-x-8">
                {[
                  { label: 'Results', id: 'results' },
                  { label: 'Reviews', id: 'reviews' },
                  { label: 'FAQ', id: 'faqs' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-xs tracking-wider transition-colors duration-200 font-light uppercase ${
                      isHeaderScrolled ? 'text-gray-700 hover:text-teal-600' : 'text-gray-700 hover:text-teal-600'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <motion.a
                href="#booking-form"
                onClick={scrollToForm}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="text-xs tracking-wider px-5 py-2.5 bg-teal-600 text-white hover:bg-teal-700 transition-colors duration-200 font-light uppercase rounded-md"
              >
                Book £49 Removal
              </motion.a>
            </div>
          </div>
        </div>
      </motion.header>

      {/* HERO SECTION */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-xs tracking-[0.2em] text-teal-600 uppercase font-light">For Women Who Are Ready</p>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.4rem] text-gray-900 leading-[1.15] tracking-tight font-light">
                Finally Feel Free From That Mole or Skin Tag
              </h1>

              <p className="text-lg text-gray-600 font-light leading-relaxed max-w-lg">
                Safe, professional skin lesion removal in Southampton. Minimal scarring, natural results.
              </p>

              <div className="space-y-3 pt-2">
                <p className="text-sm text-gray-800 font-normal">Results you can see:</p>
                {[
                  'Lesion completely removed in one session',
                  'Minimal scarring that fades within weeks',
                  'Back to normal the same day',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-light">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <span className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs text-gray-600 font-light">Safe & clinically proven</span>
                <span className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs text-gray-600 font-light">All skin types</span>
                <span className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs text-gray-600 font-light">No downtime</span>
              </div>

              {/* Offer box */}
              <div className="bg-white border-2 border-teal-200 rounded-2xl p-6 sm:p-8 max-w-sm space-y-4 shadow-sm">
                <p className="text-sm text-gray-600 font-light">First treatment only</p>
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl text-gray-400 line-through font-light">£120</span>
                  <span className="font-serif text-5xl sm:text-6xl text-teal-700 font-light">£49</span>
                </div>
                <div className="flex items-center gap-2 text-amber-700 bg-amber-50 px-3 py-2 rounded-lg">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="text-xs font-normal">Only 9 spots remaining this month</span>
                </div>
                <motion.a
                  href="#booking-form"
                  onClick={scrollToForm}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full text-center px-6 py-4 bg-teal-600 text-white text-sm tracking-wider uppercase font-light hover:bg-teal-700 transition-colors rounded-lg shadow-lg shadow-teal-500/20"
                >
                  Book Your Treatment
                </motion.a>

                <div className="flex items-start gap-2 pt-1">
                  <Shield className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-gray-600 font-light leading-relaxed">
                    <span className="font-normal text-gray-800">Satisfaction guarantee.</span> If you're not happy with your results, I'll make it right — free of charge.
                  </p>
                </div>

                <SocialProofBadge />
              </div>
            </motion.div>

            {/* Right: Hero image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansZYKIfl6XwJuImFfqiz86x7V3CyK2odlaTv5P"
                  alt="Skin lesion removal treatment"
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BEFORE/AFTER GALLERY */}
      <section id="results" className="py-20 lg:py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-xs tracking-[0.2em] text-teal-600 uppercase mb-4 font-light">Real Results</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 font-light mb-4">See For Yourself</h2>
            <p className="text-base text-gray-600 font-light max-w-xl mx-auto">
              Every treatment performed by me in Southampton. Real clients, real results.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {beforeAfterImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={item.image} alt="Before & After" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <motion.a
              href="#booking-form"
              onClick={scrollToForm}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block text-sm tracking-wider px-8 py-4 bg-teal-600 text-white hover:bg-teal-700 transition-colors font-light uppercase rounded-md shadow-lg shadow-teal-500/15"
            >
              Book £49 Removal
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* WHAT RESULTS CAN YOU EXPECT */}
      <section className="py-20 lg:py-24 px-6 bg-[#FDF8F6]">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs tracking-[0.2em] text-teal-600 uppercase mb-4 font-light">Precise & Natural</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 font-light mb-6">What Results Can You Expect?</h2>
              <div className="space-y-4 text-sm text-gray-700 font-light leading-relaxed">
                <p>
                  After treatment, the lesion is gone — permanently. You'll have a small scab for about a week as your skin heals naturally beneath it.
                </p>
                <p>
                  Once the scab falls off, there's fresh pink skin that gradually fades to match your natural skin tone over 4–8 weeks. Most clients tell me they can't even find where it was.
                </p>
                <p className="text-teal-700 font-normal border-l-4 border-teal-400 pl-4 py-2 bg-teal-50/50 rounded-r-lg">
                  It's that subtle result where everyone notices you look great, but nobody can tell exactly why.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-100"
            >
              <img
                src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansz8Zl6zTq8Hf5hu6iAXSa2bUkK9dTPsRpvIMn"
                alt="Treatment results"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS WHEN YOU KEEP WAITING */}
      <section className="py-20 lg:py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
                    <p className="font-serif text-3xl text-gray-400 font-light mb-2">3.2</p>
                    <p className="text-xs text-gray-500 font-light">average years clients waited before calling</p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
                    <p className="font-serif text-3xl text-gray-400 font-light mb-2">89%</p>
                    <p className="text-xs text-gray-500 font-light">felt people were staring at it during conversation</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
                    <p className="font-serif text-3xl text-gray-400 font-light mb-2">76%</p>
                    <p className="text-xs text-gray-500 font-light">avoided certain angles in photos to hide it</p>
                  </div>
                  <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 text-center">
                    <p className="font-serif text-3xl text-teal-600 font-light mb-2">15 min</p>
                    <p className="text-xs text-teal-700 font-light">is all it takes to remove it forever</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <p className="text-xs tracking-[0.2em] text-teal-600 uppercase mb-4 font-light">The Longer You Wait</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 font-light mb-6">Every Day It Stays Is a Day You're Hiding</h2>
              <div className="space-y-4 text-sm text-gray-700 font-light leading-relaxed">
                <p>
                  You adjust your angle in photos. You catch yourself wondering if they're looking at <span className="italic">it</span> instead of <span className="italic">you</span>. You've been thinking about this for months — maybe years.
                </p>
                <p>
                  The most common thing I hear after treatment?
                </p>
                <p className="text-base text-gray-900 font-normal italic border-l-4 border-teal-400 pl-4 py-2">
                  "I just wish I'd done it sooner."
                </p>
              </div>

              <motion.a
                href="#booking-form"
                onClick={scrollToForm}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block mt-8 text-sm tracking-wider px-8 py-4 bg-teal-600 text-white hover:bg-teal-700 transition-colors font-light uppercase rounded-md shadow-lg shadow-teal-500/15"
              >
                Book £49 Removal
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="py-20 lg:py-24 px-6 bg-[#FDF8F6]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-xs tracking-[0.2em] text-teal-600 uppercase mb-4 font-light">Real Stories</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 font-light mb-4">Women Who Trusted Me</h2>
            <SocialProofBadge className="justify-center" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Lauren M.",
                treatment: "Neck Mole Removal",
                quote: "I put this off for THREE YEARS because I was scared. The numbing works, you don't feel anything, and now it's just... gone. My sister can't even tell which one it was.",
                image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansvhu53QI2LoFzNsU8hi6XjReWVPbCHytdQ0YT",
              },
              {
                name: "Marta R.",
                treatment: "Multiple Skin Tags",
                quote: "Had skin tags catching on necklaces constantly. Rhia sorted all of them in one appointment, very professional, explained everything. Healed up nicely within a couple weeks.",
                image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansLUrYbcEpuNyB4c5UP1OD9z8GXJlTsjiKSLwq",
              },
              {
                name: "Caroline H.",
                treatment: "Vascular Treatment",
                quote: "I was SO nervous, proper anxious. But Rhia is so lovely and calm, she chats to you and before you know it it's done. Already looks so much better. Would defo recommend.",
                image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplans1jAiKGPrPgLW2xY53lMqmX6sbNHJyknwUZt8?v=2",
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-teal-100">
                    <img src={story.image} alt={story.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div>
                    <p className="text-sm font-normal text-gray-900">{story.name}</p>
                    <p className="text-xs text-teal-600 font-light">{story.treatment}</p>
                  </div>
                </div>

                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-gray-700 font-light leading-relaxed italic">"{story.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED IN YOUR FIRST VISIT */}
      <section className="py-20 lg:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 font-light mb-4">What's Included In Your First Visit</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <p className="text-sm text-gray-800 font-normal">What you'll see after treatment:</p>
              {[
                'Lesion completely gone',
                'Minimal mark that fades to invisible',
                'Natural, confident result',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700 font-light">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-5"
            >
              <p className="text-sm text-gray-800 font-normal">What's included in your appointment:</p>
              {[
                'Expert skin assessment & consultation',
                'Complete treatment (approx. 15 minutes)',
                'Aftercare kit & healing instructions',
                'WhatsApp support during healing',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700 font-light">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 bg-teal-50 border border-teal-200 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <Shield className="w-8 h-8 text-teal-600 flex-shrink-0" />
            <div>
              <p className="text-sm font-normal text-gray-900 mb-1">Satisfaction Guarantee</p>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                If you're not happy with your results, I'll make it right — free of charge. If I think something needs medical attention, I'll tell you and guide you to the right care. Your safety always comes first.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section id="booking-form" className="py-20 lg:py-24 px-6 bg-[#FDF8F6]">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 font-light mb-3">Book Your Treatment</h2>
              <p className="text-sm text-gray-600 font-light mb-8 leading-relaxed">
                Fill in the form below and I'll message you back the same day. We'll find a time that works and I'll answer any questions you have.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs tracking-wider text-gray-700 uppercase mb-2 font-light">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 font-light focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors"
                    placeholder="e.g. Sarah"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-wider text-gray-700 uppercase mb-2 font-light">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 font-light focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors"
                    placeholder="07XXX XXXXXX"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-wider text-gray-700 uppercase mb-2 font-light">Message (optional)</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 font-light focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors resize-none"
                    placeholder="Any questions or concerns..."
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-teal-600 text-white text-sm tracking-wider uppercase font-light hover:bg-teal-700 transition-colors rounded-lg shadow-lg shadow-teal-500/20"
                >
                  <Send className="w-4 h-4" />
                  Book My Treatment
                </motion.button>
              </form>

              <div className="mt-6 flex items-start gap-2">
                <Shield className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-gray-500 font-light">
                  <span className="font-normal text-gray-700">Satisfaction guarantee.</span> Not happy? I'll make it right, free of charge.
                </p>
              </div>

              <div className="mt-4">
                <SocialProofBadge />
              </div>
            </motion.div>

            {/* Right: Meet Rhia (condensed) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-gray-100 max-w-sm">
                <img
                  src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansrqBKEAggJMAWrzNy61nv7tqUuYLkCVcsZQHl"
                  alt="Rhia"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div>
                <h3 className="font-serif text-2xl text-gray-900 font-light mb-2">Hi, I'm Rhia</h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                  I've helped hundreds of women in Southampton finally feel free from the moles, skin tags, and lesions they'd been hiding for years. Your confidence matters — let me help you get it back.
                </p>

                <div className="flex items-center gap-6 pt-4 border-t border-gray-200">
                  <div>
                    <p className="font-serif text-2xl text-teal-700 font-light">300+</p>
                    <p className="text-xs text-gray-500 font-light">Happy Clients</p>
                  </div>
                  <div className="w-px h-10 bg-gray-200" />
                  <div>
                    <p className="font-serif text-2xl text-teal-700 font-light">5.0</p>
                    <p className="text-xs text-gray-500 font-light">Rating</p>
                  </div>
                  <div className="w-px h-10 bg-gray-200" />
                  <div>
                    <p className="font-serif text-2xl text-teal-700 font-light">5+</p>
                    <p className="text-xs text-gray-500 font-light">Years Exp.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NOT READY? */}
      <section className="py-10 px-6 bg-white border-y border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <p className="text-sm text-gray-700 font-light">Not ready to book yet?</p>
            <motion.a
              href="https://wa.me/447307762776"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-teal-600 text-teal-600 text-xs tracking-wider uppercase font-light hover:bg-teal-50 transition-colors rounded-md"
            >
              <MessageCircle className="w-4 h-4" />
              Message Rhia with your questions
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="py-16 px-6 bg-[#FDF8F6]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {[
              "https://820i9wpaqi.ufs.sh/f/PwwcUidplansZMUl9t6XwJuImFfqiz86x7V3CyK2odlaTv5P",
              "https://820i9wpaqi.ufs.sh/f/PwwcUidplans4xsdmeZlV9LZ7rOzhpUH0MiuGACRPD3jNeQk",
              "https://820i9wpaqi.ufs.sh/f/PwwcUidplansK7pCwqEuVC1H7mIjaGYs4kS2vQxiO3zoXpD6",
            ].map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <img src={src} alt={`Credential ${i + 1}`} className="w-full h-auto object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REAL TALK */}
      <section className="py-20 lg:py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-xs tracking-[0.2em] text-teal-600 uppercase mb-4 font-light">Honest Answers</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 font-light">Real Talk</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: Shield,
                question: "Will it scar?",
                answer: "You'll have a small mark at first — that's normal healing. With proper technique and aftercare, most clients see it fade to nearly invisible within 4–8 weeks.",
              },
              {
                icon: Heart,
                question: "Does it hurt?",
                answer: "A quick pinch for 2 seconds from the numbing. After that, you won't feel the removal at all. Most people are genuinely surprised how easy it is.",
              },
              {
                icon: CheckCircle,
                question: "What if it's cancerous?",
                answer: "I examine everything carefully during your consultation. If anything looks concerning, I won't remove it — I'll refer you to a dermatologist first. Your safety is always the priority.",
              },
              {
                icon: Clock,
                question: "Can I go to work after?",
                answer: "Yes. Most people go straight back to normal. You'll have a small scab that's easily covered. Full healing takes about a week.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-[#FDF8F6] border border-gray-100 rounded-2xl p-8 hover:border-teal-200 transition-colors"
              >
                <item.icon className="w-8 h-8 text-teal-600 mb-4" />
                <h3 className="font-serif text-xl text-gray-900 font-light mb-3">"{item.question}"</h3>
                <p className="text-sm text-gray-700 font-light leading-relaxed">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="py-20 lg:py-24 px-6 bg-[#FDF8F6]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 font-light mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-teal-200 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors"
                >
                  <span className="text-sm text-gray-900 pr-6 font-light">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4 text-teal-600" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? 'auto' : 0, opacity: openFaq === index ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed font-light border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 lg:py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 font-light">
              How much longer will you wait?
            </h2>
            <p className="text-base text-gray-600 font-light leading-relaxed max-w-xl mx-auto">
              Six months from now, you'll wish you'd started today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="#booking-form"
                onClick={scrollToForm}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group w-full sm:w-auto px-10 py-4 bg-teal-600 text-white text-sm tracking-wider uppercase font-light hover:bg-teal-700 transition-colors rounded-md shadow-lg shadow-teal-500/15 text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  Book £49 Removal
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
              <motion.a
                href="https://wa.me/447307762776"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto px-10 py-4 border border-teal-600 text-teal-600 text-sm tracking-wider uppercase font-light hover:bg-teal-50 transition-colors rounded-md text-center"
              >
                Ask Me Anything First
              </motion.a>
            </div>

            <div className="pt-4">
              <p className="text-sm text-gray-700 font-light italic mb-2">
                "Genuinely mad at myself for waiting so long. Was scared for no reason, took like 15 mins and now I actually like what I see in photos again"
              </p>
              <p className="text-xs text-teal-600 font-light">— Jess K.</p>
            </div>

            <SocialProofBadge className="justify-center" />
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-5">
              <div className="w-10 h-10">
                <img src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansrKuIikggJMAWrzNy61nv7tqUuYLkCVcsZQHl" alt="RHI Aesthetics" className="w-full h-full object-contain opacity-80" />
              </div>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Professional skin lesion removal in Southampton
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/rhi.aesthetics?igsh=MWhvMjFqb3Zscms0aw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61575636000105" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xs tracking-widest uppercase mb-5 font-light">Contact</h3>
              <div className="space-y-3 text-sm text-gray-400 font-light">
                <p className="flex items-center space-x-3"><MapPin className="w-4 h-4" /><span>Southampton, UK</span></p>
                <p className="flex items-center space-x-3"><Phone className="w-4 h-4" /><span>07307 762776</span></p>
                <p className="flex items-center space-x-3"><Mail className="w-4 h-4" /><span>rhiaesthetics@mail.com</span></p>
              </div>
            </div>

            <div>
              <h3 className="text-xs tracking-widest uppercase mb-5 font-light">Services</h3>
              <ul className="space-y-3 text-sm text-gray-400 font-light">
                <li><Link to="/slr" className="hover:text-white transition-colors">Skin Lesion Removal</Link></li>
                <li><Link to="/plasma-fibroblast" className="hover:text-white transition-colors">Plasma Fibroblast</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs tracking-widest uppercase mb-5 font-light">Hours</h3>
              <div className="space-y-3 text-sm text-gray-400 font-light">
                <p>Mon–Thurs: <span className="text-white">11am–8pm</span></p>
                <p>Friday: <span className="text-white">10am–3pm</span></p>
                <p>Sat–Sun: <span className="text-white">By Appointment</span></p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500 font-light">
              <p>&copy; 2025 RHI Aesthetics. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
                <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms</Link>
                <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookies</Link>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-800 text-center">
            <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=alwin@tripletendigits.com" target="_blank" rel="noopener noreferrer" className="inline-block group">
              <p className="text-xs text-gray-500 font-light">
                <span className="text-gray-400 group-hover:text-white transition-colors">Triple Ten Digits</span>
                <span className="mx-2">|</span>
                <span className="group-hover:text-gray-400 transition-colors">Competition-crushing websites</span>
              </p>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default NewLandingPage;
