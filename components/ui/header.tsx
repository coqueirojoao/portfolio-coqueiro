"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { BR, US } from "country-flag-icons/react/3x2";

export function Header() {
  const t = useTranslations("nav");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1];

  const navItems = [
    { href: "#home", label: t("home") },
    { href: "#about", label: t("about") },
    { href: "#skills", label: t("skills") },
    { href: "#projects", label: t("projects") },
    { href: "#contact", label: t("contact") },
  ];

  const toggleLocale = () => {
    const newLocale = currentLocale === "pt" ? "en" : "pt";
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    window.location.href = newPath;
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href={`/${currentLocale}#home`} className="text-2xl font-bold">
            <span className="text-blue-600">{"<"}</span>
            JC
            <span className="text-blue-600">{" />"}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={`/${currentLocale}${item.href}`}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLocale}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Change language"
              title={currentLocale === "pt" ? "Switch to English" : "Mudar para Português"}
            >
              {currentLocale === "pt" ? (
                <US className="w-6 h-6" title="English" />
              ) : (
                <BR className="w-6 h-6" title="Português" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 bg-gray-700 transition-all ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-gray-700 transition-all ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-gray-700 transition-all ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={`/${currentLocale}${item.href}`}
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
