"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(document.documentElement.scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 py-6 px-5 transition-all duration-300 z-20 ${
        isScrolled ? "bg-slate-950" : "bg-transparent"
      }`}
    >
      <div className="container flex justify-between items-center mx-auto">
        <Link href="/">
          <h6>SEUNGJUN LEE.</h6>
        </Link>

        <nav>
          <ul className="flex gap-6">
            <li>
              <Link href="/#about">About</Link>
            </li>
            <li>
              <Link href="/#experience">Experience</Link>
            </li>
            <li>
              <Link href="/#contact">Contact</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
