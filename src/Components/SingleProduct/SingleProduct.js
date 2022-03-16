import { Link, useParams } from "react-router-dom";
import "./SingleProduct.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { api } from "../../api/api";

export function SingleProduct(props) {
  const { loggedInUser } = useContext(AuthContext);
  const params = useParams();

  async function handleDelete() {
    try {
      await api.delete(`/product/delete-product/${params.id}`);
      window.location.href = "/albuns-list";
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="sectionSingle flex flex-row items-center container mx-auto ">
      <div className="img-product justify-center container mx-auto">
        <div className="imgLeft">
          <img className="imgProduct" src={props.img} alt="imgSingleProduct" />
        </div>
      </div>

      <div className="right-description container mx-auto flex flex-col content-center">
        <div className="productTittle">
          <h1>
            {props.artist}:{props.albumName}
          </h1>
          <p>{props.type}</p>
        </div>

        <div className="productPrice mt-2">
          <span>
            {props.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </span>
        </div>

        <div className="productDescription">
          <p>{props.description}</p>
        </div>

        <div className="divBtnProduct mt-3">
          <Link to="#">
            <button type="button" className="btnProduct ">
              ADD TO BAG
            </button>
          </Link>
        </div>
        <div className="pt-3 grid justify-items-end">
          <span>Details: {props.details}</span>
        </div>
        <div>
          <div>
            {loggedInUser && loggedInUser.user.role === "ADMIN" ? (
              <Link to={`/edit-product/${params.id}`}>
                <button className="bg-blue-800 hover:bg-blue-400 text-white font-bold py-2 px-4 mt-3 rounded focus:outline-none focus:shadow-outline mr-6">
                  Edit Product
                </button>
              </Link>
            ) : (
              <span></span>
            )}
          </div>
          <div>
            {loggedInUser && loggedInUser.user.role === "ADMIN" ? (
              <button
                className="bg-red-800 hover:bg-red-400 text-white font-bold py-2 px-6 mt-3 rounded focus:outline-none focus:shadow-outline mr-6 "
                onClick={handleDelete}
              >
                Delete Product
              </button>
            ) : (
              <span></span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
