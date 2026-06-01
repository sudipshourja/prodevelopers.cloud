"use client";

import { useState } from "react";
import {
  ArrowLeft, Cpu, Database, ArrowUpRight,
  Play,
  Smartphone, Bot, Video, Activity, MapPin, Users
} from "lucide-react";
import Link from "next/link";
import DemoModal from "@/components/DemoModal";

export default function FleetCamClient() {
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
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10">
            <Activity className="w-3 h-3 text-purple-400 animate-pulse" />
            <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-purple-400 font-semibold">Self-Hosted Cloud License</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-neutral-50">
            FleetCam Integration <br />
            <span className="text-neutral-500 text-2xl sm:text-4xl md:text-5xl text-pretty">
              Real-time video & GPS telemetry. <br />Licensed self-managed deployment.
            </span>
          </h1>

          <p className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-3xl">
            A comprehensive, battle-tested fleet surveillance system designed as licensed software for self-managed cloud deployment. Maintain your own private Traccar instances, scale GPS concurrency tracking, and manage video signal streams natively under absolute data sovereignty.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => setIsDemoOpen(true)}
              className="group px-6 py-3.5 bg-neutral-50 text-neutral-950 font-mono text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-neutral-200 transition-colors inline-flex items-center cursor-pointer"
              id="btn-fleet-demo"
            >
              <Play className="mr-2 w-4 h-4 fill-current text-neutral-950" />
              Watch Demo Video
              <ArrowUpRight className="ml-2 w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <a
              href="mailto:hello@prodevelopers.tech?subject=Inquiry:%20FleetCam%20GPS%20Video%20Integration"
              className="px-6 py-3.5 bg-neutral-950 border border-neutral-800 font-mono text-xs uppercase tracking-wider text-neutral-300 hover:text-neutral-50 hover:bg-neutral-900 transition-colors rounded-sm"
              id="btn-fleet-contact"
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
                Self-Hosted Fleet Solution & Private Server Control
              </h3>
              <p className="text-sm md:text-base text-neutral-400 leading-relaxed max-w-3xl">
                Purchase a software license to self-host Traccar core servers, signaling gateways, and SQLite databases within your private cloud environment. Ensure 100% compliance, zero data visibility to third parties, and direct carrier pricing.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right border-t lg:border-t-0 lg:border-l border-neutral-900 pt-6 lg:pt-0 lg:pl-8 space-y-4">
              <p className="text-xs text-neutral-500 leading-relaxed font-sans">
                Prefer a zero-overhead, turnkey SaaS where we handle the signaling servers and Traccar engine scaling? Check out our fully managed fleet tracking edition.
              </p>
              <a
                href="https://prodevelopers.tech/work/fleetcam-gps-video"
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
            <h3 className="text-2xl md:text-3xl font-semibold text-neutral-50">Low-Latency Video Pipelines & Concurrency Mapping</h3>
            <p className="text-neutral-400 text-sm md:text-base max-w-3xl leading-relaxed">
              Mobile units deployed in vehicles run a robust React Native **background service**. Standard GPS data is buffered locally inside a lightweight **SQLite database** to secure telemetry against cellular dead zones, then uploaded in batches. On-demand video uses a secure **WebRTC connection** to stream real-time camera footage to the Traccar dashboard and Telegram Bot instantly.
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

                {/* Left: Vehicle Node */}
                <g transform="translate(40, 40)">
                  <rect x="0" y="0" width="160" height="240" rx="4" fill="#090909" stroke="#262626" />
                  <text x="80" y="25" textAnchor="middle" fill="#737373" className="font-semibold uppercase tracking-wider text-[9px]">Vehicle Node</text>

                  {/* React Native Service */}
                  <g transform="translate(15, 50)">
                    <rect x="0" y="0" width="130" height="45" rx="2" fill="#171717" stroke="#404040" />
                    <text x="15" y="26" fill="#fafafa">React Native App</text>
                    <circle cx="115" cy="22" r="4" fill="#a855f7" className="animate-pulse" />
                  </g>
                  {/* Local SQLite Buffer */}
                  <g transform="translate(15, 110)">
                    <rect x="0" y="0" width="130" height="45" rx="2" fill="#171717" stroke="#404040" />
                    <text x="15" y="26" fill="#fafafa">SQLite Buffer</text>
                    <text x="15" y="37" fill="#737373" className="text-[8px]">Offline Caching Queue</text>
                  </g>
                  {/* Camera & GPS API */}
                  <g transform="translate(15, 180)">
                    <rect x="0" y="0" width="130" height="45" rx="2" fill="#0c0a09" stroke="#a855f7" strokeWidth="1" />
                    <text x="15" y="26" fill="#c084fc" className="font-semibold">WebRTC / GPS Core</text>
                    <text x="15" y="37" fill="#737373" className="text-[8px]">Adaptive Bitrate Stream</text>
                  </g>
                </g>

                {/* Center: Traccar Server & Media Gateway */}
                <g transform="translate(300, 75)">
                  <rect x="0" y="0" width="180" height="170" rx="4" fill="#090909" stroke="#a855f7" strokeWidth="1.5" />
                  <text x="90" y="25" textAnchor="middle" fill="#a855f7" className="font-semibold uppercase tracking-widest text-[9px]">Central Backend</text>

                  {/* Traccar Core */}
                  <g transform="translate(15, 45)">
                    <rect x="0" y="0" width="150" height="45" rx="2" fill="#171717" stroke="#262626" />
                    <text x="15" y="25" fill="#fafafa" className="font-semibold">Traccar Engine</text>
                    <text x="15" y="36" fill="#737373" className="text-[8px]">GPS Telemetry Decoder</text>
                  </g>
                  {/* WebRTC Video Gateway */}
                  <g transform="translate(15, 105)">
                    <rect x="0" y="0" width="150" height="45" rx="2" fill="#171717" stroke="#262626" />
                    <text x="15" y="25" fill="#fafafa">WebRTC Gateway</text>
                    <text x="15" y="36" fill="#737373" className="text-[8px]">P2P Stream Signaling</text>
                  </g>
                </g>

                {/* Right: Client / Admin Interfaces */}
                <g transform="translate(580, 75)">
                  <rect x="0" y="0" width="180" height="170" rx="4" fill="#090909" stroke="#262626" />
                  <text x="90" y="25" textAnchor="middle" fill="#737373" className="font-semibold uppercase tracking-wider text-[9px]">Surveillance Client</text>

                  {/* Telegram Bot */}
                  <g transform="translate(15, 45)">
                    <rect x="0" y="0" width="150" height="45" rx="2" fill="#171717" stroke="#262626" />
                    <text x="15" y="25" fill="#fafafa" className="font-semibold">Telegram Bot</text>
                    <text x="15" y="36" fill="#737373" className="text-[8px]">Instant Alerts & Snaps</text>
                  </g>
                  {/* Web Dashboard */}
                  <g transform="translate(15, 105)">
                    <rect x="0" y="0" width="150" height="45" rx="2" fill="#171717" stroke="#262626" />
                    <text x="15" y="25" fill="#fafafa">Traccar Portal</text>
                    <text x="15" y="36" fill="#737373" className="text-[8px]">Video Overlay on Map</text>
                  </g>
                </g>

                {/* Connection lines */}
                {/* Vehicle -> Central */}
                <path d="M 215 202 L 255 202 L 255 160 L 290 160" fill="none" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4,3" markerEnd="url(#arrow-purple)" />
                {/* Central -> Client */}
                <path d="M 485 160 L 570 160" fill="none" stroke="#a855f7" strokeWidth="1.5" markerEnd="url(#arrow-purple)" />

                {/* Labels */}
                <rect x="220" y="138" width="60" height="16" rx="2" fill="#090909" stroke="#262626" />
                <text x="250" y="149" textAnchor="middle" fill="#a855f7" className="text-[7.5px] font-mono">Cellular 4G</text>

                <rect x="500" y="138" width="60" height="16" rx="2" fill="#090909" stroke="#262626" />
                <text x="530" y="149" textAnchor="middle" fill="#737373" className="text-[8px] font-mono">WebRTC</text>
              </svg>
            </div>
            <p className="text-neutral-500 font-mono text-[9px] uppercase tracking-widest mt-4">
              Fig 2.0 — Dual telemetry & sub-500ms WebRTC video synchronization system.
            </p>
          </div>
        </section>



        {/* Benefits Detail Cards */}
        <section className="space-y-12 border-t border-neutral-900 pt-16" id="benefits">
          <div className="space-y-4">
            <h2 className="font-mono text-[10px] uppercase tracking-widest text-purple-500 font-semibold">Value Proposition</h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-neutral-50">Enterprise Logistics. Engineered from the Ground Up.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border border-neutral-900 bg-neutral-950 hover:border-purple-500/20 transition-all rounded-sm space-y-4">
              <Smartphone className="w-5 h-5 text-purple-400" />
              <h4 className="font-mono text-sm uppercase tracking-wider font-semibold text-neutral-200">React Native Background Service</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Runs completely silent in the background on android/iOS in-vehicle hardware without distracting drivers, capturing telemetry even when the screen is powered down.
              </p>
            </div>

            <div className="p-6 border border-neutral-900 bg-neutral-950 hover:border-purple-500/20 transition-all rounded-sm space-y-4">
              <Database className="w-5 h-5 text-purple-400" />
              <h4 className="font-mono text-sm uppercase tracking-wider font-semibold text-neutral-200">SQLite Offline Buffering</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Never lose crucial location history. Our offline system buffers GPS coordinates when cell service is dropped, then automatically pushes batches when a connection is re-established.
              </p>
            </div>

            <div className="p-6 border border-neutral-900 bg-neutral-950 hover:border-purple-500/20 transition-all rounded-sm space-y-4">
              <Bot className="w-5 h-5 text-purple-400" />
              <h4 className="font-mono text-sm uppercase tracking-wider font-semibold text-neutral-200">Telegram Bot Control</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Dispatchers receive real-time automated alerts. Request snapshot grabs or live WebRTC stream sessions using single-tap command prompts directly from standard Telegram chats.
              </p>
            </div>

            <div className="p-6 border border-neutral-900 bg-neutral-950 hover:border-purple-500/20 transition-all rounded-sm space-y-4">
              <Video className="w-5 h-5 text-purple-400" />
              <h4 className="font-mono text-sm uppercase tracking-wider font-semibold text-neutral-200">Low-Latency WebRTC</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Achieve sub-500ms real-time video feedback over cellular carrier connections. Enables instant remote live-monitoring during safety incidents or route investigations.
              </p>
            </div>

            <div className="p-6 border border-neutral-900 bg-neutral-950 hover:border-purple-500/20 transition-all rounded-sm space-y-4">
              <MapPin className="w-5 h-5 text-purple-400" />
              <h4 className="font-mono text-sm uppercase tracking-wider font-semibold text-neutral-200">Traccar Open Integration</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Built fully compliant with the open-source Traccar engine. Supports rapid integration of specialized industrial GPS sensors, door open telemetry, or external temperature probes.
              </p>
            </div>

            <div className="p-6 border border-neutral-900 bg-neutral-950 hover:border-purple-500/20 transition-all rounded-sm space-y-4">
              <Users className="w-5 h-5 text-purple-400" fill="none" />
              <h4 className="font-mono text-sm uppercase tracking-wider font-semibold text-neutral-200">Integrated CRM Module</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Connect vehicles and location updates with active client CRM structures. Link driver IDs, schedule changes, and logistical customer orders in a unified data stack.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Specification Table */}
        <section className="space-y-12 border-t border-neutral-900 pt-16" id="specs">
          <div className="space-y-4">
            <h2 className="font-mono text-[10px] uppercase tracking-widest text-purple-500 font-semibold">Technical Specifications</h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-neutral-50">Robust Real-Time Protocol Configurations</h3>
          </div>

          <div className="border border-neutral-900 rounded-sm overflow-hidden bg-neutral-950/50">
            <div className="grid grid-cols-1 md:grid-cols-2 border-b border-neutral-900 p-4 md:p-6 gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">Mobile Core</span>
              <span className="text-sm text-neutral-200">React Native (iOS/Android), native background services, optimized wake-locks</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 border-b border-neutral-900 p-4 md:p-6 gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">Offline Storage</span>
              <span className="text-sm text-neutral-200">SQLite local buffer, incremental auto-vacuum, high-performance WAL journaling</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 border-b border-neutral-900 p-4 md:p-6 gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">Video Protocol</span>
              <span className="text-sm text-neutral-200">WebRTC peer-to-peer streaming with adaptive bitrate & fallback TURN gateways</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 border-b border-neutral-900 p-4 md:p-6 gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">GPS Engine</span>
              <span className="text-sm text-neutral-200">Traccar Open Source Core Platform, standard protocol integrations</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 border-b border-neutral-900 p-4 md:p-6 gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">Security Layer</span>
              <span className="text-sm text-neutral-200">Wireguard secure VPN tunnel meshes, TLS encrypted payload transfers</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 border-b border-neutral-900 p-4 md:p-6 gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">Alert Dispatcher</span>
              <span className="text-sm text-neutral-200">Telegram Bot API integration with secure webhook routing and snap-frames</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 p-4 md:p-6 gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">CRM Synchronization</span>
              <span className="text-sm text-neutral-200">GraphQL / JSON REST API links sync drivers, routes, and vehicle telematics</span>
            </div>
          </div>
        </section>
      </article>

      <DemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        videoUrl="https://www.youtube.com/embed/XBaxBk4_BLw"
        projectId="fleetcam-gps-video"
      />
    </div>
  );
}
