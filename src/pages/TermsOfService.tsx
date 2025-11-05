import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfService() {
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

        <h1 className="text-4xl sm:text-5xl font-black text-black mb-8">Terms of Service</h1>
        <p className="text-sm text-black/60 mb-12">Last updated: January 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">1. Agreement to Terms</h2>
            <p className="text-black/80 leading-relaxed">
              By accessing or using Rhi's Aesthetics services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">2. Services</h2>
            <p className="text-black/80 leading-relaxed">
              Rhi's Aesthetics provides plasma fibroblast treatments and related aesthetic services. All treatments are subject to a consultation to determine suitability and manage expectations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">3. Booking and Payments</h2>
            <p className="text-black/80 leading-relaxed mb-4">
              When booking our services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-black/80">
              <li>A consultation deposit may be required to secure your appointment</li>
              <li>Deposits are fully redeemable toward treatment costs</li>
              <li>Full payment is required before or on the day of treatment</li>
              <li>We accept various payment methods including card payments</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">4. Cancellation Policy</h2>
            <p className="text-black/80 leading-relaxed mb-4">
              Cancellation terms:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-black/80">
              <li>Cancellations must be made at least 48 hours before your appointment</li>
              <li>Late cancellations may result in forfeiture of deposit</li>
              <li>We reserve the right to cancel appointments with reasonable notice</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">5. Client Responsibilities</h2>
            <p className="text-black/80 leading-relaxed mb-4">
              As a client, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-black/80">
              <li>Provide accurate medical history and health information</li>
              <li>Follow all pre-treatment and aftercare instructions</li>
              <li>Inform us of any changes to your health or medications</li>
              <li>Attend your scheduled consultations and appointments</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">6. Treatment Outcomes</h2>
            <p className="text-black/80 leading-relaxed">
              While we strive to achieve the best possible results, individual outcomes may vary. Results are not guaranteed and depend on various factors including skin type, age, lifestyle, and adherence to aftercare instructions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">7. Limitation of Liability</h2>
            <p className="text-black/80 leading-relaxed">
              Rhi's Aesthetics shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services, except where prohibited by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">8. Contact Information</h2>
            <p className="text-black/80 leading-relaxed">
              For questions about these Terms of Service, please contact us at:
              <br />
              <span className="font-semibold">Email:</span> info@rhiaesthetics.com
              <br />
              <span className="font-semibold">Address:</span> Southampton, United Kingdom
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
