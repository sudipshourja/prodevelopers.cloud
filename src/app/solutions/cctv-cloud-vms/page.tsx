import type { Metadata } from "next";
import CctvClient from "./CctvClient";

export const metadata: Metadata = {
  title: "CCTV Cloud VMS (Zero-Trust) | ProDevelopers Cloud",
  description: "A comprehensive Cloud Video Management System with client-side AES-256 encryption on Google Cloud Storage. High-stakes surveillance engineering, Wireguard VPN meshes, and sub-500ms video playback latency.",
  openGraph: {
    title: "CCTV Cloud VMS (Zero-Trust) | ProDevelopers Cloud",
    description: "Cloud surveillance without upfront hardware. Client-side encrypted footage on Google Cloud Storage. 100% private, Wireguard-powered remote camera links.",
    url: "https://prodevelopers.cloud/solutions/cctv-cloud-vms",
    siteName: "ProDevelopers Cloud",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CCTV Cloud VMS System Architecture | ProDevelopers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CCTV Cloud VMS (Zero-Trust) | ProDevelopers Cloud",
    description: "Zero-trust surveillance systems with client-side encryption. Secure Google Cloud Storage integration.",
    images: ["/og-image.png"],
  },
};

export default function CctvPage() {
  return <CctvClient />;
}
