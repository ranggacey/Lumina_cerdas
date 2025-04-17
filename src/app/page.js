// src/app/page.js
"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // Refs untuk animasi
  const heroRef = useRef();
  const featureRef = useRef();
  const dailyChallengeRef = useRef();
  const statsRef = useRef();
  const headingRef = useRef();
  const ctaRef = useRef();

  useEffect(() => {
    // Animasi Hero Section
    gsap.from(headingRef.current, {
      duration: 1.5,
      y: 100,
      opacity: 0,
      ease: "power4.out",
    });

    gsap.from(ctaRef.current.children, {
      duration: 1,
      delay: 0.5,
      opacity: 0,
      y: 50,
      stagger: 0.2,
      ease: "back.out(1.7)",
    });

    // Animasi Fitur
    gsap.from(".feature-card", {
      scrollTrigger: {
        trigger: featureRef.current,
        start: "top center+=100",
      },
      duration: 1,
      y: 100,
      opacity: 0,
      stagger: 0.2,
      ease: "power4.out",
    });

    // Animasi Tantangan Harian
    gsap.from(dailyChallengeRef.current, {
      scrollTrigger: {
        trigger: dailyChallengeRef.current,
        start: "top center+=100",
      },
      duration: 1,
      x: -100,
      opacity: 0,
      ease: "power4.out",
    });

    // Animasi Statistik
    gsap.from(".stat-item", {
      scrollTrigger: {
        trigger: statsRef.current,
        start: "top center+=100",
      },
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: "power4.out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-900 dark:to-slate-800 transition-colors">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
      >
        <div className="text-center max-w-4xl mx-auto">
          <h1 
            ref={headingRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 text-slate-800 dark:text-white leading-tight"
          >
            Tingkatkan Pengetahuanmu dengan<br />
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Kuis Interaktif
            </span>
          </h1>
          
          <div 
            ref={ctaRef}
            className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
          >
            <button className="neumorphic-btn bg-white dark:bg-slate-800 text-slate-800 dark:text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:scale-105 transition-transform">
              Mulai Sekarang
            </button>
            <button className="neumorphic-btn bg-blue-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:scale-105 transition-transform">
              Pelajari Lebih
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        ref={featureRef}
        className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-slate-800 dark:text-white">
            Fitur Unggulan Lumina
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: 'Multi Kategori', icon: '📚', desc: 'Pilih dari berbagai kategori pengetahuan' },
              { title: 'Tantangan Harian', icon: '🔥', desc: 'Hadapi tantangan baru setiap hari' },
              { title: 'Leaderboard', icon: '🏆', desc: 'Bersaing dengan pengguna lain' },
              { title: 'Statistik Detail', icon: '📈', desc: 'Lacak perkembangan belajarmu' },
              { title: 'Mode Gelap', icon: '🌙', desc: 'Nyaman digunakan di malam hari' },
              { title: 'Fitur Sosial', icon: '🤝', desc: 'Bagikan pencapaian ke media sosial' },
            ].map((feature, index) => (
              <div 
                key={index}
                className="feature-card neumorphic-feature p-6 md:p-8 rounded-xl bg-white dark:bg-slate-800 hover:-translate-y-2 transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-slate-800 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Challenge Section */}
      <section 
        ref={dailyChallengeRef}
        className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-blue-50 dark:bg-slate-800"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
              Tantangan Harian
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6 md:mb-8">
              Setiap hari kami menyediakan tantangan khusus dengan hadiah eksklusif. 
              Selesaikan sebelum waktu habis untuk mendapatkan poin bonus!
            </p>
            <button className="neumorphic-btn bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:scale-105 transition-transform">
              Ikuti Tantangan
            </button>
          </div>
          <div className="flex-1 w-full max-w-md bg-white dark:bg-slate-700 rounded-xl p-6 shadow-lg">
            <div className="aspect-video bg-slate-100 dark:bg-slate-600 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        ref={statsRef}
        className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: '10K+', label: 'Pengguna Aktif' },
              { number: '50+', label: 'Kategori' },
              { number: '1M+', label: 'Kuis Diselesaikan' },
              { number: '98%', label: 'Kepuasan Pengguna' },
            ].map((stat, index) => (
              <div 
                key={index}
                className="stat-item neumorphic-feature p-6 md:p-8 rounded-xl bg-white dark:bg-slate-800 text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 text-blue-500 dark:text-blue-400">
                  {stat.number}
                </div>
                <div className="text-slate-600 dark:text-slate-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}