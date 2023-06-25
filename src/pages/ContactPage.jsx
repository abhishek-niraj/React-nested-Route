import { Outlet } from "react-router-dom";
import ContactNav from "../components/ContactNav";
import PageNav from "../components/PageNav";

function ContactPage() {
  return (
    <div>
      <PageNav />
      Contact Page
      <div className="sidebar">
        <ContactNav> </ContactNav>
        <Outlet />
      </div>
    </div>
  );
}

export default ContactPage;
