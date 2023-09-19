import "./SocialLinks.scss";
import React from "react";
import TelegramIcon from "../../images/telegram-icon.svg";
import InstagramIcon from "../../images/instagram-icon.svg";
import WhatsAppIcon from "../../images/whatsApp-icon.svg";
import FacebookIcon from "../../images/facebook-icon.svg";
import YoutubeIcon from "../../images/youtube-icon.svg";

const SocialLinks: React.FC = () => {
  return (
    <div className="socialLinks">
      <div className="socialLinks__container">
        <a
          className="socialLinks__item-social-networks socialLinks__item-social-networks_whatsApp"
          href="https://wa.me/15164684837"
          target="_blank"
          rel="noopener noreferrer"
          title="whatsApp"
        >
          <img className="socialLinks__item-social-networksImg" src={WhatsAppIcon} alt="whatsApp" />
        </a>
        <a
          className="socialLinks__item-social-networks socialLinks__item-social-networks_telegram"
          //href="https://t.me/@alenchik_berry"
          href="tg://resolve?domain=@alenchik_berry"
          target="_blank"
          rel="noopener noreferrer"
          title="telegram"
        >
          <img className="socialLinks__item-social-networksImg" src={TelegramIcon} alt="telegram" />
        </a>
        <a
          className="socialLinks__item-social-networks socialLinks__item-social-networks_instagram"
          href="https://www.instagram.com/lobachevaphotography/"
          target="_blank"
          rel="noopener noreferrer"
          title="instagram"
        >
          <img className="socialLinks__item-social-networksImg" src={InstagramIcon} alt="instagram" />
        </a>
        <a
          className="socialLinks__item-social-networks socialLinks__item-social-networks_facebook"
          href="https://www.facebook.com/Alen4ikLobacheva?mibextid=9R9pXO"
          target="_blank"
          rel="noopener noreferrer"
          title="facebook"
        >
          <img className="socialLinks__item-social-networksImg" src={FacebookIcon} alt="facebook" />
        </a>
        <a
          className="socialLinks__item-social-networks socialLinks__item-social-networks_youtube"
          href="https://www.youtube.com/channel/UCUn6A0QHTBpfN-_VAuOQZ5g"
          target="_blank"
          rel="noopener noreferrer"
          title="youtube"
        >
          <img className="socialLinks__item-social-networksImg" src={YoutubeIcon} alt="youtube" />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
