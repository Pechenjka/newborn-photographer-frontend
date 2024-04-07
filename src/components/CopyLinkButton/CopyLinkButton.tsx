import React from "react";
import Styles from "./style.module.scss";
import { CopyToClipboard } from "react-copy-to-clipboard";

export interface PropsCopyLink {
  icon: string;
  setCopyLink: any;
}

export const CopyLinkButton: React.FC<PropsCopyLink> = ({ icon, setCopyLink }) => {
  const handleCopy = () => {
    const url = window.location.href;
    //copy to clipBoard
    navigator.clipboard.writeText(url);
    // alert
    setCopyLink(true);
    setTimeout(() => {
      setCopyLink(false);
    }, 3000);
  };

  return (
    <CopyToClipboard text={window.location.href}>
      <button className={Styles.copyLink} title="copy link" onClick={handleCopy}>
        <img className={Styles.shareArticle__icon} width="25" height="25" src={icon} alt="copy link" />
      </button>
    </CopyToClipboard>
  );
};
