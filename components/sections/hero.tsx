"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export function Hero() {
  const t = useTranslations("hero");
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4"
    >
      <motion.div
        className="container mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-2"
        >
          {t("greeting")}
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
        >
          {t("name")}
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-200 mb-6"
        >
          {t("role")}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8"
        >
          {t("description")}
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-4 justify-center">
          <a
            href={`/${currentLocale}#contact`}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
          >
            {t("cta")}
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <a
            href={`/${currentLocale}#about`}
            className="inline-flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <span className="text-sm mb-2">{t("scrollDown")}</span>
            <motion.svg
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </motion.svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
