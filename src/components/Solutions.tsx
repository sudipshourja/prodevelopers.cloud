import { Server, Shield, Video, Globe } from 'lucide-react';

const solutions = [
  {
    title: "Cost-Optimized Ride-Sharing Architecture",
    description: "Eliminating the 'Google Maps Tax' by replacing expensive mapping APIs with a serverless, self-hosted geospatial stack. 90%+ reduction in mapping costs.",
    icon: Globe,
    stats: "90% Cost Reduction",
    tech: ["Cloudflare R2", "PMTiles", "Valhalla", "Maplibre GL"]
  },
  {
    title: "FleetCam Video Synchronization",
    description: "Integrating real-time video surveillance with high-concurrency GPS tracking. Sub-500ms video latency over low-bandwidth cellular networks.",
    icon: Video,
    stats: "Sub-500ms Latency",
    tech: ["WebRTC", "Traccar", "SQLite", "Wireguard"]
  },
  {
    title: "CCTV Cloud VMS (Zero-Trust)",
    description: "Client-side encrypted surveillance storage on commodity object storage. Ensuring privacy where even the cloud provider cannot access the footage.",
    icon: Shield,
    stats: "AES-256 E2EE",
    tech: ["Google Cloud Storage", "Wireguard", "AES-256", "Python"]
  },
  {
    title: "Edge-Native Media Pipeline",
    description: "Scale-to-zero transcoding using FFmpeg and serverless containers. Professional video delivery without per-minute or egress markups.",
    icon: Server,
    stats: "Zero Egress Fees",
    tech: ["FFmpeg", "Cloudflare Workers", "Durable Objects", "HLS"]
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 md:py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-16 md:mb-24">
          <h2 className="font-mono text-[10px] uppercase tracking-widest text-purple-500 font-semibold mb-4">Case Studies</h2>
          <h3 className="text-3xl md:text-5xl font-semibold text-neutral-50 max-w-2xl leading-tight">
            Architectural solutions for <br className="hidden sm:block" />
            <span className="text-neutral-500">uncompromising requirements.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-900 border border-neutral-900">
          {solutions.map((item, index) => (
            <div key={index} className="bg-neutral-950 p-8 md:p-12 space-y-8 hover:bg-neutral-900/50 transition-colors group">
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-sm border border-neutral-800 bg-neutral-900/50 group-hover:border-purple-500/50 transition-colors">
                  <item.icon className="w-6 h-6 text-neutral-400 group-hover:text-purple-500 transition-colors" />
                </div>
                <span className="font-mono text-[10px] text-purple-500 uppercase tracking-widest bg-purple-500/10 px-2 py-1 rounded-sm border border-purple-500/20">
                  {item.stats}
                </span>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl md:text-2xl font-semibold text-neutral-50">{item.title}</h4>
                <p className="text-neutral-500 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-2">
                {item.tech.map((t, i) => (
                  <span key={i} className="text-[9px] font-mono text-neutral-400 uppercase tracking-tighter border border-neutral-900 px-2 py-1 rounded-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
