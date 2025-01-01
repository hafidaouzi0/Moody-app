import { Fugaz_One, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fugaz = Fugaz_One({ subsets: ["latin"],weight:["400"] });

export const metadata = {
  title: "Moody App",
  description: "Track your daily mood every day of the year!",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between
    gap-4">
      <h1 className={'text-base sm:text-lg '+fugaz.className}>Moody</h1>
      <h1>Login</h1>
      <h1>Sign-up</h1>
    </header>
  );
  const footer = (
    <footer>
      footer
    </footer>
  )
  return (
    <html lang="en">
      <body
        className={`w-full max-w-[1000px] mx-auto text-sm sm:text-base
           min-h-screen flex flex-col ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
