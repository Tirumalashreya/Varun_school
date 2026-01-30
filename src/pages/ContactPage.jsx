import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

// ✅ Use RELATIVE imports
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    senderName: "",
    senderEmail: "",
    subject: "",
    messageContent: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 🔥 TEMP backend simulation
    setTimeout(() => {
      console.log("Form Data:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        senderName: "",
        senderEmail: "",
        subject: "",
        messageContent: "",
      });

      setTimeout(() => setIsSubmitted(false), 4000);
    }, 1500);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc" }}>
      <Header />

      {/* HERO */}
      <section style={{ background: "#2563eb", color: "white", padding: "5rem 2rem" }}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: "3rem", marginBottom: "1rem" }}
        >
          Get in Touch
        </motion.h1>
        <p style={{ fontSize: "1.1rem", maxWidth: "600px" }}>
          Have questions or need more information? Send us a message and we’ll respond shortly.
        </p>
      </section>

      {/* CONTENT */}
      <section style={{ padding: "4rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>

          {/* INFO */}
          <div>
            <h2>Contact Information</h2>

            {[
              { icon: MapPin, title: "Address", value: "123 Education Street, City" },
              { icon: Phone, title: "Phone", value: "(123) 456-7890" },
              { icon: Mail, title: "Email", value: "info@school.edu" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
                <item.icon />
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* FORM */}
          <div style={{ background: "white", padding: "2rem", borderRadius: "8px" }}>
            <h2>Send a Message</h2>

            <AnimatePresence>
              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  style={{ textAlign: "center", padding: "2rem" }}
                >
                  <CheckCircle size={48} color="green" />
                  <h3>Message Sent!</h3>
                  <p>We’ll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ marginTop: "1.5rem" }}>
                  <input
                    name="senderName"
                    placeholder="Your Name"
                    value={formData.senderName}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />

                  <input
                    name="senderEmail"
                    type="email"
                    placeholder="Email"
                    value={formData.senderEmail}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />

                  <input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />

                  <textarea
                    name="messageContent"
                    placeholder="Your message"
                    value={formData.messageContent}
                    onChange={handleChange}
                    required
                    rows={4}
                    style={inputStyle}
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={buttonStyle}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send size={16} />
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ---------- styles ---------- */

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "10px",
  marginBottom: "10px",
};

const buttonStyle = {
  marginTop: "10px",
  padding: "10px",
  width: "100%",
  background: "#2563eb",
  color: "white",
  border: "none",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  gap: "8px",
};
