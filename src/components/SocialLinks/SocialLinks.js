import './SocialLinks.scss'
function SocialLinks() {
  return(
    <div className="socialLinks">
      <div className="socialLinks__container">
        <a
          className="socialLinks__item-social-networks socialLinks__item-social-networks_whatsApp"
          href="https://wa.me/79269361110"
          target='_blank'
          rel="noreferrer"
        >{null}</a>
        <a
          className="socialLinks__item-social-networks socialLinks__item-social-networks_telegram"
          href="tg://resolve?domain=lobachevpetr"
          target='_blank'
          rel="noreferrer"
        >{null}</a>
        <a
          className="socialLinks__item-social-networks socialLinks__item-social-networks_instagram"
          href="https://www.instagram.com/alina_mamochka_inlove/"
          target='_blank'
          rel="noreferrer"
        >{null}</a>
      </div>
    </div>
  )
}

export default SocialLinks;
