"use client";

export default function Footer() {
  return (
    <footer className="rounded-xl mx-auto max-w-7xl px-6 py-8 md:px-8 md:py-6" id="footer">
      <div>
        <div className="flex flex-col md:flex-row items-center justify-between md:items-center md:justify-between">
          <a
            href="https://chiawen-kao.github.io/"
            className="flex items-center mb-4 sm:mb-0 rtl:space-x-reverse"
          >
            <img src="/logo.svg" className="w-30" alt="Wen's Logo" />
          </a>
          <ul className="flex flex-col md:flex-row items-center text-body text-caption font-telugu gap-8">
            <li>
              <a
                href="https://chiawen-kao.github.io/"
                className="me-4 md:me-6 uppercase"
              >
                home
              </a>
            </li>
            <li>
              <a
                href="https://chiawen-kao.github.io/about"
                className="me-4 md:me-6 uppercase"
              >
                about
              </a>
            </li>
            <li>
              <a
                href="https://chiawen-kao.github.io/works"
                className="me-4 md:me-6 uppercase"
              >
                works
              </a>
            </li>
            <li>
              <a
                href="https://chiawen-kao.github.io/blog"
                className="me-4 md:me-6 uppercase"
              >
                blog
              </a>
            </li>
            <li>
              <a
                href="https://chiawen-kao.github.io/contact"
                className="me-4 md:me-6 uppercase"
              >
                contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-caption border-t-[0.2] sm:mx-auto lg:my-8" />
        <span className="flex text-sm text-gray-400 justify-center font-montserrat">
          © 2025 Chia-Wen, Kao · All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
