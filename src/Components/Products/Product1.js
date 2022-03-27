import React, { useEffect, useState } from "react";
import axios from "axios";

function Product1() {

  const [images, setImages] = useState([]);
  const [title, setTitle] = useState([]);
  const [price, setPrice] = useState([]);
  const [comparePrice, setComparePrice] = useState([]);

  useEffect(() => {
    const result = axios
      .get(
        "https://shopnewage.com/collections/home-bar/products/home-bar-2-door-with-drawer-cabinet-21-61004.json"
      )
      .then(function (response) {
        // handle success
        console.log(response.data.product);
        setImages(response.data.product.images[0].src);
        setTitle(response.data.product.title);
        setPrice(response.data.product.variants[1].price);
        setComparePrice(response.data.product.variants[1].compare_at_price);
      });
    console.log(result);
  }, []);
  return (
    <div>
      
      <div
        className="container"
        style={{
          textAlign: "center",
        }}
      >
        <div className="col-4">
          <div className="card" style={{ width: "25rem",padding:'10px',height:"30rem" }}>
            <div>
              <img src={images} className="card-img-top" alt="..." />
            </div>
            <div>
              <h5
                className="product-price"
                style={{ textDecoration: "line-through" }}
              >
                ${comparePrice}
              </h5>
            </div>
            <div>
              <h3 className="product-price" style={{ color: "blue" }}>
                ${price}
              </h3>
            </div>
            <div>
              <h5 className="card-title">{title}</h5>
            </div>

            <div>
              <a
                href="/"
                className="btn btn-primary"
                onClick={() =>
                  window.open(
                    "https://shopnewage.com/collections/home-bar/products/home-bar-2-door-with-drawer-cabinet-21-61004",
                    "_blank"
                  )
                }
              >
                BUY NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Product1;
