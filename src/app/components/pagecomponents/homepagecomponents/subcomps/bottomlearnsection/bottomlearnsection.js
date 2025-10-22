import Image from "next/image";
import Link from "next/link";
import "./styles/bottomlearnsection.css";

export default function BottomLearnSection() {
  return (
    <div className="bottomlearnsection-container">
      <div className="bottomlearnsection-title-row">
        <div className="bottomlearnsection-tiny-title font-inter">
          Start Learning
        </div>
        <div className="bottomlearnsection-large-heading font-kaisei">
          Learn With Us
        </div>
      </div>

      <div className="bottomlearnsection-card-container">
        <div className="bottomlearnsection-card">
          <div className="bottomlearnsection-image-container">
            <Image
              src="/images/home.png"
              alt="About Page Header Image"
              width={164}
              height={164}
              className="page-header-image"
              priority
            />
          </div>
          <div className="bottomlearnsection-card-heading font-inter">
            Learn at Home
          </div>
          <p className="bottomlearnsection-card-description font-inter">
            Lumhera makes money talk easy and fun.Parents can explore the same
            chapters as their kids, follow progress, and open real conversations
            about saving, earning, or giving.
          </p>
          <Link
            href="/contact"
            className="linesection-partone-link-button font-inter"
          >
            LEARN MORE →
          </Link>
        </div>

        <div className="bottomlearnsection-card">
          <div className="bottomlearnsection-image-container">
            <Image
              src="/images/school.png"
              alt="About Page Header Image"
              width={164}
              height={164}
              className="page-header-image"
              priority
            />
          </div>
          <div className="bottomlearnsection-card-heading font-inter">
            Learn at School
          </div>
          <p className="bottomlearnsection-card-description font-inter">
            Classroom-ready content and assessments Clear standards mapping
            (OECD/INFE) Inclusive storytelling that engages all learners Easy
            onboarding and teacher support
          </p>
          <Link
            href="/contact"
            className="linesection-partone-link-button font-inter"
          >
            LEARN MORE →
          </Link>
        </div>

        <div className="bottomlearnsection-card">
          <div className="bottomlearnsection-image-container">
            <Image
              src="/images/monaco.png"
              alt="About Page Header Image"
              width={164}
              height={164}
              className="page-header-image"
              priority
            />
          </div>
          <div className="bottomlearnsection-card-heading font-inter">
            Monaco Pilot
          </div>
          <p className="bottomlearnsection-card-description font-inter">
            Our first national pilot — with measurable results, rapid iteration,
            and a model ready to inspire other education systems worldwide.
          </p>
          <Link
            href="/contact"
            className="linesection-partone-link-button font-inter"
          >
            REQUEST A DEMO →
          </Link>
        </div>
      </div>
    </div>
  );
}
