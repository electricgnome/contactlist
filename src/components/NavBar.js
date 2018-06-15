import React from "react";

function NavLink(props) {
  const liClassName = props.route === props.activeRoute ? "is-active" : "";
  const href = "#" + props.route;

  return (
    <li className={liClassName}>
      <a href={href}>{props.label}</a>
    </li>
  );
}

function NavBar(props) {
  return (
    <nav className="tabs is-boxed">
      <ul>
        <NavLink label="Home" route="/home" activeRoute={props.activeRoute} />
        <NavLink
          label="Contacts"
          route="/contacts"
          activeRoute={props.activeRoute}
        />
        <NavLink
          label="New Contact"
          route="/new-contact"
          activeRoute={props.activeRoute}
        />
      </ul>
    </nav>
  );
}

export default NavBar