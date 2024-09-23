import { useState } from "react";
import "./styles.css";

const About = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow((prevState) => !prevState);
  return (
    <section id="about">
      <h1>About Me</h1>
      <p>
        My name is Jose Izquierdo, I'm 23 years old and I was born in Cuba, but
        currently reside in the United States. Since childhood, my fascination
        with computers led me to decide early on that I wanted to explore their
        creative potential. I began my studies at the{" "}
        <abbr title="University of Informatics Sciences">UCI</abbr> in Cuba,
        where I gained a solid foundation in programming during my first year
        with C++. After immigrating to the United States, I decided not to
        abandon my passion for coding. I joined Code The Dream for one year,
        where I received rigorous, intensive training in web development.
        <span className={show ? "less" : "more"}>
          This program has allowed me to deepen my skills and prepare myself for
          the challenges of today's digital world. Currently, I have plans to
          continue my university education to obtain a Bachelor's degree in
          Computer Science. I am refining my skills as a Front End Developer
          while also exploring Back End Development to gain a comprehensive
          understanding of software development, which has been my ultimate goal
          from the beginning.
        </span>
      </p>
      <button onClick={handleShow}>{show ? "Read Less" : "Read More"}</button>
    </section>
  );
};
export default About;
