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
  Award,
  ImageIcon,
  ArrowRight,
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
    { question: "Does it hurt?", answer: "No. Dermaplaning feels like gentle shaving. You'll feel the blade on your skin but there's no cutting or pain. The chemical peel may tingle slightly but it's not uncomfortable. Most women find the whole treatment relaxing." },
    { question: "Will my hair grow back thicker or darker?", answer: "No, this is a common myth. Dermaplaning cuts hair at the surface, leaving the follicle completely intact. Your hair will grow back at the same rate and texture as before." },
    { question: "How long do results last?", answer: "You'll see an immediate glow. Full results develop over 1-2 days and last 2-4 weeks. For best results, I recommend treatments every 3-4 weeks." },
    { question: "Is there any downtime?", answer: "None. You can return to normal activities immediately. Avoid heavy makeup for 24 hours and use SPF, but otherwise you're good to go. Most women go straight back to work or out for dinner." },
    { question: "Is the scalpel actually safe?", answer: "Completely. It's a medical-grade blade used with a precise, gentle technique. It's not cutting into your skin, it's gliding across the surface to remove dead cells and peach fuzz. I've performed hundreds of these treatments without a single issue." },
    { question: "Is £100 worth it?", answer: "Think about how much you've spent on serums, creams, and facials that didn't last. This gives you 2-4 weeks of smooth, glowing skin and flawless makeup application. Most clients say they wish they'd stopped buying products and started here." },
    { question: "What if I have sensitive skin?", answer: "I customise the chemical peel strength to your skin type. During the treatment, I'll check in with you and adjust accordingly. Just let me know about any sensitivities beforehand." },
    { question: "Can I wear makeup afterwards?", answer: "I recommend waiting 24 hours before applying makeup to let your fresh skin breathe. After that, you'll notice your makeup applies better than it ever has. That's usually the moment clients message me saying they can't believe the difference." },
  ];

  // Image placeholder component
  const ImagePlaceholder = ({ label, aspect = "aspect-[4/3]", className = "" }: { label: string; aspect?: string; className?: string }) => (
    <div className={`${aspect} bg-gradient-to-br from-teal-100 via-teal-50 to-white rounded-2xl border-2 border-dashed border-teal-200 flex items-center justify-center overflow-hidden ${className}`}>
      <div className="text-center px-6">
        <div className="w-14 h-14 bg-teal-500/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
          <ImageIcon className="w-7 h-7 text-teal-400" />
        </div>
        <p className="text-xs text-teal-600/70 font-medium leading-relaxed">{label}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHeaderScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="group">
              <div className="w-12 h-12 lg:w-10 lg:h-10">
                <img src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansNiudZDCt2LsXhzqFT1ZQEalcB93Jpfx8wViI" alt="RHI Aesthetics" className="w-full h-full object-contain" loading="eager" />
              </div>
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
                    className={`text-xs tracking-wider transition-colors duration-200 font-light uppercase ${isHeaderScrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white/80 hover:text-white'}`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
              <a
                href="#booking-form"
                onClick={scrollToForm}
                className="text-xs tracking-wider px-4 sm:px-6 py-2.5 sm:py-3 bg-teal-600 text-white hover:bg-teal-700 transition-all duration-300 font-semibold uppercase rounded hover:scale-105 shadow-lg"
              >
                Book Treatment
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ============================================ */}
      {/* 1. FULL-SCREEN HERO                          */}
      {/* ============================================ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* IMAGE NEEDED: Hero background - Close-up of glowing, radiant skin or Rhia performing dermaplaning treatment. Warm, soft lighting. Should feel premium and calming. */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500/20 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-teal-600/10 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
            className="space-y-6 sm:space-y-8"
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-xs sm:text-sm font-medium uppercase tracking-wider">
              Brighten & Renew Facial
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-normal text-white leading-tight">
              <span className="lg:hidden">Smooth, Glowing Skin<br />in One Treatment</span>
              <span className="hidden lg:inline">When Nothing You've Tried<br />Has Actually Worked</span>
            </h1>

            <div className="flex items-center justify-center gap-3">
              <div className="w-16 sm:w-20 h-px bg-teal-400"></div>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Professional dermaplaning + chemical peel removes the dead layer your products can't reach, smooths texture, and gives you the glow you've been spending hundreds trying to get.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-white/70">
              {[
                { icon: Clock, text: "2-Hour Treatment" },
                { icon: Sparkles, text: "Immediate Results" },
                { icon: Shield, text: "Zero Downtime" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <item.icon className="w-4 h-4 text-teal-400" />
                  <span className="text-sm font-light">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 px-4">
              <a
                href="#booking-form"
                onClick={scrollToForm}
                className="bg-teal-600 text-white px-10 py-4 rounded font-semibold hover:bg-teal-700 transition-all duration-300 uppercase text-sm tracking-wider shadow-lg hover:shadow-xl hover:scale-105 inline-block text-center"
              >
                Book Your Treatment - £100
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <ChevronDown className="w-6 h-6 text-white/40" />
        </motion.div>
      </section>

      {/* ============================================ */}
      {/* 2. EMPATHY SECTION — "I Get It"              */}
      {/* ============================================ */}
      <section className="relative bg-white overflow-hidden py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* IMAGE NEEDED: Professional photo of Rhia, warm and approachable. Same one used on other pages works, or a new one of her in the treatment room looking welcoming. */}
            <div className="relative h-[500px] lg:h-[700px]">
              <img
                src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansrqBKEAggJMAWrzNy61nv7tqUuYLkCVcsZQHl"
                alt="Rhia - Aesthetic Practitioner"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
            </div>

            <div className="flex items-center px-8 sm:px-12 lg:px-16 py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-teal-50/40 to-white">
              <div className="max-w-xl mx-auto text-center sm:text-left">
                <span className="inline-block px-4 py-2 bg-white border border-teal-200 rounded-full text-teal-600 text-sm font-semibold uppercase tracking-wider mb-8">
                  Sound Familiar?
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black mb-8 leading-tight">
                  Tired of products that{' '}
                  <span className="font-normal italic">promise everything and do nothing?</span>
                </h2>

                <div className="w-16 h-px bg-teal-500 mb-8 mx-auto sm:mx-0"></div>

                <div className="space-y-6 text-base sm:text-lg text-black/70 leading-relaxed mb-10">
                  <p>
                    You've tried The Ordinary, Drunk Elephant, those £60 Sephora serums. You've watched every skincare routine on Instagram. You've done the multi-step routines, the retinol, the vitamin C.
                  </p>
                  <p>
                    And still your foundation looks cakey by 3pm. Still your skin looks tired even when you're not. Still nobody notices.
                  </p>
                  <p className="text-teal-700 font-medium">
                    The problem isn't your products. It's that you have a layer of dead skin blocking everything from working. This treatment removes it.
                  </p>
                </div>

                <a
                  href="#booking-form"
                  onClick={scrollToForm}
                  className="bg-teal-600 text-white px-10 py-4 rounded font-semibold hover:bg-teal-700 transition-all duration-300 uppercase text-sm tracking-wider shadow-lg hover:shadow-xl hover:scale-105 mx-auto sm:mx-0 inline-block"
                >
                  Book Your Treatment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 3. HOW IT WORKS — 3 Step Cards               */}
      {/* ============================================ */}
      <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-50/50 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-20">
            <span className="inline-block px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-600 text-sm font-semibold uppercase tracking-wider mb-6">
              The Treatment
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-black mb-6">
              How It Works
            </h2>
            <p className="text-lg sm:text-xl text-black/60 max-w-3xl mx-auto font-light">
              Two professional treatments combined in one session for results you can see immediately.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Sparkles,
                title: "Dermaplaning",
                description: "A medical-grade blade gently removes every layer of dead skin and peach fuzz. It feels like someone lightly shaving your face, nothing more. Most women are surprised at how much comes off and how smooth their skin feels immediately.",
                number: "01",
                imageLabel: "IMAGE: Close-up of dermaplaning being performed. Blade gliding gently across cheek. Clean, professional, calming."
              },
              {
                icon: Droplet,
                title: "Chemical Peel",
                description: "With the dead layer gone, a customised peel penetrates deeper than it ever could on its own. You might feel a mild tingle. This is what gives you the lasting radiance that keeps developing over the next few days.",
                number: "02",
                imageLabel: "IMAGE: Chemical peel being applied with a brush. Smooth, even application. Professional setting."
              },
              {
                icon: Layers,
                title: "Instant Glow",
                description: "You walk out with visibly smoother texture, a natural glow, and skin that your makeup will actually sit on properly. No redness, no hiding. Most clients go straight to dinner or back to work.",
                number: "03",
                imageLabel: "IMAGE: Client's face immediately after treatment - glowing, radiant skin. Natural lighting. No filter."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="group relative bg-gradient-to-br from-teal-50 to-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-teal-200 hover:border-teal-500/50 transition-all duration-500 overflow-hidden text-center hover:shadow-xl"
              >
                <div className="absolute top-4 left-1/2 -translate-x-1/2 sm:left-4 sm:translate-x-0 w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 z-10">
                  <span className="text-2xl sm:text-3xl font-black text-white">{step.number}</span>
                </div>

                <div className="relative z-10 space-y-4 sm:space-y-6 pt-16 sm:pt-20">
                  <ImagePlaceholder label={step.imageLabel} aspect="aspect-video" />
                  <h3 className="text-xl sm:text-2xl font-bold text-black">{step.title}</h3>
                  <p className="text-sm sm:text-base text-black/70 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-16 bg-gradient-to-r from-teal-50 to-teal-100/50 border border-teal-500/20 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto text-center"
          >
            <p className="text-lg sm:text-xl text-black">
              <strong className="text-teal-600 font-bold">No pain, no needles, no downtime</strong> — just a gentle treatment that feels like a professional facial, with results that actually last.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 4. PRICE CARD                                */}
      {/* ============================================ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-teal-50/20 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white border-4 border-teal-500 rounded-3xl p-8 sm:p-12 text-center shadow-xl overflow-hidden">
            <div className="absolute top-0 left-0 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-teal-600/10 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <span className="inline-block px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-600 text-sm font-semibold uppercase tracking-wider mb-6">
                Brighten & Renew Facial
              </span>

              <div className="flex items-baseline justify-center gap-3 mb-4">
                <span className="font-serif text-6xl sm:text-7xl text-teal-700 font-light">£100</span>
              </div>
              <p className="text-lg text-black/60 font-light mb-8">for a full 2-hour treatment</p>

              <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-10 text-left">
                {[
                  'Professional dermaplaning',
                  'Customised chemical peel',
                  'Full skin assessment',
                  'Aftercare kit & guidance',
                  'WhatsApp support after',
                  'Immediate visible results',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                    <span className="text-sm text-black/70">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="#booking-form"
                onClick={scrollToForm}
                className="bg-teal-600 text-white px-10 py-4 rounded font-semibold hover:bg-teal-700 transition-all duration-300 uppercase text-sm tracking-wider shadow-lg hover:shadow-xl hover:scale-105 inline-block"
              >
                Reserve My Spot
              </a>

              <p className="text-xs text-black/40 mt-4 font-light">No payment required to book. I'll confirm within 2 hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 5. BOOKING FORM                              */}
      {/* ============================================ */}
      <section id="booking-form" className="py-16 sm:py-24 px-4 sm:px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-teal-50 to-white rounded-3xl border-2 border-teal-200 p-8 sm:p-10 shadow-xl"
            >
              <h2 className="text-3xl sm:text-4xl font-light text-black mb-2 text-center lg:text-left">Book Your Treatment</h2>
              <p className="text-base text-black/60 font-light mb-8 text-center lg:text-left">
                No payment needed. I'll text you within 2 hours to confirm.
              </p>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-20 h-20 bg-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">You're all set!</h3>
                  <p className="text-base text-black/60 leading-relaxed max-w-sm mx-auto">
                    I'll text you within 2 hours to confirm your appointment. Questions? <a href={waUrl} target="_blank" rel="noopener noreferrer" className="text-teal-600 font-semibold underline underline-offset-2">WhatsApp me</a>.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs tracking-wider text-black/60 uppercase mb-2 font-semibold">Your Name</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 bg-white border-2 border-teal-200 rounded-xl text-sm text-black focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all" placeholder="e.g. Sarah" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-wider text-black/60 uppercase mb-2 font-semibold">Email Address</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 bg-white border-2 border-teal-200 rounded-xl text-sm text-black focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all" placeholder="sarah@email.com" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-wider text-black/60 uppercase mb-2 font-semibold">Phone Number</label>
                    <input type="tel" required value={formData.phone} onChange={(e) => {
                      const digits = e.target.value.replace(/\D/g, '');
                      const formatted = digits.length > 5 ? digits.slice(0, 5) + ' ' + digits.slice(5, 11) : digits;
                      setFormData({ ...formData, phone: formatted });
                    }}
                      className="w-full px-5 py-4 bg-white border-2 border-teal-200 rounded-xl text-sm text-black focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all" placeholder="07XXX XXXXXX" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-wider text-black/60 uppercase mb-2 font-semibold">Preferred Date <span className="normal-case text-black/30">(optional)</span></label>
                    <input type="date" value={formData.preferredDate} onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-5 py-4 bg-white border-2 border-teal-200 rounded-xl text-sm text-black focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all" />
                  </div>
                  <button type="submit"
                    className="w-full px-6 py-4 bg-teal-600 text-white text-sm tracking-wider uppercase font-semibold hover:bg-teal-700 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02]">
                    Reserve My Spot
                  </button>
                </form>
              )}
            </motion.div>

            {/* Trust Side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="space-y-6"
            >
              {/* IMAGE NEEDED: Rhia performing treatment or client with glowing skin. Should feel warm and professional. */}
              <ImagePlaceholder label="IMAGE: Rhia performing the treatment on a relaxed client. Warm lighting, professional setting, calming atmosphere." aspect="aspect-[4/3]" className="shadow-lg" />

              <div className="bg-gradient-to-br from-teal-50 to-white border-2 border-teal-200 rounded-2xl p-6 sm:p-8 space-y-4">
                <p className="font-bold text-black mb-2">Your appointment includes:</p>
                {[
                  'Full skin assessment before we start',
                  'Professional dermaplaning (approx. 45 mins)',
                  'Customised chemical peel for your skin type',
                  'Aftercare guidance & product recommendations',
                  'WhatsApp support if you have questions after',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-black/70">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 p-4 bg-white border border-teal-200 rounded-xl">
                <MessageCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <p className="text-sm text-black/70">
                  Prefer to message? <a href={waUrl} target="_blank" rel="noopener noreferrer" className="text-teal-600 font-semibold underline underline-offset-2 hover:text-teal-700">WhatsApp me</a> instead.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 6. BEFORE & AFTER GALLERY                    */}
      {/* ============================================ */}
      <section id="results" className="bg-white py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-600 text-sm font-semibold uppercase tracking-wider mb-6">
              Transformations
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-black mb-4">
              Real Results,{' '}<br className="sm:hidden" />Real Skin
            </h2>
            <p className="text-lg sm:text-xl text-black/60 max-w-2xl mx-auto font-light">
              Every photo is from a real client. No filters, no editing. Just the treatment doing what it does.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-6 sm:gap-8 mb-16">
            {[
              "IMAGE: Before/after - Dull skin to glowing radiance. Same lighting, same angle. Immediate post-treatment.",
              "IMAGE: Before/after - Cakey makeup vs smooth application. Show how foundation sits differently.",
              "IMAGE: Before/after - Visible peach fuzz vs smooth, fuzz-free skin. Close-up side lighting.",
              "IMAGE: Before/after - Rough texture vs silky smooth. Close-up of cheek area. 1 week post.",
              "IMAGE: Before/after - Tired/dull complexion vs vibrant glow. Natural daylight. 3 days post.",
              "IMAGE: Before/after - Pore visibility improvement. Close-up showing refined skin texture. 2 weeks post.",
            ].map((label, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative flex flex-col"
              >
                <ImagePlaceholder label={label} aspect="aspect-[3/4]" className="rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300" />
              </motion.div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: Award, text: "Qualified Aesthetic Practitioner" },
              { icon: Sparkles, text: "Professional-Grade Products Only" },
              { icon: Shield, text: "Fully Insured & Accredited" },
              { icon: MapPin, text: "Located in Southampton" }
            ].map((item, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-teal-50 to-white p-6 sm:p-8 rounded-2xl border border-teal-200 hover:border-teal-400 transition-all duration-300 text-center">
                <div className="bg-teal-500 w-12 h-12 sm:w-14 sm:h-14 rounded-xl mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
                </div>
                <p className="font-semibold text-xs sm:text-sm text-black/80">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 7. TESTIMONIALS                              */}
      {/* ============================================ */}
      <section id="reviews" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-teal-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-600 text-sm font-semibold uppercase tracking-wider mb-6">
              Testimonials
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-black mb-4">
              What My{' '}<br className="sm:hidden" />Clients Say
            </h2>
            <p className="text-lg sm:text-xl text-black/60 max-w-2xl mx-auto font-light">
              Real feedback from real women in Southampton
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                quote: "My husband of 10 years not only noticed a change but actually commented on it. That never happens. My skin genuinely looks like it's glowing, and my makeup sits so much better now. I wish I'd done this years ago instead of spending hundreds on serums that did nothing.",
                name: "Sarah M.",
                age: "42",
              },
              {
                quote: "I was SO nervous about the scalpel bit, like I nearly cancelled twice. But honestly? It felt like someone gently shaving my face and that's it. And the results... my skin is still smooth as a baby's bottom a week later. Actually can't believe it.",
                name: "Emma L.",
                age: "35",
              },
              {
                quote: "I've tried The Ordinary, Drunk Elephant, those expensive Sephora serums, regular facials, at-home peels. Nothing ever lasted more than a day or two. This is the first time I've looked in the mirror and actually liked what I saw. My foundation doesn't look cakey anymore it just sits right.",
                name: "Lisa K.",
                age: "48",
              },
              {
                quote: "ok so I was the biggest skeptic, I'd basically given up on my skin doing anything other than looking tired all the time. but after one session my colleagues kept asking what I'd done differently?? like actual unprompted compliments. definitely booking again",
                name: "Rachel P.",
                age: "33",
              },
              {
                quote: "I'll be honest, £100 felt like a lot when I first saw it. But when I think about the amount I've spent on products that did absolutely nothing, this is actually worth every penny. My skin looks fresh and healthy, I don't need as much makeup now, and I just feel like myself again.",
                name: "Claire H.",
                age: "44",
              },
              {
                quote: "The peach fuzz thing was honestly my biggest insecurity, I could see it in photos catching the light and it drove me mad. After the treatment it was just... gone. My skin felt so smooth and the glow lasted weeks. Rhia made the whole experience so comfortable too she talked me through everything.",
                name: "Jade W.",
                age: "37",
              },
              {
                quote: "I'm someone who researches everything before I commit, read every review, watched every video, the lot. Finally booked it and I'm actually annoyed at myself for waiting so long. The treatment itself was relaxing and my skin has never looked this good. Even my sister noticed and she never notices anything.",
                name: "Priya T.",
                age: "40",
              },
              {
                quote: "Look, I won't lie, I was terrified. The word scalpel doesn't exactly fill you with confidence does it? But Rhia was so gentle and explained every step. Zero pain. My skin felt like silk afterwards and my makeup actually glides on now instead of sitting on top of my face. Game changer for me.",
                name: "Natalie D.",
                age: "51",
              },
              {
                quote: "I really can't believe I waited this long to have a treatment like this. I used to wake up, look in the mirror, and just sigh at how dull and tired my skin looked even after 8 hours of sleep. Now I actually look forward to catching my reflection. Sounds silly but it's made such a difference to how I feel.",
                name: "Amy R.",
                age: "39",
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-teal-200 hover:border-teal-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-black/70 leading-relaxed mb-4 italic">"{story.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {story.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-black">{story.name}</p>
                    <p className="text-xs text-black/40">Age {story.age}, Southampton</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="#booking-form" onClick={scrollToForm}
              className="bg-teal-600 text-white px-10 py-4 rounded font-semibold hover:bg-teal-700 transition-all duration-300 uppercase text-sm tracking-wider shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-2">
              Book Your Treatment <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 8. FAQ                                       */}
      {/* ============================================ */}
      <section id="faqs" className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-600 text-sm font-semibold uppercase tracking-wider mb-6">
              FAQ
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-black">
              Common Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="bg-gradient-to-br from-teal-50 to-white border border-teal-200 rounded-2xl overflow-hidden hover:border-teal-400 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-teal-50/50 transition-colors"
                >
                  <span className="text-sm sm:text-base text-black pr-6 font-medium">{faq.question}</span>
                  <motion.div animate={{ rotate: openFaq === index ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? 'auto' : 0, opacity: openFaq === index ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-sm sm:text-base text-black/60 leading-relaxed border-t border-teal-100 pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 9. FINAL CTA                                 */}
      {/* ============================================ */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500/20 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white leading-tight">
              Ready to See What Your Skin<br />Can Actually Look Like?
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Stop spending money on products that don't work. One treatment, two hours, and you'll finally have the glow you've been chasing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a href="#booking-form" onClick={scrollToForm}
                className="bg-teal-600 text-white px-10 py-4 rounded font-semibold hover:bg-teal-700 transition-all duration-300 uppercase text-sm tracking-wider shadow-lg hover:shadow-xl hover:scale-105">
                Book Your Treatment - £100
              </a>
            </div>

            <p className="text-sm text-white/40 font-light pt-2">
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
                <a href="https://www.instagram.com/rhi.aesthetics?igsh=MWhvMjFqb3Zscms0aw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="https://www.facebook.com/profile.php?id=61575636000105" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
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
