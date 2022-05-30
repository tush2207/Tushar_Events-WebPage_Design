import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button } from "@mui/material";
// import "./Basket.css";
import { Grid, Typography, ButtonBase} from "@mui/material";

import Product from "../Product/Product";
export default function CardComplex(props) {
  const { cartItems, onAdd, onRemove } = props;

  const gstQtyPrice = (price, qty) => {
    console.log(price * qty + price * 0.12);
    return price * qty + price * 0.12;
  };

  return (
    <>
      <div>
        <h3 className="cart">Cart Items</h3>
        <hr />
        {cartItems.length === 0 ? (
          <h3 className="emptycart">Cart is Empty</h3>
        ) : (
          <>
            {cartItems.map(
              (item) => {
                return (
                  <Grid container spacing={2} key={item.id}>
                    <Grid item>
                      <ButtonBase sx={{ width: 128, height: 128 }}>
                        <img
                          src={item.img}
                          alt="Image"
                          width="100px"
                          height="100px"
                        />
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography
                            gutterBottom
                            variant="subtitle1"
                            component="div"
                          >
                            Standard license
                          </Typography>
                          {/* <Typography variant="body2" gutterBottom>
                            Full resolution 1920x1080 • JPEG
                          </Typography> */}
                          <Typography variant="body2" color="text.secondary">
                            {item.id}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography
                            sx={{ cursor: "pointer" }}
                            variant="body2"
                          >
                            <Button onClick={() => onAdd(item)} className="add">
                              <AddCircleIcon />
                            </Button>
                          </Typography>
                        </Grid>

                        <Grid item>
                          <Typography
                            sx={{ cursor: "pointer" }}
                            variant="body2"
                          >
                            <Button
                              onClick={() => onRemove(item)}
                              className="remove"
                            >
                              <DeleteIcon />
                            </Button>
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1" component="div">
                          {gstQtyPrice(item.price, item.qty)}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                );
              }

              //       <tr>
              //         <td>{item.id}</td>
              //         <td>
              //         </td>
              //         <td>{item.name}</td>
              //         <td>{item.qty}</td>
              //         <td>{item.price}</td>
              //         <td>{(item.price*0.12)*(item.qty)}</td>
            )}
          </>
        )}
      </div>
    </>
  );
}
