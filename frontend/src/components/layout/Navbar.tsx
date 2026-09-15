import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import clsx from "clsx";
import { ButtonLink } from "../ui/ButtonLink";
import { Container } from "../ui/Container";

// The current logo is a white wordmark, so the header uses the dark ink
// surface. When a dark version of the logo is available, switch LOGO_SRC and
// set HEADER_ON_DARK to false for a light cream header.
const LOGO_SRC = "/images/assets/aaghaz-logo.png";
const HEADER_ON_DARK = true;

const programmeLinks = [
  { name: "Student Aid", path: "/services/student-aid" },
  { name: "Scholarships", path: "/services/scholarships" },
  { name: "Financial Assistance", path: "/services/financial-assistance" },
  { name: "Computer Learning", path: "/services/computer-center" },
  { name: "Community Learning", path: "/services/madarsa-initiative" },
  { name: "Named & Memorial Scholarships", path: "/services/memorial-scholarship" },
];

const involvedLinks = [
  { name: "Become a Donor", path: "/services/join-as-donor" },
  { name: "Start a Scholarship", path: "/services/launch-scholarship" },
  { name: "Become a Volunteer", path: "/services/become-volunteer" },
];

const navLinks = [
  { name: "About", path: "/about" },
  { name: "What We Do", path: "/services", hasDropdown: true },
  { name: "Success Stories", path: "/success-stories" },
  { name: "Gallery", path: "/gallery" },
  { name: "News", path: "/blog" },
  { name: "FAQ", path: "/faq" },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const location = useLocation();

  // Close menus on navigation.
  const [lastPath, setLastPath] = useState(location.pathname);
  if (lastPath !== location.pathname) {
    setLastPath(location.pathname);
    setMobileOpen(false);
    setDropdownOpen(false);
  }

  // Close the dropdown on outside click or Escape.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // Prevent the page behind the mobile menu from scrolling.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const linkBase = HEADER_ON_DARK
    ? "text-cream/85 hover:text-white"
    : "text-ink/80 hover:text-ink";
  const linkActive = HEADER_ON_DARK ? "text-white" : "text-ink";

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 border-b",
        HEADER_ON_DARK ? "bg-ink border-ink-soft" : "bg-cream border-line",
      )}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>

      <Container className="flex h-18 items-center justify-between gap-6 md:h-20">
        <Link to="/" className="flex shrink-0 items-center" aria-label="Aaghaz Foundation — home">
          <img src={LOGO_SRC} alt="Aaghaz Foundation" className="h-10 w-auto md:h-12" />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-7 text-[0.95rem] font-medium">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <li
                  key={link.name}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    type="button"
                    aria-expanded={dropdownOpen}
                    aria-controls="programmes-menu"
                    onClick={() => setDropdownOpen((o) => !o)}
                    className={clsx(
                      "flex min-h-11 items-center gap-1 transition-colors",
                      location.pathname.startsWith("/services") ? linkActive : linkBase,
                    )}
                  >
                    {link.name}
                    <ChevronDown
                      size={16}
                      aria-hidden="true"
                      className={clsx("transition-transform", dropdownOpen && "rotate-180")}
                    />
                  </button>

                  {dropdownOpen && (
                    <div id="programmes-menu" className="absolute left-1/2 top-full w-[34rem] -translate-x-1/2 pt-2">
                      <div className="grid grid-cols-2 gap-8 rounded-md border border-line bg-white p-7 text-ink shadow-lg">
                        <div>
                          <p className="mb-3 text-sm font-semibold text-muted">Programmes</p>
                          <ul className="space-y-1">
                            {programmeLinks.map((item) => (
                              <li key={item.path}>
                                <Link to={item.path} className="block py-1.5 hover:text-terracotta">
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="mb-3 text-sm font-semibold text-muted">Get involved</p>
                          <ul className="space-y-1">
                            {involvedLinks.map((item) => (
                              <li key={item.path}>
                                <Link to={item.path} className="block py-1.5 hover:text-terracotta">
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <Link
                            to="/services"
                            className="mt-5 inline-block text-sm font-semibold text-terracotta underline underline-offset-4"
                          >
                            All of our work
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ) : (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      clsx("flex min-h-11 items-center transition-colors", isActive ? linkActive : linkBase)
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 xl:flex">
          <Link to="/services/become-volunteer" className={clsx("font-medium transition-colors", linkBase)}>
            Volunteer
          </Link>
          <ButtonLink to="/services/join-as-donor">Support a Student</ButtonLink>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className={clsx(
            "flex h-11 w-11 items-center justify-center rounded-md xl:hidden",
            HEADER_ON_DARK ? "text-cream" : "text-ink",
          )}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </Container>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-18 overflow-y-auto bg-cream text-ink md:top-20 xl:hidden"
        >
          <Container className="py-8">
            <nav aria-label="Mobile">
              <ul className="divide-y divide-line border-y border-line text-lg">
                <li>
                  <Link to="/" className="block py-4">Home</Link>
                </li>
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="block py-4">
                      {link.name}
                    </Link>
                    {link.hasDropdown && (
                      <ul className="-mt-1 mb-4 grid gap-1 pl-4 text-base text-muted">
                        {[...programmeLinks, ...involvedLinks].map((item) => (
                          <li key={item.path}>
                            <Link to={item.path} className="block py-2 hover:text-terracotta">
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
                <li>
                  <Link to="/contact" className="block py-4">Contact</Link>
                </li>
              </ul>
            </nav>
            <div className="mt-8 grid gap-3">
              <ButtonLink to="/services/join-as-donor">Support a Student</ButtonLink>
              <ButtonLink to="/services/become-volunteer" variant="secondary">
                Volunteer Your Time
              </ButtonLink>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};
