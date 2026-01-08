import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  Sparkles
} from 'lucide-react';

function SkinLesionRemovalPage() {
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  // Placeholder before/after images (will be replaced with real ones)
  const beforeAfterImages = [
    { before: "https://placehold.co/600x800/cccccc/666666?text=Before+1", after: "https://placehold.co/600x800/e8f5e9/4caf50?text=After+1", label: "Facial Mole - 3 Weeks Post-Treatment" },
    { before: "https://placehold.co/600x800/cccccc/666666?text=Before+2", after: "https://placehold.co/600x800/e8f5e9/4caf50?text=After+2", label: "Neck Skin Tag - 2 Weeks Post-Treatment" },
    { before: "https://placehold.co/600x800/cccccc/666666?text=Before+3", after: "https://placehold.co/600x800/e8f5e9/4caf50?text=After+3", label: "Hand Age Spot - 4 Weeks Post-Treatment" },
    { before: "https://placehold.co/600x800/cccccc/666666?text=Before+4", after: "https://placehold.co/600x800/e8f5e9/4caf50?text=After+4", label: "Cheek Mole - 3 Weeks Post-Treatment" },
    { before: "https://placehold.co/600x800/cccccc/666666?text=Before+5", after: "https://placehold.co/600x800/e8f5e9/4caf50?text=After+5", label: "Wart Removal - 2 Weeks Post-Treatment" },
    { before: "https://placehold.co/600x800/cccccc/666666?text=Before+6", after: "https://placehold.co/600x800/e8f5e9/4caf50?text=After+6", label: "Multiple Skin Tags - 3 Weeks Post-Treatment" },
    { before: "https://placehold.co/600x800/cccccc/666666?text=Before+7", after: "https://placehold.co/600x800/e8f5e9/4caf50?text=After+7", label: "Facial Lesion - 4 Weeks Post-Treatment" },
    { before: "https://placehold.co/600x800/cccccc/666666?text=Before+8", after: "https://placehold.co/600x800/e8f5e9/4caf50?text=After+8", label: "Neck Mole - 3 Weeks Post-Treatment" },
    { before: "https://placehold.co/600x800/cccccc/666666?text=Before+9", after: "https://placehold.co/600x800/e8f5e9/4caf50?text=After+9", label: "Cherry Angioma - 2 Weeks Post-Treatment" },
    { before: "https://placehold.co/600x800/cccccc/666666?text=Before+10", after: "https://placehold.co/600x800/e8f5e9/4caf50?text=After+10", label: "Age Spots - 4 Weeks Post-Treatment" },
    { before: "https://placehold.co/600x800/cccccc/666666?text=Before+11", after: "https://placehold.co/600x800/e8f5e9/4caf50?text=After+11", label: "Milia Removal - 2 Weeks Post-Treatment" },
    { before: "https://placehold.co/600x800/cccccc/666666?text=Before+12", after: "https://placehold.co/600x800/e8f5e9/4caf50?text=After+12", label: "Seborrheic Keratosis - 3 Weeks Post-Treatment" }
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
            ? 'bg-white shadow-md py-4'
            : 'bg-white lg:bg-white/95 py-3 lg:py-5 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center group cursor-pointer">
            <div className="w-10 h-10 sm:w-12 sm:h-12">
              <img
                src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansrKuIikggJMAWrzNy61nv7tqUuYLkCVcsZQHl"
                alt="RHI Aesthetics Logo"
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>

          <nav className="hidden lg:flex items-center justify-center space-x-8 flex-1">
            {['before-after', 'how-it-works', 'pricing', 'faqs'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="relative text-sm font-medium uppercase tracking-wider transition-colors duration-300 group text-gray-700 hover:text-amber-600"
              >
                {section.split('-').join(' ')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <a
              href="https://wa.me/441234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 p-2 lg:px-4 lg:py-2 rounded-full transition-all duration-300 text-gray-700 hover:bg-amber-50 hover:scale-110"
            >
              <MessageCircle className="w-5 sm:w-6 h-5 sm:h-6" />
              <span className="hidden lg:inline text-sm font-medium">Message Rhia</span>
            </a>
            <button
              onClick={() => scrollToSection('intro-offer')}
              className="bg-amber-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded font-semibold hover:bg-amber-700 transition-all duration-300 uppercase text-xs tracking-wider shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span className="lg:hidden">£49 Offer</span>
              <span className="hidden lg:inline">Claim £49 Offer</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080/f5f5f5/cccccc?text=Hero+Background')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white/90"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
            className="space-y-6 sm:space-y-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-gray-900 leading-tight">
              Finally Remove That Mole<br />
              <span className="font-normal text-amber-700">You've Been Covering Up</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              No scary surgery, minimal scarring, back to your life in days - get the confidence boost you deserve without the fear or the massive price tag.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 px-4">
              <button
                onClick={() => scrollToSection('intro-offer')}
                className="bg-amber-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-all duration-300 uppercase text-sm tracking-wider shadow-lg hover:shadow-xl hover:scale-105"
              >
                Claim £49 Intro Offer
              </button>
              <button
                onClick={() => scrollToSection('before-after')}
                className="border-2 border-amber-600 text-amber-700 px-10 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-all duration-300 uppercase text-sm tracking-wider shadow-md hover:shadow-lg hover:scale-105"
              >
                See Real Results
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Offer Section */}
      <section id="intro-offer" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-amber-600 to-orange-600">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 lg:p-16">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-2 bg-amber-100 border border-amber-200 rounded-full text-amber-800 text-sm font-semibold uppercase tracking-wider mb-4">
                Special Intro Offer
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
                Try It Risk-Free:<br />
                <span className="font-bold text-amber-600">£49 for 1-2 Small Lesions</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                I know you might be hesitant - worried about pain, scarring, or whether it'll even work for you. This offer lets you experience my work firsthand without the huge commitment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-amber-50 rounded-2xl p-6 border-2 border-amber-200">
                <CheckCircle className="w-10 h-10 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Test My Skill & See Results</h3>
                <p className="text-gray-700">
                  See exactly how I work, how your skin heals, and what the results look like. No wondering "what if" - you'll know.
                </p>
              </div>

              <div className="bg-amber-50 rounded-2xl p-6 border-2 border-amber-200">
                <Heart className="w-10 h-10 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">No Commitment Required</h3>
                <p className="text-gray-700">
                  This isn't a package deal or monthly subscription. Remove 1-2 lesions, see how it goes, and decide if you want to do more. Simple as that.
                </p>
              </div>

              <div className="bg-amber-50 rounded-2xl p-6 border-2 border-amber-200">
                <Sparkles className="w-10 h-10 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Same Expert Care, Special Price</h3>
                <p className="text-gray-700">
                  You're getting the exact same quality treatment I give everyone - I'm just making it accessible so you can try it without breaking the bank.
                </p>
              </div>

              <div className="bg-amber-50 rounded-2xl p-6 border-2 border-amber-200">
                <Shield className="w-10 h-10 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">See How Your Skin Heals</h3>
                <p className="text-gray-700">
                  Everyone's worried about scarring - this lets you see exactly how your skin responds and heals before committing to more treatments.
                </p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="#"
                className="inline-flex items-center px-12 py-5 bg-amber-600 text-white rounded-lg font-bold hover:bg-amber-700 transition-all duration-300 text-lg shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <Calendar className="w-6 h-6 mr-3" />
                Book My £49 Consultation
              </a>
              <p className="text-sm text-gray-500 mt-4">Free consultation - no obligation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why People Avoid Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
              I Know Why You've<br />
              <span className="font-normal text-amber-700">Been Putting This Off</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These are the exact worries I hear every single day. Let me put your mind at ease.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">"Worried it'll hurt?"</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                I get it - nobody wants pain. Here's the truth: I numb the area completely before we even start. You'll feel the tiny pinch of the numbing injection for literally two seconds, then nothing. Most clients tell me they barely felt anything at all during the removal. Some feel a bit of pressure, that's it.
              </p>
              <p className="text-amber-700 font-semibold">
                The fear is way worse than the reality - I promise.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">"Scared of scarring?"</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                This is the number one concern, and it's completely valid. Nobody wants to trade one mark for another. I use techniques specifically designed to minimize scarring, and with proper aftercare, most people see their tiny marks fade to nothing within 4-8 weeks. You can check out the before/afters below - see for yourself.
              </p>
              <p className="text-amber-700 font-semibold">
                Beautiful healing is my top priority, especially on your face.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">"Think it costs £500+?"</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Yeah, some clinics charge that much - I've seen it too and it's wild. That's exactly why I offer the £49 intro price. This shouldn't be something only people with loads of money can afford. You deserve to feel confident in your skin without emptying your savings.
              </p>
              <p className="text-amber-700 font-semibold">
                Quality treatment doesn't have to cost a fortune.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">"Don't know if it can be removed?"</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                This uncertainty keeps so many people stuck. Book a free consultation and I'll examine it - no pressure, no obligation. I'll tell you honestly if it can be removed, what the process looks like, and what results to expect. You'll leave knowing exactly what's possible.
              </p>
              <p className="text-amber-700 font-semibold">
                Get answers instead of wondering "what if."
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">"Afraid the NHS turned you away?"</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                I hear this constantly and I know how frustrating it feels. The NHS has to prioritize medical necessity, so cosmetic removal isn't available anymore. But just because it's not medically urgent doesn't mean it's not affecting your life. Your confidence matters, and you shouldn't have to just live with something that bothers you every day.
              </p>
              <p className="text-amber-700 font-semibold">
                You're not being vain - your feelings are completely valid.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">"Worried about healing time?"</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Most people are healed enough to go about their normal life within 5-7 days. You'll have a small scab for the first few days, but it's not dramatic - you can cover it with makeup after day 5 if you want. You won't need to hide away for weeks or take loads of time off work.
              </p>
              <p className="text-amber-700 font-semibold">
                A week of healing for years of confidence - worth it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section id="before-after" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-amber-100 border border-amber-200 rounded-full text-amber-800 text-sm font-semibold uppercase tracking-wider mb-6">
              Real Results
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
              See The Transformation<br />
              <span className="font-normal text-amber-700">For Yourself</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These are real patients, real results. No filters, no tricks - just clear skin and confidence restored.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beforeAfterImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid grid-cols-2 gap-1">
                  <div className="relative">
                    <img
                      src={image.before}
                      alt={`Before ${image.label}`}
                      className="w-full h-64 object-cover"
                    />
                    <span className="absolute top-2 left-2 bg-black/70 text-white px-3 py-1 rounded text-xs font-semibold">
                      BEFORE
                    </span>
                  </div>
                  <div className="relative">
                    <img
                      src={image.after}
                      alt={`After ${image.label}`}
                      className="w-full h-64 object-cover"
                    />
                    <span className="absolute top-2 right-2 bg-amber-600 text-white px-3 py-1 rounded text-xs font-semibold">
                      AFTER
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold text-gray-900 text-center">
                    {image.label}
                  </p>
                  <p className="text-xs text-red-600 text-center mt-1 italic">
                    [PLACEHOLDER - Will replace with real images]
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center px-10 py-4 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Calendar className="w-5 h-5 mr-2" />
              I Want Results Like These
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
              Here's Exactly<br />
              <span className="font-normal text-amber-700">What Happens</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No surprises, no hidden steps - just a straightforward process from consultation to clear skin.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-3xl p-10 border-2 border-amber-200 relative">
              <div className="absolute -top-4 left-8 bg-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">Free Consultation</h3>
              <p className="text-gray-700 leading-relaxed">
                We sit down together and I examine what you want removed. I'll answer all your questions honestly - about pain, healing, scarring, everything. No pressure to book anything, just clear information so you can make an informed decision. If something needs medical assessment instead, I'll tell you straight.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white rounded-3xl p-10 border-2 border-amber-200 relative">
              <div className="absolute -top-4 left-8 bg-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">Quick Treatment</h3>
              <p className="text-gray-700 leading-relaxed">
                I numb the area completely - you'll barely feel anything. The actual removal takes 15-30 minutes depending on what we're treating. Most people are genuinely surprised at how quick and painless it is. You're in and out, simple as that. No dramatic medical procedure, just efficient, careful work.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white rounded-3xl p-10 border-2 border-amber-200 relative">
              <div className="absolute -top-4 left-8 bg-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">Easy Healing</h3>
              <p className="text-gray-700 leading-relaxed">
                You'll have a small scab for a few days - that's your skin doing its thing. By day 5-7, it's fallen off naturally and you've got new pink skin underneath. Over the next few weeks, that fades to match your skin tone. I'll give you simple aftercare instructions and you can message me if you're worried about anything. I've got you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Remove */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">
              What Can I Remove?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              If you're not sure what yours is called, don't worry - we'll figure it out together at your consultation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Moles", desc: "Raised or flat, anywhere on body" },
              { name: "Skin Tags", desc: "Neck, underarms, eyelids" },
              { name: "Age Spots", desc: "Hands, face, chest" },
              { name: "Warts", desc: "Hands, feet, face" },
              { name: "Milia", desc: "White bumps, usually face" },
              { name: "Cherry Angiomas", desc: "Small red bumps" },
              { name: "Seborrheic Keratoses", desc: "Brown, scaly patches" },
              { name: "Other Lesions", desc: "Ask if you're unsure!" }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Rhia */}
      <section className="relative bg-white overflow-hidden py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-[500px] lg:h-[700px]">
              <img
                src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansrqBKEAggJMAWrzNy61nv7tqUuYLkCVcsZQHl"
                alt="Rhia - Aesthetic Practitioner"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
            </div>

            <div className="flex items-center px-8 sm:px-12 lg:px-16 py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-amber-50/40 to-white">
              <div className="max-w-xl mx-auto text-center sm:text-left">
                <span className="inline-block px-4 py-2 bg-white border border-amber-200 rounded-full text-amber-700 text-sm font-semibold uppercase tracking-wider mb-8">
                  Meet Rhia
                </span>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
                  I've Been Where{' '}
                  <span className="font-normal italic text-amber-700">You Are</span>
                </h2>

                <div className="w-16 h-px bg-amber-500 mb-8 mx-auto sm:mx-0"></div>

                <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed mb-10">
                  <p>
                    I know what it's like to see something in the mirror every day that makes you self-conscious. To angle yourself in photos, to feel like people are staring at it when they talk to you. It's exhausting, and it chips away at your confidence bit by bit.
                  </p>
                  <p>
                    That's exactly why I do this work. Not to make money off people's insecurities, but because I genuinely believe nobody should have to feel uncomfortable in their own skin if there's something safe and effective we can do about it.
                  </p>
                  <p className="text-amber-800 font-medium">
                    You're in safe, caring hands. I promise I'll be honest with you, take my time, and make sure you feel completely comfortable every step of the way.
                  </p>
                </div>

                <a
                  href="#"
                  className="bg-amber-600 text-white px-10 py-4 rounded font-semibold hover:bg-amber-700 transition-all duration-300 uppercase text-sm tracking-wider shadow-lg hover:shadow-xl hover:scale-105 mx-auto sm:mx-0 inline-block"
                >
                  Book Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-amber-100 border border-amber-200 rounded-full text-amber-800 text-sm font-semibold uppercase tracking-wider mb-6">
              Real Stories
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
              Hear From People<br />
              <span className="font-normal text-amber-700">Just Like You</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              They had the same fears you do. Here's what they experienced.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 shadow-sm border border-amber-100 hover:shadow-xl hover:border-amber-200 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-amber-200 pt-4">
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}, <span className="text-amber-600">{testimonial.treatment}</span>
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <p className="text-xs text-red-600 mt-2 italic">
                    [PLACEHOLDER - Will replace with real testimonial]
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
              Clear, Honest<br />
              <span className="font-normal text-amber-700">Pricing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              No hidden fees, no surprises. This is what you pay - that's it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 border-2 border-amber-200 hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <p className="text-sm font-semibold text-amber-700 uppercase tracking-wider mb-2">
                  Intro Offer
                </p>
                <p className="text-5xl font-bold text-gray-900 mb-2">£49</p>
                <p className="text-gray-600 mb-6">1-2 Small Lesions</p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0" />
                    Perfect for first-timers
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0" />
                    Test the process
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0" />
                    See results yourself
                  </div>
                </div>
                <a
                  href="#"
                  className="block w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition-all duration-300"
                >
                  Claim Offer
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  Multiple Areas
                </p>
                <p className="text-5xl font-bold text-gray-900 mb-2">£99</p>
                <p className="text-gray-600 mb-6">3-4 Lesions</p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-gray-600 mr-2 flex-shrink-0" />
                    Better value per lesion
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-gray-600 mr-2 flex-shrink-0" />
                    One session
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-gray-600 mr-2 flex-shrink-0" />
                    Single healing period
                  </div>
                </div>
                <a
                  href="#"
                  className="block w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-300"
                >
                  Book Now
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  Full Package
                </p>
                <p className="text-5xl font-bold text-gray-900 mb-2">£149</p>
                <p className="text-gray-600 mb-6">5-6 Lesions</p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-gray-600 mr-2 flex-shrink-0" />
                    Best value option
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-gray-600 mr-2 flex-shrink-0" />
                    Get it all done
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-gray-600 mr-2 flex-shrink-0" />
                    Feel confident faster
                  </div>
                </div>
                <a
                  href="#"
                  className="block w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-300"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8 text-sm">
            All prices include consultation. No hidden fees. Need more than 6 lesions removed? Let's chat and I'll give you a custom quote.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
              Questions?<br />
              <span className="font-normal text-amber-700">I've Got Answers</span>
            </h2>
            <p className="text-xl text-gray-600">
              These are the questions I get asked most. If yours isn't here, just message me.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-sm border-2 border-gray-200 hover:border-amber-300 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 sm:p-8 flex items-center justify-between hover:bg-amber-50/50 transition-colors"
                >
                  <span className="text-lg sm:text-xl font-bold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 sm:w-7 h-6 sm:h-7 text-amber-600 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaq === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 sm:py-32 overflow-hidden bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoLTZWMGg2djMwek0wIDM2aDMwdi02SDB2NnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-20">
          <div className="text-center text-white">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-8 leading-tight">
              Imagine Looking in the Mirror Tomorrow<br />
              <span className="font-bold">And Feeling Genuinely Confident</span>
            </h2>

            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              No more angling away in photos. No more worrying people are staring. No more seeing it first thing every morning. Just you, feeling comfortable in your own skin.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <a
                href="#"
                className="bg-white text-amber-700 px-12 py-5 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 text-lg shadow-2xl hover:shadow-3xl hover:scale-105 uppercase tracking-wide"
              >
                Book £49 Intro Offer
              </a>

              <a
                href="https://wa.me/441234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="border-3 border-white text-white px-12 py-5 rounded-lg font-bold hover:bg-white/10 transition-all duration-300 text-lg shadow-2xl hover:shadow-3xl hover:scale-105 uppercase tracking-wide"
              >
                Ask Rhia a Question
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/90">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>GDC Registered</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>300+ Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white pt-12 sm:pt-20 pb-4 sm:pb-6 px-4 sm:px-6 border-t border-amber-500/20">
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
                  className="bg-white/10 p-2.5 sm:p-3 rounded-full hover:bg-amber-600 transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-5 sm:w-6 h-5 sm:h-6" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61575636000105"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2.5 sm:p-3 rounded-full hover:bg-amber-600 transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="w-5 sm:w-6 h-5 sm:h-6" />
                </a>
              </div>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="font-black text-base sm:text-lg mb-4 sm:mb-6 text-amber-400">Contact</h3>
              <div className="space-y-3 sm:space-y-4 text-white/70 text-sm sm:text-base">
                <p className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 hover:text-amber-400 transition-colors duration-300">
                  <MapPin className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                  <span>Southampton, UK</span>
                </p>
                <p className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 hover:text-amber-400 transition-colors duration-300">
                  <Phone className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                  <span>07307 762776</span>
                </p>
                <p className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 hover:text-amber-400 transition-colors duration-300">
                  <Mail className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                  <span>rhiaesthetics@mail.com</span>
                </p>
              </div>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="font-black text-base sm:text-lg mb-4 sm:mb-6 text-amber-400">Services</h3>
              <ul className="space-y-2 sm:space-y-3 text-white/70 text-sm sm:text-base">
                <li className="flex justify-center sm:justify-start">
                  <Link
                    to="/skin-lesion-removal"
                    className="hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    Skin Lesion Removal
                  </Link>
                </li>
                <li className="flex justify-center sm:justify-start">
                  <Link
                    to="/plasma-fibroblast"
                    className="hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    Plasma Fibroblast
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="font-black text-base sm:text-lg mb-4 sm:mb-6 text-amber-400">Hours</h3>
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
                  className="text-white/50 hover:text-amber-400 transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <span className="text-white/30">•</span>
                <Link
                  to="/terms-of-service"
                  className="text-white/50 hover:text-amber-400 transition-colors duration-300"
                >
                  Terms of Service
                </Link>
                <span className="text-white/30">•</span>
                <Link
                  to="/cookie-policy"
                  className="text-white/50 hover:text-amber-400 transition-colors duration-300"
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
                  <span className="text-amber-400 hover:text-amber-300 transition-colors font-semibold underline">Triple Ten Digits</span>
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
