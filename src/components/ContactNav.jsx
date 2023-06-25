import { NavLink } from "react-router-dom";

function ContactNav() {
  return (
    <ul>
      <li>
        <NavLink to="abhishek">abhishek</NavLink>
      </li>
      <li>
        <NavLink to="niraj">niraj</NavLink>
      </li>
    </ul>
  );
}

export default ContactNav;
