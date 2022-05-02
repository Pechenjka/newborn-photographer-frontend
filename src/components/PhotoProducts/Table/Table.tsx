import "./Table.scss";
import React from "react";
import {IProduct, ITable, ITablesPhotoProducts} from "../../../types";

const Table: React.FC<ITable> = ({ table }) => {
  return (
    <table className="table">
      <thead>
        <tr className="table__header-container">
          {table.map((item: ITablesPhotoProducts) => {
            if (item.title) {
              return item.title.map((el: string, index: number) => {
                return (
                  <th className="table__header" key={index}>
                    {el}
                  </th>
                );
              });
            }
            return item.title;
          })}
        </tr>
      </thead>
      <tbody>
        {table.map((item: ITablesPhotoProducts) => {
          if (item.product) {
            return item.product.map((el: IProduct, index: number) => {
              return (
                <tr className="table__row-container" key={index}>
                  <th className="table__row">{el.size}</th>
                  {el.printQuality && <th className="table__row">{el.printQuality}</th>}
                  <th className="table__row">{el.price}</th>
                </tr>
              );
            });
          }
          return item.product;
        })}
      </tbody>
    </table>
  );
};

export default Table;
