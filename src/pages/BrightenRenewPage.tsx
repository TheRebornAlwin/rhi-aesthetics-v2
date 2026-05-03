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
  ArrowRight,
} from 'lucide-react';

// Image optimization via wsrv.nl free proxy: resize + WebP + compress on the fly.
// Cuts ~3MB raw uploads down to ~150KB. Cached at the edge after first hit.
const optimize = (url: string, w: number = 1200, q: number = 75) =>
  `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=${w}&q=${q}&output=webp`;

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
      metaDescription.setAttribute('content', 'Professional dermaplaning + chemical peel in Southampton. 2-hour treatment for smooth, glowing skin. No needles, no downtime. £99. Book your Brighten & Renew Facial.');
    }
    // Preload ALL images — critical ones as preload, rest as prefetch
    const criticalImages = [
      optimize("https://820i9wpaqi.ufs.sh/f/PwwcUidplansNiudZDCt2LsXhzqFT1ZQEalcB93Jpfx8wViI", 200),
      optimize("https://820i9wpaqi.ufs.sh/f/PwwcUidplans7EEIyR8MLZ8BjbFlapw42zWhdu7D1XryRQIt", 1400),
      optimize("https://820i9wpaqi.ufs.sh/f/PwwcUidplansrqBKEAggJMAWrzNy61nv7tqUuYLkCVcsZQHl", 1200),
    ];
    const nearFoldImages = [
      optimize("https://820i9wpaqi.ufs.sh/f/PwwcUidplansns1UjHeeKuJpWcTySUNLz4R0I8Vw7fZ1G2kg", 800),
      optimize("https://820i9wpaqi.ufs.sh/f/PwwcUidplansP4cxa3plansMeUbGIOLF6SBXiAE1CKD5xpJ0", 800),
      optimize("https://820i9wpaqi.ufs.sh/f/PwwcUidplansc6PzZqa4JTIOjNmkbGi5ScPRl97M4udQahKw", 800),
      optimize("https://820i9wpaqi.ufs.sh/f/PwwcUidplansnsiyxoeeKuJpWcTySUNLz4R0I8Vw7fZ1G2kg", 1000),
    ];
    const belowFoldImages = [
      optimize("https://820i9wpaqi.ufs.sh/f/PwwcUidplanspzVaye9qI1imrJsTxKlZHRz3Vt25Gv4aoPnL", 1000),
      optimize("https://820i9wpaqi.ufs.sh/f/PwwcUidplansLPRBz4cEpuNyB4c5UP1OD9z8GXJlTsjiKSLw", 1000),
      optimize("https://820i9wpaqi.ufs.sh/f/PwwcUidplansK3jNgyuVC1H7mIjaGYs4kS2vQxiO3zoXpD6c", 1000),
      optimize("https://820i9wpaqi.ufs.sh/f/PwwcUidplans4bUt6KSZlV9LZ7rOzhpUH0MiuGACRPD3jNeQ", 1000),
      optimize("https://820i9wpaqi.ufs.sh/f/PwwcUidplansMTwjx4fF60kipOZwxPDGShftogB23RYsQ9cU", 1000),
      optimize("https://820i9wpaqi.ufs.sh/f/PwwcUidplansM9s6ssfF60kipOZwxPDGShftogB23RYsQ9cU", 1000),
    ];
    // Preload critical (above fold) — highest priority
    criticalImages.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
    // Preload near-fold images — high priority, start fetching immediately
    nearFoldImages.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
    // Prefetch below-fold images — low priority background fetch
    belowFoldImages.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });

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
    { question: "Is £99 worth it?", answer: "Think about how much you've spent on serums, creams, and facials that didn't last. This gives you 2-4 weeks of smooth, glowing skin and flawless makeup application. Most clients say they wish they'd stopped buying products and started here." },
    { question: "What if I have sensitive skin?", answer: "I customise the chemical peel strength to your skin type. During the treatment, I'll check in with you and adjust accordingly. Just let me know about any sensitivities beforehand." },
    { question: "Can I wear makeup afterwards?", answer: "I recommend waiting 24 hours before applying makeup to let your fresh skin breathe. After that, you'll notice your makeup applies better than it ever has. That's usually the moment clients message me saying they can't believe the difference." },
    { question: "What's actually in the chemical peel?", answer: "Most are a combination of glycolic and lactic acid at a percentage I match to your skin type. They're professional-grade, far higher concentration than anything legally sold for home use, but applied carefully so they work without burning or visibly peeling you. If your skin is on the more sensitive side, I'll start lower and we'll build the strength up over future sessions." },
    { question: "Can I have this if I'm on retinol or tretinoin?", answer: "You'll need to pause your retinol or tretinoin for 5-7 days before your treatment, otherwise your skin will be too reactive. I'll send a full prep checklist when you book so there are no surprises on the day." },
    { question: "What if I have rosacea, melasma, or active acne?", answer: "Mention it when you book. For active acne we usually wait until it's calmed down. For melasma the treatment can actually help. We use a brightening peel. For mild rosacea I go gentle. Anything more serious and I'll be honest with you about whether it's the right fit. I won't sell you something that isn't." },
    { question: "What's in the aftercare kit I'm taking home?", answer: "A travel-size SPF50 (essential for the next 7 days), a hydrating serum to support your skin while it recovers, and a printed aftercare card. The kit on its own retails around £25. It's included so you're not running to Boots the next day wondering if your normal skincare is okay to use yet." },
    { question: "How is this different from a normal spa facial?", answer: "A spa facial is mostly cleansing, exfoliation, and massage. It's relaxing, but the results fade in 1-2 days. This treatment uses a medical-grade blade and a professional peel together, which gives you a level of resurfacing that lasts 2-4 weeks and that you can actually see in the mirror, not just feel for an afternoon." },
    { question: "What about those at-home dermaplaning kits I see on TikTok?", answer: "They use a much smaller, blunter blade designed not to cut you. But that also means they barely remove anything. The medical-grade tool I use is in a different league. If at-home kits worked, I wouldn't be doing this for a living." },
    { question: "Will my face be red when I leave? I have to pick the kids up.", answer: "You'll have a slight pink flush for about 30-60 minutes, like you've been on a brisk walk in the cold. By the time you're back in the car it's usually gone. Most clients head straight to the school run, work, or out for dinner without anyone noticing anything except the glow." },
    { question: "How many of these treatments have you actually done?", answer: "Hundreds. Brighten & Renew is one of my most-booked services and I do these multiple times every week. By the time you're on my chair, your skin is in genuinely practiced hands, not someone learning on you." },
  ];

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
                <img src={optimize("https://820i9wpaqi.ufs.sh/f/PwwcUidplansNiudZDCt2LsXhzqFT1ZQEalcB93Jpfx8wViI", 200)} alt="RHI Aesthetics" className="w-full h-full object-contain" loading="eager" fetchPriority="high" />
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
      {/* 1. HERO — Split Layout                       */}
      {/* ============================================ */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Mobile: image as background with overlay */}
        <div className="lg:hidden absolute inset-0 z-0">
          <img
            src={optimize("https://820i9wpaqi.ufs.sh/f/PwwcUidplans7EEIyR8MLZ8BjbFlapw42zWhdu7D1XryRQIt", 900)}
            alt="Glowing, radiant skin"
            className="w-full h-full object-cover object-[70%_center]"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/80"></div>
        </div>

        {/* Desktop: split layout */}
        <div className="relative z-10 max-w-7xl mx-auto min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-0 w-full items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
              className="px-6 sm:px-10 lg:px-16 py-28 sm:py-32 lg:py-20 text-center lg:text-left space-y-6 sm:space-y-8"
            >
              <span className="inline-block px-4 py-2 bg-white/10 lg:bg-teal-500/10 backdrop-blur-sm border border-white/20 lg:border-teal-500/20 rounded-full text-white/90 lg:text-teal-600 text-xs sm:text-sm font-medium uppercase tracking-wider">
                Brighten & Renew Facial
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-serif font-normal text-white lg:text-black leading-tight">
                <span className="lg:hidden">Smooth, Glowing Skin<br />in One Treatment</span>
                <span className="hidden lg:inline">When Nothing You've Tried Has Actually Worked</span>
              </h1>

              <div className="w-16 sm:w-20 h-px bg-teal-400 lg:bg-teal-500 mx-auto lg:mx-0"></div>

              <p className="text-sm sm:text-lg lg:text-xl text-white/80 lg:text-black/60 max-w-xl leading-relaxed font-light">
                Professional dermaplaning + chemical peel removes the dead layer your products can't reach, smooths texture, and gives you the glow you've been spending hundreds trying to get.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-2 text-white/70 lg:text-black/50">
                {[
                  { icon: Clock, text: "2-Hour Treatment" },
                  { icon: Sparkles, text: "Immediate Results" },
                  { icon: Shield, text: "Zero Downtime" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <item.icon className="w-4 h-4 text-teal-400 lg:text-teal-600" />
                    <span className="text-sm font-light">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <a
                  href="#booking-form"
                  onClick={scrollToForm}
                  className="bg-teal-600 text-white px-10 py-4 rounded font-semibold hover:bg-teal-700 transition-all duration-300 uppercase text-sm tracking-wider shadow-lg hover:shadow-xl hover:scale-105 block sm:inline-block text-center w-full sm:w-auto"
                >
                  Book Your Treatment
                </a>
              </div>
            </motion.div>

            {/* Right: Hero image — desktop only */}
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
              className="hidden lg:flex items-center justify-center py-28 pr-10"
            >
              <img
                src={optimize("https://820i9wpaqi.ufs.sh/f/PwwcUidplans7EEIyR8MLZ8BjbFlapw42zWhdu7D1XryRQIt", 1400)}
                alt="Glowing, radiant skin after Brighten & Renew treatment"
                className="w-full max-h-[75vh] object-cover object-center rounded-2xl shadow-2xl"
                loading="eager"
                fetchPriority="high"
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <ChevronDown className="w-6 h-6 text-white/40 lg:text-black/30" />
        </motion.div>
      </section>

      {/* ============================================ */}
      {/* 2. EMPATHY SECTION — "I Get It"              */}
      {/* ============================================ */}
      <section className="relative bg-white overflow-hidden py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-[350px] sm:h-[500px] lg:h-[700px]">
              <img
                src={optimize("https://820i9wpaqi.ufs.sh/f/PwwcUidplansrqBKEAggJMAWrzNy61nv7tqUuYLkCVcsZQHl", 1200)}
                alt="Rhia - Aesthetic Practitioner"
                className="w-full h-full object-cover object-top"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
            </div>

            <div className="flex items-center px-6 sm:px-12 lg:px-16 py-12 sm:py-20 lg:py-24 bg-gradient-to-br from-teal-50/40 to-white">
              <div className="max-w-xl mx-auto text-center lg:text-left">
                <span className="inline-block px-4 py-2 bg-white border border-teal-200 rounded-full text-teal-600 text-sm font-semibold uppercase tracking-wider mb-8">
                  Sound Familiar?
                </span>

                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light text-black mb-8 leading-tight">
                  Tired of products that{' '}
                  <span className="font-normal italic">promise everything and do nothing?</span>
                </h2>

                <div className="w-16 h-px bg-teal-500 mb-8 mx-auto lg:mx-0"></div>

                <div className="space-y-6 text-base sm:text-lg text-black/70 leading-relaxed mb-10">
                  <p>
                    You've tried The Ordinary, Drunk Elephant, and those £60 Sephora serums. You've watched every skincare routine on Instagram, done the multi-step routines, the retinol, the vitamin C, and everything else there is to be tried, and still your foundation looks cakey by 3pm, your skin looks tired even when you're not, and nobody notices.
                  </p>
                  <p className="text-teal-700 font-medium">
                    The problem isn't your products. It's that you have a layer of dead skin blocking everything from working, and this treatment removes it.
                  </p>
                </div>

                <a
                  href="#booking-form"
                  onClick={scrollToForm}
                  className="bg-teal-600 text-white px-10 py-4 rounded font-semibold hover:bg-teal-700 transition-all duration-300 uppercase text-sm tracking-wider shadow-lg hover:shadow-xl hover:scale-105 mx-auto lg:mx-0 inline-block"
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
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-black mb-6">
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
                image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansns1UjHeeKuJpWcTySUNLz4R0I8Vw7fZ1G2kg",
              },
              {
                icon: Droplet,
                title: "Chemical Peel",
                description: "With the dead layer gone, a customised peel penetrates deeper than it ever could on its own. You might feel a mild tingle. This is what gives you the lasting radiance that keeps developing over the next few days.",
                number: "02",
                image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansP4cxa3plansMeUbGIOLF6SBXiAE1CKD5xpJ0",
              },
              {
                icon: Layers,
                title: "Instant Glow",
                description: "You walk out with visibly smoother texture, a natural glow, and skin that your makeup will actually sit on properly. Most clients just head back to work and carry on with their day like normal.",
                number: "03",
                image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansc6PzZqa4JTIOjNmkbGi5ScPRl97M4udQahKw",
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative bg-gradient-to-br from-teal-50 to-white p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-teal-200 hover:border-teal-500/50 transition-all duration-500 overflow-hidden text-center hover:shadow-xl"
              >
                <div className="absolute top-4 left-1/2 -translate-x-1/2 sm:left-4 sm:translate-x-0 w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 z-10">
                  <span className="text-2xl sm:text-3xl font-black text-white">{step.number}</span>
                </div>

                <div className="relative z-10 space-y-4 sm:space-y-6 pt-16 sm:pt-20">
                  <div className="aspect-video rounded-2xl overflow-hidden border-2 border-teal-200">
                    <img src={optimize(step.image, 800)} alt={step.title} className="w-full h-full object-cover" loading="eager" decoding="async" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-black">{step.title}</h3>
                  <p className="text-sm sm:text-base text-black/70 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================ */}
      {/* 3.5 MEET RHIA — Authority / Credentials      */}
      {/* ============================================ */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-teal-50/30 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-teal-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-100/30 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="inline-block px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-600 text-sm font-semibold uppercase tracking-wider mb-6">
            Meet Your Practitioner
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-black mb-4">
            Hi, I'm Rhia
          </h2>
          <p className="text-base sm:text-lg text-teal-700 font-medium mb-6">
            Fully qualified, fully insured aesthetic practitioner
          </p>
          <div className="w-16 h-px bg-teal-500 mx-auto mb-10"></div>

          <div className="space-y-5 text-base sm:text-lg text-black/70 leading-relaxed font-light max-w-3xl mx-auto mb-12 text-left lg:text-center">
            <p>
              I trained as an aesthetic practitioner because I was tired of watching women like you spend hundreds on skincare that didn't work, only to walk out of spa facials with results that faded in 24 hours.
            </p>
            <p>
              Brighten & Renew is one of my most-booked treatments. I've performed hundreds of these sessions and refined the technique on every single one, so the woman sitting on my chair next is in genuinely practiced hands, not someone learning on you. Every treatment starts with a proper skin assessment so you get the version that actually fits your skin, not a one-size-fits-all approach.
            </p>
            <p className="text-teal-700 font-medium italic">
              Every Brighten & Renew session I do is the treatment I wished existed when I was throwing money at serums in my 20s.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 sm:gap-12 pt-8 border-t border-teal-200/50 max-w-2xl mx-auto">
            <div>
              <p className="font-serif text-3xl sm:text-5xl text-teal-700 font-light">300<span className="text-2xl sm:text-3xl">+</span></p>
              <p className="text-[10px] sm:text-xs tracking-wider text-black/50 mt-1 uppercase font-medium">Happy Clients</p>
            </div>
            <div className="w-px h-12 sm:h-14 bg-teal-200" />
            <div>
              <p className="font-serif text-3xl sm:text-5xl text-teal-700 font-light">5.0<span className="text-amber-400">★</span></p>
              <p className="text-[10px] sm:text-xs tracking-wider text-black/50 mt-1 uppercase font-medium">Avg Rating</p>
            </div>
            <div className="w-px h-12 sm:h-14 bg-teal-200" />
            <div>
              <p className="font-serif text-3xl sm:text-5xl text-teal-700 font-light">5<span className="text-2xl sm:text-3xl">+</span></p>
              <p className="text-[10px] sm:text-xs tracking-wider text-black/50 mt-1 uppercase font-medium">Years Exp.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 4. PRICE CARD                                */}
      {/* ============================================ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-teal-50/20 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white border-4 border-teal-500 rounded-2xl sm:rounded-3xl p-6 sm:p-12 text-center shadow-xl overflow-hidden">
            <div className="absolute top-0 left-0 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-teal-600/10 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <span className="inline-block px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-600 text-sm font-semibold uppercase tracking-wider mb-6">
                Brighten & Renew Facial
              </span>

              <div className="flex items-baseline justify-center gap-3 mb-4">
                <span className="font-serif text-5xl sm:text-7xl text-teal-700 font-light">£99</span>
              </div>
              <p className="text-lg text-black/60 font-light mb-8">for a full 2-hour treatment</p>

              <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-8 text-left">
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

              <div className="flex items-start gap-3 max-w-lg mx-auto bg-teal-50/70 border border-teal-200 rounded-xl px-5 py-4 mb-8 text-left">
                <Shield className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-black/75 leading-relaxed">
                  <strong className="text-black/90">My promise to you:</strong> if you don't walk out with visibly smoother, brighter skin, your follow-up treatment is on me. No catches.
                </p>
              </div>

              <a
                href="#booking-form"
                onClick={scrollToForm}
                className="bg-teal-600 text-white px-10 py-4 rounded font-semibold hover:bg-teal-700 transition-all duration-300 uppercase text-sm tracking-wider shadow-lg hover:shadow-xl hover:scale-105 inline-block"
              >
                Reserve My Spot
              </a>

              <p className="text-xs text-black/40 mt-4 font-light">No payment required to book.</p>
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
              className="bg-gradient-to-br from-teal-50 to-white rounded-2xl sm:rounded-3xl border-2 border-teal-200 p-5 sm:p-10 shadow-xl"
            >
              <h2 className="text-3xl sm:text-4xl font-light text-black mb-2 text-center lg:text-left">Book Your Treatment</h2>
              <p className="text-base text-black/60 font-light mb-8 text-center lg:text-left">
                No payment needed. I'll text you to confirm.
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
                    I'll text you to confirm your appointment. Questions? <a href={waUrl} target="_blank" rel="noopener noreferrer" className="text-teal-600 font-semibold underline underline-offset-2">WhatsApp me</a>.
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
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-2 border-teal-200">
                <img src={optimize("https://820i9wpaqi.ufs.sh/f/PwwcUidplansnsiyxoeeKuJpWcTySUNLz4R0I8Vw7fZ1G2kg", 1000)} alt="Rhia performing Brighten & Renew facial treatment" className="w-full h-full object-cover" loading="eager" decoding="async" />
              </div>

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
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-black mb-4">
              Real Results,{' '}<br className="sm:hidden" />Real Skin
            </h2>
            <p className="text-lg sm:text-xl text-black/60 max-w-2xl mx-auto font-light">
              Every photo is from a real client. No filters, no editing. Just the treatment doing what it does.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-16">
            {[
              { image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplanspzVaye9qI1imrJsTxKlZHRz3Vt25Gv4aoPnL", label: "Dull Skin to Glowing Radiance" },
              { image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansLPRBz4cEpuNyB4c5UP1OD9z8GXJlTsjiKSLw", label: "Cakey Makeup vs Smooth Application" },
              { image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansK3jNgyuVC1H7mIjaGYs4kS2vQxiO3zoXpD6c", label: "Peach Fuzz Removal" },
              { image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplans4bUt6KSZlV9LZ7rOzhpUH0MiuGACRPD3jNeQ", label: "Rough Texture to Silky Smooth" },
              { image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansMTwjx4fF60kipOZwxPDGShftogB23RYsQ9cU", label: "Tired Complexion to Vibrant Glow" },
              { image: "https://820i9wpaqi.ufs.sh/f/PwwcUidplansM9s6ssfF60kipOZwxPDGShftogB23RYsQ9cU", label: "Pore Refinement" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative flex flex-col"
              >
                <div className="aspect-[16/9] rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <img src={optimize(item.image, 1000)} alt={item.label} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                </div>
                <p className="text-sm text-black/60 font-medium text-center mt-3">{item.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: Star, text: "5.0★ Average Rating" },
              { icon: Award, text: "300+ Treatments Performed" },
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
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-black mb-4">
              What My{' '}<br className="sm:hidden" />Clients Say
            </h2>
            <p className="text-lg sm:text-xl text-black/60 max-w-2xl mx-auto font-light">
              Real feedback from real women in Southampton
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                quote: "My husband is the most oblivious man on earth. 10 years of marriage and he's never noticed a haircut, never mind anything else. He noticed THIS. Said 'have you done something?' which coming from him is basically a marriage proposal. I've spent thousands on serums over the years that did absolutely nothing. Honestly haven't stopped going on about it since.",
                name: "Sarah M.",
                age: "42",
              },
              {
                quote: "i was meant to come in last month and bottled it because of the scalpel thing. nearly bottled it again the day of lol. but rhia is so chill, she literally walks you through every single step. its not even sharp on your face it just glides. results were mad, my best mate thought id had botox 😂",
                name: "Emma L.",
                age: "35",
              },
              {
                quote: "I have spent thousands on skincare over the years. The Ordinary, Drunk Elephant, Dr Dennis Gross, embarrassing Sephora hauls. None of it gave me what one session here did. My foundation actually sits properly now instead of clinging to dry patches across my forehead. Should've come here years ago instead of giving Sephora my pension.",
                name: "Lisa K.",
                age: "48",
              },
              {
                quote: "ok so I was the biggest skeptic, I'd basically given up on my skin doing anything other than looking tired all the time. but after one session my colleagues kept asking what I'd done differently?? like actual unprompted compliments. definitely booking again",
                name: "Rachel P.",
                age: "33",
              },
              {
                quote: "99 quid felt steep when I first saw it, I'll be honest. Then I worked out I'd spent £180 just last month on creams that did literally nothing. So. Did it. Worth every penny x",
                name: "Claire H.",
                age: "44",
              },
              {
                quote: "I've cried in front of the mirror about my skin more times than I'd care to admit. specifically the peach fuzz, you could see it in every photo and it made me feel like people were staring at it. After the treatment it was just gone. cried then too but for different reasons lol. sorry for the essay this just genuinely meant a lot to me",
                name: "Jade W.",
                age: "37",
              },
              {
                quote: "For anyone debating, I read about 47 reviews before booking. Asked 3 friends. Watched dermaplaning content for actual hours. Eventually booked anyway. Treatment itself was relaxing, much less intense than I'd built it up to be. Skin is genuinely glowing 9 days later. The peel customisation matters too, my skin runs reactive and Rhia adjusted accordingly. Will book again, no question.",
                name: "Priya T.",
                age: "40",
              },
              {
                quote: "Was terrified beforehand, won't lie. The word 'scalpel' doesn't exactly inspire confidence at 51. My daughter actually came with me and waited because I was that anxious. Didn't need her there in the end, it feels like a soft brush more than anything. Skin felt like silk after and my makeup actually goes on properly now. Booked her in for one too.",
                name: "Natalie D.",
                age: "51",
              },
              {
                quote: "genuinely cant believe i waited this long. used to wake up looking tired even after 8 hours sleep, now i actually look fresh in the morning?? sounds dramatic but its been a real confidence boost. cant recommend enough",
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
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-black">
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
      <section className="relative py-16 sm:py-32 overflow-hidden">
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
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-white leading-tight">
              Ready to See What Your Skin Can Actually Look Like?
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Stop spending money on products that don't work. One treatment, two hours, and you'll finally have the glow you've been chasing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a href="#booking-form" onClick={scrollToForm}
                className="bg-teal-600 text-white px-10 py-4 rounded font-semibold hover:bg-teal-700 transition-all duration-300 uppercase text-sm tracking-wider shadow-lg hover:shadow-xl hover:scale-105">
                Book Your Treatment
              </a>
            </div>

            <p className="text-sm text-white/40 font-light pt-2">
              No payment required. I'll text you to confirm your appointment.
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
                <img src={optimize("https://820i9wpaqi.ufs.sh/f/PwwcUidplansrKuIikggJMAWrzNy61nv7tqUuYLkCVcsZQHl", 200)} alt="RHI Aesthetics" className="w-full h-full object-contain opacity-80" loading="lazy" />
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
