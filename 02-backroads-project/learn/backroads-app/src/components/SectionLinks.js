import SectionLink from "./SectionLink";

const SectionLinks = ({ links, linkClass, listClass, listId }) => {
  return (
    <ul className={listClass} id={listId}>
      {links.map(link =>
        <SectionLink key={link.id} linkClass={linkClass} {...link} />)}
    </ul>

  );
};

export default SectionLinks;
