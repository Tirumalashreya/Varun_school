import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>Varum Model High School</h2>

      <ul style={styles.navLinks}>
        <li>
          <Link to="/" style={styles.link}>Home</Link>
        </li>
        <li>
          <Link to="/notices" style={styles.link}>Notices</Link>
        </li>
        <li>Gallery</li>
        <li>Staff</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    backgroundColor: "#f7f2ee",
  },
  logo: {
    fontSize: "26px",
    fontWeight: "600",
    color: "#5a2d2f",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "30px",
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: "none",
    color: "#5a2d2f",
    cursor: "pointer",
  },
};
