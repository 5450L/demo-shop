import React from "react";
import footerStyles from "./Footer.module.css";
import { IoLogoLinkedin } from "react-icons/io";
import { TbBrandTelegram } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";

const Footer = (props) => {
  return (
    <footer>
      <p>Made by Sysa Oleg</p>
      <div className={footerStyles.contacts}>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/oleg-sysa-49313a256/">
              <span className={footerStyles.icon}>
                <IoLogoLinkedin />
              </span>
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://t.me/l5450l">
              <span className={footerStyles.icon}>
                <TbBrandTelegram />
              </span>
              Telegram
            </a>
          </li>
          <li>
            <a href="https://github.com/5450L">
              <span className={footerStyles.icon}>
                <BsGithub />
              </span>
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
