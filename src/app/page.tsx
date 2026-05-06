import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Infrastructure from "@/components/Infrastructure";
import Stack from "@/components/Stack";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <Navbar />
      <Hero />
      <Infrastructure />
      <Solutions />
      <Stack />
      
      <footer className="py-12 md:py-20 border-t border-neutral-900 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
            <div className="sm:col-span-2 space-y-4 md:space-y-6">
              <span className="font-mono text-base md:text-lg font-medium tracking-tight">
                prodevelopers<span className="text-neutral-500">.cloud</span>
              </span>
              <p className="text-neutral-500 max-w-sm text-sm leading-relaxed">
                A systems lab specializing in high-concurrency architecture, 
                cost-optimized media engines, and privacy-first infrastructure.
              </p>
            </div>
            <div className="space-y-4">
              <h5 className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-neutral-600 font-semibold">Ecosystem</h5>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="https://prodevelopers.tech" className="hover:text-neutral-50 transition-colors">prodevelopers.tech</a></li>
                <li><a href="#solutions" className="hover:text-neutral-50 transition-colors">Solutions</a></li>
                <li><a href="#infrastructure" className="hover:text-neutral-50 transition-colors">Infrastructure</a></li>
                <li><a href="#stack" className="hover:text-neutral-50 transition-colors">Stack</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-neutral-600 font-semibold">Connect</h5>
              <ul className="space-y-3 text-sm text-neutral-400">
                <li>
                  <a href="mailto:hello@prodevelopers.tech" className="hover:text-neutral-50 transition-colors block">hello@prodevelopers.tech</a>
                </li>
                <li>
                  <a href="tel:+8801775624505" className="hover:text-neutral-50 transition-colors block">+880 1775 624505</a>
                </li>
                <li className="text-neutral-500 leading-relaxed text-xs">
                  House #128, Hasan Lane,<br />
                  Tongi, Gazipur, Bangladesh
                </li>
                <li className="text-neutral-600 text-[10px] uppercase tracking-tighter pt-1">Available Q3/Q4 2026</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="font-mono text-[9px] md:text-[10px] text-neutral-600 uppercase tracking-widest leading-relaxed">
              © 2026 prodevelopers.cloud — The Engine. <br className="sm:hidden" /> Cost-Efficiency by Engineering.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
