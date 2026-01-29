import { useState, useEffect } from "react";
import { motion } from "motion/react";
// import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

export default function Form() {
    const { t } = useTranslation();
    const [clientInfo, setClientInfo] = useState({
      name: "",
      email: "",
      phone: "",
      comments: ""
    })

    const handleClientInfoChange = (e) => {
      const { name, value } = e.target
      setClientInfo((prev) => ({...prev, [name]: value}))
    }

  return (
    <form className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label
            htmlFor="name"
            className="block text-xs font-medium uppercase tracking-[0.16em] text-slate-300"
          >
            {t("form.name_label")}
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder={t("form.name_placeholder")}
            required
            value={clientInfo.name}
            onChange={handleClientInfoChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-950/40 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="email"
            className="block text-xs font-medium uppercase tracking-[0.16em] text-slate-300"
          >
            {t("form.email_label")}
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder={t("form.email_placeholder")}
            required
            value={clientInfo.email}
            onChange={handleClientInfoChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-950/40 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label
          htmlFor="phone"
          className="block text-xs font-medium uppercase tracking-[0.16em] text-slate-300"
        >
          {t("form.phone_label")}
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          placeholder={t("form.phone_placeholder")}
          required
          value={clientInfo.phone}
          onChange={handleClientInfoChange}
          className="w-full rounded-lg border border-slate-700 bg-slate-950/40 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
        />
      </div>

      <div className="space-y-1">
        <label
          htmlFor="comments"
          className="block text-xs font-medium uppercase tracking-[0.16em] text-slate-300"
        >
          {t("form.message_label")}
        </label>
        <textarea
          id="comments"
          name="comments"
          placeholder={t("form.message_placeholder")}
          required
          value={clientInfo.comments}
          onChange={handleClientInfoChange}
          className="w-full rounded-lg border border-slate-700 bg-slate-950/40 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
          rows={4}
        />
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.97, y: 0 }}
        transition={{ type: "spring", stiffness: 280, damping: 18 }}
        className="inline-flex items-center justify-center rounded-full bg-slate-100 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-sm shadow-slate-900/40 hover:bg-slate-200"
      >
        {t("form.submit_label")}
      </motion.button>
    </form>
  );
}