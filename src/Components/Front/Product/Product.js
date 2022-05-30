import React from "react";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Product.css";

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="Card">
      <img className="img" src={product.img} alt={product.name}></img>
      <h3>{product.name}</h3>
      <p className="desc">{product.desc}</p>
      <div>
        <h3>₹{product.price}</h3>
      </div>
      <div>
        <Button
          
          className="Addtocart"
          variant="contained"
          onClick={() => onAdd(product)}
          startIcon={<AddShoppingCartIcon />}
        >
          ADD TO CART
        </Button>
      </div>
    </div>
  );
}
