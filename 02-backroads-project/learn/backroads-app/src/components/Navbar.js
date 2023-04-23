import logo from '../images/logo.svg'
import { pageLinks } from '../data';
import { socialLinks } from '../data';
import SocialLinks from './SocialLinks';
import SectionLinks from './SectionLinks';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <SectionLinks links={pageLinks} linkClass="nav-link" listClass="nav-links" listId="nav-links" />
        <SocialLinks links={socialLinks} listClass="nav-icons" linkClass="nav-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
