/* eslint-disable react/jsx-no-target-blank */
import gh from "./images/github.svg"
import mail from "./images/envelope-regular.svg"
import linked from "./images/linkedin.svg"
export default function Footer(){
    return(<footer>
        <div className="footer-button">
          <img src={gh} alt="" />
          <a href="https://github.com/MohedeenT" target="_blank">GitHub</a>
        </div>
        <div className="footer-button">
          <img src={mail}alt="" />
          <a href="mailto:mohedine.tabbara@gmail.com" target="_blank">Email</a>
        </div>
        <div className="footer-button">
          <img src={linked} alt="" /><a
            href="https://www.linkedin.com/in/mohedine-tabbara-534720236/"
            target="_blank"
            >LinkedIn</a>
        </div>
      </footer>)
}