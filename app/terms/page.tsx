import Link from 'next/link';
import { Sparkles, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TermsPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold text-teal-900">Terms of Service</h1>
              <p className="text-teal-600">Last updated: December 2024</p>
            </div>

            <div className="space-y-6 text-teal-800">
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-teal-900">Agreement to Terms</h2>
                <p className="leading-relaxed">
                  By accessing or using Clariome, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the service.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-teal-900">Description of Service</h2>
                <p className="leading-relaxed">
                  Clariome is a personal reflection and synthesis platform that helps you capture thoughts throughout the week and receive optional AI-powered insights. The service includes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>A secure space to record personal reflections</li>
                  <li>Optional weekly synthesis of your thoughts</li>
                  <li>Longitudinal insights and trend analysis</li>
                  <li>Integration with Telegram and other platforms</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-teal-900">User Accounts</h2>
                <p className="leading-relaxed">
                  You are responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized access</li>
                  <li>Providing accurate and current information</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-teal-900">Acceptable Use</h2>
                <p className="leading-relaxed">
                  You agree not to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use the service for any illegal purpose</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt the service</li>
                  <li>Share your account with others</li>
                  <li>Use automated systems to access the service without permission</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-teal-900">Content Ownership</h2>
                <p className="leading-relaxed">
                  You retain all rights to your reflections and content. By using Clariome, you grant us a limited license to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Store and process your content to provide the service</li>
                  <li>Generate synthesis and insights from your reflections</li>
                  <li>Create anonymized, aggregated data for service improvement</li>
                </ul>
                <p className="leading-relaxed">
                  This license ends when you delete your content or account.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-teal-900">AI-Generated Content</h2>
                <p className="leading-relaxed">
                  Our AI synthesis feature is provided as-is. While we strive for accuracy, AI-generated insights may contain errors or misinterpretations. You are responsible for reviewing and approving all synthesis before it becomes part of your permanent record.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-teal-900">Payment Terms</h2>
                <p className="leading-relaxed">
                  For paid subscriptions:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Billing occurs monthly or annually based on your plan</li>
                  <li>You can cancel at any time; no refunds for partial periods</li>
                  <li>Prices may change with 30 days notice</li>
                  <li>Failed payments may result in service suspension</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-teal-900">Service Availability</h2>
                <p className="leading-relaxed">
                  We strive for 99.9% uptime but cannot guarantee uninterrupted service. We are not liable for any losses resulting from service interruptions, though we will work diligently to restore service quickly.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-teal-900">Termination</h2>
                <p className="leading-relaxed">
                  We may terminate or suspend your account immediately if you violate these terms. You may terminate your account at any time through your account settings. Upon termination, your data will be deleted according to our Privacy Policy.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-teal-900">Limitation of Liability</h2>
                <p className="leading-relaxed">
                  Clariome is provided "as is" without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages arising from your use of the service.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-teal-900">Changes to Terms</h2>
                <p className="leading-relaxed">
                  We may update these terms from time to time. We will notify you of significant changes via email or through the service. Continued use after changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-teal-900">Contact</h2>
                <p className="leading-relaxed">
                  Questions about these terms? Contact us at: <a href="mailto:legal@clariome.com" className="text-teal-600 hover:text-teal-700 underline">legal@clariome.com</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
