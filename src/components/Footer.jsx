/* eslint-disable react/jsx-no-target-blank */
import gh from "./images/github.svg"
import mail from "./images/envelope-regular.svg"
import linked from "./images/linkedin.svg"
export default function Footer(){
    return(<footer>
        <div className="footer-button">
          <a href="https://github.com/MohedeenT" target="_blank"><img src={gh} alt="" /></a>
        </div>
        <div className="footer-button">
          <a href="mailto:mohedine.tabbara@gmail.com" target="_blank"><img src={mail}alt="" /></a>
        </div>
        <div className="footer-button">
          <a
            href="https://www.linkedin.com/in/mohedeen-tabbara/"
            target="_blank"
            ><img src={linked} alt="" /></a>
        </div>
      </footer>)
}