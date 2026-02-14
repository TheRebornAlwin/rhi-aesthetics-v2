import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Shield,
  ChevronDown,
  MessageCircle,
  Instagram,
  Facebook,
  Star,
  Clock,
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
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit to Formspark
    fetch('https://submit-form.com/mZdp9094H', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        phone: formData.phone,
        message: formData.message || '(no message)',
      }),
    }).catch(() => {});
    // Open WhatsApp
    const msg = `Hi Rhia! I'd like to book a skin lesion removal.\n\nName: ${formData.name}\nPhone: ${formData.phone}${formData.message ? `\nMessage: ${formData.message}` : ''}`;
    window.open(`https://wa.me/447307762776?text=${encodeURIComponent(msg)}`, '_blank');
  };

  useEffect(() => {
    if ((window as any).fbq) {
      (window as any).fbq('track', 'PageView');
    }
    document.title = 'Skin Lesion Removal Southampton | RHI Aesthetics';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional skin lesion removal in Southampton. Precise 30-minute treatment. Mole, wart, and skin lesion removal with natural results. £49 intro offer.');
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

  const SocialProofBadge = ({ className = '' }: { className?: string }) => (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex -space-x-2">
        <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
          <img src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansvhu53QI2LoFzNsU8hi6XjReWVPbCHytdQ0YT" alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
          <img src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansLUrYbcEpuNyB4c5UP1OD9z8GXJlTsjiKSLwq" alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
          <img src="https://820i9wpaqi.ufs.sh/f/PwwcUidplans1jAiKGPrPgLW2xY53lMqmX6sbNHJyknwUZt8?v=2" alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
      <div className="space-y-1.5">
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
    { image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansrEctJIggJMAWrzNy61nv7tqUuYLkCVcsZQHl" },
    { image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplans1GO6raPrPgLW2xY53lMqmX6sbNHJyknwUZt8" },
    { image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansMb9ONqfF60kipOZwxPDGShftogB23RYsQ9cU" },
    { image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansnGSknDeeKuJpWcTySUNLz4R0I8Vw7fZ1G2kg" },
    { image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansbcDWDCOYpmXqDxfseSP45Qwn0azcOMUoCJih" },
    { image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansROkb0cNnPqXUigWtzfTd60QMsIbeE2vVLYuH" },
    { image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansZO9NlbM6XwJuImFfqiz86x7V3CyK2odlaTv5" },
    { image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplanspGTOtu9qI1imrJsTxKlZHRz3Vt25Gv4aoPnL" },
  ];

  const faqs = [
    { question: "Does it hurt?", answer: "You'll feel a tiny pinch for about 2 seconds from the numbing injection. After that, you won't feel the removal at all. Most clients say they're surprised how easy it was." },
    { question: "Will it scar?", answer: "You'll have a small mark at first. That's normal healing. With proper aftercare, most clients see it fade to nearly invisible within roughly 1 week. The healed mark is always far less noticeable than the original lesion." },
    { question: "What's included in the £49?", answer: "Everything: a full skin assessment, the removal itself, an aftercare kit with healing instructions, and WhatsApp support from me throughout your healing process." },
    { question: "How long does healing take?", answer: "A small scab forms and falls off within 5 to 7 days. The new pink skin underneath fades to match your natural tone over 1-2 weeks." },
    { question: "What if it's something dangerous?", answer: "I examine everything carefully during your consultation. If anything looks concerning (unusual shape, colour changes, irregular borders), I won't remove it. I'll refer you to a dermatologist first. Your safety always comes before any treatment." },
    { question: "The NHS turned me away. Can you help?", answer: "Yes. The NHS only covers medically necessary removals, not cosmetic ones. Just because it's not 'medically necessary' doesn't mean it's not affecting your confidence every single day. That's exactly why I offer this service." },
  ];

  return (
    <div className="min-h-screen bg-[#FDF8F6]">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isHeaderScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent lg:bg-[#FDF8F6] py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="group">
              <motion.div whileHover={{ opacity: 0.7 }} transition={{ duration: 0.2 }} className="w-10 h-10">
                <img src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansNiudZDCt2LsXhzqFT1ZQEalcB93Jpfx8wViI" alt="RHI Aesthetics" className="w-full h-full object-contain" loading="eager" />
              </motion.div>
            </Link>

            <div className="flex items-center space-x-4 sm:space-x-8">
              <nav className="hidden lg:flex items-center space-x-8">
                {[
                  { label: 'Results', id: 'results' },
                  { label: 'Reviews', id: 'reviews' },
                  { label: 'FAQ', id: 'faqs' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-xs tracking-wider transition-colors duration-200 font-light uppercase text-gray-700 hover:text-teal-600"
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
                className="text-xs tracking-wider px-4 sm:px-5 py-2.5 bg-teal-600 text-white hover:bg-teal-700 transition-colors duration-200 font-light uppercase rounded-md whitespace-nowrap"
              >
                Book Skin Lesion Removal
              </motion.a>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ============================================ */}
      {/* 1. HERO — Identity + Specific + Offer Card   */}
      {/* ============================================ */}
      {/* Mobile hero background image */}
      <section className="relative pt-36 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-6">
        {/* Background image for mobile */}
        <div
          className="absolute inset-0 lg:hidden bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(https://820i9wpaqi.ufs.sh/f/PwwcUidplansZYKIfl6XwJuImFfqiz86x7V3CyK2odlaTv5P)` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-10 lg:space-y-6 text-center lg:text-left"
            >
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.2rem] text-white lg:text-gray-900 leading-[1.15] tracking-tight font-light">
                For Women Who<br className="lg:hidden" /> Are Done Hiding
              </h1>

              <p className="text-base sm:text-xl text-white/90 lg:text-gray-700 font-light leading-loose lg:leading-relaxed">
                A precise 30-minute treatment that removes your mole, wart, or any skin lesion permanently with results you'll see the same day.
              </p>

              <div className="space-y-4 lg:space-y-2.5 inline-block text-left">
                <p className="text-sm text-white lg:text-gray-900 font-normal">Results after your treatment:</p>
                {[
                  'Lesion completely removed in one session',
                  'Tiny mark that fades to invisible within weeks',
                  'Back to your normal routine the same day',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-teal-400 lg:text-teal-600 flex-shrink-0" />
                    <span className="text-sm text-white/90 lg:text-gray-700 font-light">{item}</span>
                  </div>
                ))}
              </div>

              {/* Proof pills */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 lg:gap-2">
                {['Clinically proven technique', 'All skin types', 'Zero downtime'].map((pill, i) => (
                  <span key={i} className="px-3 py-1.5 bg-white/20 lg:bg-white border border-white/30 lg:border-gray-200 rounded text-xs text-white lg:text-gray-600 font-light">{pill}</span>
                ))}
              </div>

              {/* Mobile CTA button (no offer card) */}
              <div className="lg:hidden">
                <motion.a
                  href="#booking-form"
                  onClick={scrollToForm}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full text-center px-6 py-4 bg-teal-600 text-white text-sm tracking-wider uppercase font-light hover:bg-teal-700 transition-colors rounded-lg shadow-lg shadow-teal-500/20"
                >
                  Book Skin Lesion Removal
                </motion.a>
              </div>

              {/* Offer card - desktop only (in hero) */}
              <div className="hidden lg:block bg-white border-2 border-teal-200 rounded-2xl p-7 space-y-4 text-center">
                <p className="text-sm text-gray-600 font-light">First treatment only</p>
                <div className="flex items-baseline justify-center gap-3">
                  <span className="text-xl text-gray-400 line-through font-light">£150</span>
                  <span className="font-serif text-5xl text-teal-700 font-light">£49</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-amber-700 bg-amber-50 px-3 py-2 rounded-lg">
                  <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="text-xs font-normal">Only 9 spots remaining this month</span>
                </div>
                <motion.a
                  href="#booking-form"
                  onClick={scrollToForm}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full text-center px-6 py-4 bg-teal-600 text-white text-sm tracking-wider uppercase font-light hover:bg-teal-700 transition-colors rounded-lg shadow-lg shadow-teal-500/20"
                >
                  Book Skin Lesion Removal
                </motion.a>
                <div className="flex items-start justify-center gap-2">
                  <Shield className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-gray-600 font-light">
                    <span className="font-normal text-gray-800">Satisfaction guarantee.</span> Not happy with your results? I'll make it right, free of charge.
                  </p>
                </div>
                <SocialProofBadge className="justify-center" />
              </div>
            </motion.div>

            {/* Right: Hero image - desktop only */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl max-w-lg">
                <img
                  src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansZYKIfl6XwJuImFfqiz86x7V3CyK2odlaTv5P"
                  alt="Skin lesion removal"
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offer card - mobile only (own section below hero) */}
      <section className="lg:hidden py-10 px-4 sm:px-6 bg-[#FDF8F6]">
        <div className="max-w-md mx-auto">
          <div className="bg-white border-2 border-teal-200 rounded-2xl p-6 space-y-6 text-center">
            <p className="text-sm text-gray-600 font-light">First treatment only</p>
            <div className="flex items-baseline justify-center gap-3">
              <span className="text-xl text-gray-400 line-through font-light">£150</span>
              <span className="font-serif text-5xl text-teal-700 font-light">£49</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-amber-700 bg-amber-50 px-3 py-2 rounded-lg">
              <Clock className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="text-xs font-normal">Only 9 spots remaining this month</span>
            </div>
            <motion.a
              href="#booking-form"
              onClick={scrollToForm}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block w-full text-center px-6 py-4 bg-teal-600 text-white text-sm tracking-wider uppercase font-light hover:bg-teal-700 transition-colors rounded-lg shadow-lg shadow-teal-500/20"
            >
              Book Skin Lesion Removal
            </motion.a>
            <div className="flex items-start justify-center gap-2 leading-relaxed">
              <Shield className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                <span className="font-normal text-gray-800">Satisfaction guarantee.</span> Not happy with your results? I'll make it right, free of charge.
              </p>
            </div>
            <div className="pt-2">
              <SocialProofBadge className="justify-center" />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 2. RESULTS — Before/After Gallery             */}
      {/* ============================================ */}
      <section id="results" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <p className="text-xs tracking-[0.2em] text-teal-600 uppercase mb-3 sm:mb-4 font-light">Real Results</p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-gray-900 font-light mb-3">What Results Can You Expect?</h2>
            <p className="text-sm sm:text-base text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              After treatment, the lesion is gone. Permanently. A small scab forms and falls off within a week, leaving fresh skin that fades to match your natural tone. Most clients can't even find where it was.
            </p>
          </motion.div>

          {/* Mobile: 6 images, Desktop: all 8 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {beforeAfterImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className={`overflow-hidden rounded-lg sm:rounded-xl border border-gray-100 shadow-sm ${index >= 6 ? 'hidden sm:block' : ''}`}
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={item.image} alt="Before & After" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-xs sm:text-sm text-gray-500 font-light italic mb-5 sm:mb-6">Every result shown is a real client treated by me in Southampton.</p>
            <motion.a
              href="#booking-form"
              onClick={scrollToForm}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block text-sm tracking-wider px-8 py-4 bg-teal-600 text-white hover:bg-teal-700 transition-colors font-light uppercase rounded-md shadow-lg shadow-teal-500/15"
            >
              Book Skin Lesion Removal
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 3. WHAT IS IT + WHO IS IT FOR (combined)      */}
      {/* ============================================ */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#FDF8F6]">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            {/* What is it */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <p className="text-xs tracking-[0.2em] text-teal-600 uppercase mb-3 sm:mb-4 font-light">Precise & Permanent</p>
              <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 font-light mb-5 sm:mb-6">How Does It Work?</h2>
              <div className="space-y-4 text-sm text-gray-700 font-light leading-relaxed">
                <p>
                  I numb the area with a tiny injection (you'll feel a 2-second pinch, then nothing). Then I use a precise clinical technique to remove the mole, skin tag, or lesion at the root, so it's gone for good.
                </p>
                <p>
                  The whole thing takes about 30 minutes. You walk out the same day, no downtime, and within a week the area has healed to the point most people can't tell anything was ever there.
                </p>
                <p className="text-teal-700 font-normal border-l-4 border-teal-400 pl-4 py-2 bg-teal-50/50 rounded-r-lg">
                  It's the kind of result where everyone notices you look great... but nobody can tell why.
                </p>
              </div>
            </motion.div>

            {/* Who is it for */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center lg:text-left"
            >
              <p className="text-xs tracking-[0.2em] text-teal-600 uppercase mb-3 sm:mb-4 font-light">Is This You?</p>
              <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 font-light mb-5 sm:mb-6">This Treatment Is For You If...</h2>
              <div className="space-y-2.5 sm:space-y-3">
                {[
                  "You've been hiding it with makeup or adjusting your angle in every photo",
                  "You worry people are looking at it instead of you when you talk",
                  "You've wanted it gone for months or years but kept putting it off",
                  "The NHS told you it's cosmetic and won't help",
                  "You've looked into removal before but the price or fear of scarring stopped you",
                  "You just want to feel confident without thinking about it",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-white border border-gray-100 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-light leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Standalone B&A image - mobile only (after How/Who section) */}
      <div className="sm:hidden px-4 py-6 bg-white">
        <div className="max-w-sm mx-auto">
          <div className="overflow-hidden rounded-xl border border-gray-100 shadow-sm">
            <div className="aspect-[16/9] overflow-hidden">
              <img src={beforeAfterImages[6].image} alt="Before & After" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* 4. TESTIMONIALS                               */}
      {/* ============================================ */}
      <section id="reviews" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <p className="text-xs tracking-[0.2em] text-teal-600 uppercase mb-3 sm:mb-4 font-light">Real Stories</p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-gray-900 font-light mb-5">Hear It From My Clients</h2>
            <SocialProofBadge className="justify-center" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[
              {
                name: "Lauren M.",
                quote: "I put this off for THREE YEARS because I was scared. The numbing works, you don't feel anything, and now it's just... gone. My sister can't even tell which one it was.",
              },
              {
                name: "Marta R.",
                quote: "Rhia sorted all of them in one appointment, very professional, explained everything. Healed up nicely within a couple weeks. Already booked in again.",
              },
              {
                name: "Caroline H.",
                quote: "I was SO nervous. But Rhia is so lovely and calm, she chats to you and before you know it it's done. Already looks so much better. Would defo recommend.",
              },
              {
                name: "Jess K.",
                quote: "Genuinely mad at myself for waiting so long. Was scared for no reason, took like 15 mins and now I actually like what I see in photos again.",
              },
              {
                name: "Sophie T.",
                quote: "I messaged her like 10 times during healing with random questions because I'm super anxious and she answered every single one. Never made me feel stupid for asking.",
              },
              {
                name: "Stephanie P.",
                quote: "I wish I'd done this sooner. Healing was so quick and I can't even see where it was now. I don't avoid the mirror anymore. Such a simple thing but it's changed how I feel.",
              },
              {
                name: "Emma W.",
                quote: "Had a mole on my cheek I'd been covering with makeup for years. One appointment and it's gone. The scarring faded completely after about 5 weeks. Life changing honestly.",
              },
              {
                name: "Rachel D.",
                quote: "Was so worried about pain but the numbing injection was literally 2 seconds and then I felt nothing. Rhia talked me through everything. So professional and caring.",
              },
              {
                name: "Priya N.",
                quote: "The NHS told me they wouldn't remove it because it's cosmetic. Found Rhia and she had it sorted in one session for £49. Wish I'd known about her sooner.",
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="bg-[#FDF8F6] border border-gray-100 rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center"
              >
                <div className="flex justify-center gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 font-light leading-relaxed italic mb-3">"{story.quote}"</p>
                <p className="text-xs text-gray-500 font-normal">- {story.name}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8 sm:mt-10"
          >
            <motion.a
              href="#booking-form"
              onClick={scrollToForm}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block text-sm tracking-wider px-8 py-4 bg-teal-600 text-white hover:bg-teal-700 transition-colors font-light uppercase rounded-md shadow-lg shadow-teal-500/15"
            >
              Book Skin Lesion Removal
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Standalone B&A image - mobile only (after Testimonials) */}
      <div className="sm:hidden px-4 py-6 bg-[#FDF8F6]">
        <div className="max-w-sm mx-auto">
          <div className="overflow-hidden rounded-xl border border-gray-100 shadow-sm">
            <div className="aspect-[16/9] overflow-hidden">
              <img src={beforeAfterImages[7].image} alt="Before & After" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* 5. BOOKING FORM + RHIA BIO + OFFER RECAP      */}
      {/* ============================================ */}
      <section id="booking-form" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#FDF8F6]">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            {/* Left: Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-gray-900 font-light mb-3 text-center lg:text-left">Book Your Treatment</h2>
              <p className="text-base text-gray-800 font-light mb-6 sm:mb-8 leading-relaxed text-center lg:text-left">
                Fill in the form and I'll get back to you the same day. We'll find a time that works and I'll answer any questions you have.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-5">
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
                    onChange={(e) => {
                      const digits = e.target.value.replace(/\D/g, '');
                      const formatted = digits.length > 5 ? digits.slice(0, 5) + ' ' + digits.slice(5, 11) : digits;
                      setFormData({ ...formData, phone: formatted });
                    }}
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
                  Send Message
                </motion.button>
              </form>

              {/* Guarantee + Social proof under form */}
              <div className="mt-5 sm:mt-6 space-y-4">
                <div className="flex items-start justify-center lg:justify-start gap-2">
                  <Shield className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-gray-500 font-light">
                    <span className="font-normal text-gray-700">Satisfaction guarantee.</span> Not happy? I'll make it right, free of charge.
                  </p>
                </div>
                <SocialProofBadge className="justify-center lg:justify-start" />
              </div>

              {/* Treatment photos below form - desktop only */}
              <div className="hidden lg:block mt-8">
                <p className="text-xs tracking-[0.2em] text-teal-600 uppercase mb-3 font-light">Recent Results</p>
                <div className="grid grid-cols-3 gap-2">
                  {beforeAfterImages.slice(0, 6).map((item, index) => (
                    <div key={index} className="aspect-square rounded-lg overflow-hidden border border-gray-100">
                      <img src={item.image} alt="Treatment result" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Rhia bio + what's included */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Rhia photo */}
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-gray-100 w-full max-w-md mx-auto lg:mx-0">
                <img
                  src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansrqBKEAggJMAWrzNy61nv7tqUuYLkCVcsZQHl"
                  alt="Rhia"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="text-center">
                <h3 className="font-serif text-2xl text-gray-900 font-light mb-2">Hi, I'm Rhia</h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                  I've helped hundreds of women in Southampton finally feel free from the moles, skin tags, and lesions they'd been hiding for years. Your confidence matters. Let me help you get it back.
                </p>

                <div className="flex items-center justify-center gap-6 pt-4 border-t border-gray-200">
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

              {/* What's included */}
              <div className="bg-white border border-gray-100 rounded-xl p-5 sm:p-6 space-y-3 text-center">
                <p className="text-sm text-gray-900 font-normal mb-3">Your £49 appointment includes:</p>
                {[
                  'Expert skin assessment & consultation',
                  'Complete removal (approx. 30 minutes)',
                  'Aftercare kit & healing instructions',
                  'WhatsApp support throughout healing',
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-light">{item}</span>
                  </div>
                ))}
              </div>

              {/* Not ready? */}
              <div className="flex items-center justify-center gap-3 p-4 bg-white border border-gray-100 rounded-xl">
                <MessageCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <p className="text-sm text-gray-700 font-light">
                  Not ready yet? <a href="https://wa.me/447307762776" target="_blank" rel="noopener noreferrer" className="text-teal-600 font-normal underline underline-offset-2 hover:text-teal-700">Message me</a> with your questions, no pressure.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 6. FAQ                                        */}
      {/* ============================================ */}
      <section id="faqs" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-gray-900 font-light">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="bg-[#FDF8F6] border border-gray-100 rounded-xl overflow-hidden hover:border-teal-200 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left hover:bg-white/50 transition-colors"
                >
                  <span className="text-sm text-gray-900 pr-4 sm:pr-6 font-light">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? 'auto' : 0, opacity: openFaq === index ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-6 pb-4 sm:pb-5 text-sm text-gray-600 leading-relaxed font-light border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Final CTA under FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10 sm:mt-12 space-y-4"
          >
            <motion.a
              href="#booking-form"
              onClick={scrollToForm}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block text-sm tracking-wider px-8 py-4 bg-teal-600 text-white hover:bg-teal-700 transition-colors font-light uppercase rounded-md shadow-lg shadow-teal-500/15"
            >
              Book Skin Lesion Removal
            </motion.a>
            <div className="pt-2">
              <SocialProofBadge className="justify-center" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FOOTER                                        */}
      {/* ============================================ */}
      <footer className="bg-gray-900 text-white py-10 sm:py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-12">
            <div className="col-span-2 sm:col-span-1 space-y-5">
              <div className="w-10 h-10">
                <img src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansrKuIikggJMAWrzNy61nv7tqUuYLkCVcsZQHl" alt="RHI Aesthetics" className="w-full h-full object-contain opacity-80" loading="lazy" />
              </div>
              <p className="text-sm text-gray-400 font-light">
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
              <h3 className="text-xs tracking-widest uppercase mb-4 sm:mb-5 font-light">Contact</h3>
              <div className="space-y-3 text-sm text-gray-400 font-light">
                <p className="flex items-center space-x-3"><MapPin className="w-4 h-4 flex-shrink-0" /><span>Southampton, UK</span></p>
                <p className="flex items-center space-x-3"><Phone className="w-4 h-4 flex-shrink-0" /><span>07307 762776</span></p>
                <p className="flex items-center space-x-3"><Mail className="w-4 h-4 flex-shrink-0" /><span>rhiaesthetics@mail.com</span></p>
              </div>
            </div>
            <div>
              <h3 className="text-xs tracking-widest uppercase mb-4 sm:mb-5 font-light">Services</h3>
              <ul className="space-y-3 text-sm text-gray-400 font-light">
                <li><Link to="/slr" className="hover:text-white transition-colors">Skin Lesion Removal</Link></li>
                <li><Link to="/plasma-fibroblast" className="hover:text-white transition-colors">Plasma Fibroblast</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs tracking-widest uppercase mb-4 sm:mb-5 font-light">Hours</h3>
              <div className="space-y-3 text-sm text-gray-400 font-light">
                <p>Mon–Thurs: <span className="text-white">11am–8pm</span></p>
                <p>Friday: <span className="text-white">10am–3pm</span></p>
                <p>Sat–Sun: <span className="text-white">By Appointment</span></p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-xs text-gray-500 font-light">
              <p>&copy; 2025 RHI Aesthetics. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
                <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms</Link>
                <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookies</Link>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-800 text-center">
            <a href="https://tripletendigits.com" target="_blank" rel="noopener noreferrer" className="inline-block group">
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
