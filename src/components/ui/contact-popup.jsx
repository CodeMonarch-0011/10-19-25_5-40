import { BsX } from "react-icons/bs";
import { ContactContextFunction } from "../../context/contact";
import { MessageContextFunction } from "../../context/messages";
import { useEffect, useRef, useState } from "react";
import { openMail } from "../../utils/mailer";

export function ContactPopup() {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    from: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const ref = useRef(null);

  const { closeContactPopup } = ContactContextFunction();
  const { addMessage } = MessageContextFunction();

  function handleChange(e) {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!contactInfo.name) {
      addMessage({
        label: "Full name field is empty",
        type: "warning",
      });
      return;
    }

    if (!contactInfo.from) {
      addMessage({
        label: "Email field is empty",
        type: "warning",
      });
      return;
    }

    if (!contactInfo.message) {
      addMessage({
        label: "Message field is empty",
        type: "warning",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await openMail(contactInfo);
      // console.log(response);
      addMessage({
        label: "Message sent successfully",
        type: "Success",
      });

      setLoading(false);

      setContactInfo({
        name: "",
        from: "",
        message: "",
      });
    } catch (err) {
      // console.log(err);
      addMessage({
        label: "Error Occurred, Try again",
        type: "error",
      });

      setLoading(false);
    }

    //
  }

  function handleBlur(e) {
    if (!ref.current.contains(e.target)) {
      closeContactPopup();
    }
  }

  useEffect(() => {
    document.addEventListener("pointerdown", handleBlur);

    return () => document.removeEventListener("pointerdown", handleBlur);
  }, []);

  return (
    <div className="contact-popup" ref={ref}>
      <span onClick={closeContactPopup} className="close-popup">
        <BsX />
      </span>

      <span className="popup-hdr">Get in Touch</span>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={contactInfo.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="from"
          placeholder="Email"
          value={contactInfo.from}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={contactInfo.message}
          onChange={handleChange}
        ></textarea>

        {!loading ? (
          <button>Get in Touch</button>
        ) : (
          <button type="button" disabled={true}>
            {" "}
            <div className="loader" />{" "}
          </button>
        )}
      </form>
    </div>
  );
}
