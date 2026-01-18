import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h3 style={styles.logo}>&lt; DeveloperZaid &gt;</h3>

      <div style={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/notes">Notes</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    borderBottom: "1px solid #ddd",
  },
  logo: {
    margin: 0,
  },
  links: {
    display: "flex",
    gap: "15px",
  },
};
