"use client";

import Head from "next/head";
import { useEffect, useRef } from "react";
import "./styles/mainherosection.css";

export default function MainHeroSection({
  herotitle,
  herobackgroundimage,
  herotitlesize,
  herotitlewidth,
}) {
  const preloadImage = herobackgroundimage["1920px"];
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let ticking = false;

    // TUNE THESE:
    const MAX_BLUR_PX = 17; // stronger blur (try 14–20)
    const MAX_TINT = 0.35; // 0..1 alpha for tint (0.35 ≈ 35%)
    const triggerDepth = window.innerHeight * 0.6; // how far before hitting max

    const FADE_MAX_AT = 0.4;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const y = window.scrollY || 0;

        // ===== existing blur/tint math =====
        const ratio = Math.max(0, Math.min(1, y / triggerDepth)); // clamp 0–1
        const eased = 1 - Math.pow(1 - ratio, 1.6);

        // blur + tint
        containerRef.current.style.setProperty(
          "--bg-blur",
          `${(eased * MAX_BLUR_PX).toFixed(2)}px`
        );
        containerRef.current.style.setProperty(
          "--bg-tint",
          (eased * MAX_TINT).toFixed(3)
        );

        // heading fade (1 → 0)
        const FADE_MAX_AT = 0.4; // you already have this
        const fadeProgress = Math.max(0, Math.min(1, ratio / FADE_MAX_AT));
        const headingFilter = (1 - fadeProgress).toFixed(3);
        containerRef.current.style.setProperty(
          "--heading-filter",
          headingFilter
        );

        // ===== NEW: Parallax (moves background at ~50% scroll speed) =====
        const PARALLAX_SPEED = 0.2; // tweak 0.3–0.7 to taste
        const parallaxY = y * PARALLAX_SPEED;
        containerRef.current.style.backgroundPosition = `center calc(50% + ${parallaxY}px)`;

        // OPTIONAL: slightly oversize to avoid edges when parallaxing
        // containerRef.current.style.backgroundSize = "105%"; // or keep "cover"

        ticking = false;
      });
    };

    onScroll(); // init
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Preload largest background image */}
      <Head>
        <link
          rel="preload"
          as="image"
          href={preloadImage}
          imagesrcset={`
            ${herobackgroundimage["375px"]} 375w,
            ${herobackgroundimage["390px"]} 390w,
            ${herobackgroundimage["430px"]} 430w,
            ${herobackgroundimage["480px"]} 480w,
            ${herobackgroundimage["600px"]} 600w,
            ${herobackgroundimage["768px"]} 768w,
            ${herobackgroundimage["1024px"]} 1024w,
            ${herobackgroundimage["1280px"]} 1280w,
            ${herobackgroundimage["1440px"]} 1440w,
            ${herobackgroundimage["1600px"]} 1600w,
            ${herobackgroundimage["1920px"]} 1920w,
            ${herobackgroundimage["2560px"]} 2560w
          `}
          imagesizes="100vw"
          fetchpriority="high"
        />
      </Head>

      <div
        ref={containerRef}
        className="main-hero-section-container fade-in-bg"
        style={{
          "--bg-320": `url(${herobackgroundimage["320px"]})`,
          "--bg-360": `url(${herobackgroundimage["360px"]})`,
          "--bg-375": `url(${herobackgroundimage["375px"]})`,
          "--bg-390": `url(${herobackgroundimage["390px"]})`,
          "--bg-430": `url(${herobackgroundimage["430px"]})`,
          "--bg-480": `url(${herobackgroundimage["480px"]})`,
          "--bg-600": `url(${herobackgroundimage["600px"]})`,
          "--bg-768": `url(${herobackgroundimage["768px"]})`,
          "--bg-1024": `url(${herobackgroundimage["1024px"]})`,
          "--bg-1280": `url(${herobackgroundimage["1280px"]})`,
          "--bg-1440": `url(${herobackgroundimage["1440px"]})`,
          "--bg-1600": `url(${herobackgroundimage["1600px"]})`,
          "--bg-1920": `url(${herobackgroundimage["1920px"]})`,
          "--bg-2560": `url(${herobackgroundimage["2560px"]})`,
        }}
      >
        <div
          className="main-hero-title-container"
          style={{
            "--titlewidth-320": herotitlewidth["320px"],
            "--titlewidth-768": herotitlewidth["768px"],
            "--titlewidth-1024": herotitlewidth["1024px"],
            "--titlewidth-1280": herotitlewidth["1280px"],
            "--titlewidth-1440": herotitlewidth["1440px"],
            "--titlewidth-1920": herotitlewidth["1920px"],
          }}
        >
          <h1
            className="main-hero-section-heading font-kaisei"
            style={{
              "--titlesize-320": herotitlesize["320px"],
              "--titlesize-360": herotitlesize["360px"],
              "--titlesize-375": herotitlesize["375px"],
              "--titlesize-390": herotitlesize["390px"],
              "--titlesize-430": herotitlesize["430px"],
              "--titlesize-480": herotitlesize["480px"],
              "--titlesize-600": herotitlesize["600px"],
              "--titlesize-768": herotitlesize["768px"],
              "--titlesize-1024": herotitlesize["1024px"],
              "--titlesize-1280": herotitlesize["1280px"],
              "--titlesize-1440": herotitlesize["1440px"],
              "--titlesize-1600": herotitlesize["1600px"],
              "--titlesize-1920": herotitlesize["1920px"],
              "--titlesize-2560": herotitlesize["2560px"],
            }}
          >
            {herotitle}
          </h1>
        </div>
        <div className="hero-second-text-container">
          <p className="hero-second-text font-kaisei">
            At Lumhera, we empower girls and women through financial
            literacy—giving them the skills, confidence, and agency to shape
            their own futures.
          </p>
          <p className="hero-second-text font-kaisei">
            We believe money should not be a source of anxiety, but a tool for
            independence and opportunity.
          </p>
          <p className="hero-second-text font-kaisei">
            And the best way to learn about money isn’t by memorizing facts—it’s
            by doing.
          </p>
        </div>
      </div>
    </>
  );
}
