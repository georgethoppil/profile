import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "George Thoppil · Senior Software Engineer",
  description:
    "Senior Software Engineer with experience at Kraken, Shopify, and Tier1 Financial Solutions. Specializing in distributed systems, blockchain, and LLM inference optimization.",
};

// Runs before paint to set the theme with no flash. Honors a saved choice,
// otherwise picks light/dark by time of day in George's locale (America/Toronto).
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){var h=parseInt(new Intl.DateTimeFormat('en-US',{timeZone:'America/Toronto',hour:'numeric',hour12:false}).format(new Date()),10);t=(h>=7&&h<19)?'light':'dark';}if(t==='dark')document.documentElement.classList.add('dark');}catch(e){document.documentElement.classList.add('dark');}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
