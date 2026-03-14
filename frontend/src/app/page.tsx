import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand rounded-full blur-[150px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[30%] h-[30%] bg-brand-light rounded-full blur-[120px] opacity-10 pointer-events-none" />

      {/* Navigation */}
      <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between relative z-10">
        <div className="text-2xl font-bold tracking-tighter">
          Lizzy<span className="text-brand">Academy</span>
        </div>
        <div className="flex gap-4 items-center">
          <Link href="/login" className="text-sm font-medium text-text-secondary hover:text-white transition">
            Login
          </Link>
          <Link href="/signup">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 mt-20 md:mt-32 relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium text-brand-light mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-light"></span>
          </span>
          Next Cohort Enrolling Now
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          Master the art of <br className="hidden md:block" />
          <span className="text-gradient">Viral Content Creation</span>
        </h1>
        
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mb-10 leading-relaxed">
          Learn the exact frameworks I used to go from 0 to 100k followers in less than 6 months. 
          Stop guessing, start growing, and monetize your personal brand today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link href="/signup" className="w-full sm:w-auto">
            <Button size="lg" fullWidth>Book a Free Strategy Call</Button>
          </Link>
          <Link href="#framework" className="w-full sm:w-auto">
            <Button size="lg" variant="secondary" fullWidth>Explore Curriculum</Button>
          </Link>
        </div>
      </section>

      {/* Stats/Social Proof Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { metric: "100k+", label: "Followers Gained" },
            { metric: "50M+", label: "Total Views" },
            { metric: "<6 Mo", label: "Timeframe" },
            { metric: "$1M+", label: "Student Revenue" },
          ].map((stat, i) => (
            <Card key={i} className="text-center py-8" hover>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.metric}</h3>
              <p className="text-text-secondary text-sm uppercase tracking-wider">{stat.label}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Framework Section */}
      <section id="framework" className="w-full max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">The Viral Framework</h2>
          <p className="text-text-secondary text-lg">
            Everything you need to know, structured step-by-step. No fluff, just actionable strategies that work in 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card hover className="bg-gradient-to-br from-surface to-brand-dark/20 p-8">
            <div className="h-12 w-12 rounded-xl bg-brand/20 flex items-center justify-center mb-6 border border-brand/30">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-brand-light">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.829 1.508-2.316a7.5 7.5 0 1 0-7.516 0c.85.487 1.508 1.333 1.508 2.316V18" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">1. Viral Psychology</h3>
            <p className="text-text-secondary leading-relaxed">
              Understand exactly why people click, watch, and share. Master the human emotional triggers that drive massive engagement.
            </p>
          </Card>
          
          <Card hover className="bg-gradient-to-br from-surface to-brand-dark/20 p-8">
            <div className="h-12 w-12 rounded-xl bg-brand/20 flex items-center justify-center mb-6 border border-brand/30">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-brand-light">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">2. Hook Mastery</h3>
            <p className="text-text-secondary leading-relaxed">
              The first 3 seconds are everything. Learn 50+ proven hook structures that stop the scroll and retain viewers immediately.
            </p>
          </Card>

          <Card hover className="bg-gradient-to-br from-surface to-brand-dark/20 p-8">
            <div className="h-12 w-12 rounded-xl bg-brand/20 flex items-center justify-center mb-6 border border-brand/30">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-brand-light">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">3. Monetization Engine</h3>
            <p className="text-text-secondary leading-relaxed">
              Views don't pay bills. Discover how to turn your attention into a sustainable business funnel generating predictable revenue.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="w-full border-t border-white/5 py-12 mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xl font-bold tracking-tighter">
            Lizzy<span className="text-brand">Academy</span>
          </div>
          <div className="text-sm text-text-secondary">
            &copy; {new Date().getFullYear()} Lizzy Academy. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
