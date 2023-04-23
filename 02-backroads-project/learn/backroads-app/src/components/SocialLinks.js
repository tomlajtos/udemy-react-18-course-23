import SocialLink from './SocialLink.js';

const SocialIcons = ({  links, listClass, linkClass}) => {
  return (
    <ul className={listClass}>
      {links.map(link =>
        <SocialLink key={link.id} linkClass={linkClass} {...link} />)}
    </ul>
  );
};

export default SocialIcons;
