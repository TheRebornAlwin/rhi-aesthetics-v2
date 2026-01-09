import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Calendar,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  XCircle,
  Shield,
  Award,
  Heart,
  ChevronDown,
  MessageCircle,
  Instagram,
  Facebook,
  Zap,
  Users,
  Clock,
  Sparkles,
  ArrowRight,
  Star
} from 'lucide-react';

function SkinLesionRemovalPage() {
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]);

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

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Placeholder before/after images
  const beforeAfterImages = [
    { before: "https://placehold.co/600x800/e0f2f1/00897b?text=Before+1", after: "https://placehold.co/600x800/b2dfdb/00695c?text=After+1", label: "Facial Mole - 3 Weeks" },
    { before: "https://placehold.co/600x800/e0f2f1/00897b?text=Before+2", after: "https://placehold.co/600x800/b2dfdb/00695c?text=After+2", label: "Neck Skin Tag - 2 Weeks" },
    { before: "https://placehold.co/600x800/e0f2f1/00897b?text=Before+3", after: "https://placehold.co/600x800/b2dfdb/00695c?text=After+3", label: "Hand Age Spot - 4 Weeks" },
    { before: "https://placehold.co/600x800/e0f2f1/00897b?text=Before+4", after: "https://placehold.co/600x800/b2dfdb/00695c?text=After+4", label: "Cheek Mole - 3 Weeks" },
    { before: "https://placehold.co/600x800/e0f2f1/00897b?text=Before+5", after: "https://placehold.co/600x800/b2dfdb/00695c?text=After+5", label: "Wart Removal - 2 Weeks" },
    { before: "https://placehold.co/600x800/e0f2f1/00897b?text=Before+6", after: "https://placehold.co/600x800/b2dfdb/00695c?text=After+6", label: "Multiple Skin Tags - 3 Weeks" },
    { before: "https://placehold.co/600x800/e0f2f1/00897b?text=Before+7", after: "https://placehold.co/600x800/b2dfdb/00695c?text=After+7", label: "Facial Lesion - 4 Weeks" },
    { before: "https://placehold.co/600x800/e0f2f1/00897b?text=Before+8", after: "https://placehold.co/600x800/b2dfdb/00695c?text=After+8", label: "Neck Mole - 3 Weeks" },
    { before: "https://placehold.co/600x800/e0f2f1/00897b?text=Before+9", after: "https://placehold.co/600x800/b2dfdb/00695c?text=After+9", label: "Cherry Angioma - 2 Weeks" },
    { before: "https://placehold.co/600x800/e0f2f1/00897b?text=Before+10", after: "https://placehold.co/600x800/b2dfdb/00695c?text=After+10", label: "Age Spots - 4 Weeks" },
    { before: "https://placehold.co/600x800/e0f2f1/00897b?text=Before+11", after: "https://placehold.co/600x800/b2dfdb/00695c?text=After+11", label: "Milia Removal - 2 Weeks" },
    { before: "https://placehold.co/600x800/e0f2f1/00897b?text=Before+12", after: "https://placehold.co/600x800/b2dfdb/00695c?text=After+12", label: "Seborrheic Keratosis - 3 Weeks" }
  ];

  const testimonials = [
    {
      quote: "I've had this mole on my cheek for years and honestly, I was terrified. Terrified it would hurt, terrified of scarring, terrified of what people would think. Rhia sat with me and explained everything so patiently - she genuinely understood why I was nervous. The treatment itself? I felt barely anything. Two weeks later and it's like it was never there. I actually cried when I looked in the mirror because I finally felt like me again.",
      name: "Sarah L.",
      treatment: "Facial Mole Removal",
      location: "Southampton"
    },
    {
      quote: "I'd been to the NHS and they told me it was purely cosmetic so they couldn't help. That hurt more than I expected because this wasn't just cosmetic to me - it was affecting my confidence every single day. Finding Rhia felt like finally being heard. The £49 intro offer let me just try it without the huge financial commitment I was dreading. Best £49 I've ever spent, honestly.",
      name: "Michelle R.",
      treatment: "Neck Skin Tags",
      location: "Southampton"
    },
    {
      quote: "I work in retail and interact with customers all day. I swear, people would stare at the mole on my forehead instead of looking me in the eye when we'd talk. It sounds dramatic but it was crushing my confidence. Rhia removed it in literally 20 minutes, and the healing was so much quicker than I expected. Three weeks later and you can't even tell it was there. I feel like a completely different person at work now.",
      name: "Emma T.",
      treatment: "Forehead Mole",
      location: "Southampton"
    },
    {
      quote: "My main worry was scarring. I've heard horror stories from friends who had things removed and were left with marks worse than the original mole. Rhia showed me her technique and all her before/after photos - I could see how careful she is about minimizing scarring. She was right - the tiny mark faded completely within a month. You'd never know there was anything there.",
      name: "Charlotte B.",
      treatment: "Facial Lesion",
      location: "Southampton"
    },
    {
      quote: "I thought it would cost hundreds. I'd been putting it off for that reason alone, even though seeing that skin tag in the mirror every morning was doing my head in. When I saw the £49 offer I thought there must be a catch, but there wasn't. It's exactly what they advertised - professional, quick, affordable. I've already recommended Rhia to three friends.",
      name: "Jessica M.",
      treatment: "Multiple Skin Tags",
      location: "Southampton"
    },
    {
      quote: "The thing that scared me most was not knowing if it could even be removed. I'd convinced myself mine was too big, too raised, too whatever. Rhia examined it at the consultation and immediately put my mind at ease - she's removed hundreds exactly like mine. Knowing it was possible made the decision so much easier. And seeing it actually gone now still feels surreal in the best way.",
      name: "Rebecca S.",
      treatment: "Raised Mole",
      location: "Southampton"
    },
    {
      quote: "I used to angle myself in every photo so the mole wouldn't show. Family pictures, work events, everything. My daughter even asked me once why I always turned my head the same way. That broke my heart. Getting it removed was one of the best decisions I've made - not just for me, but for finally being fully present in photos with my family.",
      name: "Karen H.",
      treatment: "Cheek Mole",
      location: "Southampton"
    },
    {
      quote: "I work in healthcare so I take a bit of time off after procedures - I was worried about the downtime. Rhia was totally upfront about what to expect. Day 1 and 2 had a tiny scab, by day 5 it was barely noticeable. I was back at work day 3 wearing light makeup. So much easier than I'd built it up to be in my head.",
      name: "Amanda P.",
      treatment: "Facial Wart",
      location: "Southampton"
    },
    {
      quote: "Honestly, the pain was my biggest fear. I have a pretty low pain threshold and I'd been putting this off for years because of it. Rhia completely numbed the area - I genuinely felt nothing during the treatment. Nothing at all. I almost laughed because I'd worked myself up so much for literally no reason. If you're scared like I was, just book the consultation. You'll see it's really not scary at all.",
      name: "Sophie K.",
      treatment: "Mole Removal",
      location: "Southampton"
    }
  ];

  const faqs = [
    {
      question: "Does it hurt?",
      answer: "I'll be completely honest with you - the removal itself doesn't hurt at all because I numb the area thoroughly beforehand. You'll feel the initial numbing injection, which is a tiny pinch that lasts maybe two seconds, and then nothing. Most of my clients say they barely feel anything during the actual removal. Some people describe a slight pressure sensation, but that's about it. The healing afterwards might feel a bit tender, like you've got a small scratch, but nothing that stops you getting on with your day."
    },
    {
      question: "Will it scar?",
      answer: "This is probably the question I get asked the most, and I completely understand why - nobody wants to swap one mark for another. The truth is, any time skin is treated there's a possibility of a mark, but with the right technique and aftercare, scarring is minimal. I use methods specifically designed to minimize scarring, and I'll give you clear aftercare instructions to help your skin heal beautifully. Most of my clients find that any tiny mark fades completely within 4-8 weeks, and you'd never know anything was there. I'll always be honest with you about what to expect based on your specific situation."
    },
    {
      question: "How much does it cost?",
      answer: "I know cost is a big factor - you've probably seen clinics charging £300, £500, even more for mole removal. I wanted to make this accessible because I know how much these things affect people's confidence. My intro offer is £49 for removing 1-2 small lesions - that lets you see my work, experience the process, and decide if you want to do more. If you have 3-4 lesions, it's £99. For 5-6, it's £149. The consultation is always completely free with no obligation - I want you to feel comfortable and informed before making any decisions."
    },
    {
      question: "What if it's cancerous or dangerous?",
      answer: "This is so important and I'm glad you're asking. During your free consultation, I examine everything carefully. If I have any concerns about a mole or lesion looking unusual, I won't remove it - instead, I'll refer you to get it properly checked by a dermatologist. Your safety is absolutely the priority. For anything that looks concerning, you need proper medical assessment, not cosmetic removal. I'd rather send you away for tests than take any risks with your health."
    },
    {
      question: "How long does healing take?",
      answer: "Most people see the bulk of healing within 5-7 days. Here's what typically happens: Day 1-2, you'll have a small scab where the lesion was removed - it might look a bit red or pink around it. Days 3-5, the scab starts to naturally fall off (don't pick it, I know it's tempting!). By day 7, you're usually left with new pink skin underneath. Over the next few weeks, that pink fades to match your normal skin tone. Everyone heals at slightly different speeds, but that's the general timeline most people experience."
    },
    {
      question: "Can I wear makeup after?",
      answer: "Give it about 5-7 days before putting makeup directly on the treated area - you want to let that initial healing happen without anything clogging the skin. You can absolutely wear makeup around the area from day 1 if you need to, just avoid the actual spot. Once the scab has fallen off naturally and you've got that new pink skin, you can gently cover it with mineral makeup if you want to. I'll give you specific aftercare instructions based on where your lesion is and how your skin typically heals."
    },
    {
      question: "Will it come back?",
      answer: "When we remove a mole or lesion, we remove it completely - we're taking away the cells that created it, so that specific one won't grow back. However, it's worth knowing that if you're someone who tends to develop moles or skin tags, you might develop new ones in different areas over time. That's just how your skin works. But the one I remove? That's gone for good."
    },
    {
      question: "Do you check if it's safe to remove?",
      answer: "Absolutely, always. At your consultation, I examine every mole or lesion you want removed. I'm looking at the color, shape, borders, size - all the things that tell me if something looks normal or if it needs medical assessment instead. If anything looks even slightly concerning, I'll refer you to get it properly checked before we consider removal. I've had years of training in recognizing when something needs medical attention rather than cosmetic treatment, and I take that responsibility seriously."
    },
    {
      question: "What if the NHS rejected me?",
      answer: "I hear this so often and I know how frustrating it is. The NHS has to prioritize medical need, so they can't offer removal for things that are cosmetic. But just because something isn't medically necessary doesn't mean it's not affecting your quality of life and confidence. That's exactly why I offer this service - because I believe you shouldn't have to just live with something that makes you self-conscious every single day. Your feelings about it are valid, even if the NHS can't help."
    },
    {
      question: "Is it painful to remove skin tags?",
      answer: "Skin tags are actually one of the quickest and easiest things to remove. They're so superficial that the numbing is usually the only thing you feel, and even that's minimal. The actual removal takes seconds - literally. Because they're just little bits of skin with a narrow base, they come off really easily. You'll have a tiny mark where it was for a few days, but skin tags are honestly one of the most straightforward removals I do."
    },
    {
      question: "Will there be a mark where the mole was?",
      answer: "Right after removal, yes - you'll see a small scab or mark where the mole was. That's totally normal and expected. Over the next few weeks, as your skin heals, that mark fades. For most people, once fully healed (usually 4-8 weeks), you're left with either a very faint mark that matches your skin tone, or nothing visible at all. The size and depth of the original mole affects this - a larger, raised mole might leave a slightly more visible mark initially, but it still fades significantly with time. I'll always give you realistic expectations based on your specific situation."
    },
    {
      question: "How long does the procedure take?",
      answer: "The actual removal is quick - usually between 15-30 minutes depending on how many lesions you're having removed and where they are. One small mole? We're talking 15 minutes tops, including numbing time. Multiple areas or larger lesions might take the full 30 minutes. It's honestly much faster than most people expect. You could literally pop in during a lunch break."
    },
    {
      question: "Do I need time off work?",
      answer: "Most people don't need any time off work at all. You'll have a small scab or mark, but unless you're having something removed in a really prominent position and you work somewhere with very strict appearance policies, you can go straight back to work. Some people prefer to book Friday appointments so they have the weekend for initial healing, but it's not necessary. If you're worried about it being visible, you can wear makeup around the area (just not directly on it) from day one."
    },
    {
      question: "What if I have multiple moles I want removed?",
      answer: "We can absolutely remove multiple moles in one session - I do this regularly. The £49 offer covers 1-2 small lesions, but if you've got more than that, we can discuss a package. Removing several in one go is often more cost-effective and means you only have to go through the healing process once. During your consultation, we'll look at everything you want addressed and I'll give you honest advice about what makes sense to do in one session versus spacing things out."
    },
    {
      question: "Can you remove moles on my face?",
      answer: "Yes, facial moles are actually what I remove most often. I'm extra careful with facial work because I know how important it is to you that it heals beautifully. The technique I use is specifically chosen to minimize scarring, which is obviously crucial for anywhere visible. I'll show you examples of facial mole removals I've done before so you can see the kind of results to expect. The face actually tends to heal really well because the blood flow is so good in that area."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isHeaderScrolled
            ? 'bg-white shadow-lg py-4'
            : 'bg-white/95 backdrop-blur-sm py-3 lg:py-5 shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center group cursor-pointer">
            <div className="w-10 h-10 sm:w-12 sm:h-12">
              <img
                src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansrKuIikggJMAWrzNy61nv7tqUuYLkCVcsZQHl"
                alt="RHI Aesthetics Logo"
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center justify-center space-x-8 flex-1">
            {['results', 'process', 'pricing', 'faqs'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="relative text-sm font-medium uppercase tracking-wider transition-colors duration-300 group text-gray-700 hover:text-teal-600"
              >
                {section === 'results' ? 'Before & After' : section}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <a
              href="https://wa.me/441234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 p-2 lg:px-4 lg:py-2 rounded-full transition-all duration-300 text-gray-700 hover:bg-teal-50 hover:text-teal-600 hover:scale-105"
            >
              <MessageCircle className="w-5 sm:w-6 h-5 sm:h-6" />
              <span className="hidden lg:inline text-sm font-medium">Message Rhia</span>
            </a>
            <button
              onClick={() => scrollToSection('offer')}
              className="bg-gradient-to-r from-teal-600 to-teal-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-teal-600 transition-all duration-300 uppercase text-xs tracking-wider shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span className="lg:hidden">£49 Offer</span>
              <span className="hidden lg:inline">Claim £49 Intro</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>
        </div>

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-32 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-teal-200 shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-teal-600 mr-2" />
              <span className="text-sm font-semibold text-teal-700">Trusted by 300+ Southampton Residents</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Stop Hiding That Mole.<br />
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Start Living Confidently.
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
              Safe, professional lesion removal in Southampton - no surgery, minimal scarring, and back to your life in days. Get the confidence you deserve without the fear.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 px-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('offer')}
                className="group bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-10 py-5 rounded-xl font-bold hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
              >
                <span className="text-lg">Try It For £49</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('results')}
                className="border-2 border-teal-600 text-teal-700 px-10 py-5 rounded-xl font-bold hover:bg-teal-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span className="text-lg">See Results</span>
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold">5.0 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-teal-600" />
                <span>GDC Registered</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-teal-600" />
                <span>15-Min Treatment</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* £49 Intro Offer - REDESIGNED */}
      <section id="offer" className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyeiIvPjwvZz48L2c+PC9zdmc+')]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Zap className="w-5 h-5 text-yellow-300 mr-2" />
              <span className="text-white font-semibold">Limited Time Intro Offer</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Test It. See It. Love It.<br />
              <span className="text-yellow-300">Only £49</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Not ready to commit? Try our intro offer - remove 1-2 small lesions and see my work for yourself. No pressure, just results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: CheckCircle, title: "Test My Expertise", desc: "See the quality of my work firsthand" },
              { icon: Heart, title: "Zero Commitment", desc: "One treatment, that's it - decide after" },
              { icon: Sparkles, title: "Same Pro Quality", desc: "You get my full expert care, special intro price" },
              { icon: Shield, title: "See Your Healing", desc: "Experience how your skin responds" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <item.icon className="w-12 h-12 text-yellow-300 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/80">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#"
              className="inline-flex items-center px-12 py-6 bg-white text-teal-700 rounded-2xl font-bold hover:bg-gray-50 transition-all duration-300 text-xl shadow-2xl hover:shadow-3xl hover:scale-105 group"
            >
              <Calendar className="w-6 h-6 mr-3" />
              Book My £49 Consultation
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-white/70 mt-4 text-sm">Free consultation included • No obligation</p>
          </div>
        </div>
      </section>

      {/* Why People Avoid Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              I Know Why You've Been Putting This Off
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You're not alone in these fears. Every single client I've worked with had at least one of these worries. Here's the truth about each one.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: XCircle,
                fear: "\"It's going to hurt\"",
                truth: "The numbing injection is a tiny pinch for 2 seconds. After that? You feel nothing. Most clients are shocked at how painless it actually is."
              },
              {
                icon: XCircle,
                fear: "\"I'll be left with a scar\"",
                truth: "With proper technique and aftercare, scarring is minimal. Most clients see the mark fade completely within 4-8 weeks. I show you real before/afters at consultation."
              },
              {
                icon: XCircle,
                fear: "\"It costs too much\"",
                truth: "Other clinics charge £300-500+. My intro offer is £49 for 1-2 small lesions. I want this to be accessible, not a luxury only some can afford."
              },
              {
                icon: XCircle,
                fear: "\"What if it's dangerous to remove?\"",
                truth: "I examine everything at consultation. If anything looks concerning, I refer you for medical assessment first. Your safety always comes before aesthetics."
              },
              {
                icon: XCircle,
                fear: "\"Recovery will be horrible\"",
                truth: "Most people are back to normal activities the same day. You'll have a small scab for 5-7 days, but it's not painful or debilitating."
              },
              {
                icon: XCircle,
                fear: "\"What if it doesn't work?\"",
                truth: "When removed properly, it's gone for good. That specific lesion won't grow back. I've done hundreds of these - the technique works."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border-2 border-teal-100 hover:border-teal-300 transition-all duration-300 hover:shadow-xl"
              >
                <item.icon className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.fear}</h3>
                <p className="text-gray-600 leading-relaxed">{item.truth}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section id="results" className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-teal-700 mr-2" />
              <span className="text-sm font-semibold text-teal-700">Real Results, Real People</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              See It For Yourself
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These aren't stock photos or generic images. Every single one of these is a real person I've treated right here in Southampton. This is what you can expect.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {beforeAfterImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid grid-cols-2 gap-0.5 bg-teal-500">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={item.before}
                      alt={`Before ${item.label}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Before
                    </div>
                  </div>
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={item.after}
                      alt={`After ${item.label}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      After
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-r from-teal-50 to-cyan-50">
                  <p className="text-sm font-semibold text-gray-900 text-center">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('offer')}
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl font-bold hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <span className="text-lg">I Want Results Like These</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="process" className="py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              How It Actually Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple, straightforward, and designed to make you feel comfortable every step of the way.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Free Consultation",
                desc: "We sit down, I examine what you want removed, answer every question you have, and show you exactly what to expect. Zero pressure, zero obligation.",
                icon: MessageCircle
              },
              {
                number: "02",
                title: "Quick Treatment",
                desc: "I numb the area (tiny pinch, 2 seconds), then remove the lesion using advanced techniques designed for minimal scarring. Most treatments take 15-20 minutes total.",
                icon: Zap
              },
              {
                number: "03",
                title: "Easy Healing",
                desc: "You'll have a small scab for about a week. I give you clear aftercare instructions. Most people see complete healing in 4-6 weeks with barely any visible mark.",
                icon: Heart
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="absolute -top-6 left-8 text-8xl font-black text-teal-500/20">
                  {step.number}
                </div>
                <div className="relative z-10">
                  <step.icon className="w-14 h-14 text-teal-400 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Remove */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              What Can I Remove?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              If you've got a mole, skin tag, or lesion that's affecting your confidence, there's a good chance I can help.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Moles", desc: "Flat or raised, facial or body" },
              { name: "Skin Tags", desc: "Neck, underarms, anywhere" },
              { name: "Age Spots", desc: "Face, hands, chest" },
              { name: "Warts", desc: "Common and plantar warts" },
              { name: "Cherry Angiomas", desc: "Red spots on skin" },
              { name: "Seborrheic Keratosis", desc: "Brown, scaly patches" },
              { name: "Milia", desc: "Small white bumps" },
              { name: "Benign Lesions", desc: "Safe, non-cancerous marks" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border-2 border-teal-100 hover:border-teal-400 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8 text-center">
            <Shield className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Safety First, Always</h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              If during the consultation I see anything that looks concerning - unusual color, irregular borders, or anything that needs medical assessment - I'll refer you to get it properly checked before we consider removal. Your health is more important than cosmetic work.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Rhia */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://placehold.co/800x1000/e0f2f1/00897b?text=Rhia+Portrait"
                  alt="Rhia - Aesthetic Practitioner"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <div className="flex items-center space-x-3 mb-2">
                    <Award className="w-6 h-6 text-teal-400" />
                    <span className="text-white font-semibold">GDC Registered</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-teal-400" />
                    <span className="text-white font-semibold">300+ Treatments</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-teal-200 mb-4">
                <Heart className="w-4 h-4 text-teal-600 mr-2" />
                <span className="text-sm font-semibold text-teal-700">About Rhia</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Hi, I'm Rhia - and I totally get why you're nervous.
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  I remember my first client who came in for mole removal. She'd been putting it off for three years because she was terrified of the pain and scarring. She cried when she saw the result - not because it hurt, but because she couldn't believe how simple it actually was after all that worrying.
                </p>
                <p>
                  That's when I realized this isn't just about removing a mole or skin tag. It's about giving people their confidence back. It's about finally feeling comfortable in photos. It's about not having to think about "that thing" every time you look in the mirror.
                </p>
                <p>
                  I'm GDC registered and have completed advanced training in aesthetic procedures, but honestly, the most important part of what I do is making you feel heard and safe. Every fear you have? I've heard it before, and I'll address every single one.
                </p>
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('offer')}
                  className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-bold hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Book Free Consultation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 rounded-full mb-6">
              <Star className="w-4 h-4 text-teal-700 mr-2 fill-teal-700" />
              <span className="text-sm font-semibold text-teal-700">Real Stories From Real People</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Don't Just Take My Word For It
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These are unedited testimonials from people just like you who were nervous, hesitant, and scared - and are now so glad they did it.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border-2 border-teal-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t-2 border-teal-200 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-teal-700 font-semibold">{testimonial.treatment}</p>
                  <p className="text-xs text-gray-500 mt-1">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 sm:py-28 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Honest, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No hidden fees, no surprises. What you see is what you pay - consultation is always free.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Intro Offer",
                price: "£49",
                popular: true,
                features: [
                  "Remove 1-2 small lesions",
                  "Free consultation included",
                  "Full aftercare kit",
                  "Follow-up check included",
                  "Professional assessment",
                  "Same expert technique"
                ]
              },
              {
                name: "Standard",
                price: "£99",
                popular: false,
                features: [
                  "Remove 3-4 lesions",
                  "Free consultation included",
                  "Full aftercare kit",
                  "Follow-up check included",
                  "Professional assessment",
                  "Best for multiple areas"
                ]
              },
              {
                name: "Premium",
                price: "£149",
                popular: false,
                features: [
                  "Remove 5-6 lesions",
                  "Free consultation included",
                  "Full aftercare kit",
                  "Follow-up check included",
                  "Professional assessment",
                  "Maximum value package"
                ]
              }
            ].map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl p-8 ${
                  tier.popular
                    ? 'bg-gradient-to-br from-teal-600 to-cyan-600 text-white shadow-2xl scale-105 border-4 border-yellow-400'
                    : 'bg-white border-2 border-gray-200 hover:border-teal-300'
                } transition-all duration-300 hover:shadow-xl`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-4 ${tier.popular ? 'text-white' : 'text-gray-900'}`}>
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline justify-center">
                    <span className={`text-6xl font-black ${tier.popular ? 'text-white' : 'text-teal-600'}`}>
                      {tier.price}
                    </span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className={`w-6 h-6 flex-shrink-0 ${tier.popular ? 'text-yellow-300' : 'text-teal-600'}`} />
                      <span className={tier.popular ? 'text-white' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => scrollToSection('offer')}
                  className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-white text-teal-700 hover:bg-gray-50 shadow-lg'
                      : 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white hover:from-teal-700 hover:to-cyan-700'
                  }`}
                >
                  Book This Package
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              All packages include free consultation with no obligation • Prices are per session
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Every Question You're Thinking
            </h2>
            <p className="text-xl text-gray-600">
              I've answered thousands of questions over the years. These are the ones I hear most often.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl overflow-hidden border-2 border-teal-100 hover:border-teal-300 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/50 transition-colors"
                >
                  <span className="font-bold text-gray-900 text-lg pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-teal-600 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-teal-900 to-cyan-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              You've Put This Off Long Enough
            </h2>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Every day you wait is another day of hiding, another day of feeling self-conscious, another day of wishing things were different. It doesn't have to be that way anymore.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="group inline-flex items-center justify-center px-12 py-6 bg-white text-teal-700 rounded-2xl font-bold hover:bg-gray-50 transition-all duration-300 text-xl shadow-2xl hover:shadow-3xl"
              >
                <Calendar className="w-6 h-6 mr-3" />
                Book Free Consultation Now
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-8 text-white">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-teal-400" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-teal-400" />
                <span>No Obligation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-teal-400" />
                <span>From £49</span>
              </div>
            </div>

            <p className="text-gray-300 text-sm pt-4 max-w-2xl mx-auto">
              The consultation is completely free. Come in, ask every question you have, see the clinic, meet me, and decide if it feels right for you. No pressure, just honest conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
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
                Safe, professional skin lesion removal in Southampton.
              </p>
              <div className="flex space-x-3 sm:space-x-4 justify-center sm:justify-start">
                <a
                  href="https://www.instagram.com/rhi.aesthetics?igsh=MWhvMjFqb3Zscms0aw%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2.5 sm:p-3 rounded-full hover:bg-teal-600 transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-5 sm:w-6 h-5 sm:h-6" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61575636000105"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2.5 sm:p-3 rounded-full hover:bg-teal-600 transition-all duration-300 hover:scale-110"
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
              <h3 className="font-black text-base sm:text-lg mb-4 sm:mb-6 text-teal-400">Services</h3>
              <ul className="space-y-2 sm:space-y-3 text-white/70 text-sm sm:text-base">
                <li className="flex justify-center sm:justify-start">
                  <Link
                    to="/skin-lesion-removal"
                    className="hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    Skin Lesion Removal
                  </Link>
                </li>
                <li className="flex justify-center sm:justify-start">
                  <Link
                    to="/plasma-fibroblast"
                    className="hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    Plasma Fibroblast
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="font-black text-base sm:text-lg mb-4 sm:mb-6 text-teal-400">Hours</h3>
              <div className="space-y-2 sm:space-y-3 text-white/70 text-sm sm:text-base">
                <p>Mon-Thurs: <span className="text-white font-semibold">11am-8pm</span></p>
                <p>Friday: <span className="text-white font-semibold">10am-3pm</span></p>
                <p>Sat-Sun: <span className="text-white font-semibold">By Appointment</span></p>
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

export default SkinLesionRemovalPage;
