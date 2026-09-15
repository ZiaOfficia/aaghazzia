import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../ui/Container";

const columns = [
  {
    title: "About Aaghaz",
    links: [
      { name: "About Us", to: "/about" },
      { name: "What We Do", to: "/services" },
      { name: "Success Stories", to: "/success-stories" },
      { name: "Gallery", to: "/gallery" },
      { name: "News", to: "/blog" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { name: "Support a Student", to: "/services/join-as-donor" },
      { name: "Start a Scholarship", to: "/services/launch-scholarship" },
      { name: "Volunteer Your Time", to: "/services/become-volunteer" },
      { name: "Apply for Student Aid", to: "/services/student-aid" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "FAQ", to: "/faq" },
      { name: "Contact Us", to: "/contact" },
      { name: "Privacy Policy", to: "/privacy-policy" },
      { name: "Terms of Service", to: "/terms-of-service" },
    ],
  },
];

const socials = [
  { name: "Facebook", href: "https://www.facebook.com/aaghazfoundation", Icon: Facebook },
  { name: "Instagram", href: "https://www.instagram.com/aaghazfoundation", Icon: Instagram },
  { name: "Twitter", href: "https://twitter.com/aaghazfoundation", Icon: Twitter },
  { name: "YouTube", href: "https://www.youtube.com/@aaghazfoundation", Icon: Youtube },
];

export const Footer = () => (
  <footer className="bg-ink text-cream">
    <Container className="py-16 md:py-20">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <img src="/images/assets/aaghaz-logo.png" alt="Aaghaz Foundation" className="h-12 w-auto" />
          <p className="mt-6 max-w-xs text-cream/75">
            Since 2004, Aaghaz has helped students continue their education when their families could not afford it.
          </p>

          <address className="mt-8 space-y-2 not-italic text-cream/75">
            <p>
              57 Ganesh Gunj, Lucknow,
              <br />
              Uttar Pradesh 226018, India
            </p>
            <p>
              <a href="tel:+919876543210" className="hover:text-white">
                +91 98765 43210
              </a>
            </p>
            <p>
              <a href="mailto:aaghaz.foundation@gmail.com" className="break-all hover:text-white">
                aaghaz.foundation@gmail.com
              </a>
            </p>
          </address>

          <ul className="mt-8 flex gap-2" aria-label="Follow Aaghaz">
            {socials.map(({ name, href, Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-11 w-11 items-center justify-center rounded-md border border-cream/20 text-cream/80 hover:border-cream/60 hover:text-white"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-10 sm:grid-cols-3 md:col-span-8 md:pl-8">
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="font-sans text-sm font-semibold text-sand-light">{col.title}</h2>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-cream/75 hover:text-white">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="mt-14 border-t border-cream/15 pt-8 text-sm text-cream/60">
        <p>© {new Date().getFullYear()} Aaghaz Foundation. All rights reserved.</p>
      </div>
    </Container>
  </footer>
);
