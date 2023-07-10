import React from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { TbCurrencyNaira } from "react-icons/tb";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { showToggle } from "../features/Modal/modalSlice";

const CartItems = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { headset } = useSelector((state) => state.head);
  const dispatch = useDispatch();
  const { toggle } = useSelector(state => state.modal)

  // const [allItems, setAllItems] = useState([])
  let total = 0;

  cartItems.forEach((item) => {
    total = total + item.price * item.quantity;
  });

  // useEffect(() => {
  //   if(cartItems.length > 0) {
  //     setAllItems(...allItems, ...cartItems)
  //   }
  //   if(headset.length > 0) {
  //     setAllItems(...allItems, ...headset)
  //   }

  //   console.log(allItems)
  // }, [cartItems, headset])

  return (
    <div className={`fixed top-0 right-[-100%] z-10 h-full w-full md:w-[65%] lg:w-[40%] bg-gray-100  scrollbox box ${toggle ? 'toggle' : ''} `}>
      <div
        className="absolute top-[85px] md:top-24 right-5 font-bold text-lg text-[brown] cursor-pointer"
        onClick={() => dispatch(showToggle())}
      >
        X
      </div>
      <ul className="mt-28 md:mt-32">
        {cartItems.map((item) => {
          return (
            <li className="mb-2 pl-2" key={item.id}>
              <CartItem item={item} />
            </li>
          );
        })}
      </ul>

      {cartItems.length < 1 ? (
        <div className="flex flex-col justify-center items-center space-y-5">
          <AiOutlineShoppingCart size={50} className="text-[brown]" />
          <h1 className="font-bold text-xl"> Your cart is empty! </h1>
          <h1>Browse our categories and discover our best deals!</h1>
        </div>
      ) : (
        <div className="w-[50%] m-auto mt-10">
          <h1 className="font-bold text-lg">Sub Summary</h1>

          <hr className="border border-2xl mb-3" />

          <h1 className=" flex justify-between ">
            Subtotal{" "}
            <span className="flex">
              <TbCurrencyNaira size={23} /> {total}{" "}
            </span>
          </h1>

          <hr className="border border-2xl mb-3" />

          <button
            type="button"
            className="bg-[brown] justify-center rounded-lg flex text-white w-full py-2 mt-4 cursor-pointer mb-20 hover:bg-[#a55252]"
          >
            {" "}
            CHECKOUT &nbsp; &nbsp;{" "}
            <span className="flex">
              <TbCurrencyNaira size={23} />
              {total}
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default CartItems;
