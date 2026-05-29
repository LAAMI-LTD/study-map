import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
{/* city : https://youtu.be/Ot0NANnFFaM?list=PL5POt7v8GG2Xehz7FrdTODu90qocBZ7R2
                        blue : https://youtu.be/-3HFs3Qu7Mc?list=PL4jjgxHdfmYYYQgeYoTsRQk4jOvIJHhm6
                        blue boxes : https://youtu.be/fBMAfyqPsfQ?list=PL4jjgxHdfmYYYQgeYoTsRQk4jOvIJHhm6
                        white: https://youtu.be/7ZE2dPvbUGs?list=PL4jjgxHdfmYabCPLJQCRwOw4oZ0TXuz1k */}

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Study Map Consultants",
  description: "Study Map Consultants supports East African students in accessing education opportunities in Australia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-100 text-slate-950">
        <div className="mx-auto min-h-screen">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
