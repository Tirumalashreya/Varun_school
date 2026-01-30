import "./HomePage.css";
import Navbar from "../components/Navbar";
import schoolImg from "../assets/school.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* ===== ANIMATION VARIANTS ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* ===== HERO SECTION (PAGE LOAD ANIMATION) ===== */}
      <section className="hero">
        <div className="hero-image">
          <img src={schoolImg} alt="School Building" />
        </div>

        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.span className="tagline" variants={fadeUp}>
            EXCELLENCE IN EDUCATION
          </motion.span>

          <motion.h1 variants={fadeUp}>
            Excellence in Education, <br />
            Tradition in Values.
          </motion.h1>

          <motion.p variants={fadeUp}>
            At Varum Model High School, we cultivate academic excellence
            and character development. Our commitment to quality
            education shapes tomorrow&apos;s leaders.
          </motion.p>

          <motion.button className="hero-btn" variants={fadeUp}>
            Discover Our Vision →
          </motion.button>
        </motion.div>
      </section>

      {/* ===== FUTURE OF LEARNING (SCROLL ANIMATION) ===== */}
      <motion.section
        className="future"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="future-left">
          <span className="section-tag">PROJECT SPOTLIGHT</span>

          <h2>
            The Future <br />
            <span>of Learning.</span>
          </h2>
        </div>

        <div className="future-right">
          <p className="future-desc">
            We cultivate curious minds and nurture future leaders.
            Our commitment to academic excellence creates an
            environment where every student thrives.
          </p>

          <div className="future-features">
            <div className="feature">
              <h3>Academic Excellence</h3>
              <p>
                Rigorous curriculum designed to challenge and inspire
                students to reach their full potential.
              </p>
            </div>

            <div className="feature">
              <h3>Community Focus</h3>
              <p>
                Building strong relationships between students, staff,
                and families for a supportive network.
              </p>
            </div>
          </div>

          <span className="future-link">
            Read More About Our Philosophy →
          </span>
        </div>
      </motion.section>

      {/* ===== HOME CARDS (STAGGER SCROLL) ===== */}
      <motion.section
        className="home-cards"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.div className="cards-grid" variants={stagger}>
          <motion.div className="card notices" variants={fadeUp}>
            <div className="card-icon">📖</div>
            <h3>School Notices</h3>
            <p>
              Stay updated with the latest announcements, schedules,
              and important information.
            </p>

            <Link to="/notices" className="card-link">
              View Notices →
            </Link>
          </motion.div>

          <motion.div className="card gallery" variants={fadeUp}>
            <div className="overlay">
              <span>📷</span>
              <h3>Photo Gallery</h3>
            </div>
          </motion.div>

          <motion.div className="right-cards" variants={stagger}>
            <motion.div className="card staff" variants={fadeUp}>
              <span>👥</span>
              <h3>Our Staff</h3>
              <p>Meet the team</p>
            </motion.div>

            <motion.div className="card contact" variants={fadeUp}>
              <span>✉️</span>
              <h3>Contact Us</h3>
              <p>Get in touch</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ===== ANNOUNCEMENTS (SCROLL ANIMATION) ===== */}
      <motion.section
        className="announcements"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="announcements-header">
          <h2>Latest Announcements</h2>

          <Link to="/notices" className="view-all">
            View All Notices →
          </Link>
        </div>

        <div className="announcement-grid">
          {["MAY 15", "MAY 10", "MAY 8"].map((date, i) => (
            <motion.div
              className="announcement-card"
              key={i}
              variants={fadeUp}
            >
              <div className="announcement-img">
                <span className="date">{date}</span>
                {i === 0 && <span className="urgent">URGENT</span>}
              </div>
              <div className="announcement-content">
                <span className="type">ANNOUNCEMENT</span>
                <h3>Important School Update</h3>
                <p>
                  Please check the notice for full details and updates.
                </p>
                <span className="read-more">Read Full Notice →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== STATS ===== */}
      <motion.section
        className="stats"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        {[
          ["25+", "Years of Excellence"],
          ["100%", "University Acceptance"],
          ["1:8", "Teacher Student Ratio"],
        ].map(([num, label], i) => (
          <motion.div className="stat" key={i} variants={fadeUp}>
            <h2>{num}</h2>
            <p>{label}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* ===== CTA ===== */}
      <motion.section
        className="cta"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2>Ready to begin your journey?</h2>
        <p>
          Join a community dedicated to innovation, integrity, and
          intellect. Applications are now open.
        </p>

        <div className="cta-buttons">
          <button className="apply-btn">Apply Now</button>
          <button className="visit-btn">Schedule a Visit</button>
        </div>
      </motion.section>
    </>
  );
}
