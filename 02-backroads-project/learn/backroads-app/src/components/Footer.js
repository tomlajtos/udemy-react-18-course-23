import SectionLinks from "./SectionLinks";
import SocialIcons from "./SocialIcons";
import { footerLinks } from "../data";
import { socialLinks } from "../data";

const Footer = () => {
  return (
    <footer className="section footer">
      <SectionLinks links={footerLinks} linkClass="footer-link" listClass="footer-links" />
      <SocialIcons links={socialLinks} listClass="footer-icons" linkClass="footer-icon" />
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer; 
