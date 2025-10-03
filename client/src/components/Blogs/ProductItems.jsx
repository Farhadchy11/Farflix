import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Movies/cartSlice.jsx";

const ProductItems = ({ pd }) => {
  const dispatch = useDispatch();

  const addToWishList = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };

    dispatch(addToCart(obj));
  };
  return (
    <div
      key={pd.id}
      class="mx-auto border border-gray-300 shadow-md bg-white pb-4 sm:pb-5 "
    >
      <Link
        to={`/product/${pd.id}`}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={pd.imgSrc} class=" max-h-50 mx-auto  object-scale-down " />
      </Link>
      <div class="text-center mt-10 px-5 text-black mx-auto">
        <h3 class="text-lg font-medium mb-1">{pd.title}</h3>
        <p class="text-base mb-1">{pd.description}</p>
        <button class="text-base font-bold mb-1 ">${pd.price}</button>
        <br />
        <button
          onClick={() =>
            addToWishList(pd.id, pd.price, pd.title, pd.description, pd.imgSrc)
          }
          class="text-center px-4 bg-black text-white "
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItems;
