import React from "react";
import Styles from "./style.module.scss";

export interface ShareButtonProps {
  network: string;
  icon: string;
  href: any;
}

export const ShareButton: React.FC<ShareButtonProps> = ({ network, icon, href }) => {
  return (
    <div className={Styles.shareArticle}>
      <a className={Styles.shareArticle__link} href={href} target="_blank" rel="noopener noreferrer" title={network}>
        <img className={Styles.shareArticle__icon} width="25" height="25" src={icon} alt={network} />
      </a>
    </div>
  );
};
