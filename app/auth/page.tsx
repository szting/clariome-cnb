import Link from 'next/link';
import { Sparkles, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-8">
            <Sparkles className="w-8 h-8 text-teal-600" />
            <span className="text-2xl font-bold text-teal-900">Clariome</span>
          </Link>
        </div>

        <div className="glass-strong rounded-3xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-teal-900">Welcome</h1>
            <p className="text-teal-700">Authentication will be implemented here</p>
          </div>

          <div className="space-y-4">
            <div className="glass-card rounded-xl p-6 text-center">
              <p className="text-teal-800 mb-4">This is a marketing landing page only.</p>
              <p className="text-sm text-teal-600">No authentication, database, or backend functionality is included in this demo.</p>
            </div>

            <Link href="/" className="block">
              <Button variant="outline" className="w-full glass-card border-teal-300 text-teal-800 hover:bg-white/30">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
