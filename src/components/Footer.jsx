import "../style.css";

import {
    InstagramOutlined,
    LinkedinOutlined,
    WhatsAppOutlined,
    PhoneOutlined,
    MailOutlined,
    EnvironmentOutlined
} from "@ant-design/icons";
import mapImage from "../assets/map image.webp";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";


const footerLinks = [

    {
        name: "Home",
        path: "/"
    },

    {
        name: "Services",
        path: "/services"
    },

    {
        name: "Courses",
        path: "/courses"
    },

    {
        name: "About",
        path: "/about"
    },

    {
        name: "Achievements",
        path: "/achievement"
    },

    {
        name: "Contact",
        path: "/contact"
    }

];

const servicesLinks = [

    {
        name: "Client Services",
        path: "/services"
    },

    {
        name: "Internships",
        path: "/services"
    },

    {
        name: "Courses",
        path: "/courses"
    },

    {
        name: "Placement Support",
        path: "/services"
    }

];

const contactInfo = [

    {
        type: "phone",
        value: "+91 98848 75551",
        href: "tel:+919884875551"
    },

    {
        type: "phone",
        value: "+91 89394 10255",
        href: "tel:+918939410255"
    },

    {
        type: "phone",
        value: "+91 63812 72033",
        href: "tel:+916381272033"
    },

    {
        type: "mail",
        value: "official@apkinfotech.in",
        href: "mailto:official@apkinfotech.in"
    },

    {
        type: "mail",
        value: "hr@apkinfotech.in",
        href: "mailto:hr@apkinfotech.in"
    },

    {
        type: "location",
        value:
            "No 65, 3rd floor, 5th street, Ram Nagar, Mannivakkam, Chennai - 048",

        mapLink:"https://www.google.com/maps/place/65,+Ram+Nagar+5th+St,+Murugu+Nagar,+Ram+Nagar,+Velachery,+Chennai,+Tamil+Nadu+600042/@12.9718082,80.2128942,16.34z/data=!4m13!1m7!3m6!1s0x3a525d914a94c6f5:0x17f5a4aa07e6159e!2s65,+Ram+Nagar+5th+St,+Murugu+Nagar,+Ram+Nagar,+Velachery,+Chennai,+Tamil+Nadu+600042!3b1!8m2!3d12.9720116!4d80.2169151!3m4!1s0x3a525d914a94c6f5:0x17f5a4aa07e6159e!8m2!3d12.9720116!4d80.2169151?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
            }

];

const Footer = () => {

    const navigate = useNavigate();

    return (

        <footer className="footer">

            <div className="footer-container">

                <div className="footer-brand">

                    <div
                        className="footer-logo"
                        onClick={() => navigate("/")}
                        style={{ cursor: "pointer", gap: "10px" }}
                    >


                        <div className="navbar-logo">
                            <img src={logo} alt="APK Info Tech" />
                        </div>

                        <div className="footer-logo-text">

                            APK INFOTECH

                            <span>
                                IT SOLUTIONS PVT LTD
                            </span>

                        </div>

                    </div>

                    <p className="footer-desc">

                        Empowering careers and businesses through innovative
                        placement solutions, cutting-edge courses, and
                        professional services since 2026.

                    </p>

                    <div className="footer-socials">

                        <a href="https://www.instagram.com/apk_infotech?igsh=d2s5enZyYmE4aW1m" className="social-link">

                            <InstagramOutlined />

                        </a>

                        <a href="#" className="social-link">

                            <LinkedinOutlined />

                        </a>

                        <a
                            href="https://wa.me/918939410255"
                            className="social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <WhatsAppOutlined />

                        </a>

                    </div>

                </div>

                <div className="footer-column">

                    <h3>Services</h3>
                    <div className="acc-divider-footer" />
                    <ul>

                        {servicesLinks?.map((service, index) => (

                            <li key={index}>

                                <a
                                    onClick={() => navigate(service.path)}
                                    style={{ cursor: "pointer" }}
                                >
                                    {service.name}
                                </a>

                            </li>

                        ))}

                    </ul>

                </div>

                <div className="footer-column">

                    <h3>Quick Links</h3>
                    <div className="acc-divider-footer " />

                    <ul>

                        {footerLinks?.map((link, index) => (

                            <li key={index}>

                                <a
                                    onClick={() => navigate(link.path)}
                                    style={{ cursor: "pointer" }}
                                >
                                    {link.name}
                                </a>

                            </li>

                        ))}

                    </ul>

                </div>
                <div className="footer-column footer-contact">

                    <h3>Contact Info</h3>
                    <div className="acc-divider-footer " />

                    {contactInfo?.map((item, index) => (

                        <div key={index} className="contact-item">

                            <p>

                                {item.type === "phone" &&
                                    <PhoneOutlined />
                                }

                                {item.type === "mail" &&
                                    <MailOutlined />
                                }

                                {item.type === "location" &&
                                    <EnvironmentOutlined />
                                }

                                {item.type === "location" ? (

                                    item.value

                                ) : (

                                    <a href={item.href}>
                                        {item.value}
                                    </a>

                                )}
                            </p>
                            {item?.type === "location" && (
                                <div className="location-actions">

                                    <a
                                        href={item.mapLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={mapImage}
                                            alt="Location Map"
                                            className="footer-map-image"
                                        />
                                    </a>

                                    <a
                                        href={item.mapLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="direction-btn"
                                    >
                                        <EnvironmentOutlined />
                                        Get Direction
                                    </a>

                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="footer-bottom">
                <p>
                    © 2026 APK INFOTECH IT SOLUTIONS.
                    All rights reserved.
                </p>
            </div>
        </footer>

    );
};

export default Footer;