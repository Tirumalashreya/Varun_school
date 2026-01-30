import Navbar from "../components/Navbar";
import AnimatedText from "../components/AnimatedText";
import "./NoticesPage.css";

export default function NoticesPage() {
  return (
    <>
      <Navbar />

      <section className="notices-hero">
        <AnimatedText
          text="School Notices & Announcements"
          className="notices-title"
        />

        <p className="notices-subtitle">
          Stay informed with the latest updates, events, and important
          information from our school community.
        </p>
      </section>

      {/* notices cards below */}
    </>
  );
}
