"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { socialLinks } from "@/lib/data";
import { ContactForm } from "@/components/ui/contact-form";
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";

export function Contact() {
  const t = useTranslations("contact");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactMethods = [
    {
      icon: <SiGmail className="text-red-500" />,
      label: t("email"),
      value: socialLinks.email,
      href: `mailto:${socialLinks.email}`,
    },
    {
      icon: <SiLinkedin className="text-blue-600" />,
      label: t("linkedin"),
      value: "LinkedIn Profile",
      href: socialLinks.linkedin,
    },
    {
      icon: <SiGithub className="text-gray-800" />,
      label: t("github"),
      value: "GitHub Profile",
      href: socialLinks.github,
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 px-4 bg-white"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            {t("subtitle")}
          </p>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="grid gap-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all hover:-translate-y-1 group flex items-center gap-4"
                >
                  <div className="text-4xl group-hover:scale-110 transition-transform">
                    {method.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-gray-800">
                      {method.label}
                    </h3>
                    <p className="text-sm text-gray-600 break-words">
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
