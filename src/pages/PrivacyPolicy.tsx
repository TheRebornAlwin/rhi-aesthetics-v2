import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        <h1 className="text-4xl sm:text-5xl font-black text-black mb-8">Privacy Policy</h1>
        <p className="text-sm text-black/60 mb-12">Last updated: January 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">1. Introduction</h2>
            <p className="text-black/80 leading-relaxed">
              Rhi's Aesthetics ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">2. Information We Collect</h2>
            <p className="text-black/80 leading-relaxed mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-black/80">
              <li>Personal identification information (name, email address, phone number)</li>
              <li>Medical history and health information relevant to treatments</li>
              <li>Appointment and booking information</li>
              <li>Communication preferences</li>
              <li>Website usage data and analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">3. How We Use Your Information</h2>
            <p className="text-black/80 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-black/80">
              <li>Provide and maintain our services</li>
              <li>Schedule and manage appointments</li>
              <li>Communicate with you about treatments and services</li>
              <li>Send you updates, marketing communications, and promotional materials</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">4. Data Security</h2>
            <p className="text-black/80 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">5. Your Rights</h2>
            <p className="text-black/80 leading-relaxed mb-4">
              Under GDPR and UK data protection laws, you have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-black/80">
              <li>Access your personal data</li>
              <li>Correct inaccurate personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">6. Contact Us</h2>
            <p className="text-black/80 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <span className="font-semibold">Email:</span> privacy@rhiaesthetics.com
              <br />
              <span className="font-semibold">Address:</span> Southampton, United Kingdom
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
