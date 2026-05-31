import type { Metadata } from "next";
import FleetCamClient from "./FleetCamClient";

export const metadata: Metadata = {
  title: "FleetCam GPS + Video Integration | ProDevelopers Cloud",
  description: "Advanced fleet management and real-time surveillance. Sub-500ms WebRTC streaming, high-concurrency GPS telemetry via Traccar, offline SQLite buffering, and automatic Telegram alerting.",
  openGraph: {
    title: "FleetCam GPS + Video Integration | ProDevelopers Cloud",
    description: "Real-time fleet tracking and WebRTC video surveillance. High-concurrency GPS streaming with seamless Telegram bot notification dispatch.",
    url: "https://prodevelopers.cloud/solutions/fleetcam-gps-video",
    siteName: "ProDevelopers Cloud",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FleetCam GPS and Video System Architecture | ProDevelopers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FleetCam GPS + Video Integration | ProDevelopers Cloud",
    description: "High-performance WebRTC fleet tracking & video surveillance built on Traccar and React Native.",
    images: ["/og-image.png"],
  },
};

export default function FleetCamPage() {
  return <FleetCamClient />;
}
