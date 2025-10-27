"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "../styles/headermobilemenubutton.css";

export default function HeaderMobileMenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  // Disable/Enable body scroll when menu state changes
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup on component unmount
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);

  const handleMobileMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveSubMenu(null);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
    setActiveSubMenu(null);
  };

  const handleSubMenuToggle = (menu) => {
    setActiveSubMenu(activeSubMenu === menu ? null : menu);
  };

  return (
    <>
      <button
        className="header-mobile-menu-button"
        onClick={handleMobileMenuToggle}
      >
        <Image
          src="/images/mobile_menu_icon.png"
          alt="Mobile Menu Icon"
          width={40}
          height={40}
        />
      </button>
      {isMenuOpen && (
        <div className="mobile-menu">
          <button
            className="mobile-menu-close-button"
            onClick={handleMobileMenuToggle}
          >
            &times;
          </button>
          <div className="mobile-menu-imgcontainer">
            <Image
              src="/images/Lumhera_logo_no_background.png"
              alt="Mobile Menu Icon"
              width={220}
              height={53}
              className="mobile-menu-logo"
            />
          </div>

          <ul>
            <li className="font-kaisei">
              <Link href="/" onClick={handleMenuItemClick}>
                Home
              </Link>
            </li>
            <li className="font-kaisei">
              <Link href="/about" onClick={handleMenuItemClick}>
                About
              </Link>
            </li>
            <li className="font-kaisei">
              <Link href="/method" onClick={handleMenuItemClick}>
                Method
              </Link>
            </li>
            <li className="font-kaisei">
              <Link href="/tools" onClick={handleMenuItemClick}>
                Tools
              </Link>
            </li>
            <li>
              <button
                onClick={() => handleSubMenuToggle("locations")}
                className="submenu-toggle font-kaisei"
              >
                Learn
              </button>
              <ul
                className={`submenu ${
                  activeSubMenu === "locations" ? "active" : ""
                }`}
              >
                <li className="font-kaisei">
                  <Link href="/learn" onClick={handleMenuItemClick}>
                    At Home
                  </Link>
                </li>
                <li className="font-kaisei">
                  <Link href="/learn" onClick={handleMenuItemClick}>
                    For Schools
                  </Link>
                </li>
                <li className="font-kaisei">
                  <Link href="/learn" onClick={handleMenuItemClick}>
                    Monaco Pilot
                  </Link>
                </li>
              </ul>
            </li>
            <li className="font-kaisei">
              <Link href="/contact" onClick={handleMenuItemClick}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
