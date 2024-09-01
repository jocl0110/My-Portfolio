import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";



const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <footer id="contact">
            <p>Contact With Me</p>
            <a target="_blank" href="https://github.com/jocl0110"><FaGithub color="#fff"/></a>
            <a target="_blank" href="https://www.linkedin.com/in/jose-luis-izquierdo-hernandez-938064245"><FaLinkedin href="" color="#fff" /></a>
            <a target="_blank" href="https://x.com/jocl0110"><FaSquareXTwitter color="#fff" /></a>
            <p>©Jose Izquierdo {date}</p>
        </footer>
    )
}

export default Footer