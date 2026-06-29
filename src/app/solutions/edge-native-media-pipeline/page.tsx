import type { Metadata } from "next";
import EdgeNativeMediaClient from "./EdgeNativeMediaClient";

export const metadata: Metadata = {
  title: "Edge-Native Media Pipeline & Transcoding Engine | prodevelopers Cloud",
  description: "High-efficiency media transcoding and delivery at scale. Zero-egress Cloudflare R2 storage, edge orchestration with Workers & Durable Objects, and FFmpeg serverless containers.",
  openGraph: {
    title: "Edge-Native Media Pipeline & Transcoding Engine | prodevelopers Cloud",
    description: "Serverless adaptive video packaging (HLS/DASH) and multi-bitrate encoding utilizing FFmpeg and Cloudflare's edge ecosystem.",
    url: "https://prodevelopers.cloud/solutions/edge-native-media-pipeline",
    siteName: "prodevelopers Cloud",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Edge-Native Media Pipeline Architecture | prodevelopers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edge-Native Media Pipeline & Transcoding Engine | prodevelopers Cloud",
    description: "Automated, serverless multi-bitrate video packaging and delivery powered by FFmpeg & Cloudflare.",
    images: ["/og-image.png"],
  },
};

export default function EdgeNativeMediaPage() {
  return <EdgeNativeMediaClient />;
}
