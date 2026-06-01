"use client";

import { useState } from "react";
import {
  ArrowLeft, Shield, Server, Cpu, Database,
  Network, Lock, ArrowUpRight,
  Play, RefreshCw
} from "lucide-react";
import Link from "next/link";
import DemoModal from "@/components/DemoModal";


export default function CctvClient() {
  const [cameras, setCameras] = useState(8);
  const [retention, setRetention] = useState(3); // in months
  const [fps, setFps] = useState(12); // 12 or 24
  const [isDemoOpen, setIsDemoOpen] = useState(false);


  // Pricing formula based on provided specs: 12 FPS HD footage with 3 months retention is ~1.26 to 2.51 USD/month
  const baseRatePerCameraMonth = fps === 12 ? 0.42 : 0.84;
  const storageCostPerMonth = cameras * retention * baseRatePerCameraMonth;
  // Apply hypothetical GCP discount for minimal motion & volume
  const optimizedCost = storageCostPerMonth * 0.6; // 40% minimal motion/GCP discount saving

  // Traditional hardware NVR/SAN cost equivalent (Upfront hardware + hard drives divided over 3 years + maintenance)
  const traditionalHardwareCost = (cameras * 15) + (35 * retention);

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
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10">
            <Shield className="w-3 h-3 text-purple-400 animate-pulse" />
            <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-purple-400 font-semibold">Self-Hosted Cloud License</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-neutral-50">
            CCTV Cloud VMS <br />
            <span className="text-neutral-500 text-2xl sm:text-4xl md:text-5xl text-pretty">
              Client-side encrypted surveillance. <br />Licensed self-managed deployment.
            </span>
          </h1>

          <p className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-3xl">
            A comprehensive, cloud-native Video Management System (VMS) designed as licensed software for self-managed deployment. Run the entire secure, zero-trust pipeline directly in your Google Cloud environment, paying raw cloud costs with absolute code and infrastructure ownership.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => setIsDemoOpen(true)}
              className="group px-6 py-3.5 bg-neutral-50 text-neutral-950 font-mono text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-neutral-200 transition-colors inline-flex items-center cursor-pointer"
              id="btn-vms-demo"
            >
              <Play className="mr-2 w-4 h-4 fill-current text-neutral-950" />
              Watch Demo Video
              <ArrowUpRight className="ml-2 w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <a
              href="mailto:hello@prodevelopers.tech?subject=Inquiry:%20CCTV%20Cloud%20VMS%20Software"
              className="px-6 py-3.5 bg-neutral-950 border border-neutral-800 font-mono text-xs uppercase tracking-wider text-neutral-300 hover:text-neutral-50 hover:bg-neutral-900 transition-colors rounded-sm"
              id="btn-vms-contact"
            >
              Request Integration
            </a>
          </div>
        </header>

        {/* Service Model & Cross-Linking Section */}
        <section className="border border-purple-500/20 bg-gradient-to-r from-neutral-950 via-purple-950/10 to-neutral-950 p-8 md:p-12 rounded-sm space-y-6 md:space-y-8" id="service-model">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400 font-mono text-[9px] uppercase tracking-widest font-semibold">
                Licensed Software
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-neutral-50 tracking-tight">
                Self-Managed Deployment & Complete Infrastructure Ownership
              </h3>
              <p className="text-sm md:text-base text-neutral-400 leading-relaxed max-w-3xl">
                Deploy this entire application directly within your own cloud architecture (GCP, AWS, or Cloudflare) via a software license. Pay raw cloud costs with zero middleman markups, customize any layer of the codebase, and bill yourself directly.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right border-t lg:border-t-0 lg:border-l border-neutral-900 pt-6 lg:pt-0 lg:pl-8 space-y-4">
              <p className="text-xs text-neutral-500 leading-relaxed font-sans">
                Prefer a zero-overhead, plug-and-play solution where we handle 100% of server maintenance and updates? Check out our fully managed SaaS edition.
              </p>
              <a
                href="https://prodevelopers.tech/work/cctv-cloud-vms"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-mono uppercase tracking-widest text-purple-400 hover:text-purple-300 font-bold group"
              >
                Go to Managed Edition
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-purple-400" />
              </a>
            </div>
          </div>
        </section>

        {/* Technical Architecture Section */}
        <section className="space-y-10 border-t border-neutral-900 pt-16" id="architecture">
          <div className="space-y-4">
            <h2 className="font-mono text-[10px] uppercase tracking-widest text-purple-500 font-semibold">Systems Architecture</h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-neutral-50">Secure VPN Tunneling & Client-Side Encryption</h3>
            <p className="text-neutral-400 text-sm md:text-base max-w-3xl leading-relaxed">
              Surveillance devices (DVRs, NVRs, and IP cameras) at distributed remote sites establish a private, peer-to-peer **Wireguard tunnel** to an on-premise local buffer server. Footage is sliced, client-side encrypted using **AES-256**, and synced directly to Google Cloud Storage. No public IPs or open inbound ports are required.
            </p>
          </div>

          {/* Custom Inline SVG Architecture Diagram */}
          <div className="p-6 md:p-8 rounded-sm border border-neutral-900 bg-neutral-950/50 flex flex-col items-center">
            <div className="w-full max-w-4xl">
              <svg viewBox="0 0 800 320" className="w-full h-auto text-neutral-400 font-mono text-[10px] select-none">
                {/* Definitions */}
                <defs>
                  <linearGradient id="purpleGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1e1b4b" stopOpacity="0" />
                    <stop offset="50%" stopColor="#a855f7" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0" />
                  </linearGradient>
                  <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#737373" />
                  </marker>
                  <marker id="arrow-purple" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#a855f7" />
                  </marker>
                </defs>

                {/* Background Grid Lines */}
                <line x1="100" y1="0" x2="100" y2="320" stroke="#171717" strokeDasharray="5,5" />
                <line x1="380" y1="0" x2="380" y2="320" stroke="#171717" strokeDasharray="5,5" />
                <line x1="660" y1="0" x2="660" y2="320" stroke="#171717" strokeDasharray="5,5" />

                {/* Left Side: Remote Devices */}
                <g transform="translate(40, 40)">
                  <rect x="0" y="0" width="160" height="240" rx="4" fill="#090909" stroke="#262626" />
                  <text x="80" y="25" textAnchor="middle" fill="#737373" className="font-semibold uppercase tracking-wider text-[9px]">Remote Sites</text>

                  {/* Camera 1 */}
                  <g transform="translate(15, 50)">
                    <rect x="0" y="0" width="130" height="45" rx="2" fill="#171717" stroke="#404040" />
                    <text x="15" y="26" fill="#fafafa">IP Camera / RTSP</text>
                    <circle cx="115" cy="22" r="4" fill="#a855f7" className="animate-pulse" />
                  </g>
                  {/* Camera 2 */}
                  <g transform="translate(15, 110)">
                    <rect x="0" y="0" width="130" height="45" rx="2" fill="#171717" stroke="#404040" />
                    <text x="15" y="26" fill="#fafafa">Local NVR/DVR</text>
                    <circle cx="115" cy="22" r="4" fill="#525252" />
                  </g>
                  {/* Wireguard Tunnel Node */}
                  <g transform="translate(15, 180)">
                    <rect x="0" y="0" width="130" height="45" rx="2" fill="#0c0a09" stroke="#a855f7" strokeWidth="1" />
                    <text x="15" y="26" fill="#c084fc" className="font-semibold">Wireguard Node</text>
                    <text x="15" y="37" fill="#737373" className="text-[8px]">No Public IP Req.</text>
                  </g>
                </g>

                {/* Center: On-Prem Server (Encryption) */}
                <g transform="translate(300, 75)">
                  <rect x="0" y="0" width="180" height="170" rx="4" fill="#090909" stroke="#a855f7" strokeWidth="1.5" />
                  <text x="90" y="25" textAnchor="middle" fill="#a855f7" className="font-semibold uppercase tracking-widest text-[9px]">On-Prem Gateway</text>

                  {/* Encryption Module */}
                  <g transform="translate(15, 45)">
                    <rect x="0" y="0" width="150" height="45" rx="2" fill="#171717" stroke="#262626" />
                    <text x="15" y="25" fill="#fafafa" className="font-semibold">AES-256 Encryption</text>
                    <text x="15" y="36" fill="#737373" className="text-[8px]">Zero-Trust Envelope</text>
                  </g>
                  {/* Local Ring Buffer */}
                  <g transform="translate(15, 105)">
                    <rect x="0" y="0" width="150" height="45" rx="2" fill="#171717" stroke="#262626" />
                    <text x="15" y="25" fill="#fafafa">SSD Ring Buffer</text>
                    <text x="15" y="36" fill="#737373" className="text-[8px]">Network Loss Protection</text>
                  </g>
                </g>

                {/* Right Side: Google Cloud Storage */}
                <g transform="translate(580, 75)">
                  <rect x="0" y="0" width="180" height="170" rx="4" fill="#090909" stroke="#262626" />
                  <text x="90" y="25" textAnchor="middle" fill="#737373" className="font-semibold uppercase tracking-wider text-[9px]">Google Cloud Storage</text>

                  {/* encrypted storage buckets */}
                  <g transform="translate(15, 45)">
                    <rect x="0" y="0" width="150" height="45" rx="2" fill="#171717" stroke="#262626" />
                    <text x="15" y="25" fill="#fafafa" className="font-semibold">Encrypted S3 Bucket</text>
                    <text x="15" y="36" fill="#737373" className="text-[8px]">Cost-Optimized Archive</text>
                  </g>
                  {/* Web Interface API */}
                  <g transform="translate(15, 105)">
                    <rect x="0" y="0" width="150" height="45" rx="2" fill="#171717" stroke="#262626" />
                    <text x="15" y="25" fill="#fafafa">Web Stream Decoder</text>
                    <text x="15" y="36" fill="#737373" className="text-[8px]">Secure Client Playback</text>
                  </g>
                </g>

                {/* Connections (Lines and Arrows) */}
                {/* WG tunnel to Server */}
                <path d="M 215 202 L 255 202 L 255 160 L 290 160" fill="none" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4,3" markerEnd="url(#arrow-purple)" />
                {/* On-prem to GCS */}
                <path d="M 485 160 L 570 160" fill="none" stroke="#a855f7" strokeWidth="1.5" markerEnd="url(#arrow-purple)" />

                {/* Labels */}
                <rect x="215" y="138" width="70" height="16" rx="2" fill="#090909" stroke="#262626" />
                <text x="250" y="250" textAnchor="middle" fill="#a855f7" className="text-[8px] font-mono">Wireguard</text>

                <rect x="500" y="138" width="60" height="16" rx="2" fill="#090909" stroke="#262626" />
                <text x="530" y="149" textAnchor="middle" fill="#737373" className="text-[8px] font-mono">HTTPS</text>
              </svg>
            </div>
            <p className="text-neutral-500 font-mono text-[9px] uppercase tracking-widest mt-4">
              Fig 1.0 — End-to-end zero-trust secure telemetry and encrypted ingestion.
            </p>
          </div>
        </section>

        {/* Interactive ROI Pricing Section */}
        <section className="space-y-12 border-t border-neutral-900 pt-16" id="roi-calculator">
          <div className="space-y-4 max-w-3xl">
            <h2 className="font-mono text-[10px] uppercase tracking-widest text-purple-500 font-semibold">Cost Efficiency</h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-neutral-50">Interactive Storage Cost Calculator</h3>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              Standard commercial VMS solutions hide heavy margins in storage and egress markup fees. By hosting on Google Cloud Storage with client-side compression, we bypass the middleman. Compute is scale-to-zero, meaning you pay only for raw storage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Slider Controls */}
            <div className="lg:col-span-7 p-8 rounded-sm border border-neutral-900 bg-neutral-950/50 space-y-8 flex flex-col justify-center">
              {/* Cameras Slider */}
              <div className="space-y-3">
                <div className="flex justify-between font-mono text-xs text-neutral-400">
                  <span className="uppercase tracking-wider">Number of Surveillance Cameras</span>
                  <span className="text-purple-400 font-bold">{cameras} Channels</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="64"
                  value={cameras}
                  onChange={(e) => setCameras(parseInt(e.target.value))}
                  className="w-full accent-purple-500 bg-neutral-900 rounded-lg appearance-none h-1 cursor-pointer"
                  id="range-cameras"
                />
                <div className="flex justify-between font-mono text-[9px] text-neutral-600">
                  <span>2 Channels</span>
                  <span>32 Channels</span>
                  <span>64 Channels</span>
                </div>
              </div>

              {/* Retention Slider */}
              <div className="space-y-3">
                <div className="flex justify-between font-mono text-xs text-neutral-400">
                  <span className="uppercase tracking-wider">Footage Retention Period</span>
                  <span className="text-purple-400 font-bold">{retention} Months</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={retention}
                  onChange={(e) => setRetention(parseInt(e.target.value))}
                  className="w-full accent-purple-500 bg-neutral-900 rounded-lg appearance-none h-1 cursor-pointer"
                  id="range-retention"
                />
                <div className="flex justify-between font-mono text-[9px] text-neutral-600">
                  <span>1 Month (standard)</span>
                  <span>6 Months</span>
                  <span>12 Months (archive-tier)</span>
                </div>
              </div>

              {/* Quality Settings */}
              <div className="space-y-3">
                <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider block">Recording Frame Rate & Quality</span>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setFps(12)}
                    className={`py-3 text-xs font-mono uppercase tracking-wider border rounded-sm transition-all ${fps === 12
                      ? "bg-purple-950/30 border-purple-500 text-purple-400"
                      : "bg-neutral-950 border-neutral-900 text-neutral-500 hover:border-neutral-800"
                      }`}
                    id="btn-fps-12"
                  >
                    12 FPS (HD Stream)
                  </button>
                  <button
                    onClick={() => setFps(24)}
                    className={`py-3 text-xs font-mono uppercase tracking-wider border rounded-sm transition-all ${fps === 24
                      ? "bg-purple-950/30 border-purple-500 text-purple-400"
                      : "bg-neutral-950 border-neutral-900 text-neutral-500 hover:border-neutral-800"
                      }`}
                    id="btn-fps-24"
                  >
                    24 FPS (Full HD Stream)
                  </button>
                </div>
              </div>
            </div>

            {/* Price Calculations */}
            <div className="lg:col-span-5 p-8 rounded-sm border border-purple-500/20 bg-purple-950/10 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="font-mono text-[9px] uppercase tracking-widest text-purple-400 bg-purple-500/10 px-2 py-1 border border-purple-500/20 rounded-sm">
                  ProDevelopers Pricing Estimate
                </span>
                <p className="text-sm text-neutral-400 leading-relaxed pt-2">
                  Estimated monthly cloud cost including GCS lifecycle optimization, client-side block compression, and zero-egress streaming architecture.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-baseline">
                  <span className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-50">$</span>
                  <span className="text-5xl md:text-6xl font-bold tracking-tighter text-neutral-50" id="txt-calc-price">
                    {optimizedCost.toFixed(2)}
                  </span>
                  <span className="text-neutral-500 text-sm font-mono ml-2">/ month</span>
                </div>
                <p className="text-xs text-purple-400 font-mono flex items-center">
                  <RefreshCw className="w-3.5 h-3.5 mr-1.5 animate-spin-slow" />
                  Estimated equivalent: ${(optimizedCost / cameras).toFixed(2)} / camera
                </p>
              </div>

              <div className="border-t border-purple-900/50 pt-6 space-y-2">
                <div className="flex justify-between text-xs text-neutral-400">
                  <span>Traditional Cloud Cost:</span>
                  <span className="line-through">${storageCostPerMonth.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs text-neutral-400">
                  <span>Hardware NVR/SAN (Amortized):</span>
                  <span>${traditionalHardwareCost.toFixed(2)} / mo</span>
                </div>
                <div className="flex justify-between text-xs font-semibold text-purple-400 pt-1 font-mono uppercase tracking-wider border-t border-purple-900/30">
                  <span>Estimated Savings:</span>
                  <span>~80%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Detail Cards */}
        <section className="space-y-12 border-t border-neutral-900 pt-16" id="benefits">
          <div className="space-y-4">
            <h2 className="font-mono text-[10px] uppercase tracking-widest text-purple-500 font-semibold">Value Proposition</h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-neutral-50">Enterprise-Grade Performance. Small-Business Costs.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border border-neutral-900 bg-neutral-950 hover:border-purple-500/20 transition-all rounded-sm space-y-4">
              <Lock className="w-5 h-5 text-purple-400" />
              <h4 className="font-mono text-sm uppercase tracking-wider font-semibold text-neutral-200">Exclusive Data Privacy</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Google handles storage blocks, but since footage is encrypted on-premise using client-owned keys, nobody but you possesses the decrypt key. Your business stays 100% compliant and fully private.
              </p>
            </div>

            <div className="p-6 border border-neutral-900 bg-neutral-950 hover:border-purple-500/20 transition-all rounded-sm space-y-4">
              <RefreshCw className="w-5 h-5 text-purple-400" />
              <h4 className="font-mono text-sm uppercase tracking-wider font-semibold text-neutral-200">Real-Time Sync & Backup</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                CCTV video streams are cached to a local SSD ring buffer to safeguard against internet dropouts, then stream-synced incrementally to prevent high bandwidth rushes.
              </p>
            </div>

            <div className="p-6 border border-neutral-900 bg-neutral-950 hover:border-purple-500/20 transition-all rounded-sm space-y-4">
              <Cpu className="w-5 h-5 text-purple-400" />
              <h4 className="font-mono text-sm uppercase tracking-wider font-semibold text-neutral-200">Zero Maintenance Overhead</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Ditch disk swapping and server cleanups. The Cloud VMS automatically executes housekeeping, maintains camera link health, and updates firmware securely behind its VPN layers.
              </p>
            </div>

            <div className="p-6 border border-neutral-900 bg-neutral-950 hover:border-purple-500/20 transition-all rounded-sm space-y-4">
              <Database className="w-5 h-5 text-purple-400" />
              <h4 className="font-mono text-sm uppercase tracking-wider font-semibold text-neutral-200">Scalability On Demand</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Add cameras at new locations or increase retention limits in seconds. Scaling up cloud buckets requires zero hardware purchases, rewiring, or technical visits.
              </p>
            </div>

            <div className="p-6 border border-neutral-900 bg-neutral-950 hover:border-purple-500/20 transition-all rounded-sm space-y-4">
              <Network className="w-5 h-5 text-purple-400" />
              <h4 className="font-mono text-sm uppercase tracking-wider font-semibold text-neutral-200">Dispersed Remote Access</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Monitor multi-city warehouses, storage units, and retail outlets from a single unified portal. Remote streaming functions natively without static or public IPv4 rentals.
              </p>
            </div>

            <div className="p-6 border border-neutral-900 bg-neutral-950 hover:border-purple-500/20 transition-all rounded-sm space-y-4">
              <Server className="w-5 h-5 text-purple-400" />
              <h4 className="font-mono text-sm uppercase tracking-wider font-semibold text-neutral-200">Custom Business Logic</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Built-in customization support allows hooks into POS platforms, automatic telemetry logging, or scheduled backup behaviors matching your precise business requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Specification Table */}
        <section className="space-y-12 border-t border-neutral-900 pt-16" id="specs">
          <div className="space-y-4">
            <h2 className="font-mono text-[10px] uppercase tracking-widest text-purple-500 font-semibold">Technical Specifications</h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-neutral-50">High-Performance Protocols & Encodings</h3>
          </div>

          <div className="border border-neutral-900 rounded-sm overflow-hidden bg-neutral-950/50">
            <div className="grid grid-cols-1 md:grid-cols-2 border-b border-neutral-900 p-4 md:p-6 gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">Stream Ingestion</span>
              <span className="text-sm text-neutral-200">RTSP, ONVIF Profile S/G/T, RTMP pipelines</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 border-b border-neutral-900 p-4 md:p-6 gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">Video Transcoding</span>
              <span className="text-sm text-neutral-200">GPU-accelerated H.264 / H.265 compression, edge-level scaling</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 border-b border-neutral-900 p-4 md:p-6 gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">Encryption Layer</span>
              <span className="text-sm text-neutral-200">AES-256-GCM block encryption with localized KMIP / PKCS#11 storage</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 border-b border-neutral-900 p-4 md:p-6 gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">Mesh VPN Network</span>
              <span className="text-sm text-neutral-200">Wireguard protocol, automated hole-punching behind CGNAT setups</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 border-b border-neutral-900 p-4 md:p-6 gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">Storage Backend</span>
              <span className="text-sm text-neutral-200">Google Cloud Storage (Standard &rarr; Nearline &rarr; Archive lifecycle rules)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 border-b border-neutral-900 p-4 md:p-6 gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">Client Playback</span>
              <span className="text-sm text-neutral-200">WebRTC low-latency streaming, incremental HTTP Live Streaming (HLS)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 border-b border-neutral-900 p-4 md:p-6 gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">Mobile Ingestion</span>
              <span className="text-sm text-neutral-200">Active mobile surveillance integration allowing mobile devices to pipe live feeds</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 p-4 md:p-6 gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">P2P Mesh Network</span>
              <span className="text-sm text-neutral-200">Bespoke peer-to-peer storage network layer distributing block fragments to maximize disaster recovery safety</span>
            </div>
          </div>
        </section>
      </article>

      <DemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        videoUrl="https://www.youtube.com/embed/HL8bNlGKlUA"
        projectId="cctv-cloud-vms"
      />
    </div>
  );
}
