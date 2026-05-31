"use client";

import { useState } from "react";
import {
  ArrowLeft, Cpu, Database, ArrowUpRight,
  Play, ShieldCheck,
  Server, HardDrive, Zap, ZapOff, PlayCircle, Globe, Video
} from "lucide-react";
import Link from "next/link";
import DemoModal from "@/components/DemoModal";

export default function EdgeNativeMediaClient() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 selection:bg-purple-500/30 font-sans pb-24">
      {/* Header / Navbar */}
      <header className="border-b border-neutral-900 bg-neutral-950/80 backdrop-blur-md sticky top-0 z-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <Link
            href="/#solutions"
            className="inline-flex items-center text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-purple-400 transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Solutions
          </Link>
          <div className="flex items-center space-x-2">
            <Cpu className="w-4 h-4 text-purple-500" />
            <span className="font-mono text-xs font-medium tracking-tight">
              prodevelopers<span className="text-neutral-500">.cloud</span>
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <article className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 md:pt-16 space-y-16 md:space-y-24">

        {/* Hero Section */}
        <header className="space-y-6 md:space-y-8 max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-purple-500/10 bg-purple-500/5">
            <Zap className="w-3 h-3 text-purple-400 animate-pulse" />
            <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-purple-400">Edge-Native Infrastructure</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-neutral-50">
            Edge-Native Media Pipeline <br />
            <span className="text-neutral-500 text-2xl sm:text-4xl md:text-5xl text-pretty">
              High-efficiency transcoding & serverless video delivery.
            </span>
          </h1>

          <p className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-3xl">
            A custom, enterprise-grade media ecosystem that leverages Cloudflare R2, Workers, and Durable Objects to perform automated, scale-to-zero FFmpeg multi-bitrate packaging. Completely eliminates egress fees and expensive "per-minute" platform markups.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => setIsDemoOpen(true)}
              className="group px-6 py-3.5 bg-neutral-50 text-neutral-950 font-mono text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-neutral-200 transition-colors inline-flex items-center cursor-pointer"
              id="btn-media-demo"
            >
              <Play className="mr-2 w-4 h-4 fill-current text-neutral-950" />
              Watch Demo Video
              <ArrowUpRight className="ml-2 w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <a
              href="mailto:hello@prodevelopers.tech?subject=Inquiry:%20Edge-Native%20Media%20Pipeline"
              className="px-6 py-3.5 bg-neutral-950 border border-neutral-800 font-mono text-xs uppercase tracking-wider text-neutral-300 hover:text-neutral-50 hover:bg-neutral-900 transition-colors rounded-sm"
              id="btn-media-contact"
            >
              Request Integration
            </a>
          </div>
        </header>

        {/* Technical Architecture Section */}
        <section className="space-y-10 border-t border-neutral-900 pt-16" id="architecture">
          <div className="space-y-4">
            <h2 className="font-mono text-[10px] uppercase tracking-widest text-purple-500 font-semibold">Systems Architecture</h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-neutral-50">Zero-Egress Serverless Orchestration</h3>
            <p className="text-neutral-400 text-sm md:text-base max-w-3xl leading-relaxed">
              When raw video is uploaded, **Cloudflare Workers** ingest chunked streams, utilizing **Durable Objects** to manage upload state and coordinate chunk sequence. Raw files are committed immediately to **Cloudflare R2** (eliminating egress tax), which triggers **FFmpeg transcoding containers** via edge webhooks. The containers ingest the raw files, perform adaptive multi-bitrate HLS/DASH packaging, and commit segmented chunks back to R2 for low-latency edge cache distribution.
            </p>
          </div>

          {/* Custom Inline SVG Architecture Diagram */}
          <div className="p-6 md:p-8 rounded-sm border border-neutral-900 bg-neutral-950/50 flex flex-col items-center">
            <div className="w-full max-w-4xl">
              <svg viewBox="0 0 800 320" className="w-full h-auto text-neutral-400 font-mono text-[10px] select-none">
                {/* Definitions */}
                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#737373" />
                  </marker>
                  <marker id="arrow-purple" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#a855f7" />
                  </marker>
                </defs>

                {/* Grid Lines */}
                <line x1="100" y1="0" x2="100" y2="320" stroke="#171717" strokeDasharray="5,5" />
                <line x1="380" y1="0" x2="380" y2="320" stroke="#171717" strokeDasharray="5,5" />
                <line x1="660" y1="0" x2="660" y2="320" stroke="#171717" strokeDasharray="5,5" />

                {/* Left: Client Interfaces */}
                <g transform="translate(40, 40)">
                  <rect x="0" y="0" width="160" height="240" rx="4" fill="#090909" stroke="#262626" />
                  <text x="80" y="25" textAnchor="middle" fill="#737373" className="font-semibold uppercase tracking-wider text-[9px]">Client Nodes</text>

                  {/* Upload SDK */}
                  <g transform="translate(15, 50)">
                    <rect x="0" y="0" width="130" height="45" rx="2" fill="#171717" stroke="#404040" />
                    <text x="15" y="26" fill="#fafafa">Upload API Client</text>
                    <circle cx="115" cy="22" r="4" fill="#a855f7" className="animate-pulse" />
                  </g>
                  {/* Local Chunks */}
                  <g transform="translate(15, 110)">
                    <rect x="0" y="0" width="130" height="45" rx="2" fill="#171717" stroke="#404040" />
                    <text x="15" y="26" fill="#fafafa">File Chunking SDK</text>
                    <text x="15" y="37" fill="#737373" className="text-[8px]">Multipart upload buffering</text>
                  </g>
                  {/* HLS Player */}
                  <g transform="translate(15, 180)">
                    <rect x="0" y="0" width="130" height="45" rx="2" fill="#0c0a09" stroke="#a855f7" strokeWidth="1" />
                    <text x="15" y="26" fill="#c084fc" className="font-semibold">HLS/DASH Player</text>
                    <text x="15" y="37" fill="#737373" className="text-[8px]">Adaptive playback client</text>
                  </g>
                </g>

                {/* Center: Cloudflare Edge Stack */}
                <g transform="translate(290, 40)">
                  <rect x="0" y="0" width="200" height="240" rx="4" fill="#090909" stroke="#a855f7" strokeWidth="1.5" />
                  <text x="100" y="25" textAnchor="middle" fill="#a855f7" className="font-semibold uppercase tracking-widest text-[9px]">Cloudflare Edge</text>

                  {/* Workers Router */}
                  <g transform="translate(15, 50)">
                    <rect x="0" y="0" width="170" height="45" rx="2" fill="#171717" stroke="#262626" />
                    <text x="15" y="25" fill="#fafafa" className="font-semibold">Workers Gateway</text>
                    <text x="15" y="36" fill="#737373" className="text-[8px]">Routing & Chunk assembly</text>
                  </g>
                  {/* Durable Objects */}
                  <g transform="translate(15, 110)">
                    <rect x="0" y="0" width="170" height="45" rx="2" fill="#171717" stroke="#262626" />
                    <text x="15" y="25" fill="#fafafa" className="font-semibold">Durable Objects</text>
                    <text x="15" y="36" fill="#737373" className="text-[8px]">Stateful upload sync</text>
                  </g>
                  {/* Cloudflare R2 */}
                  <g transform="translate(15, 175)">
                    <rect x="0" y="0" width="170" height="50" rx="2" fill="#0c0a09" stroke="#a855f7" strokeWidth="1" />
                    <text x="15" y="26" fill="#c084fc" className="font-semibold">R2 Storage (Zero Egress)</text>
                    <text x="15" y="38" fill="#737373" className="text-[8px]">Origin raw / HLS segments</text>
                  </g>
                </g>

                {/* Right: Serverless Transcoding Compute */}
                <g transform="translate(580, 40)">
                  <rect x="0" y="0" width="180" height="240" rx="4" fill="#090909" stroke="#262626" />
                  <text x="90" y="25" textAnchor="middle" fill="#737373" className="font-semibold uppercase tracking-wider text-[9px]">Transcoder Layer</text>

                  {/* Serverless containers */}
                  <g transform="translate(15, 50)">
                    <rect x="0" y="0" width="150" height="45" rx="2" fill="#171717" stroke="#262626" />
                    <text x="15" y="25" fill="#fafafa" className="font-semibold">Serverless Container</text>
                    <text x="15" y="36" fill="#737373" className="text-[8px]">Scale-to-Zero Compute</text>
                  </g>
                  {/* FFmpeg Engine */}
                  <g transform="translate(15, 110)">
                    <rect x="0" y="0" width="150" height="45" rx="2" fill="#171717" stroke="#262626" />
                    <text x="15" y="25" fill="#fafafa">FFmpeg Engine</text>
                    <text x="15" y="36" fill="#737373" className="text-[8px]">Multi-thread video render</text>
                  </g>
                  {/* HLS/DASH packaging */}
                  <g transform="translate(15, 175)">
                    <rect x="0" y="0" width="150" height="45" rx="2" fill="#171717" stroke="#262626" />
                    <text x="15" y="25" fill="#fafafa">HLS/DASH Packager</text>
                    <text x="15" y="36" fill="#737373" className="text-[8px]">Segment slicing / manifests</text>
                  </g>
                </g>

                {/* Connection lines */}
                {/* Client Upload -> Worker */}
                <path d="M 200 115 L 245 115 L 245 115 L 290 115" fill="none" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4,3" markerEnd="url(#arrow-purple)" />
                {/* Worker <-> Durable Objects */}
                <path d="M 375 95 L 375 110" fill="none" stroke="#a855f7" strokeWidth="1.5" />
                {/* Worker -> R2 */}
                <path d="M 405 95 L 405 175" fill="none" stroke="#a855f7" strokeWidth="1.5" markerEnd="url(#arrow-purple)" />
                {/* R2 -> Player */}
                <path d="M 290 205 L 200 205" fill="none" stroke="#a855f7" strokeWidth="1.5" markerEnd="url(#arrow-purple)" />
                {/* Worker -> Transcoder (Webhook trigger) */}
                <path d="M 490 115 L 535 115 L 535 115 L 580 115" fill="none" stroke="#a855f7" strokeWidth="1.5" markerEnd="url(#arrow-purple)" />
                {/* Transcoder <-> R2 (Read/Write segments) */}
                <path d="M 580 200 L 535 200 L 535 200 L 490 200" fill="none" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4,3" markerEnd="url(#arrow-purple)" />

                {/* Labels */}
                <rect x="210" y="70" width="70" height="16" rx="2" fill="#090909" stroke="#262626" />
                <text x="245" y="81" textAnchor="middle" fill="#a855f7" className="text-[7.5px] font-mono">HTTPS Chunks</text>

                <rect x="500" y="70" width="70" height="16" rx="2" fill="#090909" stroke="#262626" />
                <text x="535" y="81" textAnchor="middle" fill="#737373" className="text-[7.5px] font-mono">Edge Event</text>
              </svg>
            </div>
            <p className="text-neutral-500 font-mono text-[9px] uppercase tracking-widest mt-4">
              Fig 1.0 — Serverless, high-efficiency media ingestion, transcoding, and delivery pipeline.
            </p>
          </div>
        </section>

        {/* Value Proposition Cards */}
        <section className="space-y-12 border-t border-neutral-900 pt-16" id="benefits">
          <div className="space-y-4">
            <h2 className="font-mono text-[10px] uppercase tracking-widest text-purple-500 font-semibold">Value Proposition</h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-neutral-50">Enterprise Streaming Performance. Zero Markup Pricing.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border border-neutral-900 bg-neutral-950 hover:border-purple-500/20 transition-all rounded-sm space-y-4">
              <HardDrive className="w-5 h-5 text-purple-400" />
              <h4 className="font-mono text-sm uppercase tracking-wider font-semibold text-neutral-200">Zero-Egress Storage origin</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Uses Cloudflare R2 as the zero-egress asset origin. Drastically lowers data transfer and retrieval budgets compared to standard cloud providers.
              </p>
            </div>

            <div className="p-6 border border-neutral-900 bg-neutral-950 hover:border-purple-500/20 transition-all rounded-sm space-y-4">
              <Cpu className="w-5 h-5 text-purple-400" />
              <h4 className="font-mono text-sm uppercase tracking-wider font-semibold text-neutral-200">Serverless Transcoding</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Auto-scales parallel processing power on-demand inside highly optimized containers, slicing large raw files into efficient multi-bitrate packages.
              </p>
            </div>

            <div className="p-6 border border-neutral-900 bg-neutral-950 hover:border-purple-500/20 transition-all rounded-sm space-y-4">
              <ZapOff className="w-5 h-5 text-purple-400" />
              <h4 className="font-mono text-sm uppercase tracking-wider font-semibold text-neutral-200">Scale-to-Zero Cost Model</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Eliminates expensive pre-allocated CPU instances. Operates on a pure pay-as-you-use model where costs drop to exactly zero during idle periods.
              </p>
            </div>

            <div className="p-6 border border-neutral-900 bg-neutral-950 hover:border-purple-500/20 transition-all rounded-sm space-y-4">
              <Database className="w-5 h-5 text-purple-400" />
              <h4 className="font-mono text-sm uppercase tracking-wider font-semibold text-neutral-200">Durable Objects state</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Orchestrates complex upload coordination and chunk assembly sequencing reliably using Cloudflare’s highly available distributed state machine.
              </p>
            </div>

            <div className="p-6 border border-neutral-900 bg-neutral-950 hover:border-purple-500/20 transition-all rounded-sm space-y-4">
              <PlayCircle className="w-5 h-5 text-purple-400" />
              <h4 className="font-mono text-sm uppercase tracking-wider font-semibold text-neutral-200">Adaptive Streaming Setup</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Builds fully compatible HLS and DASH multi-bitrate streams natively. Selects the perfect quality segment dynamically to protect users from buffering.
              </p>
            </div>

            <div className="p-6 border border-neutral-900 bg-neutral-950 hover:border-purple-500/20 transition-all rounded-sm space-y-4">
              <Globe className="w-5 h-5 text-purple-400" />
              <h4 className="font-mono text-sm uppercase tracking-wider font-semibold text-neutral-200">Edge CDN Routing</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Distributes transcoded streams globally through Cloudflare’s robust edge cache. Bypasses premium middleman CDNs for ultimate latency optimization.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Specification Table */}
        <section className="space-y-12 border-t border-neutral-900 pt-16" id="specs">
          <div className="space-y-4">
            <h2 className="font-mono text-[10px] uppercase tracking-widest text-purple-500 font-semibold">Technical Specifications</h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-neutral-50">High-Performance Pipeline Protocols</h3>
          </div>

          <div className="border border-neutral-900 rounded-sm overflow-hidden bg-neutral-950/50">
            <div className="grid grid-cols-1 md:grid-cols-2 border-b border-neutral-900 p-4 md:p-6 gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">Transcoding Core</span>
              <span className="text-sm text-neutral-200">FFmpeg (multi-threaded libx264, libx265, AAC encoders, optimized adaptive GOP slicing)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 border-b border-neutral-900 p-4 md:p-6 gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">Object Storage</span>
              <span className="text-sm text-neutral-200">Cloudflare R2 (Fully S3-compatible, zero-egress data policy, highly-durable cluster)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 border-b border-neutral-900 p-4 md:p-6 gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">State Coordinator</span>
              <span className="text-sm text-neutral-200">Cloudflare Durable Objects (actor-based state synchronization, in-memory locking)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 border-b border-neutral-900 p-4 md:p-6 gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">Edge Gateway API</span>
              <span className="text-sm text-neutral-200">Cloudflare Workers (V8 JavaScript engine, edge-side chunk validation, fast uploads)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 border-b border-neutral-900 p-4 md:p-6 gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">Scalable Compute</span>
              <span className="text-sm text-neutral-200">Serverless isolated containers (triggered via HTTP webhooks, automatic horizontal scaling)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 border-b border-neutral-900 p-4 md:p-6 gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">Security Layer</span>
              <span className="text-sm text-neutral-200">HMAC-signed video playback links, granular CORS rules, edge token verification</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 p-4 md:p-6 gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">Global CDN Cache</span>
              <span className="text-sm text-neutral-200">Cloudflare Edge Network cache (Brotli payload compression, HTTP/3 protocol)</span>
            </div>
          </div>
        </section>
      </article>

      <DemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        videoUrl="https://www.youtube.com/embed/HQXpeim9Hs0"
        projectId="edge-native-media-pipeline"
      />
    </div>
  );
}
