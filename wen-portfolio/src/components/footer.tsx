/**
 * Component: Footer
 *
 * Renders the website footer section with logo, navigation links, and copyright information.
 * Designed to be responsive, supporting both mobile and desktop layouts.
 *
 * Features:
 * - Displays the site logo linking to the home page.
 * - Navigation links to main sections (Home, About, Works, Blog).
 * - Responsive layout with vertical stacking on mobile and horizontal alignment on desktop.
 *
 * @returns {JSX.Element} A responsive footer component with site navigation and branding.
 *
 * @example
 * import Footer from "@/components/Footer";
 *
 * export default function HomePage() {
 *   return (
 *     <Footer />
 *   );
 * }
 */
"use client";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Works", href: "/works", current: false },
  { name: "Blog", href: "/blog", current: false },
  { name: "Contact", href: "/contact", current: false},
];

export default function Footer() {
  return (
    <footer className="mx-auto px-4 md:px-28 py-2 md:py-8" id="footer">
      <div>
        <div className="flex flex-col md:flex-row items-center justify-between md:items-center md:justify-between">
          <a href="https://chiawen-kao.github.io/" className="flex items-center mb-4 sm:mb-0">
            <img src="/logo.svg" className="w-30" alt="Wen's Logo" />
          </a>
          <ul className="flex flex-col md:flex-row items-center gap-8 text-body text-caption font-telugu">
            {navigation.map((item) => {
              return (
                <li key={item.name}>
                  <a href={item.href} className="uppercase">
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <hr className="border-gray-400 border-t-[0.2] sm:mx-auto my-6 lg:my-8" />
        <span className="flex justify-center text-sm text-gray-400 font-montserrat">
          © 2025 Chia-Wen, Kao · All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}