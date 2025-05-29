import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../layouts/nav";
import Footer from "../layouts/Footer";
import emailjs from "@emailjs/browser";
import "./style.css";
import contactImage from "../images/image.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addToEmailQueue,
  getEmailQueue,
  removeFirstFromQueue,
} from "./emailQueue";

export default function Contact() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [Address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  React.useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      toast.info(t("back_online"));
      processEmailQueue();
    };
    const handleOffline = () => {
      setIsOnline(false);
      toast.error(t("offline_warning"));
    };
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
    // eslint-disable-next-line
  }, []);

  const processEmailQueue = async () => {
    const queue = getEmailQueue();
    if (queue.length === 0) return;
    for (const emailData of queue) {
      try {
        await emailjs.send(
          "service_c49jezn",
          "template_wlxrb03",
          emailData,
          "ZPS5Sc3gm1leXepeh"
        );
        removeFirstFromQueue();
        toast.success(t("queued_message_sent"));
      } catch {
        break;
      }
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();
    const emailData = {
      from_name: email,
      to_name: "cabinet d'Avocats-D.Mbouobouo",
      message: `${message} ${Address} ${phone} ${name}`,
      reply_to: "daoudambouobouo@gmail.com",
    };
    if (!isOnline) {
      addToEmailQueue(emailData);
      toast.info(t("email_queued"));
      return;
    }
    try {
      const sending = await emailjs.send(
        "service_c49jezn",
        "template_wlxrb03",
        emailData,
        "ZPS5Sc3gm1leXepeh"
      );
      if (sending.status === 200) {
        toast.success(t("message_sent"));
        setAddress("");
        setPhone("");
        setName("");
        setMessage("");
        setEmail("");
      } else {
        toast.error(t("message_not_sent"));
      }
    } catch (error) {
      addToEmailQueue(emailData);
      toast.error(t("error_sending_queue"));
    }
  };
  return (
    <div className="all">
      <Navbar />
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto bg-white shadow-lg p-8 flex flex-col md:flex-row items-center">
          <div className="flex-1 flex justify-center">
            <img
              src={contactImage}
              alt="Contact"
              className="w-3/4 md:w-full object-contain scale-75"
            />
          </div>
          <div className="flex-1 p-8">
            <h2 className="text-3xl font-semibold mb-4">
              {" "}
              {t("contact_us")}{" "}
            </h2>
            <p className="text-lg mb-6">
              {t("fill_out_form_to_contact_us")}
            </p>
            <form onSubmit={handleSend}>
              {!isOnline && (
                <div className="mb-4 text-red-600 font-semibold bg-yellow-100 p-2 rounded">
                  {t("offline_warning")}
                </div>
              )}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t("your_name")}
                  className="col-span-2 md:col-span-1 p-2 border border-gray-300 rounded"
                />
                <input
                  type="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("your_email")}
                  className="col-span-2 md:col-span-1 p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="number"
                  placeholder={t("phone_number")}
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="col-span-2 md:col-span-1 p-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  value={Address}
                  required
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder={t("your_address")}
                  className="col-span-2 md:col-span-1 p-2 border border-gray-300 rounded"
                />
              </div>
              <textarea
                placeholder={t("your_message")}
                value={message}
                required
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4"
                rows={4}
              />
              <button className="bg-red-950 text-white px-4 py-2 rounded">
                {t("send_message")}
              </button>
            </form>
          </div>
        </div>

        <section className=" flex bg-gray-100 py-8 m-10">
          <div className=" grid grid-cols-1 sm:grid-cols-4 bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">
                {t("office_location")}
              </h3>
              <p>SCDP NSAM Yaoundé face ECHE garage 1er etage</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">
                {t("working_hours")}
              </h3>
              <p>{t("monday_friday")}: 8:00 - 17:00</p>
              <p>{t("saturday")}: 9:00 - 14:00</p>
              <p>{t("sunday")}: {t("closed")}</p>
              maps me 
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">
                {t("phone_contact")}
              </h3>
              <p>+237 677 516 461</p>
              <p>+39 348 178 7560</p>
                <button>call me</button>
            </div>
            

            <div>
              <h3 className="text-xl font-semibold mb-4">
                {t("email_contact")}
              </h3>
              <p>daoudambouobouo@gmail.com</p>
                  <button>write me</button>
            </div>
        
          </div>
        </section>
      </div>
      <Footer />
      <ToastContainer position="top-right" autoClose={4000} />
    </div>
  );
}
