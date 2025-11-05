import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function CookiePolicy() {
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

        <h1 className="text-4xl sm:text-5xl font-black text-black mb-8">Cookie Policy</h1>
        <p className="text-sm text-black/60 mb-12">Last updated: January 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">1. What Are Cookies</h2>
            <p className="text-black/80 leading-relaxed">
              Cookies are small text files that are stored on your computer or mobile device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">2. How We Use Cookies</h2>
            <p className="text-black/80 leading-relaxed mb-4">
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-black/80">
              <li><strong>Essential cookies:</strong> Necessary for the website to function properly</li>
              <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Functionality cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Marketing cookies:</strong> Track your activity to deliver relevant advertisements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">3. Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Session Cookies</h3>
                <p className="text-black/80 leading-relaxed">
                  These are temporary cookies that expire when you close your browser. They help us remember you as you navigate between pages.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Persistent Cookies</h3>
                <p className="text-black/80 leading-relaxed">
                  These cookies remain on your device for a set period or until you delete them. They help us recognize you when you return to our website.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Third-Party Cookies</h3>
                <p className="text-black/80 leading-relaxed">
                  Some cookies are placed by third-party services that appear on our pages, such as analytics providers or social media platforms.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">4. Managing Cookies</h2>
            <p className="text-black/80 leading-relaxed mb-4">
              You can control and manage cookies in various ways:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-black/80">
              <li>Most browsers allow you to refuse or accept cookies</li>
              <li>You can delete cookies that are already stored on your device</li>
              <li>You can set your browser to notify you when you receive a cookie</li>
            </ul>
            <p className="text-black/80 leading-relaxed mt-4">
              Please note that disabling cookies may affect the functionality of our website and your user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">5. Updates to This Policy</h2>
            <p className="text-black/80 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please review this page periodically for the latest information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">6. Contact Us</h2>
            <p className="text-black/80 leading-relaxed">
              If you have any questions about our use of cookies, please contact us at:
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
