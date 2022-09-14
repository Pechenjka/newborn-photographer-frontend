import React from "react";
import InfoToolTip from "../InfoToolTip/InfoToolTip";

export interface PropsShowInfoToolTip {
  confirmation?: boolean;
  error: any;
  textErrorMessage: string;
  textConfirmMessage: string;
}

export const ShowInfoToolTip: React.FC<PropsShowInfoToolTip> = ({
  confirmation = false,
  error = false,
  textErrorMessage,
  textConfirmMessage,
}) => {
  return (confirmation || error) && <InfoToolTip text={error ? textErrorMessage : textConfirmMessage} error={error} />;
};
