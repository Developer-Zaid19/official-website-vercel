export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <p>
        © {year} DeveloperZaid. All rights reserved.
      </p>

      <p>
       YouTube:{" DeveloperZaid "}
        <a
          href="https://www.youtube.com/@Developer-zaid"
          target="_blank"
          rel="noopener noreferrer"
        >
           Visit Channel
        </a>
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "40px",
    padding: "20px",
    textAlign: "center",
    borderTop: "1px solid #ddd",
    backgroundColor: "#fff",
    fontSize: "14px",
    color: "#555",
  },
};
