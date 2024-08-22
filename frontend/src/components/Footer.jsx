import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div id="footer">
      <div id="subFooter" className="linkDivs">
        <Link
          className="footerLinks"
          target="https://www.linkedin.com/in/rauf-guven-a76791a6/"
          to="https://www.linkedin.com/in/rauf-guven-a76791a6/"
        >
          LinkedIn{" "}
        </Link>
      </div>
      <div id="subFooter1" className="linkDivs">
        <Link
          className="footerLinks"
          target="https://github.com/mrguven"
          to="https://github.com/mrguven"
        >
          GitHub{" "}
        </Link>
      </div>
      <div id="subFooter2" className="linkDivs">
        <Link className="footerLinks" to="/contact">
          Contact{" "}
        </Link>
      </div>
    </div>
  );
}
