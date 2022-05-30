import React from "react";
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });


const Navbar = (props) => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const{countCartItems} = props;
  return (
    <>
      <header className="Navbar">
        
     
        <ul>
          <li>
          <Link  to="/Home"><HomeIcon/><br/>
          Home
          </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/Main"><CategoryIcon/><br/>
            Product</Link>
          </li>
        </ul>
        {/* <ul>
          <li>
            <Link to="/Cart">Cart</Link>
          </li>
        </ul> */}
        <ul>
          <li>
            {/* <Link to="/Basket"><ShoppingCartIcon/><br/>
            Cart</Link>
            {' '}
            {countCartItems?(
            <button className="badge">{countCartItems}</button>
            ):
              ('')

            } */}


          
            
            
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/About"><InfoIcon/><br/>
            About Us</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link className="sign" to="">
              <ExitToAppIcon/><br/>
              Exit
            </Link>
          </li>
        </ul>
        <ul>
          <li>
          
    
           <Brightness7Icon />
            
          </li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
