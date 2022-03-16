import "./LittleCard.css";
import { Link } from "react-router-dom";
import { Button } from "../Button";

export function LittleCard(props) {
  return (
    <div className="containerCard">
      <div className="little-card">
        <img src={props.img} alt="img" className="card__img" />
        <div className="card__content">
          <div className="card__data">
            <h1 className="card__title">
              {props.artist}: {props.albumName}
            </h1>
            <span className="card__preci">{props.price}</span>
            <p className="card__description">{props.description}</p>
            <Link to={`/product/album/${props.linkDisc}`}>
              <Button className="bg-stone-800 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-6">
                Buy Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
