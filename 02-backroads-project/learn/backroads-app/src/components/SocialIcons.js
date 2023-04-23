const SocialIcons = ({  links, listClass, linkClass}) => {
  return (
    <ul className={listClass}>
      {links.map(link =>
        <li key={link.id}>
          <a href={link.href} target="_blank" rel="noreferrer" className={linkClass} >
            <i className={link.socialIcon}></i >
          </a>
        </li>)}
    </ul>
  )
}

export default SocialIcons;
