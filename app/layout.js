import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import PortfolioButton from "./components/PortfolioButton";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DeveloperZaid — Learn Programming",
  description: "Simple programming blogs and free PDF notes for beginners",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="D4dDQnIFcDzXsVY9pEKOz_VhwQdmqeDqZsZzYha5sKk" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-(--bg) text-(--text) overflow-x-hidden`}>

        {/* Ambient glow */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,188,255,0.05)_0%,transparent_70%)]" />
          <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(0,188,255,0.04)_0%,transparent_70%)]" />
        </div>

        <div className="relative z-10 min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <PortfolioButton />
        </div>

      </body>
    </html>
  );
}