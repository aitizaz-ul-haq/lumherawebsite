import Link from "next/link";
import Image from "next/image";
import "./styles/linesection.css";

import * as Accordion from "@radix-ui/react-accordion";

export default function LineSection() {
  return (
    <div className="main-page-bckground">
      <div className="linesection-container">
        <div className="linesection-partone-container">
          <div className="linesection-partone-leftpart">
            <p className="linesection-partone-tinytag font-inter">What We Do</p>
            <h2 className="linesection-partone-largeheading font-kaisei">
              Transform Teaching & Learning Systems
            </h2>
          </div>
          <div className="linesection-partone-rightpart">
            <p className="linesection-partone-description font-inter">
              We blend storytelling, games, and hands-on experiences to teach
              children and families the building blocks of financial literacy —
              saving, spending, investing, and more — in ways that feel natural
              and fun.
            </p>

            <div className="linesection-partone-accordians">
              <Accordion.Root type="single" collapsible className="acc">
                <Accordion.Item value="item-1" className="acc__item">
                  <Accordion.Header className="acc__header">
                    <Accordion.Trigger className="acc__trigger font-inter">
                      At Home
                      <span className="acc__icon" aria-hidden>
                        <Image
                          src="/images/plus-button.png"
                          alt="About Page Header Image"
                          width={18}
                          height={18}
                          className="page-header-image"
                          priority
                        />
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="acc__content font-inter">
                    Lumhera makes financial literacy simple and joyful.
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="item-2" className="acc__item">
                  <Accordion.Header className="acc__header">
                    <Accordion.Trigger className="acc__trigger font-inter">
                      At School
                      <span className="acc__icon" aria-hidden>
                        <Image
                          src="/images/plus-button.png"
                          alt="About Page Header Image"
                          width={18}
                          height={18}
                          className="page-header-image"
                          priority
                        />
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="acc__content font-inter">
                    A story-driven interactive experience about money.
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="item-3" className="acc__item">
                  <Accordion.Header className="acc__header">
                    <Accordion.Trigger className="acc__trigger font-inter">
                      Monaco Pilot
                      <span className="acc__icon" aria-hidden>
                        <Image
                          src="/images/plus-button.png"
                          alt="About Page Header Image"
                          width={18}
                          height={18}
                          className="page-header-image"
                          priority
                        />
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="acc__content font-inter">
                    A story-driven interactive experience about money.
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
            </div>

            <Link
              href="/contact"
              className="linesection-partone-link-button font-inter"
            >
              LEARN MORE →
            </Link>
          </div>
        </div>

        <div className="linesection-partone-container">
          <div className="linesection-partone-leftpart">
            <div className="middle-case">
              <p className="linesection-partone-description font-inter">
                Lumhera’s first interactive experience, Esther the Investor,
                turns financial learning into an immersive, story-driven
                adventure.
              </p>
              <p className="linesection-partone-description font-inter">
                Children follow Esther, a curious 10-year-old, as she discovers
                how money shapes the world — guided by King Croesus and his
                cat Bucks.
              </p>
              <Link
                href="/contact"
                className="linesection-partone-link-button font-inter"
              >
                LEARN MORE →
              </Link>
            </div>
          </div>
          <div className="linesection-partone-rightpart">
            <p className="linesection-partone-tinytag font-inter">Our Tools</p>
            <h2 className="linesection-partone-largeheading font-kaisei">
              Esther the Investor The Beginning of the Journey
            </h2>
          </div>
        </div>

        <div className="linesection-partone-container">
          <div className="linesection-partone-leftpart">
            <p className="linesection-partone-tinytag font-inter">Our Values</p>
            <h2 className="linesection-partone-largeheading font-kaisei">
              The Principles That Guide Everything We Do
            </h2>
          </div>
          <div className="linesection-partone-rightpart">
            <div className="linesection-partone-accordians">
              <Accordion.Root type="single" collapsible className="acc">
                <Accordion.Item value="item-1" className="acc__item">
                  <Accordion.Header className="acc__header">
                    <Accordion.Trigger className="acc__trigger font-inter">
                      Freedom through Financial Confidence
                      <span className="acc__icon" aria-hidden>
                        <Image
                          src="/images/plus-button.png"
                          alt="About Page Header Image"
                          width={18}
                          height={18}
                          className="page-header-image"
                          priority
                        />
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="acc__content font-inter">
                    Lumhera makes financial literacy simple and joyful.
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="item-2" className="acc__item">
                  <Accordion.Header className="acc__header">
                    <Accordion.Trigger className="acc__trigger font-inter">
                      Empowerment through Education
                      <span className="acc__icon" aria-hidden>
                        <Image
                          src="/images/plus-button.png"
                          alt="About Page Header Image"
                          width={18}
                          height={18}
                          className="page-header-image"
                          priority
                        />
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="acc__content font-inter">
                    A story-driven interactive experience about money.
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="item-3" className="acc__item">
                  <Accordion.Header className="acc__header">
                    <Accordion.Trigger className="acc__trigger font-inter">
                      Equality and Inclusion
                      <span className="acc__icon" aria-hidden>
                        <Image
                          src="/images/plus-button.png"
                          alt="About Page Header Image"
                          width={18}
                          height={18}
                          className="page-header-image"
                          priority
                        />
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="acc__content font-inter">
                    A story-driven interactive experience about money.
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="item-4" className="acc__item">
                  <Accordion.Header className="acc__header">
                    <Accordion.Trigger className="acc__trigger font-inter">
                      Agency over Anxiety
                      <span className="acc__icon" aria-hidden>
                        <Image
                          src="/images/plus-button.png"
                          alt="About Page Header Image"
                          width={18}
                          height={18}
                          className="page-header-image"
                          priority
                        />
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="acc__content font-inter">
                    Lumhera makes financial literacy simple and joyful.
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="item-5" className="acc__item">
                  <Accordion.Header className="acc__header">
                    <Accordion.Trigger className="acc__trigger font-inter">
                      Evidence over Hype
                      <span className="acc__icon" aria-hidden>
                        <Image
                          src="/images/plus-button.png"
                          alt="About Page Header Image"
                          width={18}
                          height={18}
                          className="page-header-image"
                          priority
                        />
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="acc__content font-inter">
                    A story-driven interactive experience about money.
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="item-6" className="acc__item">
                  <Accordion.Header className="acc__header">
                    <Accordion.Trigger className="acc__trigger font-inter">
                      Craft and Clarity
                      <span className="acc__icon" aria-hidden>
                        <Image
                          src="/images/plus-button.png"
                          alt="About Page Header Image"
                          width={18}
                          height={18}
                          className="page-header-image"
                          priority
                        />
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="acc__content font-inter">
                    A story-driven interactive experience about money.
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
            </div>

            <Link
              href="/contact"
              className="linesection-partone-link-button font-inter"
            >
              LEARN MORE →
            </Link>
          </div>
        </div>
      </div>

      <div className="ourmethodsection-conainer">
        <div className="ourmethodsection-main-heading-container">
          <h3 className="ourmethodsection-main-heading font-kaisei">
            Our Method
          </h3>
        </div>

        <div className="linesection-partone-container">
          <div className="linesection-partone-leftpart">
            <div className="middle-case">
              <h4 className="methodesection-subheading font-inter">
                Learning by Doing
              </h4>
              <p className="linesection-partone-description font-inter">
                Children learn best when they experience what they’re
                learning.Lumhera turns money into a story — through choices,
                puzzles, and real consequences that make financial ideas
                tangible.
              </p>

              <Link
                href="/contact"
                className="linesection-partone-link-button font-inter"
              >
                LEARN MORE →
              </Link>
            </div>
          </div>
          <div className="linesection-partone-rightpart"></div>
        </div>

        <div className="linesection-partone-container">
          <div className="linesection-partone-leftpart"></div>
          <div className="linesection-partone-rightpart">
            <div className="middle-case">
              <h4 className="methodesection-subheading font-inter">
                For Families and Schools
              </h4>
              <p className="linesection-partone-description font-inter">
                Lumhera puts children at the center of learning — where
                financial confidence begins.
              </p>
              <p className="linesection-partone-description font-inter">
                Through our interactive, story-driven tools, kids explore how
                money works in ways that feel natural, playful, and empowering.
              </p>
              <Link
                href="/contact"
                className="linesection-partone-link-button font-inter"
              >
                LEARN MORE →
              </Link>
            </div>
          </div>
        </div>

        <div className="linesection-partone-container">
          <div className="linesection-partone-leftpart">
            <div className="middle-case">
              <h4 className="methodesection-subheading font-inter">
                Backed by Global Standards
              </h4>
              <p className="linesection-partone-description font-inter">
                Our curriculum is built on the OECD/INFE Financial Competence
                Framework for Children & Youth, ensuring that every experience
                develops real-world financial skills
              </p>

              <Link
                href="/contact"
                className="linesection-partone-link-button font-inter"
              >
                LEARN MORE →
              </Link>
            </div>
          </div>
          <div className="linesection-partone-rightpart"></div>
        </div>

        <div className="methodesection-banner">
          <div className="methodesection-banner-content">
            <h4 className="methodesection-banner-heading font-kaisei">
              Start Your Journey
            </h4>
            <p className="methodesection-banner-description font-inter">
              Take the first step towards financial empowerment today!
            </p>
            <button className="methodesection-banner-button font-inter">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
