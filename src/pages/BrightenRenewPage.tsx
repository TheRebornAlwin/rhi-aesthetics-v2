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
  Sparkles,
  Droplet,
  Layers,
} from 'lucide-react';

function BrightenRenewPage() {
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', preferredDate: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const waUrl = `https://wa.me/447307762776?text=${encodeURIComponent("Hey Rhia, I'm interested in the Brighten & Renew Facial!\n\nFirst name:\nSurname:\nPhone number:\nEmail address:\n\nThanks!")}`;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch('https://submit-form.com/mZdp9094H', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        service: 'Brighten & Renew Facial',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        preferredDate: formData.preferredDate || '(no preference)',
      }),
    }).catch(() => {});
    setFormSubmitted(true);
  };

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

  useEffect(() => {
    if ((window as any).fbq) {
      (window as any).fbq('track', 'PageView');
    }
    document.title = 'Brighten & Renew Facial Southampton | RHI Aesthetics';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional dermaplaning + chemical peel in Southampton. 2-hour treatment for smooth, glowing skin. No needles, no downtime. £100. Book your Brighten & Renew Facial.');
    }
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const scrollTimer = setTimeout(() => { window.scrollTo(0, 0); }, 0);
    return () => clearTimeout(scrollTimer);
  }, []);

  useEffect(() => {
    const handleScroll = () => { setIsHeaderScrolled(window.scrollY > 50); };
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

  const faqs = [
    {
      question: "Does it hurt?",
      answer: "No. Dermaplaning feels like gentle shaving. You'll feel the blade on your skin but there's no cutting or pain. The chemical peel may tingle slightly but it's not uncomfortable. Most women find the whole treatment relaxing."
    },
    {
      question: "Will my hair grow back thicker or darker?",
      answer: "No, this is a common myth. Dermaplaning cuts hair at the surface, leaving the follicle completely intact. Your hair will grow back at the same rate and texture as before."
    },
    {
      question: "How long do results last?",
      answer: "You'll see an immediate glow. Full results develop over 1-2 days and last 2-4 weeks. For best results, I recommend treatments every 3-4 weeks."
    },
    {
      question: "Is there any downtime?",
      answer: "None. You can return to normal activities immediately. Avoid heavy makeup for 24 hours and use SPF, but otherwise you're good to go. Most women go straight back to work or out for dinner."
    },
    {
      question: "Is the scalpel actually safe?",
      answer: "Completely. It's a medical-grade blade used with a precise, gentle technique. It's not cutting into your skin, it's gliding across the surface to remove dead cells and peach fuzz. I've performed hundreds of these treatments without a single issue."
    },
    {
      question: "Is £100 worth it?",
      answer: "Think about how much you've spent on serums, creams, and facials that didn't last. This gives you 2-4 weeks of smooth, glowing skin and flawless makeup application. Most clients say they wish they'd stopped buying products and started here."
    },
    {
      question: "What if I have sensitive skin?",
      answer: "I customise the chemical peel strength to your skin type. During the treatment, I'll check in with you and adjust accordingly. Just let me know about any sensitivities beforehand."
    },
    {
      question: "Can I wear makeup afterwards?",
      answer: "I recommend waiting 24 hours before applying makeup to let your fresh skin breathe. After that, you'll notice your makeup applies better than it ever has. That's usually the moment clients message me saying they can't believe the difference."
    },
  ];

  const BookingForm = ({ id, className = '' }: { id?: string; className?: string }) => (
    <div id={id} className={className}>
      {formSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-10 px-6"
        >
          <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-teal-600" />
          </div>
          <h3 className="font-serif text-2xl text-gray-900 font-light mb-2">You're all set!</h3>
          <p className="text-sm text-gray-600 font-light leading-relaxed max-w-sm mx-auto">
            I'll text you within 2 hours to confirm your appointment. If you have any questions in the meantime, feel free to <a href={waUrl} target="_blank" rel="noopener noreferrer" className="text-teal-600 underline underline-offset-2">message me on WhatsApp</a>.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleFormSubmit} className="space-y-4">
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
            <label className="block text-xs tracking-wider text-gray-700 uppercase mb-2 font-light">Email Address</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 font-light focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors"
              placeholder="sarah@email.com"
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
            <label className="block text-xs tracking-wider text-gray-700 uppercase mb-2 font-light">Preferred Date (optional)</label>
            <input
              type="date"
              value={formData.preferredDate}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
              className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 font-light focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors"
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-6 py-4 bg-teal-600 text-white text-sm tracking-wider uppercase font-light hover:bg-teal-700 transition-colors rounded-lg shadow-lg shadow-teal-500/20"
          >
            Reserve My Spot
          </motion.button>
          <p className="text-xs text-gray-500 font-light text-center pt-1">
            No payment required. I'll text you within 2 hours to confirm.
          </p>
        </form>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FDF8F6]">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isHeaderScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-[#FDF8F6] py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="group">
              <motion.div whileHover={{ opacity: 0.7 }} transition={{ duration: 0.2 }} className="w-12 h-12 lg:w-10 lg:h-10">
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
                Book Treatment
              </motion.a>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ============================================ */}
      {/* 1. HERO                                      */}
      {/* ============================================ */}
      <section className="relative pt-28 sm:pt-36 lg:pt-44 pb-14 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-xs tracking-[0.2em] text-teal-600 uppercase font-light">Brighten & Renew Facial</p>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[3.2rem] text-gray-900 leading-[1.15] tracking-tight font-light px-2 lg:px-0">
              <span className="lg:hidden">Smooth, Glowing Skin<br />in One Treatment</span>
              <span className="hidden lg:inline">When Nothing You've Tried Has Given<br />You the Skin You Actually Want</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed max-w-2xl mx-auto px-4 lg:px-0">
              Professional dermaplaning + chemical peel removes dead skin, smooths texture, and gives you immediate radiance. No needles. No downtime. Just the glow you've been spending hundreds on products trying to get.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-600" />
                <span className="text-sm text-gray-700 font-light">2-Hour Treatment</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-teal-600" />
                <span className="text-sm text-gray-700 font-light">Immediate Results</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-teal-600" />
                <span className="text-sm text-gray-700 font-light">Zero Downtime</span>
              </div>
            </div>

            <div className="pt-4">
              <motion.a
                href="#booking-form"
                onClick={scrollToForm}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block text-sm tracking-wider px-10 py-4 bg-teal-600 text-white hover:bg-teal-700 transition-colors font-light uppercase rounded-md shadow-lg shadow-teal-500/15"
              >
                Book Your Treatment - £100
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 2. WHAT'S INCLUDED                           */}
      {/* ============================================ */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs tracking-[0.2em] text-teal-600 uppercase mb-3 font-light">What You Get</p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-gray-900 font-light">Two Treatments, One Session, Real Results</h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Sparkles className="w-6 h-6 text-teal-600" />,
                step: "Step 1",
                title: "Professional Dermaplaning",
                description: "A medical-grade blade gently removes every layer of dead skin and peach fuzz from your face. This is what makes your skin feel like silk and lets products actually absorb."
              },
              {
                icon: <Droplet className="w-6 h-6 text-teal-600" />,
                step: "Step 2",
                title: "Chemical Peel",
                description: "With the dead layer gone, a customised chemical peel penetrates deeper than it ever could on its own. This is what gives you the lasting glow that products alone can't."
              },
              {
                icon: <Layers className="w-6 h-6 text-teal-600" />,
                step: "The Result",
                title: "Smooth, Radiant Skin",
                description: "You walk out with visibly smoother texture, a natural glow, and skin that your makeup will actually sit on properly. Results last 2-4 weeks."
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 sm:p-8 bg-[#FDF8F6] rounded-2xl border border-gray-100"
              >
                <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <p className="text-xs tracking-wider text-teal-600 uppercase mb-2 font-light">{item.step}</p>
                <h3 className="font-serif text-lg text-gray-900 font-light mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <div className="inline-flex items-center gap-3 bg-teal-50 border border-teal-100 rounded-xl px-6 py-3">
              <span className="font-serif text-2xl text-teal-700 font-light">£100</span>
              <span className="text-sm text-gray-600 font-light">for 2 hours of treatment</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 3. FIRST BOOKING FORM (Hot Traffic)          */}
      {/* ============================================ */}
      <section id="booking-form" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#FDF8F6]">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-gray-900 font-light mb-3 text-center lg:text-left">Ready to Get Your Glow?</h2>
              <p className="text-base text-gray-700 font-light mb-6 leading-relaxed text-center lg:text-left">
                Fill in the form and I'll get back to you within a couple of hours to confirm your appointment. No payment needed right now.
              </p>
              <BookingForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-5"
            >
              <div className="bg-white border border-gray-100 rounded-xl p-5 sm:p-6 space-y-3">
                <p className="text-sm text-gray-900 font-normal mb-2">Your appointment includes:</p>
                {[
                  'Full skin assessment before we start',
                  'Professional dermaplaning (approx. 45 mins)',
                  'Customised chemical peel for your skin type',
                  'Aftercare guidance and product recommendations',
                  'WhatsApp support if you have any questions after',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-light">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-start gap-2 px-1">
                <Shield className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-gray-500 font-light">
                  <span className="font-normal text-gray-700">Satisfaction guarantee.</span> Not happy with your results? I'll make it right, free of charge.
                </p>
              </div>

              <div className="flex items-center gap-3 px-1">
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
                <div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 font-light">Trusted by <span className="font-normal text-gray-800">200+</span> women in Southampton</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl">
                <MessageCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <p className="text-sm text-gray-700 font-light">
                  Prefer to message? <a href={waUrl} target="_blank" rel="noopener noreferrer" className="text-teal-600 font-normal underline underline-offset-2 hover:text-teal-700">WhatsApp me</a> instead.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 4. BEFORE & AFTER GALLERY                    */}
      {/* ============================================ */}
      <section id="results" className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <p className="text-xs tracking-[0.2em] text-teal-600 uppercase mb-3 font-light">Real Results</p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-gray-900 font-light mb-3">See the Difference for Yourself</h2>
            <p className="text-sm text-gray-600 font-light max-w-2xl mx-auto leading-relaxed px-4">
              Every result here is from a real client treated by me in Southampton. No filters, no editing, just the treatment doing what it does.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "Immediate Glow - Right After Treatment" },
              { label: "Texture Smoothing - 3 Days Post-Treatment" },
              { label: "Radiance Boost - 1 Week Post-Treatment" },
              { label: "Makeup Application - Before vs After" },
              { label: "Skin Clarity - 2 Weeks Post-Treatment" },
              { label: "Overall Smoothness - 1 Week Post-Treatment" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="overflow-hidden rounded-xl border border-gray-100 shadow-sm"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                  <div className="text-center px-6">
                    <Sparkles className="w-8 h-8 text-gray-300 mx-auto mb-3" />
                    <p className="text-xs text-gray-400 font-light">Before & After Photo</p>
                  </div>
                </div>
                <div className="px-4 py-3 bg-white">
                  <p className="text-xs text-gray-600 font-light">{item.label}</p>
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
            <motion.a
              href="#booking-form"
              onClick={scrollToForm}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block text-sm tracking-wider px-8 py-4 bg-teal-600 text-white hover:bg-teal-700 transition-colors font-light uppercase rounded-md shadow-lg shadow-teal-500/15"
            >
              Book Your Treatment
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 5. HOW IT WORKS                              */}
      {/* ============================================ */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#FDF8F6]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <p className="text-xs tracking-[0.2em] text-teal-600 uppercase mb-3 font-light">What to Expect</p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-gray-900 font-light">Here's Exactly What Happens</h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                title: "We start with a proper skin assessment",
                description: "Before anything touches your face, I look at your skin closely, ask about your routine, any sensitivities, and what you're hoping to achieve. This isn't a one-size-fits-all treatment."
              },
              {
                title: "Your skin is cleansed and prepped",
                description: "I remove all makeup, oil, and buildup so the treatment can work on a completely clean surface. This step alone often reveals how much dead skin has been sitting there."
              },
              {
                title: "Dermaplaning removes the dead layer",
                description: "Using a medical-grade blade, I gently remove dead skin cells and peach fuzz. It feels like someone lightly shaving your face, nothing more. No cutting, no pain. Most women are surprised how much comes off and how smooth their skin feels immediately."
              },
              {
                title: "The chemical peel goes to work",
                description: "With the dead layer gone, a peel customised to your skin type penetrates much deeper than it could on its own. You might feel a mild tingle, but that's it. This is what gives you the lasting radiance that keeps developing over the next few days."
              },
              {
                title: "You leave with a visible glow",
                description: "No redness, no downtime, no hiding. You walk out with smoother, brighter skin. The full results develop over 1-2 days, and most clients say their makeup has never applied better."
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-4 sm:gap-6"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-sm font-light mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-base text-gray-900 font-normal mb-1.5">{step.title}</h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 p-5 bg-white border border-gray-100 rounded-xl"
          >
            <p className="text-sm text-gray-700 font-light leading-relaxed italic text-center">
              "I was nervous as is to have a scalpel near me, but it was completely painless. I actually found the whole thing relaxing. And the results... my skin is still as smooth as a baby's bottom a week later."
            </p>
            <p className="text-xs text-gray-500 font-normal text-center mt-2">- Emma L., 35</p>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 6. TESTIMONIALS                              */}
      {/* ============================================ */}
      <section id="reviews" className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <p className="text-xs tracking-[0.2em] text-teal-600 uppercase mb-3 font-light">Real Stories</p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-gray-900 font-light mb-5">What My Clients Say</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[
              {
                name: "Sarah M.",
                age: 42,
                quote: "My husband of 10 years not only noticed a change but actually commented on it. That never happens. My skin genuinely looks like it's glowing, and my makeup sits so much better now. I wish I'd done this years ago instead of spending hundreds on serums.",
              },
              {
                name: "Emma L.",
                age: 35,
                quote: "I was SO nervous about the scalpel bit, like I nearly cancelled twice. But honestly? It felt like someone gently shaving my face and that's it. And the results... my skin is still smooth as a baby's bottom a week later. Actually can't believe it.",
              },
              {
                name: "Lisa K.",
                age: 48,
                quote: "I've tried The Ordinary, Drunk Elephant, those expensive Sephora serums, regular facials, at-home peels. Nothing ever lasted more than a day or two. This is the first time I've looked in the mirror and actually liked what I saw. My foundation doesn't look cakey anymore, it just sits right.",
              },
              {
                name: "Rachel P.",
                age: 33,
                quote: "ok so I was the biggest skeptic, I'd basically given up on my skin doing anything other than looking tired all the time. but after one session my colleagues kept asking what I'd done differently?? like actual unprompted compliments. definitely booking again",
              },
              {
                name: "Claire H.",
                age: 44,
                quote: "I'll be honest, £100 felt like a lot when I first saw it. But when I think about the amount I've spent on products that did absolutely nothing, this is actually worth every penny. My skin looks fresh and healthy, I don't need as much makeup now, and I just feel like myself again.",
              },
              {
                name: "Jade W.",
                age: 37,
                quote: "The peach fuzz thing was honestly my biggest insecurity, I could see it in photos catching the light and it drove me mad. After the treatment it was just... gone. My skin felt so smooth and the glow lasted weeks. Rhia made the whole experience so comfortable too, she talked me through everything.",
              },
              {
                name: "Priya T.",
                age: 40,
                quote: "I'm someone who researches everything before I commit, read every review, watched every video, the lot. Finally booked it and I'm actually annoyed at myself for waiting so long. The treatment itself was relaxing and my skin has never looked this good. Even my sister noticed and she never notices anything.",
              },
              {
                name: "Natalie D.",
                age: 51,
                quote: "Look, I won't lie, I was terrified. The word scalpel doesn't exactly fill you with confidence does it? But Rhia was so gentle and explained every step. Zero pain. My skin felt like silk afterwards and my makeup actually glides on now instead of sitting on top. Game changer for me.",
              },
              {
                name: "Amy R.",
                age: 39,
                quote: "I really can't believe I waited this long to have a treatment like this. I used to wake up, look in the mirror, and just sigh at how dull and tired my skin looked even after 8 hours of sleep. Now I actually look forward to catching my reflection. Sounds silly but it's made such a difference to how I feel.",
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
                <p className="text-xs text-gray-500 font-normal">- {story.name}, {story.age}</p>
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
              Book Your Treatment
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 7. FAQ                                       */}
      {/* ============================================ */}
      <section id="faqs" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#FDF8F6]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-gray-900 font-light">Common Questions</h2>
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
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors"
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
        </div>
      </section>

      {/* ============================================ */}
      {/* 8. ABOUT RHIA                                */}
      {/* ============================================ */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-gray-100 max-w-sm mx-auto lg:mx-0">
                <img
                  src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansrqBKEAggJMAWrzNy61nv7tqUuYLkCVcsZQHl"
                  alt="Rhia"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center lg:text-left"
            >
              <p className="text-xs tracking-[0.2em] text-teal-600 uppercase mb-3 font-light">Your Practitioner</p>
              <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 font-light mb-4">Hi, I'm Rhia</h2>
              <div className="space-y-4 text-sm text-gray-600 font-light leading-relaxed">
                <p>
                  I know what it's like to spend money on skincare and feel like nothing actually works. That frustration is exactly why I trained in treatments that deliver real, visible results.
                </p>
                <p>
                  The Brighten & Renew Facial is one of my favourite treatments to perform because the results are immediate. Clients see the difference the moment they look in the mirror, and that reaction is genuinely the best part of my job.
                </p>
                <p>
                  I've helped hundreds of women in Southampton get glowing, smooth skin without needles or downtime. If you have any questions at all before booking, don't hesitate to message me.
                </p>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-6 pt-6 mt-6 border-t border-gray-200">
                <div>
                  <p className="font-serif text-2xl text-teal-700 font-light">200+</p>
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 9. FINAL CTA                                 */}
      {/* ============================================ */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#FDF8F6]">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-gray-900 font-light">Ready to See What Your Skin Can Actually Look Like?</h2>
            <p className="text-base text-gray-600 font-light leading-relaxed">
              Join hundreds of women in Southampton who stopped spending money on products that don't work and got results they could actually see.
            </p>
            <motion.a
              href="#booking-form"
              onClick={scrollToForm}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block text-sm tracking-wider px-10 py-4 bg-teal-600 text-white hover:bg-teal-700 transition-colors font-light uppercase rounded-md shadow-lg shadow-teal-500/15"
            >
              Book Your Treatment - £100
            </motion.a>
            <p className="text-xs text-gray-500 font-light pt-1">
              No payment required. I'll text you within 2 hours to confirm your appointment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FOOTER                                       */}
      {/* ============================================ */}
      <footer className="bg-gray-900 text-white py-10 sm:py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-12">
            <div className="col-span-2 sm:col-span-1 space-y-5">
              <div className="w-10 h-10">
                <img src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansrKuIikggJMAWrzNy61nv7tqUuYLkCVcsZQHl" alt="RHI Aesthetics" className="w-full h-full object-contain opacity-80" loading="lazy" />
              </div>
              <p className="text-sm text-gray-400 font-light">Professional skin treatments in Southampton</p>
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
                <li><Link to="/brighten-renew" className="hover:text-white transition-colors">Brighten & Renew</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs tracking-widest uppercase mb-4 sm:mb-5 font-light">Hours</h3>
              <div className="space-y-3 text-sm text-gray-400 font-light">
                <p>Mon-Thurs: <span className="text-white">11am-8pm</span></p>
                <p>Friday: <span className="text-white">10am-3pm</span></p>
                <p>Sat-Sun: <span className="text-white">By Appointment</span></p>
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

export default BrightenRenewPage;
