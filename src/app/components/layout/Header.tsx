"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import SocialNav from "../common/SocialNav";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  useEffect(() => {
    setIsScrolled(document.documentElement.scrollTop > 0);

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

        <div
          className={`fixed flex items-center justify-start bg-slate-950 top-0 left-0 w-full h-full px-6 transition-transform duration-300 ${
            isOpenMobileMenu ? "translate-x-0" : "translate-x-full"
          } transform md:hidden`}
          onClick={() => setIsOpenMobileMenu(false)}
        >
          <nav>
            <ul className="flex gap-6 flex-col md:flex-row">
              <li>
                <Link
                  className="text-5xl text-stroke-sm text-stroke-white"
                  href="/#about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-5xl text-stroke-sm text-stroke-white"
                  href="/#experience"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  className="text-5xl text-stroke-sm text-stroke-white"
                  href="/#contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="text-5xl text-stroke-sm text-stroke-white"
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
          <SocialNav />
        </div>

        <nav className="hidden md:block">
          <ul className="flex gap-6 flex-col md:flex-row">
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

        <div
          className="mobile-btn cursor-pointer block md:hidden"
          onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
        >
          <HiMenuAlt3 size={24} />
        </div>
      </div>
    </header>
  );
};

export default Header;
