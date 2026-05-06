import { ChevronRight, Database } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:space-y-8 max-w-4xl mx-auto md:mx-0">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50">
            <Database className="w-3 h-3 text-purple-500" />
            <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-purple-500">Infrastructure Excellence & Backend Lab</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] text-neutral-50">
            The engine behind <br className="hidden md:block" />
            <span className="text-neutral-500 text-2xl sm:text-4xl md:text-6xl text-pretty">high-stakes digital architecture.</span>
          </h1>
          
          <p className="text-base md:text-xl text-neutral-400 max-w-2xl leading-relaxed">
            We architect the specialized infrastructure that powers high-concurrency systems. From custom media engines to global low-latency data pipelines, we replace expensive managed services with surgical engineering.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
            <a href="#solutions" className="px-8 py-4 bg-neutral-50 text-neutral-950 font-medium rounded-sm hover:bg-neutral-200 transition-colors text-center">
              Our Solutions
            </a>
            <a href="#stack" className="group px-8 py-4 bg-neutral-950 border border-neutral-800 font-mono text-neutral-50 rounded-sm hover:bg-neutral-900 transition-colors inline-flex items-center justify-center">
              The Engine Stack
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-neutral-900 pt-12">
          <div className="space-y-2 text-center sm:text-left">
            <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider">The Optimization</p>
            <p className="text-xl md:text-2xl font-semibold text-neutral-50">Custom Media Engines</p>
            <p className="text-sm text-neutral-500 leading-snug">Edge-native FFmpeg pipelines that scale-to-zero and eliminate egress fees.</p>
          </div>
          <div className="space-y-2 text-center sm:text-left border-t border-neutral-900 pt-8 sm:border-0 sm:pt-0">
            <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider">The Latency</p>
            <p className="text-xl md:text-2xl font-semibold text-neutral-50">Sub-100ms Global Synch</p>
            <p className="text-sm text-neutral-500 leading-snug">Real-time state synchronization for fleets and surveillance meshes.</p>
          </div>
          <div className="space-y-2 text-center sm:text-left border-t border-neutral-900 pt-8 sm:border-0 sm:pt-0">
            <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider">The Security</p>
            <p className="text-xl md:text-2xl font-semibold text-neutral-50">Wireguard Mesh</p>
            <p className="text-sm text-neutral-500 leading-snug">Encrypted, peer-to-peer aggregation of remote devices and IP cameras.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
