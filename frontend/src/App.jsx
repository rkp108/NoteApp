import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./Home";
import AddNote from "./AddNote";

function App() {
  return (
    <Router>
      <div style={styles.appContainer}>
        <header style={styles.header}>
          <h1 style={styles.logo}>📝 Notes App</h1>
          <nav style={styles.nav}>
            <CustomLink to="/" label="🏠 Home" />
            <CustomLink to="/add" label="➕ Add Note" />
          </nav>
        </header>

        <main style={styles.main}>
          <div style={styles.card}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add" element={<AddNote />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

// Custom link with active highlight
function CustomLink({ to, label }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      style={{
        ...styles.navLink,
        backgroundColor: isActive ? "rgba(255,255,255,0.2)" : "transparent",
      }}
    >
      {label}
    </Link>
  );
}

const styles = {
  appContainer: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
  },
  header: {
    backgroundColor: "#4a90e2",
    padding: "20px 0",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  logo: {
    margin: 0,
    color: "white",
    fontSize: "1.8rem",
  },
  nav: {
    marginTop: "10px",
  },
  navLink: {
    margin: "0 15px",
    textDecoration: "none",
    color: "white",
    fontSize: "1.1rem",
    fontWeight: "bold",
    padding: "8px 16px",
    borderRadius: "8px",
    transition: "background 0.3s, color 0.3s",
  },
  main: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 20px",
  },
  card: {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "500px",
  },
};

export default App;
