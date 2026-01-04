import Link from 'next/link';
import { Sparkles, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <header className="glass-strong border-b border-teal-200/30">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="w-6 h-6 text-teal-600" />
              <span className="text-xl font-bold text-teal-900">Clariome</span>
            </Link>
            <Link href="/">
              <Button variant="ghost" className="text-teal-700 hover:text-teal-600">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-teal-900">Privacy Policy</h1>
              <p className="text-teal-600">Last updated: December 2024</p>
            </div>

            <div className="space-y-6 text-teal-800">
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-teal-900">Our Commitment</h2>
                <p className="leading-relaxed">
                  At Clariome, privacy isn't an afterthought—it's our foundation. Your reflections are deeply personal, and we treat them with the respect they deserve.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-teal-900">Data Collection</h2>
                <p className="leading-relaxed">
                  We collect only what's necessary to provide our service:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Your email address for account creation and communication</li>
                  <li>Your reflections and notes that you choose to save</li>
                  <li>Basic usage data to improve our service</li>
                  <li>Optional Telegram username if you connect that integration</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-teal-900">Data Usage</h2>
                <p className="leading-relaxed">
                  Your data is used exclusively to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Generate your weekly synthesis (only with your approval)</li>
                  <li>Provide longitudinal insights about your reflections</li>
                  <li>Send you notifications and updates you've opted into</li>
                  <li>Improve our service through anonymized, aggregated analytics</li>
                </ul>
                <p className="leading-relaxed font-semibold">
                  We never sell your data. We never train AI models on your personal content. We never share your reflections with third parties.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-teal-900">Data Security</h2>
                <p className="leading-relaxed">
                  Your reflections are encrypted in transit and at rest. We use industry-standard security practices including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>End-to-end encryption for all data transmission</li>
                  <li>Encrypted database storage</li>
                  <li>Regular security audits and updates</li>
                  <li>Strict access controls for our team</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-teal-900">Your Rights</h2>
                <p className="leading-relaxed">
                  You have complete control over your data:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Export all your data at any time in standard formats</li>
                  <li>Delete individual reflections or your entire account</li>
                  <li>Opt out of AI synthesis while keeping your journal</li>
                  <li>Request a copy of all data we have about you</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-teal-900">Data Retention</h2>
                <p className="leading-relaxed">
                  We keep your data only as long as you want us to. When you delete your account, all your data is permanently removed from our servers within 30 days. Backups are purged within 90 days.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-teal-900">Contact Us</h2>
                <p className="leading-relaxed">
                  Questions about privacy? We're here to help: <a href="mailto:privacy@clariome.com" className="text-teal-600 hover:text-teal-700 underline">privacy@clariome.com</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
