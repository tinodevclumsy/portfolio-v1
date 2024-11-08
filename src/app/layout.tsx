import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
// import dynamic from "next/dynamic";
import Scene from "@/app/components/three/Scene";
// const Scene = dynamic(() => import("./components/three/Scene"), { ssr: false });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Seungjun Lee - Front-end Developer in Metro Vancouver",
  description:
    "A skilled and dedicated front end developer from South Korea and curretly in Metro Vancouver. My expertise lies in front-end web development, with proficiency in HTML, CSS, JavaScript, Vue.js, and React.js and strong interests in mobile development as well.",
  openGraph: {
    title: "Seungjun Lee - Front-end Developer in Metro Vancouver",
    description: "A skilled and dedicated front end developer from South Korea and curretly in Metro Vancouver. My expertise lies in front-end web development, with proficiency in HTML, CSS, JavaScript, Vue.js, and React.js and strong interests in mobile development as well.",
    images: "/sc.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <Scene />
        {children}
        <Footer />
      </body>
    </html>
  );
}
