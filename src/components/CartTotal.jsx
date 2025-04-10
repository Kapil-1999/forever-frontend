import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Title from "./Title";

const CartTotal = () => {
  const { curreny, delivery_fee, getCartAmount } = useContext(AppContext);
  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {curreny}
            {getCartAmount()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {curreny}
            {delivery_fee}.00
          </p>
        </div>
        <hr/>
        <div className="flex justify-between">
            <b>Total</b>
            <p>{curreny}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}</p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
