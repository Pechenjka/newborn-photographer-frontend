import "./Table.scss";

function Table({ table }) {
  return (
    <table className="table">
      <thead>
        <tr className="table__header-container">
          {table.map((item) => {
            if (item.title) {
              return item.title.map((el, index) => {
                return (
                  <th className="table__header" key={index}>
                    {el}
                  </th>
                );
              });
            }
          })}
        </tr>
      </thead>
      <tbody>
        {table.map((item) => {
          if (item.product) {
            return item.product.map((el, index) => {
              return (
                <tr className="table__row-container" key={index}>
                  <th className="table__row">{el.size}</th>
                  {el.printQuality && <th className="table__row">{el.printQuality}</th>}
                  <th className="table__row">{el.price}</th>
                </tr>
              );
            });
          }
        })}
      </tbody>
    </table>
  );
}

export default Table;
