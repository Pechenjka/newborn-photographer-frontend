import './SocialLinks.scss'
import React from "react";


const SocialLinks:React.FC = () => {
  return(
    <div className="socialLinks">
      <div className="socialLinks__container">
        <a
          className="socialLinks__item-social-networks socialLinks__item-social-networks_whatsApp"
          href="https://wa.me/79269361110"
          target='_blank'
        >{null}</a>
        <a
          className="socialLinks__item-social-networks socialLinks__item-social-networks_telegram"
          href="tg://resolve?domain=newbornphoto_lobacheva"
          target='_blank'
        >{null}</a>
      </div>
    </div>
  )
}

export default SocialLinks;
