import { useEffect, useState } from "react";
import "./styles.css";
import { faL } from "@fortawesome/free-solid-svg-icons";

const Home = ({ text, speed = 100, delay = 1000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = text[textIndex];

    if (!isDeleting && index < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && index > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (index === currentText.length && !isDeleting) {
      setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && index === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % text.length);
    }
  }, [index, text, speed, isDeleting, textIndex, delay]);

  return (
    <section>
      <div id="home" className="home-screen">
        <h1>
          Jose<span>/</span>Izquierdo
        </h1>
        <p className="typing">
          {displayedText}
          <span className="cursor">|</span>
        </p>
      </div>
    </section>
  );
};

export default Home;
