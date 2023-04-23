const SectionLink = ({href, linkClass, text }) => {
  return (
        <li >
          <a href={href} className={linkClass}> {text} </a>
        </li>
  );
};

export default SectionLink;
