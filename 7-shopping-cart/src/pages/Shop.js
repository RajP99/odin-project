import React from 'react'
import { Link } from 'react-router-dom'; 
import Catalog from "../assets/catalog.json";
import "../styles/Shop.css"

const Shop = () => {
    const planets = Catalog;

    function importAll(r) {
        let images = {};
        r.keys().map((item) => {
          return (images[item.replace("./", "")] = r(item));
        });
        return images;
      }
    
    const images = importAll(
        require.context("../assets/images", false, /\.(png|jpe?g|svg)$/)
    );

    return (
        <div>
            {(planets).map((planet) => {
                let image_url = images[planet.imgs[0]]["default"];
                return (
                    <div className="item-containter-shop">
                        <Link key={planet.id} to={`shop/${planet.id}`}>
                            <img className="item-shop" src={image_url} alt={planet.name}></img>
                        </Link>
                    </div>
                    
                )
        })}
        </div>
    )
}

export default Shop
