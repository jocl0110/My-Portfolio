import "./styles.css";
import emaijs from "emailjs-com";
import { useId, useState } from "react";
import { useNavigate } from "react-router-dom";

function SendEmail() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    Subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //   Email JS Implementation

  const id = useId();
  // Functions
  function handleSubmit(event) {
    event.preventDefault();
    handleReset();
    setIsLoading(true);
    emaijs
      .send(
        "service_08ar3wf",
        "template_xgil5yc",
        {
          from_name: formData.fullName,
          from_email: formData.emailAddress,
          subject: formData.Subject,
          message: formData.message,
        },
        "PlEZARK5lBrOiVsIw"
      )
      .then(
        (result) => {
          console.log(result.text);
          setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
            setTimeout(() => {
              setIsSubmitted(false);
            }, 4000);
          }, 3000);
        },
        (error) => {
          console.error(error.text);
          setIsLoading(false);
        }
      );
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
      <button type="button" onClick={handleClick}>
        Home
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
      <button>Send</button>
      {isLoading && (
        <div className="sk-chase">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
        </div>
      )}
      {isSubmitted && <p>Email Sent</p>}
    </form>
  );
}

export default SendEmail;
