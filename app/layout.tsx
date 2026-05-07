import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dunning Optimizer – Recover Failed Subscription Payments",
  description: "A/B test retry timing, email sequences, and payment prompts to recover more failed subscription payments automatically."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="24fb5dc5-bdc9-4614-8fb8-ddf52b152f37"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
