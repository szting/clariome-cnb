import Link from 'next/link';
import { Sparkles, Shield, Eye, Clock, TrendingUp, MessageCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 glass-strong">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-6 h-6 text-teal-600" />
              <span className="text-xl font-bold text-teal-900">Clariome</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-sm font-medium text-teal-800 hover:text-teal-600 transition-colors">How it works</a>
              <a href="#pricing" className="text-sm font-medium text-teal-800 hover:text-teal-600 transition-colors">Pricing</a>
              <a href="#faq" className="text-sm font-medium text-teal-800 hover:text-teal-600 transition-colors">FAQ</a>
              <Link href="/auth">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white shadow-lg">Get Started</Button>
              </Link>
            </div>
            <div className="md:hidden">
              <Link href="/auth">
                <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white">Sign Up</Button>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block glass-card rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-medium text-teal-700">Privacy-first reflection</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-teal-900 leading-tight">
              Clarity, captured weekly.
            </h1>
            <p className="text-xl md:text-2xl text-teal-700 max-w-2xl mx-auto">
              Transform scattered thoughts into meaningful insights with weekly synthesis you control.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link href="/auth">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white shadow-xl text-lg px-8 py-6">
                  Start Reflecting <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="glass-card border-teal-300 text-teal-800 hover:bg-white/30 text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="glass-card rounded-2xl p-8 space-y-4 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-teal-900">Weekly Synthesis</h3>
              <p className="text-teal-700 leading-relaxed">
                Receive thoughtful summaries of your reflections every week, helping you see patterns and progress over time.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 space-y-4 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-teal-900">Longitudinal Insight</h3>
              <p className="text-teal-700 leading-relaxed">
                Track your growth journey with intelligent analysis that reveals trends and breakthroughs across weeks and months.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 space-y-4 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-teal-500 flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-teal-900">Review Before Commit</h3>
              <p className="text-teal-700 leading-relaxed">
                You're in control. Review, edit, or discard any synthesis before it becomes part of your permanent record.
              </p>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-teal-900">How it works</h2>
              <p className="text-xl text-teal-700">Three simple steps to clarity</p>
            </div>

            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  1
                </div>
                <div className="glass-card rounded-2xl p-8 flex-1">
                  <h3 className="text-2xl font-bold text-teal-900 mb-3">Reflect</h3>
                  <p className="text-teal-700 leading-relaxed">
                    Share your thoughts throughout the week via Telegram, email, or our web app. No pressure, no structure required—just capture what matters to you.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  2
                </div>
                <div className="glass-card rounded-2xl p-8 flex-1">
                  <h3 className="text-2xl font-bold text-teal-900 mb-3">Review</h3>
                  <p className="text-teal-700 leading-relaxed">
                    Every Sunday, receive a thoughtful synthesis of your week. Read it, reflect on it, and decide if it captures your truth accurately.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-teal-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  3
                </div>
                <div className="glass-card rounded-2xl p-8 flex-1">
                  <h3 className="text-2xl font-bold text-teal-900 mb-3">Commit</h3>
                  <p className="text-teal-700 leading-relaxed">
                    Approve the synthesis to add it to your timeline, edit it to make it yours, or discard it entirely. Your data, your choice, always.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-teal-900">See your insights</h2>
              <p className="text-xl text-teal-700">A clean, intuitive interface for your reflections</p>
            </div>
            
            <div className="glass-strong rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-teal-200/50">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500"></div>
                    <div>
                      <div className="font-semibold text-teal-900">Week of Dec 15-21</div>
                      <div className="text-sm text-teal-600">7 reflections</div>
                    </div>
                  </div>
                  <div className="glass-card px-4 py-2 rounded-full">
                    <span className="text-sm font-medium text-teal-700">Pending Review</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="glass-card rounded-xl p-6">
                    <h4 className="font-semibold text-teal-900 mb-2">Key Themes</h4>
                    <p className="text-teal-700 leading-relaxed">
                      This week showed strong focus on creative projects and team collaboration. You expressed excitement about new opportunities while maintaining awareness of work-life balance.
                    </p>
                  </div>

                  <div className="glass-card rounded-xl p-6">
                    <h4 className="font-semibold text-teal-900 mb-2">Growth Moments</h4>
                    <p className="text-teal-700 leading-relaxed">
                      Notable breakthrough in problem-solving approach. Increased confidence in decision-making and willingness to delegate tasks.
                    </p>
                  </div>

                  <div className="glass-card rounded-xl p-6">
                    <h4 className="font-semibold text-teal-900 mb-2">Looking Ahead</h4>
                    <p className="text-teal-700 leading-relaxed">
                      Consider exploring the creative direction mentioned on Tuesday. The team collaboration patterns suggest opportunities for mentorship.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button className="flex-1 bg-teal-600 hover:bg-teal-700 text-white">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Approve & Save
                  </Button>
                  <Button variant="outline" className="flex-1 glass-card border-teal-300 text-teal-800 hover:bg-white/30">
                    Edit Synthesis
                  </Button>
                  <Button variant="outline" className="glass-card border-teal-300 text-teal-800 hover:bg-white/30">
                    Discard
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-teal-900">Simple, transparent pricing</h2>
              <p className="text-xl text-teal-700">Start free, upgrade when you're ready</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card rounded-2xl p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-teal-900 mb-2">Free</h3>
                  <div className="text-4xl font-bold text-teal-900 mb-4">$0<span className="text-lg font-normal text-teal-600">/month</span></div>
                  <p className="text-teal-700">Perfect for getting started</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-teal-800">Weekly synthesis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-teal-800">Telegram integration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-teal-800">30-day history</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-teal-800">Basic export</span>
                  </li>
                </ul>
                <Link href="/auth" className="block">
                  <Button variant="outline" className="w-full glass-card border-teal-300 text-teal-800 hover:bg-white/30">
                    Get Started Free
                  </Button>
                </Link>
              </div>

              <div className="glass-strong rounded-2xl p-8 space-y-6 border-2 border-teal-400 relative overflow-hidden">
                <div className="absolute top-4 right-4 glass-card px-3 py-1 rounded-full">
                  <span className="text-xs font-bold text-teal-700">POPULAR</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-teal-900 mb-2">Pro</h3>
                  <div className="text-4xl font-bold text-teal-900 mb-4">$9<span className="text-lg font-normal text-teal-600">/month</span></div>
                  <p className="text-teal-700">For serious reflection</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-teal-800">Everything in Free</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-teal-800">Unlimited history</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-teal-800">Advanced insights & trends</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-teal-800">Custom synthesis frequency</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-teal-800">Priority support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-teal-800">Full data export</span>
                  </li>
                </ul>
                <Link href="/auth" className="block">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white shadow-lg">
                    Start Pro Trial
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-teal-900">Frequently asked questions</h2>
              <p className="text-xl text-teal-700">Everything you need to know</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="glass-card rounded-xl px-6 border-none">
                <AccordionTrigger className="text-left text-lg font-semibold text-teal-900 hover:text-teal-700">
                  How is my privacy protected?
                </AccordionTrigger>
                <AccordionContent className="text-teal-700 leading-relaxed pt-2">
                  Your data is encrypted end-to-end and stored securely. We never share your reflections with third parties. You can delete your data at any time, and we use privacy-focused AI processing that doesn't train on your personal content. Review-before-commit means nothing is saved without your explicit approval.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="glass-card rounded-xl px-6 border-none">
                <AccordionTrigger className="text-left text-lg font-semibold text-teal-900 hover:text-teal-700">
                  Is AI required for synthesis?
                </AccordionTrigger>
                <AccordionContent className="text-teal-700 leading-relaxed pt-2">
                  No! While AI-powered synthesis is our default offering, you can opt for manual review or disable synthesis entirely. Clariome works as a simple reflection journal without any AI features if you prefer. You're always in control of how your data is processed.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="glass-card rounded-xl px-6 border-none">
                <AccordionTrigger className="text-left text-lg font-semibold text-teal-900 hover:text-teal-700">
                  Who owns my data?
                </AccordionTrigger>
                <AccordionContent className="text-teal-700 leading-relaxed pt-2">
                  You do, completely. Your reflections and syntheses belong to you. You can export everything at any time in standard formats (JSON, Markdown, PDF). If you delete your account, all your data is permanently removed from our servers within 30 days.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="glass-card rounded-xl px-6 border-none">
                <AccordionTrigger className="text-left text-lg font-semibold text-teal-900 hover:text-teal-700">
                  How do Telegram nudges work?
                </AccordionTrigger>
                <AccordionContent className="text-teal-700 leading-relaxed pt-2">
                  Connect your Telegram account and receive gentle prompts throughout the week to capture reflections. You control the frequency and timing. Simply reply to the bot with your thoughts, and they're securely saved. You can also message the bot anytime without waiting for prompts.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="glass-card rounded-xl px-6 border-none">
                <AccordionTrigger className="text-left text-lg font-semibold text-teal-900 hover:text-teal-700">
                  Can I export my reflections?
                </AccordionTrigger>
                <AccordionContent className="text-teal-700 leading-relaxed pt-2">
                  Absolutely. Free users can export the last 30 days in Markdown format. Pro users get unlimited exports in multiple formats including JSON, Markdown, and PDF. Your data is portable and never locked in. Export individual weeks, months, or your entire history with one click.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto glass-strong rounded-3xl p-12 text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-teal-900">Ready to find clarity?</h2>
            <p className="text-xl text-teal-700 max-w-2xl mx-auto">
              Join thousands who are transforming scattered thoughts into meaningful insights.
            </p>
            <Link href="/auth">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white shadow-xl text-lg px-8 py-6">
                Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="glass-strong border-t border-teal-200/30 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-6 h-6 text-teal-600" />
                <span className="text-xl font-bold text-teal-900">Clariome</span>
              </div>
              <p className="text-sm text-teal-700">Clarity, captured weekly.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-teal-900 mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#how-it-works" className="text-sm text-teal-700 hover:text-teal-600">How it works</a></li>
                <li><a href="#pricing" className="text-sm text-teal-700 hover:text-teal-600">Pricing</a></li>
                <li><a href="#faq" className="text-sm text-teal-700 hover:text-teal-600">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-teal-900 mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-sm text-teal-700 hover:text-teal-600">Privacy</Link></li>
                <li><Link href="/terms" className="text-sm text-teal-700 hover:text-teal-600">Terms</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-teal-900 mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="mailto:hello@clariome.com" className="text-sm text-teal-700 hover:text-teal-600">hello@clariome.com</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-teal-200/30 pt-8 text-center">
            <p className="text-sm text-teal-600">© 2024 Clariome. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
