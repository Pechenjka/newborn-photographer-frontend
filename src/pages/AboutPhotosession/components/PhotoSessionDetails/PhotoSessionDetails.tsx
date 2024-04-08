import React, { useEffect, useState } from "react";
import { TabsAboutPhotoSession } from "../TabsAboutPhotoSession";
import { useAppSelector } from "../../../../redux/hooks";
import { PropsDataTabs } from "../../../../types";
import { Link, useLocation } from "react-router-dom";
import Styles from "./style.module.scss";
import { BackLink } from "../../../../components/BackLink";

export const PhotoSessionDetails = () => {
  const { aboutPhotoSession, active } = useAppSelector((state) => state.editor);
  const { user } = useAppSelector((state) => state.user);
  const { pathname } = useLocation();
  const [arrSessions, setArrSessions] = useState<PropsDataTabs[]>([]);

  useEffect(() => {
    aboutPhotoSession.newborn.length &&
      setArrSessions([
        {
          labelName: "Newborn session",
          nameSession: "newborn",
          id: "tab-btn-1",
          idContent: "content-1",
          getText: aboutPhotoSession.newborn,
          metaTitle: "Newborn Photography Guide: Timing, Setup, Preparation Tips",
          metaDescription:
            "Ready for heartwarming newborn photos? Choose the moment, set up your home, and capture precious early moments stress-free with my tips",
          metaImage: "https://cdn.alenalobacheva.com/staticPhotos/aboutPhotoSession/newborn-session-imageOG.webp",
        },
        {
          labelName: "Family session",
          nameSession: "family",
          id: "tab-btn-2",
          idContent: "content-2",
          getText: aboutPhotoSession.family,
          metaTitle: "Family Photo Prep: Baby outfits, and advice for prep",
          metaDescription:
            "Get ready for your family photo session! Receive recommendations on choosing outfits, accessories, and location.",
          metaImage: "https://cdn.alenalobacheva.com/staticPhotos/aboutPhotoSession/family-session-imageOG.webp",
        },
      ]);
  }, [aboutPhotoSession]);

  return (
    <div className={Styles.photoSessionDetails}>
      {user.role.includes("ADMIN") && (
        <Link to="/editor" className={Styles.photoSessionDetails__linkOnEditor}>
          add text
        </Link>
      )}
      <BackLink linkName="back" path={"/session-information"} />
      {arrSessions.map((session) => {
        if (session.nameSession === active.toLowerCase() || pathname.includes(session.nameSession)) {
          return <TabsAboutPhotoSession session={session} key={session.id} />;
        }
      })}
    </div>
  );
};
