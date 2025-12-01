import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./FooterDebug.css";

const FooterDebug = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("Analytics: user navigate into: ", location.pathname);
  }, [location]);

  return (
    <footer className="footer-debug">
      <h4>🔍 Debug Zone</h4>
      <div className="debug-info">
        <span><strong>Pathname:</strong> {location.pathname}</span>
        <span><strong>Search:</strong> {location.search || "—"}</span>
        <span><strong>Key:</strong> {location.key}</span>
      </div>
    </footer>
  );
};

export default FooterDebug;
