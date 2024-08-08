import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="col-3">
      <div className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src="images/wish.svg" alt="" />
          </Link>
        </div>
        <div className="product-image">
          <img className="img-fluid" src="/images/watch.jpg" alt="product" />
          <img className="img-fluid" src="/images/watch-1.jpeg" alt="" />
        </div>
        <div className="product-details">
          <h6 className="brand">Apple</h6>
          <h5 className="product-title">
            Lorem ipsum dolor sit amet, consectetur adipisicing!
          </h5>
          <ReactStars
            count={5}
            // onChange={ratingChanged}
            size={24}
            value={3}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">₹100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
            <img src="images/prodcompare.svg" alt="" />
            </Link>
            <Link>
            <img src="images/view.svg" alt="" />
            </Link>
            <Link>
            <img src="images/add-cart.svg" alt="" />
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
//2.55