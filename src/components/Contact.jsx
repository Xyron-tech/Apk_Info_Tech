
import {
    PhoneOutlined,
    MailOutlined,
    EnvironmentOutlined
} from "@ant-design/icons";

export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    e.target.reset();
  };

  return (
    <section className="contact-page">

      <div className="contact-header">

        <h1>
          Get In <span>Touch</span>
        </h1>

        <p>
          We'd love to hear from you. Send us your queries,
          project requirements, or collaboration ideas.
        </p>

        <div className="divider"></div>

      </div>

      <div className="contact-container">

        {/* FORM */}

        <div className="contact-card">

          <h2>Send Message</h2>

          <form onSubmit={handleSubmit}>

            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              required
            />

            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />

            <label>Phone Number</label>
            <input
              type="text"
              placeholder="+91 XXXXX XXXXX"
            />

            <label>Service</label>
            <select>
              <option>Select Service</option>
              <option>Internship</option>
              <option>Client Services</option>
              <option>Placement Services</option>
            </select>

            <label>Message</label>

            <textarea
              placeholder="Tell us about your requirements..."
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

        {/* SINGLE BIG INFO CARD */}

        <div className="contact-info-card">

          <div className="info-box">

            <div className="info-icon">
              <PhoneOutlined />
            </div>

            <h3>Phone</h3>

            <p>+91 98848 75551</p>
            <p>+91 89394 10255</p>
            <p>+91 63812 72033</p>

          </div>

          <div className="info-box">

            <div className="info-icon">
              <MailOutlined />
            </div>

            <h3>Email</h3>

            <p>official@apkinfotech.in</p>
            <p>hr@apkinfotech.in</p>

          </div>

          <div className="info-box">

            <div className="info-icon">
              <EnvironmentOutlined />
            </div>

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