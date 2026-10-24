
// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   Menu,
//   X,
//   Code2,
//   ArrowUpRight,
//   LayoutDashboard,
// } from "lucide-react";

// const links = [
//   { label: "Dashboard", href: "/dashboard" },
//   { label: "About", href: "/about" },
//   { label: "Skills", href: "/skills" },
//   { label: "Projects", href: "/projects" },
//   { label: "Journey", href: "/journey" },
//   { label: "Contact", href: "/contact" },
// ];

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 12);

//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });

//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     setMenuOpen(false);
//   }, [pathname]);

//   useEffect(() => {
//     const onKeyDown = (event: KeyboardEvent) => {
//       if (event.key === "Escape") setMenuOpen(false);
//     };

//     window.addEventListener("keydown", onKeyDown);
//     return () => window.removeEventListener("keydown", onKeyDown);
//   }, []);

//   useEffect(() => {
//     if (!menuOpen) return;

//     const previousOverflow = document.body.style.overflow;
//     document.body.style.overflow = "hidden";

//     return () => {
//       document.body.style.overflow = previousOverflow;
//     };
//   }, [menuOpen]);

//   const isActive = (href: string) =>
//     pathname === href || pathname.startsWith(`${href}/`);

//   return (
//     <>
//       <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
//         <nav className="navbar" aria-label="Main navigation">
//           <Link
//             href="/"
//             className="brand"
//             onClick={() => setMenuOpen(false)}
//           >
//             <span className="brand-icon">
//               <Code2 size={20} />
//             </span>

//             <span className="brand-text">
//               Shakib<span className="brand-accent">.dev</span>
//             </span>
//           </Link>

//           <div
//             id="mobile-navigation"
//             className={`nav-links ${menuOpen ? "open" : ""}`}
//             aria-hidden={!menuOpen && undefined}
//           >
//             <div className="link-group">
//               {links.map((link) => {
//                 const active = isActive(link.href);

