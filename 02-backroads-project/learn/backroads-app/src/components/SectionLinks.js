const SectionLinks = ({links, linkClass, listClass, listId}) => {
  return (
    <ul className={listClass} id={listId}>
      {links.map(link =>
        <li key={link.id}>
          <a href={link.href} className={linkClass}> {link.text} </a>
        </li>)}
    </ul>
  )
}

export default SectionLinks;
