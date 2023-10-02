import "./contact.css";
import { AiOutlineFacebook, AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          href="https://www.facebook.com/NaDer.Extranio"
          className="contact youtube"
          target={"blank"}
        >
          <AiOutlineFacebook className="icon" />
          <h2>
             <span>Nad Er (Rarus)</span>
          </h2>
        </a>

        <a
          href=""
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+216</span>
          </h2>
        </a>

        <a href="#" className="contact instagram">
          <AiOutlineInstagram className="icon" />
          <h2>
            instagram <span>Nad Er (Rarus)</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
