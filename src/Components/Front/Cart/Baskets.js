import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button } from "@mui/material";
import Product from "../Product/Product";
import "./Cart.css";


export default function Baskets(props) {
  const { cartItems, onAdd, onRemove } = props;
  return (
    <aside className="block col-1">
      <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
      {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div className="col-2">{item.name}</div>

          <div className="col-2">
            <Button onClick={() => onAdd(item)} className="add">
              <AddCircleIcon />
            </Button>

            <Button onClick={() => onRemove(item)} className="remove">
              <DeleteIcon />
            </Button>
          </div>

          <div className="col-2 text-right">
            {item.qty} x ₹{item.price}
          </div>
        </div>
      ))}
    </aside>
  );
}
