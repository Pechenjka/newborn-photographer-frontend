import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { getOrders } from "../../../../redux/Reducers/orderSlice";
import { IOrderData } from "../../../../types";

export const OrderList = () => {
  const dispatch = useAppDispatch();
  const { dataOrders } = useAppSelector((state) => state.order);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  return (
    <div>
      {dataOrders.map((item: IOrderData) => {
        return (
          <div key={item.orderNumber}>
            <p>{item.orderNumber}</p>
          </div>
        );
      })}
    </div>
  );
};
