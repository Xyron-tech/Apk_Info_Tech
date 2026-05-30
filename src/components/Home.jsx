import "../style.css";

import {
    MonitorOutlined,
    GlobalOutlined,
    MobileOutlined,
    DeploymentUnitOutlined,
    BookOutlined,
    LaptopOutlined,
    TrophyOutlined,
    UserAddOutlined,
    WhatsAppOutlined
} from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CourseSlider from "./Courseslider ";
import Accreditation from "./Accreditation";
import Contact from "./Contact";
import Course from "./Course";
import { Link } from "react-router-dom";


const Home = () => {

    const servicesData = [

        {
            title: "Tech Consultancy Services",
            description:
                "Expert technology consulting to help businesses adopt the right solutions and optimize processes.",
            icon: <MonitorOutlined />
        },

        {
            title: "Website Development",
            description:
                "Responsive and high-performance websites built using modern technologies.",
            icon: <GlobalOutlined />
        },

        {
            title: "App Development",
            description:
                "Custom Android and iOS mobile applications with scalable architecture.",
            icon: <MobileOutlined />
        },

        {
            title: "Hardware IoT Product",
            description:
                "Complete IoT solutions including hardware, firmware and cloud connectivity.",
            icon: <DeploymentUnitOutlined />
        },

        {
            title: "Courses",
            description:
                "Industry-ready training programs designed by experts for students and professionals.",
            icon: <BookOutlined />
        },

        {
            title: "Internship",
            description:
                "Hands-on internship opportunities with real-time projects and mentoring.",
            icon: <LaptopOutlined />
        },

        {
            title: "Placement Support",
            description:
                "Resume building, mock interviews and placement training for career success.",
            icon: <TrophyOutlined />
        }

    ];

    const coursesData = [

        {
            title: "Full Stack Development",
            description:
                "Frontend and backend development with real projects.",
            image:
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        },

        {
            title: "Artificial Intelligence",
            description:
                "Learn AI tools, machine learning and automation.",
            image:
                "https://images.unsplash.com/photo-1677442136019-21780ecad995"
        },

        {
            title: "Cyber Security",
            description:
                "Advanced security concepts and ethical hacking.",
            image:
                "https://images.unsplash.com/photo-1510511459019-5dda7724fd87"
        },

        {
            title: "UI UX Design",
            description:
                "Modern UI/UX designing with Figma and tools.",
            image:
                "https://images.unsplash.com/photo-1559028012-481c04fa702d"
        }

    ];

    const launchData = [
        {
            link: "https://docs.google.com/forms/d/e/1FAIpQLSeBUYiR5NKgq5vfsCip66shEFdUvE-uxSR1o5Jouf9WKkVRsw/viewform",
            img: "poster new launch.png",
        },
        {
            link: "https://docs.google.com/forms/d/e/1FAIpQLSeBUYiR5NKgq5vfsCip66shEFdUvE-uxSR1o5Jouf9WKkVRsw/viewform",
            img: "services poster.png",
        },
        {
            tag: "Client Services",
            title: "Corporate Staffing & Recruitment",
            desc: "End-to-end HR solutions...",
            img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600",
        },
        {
            tag: "Internship",
            title: "Live Internship Program",
            desc: "Work on real industry projects...",
            img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600",
        },
    ];

    return (

        <section className="home">
            <div className="hero-section">
                <div className="hero-left">
                    <span className="hero-tag">
                        Welcome To APK INFOTECH
                    </span>
                    <h1>
                        Build Your Career With
                        <span> APK INFOTECH</span>
                    </h1>
                    <p>
                        Empowering students and businesses through
                        innovative placement solutions, internships,
                        live projects, and industry-ready IT courses.
                    </p>
                    <div className="hero-buttons">

                        <Link to="/courses">
                            <button className="primary-btn">
                                Explore Courses
                            </button>
                        </Link>

                        <Link to="/contact">
                            <button className="secondary-btn">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="hero-right">
                    <img
                        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                        alt="Hero"
                    />
                </div>
            </div>
            <div className="stats-section">
                <div className="stat-card">
                    <h2>1000+</h2>
                    <p>Students Trained</p>
                </div>
                <div className="stat-card">
                    <h2>250+</h2>
                    <p>Placements</p>
                </div>
                <div className="stat-card">
                    <h2>50+</h2>
                    <p>Corporate Clients</p>
                </div>
                <div className="stat-card">
                    <h2>5+</h2>
                    <p>Years Experience</p>
                </div>
            </div>
            <div className="services-content">
                <h2>Our Services</h2>
                <p>
                    Comprehensive solutions to accelerate your
                    career and business growth
                </p>
                <div className="sec-divider"></div>
            </div>
            <div className="services-grid">
                {servicesData?.map((service, index) => (
                    <div
                        className={`service-card ${service.title === "Placement Support"
                            ? "placement-card"
                            : ""
                            }`}
                        key={index}
                    >
                        <div className="service-top-bar"></div>
                        <div className="service-icon">
                            {service?.icon}
                        </div>
                        <h3>
                            {service?.title}
                        </h3>
                        <p>
                            {service?.description}
                        </p>
                    </div>
                ))}
            </div>
            <section className="courses-section">
                <div className="section-title">
                    <h2>
                        Courses We Offer
                    </h2>
                    <p>
                        Industry-relevant programs to boost your career trajectory
                    </p>
                    <div className="sec-divider"></div>
                </div>
                <div className="courses-layout">
                    <div className="courses-fixed-card">
                        <img
                            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=80"
                            alt="Courses"
                        />
                        <span className="course-badge">
                            Explore All Programs
                        </span>
                        <h3>
                            Our Courses
                        </h3>
                        <p>
                            From Full Stack to AI, VLSI and Cyber Security
                            with real-world projects and placement support.
                        </p>
                        <button className="view-course-btn">
                            View All Courses
                        </button>
                    </div>
                    <div className="courses-slider-area">
                        <div className="courses-slider">
                            {[...coursesData, ...coursesData]?.map((course, index) => (
                                <div className="course-card" key={index}>
                                    <img src={course?.image} alt={course?.title} />
                                    <div className="course-content">
                                        <h4>{course?.title}</h4>
                                        <p>{course?.description}</p>
                                        <button>Learn More</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <CourseSlider />
            <Contact />
            <Accreditation />
            <div className="floating-buttons">
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeBUYiR5NKgq5vfsCip66shEFdUvE-uxSR1o5Jouf9WKkVRsw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="floating-register-btn"
                >
                    <UserAddOutlined />

                    <span className="register-text">
                        Register
                    </span>

                </a>
                <a
                    href="https://chat.whatsapp.com/DHsSv4faUAU9IzSBRJWKiy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="floating-whatsapp-btn"
                >

                    <WhatsAppOutlined />

                    <span className="whatsapp-text">
                        WhatsApp
                    </span>

                </a>
            </div>
        </section>
    );
};

export default Home;