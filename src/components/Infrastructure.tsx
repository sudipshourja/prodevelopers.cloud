import { Layers, Zap, HardDrive, Network, Lock, Repeat } from 'lucide-react';

const specs = [
  {
    title: "High-Concurrency Backend",
    description: "Distributed systems built for massive scale, utilizing Go, Rust, or Node.js for performance-critical logic.",
    icon: Zap
  },
  {
    title: "Custom Media Engines",
    description: "FFmpeg-based transcoding and WebRTC streaming pipelines optimized for cost and latency.",
    icon: Layers
  },
  {
    title: "Protocol Expertise",
    description: "Low-level implementation of MQTT, WebSockets, and specialized binary protocols for IoT and Real-time apps.",
    icon: Network
  },
  {
    title: "Encrypted Data Mesh",
    description: "Wireguard-based private networks and client-side AES-256 encryption as the default security baseline.",
    icon: Lock
  },
  {
    title: "Cost-Engineered Storage",
    description: "Replacing expensive SaaS storage with S3-compatible, edge-native object storage solutions.",
    icon: HardDrive
  },
  {
    title: "Self-Healing DevOps",
    description: "IaC with Terraform/Pulumi and automated recovery workflows to ensure 99.99% infrastructure availability.",
    icon: Repeat
  }
];

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="py-20 md:py-32 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 md:gap-24">
          <div className="lg:col-span-1 space-y-6">
            <h2 className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 font-semibold">Technical Depth</h2>
            <h3 className="text-3xl md:text-4xl font-semibold text-neutral-50 leading-tight">
              Infrastructure <br />
              as a <span className="text-neutral-500 text-pretty">Specialized Craft.</span>
            </h3>
            <p className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-md">
              We don't just deploy to the cloud; we engineer the cloud. Our systems are designed to minimize OPEX while maximizing throughput and privacy.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
            {specs.map((spec, index) => (
              <div key={index} className="space-y-4">
                <spec.icon className="w-5 h-5 text-purple-500" />
                <h4 className="font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200">{spec.title}</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {spec.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
