const SocialLink = ({ href, linkClass, socialIcon }) => {
  return (
    <li >
      <a href={href} target="_blank" rel="noreferrer" className={linkClass} >
        <i className={socialIcon}></i >
      </a>
    </li>
  );
};

export default SocialLink;
