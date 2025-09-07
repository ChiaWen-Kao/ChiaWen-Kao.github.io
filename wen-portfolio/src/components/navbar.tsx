import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

// Import components
import { Button } from "../components/button";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Works", href: "/works", current: false },
  { name: "Blog", href: "/blog", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" id="navbar" className="relative font-telugu z-10">
      <div className="mx-auto max-w-7xl px-2 py-2 sm:px-6 lg:px-8 sm:py-2 lg:py-6">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Image
                alt="Wen's Logo"
                src="/logo.svg"
                className="h-10 w-auto"
                width={200}
                height={100}
              />
            </div>
            <div className="hidden sm:block ml-auto">
              <div className="flex justify-end space-x-5">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "text-foreground"
                        : "text-gray-400 hover:text-foreground",
                      "relative text-body font-telugu uppercase px-3 py-2 transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-foreground before:origin-center before:h-[1px] before:w-0 hover:before:w-[40%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-foreground after:origin-center after:h-[1px] after:w-0 hover:after:w-[40%] after:bottom-0 after:right-[50%]"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden sm:block">
            <Button variant="filled" colour="cta">
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden text-center">
        <div className="space-y-4 px-2 pt-4 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "text-foreground"
                  : "text-gray-400 hover:text-foreground",
                "block font-telugu rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
          {/* Mobile Contact Button */}
          <Button variant="filled" colour="cta" className="w-80 mt-2">
            Contact Me
          </Button>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
