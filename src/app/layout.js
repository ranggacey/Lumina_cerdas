import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lumina Cerdas",
  generator: "Next.js",
  applicationName: "Lumina Cerdas",
  referrer: "origin-when-cross-origin",
  keywords: "lumina cerdas, website belajar bahasa inggris, belajar bahasa inggris online, bahasa inggris interaktif, belajar bahasa inggris menyenangkan",
  authors: [
    {
      name: "Lumina Cerdas",
      url: "https://lumina-cerdas.vercel.app/",
    },
  ],
  publisher: "Lumina Cerdas",
  creator: "Lumina Cerdas",
  colorScheme: "light dark",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#ffffff",
  appleMobileWebAppCapable: "yes",
  appleMobileWebAppStatusBarStyle: "default",
  appleTouchFullScreen: true,
  appleTouchIcon: "/apple-touch-icon.png",
  appleTouchStartupImage: "/apple-touch-startup-image.png",
  mobileWebAppCapable: "yes",
  mobileWebAppStatusBarStyle: "default",
  manifest: "/site.webmanifest",
  applicationName: "Lumina Cerdas",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  colorScheme: "light dark",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Lumina Cerdas",
    description: "Lumina cerdas adalah website untuk membantu pengguna belajar bahasa Inggris dengan cara yang menyenangkan dan interaktif.",
    url: "https://lumina-cerdas.vercel.app/",
    siteName: "Lumina Cerdas",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  description: "Lumina cerdas adalah website untuk membantu pengguna belajar bahasa Inggris dengan cara yang menyenangkan dan interaktif.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
  appleTouchIcon: "/apple-touch-icon.png",
  openGraph: {
    title: "Create Next App",
    description: "Lumina cerdas adalah website untuk membantu pengguna belajar bahasa Inggris dengan cara yang menyenangkan dan interaktif.",
    url: "https://lumina-cerdas.vercel.app/",
    siteName: "Lumina Cerdas",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumina Cerdas",
    site: "@lumina_cerdas",
    creator: "@lumina_cerdas",
    description: "Lumina cerdas adalah website untuk membantu pengguna belajar bahasa Inggris dengan cara yang menyenangkan dan interaktif.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
  appleTouchIcon: "/apple-touch-icon.png",
  viewport: "width=device-width, initial-scale=1.0",
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "google-site-verification=your-google-verification-code",
  },
  keywords: [
    "lumina cerdas",
    "website belajar bahasa inggris",
    "belajar bahasa inggris online",
    "bahasa inggris interaktif",
    "belajar bahasa inggris menyenangkan",
  ],
  authors: [
    {
      name: "Lumina Cerdas",
      url: "https://lumina-cerdas.vercel.app/",
    },
  ],
  publisher: "Lumina Cerdas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
