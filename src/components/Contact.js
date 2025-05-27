import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../layouts/nav";
import Footer from "../layouts/Footer";
import emailjs from "@emailjs/browser";
import "./style.css";

export default function Contact() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [Address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSend = async (e) => {
    e.preventDefault();
    try {
      const sending = await emailjs.send(
        "service_c49jezn",
        "template_wlxrb03",
        {
          from_name: email,
          to_name: "cabinet d'Avocats-D.Mbouobouo",
          message: `${message} ${Address} ${phone} ${name}`,
          reply_to: "daoudambouobouo@gmail.com",
        },
        "ZPS5Sc3gm1leXepeh"
      );

      if (sending.status === 200) {
        alert(t('message_sent'));
        setAddress("");
        setPhone("");
        setName("");
        setMessage("");
        setEmail("");
      } else {
        alert(t('message_not_sent'));
      }
    } catch (error) {
      alert(t('error_sending'));
    }
  };

  return (
    <div className="all">
      <Navbar />
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {t('get_in_touch')}
            </h1>
            <p className="text-gray-600">
              {t('contact_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  {t('office_location')}
                </h3>
                <p>SCDP NSAM Yaoundé face ECHE garage 1er etage</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  {t('working_hours')}
                </h3>
                <p>{t('monday_friday')}: 8:00 - 17:00</p>
                <p>{t('saturday')}: 9:00 - 14:00</p>
                <p>{t('sunday')}: {t('closed')}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  {t('phone_contact')}
                </h3>
                <p>+237 677 516 461</p>
                <p>+39 348 178 7560</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  {t('email_contact')}
                </h3>
                <p>daoudambouobouo@gmail.com</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">
                {t('send_us_message')}
              </h2>
              <p className="text-gray-600 mb-6">
                {t('contact_form_desc')}
              </p>
              <form onSubmit={handleSend}>
                <div className="mb-4">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t('your_name')}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('your_email')}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t('phone_number')}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    value={Address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder={t('your_address')}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t('your_message')}
                    className="w-full p-2 border border-gray-300 rounded"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-900 text-white py-2 px-4 rounded hover:bg-red-800 transition-colors"
                >
                  {t('send_message')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
