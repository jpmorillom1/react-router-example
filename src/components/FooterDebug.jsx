import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const FooterDebug = () => {
  let location = useLocation();

  useEffect(() => {
    console.log("Analytics: user navigate into: ", location.pathname);
  }, [location]);

  return (
    <footer>
      <h4>Debug Zone (Location Object):</h4>
      <ul>
        <li>
          <strong>Pathname (Ruta actual):</strong> {location.pathname}
        </li>
        <li>
          <strong>Search (Query String):</strong> {location.search}
        </li>
        <li>
          <strong>Key (ID único de historial):</strong> {location.key}
        </li>
      </ul>
    </footer>
  );
};

export default FooterDebug;
