import { useState } from "react";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  SendOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  LoadingOutlined,
} from "@ant-design/icons";

const WEB3FORMS_ACCESS_KEY = "37468484-7779-47d5-ab5b-f4dde162230b";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [resultMsg, setResultMsg] = useState("");

  /* ── Input handler ── */
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  /* ── Submit handler — Web3Forms fetch ── */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setResultMsg("");

    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        from_name:  "APK INFOTECH Contact Form",
        subject:    `New Enquiry from ${formData.name}`,
        name:       formData.name,
        email:      formData.email,
        phone:      formData.phone || "Not provided",
        service:    formData.service || "Not selected",
        message:    formData.message,
        // Honeypot spam protection
        botcheck:   "",
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setResultMsg("Message sent successfully! We'll get back to you soon.");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatus("error");
        setResultMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setResultMsg("Network error. Please check your connection and try again.");
    }
  };

  return (
    <section className="contact-page">

      <div className="contact-header">
        <h1>Get In <span>Touch</span></h1>
        <p>
          We'd love to hear from you. Send us your queries,
          project requirements, or collaboration ideas.
        </p>
        <div className="divider"></div>
      </div>

      <div className="contact-container">

        {/* ── FORM ── */}
        <div className="contact-card">
          <form onSubmit={handleSubmit}>

            {/* Honeypot — hidden, catches bots */}
            <input type="checkbox" name="botcheck" style={{ display: "none" }} />

            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="+91 XXXXX XXXXX"
              value={formData.phone}
              onChange={handleChange}
            />

            <label>Service</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Select Service</option>
              <option value="Internship">Internship</option>
              <option value="Client Services">Client Services</option>
              <option value="Placement Services">Placement Services</option>
            </select>

            <label>Message</label>
            <textarea
              name="message"
              placeholder="Tell us about your requirements..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            {/* ── Result message ── */}
            {status === "success" && (
              <div className="form-result form-result--success">
                <CheckCircleOutlined />
                <span>{resultMsg}</span>
              </div>
            )}
            {status === "error" && (
              <div className="form-result form-result--error">
                <CloseCircleOutlined />
                <span>{resultMsg}</span>
              </div>
            )}

            <button
              type="submit"
              className="send-btn"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <LoadingOutlined spin />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <SendOutlined style={{ transform: "rotate(312deg)" }} />
                  <span>Send Message</span>
                </>
              )}
            </button>

          </form>
        </div>

        {/* ── INFO CARD ── */}
        <div className="contact-info-card">

          <div className="info-box">
            <div className="info-icon"><PhoneOutlined /></div>
            <h3>Phone</h3>
            <p>+91 98848 75551</p>
            <p>+91 89394 10255</p>
            <p>+91 63812 72033</p>
          </div>

          <div className="info-box">
            <div className="info-icon"><MailOutlined /></div>
            <h3>Email</h3>
            <p>official@apkinfotech.in</p>
            <p>hr@apkinfotech.in</p>
          </div>

          <div className="info-box">
            <div className="info-icon"><EnvironmentOutlined /></div>
            <h3>Location</h3>
            <p>
              No 65, 3rd floor, 5th street, <br />
              Ram Nagar, <br />
              Mannivakkam<br />
              Chennai - 048
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}