import { useState, useEffect } from "react";
import { motion } from "motion/react";
// import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

export default function Form() {
    const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    
    >
      <div className="container mx-auto px-4">

        <form>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Infos Client */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-sky-700 mb-6">
                {t("services.client_info")}
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder={t("services.full_name")}
                  required
                  className="w-full px-4 py-3 border rounded-lg"
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t("services.email")}
                  required
                  className="w-full px-4 py-3 border rounded-lg"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder={t("services.phone")}
                  required
                  className="w-full px-4 py-3 border rounded-lg"
                />
                <input
                  type="text"
                  name="address"
                  placeholder={t("services.address")}
                  required
                  className="w-full px-4 py-3 border rounded-lg"
                />
                <textarea
                  name="comments"
                  placeholder={t("services.comments")}
                  className="w-full px-4 py-3 border rounded-lg"
                  rows={4}
                />
              </div>
            </div>

          </div>
        </form>
      </div>
    </motion.section>
  );
}