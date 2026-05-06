import { Database, Globe, Shield, Terminal, Zap, Cpu } from 'lucide-react';

const techGroups = [
  {
    category: "Cloud & Edge",
    items: [
      { name: "Cloudflare Workers", level: "Compute" },
      { name: "Cloudflare R2", level: "Storage" },
      { name: "Durable Objects", level: "State" },
      { name: "GCP Storage", level: "Archive" }
    ],
    icon: Globe
  },
  {
    category: "Core Languages",
    items: [
      { name: "Node.js / TS", level: "Primary" },
      { name: "Java", level: "Traccar Core" },
      { name: "Python", level: "Processing" },
      { name: "React Native", level: "Mobile" }
    ],
    icon: Cpu
  },
  {
    category: "Data & Geospatial",
    items: [
      { name: "PMTiles", level: "Vector Data" },
      { name: "Valhalla / OSRM", level: "Routing" },
      { name: "SQLite", level: "Mobile State" },
      { name: "S3-Compatible", level: "Object Store" }
    ],
    icon: Database
  },
  {
    category: "Media & Streaming",
    items: [
      { name: "FFmpeg", level: "Transcoding" },
      { name: "WebRTC", level: "Low-Latency" },
      { name: "HLS / DASH", level: "Delivery" },
      { name: "RTSP / ONVIF", level: "Ingestion" }
    ],
    icon: Zap
  },
  {
    category: "Security & Encryption",
    items: [
      { name: "Wireguard", level: "VPN Mesh" },
      { name: "AES-256", level: "Encryption" },
      { name: "Client-Side E2EE", level: "Privacy" },
      { name: "OpenVPN", level: "Connectivity" }
    ],
    icon: Shield
  },
  {
    category: "Integration",
    items: [
      { name: "Maplibre GL", level: "Mapping" },
      { name: "Telegram Bot API", level: "Alerts" },
      { name: "Background Services", level: "Telemetry" },
      { name: "Serverless Containers", level: "Processing" }
    ],
    icon: Terminal
  }
];

export default function Stack() {
  return (
    <section id="stack" className="py-20 md:py-32 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <h2 className="font-mono text-[10px] uppercase tracking-widest text-purple-500 font-semibold mb-4">The Engineering Stack</h2>
          <h3 className="text-3xl md:text-5xl font-semibold text-neutral-50 max-w-2xl leading-tight">
            Built on a foundation of <br />
            <span className="text-neutral-500">documented, high-stakes expertise.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {techGroups.map((group, index) => (
            <div key={index} className="p-8 border border-neutral-900 bg-neutral-950/50 hover:border-purple-500/30 transition-colors group">
              <div className="flex items-center space-x-3 mb-8">
                <group.icon className="w-5 h-5 text-neutral-600 group-hover:text-purple-500 transition-colors" />
                <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-400">{group.category}</h4>
              </div>
              
              <ul className="space-y-4">
                {group.items.map((item, i) => (
                  <li key={i} className="flex justify-between items-center">
                    <span className="text-neutral-50 font-medium">{item.name}</span>
                    <span className="font-mono text-[9px] uppercase tracking-tighter text-neutral-600 border border-neutral-900 px-1.5 py-0.5 rounded-sm">
                      {item.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
