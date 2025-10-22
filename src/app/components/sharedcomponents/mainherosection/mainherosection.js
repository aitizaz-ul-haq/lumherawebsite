import Head from "next/head";
import "./styles/mainherosection.css";

export default function MainHeroSection({
  herotitle,
  herobackgroundimage,
  herotitlesize,
  herotitlewidth,
}) {
  const preloadImage = herobackgroundimage["1920px"];

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
      </div>
    </>
  );
}