//                 return (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     className={`nav-link ${active ? "active" : ""}`}
//                     aria-current={active ? "page" : undefined}
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     {link.label === "Dashboard" && (
//                       <LayoutDashboard size={16} />
//                     )}
//                     {link.label}
//                   </Link>
//                 );
//               })}
//             </div>

//             <a
//               className="nav-cta"
//               href="https://github.com/Shakib18-VK"
//               target="_blank"
//               rel="noopener noreferrer"
//               onClick={() => setMenuOpen(false)}
//             >
//               GitHub
//               <ArrowUpRight size={16} />
//             </a>
//           </div>

//           <button
//             className="menu-button"
//             type="button"
//             aria-label={menuOpen ? "Close menu" : "Open menu"}
//             aria-expanded={menuOpen}
//             aria-controls="mobile-navigation"
//             onClick={() => setMenuOpen((prev) => !prev)}
//           >
//             {menuOpen ? <X size={29} /> : <Menu size={29} />}
//           </button>
//         </nav>
//       </header>

//       {menuOpen && (
//         <button
//           className="menu-backdrop"
//           type="button"
//           aria-label="Close navigation menu"
//           onClick={() => setMenuOpen(false)}
//         />
//       )}

//       <style jsx>{`
//         .site-header {
//           position: sticky;
//           top: 0;
//           z-index: 10002;
//           width: 100%;
//           background: rgba(8, 10, 18, 0.96);
//           border-bottom: 1px solid rgba(255, 255, 255, 0.08);
//           transition: background 0.25s ease, box-shadow 0.25s ease;
//         }

//         .site-header.scrolled {
//           background: rgba(8, 10, 18, 0.99);
//           box-shadow: 0 10px 35px rgba(0, 0, 0, 0.3);
//         }

//         .navbar {
//           width: 100%;
//           max-width: 1200px;
//           min-height: 68px;
//           margin: 0 auto;
//           padding: 0 24px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           gap: 16px;
//           box-sizing: border-box;
//         }

//         .brand {
//           display: inline-flex;
//           align-items: center;
//           gap: 10px;
//           color: #f8fafc;
//           text-decoration: none;
//           font-size: 19px;
//           font-weight: 750;
//           letter-spacing: -0.5px;
//           flex-shrink: 0;
//           position: relative;
//           z-index: 10004;
//         }

//         .brand-icon {
//           width: 38px;
//           height: 38px;
//           display: grid;
//           place-items: center;
//           color: #ddd6fe;
//           background: linear-gradient(
//             135deg,
//             rgba(139, 92, 246, 0.3),
//             rgba(59, 130, 246, 0.2)
//           );
//           border: 1px solid rgba(167, 139, 250, 0.35);
//           border-radius: 11px;
//         }

//         .brand-accent {
//           color: #a78bfa;
//         }

//         .nav-links {
//           display: flex;
//           align-items: center;
//           gap: 14px;
//         }

//         .link-group {
//           display: flex;
//           align-items: center;
//           gap: 4px;
//           padding: 4px;
//           background: rgba(255, 255, 255, 0.04);
//           border: 1px solid rgba(255, 255, 255, 0.08);
//           border-radius: 12px;
//         }

//         .nav-links :global(.nav-link) {
//           display: inline-flex;
//           align-items: center;
//           gap: 6px;
//           padding: 9px 11px;
//           color: #a1a1aa;
//           font-size: 13px;
//           font-weight: 500;
//           text-decoration: none;
//           border-radius: 8px;
//           transition: background 0.2s ease, color 0.2s ease;
//         }

//         .nav-links :global(.nav-link:hover) {
//           color: white;
//           background: rgba(255, 255, 255, 0.07);
//         }

//         .nav-links :global(.nav-link.active) {
//           color: white;
//           background: rgba(124, 58, 237, 0.35);
//           box-shadow: inset 0 0 0 1px rgba(167, 139, 250, 0.35);
//         }

//         .nav-cta {
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           gap: 7px;
//           padding: 10px 16px;
//           color: white;
//           font-size: 13.5px;
//           font-weight: 600;
//           text-decoration: none;
//           background: linear-gradient(135deg, #7c3aed, #6366f1);
//           border-radius: 10px;
//           transition: transform 0.2s ease;
//         }

//         .nav-cta:hover {
//           transform: translateY(-1px);
//         }

//         .menu-button {
//           display: none;
//           align-items: center;
//           justify-content: center;
//           width: 56px;
//           height: 56px;
//           min-width: 56px;
//           padding: 0;
//           margin-right: 8px;
//           color: white;
//           background: rgba(139, 92, 246, 0.22);
//           border: 1px solid rgba(167, 139, 250, 0.55);
//           border-radius: 15px;
//           cursor: pointer;
//           position: relative;
//           z-index: 10005;
//           touch-action: manipulation;
//           -webkit-tap-highlight-color: transparent;
//         }

//         .menu-button:active {
//           transform: scale(0.96);
//           background: rgba(139, 92, 246, 0.4);
//         }

//         .menu-backdrop {
//           display: none;
//         }

//         @media (max-width: 820px) {
//           .navbar {
//             min-height: 72px;
//             padding: 0 16px 0 18px;
//             gap: 10px;
//           }

//           .menu-button {
//             display: flex;
//             width: 56px;
//             height: 56px;
//             min-width: 56px;
//             margin-right: 8px;
//           }

//           .nav-links {
//             position: fixed;
//             top: 72px;
//             left: 0;
//             right: 0;
//             bottom: 0;
//             z-index: 10003;
//             display: flex;
//             flex-direction: column;
//             align-items: stretch;
//             justify-content: flex-start;
//             gap: 20px;
//             padding: 22px 18px 36px;
//             padding-bottom: max(36px, env(safe-area-inset-bottom));
//             box-sizing: border-box;
//             background: #080a12;
//             opacity: 0;
//             visibility: hidden;
//             pointer-events: none;
//             transform: translateY(-8px);
//             transition:
//               opacity 0.2s ease,
//               transform 0.2s ease,
//               visibility 0.2s ease;
//             overflow-y: auto;
//             overscroll-behavior: contain;
//             -webkit-overflow-scrolling: touch;
//             border-top: 1px solid rgba(255, 255, 255, 0.08);
//           }

//           .nav-links.open {
//             opacity: 1;
//             visibility: visible;
//             pointer-events: auto;
//             transform: translateY(0);
//           }

//           .link-group {
//             width: 100%;
//             display: flex;
//             flex-direction: column;
//             align-items: stretch;
//             gap: 9px;
//             padding: 0;
//             background: transparent;
//             border: none;
//           }

//           .nav-links :global(.nav-link) {
//             display: flex;
//             align-items: center;
//             width: 100%;
//             min-height: 52px;
//             box-sizing: border-box;
//             padding: 14px 16px;
//             font-size: 16px;
//             border: 1px solid rgba(255, 255, 255, 0.08);
//             background: rgba(255, 255, 255, 0.035);
//             border-radius: 12px;
//           }

//           .nav-cta {
//             width: 100%;
//             min-height: 52px;
//             box-sizing: border-box;
//             padding: 14px 16px;
//             font-size: 16px;
//             border-radius: 12px;
//           }

//           .menu-backdrop {
//             display: block;
//             position: fixed;
//             inset: 72px 0 0;
//             z-index: 10001;
//             width: 100%;
//             height: calc(100dvh - 72px);
//             padding: 0;
//             border: none;
//             background: rgba(0, 0, 0, 0.55);
//           }
//         }

//         @media (max-width: 380px) {
//           .navbar {
//             padding-left: 12px;
//             padding-right: 8px;
//           }

//           .brand {
//             gap: 7px;
//             font-size: 17px;
//           }

//           .brand-icon {
//             width: 34px;
//             height: 34px;
//           }

//           .menu-button {
//             width: 58px;
//             height: 58px;
//             min-width: 58px;
//             margin-right: 6px;
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .site-header,
//           .nav-links,
//           .nav-cta {
//             transition: none;
//           }
//         }
//       `}</style>
//     </>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Code2,
  ArrowUpRight,
  LayoutDashboard,
} from "lucide-react";

const links = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Journey", href: "/journey" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <nav className="navbar" aria-label="Main navigation">
          <Link
            href="/"
            className="brand"
            onClick={() => setMenuOpen(false)}
          >
            <span className="brand-icon">
              <Code2 size={20} />
            </span>
            <span className="brand-text">
              Shakib<span className="brand-accent">.dev</span>
            </span>
          </Link>

          {/* Navigation Links Container */}
          <div
            id="mobile-navigation"
            className={`nav-links ${menuOpen ? "open" : ""}`}
          >
            <div className="link-group">
              {links.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-link ${active ? "active" : ""}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label === "Dashboard" && (
                      <LayoutDashboard size={16} />
                    )}
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <a
              className="nav-cta"
              href="https://github.com/Shakib18-VK"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              GitHub
              <ArrowUpRight size={16} />
            </a>
          </div>

          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </header>

      <style jsx>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 99999;
          width: 100%;
          background: rgba(7, 7, 17, 0.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          transition: background 0.3s ease;
        }

        .site-header.scrolled {
          background: rgba(7, 7, 17, 0.98);
          border-bottom-color: rgba(167, 139, 250, 0.2);
        }

        .navbar {
          width: 100%;
          max-width: 1200px;
          min-height: 70px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          box-sizing: border-box;
          position: relative;
        }

        .brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #f8fafc;
          text-decoration: none;
          font-size: 19px;
          font-weight: 750;
          letter-spacing: -0.5px;
          z-index: 100001;
        }

        .brand-icon {
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          color: #ddd6fe;
          background: linear-gradient(
            135deg,
            rgba(139, 92, 246, 0.3),
            rgba(59, 130, 246, 0.2)
          );
          border: 1px solid rgba(167, 139, 250, 0.35);
          border-radius: 10px;
        }

        .brand-accent {
          color: #a78bfa;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .link-group {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
        }

        .nav-links :global(.nav-link) {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          color: #a1a1aa;
          font-size: 13.5px;
          font-weight: 500;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .nav-links :global(.nav-link:hover) {
          color: white;
          background: rgba(255, 255, 255, 0.06);
        }

        .nav-links :global(.nav-link.active) {
          color: white;
          background: rgba(124, 58, 237, 0.4);
          box-shadow: inset 0 0 0 1px rgba(167, 139, 250, 0.4);
        }

        .nav-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 9px 16px;
          color: white;
          font-size: 13.5px;
          font-weight: 600;
          text-decoration: none;
          background: linear-gradient(135deg, #7c3aed, #6366f1);
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        }

        .menu-button {
          display: none;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          padding: 0;
          color: white;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          cursor: pointer;
          z-index: 100001;
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
        }

        .menu-button:active {
          transform: scale(0.94);
        }

        @media (max-width: 820px) {
          .navbar {
            min-height: 64px;
            padding: 0 16px;
          }

          .menu-button {
            display: flex;
          }

          .nav-links {
            position: fixed;
            top: 64px;
            left: 0;
            right: 0;
            bottom: 0;
            height: calc(100dvh - 64px);
            z-index: 99990;
            flex-direction: column;
            align-items: stretch;
            justify-content: flex-start;
            gap: 16px;
            padding: 24px 20px 40px;
            background: #070711;
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transform: translateY(-8px);
            transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
            overflow-y: auto;
            box-sizing: border-box;
          }

          .nav-links.open {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
            transform: translateY(0);
          }

          .link-group {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 8px;
            padding: 0;
            background: transparent;
            border: none;
          }

          .nav-links :global(.nav-link) {
            display: flex;
            align-items: center;
            width: 100%;
            min-height: 48px;
            padding: 12px 16px;
            font-size: 15px;
            font-weight: 600;
            border: 1px solid rgba(255, 255, 255, 0.08);
            background: rgba(255, 255, 255, 0.03);
            border-radius: 12px;
            box-sizing: border-box;
          }

          .nav-cta {
            width: 100%;
            min-height: 48px;
            justify-content: center;
            padding: 12px 16px;
            font-size: 15px;
            font-weight: 600;
            border-radius: 12px;
            box-sizing: border-box;
          }
        }
      `}</style>
    </>
  );
}