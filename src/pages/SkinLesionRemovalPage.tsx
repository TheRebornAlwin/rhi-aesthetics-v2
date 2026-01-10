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
  Award,
  Heart,
  ChevronDown,
  MessageCircle,
  Instagram,
  Facebook,
  Star,
  ArrowRight,
  BadgeCheck
} from 'lucide-react';

function SkinLesionRemovalPage() {
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { scrollY } = useScroll();

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

  const beforeAfterImages = [
    { before: "https://placehold.co/600x800/e0f2f1/00897b?text=Before+1", after: "https://placehold.co/600x800/b2dfdb/00695c?text=After+1", label: "Facial Mole", timeline: "6 weeks" },
    { before: "https://placehold.co/600x800/e0f2f1/00897b?text=Before+2", after: "https://placehold.co/600x800/b2dfdb/00695c?text=After+2", label: "Skin Tags", timeline: "3 weeks" },
    { before: "https://placehold.co/600x800/e0f2f1/00897b?text=Before+3", after: "https://placehold.co/600x800/b2dfdb/00695c?text=After+3", label: "Age Spot", timeline: "4 weeks" },
    { before: "https://placehold.co/600x800/e0f2f1/00897b?text=Before+4", after: "https://placehold.co/600x800/b2dfdb/00695c?text=After+4", label: "Cheek Mole", timeline: "5 weeks" },
    { before: "https://placehold.co/600x800/e0f2f1/00897b?text=Before+5", after: "https://placehold.co/600x800/b2dfdb/00695c?text=After+5", label: "Neck Lesion", timeline: "6 weeks" },
    { before: "https://placehold.co/600x800/e0f2f1/00897b?text=Before+6", after: "https://placehold.co/600x800/b2dfdb/00695c?text=After+6", label: "Multiple Tags", timeline: "4 weeks" }
  ];

  const healingStages = [
    { day: "Day 1-2", image: "https://placehold.co/400x400/e0f2f1/00897b?text=Day+1", description: "Small scab forms. Minimal discomfort." },
    { day: "Day 7", image: "https://placehold.co/400x400/80cbc4/00695c?text=Day+7", description: "Scab naturally falls off. Pink skin underneath." },
    { day: "Week 2-4", image: "https://placehold.co/400x400/4db6ac/00695c?text=Week+2", description: "Pink fades to match your skin tone." },
    { day: "Week 6+", image: "https://placehold.co/400x800/e0f2f1/00897b?text=Week+6", description: "Fully healed. Minimal to no visible mark." }
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
    {
      question: "Does it hurt?",
      answer: "The area is numbed before treatment. You'll feel a small pinch from the numbing injection (2 seconds), then nothing during the removal. Most clients are surprised by how painless it is."
    },
    {
      question: "Will it scar?",
      answer: "With proper technique and aftercare, scarring is minimal. Most clients see any mark fade completely within 4-8 weeks. I use methods specifically designed to minimize scarring."
    },
    {
      question: "What's included in the £49 offer?",
      answer: "The £49 offer includes removal of 2 small lesions, free consultation, aftercare kit, detailed healing instructions, and WhatsApp support during your healing process."
    },
    {
      question: "How long does healing take?",
      answer: "Most people see the bulk of healing within 5-7 days. You'll have a small scab for about a week, then new pink skin that fades to match your skin tone over 4-6 weeks."
    },
    {
      question: "What if it's cancerous or dangerous?",
      answer: "During your free consultation, I examine everything carefully. If I have any concerns, I won't remove it - I'll refer you to get it properly checked by a dermatologist. Your safety is the priority."
    },
    {
      question: "Can I wear makeup after?",
      answer: "Give it 5-7 days before putting makeup directly on the treated area. You can wear makeup around the area from day 1. Once the scab falls off, you can gently cover with mineral makeup."
    },
    {
      question: "Will it come back?",
      answer: "When removed, it's gone for good. We remove the cells that created it, so that specific lesion won't grow back. However, you might develop new ones elsewhere if you're prone to them."
    },
    {
      question: "What if the NHS rejected me?",
      answer: "The NHS prioritizes medical need, so cosmetic removals aren't covered. Just because it's not medically necessary doesn't mean it's not affecting your confidence. That's why I offer this service."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isHeaderScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <div className="w-10 h-10">
              <img
                src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansrKuIikggJMAWrzNy61nv7tqUuYLkCVcsZQHl"
                alt="RHI Aesthetics Logo"
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>

          <div className="flex items-center space-x-6">
            <a
              href="https://wa.me/447307762776"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center space-x-2 text-gray-700 hover:text-teal-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Message</span>
            </a>
            <button
              onClick={() => scrollToSection('offer')}
              className="bg-teal-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-teal-700 transition-all duration-300 text-sm"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </header>

      {/* HERO - Clean & Confident */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center px-4 py-2 bg-teal-50 rounded-full border border-teal-100">
                <BadgeCheck className="w-4 h-4 text-teal-600 mr-2" />
                <span className="text-sm font-medium text-teal-700">300+ Successful Treatments in Southampton</span>
              </div>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                Safe Skin Lesion
                <span className="block text-teal-600">Removal</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Professional mole, skin tag, and lesion removal in Southampton. Minimal scarring, quick healing, from £49 for 2 lesions.
              </p>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="font-semibold">5.0</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-teal-600" />
                  <span>Qualified Practitioner</span>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection('offer')}
                  className="bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/447307762776"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-teal-600 hover:text-teal-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Message First</span>
                </motion.a>
              </div>

              <p className="text-sm text-gray-500">
                Free consultation • No obligation • WhatsApp support included
              </p>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://placehold.co/800x1000/e0f2f1/00897b?text=Rhi+Portrait"
                  alt="Rhi - Aesthetic Practitioner"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                  <h3 className="text-white text-2xl font-bold mb-1">Rhiannon</h3>
                  <p className="text-white/90">Qualified Aesthetic Practitioner</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BEFORE/AFTER - Elegant Gallery */}
      <section id="results" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Real Results
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every treatment performed in Southampton with minimal scarring and natural-looking results
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {beforeAfterImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-2 gap-px bg-gray-200">
                  <div className="relative aspect-[3/4]">
                    <img
                      src={item.before}
                      alt={`Before ${item.label}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                      Before
                    </div>
                  </div>
                  <div className="relative aspect-[3/4]">
                    <img
                      src={item.after}
                      alt={`After ${item.label}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-teal-600 text-white px-2 py-1 rounded text-xs font-medium">
                      After
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gray-50">
                  <p className="font-semibold text-gray-900">{item.label}</p>
                  <p className="text-sm text-teal-600">{item.timeline} healed</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE OFFER - Clean & Simple */}
      <section id="offer" className="py-24 px-6 bg-gradient-to-br from-teal-600 to-teal-700">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Remove 2 Lesions for £49
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Professional treatment with minimal scarring. Free consultation, aftercare kit, and WhatsApp support included.
            </p>

            {/* What's Included */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {[
                { icon: CheckCircle, text: "Remove 2 lesions" },
                { icon: Shield, text: "Free consultation" },
                { icon: Heart, text: "Aftercare kit" },
                { icon: MessageCircle, text: "WhatsApp support" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center space-y-3 text-white"
                >
                  <item.icon className="w-8 h-8" />
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-8">
              <a
                href="#"
                className="inline-flex items-center px-10 py-5 bg-white text-teal-700 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl text-lg group"
              >
                <Calendar className="w-5 h-5 mr-3" />
                Book Your £49 Consultation
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-white/80 text-sm mt-4">No obligation • Additional lesions available</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS - 3 Steps */}
      <section id="process" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Simple Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From consultation to full healing in 3 straightforward steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                number: "01",
                title: "Free Consultation",
                desc: "15-minute consultation where I examine what you want removed, answer all your questions, and show you what to expect. Zero pressure.",
                icon: MessageCircle
              },
              {
                number: "02",
                title: "Quick Treatment",
                desc: "Area is numbed (2-second pinch), then I remove the lesion using advanced techniques. Most treatments take 15-20 minutes.",
                icon: Shield
              },
              {
                number: "03",
                title: "Guided Healing",
                desc: "Small scab for about a week. Clear aftercare instructions plus WhatsApp support anytime. Most see complete healing in 4-6 weeks.",
                icon: Heart
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                <div className="mb-6">
                  <span className="text-6xl font-black text-teal-100">{step.number}</span>
                </div>
                <step.icon className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HEALING TIMELINE */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Healing Looks Like
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              No surprises. Here's exactly what to expect during your healing journey.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {healingStages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-square rounded-lg overflow-hidden mb-4">
                  <img
                    src={stage.image}
                    alt={stage.day}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-teal-600 mb-2">{stage.day}</h3>
                <p className="text-gray-600 text-sm">{stage.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-teal-50 border border-teal-100 rounded-xl p-8 max-w-3xl mx-auto">
              <MessageCircle className="w-10 h-10 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Message Me Anytime</h3>
              <p className="text-gray-700 mb-6">
                Questions during healing? WhatsApp me anytime. You're fully supported throughout the process.
              </p>
              <a
                href="https://wa.me/447307762776"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - 4 Max, Beautiful Layout */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Client Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real experiences from Southampton residents
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-teal-600 font-medium">{testimonial.treatment}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Clean Accordion */}
      <section id="faqs" className="py-24 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know
            </p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-teal-300 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-teal-600 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - Simple & Powerful */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Free consultation with no obligation. Let's talk about what's right for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a
                href="#"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl text-lg group"
              >
                <Calendar className="w-5 h-5 mr-3" />
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/447307762776"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-all duration-300 text-lg"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Message First
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm pt-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-teal-400" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-teal-400" />
                <span>From £49</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-teal-400" />
                <span>WhatsApp Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Clean */}
      <footer className="bg-black text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10">
                  <img
                    src="https://820i9wpaqi.ufs.sh/f/PwwcUidplansrKuIikggJMAWrzNy61nv7tqUuYLkCVcsZQHl"
                    alt="RHI Aesthetics Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <p className="text-white/60 text-sm">
                Professional skin lesion removal in Southampton
              </p>
              <div className="flex space-x-3">
                <a
                  href="https://www.instagram.com/rhi.aesthetics?igsh=MWhvMjFqb3Zscms0aw%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-full hover:bg-teal-600 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61575636000105"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-full hover:bg-teal-600 transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-sm mb-4 text-teal-400">Contact</h3>
              <div className="space-y-3 text-white/70 text-sm">
                <p className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Southampton, UK</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>07307 762776</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>rhiaesthetics@mail.com</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-sm mb-4 text-teal-400">Services</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>
                  <Link to="/skin-lesion-removal" className="hover:text-teal-400 transition-colors">
                    Skin Lesion Removal
                  </Link>
                </li>
                <li>
                  <Link to="/plasma-fibroblast" className="hover:text-teal-400 transition-colors">
                    Plasma Fibroblast
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-sm mb-4 text-teal-400">Hours</h3>
              <div className="space-y-2 text-white/70 text-sm">
                <p>Mon-Thurs: <span className="text-white">11am-8pm</span></p>
                <p>Friday: <span className="text-white">10am-3pm</span></p>
                <p>Sat-Sun: <span className="text-white">By Appointment</span></p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
              <p className="text-white/50">
                &copy; 2025 RHI Aesthetics. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <Link to="/privacy-policy" className="text-white/50 hover:text-teal-400 transition-colors">
                  Privacy Policy
                </Link>
                <span className="text-white/30">•</span>
                <Link to="/terms-of-service" className="text-white/50 hover:text-teal-400 transition-colors">
                  Terms of Service
                </Link>
                <span className="text-white/30">•</span>
                <Link to="/cookie-policy" className="text-white/50 hover:text-teal-400 transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10 text-center">
            <a
              href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=alwin@tripletendigits.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-white/60 text-xs">
                <span className="text-teal-400 hover:text-teal-300 transition-colors font-semibold underline">Triple Ten Digits</span>
                {' '}<span className="text-white/40">|</span>{' '}
                Competition-crushing websites. Delivered in a week or less.
              </p>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SkinLesionRemovalPage;
