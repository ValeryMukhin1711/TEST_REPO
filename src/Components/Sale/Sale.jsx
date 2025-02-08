import React from "react";
import "./Sale.css";
import Items from "../Items/Items";

import bridge from "./../../img/products/bridge.jpg";
import flowerBasket from "./../../img/products/flower.basket.jpg";
import aquariumLock from "./../../img/products/aquarium.lock.jpg";
import secateurs from "./../../img/products/secateurs.jpg";

const Sale = () => {
  return (
    <section className="sale">
      <div className="sale__container">
        <div className="sale_header">
          <h2 className="title-2">Sale</h2>
          <div className="line"></div>
          <button className="all_sales_btn">All sales</button>
        </div>
        <div className="sale__items">
          <Items
            title="Decorative forged bridge"
            img={bridge}
            newPrice={500}
            oldPrice={1000}
          />
          <Items
            title="Flower basket"
            img={flowerBasket}
            newPrice={100}
            oldPrice={150}
          />
          <Items
            title="Aquarium lock"
            img={aquariumLock}
            newPrice={150}
            oldPrice={200}
          />
          <Items
            title="Secateurs"
            img={secateurs}
            newPrice={199}
            oldPrice={240}
          />
        </div>
      </div>
    </section>
  );
};

export default Sale;
