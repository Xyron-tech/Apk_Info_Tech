import "../style.css";

import {
    InstagramOutlined,
    LinkedinOutlined,
    WhatsAppOutlined,
    PhoneOutlined,
    MailOutlined,
    EnvironmentOutlined
} from "@ant-design/icons";

import { useNavigate } from "react-router-dom";

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
            "No 65, 5th street, Ram Nagar, Mannivakkam, Chennai - 600048",

        mapLink:
            "https://www.google.com/maps/search/?api=1&query=No+65+5th+Street+Ram+Nagar+Mannivakkam+Chennai+600048"
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
                        style={{ cursor: "pointer" }}
                    >

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
                        professional services since 2020.

                    </p>

                    <div className="footer-socials">

                        <a href="#" className="social-link">

                            <InstagramOutlined  />

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

                                <a
                                    href={item.mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="direction-btn"
                                >
                                    Get Direction
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="footer-bottom">
                <p>
                    © 2025 APK INFOTECH IT SOLUTIONS.
                    All rights reserved.
                </p>
            </div>
        </footer>

    );
};

export default Footer;