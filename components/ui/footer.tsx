"use client";

import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} João Pedro Coqueiro de Azevedo. {t("rights")}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            {t("madeWith")} ❤️ {t("by")} João Pedro Coqueiro de Azevedo
          </p>
        </div>
      </div>
    </footer>
  );
}
