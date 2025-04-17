"use client";

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import Image from 'next/image';
import DarkModeToggle from '@/components/DarkModeToggle';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navbarRef = useRef();
  const mobileMenuRef = useRef();

  useEffect(() => {
    gsap.from(navbarRef.current, {
      duration: 1,
      y: -100,
      opacity: 0,
      ease: "power4.out",
    });
  }, []);

  const toggleMenu = () => {
    if (isMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        duration: 0.3,
        opacity: 0,
        y: -20,
        ease: "power2.inOut",
        onComplete: () => setIsMenuOpen(false)
      });
    } else {
      setIsMenuOpen(true);
      gsap.from(mobileMenuRef.current, {
        duration: 0.3,
        opacity: 0,
        y: -20,
        ease: "power2.inOut"
      });
    }
  };

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Kuis', path: '/quiz' },
    { name: 'Leaderboard', path: '/leaderboard' },
    { name: 'Pencapaian', path: '/achievements' },
  ];

  return (
    <nav 
      ref={navbarRef}
      className="fixed w-full top-0 z-[1000] h-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="Lumina Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-2xl font-bold text-slate-800 dark:text-white">
              Lumina
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 font-medium transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <DarkModeToggle />
            
            {isLoggedIn ? (
              <div className="hidden md:flex items-center space-x-4">
                <button className="neumorphic-btn bg-white dark:bg-slate-800 px-4 py-2 rounded-lg text-slate-800 dark:text-white">
                  Profile
                </button>
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-4">
                <Link
                  href="/login"
                  className="neumorphic-btn bg-white dark:bg-slate-800 px-4 py-2 rounded-lg text-slate-800 dark:text-white"
                >
                  Masuk
                </Link>
                <Link
                  href="/register"
                  className="neumorphic-btn bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Daftar
                </Link>
              </div>
            )}

            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg neumorphic-btn dark:bg-slate-800"
            >
              <svg className="w-6 h-6 text-slate-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden py-4 space-y-4 border-t border-slate-100 dark:border-slate-800"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="block px-4 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg"
                onClick={() => toggleMenu()}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4">
              {isLoggedIn ? (
                <button className="w-full neumorphic-btn bg-blue-500 text-white px-4 py-2 rounded-lg">
                  Profile
                </button>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="block w-full text-center neumorphic-btn bg-white dark:bg-slate-800 px-4 py-2 rounded-lg text-slate-800 dark:text-white"
                    onClick={() => toggleMenu()}
                  >
                    Masuk
                  </Link>
                  <Link
                    href="/register"
                    className="block w-full text-center neumorphic-btn bg-blue-500 text-white px-4 py-2 rounded-lg"
                    onClick={() => toggleMenu()}
                  >
                    Daftar
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}