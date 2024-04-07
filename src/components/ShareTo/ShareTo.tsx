import React, {useState} from "react";
import Styles from "./style.module.scss";
import { ShareButton } from "./components/ShareButton";
import { IBlogArticle } from "../../types";
import PinterestIconTransparency from "../../images/pinterest-icon-transparency.svg";
import FacebookIconTransparency from "../../images/facebook-icon-transparency.svg";
import ClipBoardIconTransparency from "../../images/clipboard-icon-transparency.png";
import { CopyLinkButton } from "../CopyLinkButton";
import InfoToolTip from "../InfoToolTip/InfoToolTip";

export interface propsShareTo {
  articleDetails: IBlogArticle;
}

export const ShareTo: React.FC<propsShareTo> = ({ articleDetails }) => {
  const [copyLink, setCopyLink] = useState(false);
  const handleShare = (network: string, title: string, url: string): string => {
    switch (network) {
      case "facebook":
        return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
      case "pinterest":
        return `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(
          url
        )}&description=${encodeURIComponent(title)}`;
      default:
        return "";
    }
  };

  return (
    <div className={Styles.shareTo}>
      <p className={Styles.shareTo__title}>Share this article</p>
      <ul className={Styles.shareTo__listIcons}>
        <li className={Styles.shareTo__iconsContainer}>
          <ShareButton
            network={"pinterest"}
            icon={PinterestIconTransparency}
            href={handleShare(
              "pinterest",
              articleDetails.title,
              `https://alenalobacheva.com/blog/${articleDetails.url}`
            )}
          />
        </li>
        <li  className={Styles.shareTo__iconsContainer}>
          <ShareButton
            network={"facebook"}
            icon={FacebookIconTransparency}
            href={handleShare(
              "facebook",
              articleDetails.title,
              `https://alenalobacheva.com/blog/${articleDetails.url}`
            )}
          />
        </li>
        <li  className={Styles.shareTo__iconsContainer}>
          <CopyLinkButton icon={ClipBoardIconTransparency} setCopyLink={setCopyLink}/>
        </li>
      </ul>
      {copyLink && <InfoToolTip text="copied to clipboard" />}
    </div>
  );
};
