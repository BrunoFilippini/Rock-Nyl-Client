import { Link } from "react-router-dom";

import "./Section1.css";

export function Section1() {
  return (
    <section className="section1 w-full relative">
      <div className="firstText w-full">
        <div className="container bigText">Your Vinyl Record Web Store</div>
        <Link to="/albuns-list">
          <div className="littleText hover:text-amber-400">
            <p>BUY NOW !</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
