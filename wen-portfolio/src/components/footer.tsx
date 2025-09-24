"use client";

export default function Footer() {
  return (
    <footer className="rounded-xl mx-auto max-w-7xl px-2 py-2 sm:px-6 lg:px-8 sm:py-2 lg:py-6">
      <div>
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://chiawen-kao.github.io/"
            className="flex items-center mb-4 sm:mb-0 rtl:space-x-reverse"
          >
            <img src="/logo.svg" className="h-8" alt="Wen's Logo" />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-body text-caption font-telugu sm:mb-0 gap-8">
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
        <hr className="my-6 border-caption border-t-[0.2] sm:mx-auto lg:my-8 " />
        <span className="block text-sm text-gray-400 sm:text-center font-montserrat">
          © 2025{" "}
          <a href="https://chiawen-kao.github.io/" className="hover:underline">
            Chia-Wen, Kao
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
