import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qaption - Video Captioning Platform",
  description: "Professional video captioning with AI-powered transcription",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
