import { TbCurrencyNaira } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../features/Cart/cartSlice";


const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const increase = () => {
    dispatch(increaseQuantity(item.id))
  }

  const decrease = () => {
    dispatch(decreaseQuantity(item.id))
  }

  const remove = () => {
    dispatch(removeFromCart(item.id))
  }


  return (
    <div className="ml-2">
      <div className="flex md:space-x-7 items-center  pr-10">
        <img
          src={item.imageUrl}
          alt=""
          className="card-img-top"
          style={{ width: "5rem", height: "5rem" }}
        />

        <h5 className="">{item.name}</h5>

        <p className="pl-14 flex ">
          <TbCurrencyNaira size={23} /> {item.price}{" "}
        </p>
      </div>
      <div className="flex justify-between  pr-4 md:pr-16 mb-5">
        <button
          type="button"
          className="cursor-pointer text-[brown] pl-3 font-bold "
          onClick={remove}
        >
          Remove
        </button>
        <div className="flex space-x-2">
          <button
            type="button"
            className="cursor-pointer bg-[brown] px-4 text-white mx-auto font-bold text-xl rounded-md hover:bg-[#a55252] "
            onClick={decrease}
          >
            -
          </button>
          <p className="font-bold text-lg">{item.quantity} </p>
          <button
            type="button"
            className="cursor-pointer bg-[brown] px-4 text-white mx-auto font-bold text-xl rounded-md hover:bg-[#a55252]"
            onClick={increase}
          >
            +
          </button>
        </div>
      </div>

      <hr className="border border-2xl mb-3" />
    </div>
  );
};

export default CartItem;
