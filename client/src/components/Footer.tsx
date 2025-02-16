import StandardLink from "./StandardLink";
import "../styles/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        Designed and developed by m0hammadr3za
      </p>

      <div className="footer__link">
        <StandardLink href="#!" text="Github" textOnly={true} />
      </div>
    </footer>
  );
}

export default Footer;
