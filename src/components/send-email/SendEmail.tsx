import { Resend } from "resend";
import { useId, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

//   Email JS Implementation

function SendEmail() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    Subject: "",
    message: ""

  });
  const [isSubmitted, setIsSubmitted] = useState(false)



  const id = useId();
  // Functions
  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);
  }
  function handleChange(event) {
    const { value, name } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }
  function handleReset() {
    setFormData({
      fullName: "",
      emailAddress: "",
      Subject: "",
      message: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={id + "firstName"}>From:</label>
      <input
        required
        value={formData.fullName}
        onChange={handleChange}
        name="fullName"
        id={id + "firstName"}
        type="text"
      />
      <label htmlFor={id + "email"}>Email:</label>
      <input
        required
        value={formData.emailAddress}
        onChange={handleChange}
        name="emailAddress"
        id={id + "email"}
        type="email"
      />
      <label htmlFor={id + "subject"}>Subject</label>
      <input
        required
        value={formData.Subject}
        onChange={handleChange}
        name="Subject"
        id={id + "subject"}
        type="text"
      />
      <label htmlFor={id + "message"}>Write a message</label>
      <textarea
        value={formData.message}
        onChange={handleChange}
        id={id + "message"}
        name="message"
      />
      <button type="button" onClick={handleClick}>Home</button>
      <button type="button" onClick={handleReset}>Reset</button>
      <button>Send</button>
    </form>
  );
}

export default SendEmail;
