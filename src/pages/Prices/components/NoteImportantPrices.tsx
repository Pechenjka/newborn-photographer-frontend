import React from "react";
import Style from "./style.module.scss";
import Table from "../../PhotoProducts/components/Table/Table";

const NoteImportantPrices: React.FC = () => {
  const arrNoted: Array<string | any> = [
    "All not edited jpeg pictures high-resolution from the session available for purchase 100$.",
    "Additional edited Images available for purchase $25 each.",
    "**There is a retainer fee $100 based on session type is to secure your session time and date. This fee is non-refundable but can be transferred to a different session.",
    "***Extra charge for transportation all outfit and newborn props to your home starts from $60, depends on your address.",
    `The package fee includes an implied discount in the amount of $200 for Clients voluntary signing of a Model Release Form to support the growth of Alena’s Photography's portfolio. In case the session remains Private, Alena Lobacheva values any Clients decisions of that matter and will not use any images on social media, however in this instance, the discount does NOT apply and client is responsible for a full session rate.`,
  ];

  const tableFullSessionRate = [
    { title: ["Package", "Cost,$"] },
    {
      product: [
        { size: "lifestyle", price: "600", type: "newborn" },
        { size: "Newborn Wrapped", price: "700", type: "newborn" },
        { size: "Newborn light", price: "800", type: "newborn" },
        { size: "Newborn Standard", price: "1000", type: "newborn" },
        { size: "Newborn Premium", price: "1500", type: "newborn" },
        { size: "Baby and sitter session", price: "600", type: "baby" },
        { size: "Family & Maternity", price: "600", type: "family" },
        { size: "Christening", price: "600", type: "christening" },
      ],
    },
  ];

  return (
    <div className={Style.noteImportantPrices} id={"newbornImportantInformation"}>
      <div className={Style.noteImportantPrices__container}>
        <h3 className={Style.noteImportantPrices__title}>Important information about photo session</h3>
        <ul className={Style.noteImportantPrices__containerNotes}>
          {arrNoted.map((item) => {
            return (
              <li key={item} className={Style.noteImportantPrices__note}>
                <p>{item}</p>
              </li>
            );
          })}
        </ul>
        <div style={{ maxWidth: "500px", margin: "auto" }}>
          <Table table={tableFullSessionRate} />
        </div>
      </div>
    </div>
  );
};

export default NoteImportantPrices;
