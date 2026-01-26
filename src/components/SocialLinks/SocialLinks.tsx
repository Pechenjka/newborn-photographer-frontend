import "./SocialLinks.scss";
import React from "react";
import TelegramIcon from "../../images/telegram-icon.svg";
import InstagramIcon from "../../images/instagram-icon.svg";
import WhatsAppIcon from "../../images/whatsApp-icon.svg";
import FacebookIcon from "../../images/facebook-icon.svg";
import YoutubeIcon from "../../images/youtube-icon.svg";
import TiktokIcon from "../../images/tiktok-icon.svg";
import { SocialLink } from "../../types";

const socialLinks: SocialLink[] = [
  {
    name: "WhatsApp",
    href: "https://wa.me/15164684837",
    icon: WhatsAppIcon,
    aria: "Open WhatsApp",
  },
  {
    name: "Telegram",
    href: "tg://resolve?domain=@alenchik_berry",
    icon: TelegramIcon,
    aria: "Open Telegram",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/lobachevaphotography/",
    icon: InstagramIcon,
    aria: "Open Instagram",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@lobachevaphotography/",
    icon: TiktokIcon,
    aria: "Open TikTok",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/Alen4ikLobacheva?mibextid=9R9pXO",
    icon: FacebookIcon,
    aria: "Open Facebook",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCUn6A0QHTBpfN-_VAuOQZ5g",
    icon: YoutubeIcon,
    aria: "Open YouTube",
  },
];

const SocialLinks: React.FC = () => {
  return (
    <div className="socialLinks">
      <div className="socialLinks__container">
        {socialLinks.map(({ name, href, icon, aria }) => (
          <a
            key={name}
            className={`socialLinks__item-social-networks socialLinks__item-social-networks_${name.toLowerCase()}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer nofollow"
            title={name}
            aria-label={aria}
          >
            <img className="socialLinks__item-social-networksImg" src={icon} alt={name} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
