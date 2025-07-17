import './globals.css';
import { Inter } from 'next/font/google';
import Header from '../container/header';
import Footer from '../container/footer';
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Event Management App',
  description: 'Creating an event management application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#fde8f3] antialiased`}>
        <Header />
        {children}
        <Footer />
        <Toaster
          position="bottom-center"
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            duration: 3000,
            style: { background: "#fff", color: "#000" },
            success: {
              duration: 3000,
              theme: { primary: "green", secondary: "black" },
            },
            error: {
              style: { background: "#fbe8e9", color: "#000" },
              duration: 2000,
              theme: { primary: "green", secondary: "black" },
            },
          }}
        />
      </body>
    </html>
  );
}
