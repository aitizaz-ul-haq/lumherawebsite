"use client";

import { useRef, useState } from "react";

import "./styles/videobannersection.css";

export default function VideoBannerSection({ image, title, video }) {
  const videoRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [copyStatus, setCopyStatus] = useState("Copy link");

  const playVideo = () => {
    videoRef.current?.play();
  };

  const copyShareLink = async () => {
    const shareUrl = new URL(
      `/#${encodeURIComponent(video)}`,
      window.location.origin
    ).href;

    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopyStatus("Link copied");
    } catch {
      setCopyStatus("Copy failed");
    }
  };

  return (
    <section id={video} className="videobanner-section" aria-label={title}>
      <video
        ref={videoRef}
        className="videobanner-section-video"
        controls={hasStarted}
        playsInline
        preload="metadata"
        poster={`/images/${image}`}
        onPlay={() => setHasStarted(true)}
      >
        <source src={`/videos/${video}`} type="video/mp4" />
        Your browser does not support the video element.
      </video>

      <button
        type="button"
        className={`videobanner-section-overlay${hasStarted ? " is-hidden" : ""}`}
        onClick={playVideo}
        aria-label={`Play ${title}`}
      >
        <span className="videobanner-section-content">
          <img
            src="/images/play-button (1).png"
            alt=""
            className="videobanner-section-icon"
            aria-hidden="true"
          />
          <span className="videobanner-section-title font-kaisei">{title}</span>
        </span>
      </button>

      <button
        type="button"
        className="videobanner-section-share"
        onClick={copyShareLink}
        aria-label="Copy trailer link"
      >
        <span aria-live="polite">{copyStatus}</span>
      </button>
    </section>
  );
}
