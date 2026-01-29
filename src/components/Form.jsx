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
    <form>
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-2xl font-bold mb-6">
          Informations du clients
        </h3>
        <div className="space-y-4">
          <input 
            type="text"
            name="name"
            placeholder="Nom complet"
            required
            value={clientInfo.name}
            onChange={handleClientInfoChange}
            className="w-full px-4 py-3 border rounded-lg"
          />
          <input 
            type="email"
            name="email"
            placeholder="Email"
            required
            value={clientInfo.email}
            onChange={handleClientInfoChange}
            className="w-full px-4 py-3 border rounded-lg"
          />
          <input 
            type="tel"
            name="phone"
            placeholder="Numéro de téléphone"
            required
            value={clientInfo.phone}
            onChange={handleClientInfoChange}
            className="w-full px-4 py-3 border rounded-lg"
          />
          <textarea 
            name="comments"
            placeholder="Informations suplémentaires"
            required
            value={clientInfo.comments}
            onChange={handleClientInfoChange}
            className="w-full px-4 py-3 border rounded-lg"
            rows={4}
          />
        </div>
      </div>
    </form>
  );
}