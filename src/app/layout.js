import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/HeaderAndFooter/Header";
import Footer from "@/components/HeaderAndFooter/Footer";
import AnnouncementBar from "@/components/HeaderAndFooter/AnnouncementBar";
import NextTopLoader from "nextjs-toploader";
import AuthProvider from "@/components/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vintage Watch",
  description: "One Stop Solution",
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <NextTopLoader showSpinner={false} />
          <AnnouncementBar />
          <AuthProvider session={session}>
            <Header />
            {children}
          </AuthProvider>
          <Footer />
        </div>
      </body>
    </html>
  );
}
