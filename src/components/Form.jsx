import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

export default function Form() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const [clientInfo, setClientInfo] = useState({
    name: "",
    email: "",
    phone: "",
    comments: ""
  });

  const handleClientInfoChange = (e) => {
    const { name, value } = e.target;
    setClientInfo((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: clientInfo.name,
      from_email: clientInfo.email,
      phone: clientInfo.phone,
      message: clientInfo.comments,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("success");
        setClientInfo({ name: "", email: "", phone: "", comments: "" });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setStatus(""), 5000);
      });
  };

  return (
    <form onSubmit={sendEmail} className="space-y-4">
      {/* --- Tes champs restent identiques --- */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label htmlFor="name" className="block text-xs font-medium uppercase tracking-[0.16em] text-slate-300">
            {t("form.name_label")}
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            value={clientInfo.name}
            onChange={handleClientInfoChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-950/40 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="email" className="block text-xs font-medium uppercase tracking-[0.16em] text-slate-300">
            {t("form.email_label")}
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={clientInfo.email}
            onChange={handleClientInfoChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-950/40 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor="phone" className="block text-xs font-medium uppercase tracking-[0.16em] text-slate-300">
          {t("form.phone_label")}
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          required
          value={clientInfo.phone}
          onChange={handleClientInfoChange}
          className="w-full rounded-lg border border-slate-700 bg-slate-950/40 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="comments" className="block text-xs font-medium uppercase tracking-[0.16em] text-slate-300">
          {t("form.message_label")}
        </label>
        <textarea
          id="comments"
          name="comments"
          required
          value={clientInfo.comments}
          onChange={handleClientInfoChange}
          className="w-full rounded-lg border border-slate-700 bg-slate-950/40 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
          rows={4}
        />
      </div>

      <div className="flex flex-col gap-2">
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.97, y: 0 }}
          className="inline-flex items-center justify-center rounded-full bg-slate-100 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-sm disabled:opacity-50"
        >
          {isSubmitting ? "Envoi en cours..." : t("form.submit_label")}
        </motion.button>

        {status === "success" && <p className="text-green-400 text-xs">Message envoyé avec succès !</p>}
        {status === "error" && <p className="text-red-400 text-xs">Une erreur est survenue, réessayez.</p>}
      </div>
    </form>
  );
}